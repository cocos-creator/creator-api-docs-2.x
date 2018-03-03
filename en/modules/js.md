
## `js` Module






This module provides some JavaScript utilities.
All members can be accessed with "cc.js".


### Classes

  - [array](../classes/array.md)
  - [Pool](../classes/Pool.md)



### Index



##### Methods

  - [`isNumber`](#isnumber) Check the obj whether is number or not
If a number is created by using 'new Number(10086)', the typeof it will be "object"...
Then you can use this function if you care about this case.
  - [`isString`](#isstring) Check the obj whether is string or not.
If a string is created by using 'new String("blabla")', the typeof it will be "object"...
Then you can use this function if you care about this case.
  - [`addon`](#addon) This method is deprecated, use cc.js.mixin please.<br>
Copy all properties not defined in obj from arguments[1...n]
  - [`mixin`](#mixin) copy all properties from arguments[1...n] to obj
  - [`extend`](#extend) Derive the class from the supplied base class.
Both classes are just native javascript constructors, not created by cc.Class, so
usually you will want to inherit using <a href="../modules/cc.html#method_Class" class="crosslink">cc.Class</a> instead.
  - [`getSuper`](#getsuper) Get super class
  - [`clear`](#clear) Removes all enumerable properties from object
  - [`getPropertyDescriptor`](#getpropertydescriptor) Get property descriptor in object and all its ancestors
  - [`value`](#value) Define value, just help to call Object.defineProperty.<br>
The configurable will be true.
  - [`getset`](#getset) Define get set accessor, just help to call Object.defineProperty(...)
  - [`get`](#get) Define get accessor, just help to call Object.defineProperty(...)
  - [`set`](#set) Define set accessor, just help to call Object.defineProperty(...)
  - [`getClassName`](#getclassname) Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
  - [`_setClassId`](#setclassid) Register the class by specified id, if its classname is not defined, the class name will also be set.
  - [`setClassName`](#setclassname) Register the class by specified name manually
  - [`unregisterClass`](#unregisterclass) Unregister a class from fireball.

If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
Please note that its still your responsibility to free other references to the class.
  - [`_getClassById`](#getclassbyid) Get the registered class by id
  - [`getClassByName`](#getclassbyname) Get the registered class by name
  - [`_getClassId`](#getclassid) Get class id of the object
  - [`obsolete`](#obsolete) Defines a polyfill field for obsoleted codes.
  - [`obsoletes`](#obsoletes) Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
  - [`formatStr`](#formatstr) A string tool to construct a string with format string.
  - [`createMap`](#createmap) A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members). So we can skip `hasOwnProperty` calls on property lookups. It is a worthwhile optimization than the `{}` literal when `hasOwnProperty` calls are necessary.



### Details




<!-- Method Block -->
#### Methods


##### isNumber

Check the obj whether is number or not
If a number is created by using 'new Number(10086)', the typeof it will be "object"...
Then you can use this function if you care about this case.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L57) |

###### Parameters
- `obj` Any 


##### isString

Check the obj whether is string or not.
If a string is created by using 'new String("blabla")', the typeof it will be "object"...
Then you can use this function if you care about this case.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:69](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L69) |

###### Parameters
- `obj` Any 


##### addon

This method is deprecated, use cc.js.mixin please.<br>
Copy all properties not defined in obj from arguments[1...n]

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:81](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L81) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> object to extend its properties
- `sourceObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> source object to copy properties from


##### mixin

copy all properties from arguments[1...n] to obj

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L110) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:135](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L135) |

###### Parameters
- `cls` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `base` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the baseclass to inherit


##### getSuper

Get super class

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:169](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L169) |

###### Parameters
- `ctor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the constructor of subclass


##### clear

Removes all enumerable properties from object

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:188](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L188) |

###### Parameters
- `obj` Any 


##### getPropertyDescriptor

Get property descriptor in object and all its ancestors

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L200) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### value

Define value, just help to call Object.defineProperty.<br>
The configurable will be true.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:218](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L218) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:242](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L242) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `prop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `getter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `setter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `enumerable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### get

Define get accessor, just help to call Object.defineProperty(...)

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:270](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L270) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:293](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L293) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:310](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L310) |

###### Parameters
- `objOrCtor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> instance or constructor


##### _setClassId

Register the class by specified id, if its classname is not defined, the class name will also be set.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L388) |

###### Parameters
- `classId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### setClassName

Register the class by specified name manually

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L399) |

###### Parameters
- `className` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### unregisterClass

Unregister a class from fireball.

If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
Please note that its still your responsibility to free other references to the class.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:416](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L416) |

###### Parameters
- `constructor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the class you will want to unregister, any number of classes can be added


##### _getClassById

Get the registered class by id

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:439](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L439) |

###### Parameters
- `classId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getClassByName

Get the registered class by name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:450](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L450) |

###### Parameters
- `classname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### _getClassId

Get class id of the object

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:460](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L460) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> instance or constructor
- `allowTempId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> can return temp id in editor


##### obsolete

Defines a polyfill field for obsoleted codes.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:527](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L527) |

###### Parameters
- `obj` Any YourObject or YourClass.prototype
- `obsoleted` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "OldParam" or "YourClass.OldParam"
- `newPropName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "NewParam"
- `writable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### obsoletes

Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:559](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L559) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:577](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L577) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L626) |

###### Parameters
- `forceDictMode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Apply the delete operator to newly created map object. This causes V8 to put the object in "dictionary mode" and disables creation of hidden classes which are very expensive for objects that are constantly changing shape.



