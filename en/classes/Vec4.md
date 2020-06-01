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

  - [`subSelf`](#subself) Subtracts one vector from this.
  - [`sub`](#sub) Subtracts one vector from this, and returns the new result.
  - [`mulSelf`](#mulself) Multiplies this by a number.
  - [`mul`](#mul) Multiplies by a number, and returns the new result.
  - [`divSelf`](#divself) Divides by a number.
  - [`div`](#div) Divides by a number, and returns the new result.
  - [`scaleSelf`](#scaleself) Multiplies two vectors.
  - [`scale`](#scale) Multiplies two vectors, and returns the new result.
  - [`negSelf`](#negself) Negates the components.
  - [`neg`](#neg) Negates the components, and returns the new result.
  - [`clone`](#clone) Obtaining copy vectors designated
  - [`copy`](#copy) Copy the target vector
  - [`set`](#set) Set to value
  - [`add`](#add) Element-wise vector addition
  - [`subtract`](#subtract) Element-wise vector subtraction
  - [`multiply`](#multiply) Element-wise vector multiplication
  - [`divide`](#divide) Element-wise vector division
  - [`ceil`](#ceil) Rounding up by elements of the vector
  - [`floor`](#floor) Element vector by rounding down
  - [`min`](#min) The minimum by-element vector
  - [`max`](#max) The maximum value of the element-wise vector
  - [`round`](#round) Element-wise vector of rounding to whole
  - [`multiplyScalar`](#multiplyscalar) Vector scalar multiplication
  - [`scaleAndAdd`](#scaleandadd) Element-wise vector multiply add: A + B * scale
  - [`distance`](#distance) Seeking two vectors Euclidean distance
  - [`squaredDistance`](#squareddistance) Euclidean distance squared seeking two vectors
  - [`len`](#len) Seeking vector length
  - [`lengthSqr`](#lengthsqr) Seeking squared vector length
  - [`negate`](#negate) By taking the negative elements of the vector
  - [`inverse`](#inverse) Element vector by taking the inverse, return near 0 Infinity
  - [`inverseSafe`](#inversesafe) Element vector by taking the inverse, return near 0 0
  - [`normalize`](#normalize) Normalized vector
  - [`dot`](#dot) Vector dot product (scalar product)
  - [`lerp`](#lerp) Vector element by element linear interpolation: A + t * (B - A)
  - [`random`](#random) Generates a uniformly distributed random vectors on the unit sphere
  - [`transformMat4`](#transformmat4) Vector matrix multiplication
  - [`transformQuat`](#transformquat) Vector quaternion multiplication
  - [`strictEquals`](#strictequals) Equivalent vectors Analyzing
  - [`equals`](#equals) Negative error vector floating point approximately equivalent Analyzing
  - [`toArray`](#toarray) Vector transfer array
  - [`fromArray`](#fromarray) Array steering amount
  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Vec4 value
  - [`set`](#set) Set the current vector value with the given vector.
  - [`equals`](#equals) Check whether the vector equals another one
  - [`equals4f`](#equals4f) Check whether the vector equals another one
  - [`strictEquals`](#strictequals) Check whether strict equals other Vec4
  - [`strictEquals4f`](#strictequals4f) Check whether strict equals other Vec4
  - [`lerp`](#lerp) Calculate linear interpolation result between this vector and another one with given ratio
  - [`toString`](#tostring) Transform to string with vector informations
  - [`clampf`](#clampf) Clamp the vector between minInclusive and maxInclusive.
  - [`addSelf`](#addself) Adds this vector.
  - [`add`](#add) Adds two vectors, and returns the new result.
  - [`subtract`](#subtract) Subtracts one vector from this, and returns the new result.
  - [`multiplyScalar`](#multiplyscalar) Multiplies this by a number.
  - [`multiply`](#multiply) Multiplies two vectors.
  - [`divide`](#divide) Divides by a number.
  - [`negate`](#negate) Negates the components.
  - [`dot`](#dot) Dot product
  - [`cross`](#cross) Cross product
  - [`len`](#len) Returns the length of this vector.
  - [`lengthSqr`](#lengthsqr) Returns the squared length of this vector.
  - [`normalizeSelf`](#normalizeself) Make the length of this vector to 1.
  - [`normalize`](#normalize) Note that the current vector is unchanged and a new normalized vector is returned.
  - [`transformMat4`](#transformmat4) Transforms the vec4 with a mat4.
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y, z, w.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:728](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L728) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:733](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L733) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:738](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L738) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:743](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L743) |






<!-- Method Block -->
#### Methods


##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:57](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L57) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### sub

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:66](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L66) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:77](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L77) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:86](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L86) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:97](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L97) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

Divides by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:106](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L106) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:117](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L117) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### scale

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:126](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L126) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:137](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L137) |



##### neg

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:145](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L145) |

###### Parameters
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### clone

Obtaining copy vectors designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:165](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L165) |



##### copy

Copy the target vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:177](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L177) |



##### set

Set to value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:193](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L193) |



##### add

Element-wise vector addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:209](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L209) |



##### subtract

Element-wise vector subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:225](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L225) |



##### multiply

Element-wise vector multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:241](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L241) |



##### divide

Element-wise vector division

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:257](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L257) |



##### ceil

Rounding up by elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:273](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L273) |



##### floor

Element vector by rounding down

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:289](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L289) |



##### min

The minimum by-element vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:305](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L305) |



##### max

The maximum value of the element-wise vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:321](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L321) |



##### round

Element-wise vector of rounding to whole

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:337](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L337) |



##### multiplyScalar

Vector scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:353](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L353) |



##### scaleAndAdd

Element-wise vector multiply add: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:369](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L369) |



##### distance

Seeking two vectors Euclidean distance

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:385](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L385) |



##### squaredDistance

Euclidean distance squared seeking two vectors

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:401](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L401) |



##### len

Seeking vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:417](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L417) |



##### lengthSqr

Seeking squared vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:433](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L433) |



##### negate

By taking the negative elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:449](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L449) |



##### inverse

Element vector by taking the inverse, return near 0 Infinity

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:465](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L465) |



##### inverseSafe

Element vector by taking the inverse, return near 0 0

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:481](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L481) |



##### normalize

Normalized vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:522](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L522) |



##### dot

Vector dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:546](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L546) |



##### lerp

Vector element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:558](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L558) |



##### random

Generates a uniformly distributed random vectors on the unit sphere

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:574](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L574) |

###### Parameters
- `scale` Unknown 生成的向量长度


##### transformMat4

Vector matrix multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:597](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L597) |



##### transformQuat

Vector quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:637](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L637) |



##### strictEquals

Equivalent vectors Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:667](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L667) |



##### equals

Negative error vector floating point approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:679](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L679) |



##### toArray

Vector transfer array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:694](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L694) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### fromArray

Array steering amount

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:711](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L711) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see Cc/vec4:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:748](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L748) |

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
| Defined in | [cocos2d/core/value-types/vec4.ts:775](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L775) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:785](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L785) |

###### Parameters
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:811](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L811) |

###### Parameters
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### equals4f

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:826](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L826) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 x 分量。
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 y 分量。
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 z 分量。
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 w 分量。
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 允许的误差，应为非负数。


##### strictEquals

Check whether strict equals other Vec4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:844](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L844) |

###### Parameters
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 相比较的向量。


##### strictEquals4f

Check whether strict equals other Vec4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:855](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L855) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 x 分量。
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 y 分量。
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 z 分量。
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 w 分量。


##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:869](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L869) |

###### Parameters
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 目标向量。
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 插值比率，范围为 [0,1]。


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:889](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L889) |



##### clampf

Clamp the vector between minInclusive and maxInclusive.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:899](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L899) |

###### Parameters
- `minInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最小值。
- `maxInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最大值。


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:915](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L915) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:931](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L931) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subtract

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:948](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L948) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### multiplyScalar

Multiplies this by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:965](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L965) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:981](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L981) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### divide

Divides by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:997](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L997) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

Negates the components.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1013](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1013) |



##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1028](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1028) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1039](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1039) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### len

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1058](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1058) |


##### Examples

```js
var v = cc.v4(10, 10);
v.len(); // return 14.142135623730951;
```

##### lengthSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1075](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1075) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1089](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1089) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1101](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1101) |

###### Parameters
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1131](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1131) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### maxAxis

Returns the maximum value in x, y, z, w.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1152](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/vec4.ts#L1152) |




