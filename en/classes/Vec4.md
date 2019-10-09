## `Vec4` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 3D vectors and points.



### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`w`](#w) `Number` 



##### Methods

  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Vec4 value
  - [`set`](#set) Set the current vector value with the given vector.
  - [`equals`](#equals) Check whether the vector equals another one
  - [`fuzzyEquals`](#fuzzyequals) Check whether two vector equal with some degree of variance.
  - [`toString`](#tostring) Transform to string with vector informations
  - [`lerp`](#lerp) Calculate linear interpolation result between this vector and another one with given ratio
  - [`clampf`](#clampf) Clamp the vector between from float and to float.
  - [`addSelf`](#addself) Adds this vector.
  - [`add`](#add) Adds two vectors, and returns the new result.
  - [`subSelf`](#subself) Subtracts one vector from this.
  - [`sub`](#sub) Subtracts one vector from this, and returns the new result.
  - [`mulSelf`](#mulself) Multiplies this by a number.
  - [`mul`](#mul) Multiplies by a number, and returns the new result.
  - [`scaleSelf`](#scaleself) Multiplies two vectors.
  - [`scale`](#scale) Multiplies two vectors, and returns the new result.
  - [`divSelf`](#divself) Divides by a number.
  - [`div`](#div) Divides by a number, and returns the new result.
  - [`negSelf`](#negself) Negates the components.
  - [`neg`](#neg) Negates the components, and returns the new result.
  - [`dot`](#dot) Dot product
  - [`cross`](#cross) Cross product
  - [`mag`](#mag) Returns the length of this vector.
  - [`magSqr`](#magsqr) Returns the squared length of this vector.
  - [`normalizeSelf`](#normalizeself) Make the length of this vector to 1.
  - [`normalize`](#normalize) Note that the current vector is unchanged and a new normalized vector is returned.
  - [`transformMat4`](#transformmat4) Transforms the vec4 with a mat4.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.js:63](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L63) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.js:67](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L67) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.js:71](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L71) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.js:75](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L75) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see Cc/vec4:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.js:43](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L43) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec4 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:81](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L81) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:91](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L91) |

###### Parameters
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:107](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L107) |

###### Parameters
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### fuzzyEquals

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:119](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L119) |

###### Parameters
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:141](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L141) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:155](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L155) |

###### Parameters
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:170](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L170) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `max_inclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:190](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L190) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:206](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L206) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:223](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L223) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### sub

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:239](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L239) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:256](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L256) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:272](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L272) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:289](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L289) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### scale

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:305](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L305) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:322](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L322) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

Divides by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:338](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L338) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:355](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L355) |



##### neg

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:370](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L370) |

###### Parameters
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:386](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L386) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:397](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L397) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### mag

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:411](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L411) |


##### Examples

```js
var v = cc.v4(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:428](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L428) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:442](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L442) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:454](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L454) |

###### Parameters
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.js:473](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L473) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created



