## `Quat` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 2D vectors and points.



### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`w`](#w) `Number` 



##### Methods

  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Quat object and return the new object
  - [`set`](#set) Set values with another quaternion
  - [`equals`](#equals) Check whether current quaternion equals another
  - [`toEuler`](#toeuler) Convert quaternion to euler
  - [`fromEuler`](#fromeuler) Convert euler to quaternion
  - [`lerp`](#lerp) Calculate the interpolation result between this quaternion and another one with given ratio
  - [`lerp`](#lerp) Calculate the multiply result between this quaternion and another one
  - [`rotateAround`](#rotatearound) Rotates a quaternion by the given angle (in radians) about a world space axis.
  - [`toString`](#tostring) TODO



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:69](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L69) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:72](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L72) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:75](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L75) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:78](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L78) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.js:42](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L42) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Quat object and return the new object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:85](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L85) |



##### set

Set values with another quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:95](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L95) |

###### Parameters
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether current quaternion equals another

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/quat.js:111](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L111) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

Convert quaternion to euler

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/quat.js:122](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L122) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

Convert euler to quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:134](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L134) |

###### Parameters
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

Calculate the interpolation result between this quaternion and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:146](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L146) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### lerp

Calculate the multiply result between this quaternion and another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:161](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L161) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

Rotates a quaternion by the given angle (in radians) about a world space axis.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:180](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L180) |

###### Parameters
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to rotate
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The axis around which to rotate in world space
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Angle (in radians) to rotate
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to store result


##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/value-type.js:97](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/value-type.js#L97) |




