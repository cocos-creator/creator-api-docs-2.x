## `Vec3` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 3D vectors and points.



### Index

##### Properties

  - [`ONE`](#one) `Vec3` return a Vec3 object with x = 1, y = 1, z = 1.
  - [`ZERO`](#zero) `Vec3` return a Vec3 object with x = 0, y = 0, z = 0.
  - [`UP`](#up) `Vec3` return a Vec3 object with x = 0, y = 1, z = 0.
  - [`RIGHT`](#right) `Vec3` return a Vec3 object with x = 1, y = 0, z = 0.
  - [`FRONT`](#front) `Vec3` return a Vec3 object with x = 0, y = 0, z = 1.
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 



##### Methods

  - [`zero`](#zero) The target of an assignment zero vector
  - [`clone`](#clone) Obtaining copy vectors designated
  - [`copy`](#copy) Copy the target vector
  - [`set`](#set) Set to value
  - [`add`](#add) Element-wise vector addition
  - [`subtract`](#subtract) Element-wise vector subtraction
  - [`multiply`](#multiply) Element-wise vector multiplication (product component)
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
  - [`cross`](#cross) Vector cross product (vector product)
  - [`lerp`](#lerp) Vector element by element linear interpolation: A + t * (B - A)
  - [`random`](#random) Generates a uniformly distributed random vectors on the unit sphere
  - [`transformMat4`](#transformmat4) Four-dimensional vector and matrix multiplication, the default vectors fourth one.
  - [`transformMat4Normal`](#transformmat4normal) Four-dimensional vector and matrix multiplication, vector fourth default is 0.
  - [`transformMat3`](#transformmat3) Dimensional vector matrix multiplication
  - [`transformQuat`](#transformquat) Vector quaternion multiplication
  - [`rotateX`](#rotatex) Rotation vector specified angle about the X axis
  - [`rotateY`](#rotatey) Rotation vector specified angle around the Y axis
  - [`rotateZ`](#rotatez) Around the Z axis specified angle vector
  - [`strictEquals`](#strictequals) Equivalent vectors Analyzing
  - [`equals`](#equals) Negative error vector floating point approximately equivalent Analyzing
  - [`angle`](#angle) Radian angle between two vectors seek
  - [`projectOnPlane`](#projectonplane) Calculating a projection vector in the specified plane
  - [`project`](#project) Projection vector calculated in the vector designated
  - [`toArray`](#toarray) Vector transfer array
  - [`fromArray`](#fromarray) Array steering amount
  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Vec3 value
  - [`set`](#set) Set the current vector value with the given vector.
  - [`equals`](#equals) Check whether the vector equals another one
  - [`fuzzyEquals`](#fuzzyequals) Check whether two vector equal with some degree of variance.
  - [`toString`](#tostring) Transform to string with vector informations
  - [`lerp`](#lerp) Calculate linear interpolation result between this vector and another one with given ratio
  - [`clampf`](#clampf) Clamp the vector between from float and to float.
  - [`addSelf`](#addself) Adds this vector.
  - [`add`](#add) Adds two vectors, and returns the new result.
  - [`subtract`](#subtract) Subtracts one vector from this.
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
  - [`transformMat4`](#transformmat4) Transforms the vec3 with a mat4.
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y, and z
  - [`angle`](#angle) Get angle in radian between this and vector.
  - [`project`](#project) Calculates the projection of the current vector over the given vector.
  - [`signAngle`](#signangle) Get angle in radian between this and vector with direction.
  - [`rotate`](#rotate) rotate.
  - [`rotateSelf`](#rotateself) rotate self.



### Details


#### Properties


##### ONE

> return a Vec3 object with x = 1, y = 1, z = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:81](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L81) |



##### ZERO

> return a Vec3 object with x = 0, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:91](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L91) |



##### UP

> return a Vec3 object with x = 0, y = 1, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:101](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L101) |



##### RIGHT

> return a Vec3 object with x = 1, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:111](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L111) |



##### FRONT

> return a Vec3 object with x = 0, y = 0, z = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:121](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L121) |



##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:926](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L926) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:930](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L930) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:934](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L934) |






<!-- Method Block -->
#### Methods


##### zero

The target of an assignment zero vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:132](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L132) |



##### clone

Obtaining copy vectors designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:147](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L147) |



##### copy

Copy the target vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:159](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L159) |



##### set

Set to value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:174](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L174) |



##### add

Element-wise vector addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:189](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L189) |



##### subtract

Element-wise vector subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:204](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L204) |



##### multiply

Element-wise vector multiplication (product component)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:219](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L219) |



##### divide

Element-wise vector division

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:234](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L234) |



##### ceil

Rounding up by elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:249](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L249) |



##### floor

Element vector by rounding down

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:264](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L264) |



##### min

The minimum by-element vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:279](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L279) |



##### max

The maximum value of the element-wise vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:294](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L294) |



##### round

Element-wise vector of rounding to whole

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:309](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L309) |



##### multiplyScalar

Vector scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:324](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L324) |



##### scaleAndAdd

Element-wise vector multiply add: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:339](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L339) |



##### distance

Seeking two vectors Euclidean distance

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:354](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L354) |



##### squaredDistance

Euclidean distance squared seeking two vectors

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:369](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L369) |



##### len

Seeking vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:384](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L384) |



##### lengthSqr

Seeking squared vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:399](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L399) |



##### negate

By taking the negative elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:414](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L414) |



##### inverse

Element vector by taking the inverse, return near 0 Infinity

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:429](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L429) |



##### inverseSafe

Element vector by taking the inverse, return near 0 0

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:444](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L444) |



##### normalize

Normalized vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:478](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L478) |



##### dot

Vector dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:501](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L501) |



##### cross

Vector cross product (vector product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:513](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L513) |



##### lerp

Vector element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:530](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L530) |



##### random

Generates a uniformly distributed random vectors on the unit sphere

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:545](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L545) |

###### Parameters
- `scale` Unknown 生成的向量长度


##### transformMat4

Four-dimensional vector and matrix multiplication, the default vectors fourth one.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:567](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L567) |



##### transformMat4Normal

Four-dimensional vector and matrix multiplication, vector fourth default is 0.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:588](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L588) |



##### transformMat3

Dimensional vector matrix multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:609](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L609) |



##### transformQuat

Vector quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:645](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L645) |



##### rotateX

Rotation vector specified angle about the X axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:709](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L709) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateY

Rotation vector specified angle around the Y axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:741](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L741) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateZ

Around the Z axis specified angle vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:773](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L773) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### strictEquals

Equivalent vectors Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:805](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L805) |



##### equals

Negative error vector floating point approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:817](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L817) |



##### angle

Radian angle between two vectors seek

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:838](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L838) |



##### projectOnPlane

Calculating a projection vector in the specified plane

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:859](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L859) |

###### Parameters
- `a` Unknown 待投影向量
- `n` Unknown 指定平面的法线


##### project

Projection vector calculated in the vector designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:873](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L873) |

###### Parameters
- `a` Unknown 待投影向量
- `n` Unknown 目标向量


##### toArray

Vector transfer array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:892](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L892) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### fromArray

