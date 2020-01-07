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
| Defined in | [cocos2d/core/value-types/vec4.ts:651](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L651) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:656](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L656) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:661](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L661) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec4.ts:666](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L666) |






<!-- Method Block -->
#### Methods


##### clone

Obtaining copy vectors designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:88](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L88) |



##### copy

Copy the target vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:100](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L100) |



##### set

Set to value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:116](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L116) |



##### add

Element-wise vector addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:132](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L132) |



##### subtract

Element-wise vector subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:148](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L148) |



##### multiply

Element-wise vector multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:164](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L164) |



##### divide

Element-wise vector division

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:180](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L180) |



##### ceil

Rounding up by elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:196](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L196) |



##### floor

Element vector by rounding down

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:212](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L212) |



##### min

The minimum by-element vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:228](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L228) |



##### max

The maximum value of the element-wise vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:244](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L244) |



##### round

Element-wise vector of rounding to whole

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:260](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L260) |



##### multiplyScalar

Vector scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:276](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L276) |



##### scaleAndAdd

Element-wise vector multiply add: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:292](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L292) |



##### distance

Seeking two vectors Euclidean distance

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:308](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L308) |



##### squaredDistance

Euclidean distance squared seeking two vectors

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:324](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L324) |



##### len

Seeking vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:340](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L340) |



##### lengthSqr

Seeking squared vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:356](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L356) |



##### negate

By taking the negative elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:372](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L372) |



##### inverse

Element vector by taking the inverse, return near 0 Infinity

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:388](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L388) |



##### inverseSafe

Element vector by taking the inverse, return near 0 0

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:404](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L404) |



##### normalize

Normalized vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:445](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L445) |



##### dot

Vector dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:469](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L469) |



##### lerp

Vector element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:481](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L481) |



##### random

Generates a uniformly distributed random vectors on the unit sphere

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:497](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L497) |

###### Parameters
- `scale` Unknown 生成的向量长度


##### transformMat4

Vector matrix multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:520](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L520) |



##### transformQuat

Vector quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:560](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L560) |



##### strictEquals

Equivalent vectors Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:590](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L590) |



##### equals

Negative error vector floating point approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:602](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L602) |



##### toArray

Vector transfer array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:617](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L617) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### fromArray

Array steering amount

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:634](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L634) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see Cc/vec4:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec4.ts:671](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L671) |

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
| Defined in | [cocos2d/core/value-types/vec4.ts:698](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L698) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:708](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L708) |

###### Parameters
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:734](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L734) |

###### Parameters
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### equals4f

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:749](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L749) |

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
| Returns | Unknown 
| Defined in | [cocos2d/core/value-types/vec4.ts:767](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L767) |

###### Parameters
- `other` Unknown 相比较的向量。


##### strictEquals4f

Check whether strict equals other Vec4

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/value-types/vec4.ts:778](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L778) |

###### Parameters
- `x` Unknown 指定向量的 x 分量。
- `y` Unknown 指定向量的 y 分量。
- `z` Unknown 指定向量的 z 分量。
- `w` Unknown 指定向量的 w 分量。


##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:792](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L792) |

###### Parameters
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 目标向量。
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 插值比率，范围为 [0,1]。


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:812](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L812) |



##### clampf

Clamp the vector between minInclusive and maxInclusive.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:822](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L822) |

###### Parameters
- `minInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最小值。
- `maxInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最大值。


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:838](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L838) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:854](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L854) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subtract

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:871](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L871) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### multiplyScalar

Multiplies this by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:888](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L888) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:904](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L904) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### divide

Divides by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:920](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L920) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

Negates the components.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:936](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L936) |



##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:951](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L951) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:962](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L962) |

###### Parameters
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### len

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:981](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L981) |


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
| Defined in | [cocos2d/core/value-types/vec4.ts:998](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L998) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1012](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L1012) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1024](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L1024) |

###### Parameters
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1054](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L1054) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### maxAxis

Returns the maximum value in x, y, z, w.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec4.ts:1075](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec4.ts#L1075) |




