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
  - [`FORWARD`](#forward) `Vec3` return a Vec3 object with x = 0, y = 0, z = 1.
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 



##### Methods

  - [`mag`](#mag) Returns the length of this vector.
  - [`magSqr`](#magsqr) Returns the squared length of this vector.
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
  - [`transformAffine`](#transformaffine) Affine transformation vector
  - [`transformQuat`](#transformquat) Vector quaternion multiplication
  - [`transformQuat`](#transformquat) To scale -> rotation -> transformation vector sequence translation
  - [`transformInverseRTS`](#transforminverserts) Translational -> rotation -> Zoom inverse transformation vector sequence
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
| Defined in | [cocos2d/core/value-types/vec3.ts:174](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L174) |



##### ZERO

> return a Vec3 object with x = 0, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:184](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L184) |



##### UP

> return a Vec3 object with x = 0, y = 1, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:194](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L194) |



##### RIGHT

> return a Vec3 object with x = 1, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:204](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L204) |



##### FORWARD

> return a Vec3 object with x = 0, y = 0, z = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:214](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L214) |



##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:1028](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1028) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:1032](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1032) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.ts:1036](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1036) |






<!-- Method Block -->
#### Methods


##### mag

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:58](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L58) |


##### Examples

```js
var v = cc.v3(10, 10, 10);
v.mag(); // return 17.320508075688775;
```

##### magSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:68](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L68) |



##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:75](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L75) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### sub

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:84](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L84) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:95](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L95) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:104](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L104) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:115](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L115) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

Divides by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:124](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L124) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:135](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L135) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### scale

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:144](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L144) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:155](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L155) |



##### neg

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:163](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L163) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### zero

The target of an assignment zero vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:225](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L225) |



##### clone

Obtaining copy vectors designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:240](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L240) |



##### copy

Copy the target vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:252](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L252) |



##### set

Set to value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:267](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L267) |



##### add

Element-wise vector addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:282](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L282) |



##### subtract

Element-wise vector subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:297](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L297) |



##### multiply

Element-wise vector multiplication (product component)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:312](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L312) |



##### divide

Element-wise vector division

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:327](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L327) |



##### ceil

Rounding up by elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:342](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L342) |



##### floor

Element vector by rounding down

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:357](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L357) |



##### min

The minimum by-element vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:372](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L372) |



##### max

The maximum value of the element-wise vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:387](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L387) |



##### round

Element-wise vector of rounding to whole

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:402](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L402) |



##### multiplyScalar

Vector scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:417](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L417) |



##### scaleAndAdd

Element-wise vector multiply add: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:432](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L432) |



##### distance

Seeking two vectors Euclidean distance

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:447](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L447) |



##### squaredDistance

Euclidean distance squared seeking two vectors

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:462](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L462) |



##### len

Seeking vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:477](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L477) |



##### lengthSqr

Seeking squared vector length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:492](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L492) |



##### negate

By taking the negative elements of the vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:507](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L507) |



##### inverse

Element vector by taking the inverse, return near 0 Infinity

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:522](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L522) |



##### inverseSafe

Element vector by taking the inverse, return near 0 0

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:537](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L537) |



##### normalize

Normalized vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:571](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L571) |



##### dot

Vector dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:594](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L594) |



##### cross

Vector cross product (vector product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:606](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L606) |



##### lerp

Vector element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:623](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L623) |



##### random

Generates a uniformly distributed random vectors on the unit sphere

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:638](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L638) |

###### Parameters
- `scale` Unknown 生成的向量长度


##### transformMat4

Four-dimensional vector and matrix multiplication, the default vectors fourth one.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:660](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L660) |



##### transformMat4Normal

Four-dimensional vector and matrix multiplication, vector fourth default is 0.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:681](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L681) |



##### transformMat3

Dimensional vector matrix multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:702](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L702) |



##### transformAffine

Affine transformation vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:721](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L721) |



##### transformQuat

Vector quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:741](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L741) |



##### transformQuat

To scale -> rotation -> transformation vector sequence translation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:765](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L765) |



##### transformInverseRTS

Translational -> rotation -> Zoom inverse transformation vector sequence

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:788](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L788) |



##### rotateX

Rotation vector specified angle about the X axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:811](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L811) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateY

Rotation vector specified angle around the Y axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:843](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L843) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateZ

Around the Z axis specified angle vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:875](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L875) |

###### Parameters
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### strictEquals

Equivalent vectors Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:907](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L907) |



##### equals

Negative error vector floating point approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:919](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L919) |



##### angle

Radian angle between two vectors seek

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:940](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L940) |



##### projectOnPlane

Calculating a projection vector in the specified plane

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:961](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L961) |

###### Parameters
- `a` Unknown 待投影向量
- `n` Unknown 指定平面的法线


##### project

Projection vector calculated in the vector designated

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:975](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L975) |

###### Parameters
- `a` Unknown 待投影向量
- `n` Unknown 目标向量


##### toArray

Vector transfer array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:994](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L994) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### fromArray

Array steering amount

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:1011](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1011) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see Cc/vec3:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.ts:1042](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1042) |

###### Parameters
- `x` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec3 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1067](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1067) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1077](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1077) |

###### Parameters
- `newValue` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1092](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1092) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fuzzyEquals

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1104](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1104) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1124](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1124) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1138](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1138) |

###### Parameters
- `to` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1153](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1153) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `max_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1172](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1172) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1187](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1187) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### subtract

Subtracts one vector from this.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1203](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1203) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### multiplyScalar

Multiplies this by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1218](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1218) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1233](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1233) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### divide

Divides by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1248](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1248) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

Negates the components.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1263](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1263) |



##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1277](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1277) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1288](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1288) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### len

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1302](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1302) |


##### Examples

```js
var v = cc.v3(10, 10, 10);
v.len(); // return 17.320508075688775;
```

##### lengthSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1315](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1315) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1325](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1325) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1337](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1337) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### transformMat4

Transforms the vec3 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1356](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1356) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### maxAxis

Returns the maximum value in x, y, and z

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1369](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1369) |



##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1378](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1378) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### project

Calculates the projection of the current vector over the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1386](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1386) |

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
| Defined in | [cocos2d/core/value-types/vec3.ts:1400](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1400) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1416](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1416) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

rotate self. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.ts:1430](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/vec3.ts#L1430) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



