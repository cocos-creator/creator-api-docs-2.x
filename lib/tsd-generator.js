/**
 *  This script will generate .d.tsd for firedoc compatible javascript files.
 * steps to use the it in VSCode are:
 * - invoke generateTsd() to get the file content and save it in a .d.ts file, such as 'cocos.d.ts'
 * - copy cocos.d.ts into 'PROJECT_ROOT/typings/cocos', PROJECT_ROOT is root of your creator project
 * - now you can use VSCode to open your project to edit javascript files with cocos api auto completing
 */

'use strict';

const Firedoc = require('firedoc').Firedoc;

var numOfTab = 0;
var modules = null;
var parsingModule = null;

var basicTypeMap = {
    undefined: 'void',
    Null: 'void',
    null: 'void',
    Number: 'number',
    Integer: 'number',
    integer: 'number',
    String: 'string',
    Boolean: 'boolean',
    Any: 'any',
    Array: 'any[]',
    array: 'any[]',
    Object: 'any',
    object: 'any',
    '*'   : 'any',
    function: 'Function',
    '...*': 'any[]'
};

function transforType(type) {
    if (basicTypeMap[type]) {
        return basicTypeMap[type];
    }
    if (type.endsWith('[]')) {
        return transforType(type.slice(0, -2)) + '[]';
    }
    if (type.includes('|')) {
        // should transfor all types if it includes '|'
        return type.split('|')
                   .map(transforType)
                   .join('|');
    }
    return fixRef(type, true);
}

function forin(obj, cb) {
    for (var prop in obj) {
        cb(obj[prop], prop)
    }
}

var REG_IDENTIFIER_WITH_DOT = /^[$A-Za-z_][0-9A-Za-z_$\.]*$/;

// get modules informations
// the output is
// moudles = {
//     module: {
//         classes: {
//             members: {
//                 // functions, properties are members
//             }
//         }
//     }
// }
function computeModules(ast) {
    var modules = {};

    // get module name
    for (var moduleName in ast.modules) {
        if (!REG_IDENTIFIER_WITH_DOT.test(moduleName)) {
            // console.log(moduleName);
            continue;
        }
        var module = ast.modules[moduleName];
        modules[moduleName] = {
            name: module.namespace,
            classes: {},
            // nested classes, such as cc.Node.EventType
            nestClasses: [],
            members: [],
            description: module.description
        };
    }

    // get class info
    forin(ast.classes, function(c, className) {
        // if (c.access === 'private') {
        //     continue;
        // }
        // if ('static' in c && !c.isEnum) {
        //     // static class, export as namespace
        //     modules[className] = {
        //         name: c.namespace,
        //         classes: {},
        //         // nested classes, such as cc.Node.EventType
        //         nestClasses: [],
        //         members: [],
        //         description: c.description
        //     };
        //     // console.log('import static class', className, 'as namespace');
        // }
        // else {
            // normal class
        modules[c.module].classes[className] = c;
        c.members = c.members || [];

        // record nested class
        if (className.includes('.')) {
            modules[c.module].nestClasses.push(c);
        }

        // }
    });

    // if a memeber is a function, we should handle its parameter type and return type
    // parameter:  para1: Type|Null -> para1? Type
    // return type: Type|Null -> Type
    function formatMember (member) {
        if (member.itemtype != 'method') {
            return;
        }

        // format return type
        if (member.return) {
            var type = member.return.type;
            var types = type.split('|');
            if (types.length > 1 ||
                types[1] === 'Null' ||
                types[1] === 'null') {
                member.return.type = types[0];
            }
        }
    }

    // get members
    for (var i = 0; i < ast.members.length; ++i) {
        var member = ast.members[i];
        if (member.name === '') {
            continue;
        }
            
        var moduleName = member.module;
        var module = modules[moduleName];
        if (!module) {
            continue;
        }

        // ignore private members
        if (member.access && member.access  === 'private') {
            continue;
        }

        formatMember(member);

        var className = member.clazz;
        var isModuleMember = className === '';
        if (isModuleMember) {
            // it is a module member
            module.members.push(member);
        }
        else {
            var cls = module.classes[className];
            if (cls) {
                // it is a class member
                cls.members.push(member);
            }
            else {
                var subModule = modules[className];
                if (subModule) {
                    // console.log('importing', className, 'as namespace for member', member.name);
                    subModule.members.push(member);
                }
                else {
                    console.error('Can not find class or module named', className, 'for member', member.name);
                }
            }
        }
    }

    // remove nest classes from module.classes
    forin(modules, function(module) {
        module.nestClasses.forEach(function (nestClass){
            delete module.classes[nestClass.name];
        });
    });

    return modules;
}

