
## `js` Module






This module provides some JavaScript utilities.
All members can be accessed with "cc.js".


### Classes

  - [array](../classes/array.md)
  - [Pool](../classes/Pool.md)



### Index

##### Properties

  - [`_registeredClassIds`](#registeredclassids) `Unknown` All classes registered in the engine, indexed by ID.
  - [`_registeredClassNames`](#registeredclassnames) `Unknown` All classes registered in the engine, indexed by name.



##### Methods

  - [`isNumber`](#isnumber) If a number is created by using 'new Number(10086)', the typeof it will be "object"...
  - [`isString`](#isstring) Check the obj whether is string or not.
  - [`addon`](#addon) Copy all properties not defined in obj from arguments[1...n]
  - [`mixin`](#mixin) copy all properties from arguments[1...n] to obj
  - [`extend`](#extend) Derive the class from the supplied base class.
  - [`getSuper`](#getsuper) Get super class
  - [`isChildClassOf`](#ischildclassof) Checks whether subclass is child of superclass or equals to superclass
  - [`clear`](#clear) Removes all enumerable properties from object
  - [`isEmptyObject`](#isemptyobject) Checks whether obj is an empty object
  - [`getPropertyDescriptor`](#getpropertydescriptor) Get property descriptor in object and all its ancestors
  - [`value`](#value) Define value, just help to call Object.defineProperty.<br>...
  - [`getset`](#getset) Define get set accessor, just help to call Object.defineProperty(...)
  - [`get`](#get) Define get accessor, just help to call Object.defineProperty(...)
  - [`set`](#set) Define set accessor, just help to call Object.defineProperty(...)
  - [`getClassName`](#getclassname) Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
  - [`_setClassId`](#setclassid) Register the class by specified id, if its classname is not defined, the class name will also be set.
  - [`setClassName`](#setclassname) Register the class by specified name manually
  - [`unregisterClass`](#unregisterclass) Unregister a class from fireball.
  - [`_getClassById`](#getclassbyid) Get the registered class by id
  - [`getClassByName`](#getclassbyname) Get the registered class by name
  - [`_getClassId`](#getclassid) Get class id of the object
  - [`obsolete`](#obsolete) Defines a polyfill field for obsoleted codes.
  - [`obsoletes`](#obsoletes) Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
  - [`formatStr`](#formatstr) A string tool to construct a string with format string.
  - [`createMap`](#createmap) A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members).



### Details


#### Properties


##### _registeredClassIds

> All classes registered in the engine, indexed by ID.

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined in | [cocos2d/core/platform/js.js:445](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L445) |

##### Examples

```js
// save all registered classes before loading scripts
let builtinClassIds = cc.js._registeredClassIds;
let builtinClassNames = cc.js._registeredClassNames;
// load some scripts that contain CCClass
...
// clear all loaded classes
cc.js._registeredClassIds = builtinClassIds;
cc.js._registeredClassNames = builtinClassNames;
```


##### _registeredClassNames

> All classes registered in the engine, indexed by name.

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined in | [cocos2d/core/platform/js.js:461](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L461) |

##### Examples

```js
// save all registered classes before loading scripts
let builtinClassIds = cc.js._registeredClassIds;
let builtinClassNames = cc.js._registeredClassNames;
// load some scripts that contain CCClass
...
// clear all loaded classes
cc.js._registeredClassIds = builtinClassIds;
cc.js._registeredClassNames = builtinClassNames;
```





<!-- Method Block -->
#### Methods


##### isNumber

Check the obj whether is number or not
If a number is created by using 'new Number(10086)', the typeof it will be "object"...
Then you can use this function if you care about this case.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:58](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L58) |

###### Parameters
- `obj` Any 


##### isString

Check the obj whether is string or not.
If a string is created by using 'new String("blabla")', the typeof it will be "object"...
Then you can use this function if you care about this case.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:70](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L70) |

###### Parameters
- `obj` Any 


##### addon

Copy all properties not defined in obj from arguments[1...n]

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/js.js:82](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L82) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> object to extend its properties
- `sourceObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> source object to copy properties from


##### mixin

copy all properties from arguments[1...n] to obj

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/js.js:109](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L109) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `sourceObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### extend

Derive the class from the supplied base class.
Both classes are just native javascript constructors, not created by cc.Class, so
usually you will want to inherit using <a href="../modules/cc.html#method_Class" class="crosslink">cc.Class</a> instead.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/platform/js.js:134](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L134) |

###### Parameters
- `cls` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `base` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the baseclass to inherit


##### getSuper

Get super class

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/platform/js.js:168](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L168) |

###### Parameters
- `ctor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the constructor of subclass


##### isChildClassOf

Checks whether subclass is child of superclass or equals to superclass

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:180](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L180) |

###### Parameters
- `subclass` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `superclass` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### clear

Removes all enumerable properties from object

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:215](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L215) |

###### Parameters
- `obj` Any 


##### isEmptyObject

Checks whether obj is an empty object

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:227](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L227) |

###### Parameters
- `obj` Any 


##### getPropertyDescriptor

Get property descriptor in object and all its ancestors

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/js.js:239](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L239) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### value

Define value, just help to call Object.defineProperty.<br>
The configurable will be true.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:257](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L257) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `prop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `value` Any 
- `writable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `enumerable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### getset

Define get set accessor, just help to call Object.defineProperty(...)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:281](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L281) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `prop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `getter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `setter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `enumerable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `configurable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### get

Define get accessor, just help to call Object.defineProperty(...)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:311](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L311) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `prop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `getter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `enumerable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `configurable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### set

Define set accessor, just help to call Object.defineProperty(...)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:334](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L334) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `prop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `setter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `enumerable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `configurable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### getClassName

Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/platform/js.js:351](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L351) |

###### Parameters
- `objOrCtor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> instance or constructor


##### _setClassId

Register the class by specified id, if its classname is not defined, the class name will also be set.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:438](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L438) |

###### Parameters
- `classId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### setClassName

Register the class by specified name manually

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:477](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L477) |

###### Parameters
- `className` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### unregisterClass

Unregister a class from fireball.

If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
Please note that its still your responsibility to free other references to the class.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:494](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L494) |

###### Parameters
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the class you will want to unregister, any number of classes can be added


##### _getClassById

Get the registered class by id

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/platform/js.js:517](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L517) |

###### Parameters
- `classId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getClassByName

Get the registered class by name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/platform/js.js:528](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L528) |

###### Parameters
- `classname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### _getClassId

Get class id of the object

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/platform/js.js:538](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L538) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> instance or constructor
- `allowTempId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> can return temp id in editor


##### obsolete

Defines a polyfill field for obsoleted codes.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:571](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L571) |

###### Parameters
- `obj` Any YourObject or YourClass.prototype
- `obsoleted` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "OldParam" or "YourClass.OldParam"
- `newExpr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "NewParam" or "YourClass.NewParam"
- `writable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### obsoletes

Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:605](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L605) |

###### Parameters
- `obj` Any YourObject or YourClass.prototype
- `objName` Any "YourObject" or "YourClass"
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `writable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### formatStr

A string tool to construct a string with format string.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/platform/js.js:623](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L623) |

###### Parameters
- `msg` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; Any A JavaScript string containing zero or more substitution strings (%s).
- `subst` Any JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.

##### Examples

```js
cc.js.formatStr("a: %s, b: %s", a, b);
cc.js.formatStr(a, b, c);
```

##### createMap

A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members). So we can skip `hasOwnProperty` calls on property lookups. It is a worthwhile optimization than the `{}` literal when `hasOwnProperty` calls are necessary.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/js.js:672](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/js.js#L672) |

###### Parameters
- `forceDictMode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Apply the delete operator to newly created map object. This causes V8 to put the object in "dictionary mode" and disables creation of hidden classes which are very expensive for objects that are constantly changing shape.