Array steering amount

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:909](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L909) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see Cc/vec3:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:940](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L940) |

###### Parameters
- `x` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec3 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:965](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L965) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:975](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L975) |

###### Parameters
- `newValue` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:990](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L990) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fuzzyEquals

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1002](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1002) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1022](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1022) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1036](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1036) |

###### Parameters
- `to` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1051](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1051) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `max_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1070](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1070) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1085](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1085) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### subtract

Subtracts one vector from this.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1101](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1101) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### multiplyScalar

Multiplies this by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1116](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1116) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1131](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1131) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### divide

Divides by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1146](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1146) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

Negates the components.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1161](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1161) |



##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1175](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1175) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1186](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1186) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### len

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1200](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1200) |


##### Examples

```js
var v = cc.v2(10, 10);
v.len(); // return 14.142135623730951;
```

##### lengthSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1213](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1213) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1223](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1223) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1235](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1235) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### transformMat4

Transforms the vec3 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1254](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1254) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### maxAxis

Returns the maximum value in x, y, and z

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1267](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1267) |



##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1276](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1276) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### project

Calculates the projection of the current vector over the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1284](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1284) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 

##### Examples

```js
var v1 = cc.v3(20, 20, 20);
var v2 = cc.v3(5, 5, 5);
v1.project(v2); // Vec3 {x: 20, y: 20, z: 20};
```

##### signAngle

Get angle in radian between this and vector with direction. <br/>
In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1298](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1298) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1314](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1314) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

rotate self. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1328](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec3.ts#L1328) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



