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
  - [`clone`](#clone) Obtaining copy specified quaternion
  - [`copy`](#copy) Copy quaternion target
  - [`set`](#set) Provided Quaternion Value
  - [`identity`](#identity) The target of an assignment as a unit quaternion
  - [`rotationTo`](#rotationto) Set quaternion rotation is the shortest path between two vectors, the default two vectors are normalized
  - [`getAxisAngle`](#getaxisangle) Get the rotary shaft and the arc of rotation quaternion
  - [`multiply`](#multiply) Quaternion multiplication
  - [`multiplyScalar`](#multiplyscalar) Quaternion scalar multiplication
  - [`scaleAndAdd`](#scaleandadd) Quaternion multiplication and addition: A + B * scale
  - [`rotateX`](#rotatex) About the X axis specified quaternion
  - [`rotateY`](#rotatey) Rotation about the Y axis designated quaternion
  - [`rotateZ`](#rotatez) Around the Z axis specified quaternion
  - [`rotateAround`](#rotatearound) Space around the world at a given axis of rotation quaternion
  - [`rotateAroundLocal`](#rotatearoundlocal) Local space around the specified axis rotation quaternion
  - [`calculateW`](#calculatew) The component w xyz components calculated, normalized by default
  - [`dot`](#dot) Quaternion dot product (scalar product)
  - [`lerp`](#lerp) Element by element linear interpolation: A + t * (B - A)
  - [`sqlerp`](#sqlerp) Quaternion with two spherical interpolation control points
  - [`invert`](#invert) Quaternion inverse
  - [`conjugate`](#conjugate) Conjugating a quaternion, and the unit quaternion equivalent to inversion, but more efficient
  - [`len`](#len) Seek length quaternion
  - [`lengthSqr`](#lengthsqr) Seeking quaternion square of the length
  - [`normalize`](#normalize) Normalized quaternions
  - [`fromAxes`](#fromaxes) Calculated according to the local orientation quaternion coordinate axis, the default three vectors are normalized and mutually perpendicular
  - [`fromViewUp`](#fromviewup) The forward direction and the direction of the viewport computing quaternion
  - [`fromAxisAngle`](#fromaxisangle) The quaternion calculated and the arc of rotation of the rotary shaft
  - [``](#) Set a quaternion from the given euler angle 0, 0, z.
  - [`fromMat3`](#frommat3) Calculating the three-dimensional quaternion matrix information, default zoom information input matrix does not contain
  - [`fromEuler`](#fromeuler) The quaternion calculated Euler angle information, rotation order YZX
  - [`toAxisX`](#toaxisx) This returns the result of the quaternion coordinate system X-axis vector
  - [`toAxisY`](#toaxisy) This returns the result of the quaternion coordinate system Y axis vector
  - [`toAxisZ`](#toaxisz) This returns the result of the quaternion coordinate system the Z-axis vector
  - [`toEuler`](#toeuler) The quaternion calculated Euler angles, return angle x, y in the [-180, 180] interval, z default the range [-90, 90] interval, the rotation order YZX
  - [`strictEquals`](#strictequals) Analyzing quaternion equivalent
  - [`equals`](#equals) Negative floating point error quaternion approximately equivalent Analyzing
  - [`toArray`](#toarray) Quaternion rotation array
  - [`fromArray`](#fromarray) Array to a quaternion
  - [`clone`](#clone) clone a Quat object and return the new object
  - [`set`](#set) Set values with another quaternion
  - [`equals`](#equals) Check whether current quaternion equals another
  - [`toEuler`](#toeuler) Convert quaternion to euler
  - [`fromEuler`](#fromeuler) Convert euler to quaternion
  - [`lerp`](#lerp) Calculate the interpolation result between this quaternion and another one with given ratio
  - [`multiply`](#multiply) Calculate the multiply result between this quaternion and another one
  - [`rotateAround`](#rotatearound) Rotates a quaternion by the given angle (in radians) about a world space axis.
  - [`toString`](#tostring) Convert to a readable string.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:837](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L837) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:841](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L841) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:845](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L845) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:849](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L849) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:49](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L49) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

Obtaining copy specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:72](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L72) |



##### copy

Copy quaternion target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:84](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L84) |



##### set

Provided Quaternion Value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:100](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L100) |



##### identity

The target of an assignment as a unit quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:116](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L116) |



##### rotationTo

Set quaternion rotation is the shortest path between two vectors, the default two vectors are normalized

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:132](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L132) |



##### getAxisAngle

Get the rotary shaft and the arc of rotation quaternion

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/value-types/quat.ts:166](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L166) |

###### Parameters
- `outAxis` Unknown 旋转轴输出
- `q` Unknown 源四元数


##### multiply

Quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:193](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L193) |



##### multiplyScalar

Quaternion scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:213](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L213) |



##### scaleAndAdd

Quaternion multiplication and addition: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:229](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L229) |



##### rotateX

About the X axis specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:245](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L245) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateY

Rotation about the Y axis designated quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:267](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L267) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateZ

Around the Z axis specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:289](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L289) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateAround

Space around the world at a given axis of rotation quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:311](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L311) |

###### Parameters
- `axis` Unknown 旋转轴，默认已归一化
- `rad` Unknown 旋转弧度


##### rotateAroundLocal

Local space around the specified axis rotation quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:331](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L331) |

###### Parameters
- `axis` Unknown 旋转轴
- `rad` Unknown 旋转弧度


##### calculateW

The component w xyz components calculated, normalized by default

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:347](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L347) |



##### dot

Quaternion dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:364](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L364) |



##### lerp

Element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:376](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L376) |



##### sqlerp

Quaternion with two spherical interpolation control points

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:437](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L437) |



##### invert

Quaternion inverse

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:452](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L452) |



##### conjugate

Conjugating a quaternion, and the unit quaternion equivalent to inversion, but more efficient

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:473](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L473) |



##### len

Seek length quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:489](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L489) |



##### lengthSqr

Seeking quaternion square of the length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:501](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L501) |



##### normalize

Normalized quaternions

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:513](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L513) |



##### fromAxes

Calculated according to the local orientation quaternion coordinate axis, the default three vectors are normalized and mutually perpendicular

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:533](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L533) |



##### fromViewUp

The forward direction and the direction of the viewport computing quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:550](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L550) |

###### Parameters
- `view` Unknown 视口面向的前方向，必须归一化
- `up` Unknown 视口的上方向，必须归一化，默认为 (0, 1, 0)


##### fromAxisAngle

The quaternion calculated and the arc of rotation of the rotary shaft

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:565](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L565) |



##### 

Set a quaternion from the given euler angle 0, 0, z.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:583](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L583) |

###### Parameters
- `out` Quat Quaternion to store result.
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Angle to rotate around Z axis in degrees.


##### fromMat3

Calculating the three-dimensional quaternion matrix information, default zoom information input matrix does not contain

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:598](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L598) |



##### fromEuler

The quaternion calculated Euler angle information, rotation order YZX

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:650](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L650) |



##### toAxisX

This returns the result of the quaternion coordinate system X-axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:678](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L678) |



##### toAxisY

This returns the result of the quaternion coordinate system Y axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:696](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L696) |



##### toAxisZ

This returns the result of the quaternion coordinate system the Z-axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:715](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L715) |



##### toEuler

The quaternion calculated Euler angles, return angle x, y in the [-180, 180] interval, z default the range [-90, 90] interval, the rotation order YZX

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:734](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L734) |

###### Parameters
- `outerZ` Unknown z 取值范围区间改为 [-180, -90] U [90, 180]


##### strictEquals

Analyzing quaternion equivalent

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:774](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L774) |



##### equals

Negative floating point error quaternion approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:786](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L786) |



##### toArray

Quaternion rotation array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:802](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L802) |

###### Parameters
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

Array to a quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:819](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L819) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### clone

clone a Quat object and return the new object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:871](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L871) |



##### set

Set values with another quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:881](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L881) |

###### Parameters
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether current quaternion equals another

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:897](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L897) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

Convert quaternion to euler

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:908](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L908) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

Convert euler to quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:919](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L919) |

###### Parameters
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

Calculate the interpolation result between this quaternion and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:930](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L930) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### multiply

Calculate the multiply result between this quaternion and another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:945](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L945) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

Rotates a quaternion by the given angle (in radians) about a world space axis.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:956](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/quat.ts#L956) |

###### Parameters
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to rotate
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The axis around which to rotate in world space
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Angle (in radians) to rotate
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to store result


##### toString

Convert to a readable string.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/value-type.ts#L92) |