function inheritImplements (ast, modules) {
    forin(modules, function (module) {
        function inherit (cls) {
            if (!cls.uses) {
                return;
            }
            forin(cls.uses, function (name) {
                var use = module.classes[name];
                if (!use) {
                    use = module.nestClasses.find(function (item) {
                        return item.name === name;
                    });

                    if (!use) {
                        return console.error('Can not find "%s" in module "%s" to mix into "%s"', name, module.name, cls.name);
                    }
                }
                use.members.forEach(function (baseMember) {
                    var index = cls.members.findIndex(x => x.name === baseMember.name);
                    if (index === -1) {
                        // console.log('Mix "%s.%s" into "%s"', name, baseMember.name, cls.name);
                        cls.members.push(baseMember);
                    }
                });
            });
        }
        forin(module.classes, inherit);
        forin(module.nestClasses, inherit);
    });
}

function fixRef (name, quiet) {
    let found = parsingModule.classes[name] || parsingModule.nestClasses.find(x => x.name === name);
    if (found) {
        return name;
    }

    for (var moduleName in modules) {
        let module = modules[moduleName];
        let found = module.classes[name] || module.nestClasses.find(x => x.name === name);
        if (found) {
            // if (quiet) {
            //     console.log('Convert %s to %s', name, moduleName + '.' + name);
            // }
            return moduleName + '.' + name;
        }
    }
    if (!quiet) {
        // 如果 name 包含点号，可能会导致这里报错，并且 API 文档将解析不出父类
        console.error('Can not find "%s" in modules', name);
    }
    return name;
}

// function fixCrossModuleRef (ast, modules) {
//     forin(modules, function (module) {
//         let fixRefInModule = fixRef.bind(null, module);
//         forin(module.classes, function (cls) {
//             if (cls.extends) {
//                 cls.extends = fixRefInModule(cls.extends);
//             }
//             if (cls.uses) {
//                 cls.uses = cls.uses.map(fixRefInModule);
//             }
//         });
//     });
// }

// should add correct tab before \n
function formatOutput(str) {
    var tabs = '\t'.repeat(numOfTab);
    return transformLines(str, x => tabs + x);
}

var specialEnumType = {
    '*': true,
    '+': true,
    '-': true,
    '/': true,
    ';': true,
    '=': true,
    ',': true,
    '.': true,
    '[': true,
    ']': true
};

var ignoreEnumType = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
};

function getAccess (type, member, notExport, isStatic) {
    if (!notExport) {
        return 'export ' + type + ' ';
    }
    var access = '';
    if (member.access === 'protected') {
        access = 'protected ';
    }
    if (isStatic || 'static' in member) {
        access += 'static ';
    }
    return access;
}

// @notExport true if it is a member property of a class or not
function generateProperty(member, notExport, isStatic) {
    var output = '\n';
    if (member.description) {
        output += '/** ' + member.description + ' */\n';
    }
    var prefix = getAccess('var', member, notExport, isStatic);
    if (member._raw && member._raw.typescript) {
        output += transformLines(member._raw.typescript, x => prefix + x + ';');
    }
    else {
        output += prefix + member.name + ': ' + transforType(member.type) + ';';
    }

    return formatOutput(output);
}

