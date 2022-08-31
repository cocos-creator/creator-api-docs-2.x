## `Mat3` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Mathematical 3x3 matrix.

NOTE: we use column-major matrix for all matrix calculation.

This may lead to some confusion when referencing OpenGL documentation,
however, which represents out all matricies in column-major format.
This means that while in code a matrix may be typed out as:

[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 x, y, z, 0]

The same matrix in the [OpenGL documentation](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glTranslate.xml)
is written as:

 1 0 0 x
 0 1 0 y
 0 0 1 z
 0 0 0 0

Please rest assured, however, that they are the same thing!
This is not unique to glMatrix, either, as OpenGL developers have long been confused by the
apparent lack of consistency between the memory layout and the documentation.



### Index

##### Properties

  - [`IDENTITY`](#identity) `Mat3` Identity  of Mat3
  - [`m`](#m) `Float64Array | Float32Array` Matrix Data



##### Methods

  - [`toArray`](#toarray) Matrix transpose array
  - [`fromArray`](#fromarray) Transfer matrix array
  - [`constructor`](#constructor) 
  - [`clone`](#clone) This method returns an exact copy of current value.
  - [`equals`](#equals) Compares this object with the other one.
  - [`lerp`](#lerp) Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
  - [`set`](#set) Copys all the properties from another given object to this value.
  - [`toString`](#tostring) Convert to a readable string.



### Details


#### Properties


##### IDENTITY

> Identity  of Mat3

| meta | description |
|------|-------------|
| Type | <a href="../classes/Mat3.html" class="crosslink">Mat3</a> |
| Defined in | [cocos2d/core/value-types/mat3.ts:43](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/mat3.ts#L43) |



##### m

> Matrix Data

| meta | description |
|------|-------------|
| Type | Float64Array &#124; Float32Array |
| Defined in | [cocos2d/core/value-types/mat3.ts:836](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/mat3.ts#L836) |






<!-- Method Block -->
#### Methods


##### toArray

Matrix transpose array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat3.ts:802](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/mat3.ts#L802) |

###### Parameters
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

Transfer matrix array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat3.ts:819](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/mat3.ts#L819) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat3.ts:844](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/mat3.ts#L844) |



##### clone

This method returns an exact copy of current value.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:39](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/value-type.ts#L39) |



##### equals

Compares this object with the other one.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:51](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/value-type.ts#L51) |

###### Parameters
- `other` <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/value-type.ts#L63) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### set

Copys all the properties from another given object to this value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/value-type.ts:80](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/value-type.ts#L80) |

###### Parameters
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy


##### toString

Convert to a readable string.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/value-types/value-type.ts#L92) |




