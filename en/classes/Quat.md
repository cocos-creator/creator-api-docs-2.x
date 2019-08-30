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
  - [`quat`](#quat) The convenience method to create a new <a href="../classes/Quat.html" class="crosslink">cc.Quat</a>.
  - [`toString`](#tostring) TODO



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:69](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L69) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:72](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L72) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:75](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L75) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.js:78](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L78) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.js:42](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L42) |

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
| Defined in | [cocos2d/core/value-types/quat.js:85](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L85) |



##### set

Set values with another quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:95](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L95) |

###### Parameters
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether current quaternion equals another

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/quat.js:111](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L111) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

Convert quaternion to euler

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/quat.js:122](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L122) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

Convert euler to quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:134](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L134) |

###### Parameters
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

Calculate the interpolation result between this quaternion and another one with given ratio

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.js:146](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L146) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### lerp

Calculate the multiply result between this quaternion and another one

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.js:160](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L160) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### quat

The convenience method to create a new <a href="../classes/Quat.html" class="crosslink">cc.Quat</a>.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.js:174](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/quat.js#L174) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/value-type.js:97](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/core/value-types/value-type.js#L97) |