function generateParam (param) {
    var type;
    if (param.props) {
        // parameter may be an Object or a Function, and it has its properties
        if (param.type === 'Object') {
            // @param {Object} options
            // @param {String} options.libraryPath
            // @param {Object} options.mountPaths
            // @param {Object} [options.rawAssets]
            // @param {String} [options.rawAssetsBase]
            type = '{';
            forin(param.props, function(prop) {
                type += generateParam(prop) + '; ';
            });
            type += '}';
        }
        else {
            // @param {Function} callback
            // @param {Error} callback.error
            // @param {String} callback.url - the url of raw asset or imported asset
            // @param {Boolean} callback.raw - indicates whether the asset is raw asset
            // @param {Function} callback.ctorInEditor - the actual type of asset, used in editor only
            type = '(';

            forin(param.props, function(prop) {
                type += generateParam(prop) + ', ';
            });

            // remove last ', '
            type = type.slice(0, -2);

            // callback doesn't care about return value, all informations are in parameters
            type += ') => void';
        }
    }
    else {
        type = transforType(param.type);
    }

    if (param.multiple) {
        return '...' + param.name + ': ' + type + '[]';
    }
    else if (param.optional) {
        return param.name + '?: ' + type;
    }
    else {
        return param.name + ': ' + type;
    }
}

function transformLines (tagContent, transform) {
    return tagContent.split('\n')
                     .map(transform)
                     .join('\n');
}

// @notExport true if it is a member functioin of a class
function generateFunction(member, notExport, isStatic) {
    var output = '';
    var needComments = member.description || member.params || member.example;

    if (needComments) {
        output += '\n/**\n';
    }

    // function description
    if (member.description) {
        output += member.description;
    }

    // parameters doc
    if (member.params) {
        member.params.forEach(function(param) {
            // it is useful to output parameter only it has a description
            // if we output a @param without description, then the example
            // section will be the description, it is not what we need
            // TODO - if optdefault' in param
            output += '\n@param ' + param.name + ' ' + (param.description || param.name);
        });
    }

    if (member.example) {
        output += '\n\n@example \n' + member.example;
    }
    
    if (needComments) {
        output += ' \n*/';
    }
    
    output += '\n';

    var prefix = getAccess('function', member, notExport, isStatic);

    if (member._raw && member._raw.typescript) {
        output += transformLines(member._raw.typescript, x => prefix + x + ';');
    }
    else {
        output += prefix + member.name + '(';
        // parameters
        if (member.params) {
            member.params.forEach(function(param) {
                output += generateParam(param) + ', ';
            });
            // remove last ', '
            output = output.slice(0, -2);
        }
        output += ')';

        // return type
        if (member.name !== 'constructor') {
            if (member.return) {
                output += ': ' + transforType(member.return.type);
            }
            else {
                output += ': void';
            }
        }

        output += ';';
    }
    return formatOutput(output);
}

function generateMember(member, notExport, isStatic) {
    var output = '';
    
    // if a parameter accepts multiple types, then we should generates override functions
    // for each type
    if (member.itemtype === 'method') {
        output = generateFunction(member, notExport, isStatic);
    }
    else if (member.itemtype === 'property') {
        output = generateProperty(member, notExport, isStatic);
    }
    else {
        // what's the type?
        // do nothing
    }
    
    return output;
}

function generateEnum(e) {
    var modules = e.name.split('.');
    var enumName = modules.pop();
    var output = '';
    
    // export modules if it exists
    if (modules.length > 0) {
        modules.forEach(function(module) {
           output += startModule(module, null, true);
        });
    }
    
    // description +  declaration
    var enumOutput = '\n/** ' + e.description + ' */\n' +
                     'export enum ' + enumName + ' {';
    output += formatOutput(enumOutput);
    ++numOfTab;
    
    // members
    enumOutput = '';
    forin(e.members, function(member) {
        // ignore some enum keys, because these keys are not valid in ts
        if (ignoreEnumType[member.name]) {
            return;
        }
        
        if (specialEnumType[member.name]) {
            // assign all key to 0 because it only needs type information
            enumOutput += "\n'" + member.name + "' = 0,";
        }
        else {
            enumOutput += '\n' + member.name + ' = 0,';
        }
    });
    enumOutput = formatOutput(enumOutput);
    output += enumOutput;
    
    // end of enum
    --numOfTab;
    output += formatOutput('\n}');
    
    // end modules if it exists
    if (modules.length > 0) {
        modules.forEach(function(module) {
            output += endModule();
        });
    }
    
    return output;
}

