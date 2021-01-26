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
  - [`mul`](#mul) Calculate the multiply result between this quaternion and another one
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
  - [`slerp`](#slerp) Spherical quaternion interpolation
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
| Defined in | [cocos2d/core/value-types/quat.ts:866](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L866) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:870](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L870) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:874](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L874) |



##### w

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/quat.ts:878](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L878) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:48](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L48) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

Calculate the multiply result between this quaternion and another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:65](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L65) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### clone

Obtaining copy specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:79](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L79) |



##### copy

Copy quaternion target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:91](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L91) |



##### set

Provided Quaternion Value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:107](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L107) |



##### identity

The target of an assignment as a unit quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:123](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L123) |



##### rotationTo

Set quaternion rotation is the shortest path between two vectors, the default two vectors are normalized

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:139](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L139) |



##### getAxisAngle

Get the rotary shaft and the arc of rotation quaternion

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:173](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L173) |

###### Parameters
- `outAxis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 旋转轴输出
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> 源四元数


##### multiply

Quaternion multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:200](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L200) |



##### multiplyScalar

Quaternion scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:220](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L220) |



##### scaleAndAdd

Quaternion multiplication and addition: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:236](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L236) |



##### rotateX

About the X axis specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:252](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L252) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateY

Rotation about the Y axis designated quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:280](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L280) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateZ

Around the Z axis specified quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:308](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L308) |

###### Parameters
- `rad` Unknown 旋转弧度


##### rotateAround

Space around the world at a given axis of rotation quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:336](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L336) |

###### Parameters
- `axis` Unknown 旋转轴，默认已归一化
- `rad` Unknown 旋转弧度


##### rotateAroundLocal

Local space around the specified axis rotation quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:356](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L356) |

###### Parameters
- `axis` Unknown 旋转轴
- `rad` Unknown 旋转弧度


##### calculateW

The component w xyz components calculated, normalized by default

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:372](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L372) |



##### dot

Quaternion dot product (scalar product)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:389](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L389) |



##### lerp

Element by element linear interpolation: A + t * (B - A)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:401](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L401) |



##### slerp

Spherical quaternion interpolation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:417](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L417) |



##### sqlerp

Quaternion with two spherical interpolation control points

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:465](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L465) |



##### invert

Quaternion inverse

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:480](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L480) |



##### conjugate

Conjugating a quaternion, and the unit quaternion equivalent to inversion, but more efficient

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:501](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L501) |



##### len

Seek length quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:517](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L517) |



##### lengthSqr

Seeking quaternion square of the length

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:529](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L529) |



##### normalize

Normalized quaternions

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:541](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L541) |



##### fromAxes

Calculated according to the local orientation quaternion coordinate axis, the default three vectors are normalized and mutually perpendicular

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:561](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L561) |



##### fromViewUp

The forward direction and the direction of the viewport computing quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:578](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L578) |

###### Parameters
- `view` Unknown 视口面向的前方向，必须归一化
- `up` Unknown 视口的上方向，必须归一化，默认为 (0, 1, 0)


##### fromAxisAngle

The quaternion calculated and the arc of rotation of the rotary shaft

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:593](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L593) |



##### 

Set a quaternion from the given euler angle 0, 0, z.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:611](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L611) |

###### Parameters
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to store result.
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Angle to rotate around Z axis in degrees.


##### fromMat3

Calculating the three-dimensional quaternion matrix information, default zoom information input matrix does not contain

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:627](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L627) |



##### fromEuler

The quaternion calculated Euler angle information, rotation order YZX

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:679](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L679) |



##### toAxisX

This returns the result of the quaternion coordinate system X-axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:707](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L707) |



##### toAxisY

This returns the result of the quaternion coordinate system Y axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:725](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L725) |



##### toAxisZ

This returns the result of the quaternion coordinate system the Z-axis vector

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:744](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L744) |



##### toEuler

The quaternion calculated Euler angles, return angle x, y in the [-180, 180] interval, z default the range [-90, 90] interval, the rotation order YZX

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:763](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L763) |

###### Parameters
- `outerZ` Unknown z 取值范围区间改为 [-180, -90] U [90, 180]


##### strictEquals

Analyzing quaternion equivalent

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:803](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L803) |



##### equals

Negative floating point error quaternion approximately equivalent Analyzing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:815](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L815) |



##### toArray

Quaternion rotation array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:831](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L831) |

###### Parameters
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

Array to a quaternion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/quat.ts:848](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L848) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### clone

clone a Quat object and return the new object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:900](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L900) |



##### set

Set values with another quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:910](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L910) |

###### Parameters
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether current quaternion equals another

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:926](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L926) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

Convert quaternion to euler

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:937](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L937) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

Convert euler to quaternion

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:948](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L948) |

###### Parameters
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

Calculate the interpolation result between this quaternion and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:959](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L959) |

###### Parameters
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### multiply

Calculate the multiply result between this quaternion and another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:974](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L974) |

###### Parameters
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

Rotates a quaternion by the given angle (in radians) about a world space axis.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/quat.ts:985](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/quat.ts#L985) |

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
| Defined in | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/value-type.ts#L92) |