// should put class into correct module,
// for example, Layout.Type should be declared like
// export module Layout {
//     export class Type {
        
//     }
// }
function startClass(clazz) {
    var modules = clazz.name.split('.');
    clazz.name = modules.pop();
    var output = '';
    
    function generateOut(clazz) {
        var des = '\n/** ' + clazz.description + ' */\n';
        
        // class declaration
        var extend = clazz.extends;
        var decl = 'export class ' + clazz.name;
        if (extend) {
            decl += ' extends ' + fixRef(extend);
        }
        var mixins = clazz.uses;
        if (mixins) {
            decl += ' implements ' + mixins.map(fixRef).join(', ');
        }
        decl += ' {';

        return formatOutput(des + decl);
    }
    
    // put class into correct namespace
    if (modules.length > 0) {
        modules.forEach(function(moduleName) {
            output += startModule(moduleName, null, true);
        });
        
        output += generateOut(clazz);
        clazz.modules = modules;
    }
    else {
        output += generateOut(clazz);
    }

    ++numOfTab;
    return output;
}

function endClass(clazz) {
    --numOfTab;

    var output = formatOutput('\n}');
    
    if (clazz.modules) {
        forin(clazz.modules, function(moduleName) {
            output += endModule(); 
        });
    }
    
    return output;
}

function generateClasses(module) {  
    var output = '';
     
    function generateClass(clazz) {
        var classContent = '';
        if (clazz.isEnum) {
            // it is an enum
            classContent += generateEnum(clazz);
        }
        else {
            classContent += startClass(clazz);
            var staticClass = 'static' in clazz;
            if (!staticClass) {
                // fix constructor
                var fakeCtor = clazz.members.find(x => x.name === clazz.name && x.itemtype === 'method');
                if (fakeCtor) {
                    console.error('Should not define class constructor as "@method %s", please change to "@method constructor" instead.', clazz.name);
                    fakeCtor.name = 'constructor';
                }
                else if (clazz.isConstructor) {
                    generateMember({
                        name: 'constructor',
                        itemtype: 'method',
                        params: clazz.params,
                    }, true);
                }
            }
            // class memebers
            forin(clazz.members, function(member) {
                classContent += generateMember(member, true, staticClass);
            });
            // end of class
            classContent += endClass(clazz);
        }
        
        return classContent;
    }
     
     
    // generate normal classes
    forin(module.classes, function(clazz) {
        output += generateClass(clazz);
    });
    
    // generate nest classes
    forin(module.nestClasses, function(clazz) {
        output += generateClass(clazz);
    });
    
    return output;
}

// @declOrExport to declare or export a module
function startModule(moduleName, description, exportModule) {
    var sp = '\n/****************************************************\n';
     sp += '* ' + moduleName + '\n';
     sp += '*****************************************************/\n';
     
     if (description) {
         sp = '\n/** ' + description + ' */';
     }
    
    var output = '\ndeclare module ' + moduleName + ' {';
    if (exportModule) {
        output = '\nexport module ' + moduleName + ' {';
    }
    output = formatOutput(sp + output);
    
    ++numOfTab;
    
    return output;
}

function endModule() {
    --numOfTab;
    return formatOutput('\n}\n');
}

function generateModule(module) {
    
    var output = startModule(module.name, module.description);

    // module functions
    module.members.forEach(function(member) {
        output += generateMember(member);
    });

    // generate classes information
    output += generateClasses(module);

    output += endModule();
    
    return output;
}

exports.generateTsd = function(enginePath, cb) {
    var doc = new Firedoc({
        paths: [enginePath],
        parseOnly: true,
    });

    doc.build(function (err, ast, opt) {
        try {
            var output = '';
            modules = computeModules(ast);
            inheritImplements(ast, modules);
            // fixCrossModuleRef(ast, modules);
            forin(modules, function (module) {
                parsingModule = module;
                output += generateModule(module);
            });
            cb(null, output);
        }
        catch (e) {
            cb(e, output);
        }
    });
};

