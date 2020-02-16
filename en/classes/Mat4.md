## `Mat4` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 4*4 matrix.



### Index

##### Properties

  - [`IDENTITY`](#identity) `Mat4` Identity  of Mat4
  - [`m`](#m) `Float64Array | Float32Array` Matrix Data



##### Methods

  - [`clone`](#clone) Copy of the specified matrix to obtain
  - [`copy`](#copy) Copy the target matrix
  - [`identity`](#identity) The target of an assignment is the identity matrix
  - [`transpose`](#transpose) Transposed matrix
  - [`invert`](#invert) Matrix inversion
  - [`determinant`](#determinant) Matrix determinant
  - [`multiply`](#multiply) Matrix Multiplication
  - [`transform`](#transform) Was added in a given transformation matrix transformation on the basis of
  - [`translate`](#translate) Add new displacement transducer in a matrix transformation on the basis of a given
  - [`scale`](#scale) Add new scaling transformation in a given matrix transformation on the basis of
  - [`rotate`](#rotate) Add a new rotational transform matrix transformation on the basis of a given
  - [`rotateX`](#rotatex) Add rotational transformation around the X axis at a given matrix transformation on the basis of
  - [`rotateY`](#rotatey) Add about the Y axis rotation transformation in a given matrix transformation on the basis of
  - [`rotateZ`](#rotatez) Added about the Z axis at a given rotational transformation matrix transformation on the basis of
  - [`fromTranslation`](#fromtranslation) Displacement matrix calculation
  - [`fromScaling`](#fromscaling) Scaling matrix calculation
  - [`fromRotation`](#fromrotation) Calculates the rotation matrix
  - [`fromXRotation`](#fromxrotation) Calculating rotation matrix about the X axis
  - [`fromYRotation`](#fromyrotation) Calculating rotation matrix about the Y axis
  - [`fromZRotation`](#fromzrotation) Calculating rotation matrix about the Z axis
  - [`fromRT`](#fromrt) The rotation and displacement information calculating matrix
  - [`getTranslation`](#gettranslation) Extracting displacement information of the matrix, the matrix transform to the default sequential application S-> R-> T is
  - [`getScaling`](#getscaling) Scaling information extraction matrix, the matrix transform to the default sequential application S-> R-> T is
  - [`getRotation`](#getrotation) Rotation information extraction matrix, the matrix containing no default input scaling information, such as the use of `toRTS` should consider the scaling function.
  - [`toRTS`](#torts) Extracting rotational displacement, zoom information, the default matrix transformation in order S-> R-> T applications
  - [`fromRTS`](#fromrts) The rotary displacement, the scaling matrix calculation information, the order S-> R-> T applications
  - [`fromRTSOrigin`](#fromrtsorigin) According to the specified rotation, displacement, and scale conversion matrix calculation information center, order S-> R-> T applications
  - [`fromQuat`](#fromquat) The rotation matrix calculation information specified
  - [`frustum`](#frustum) The matrix calculation information specified frustum
  - [`perspective`](#perspective) Perspective projection matrix calculation
  - [`ortho`](#ortho) Computing orthogonal projection matrix
  - [`lookAt`](#lookat) `Up` parallel vector or vector center` not be zero - the matrix calculation according to the viewpoint, note` eye
  - [`inverseTranspose`](#inversetranspose) Reversal matrix calculation
  - [`add`](#add) Element by element matrix addition
  - [`subtract`](#subtract) Matrix element by element subtraction
  - [`multiplyScalar`](#multiplyscalar) Matrix scalar multiplication
  - [`multiplyScalarAndAdd`](#multiplyscalarandadd) Elements of the matrix by the scalar multiplication and addition: A + B * scale
  - [`strictEquals`](#strictequals) Analyzing the equivalent matrix
  - [`equals`](#equals) Negative floating point error is approximately equivalent to determining a matrix
  - [`toArray`](#toarray) Matrix transpose array
  - [`fromArray`](#fromarray) Transfer matrix array
  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Mat4 object
  - [`set`](#set) Sets the matrix with another one's value
  - [`equals`](#equals) Check whether two matrix equal
  - [`fuzzyEquals`](#fuzzyequals) Check whether two matrix equal with default degree of variance.
  - [`toString`](#tostring) Transform to string with matrix informations
  - [`identity`](#identity) Set the matrix to the identity matrix
  - [`transpose`](#transpose) Transpose the values of a mat4
  - [`invert`](#invert) Inverts a mat4
  - [`adjoint`](#adjoint) Calculates the adjugate of a mat4
  - [`determinant`](#determinant) Calculates the determinant of a mat4
  - [`add`](#add) Adds two Mat4
  - [`subtract`](#subtract) Subtracts the current matrix with another one
  - [`multiply`](#multiply) Subtracts the current matrix with another one
  - [`multiplyScalar`](#multiplyscalar) Multiply each element of the matrix by a scalar.
  - [`translate`](#translate) Translate a mat4 by the given vector
  - [`scale`](#scale) Scales the mat4 by the dimensions in the given vec3
  - [`rotate`](#rotate) Rotates a mat4 by the given angle around the given axis
  - [`getTranslation`](#gettranslation) Returns the translation vector component of a transformation matrix.
  - [`getScale`](#getscale) Returns the scale factor component of a transformation matrix
  - [`getRotation`](#getrotation) Returns the rotation factor component of a transformation matrix
  - [`fromRTS`](#fromrts) Restore the matrix values from a quaternion rotation, vector translation and vector scale
  - [`fromQuat`](#fromquat) Restore the matrix values from a quaternion rotation
  - [`lerp`](#lerp) Linearly interpolates between this value to to value by ratio which is in the range [0, 1].



### Details


#### Properties


##### IDENTITY

> Identity  of Mat4

| meta | description |
|------|-------------|
| Type | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> |
| Defined in | [cocos2d/core/value-types/mat4.ts:62](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L62) |



##### m

> Matrix Data

| meta | description |
|------|-------------|
| Type | Float64Array &#124; Float32Array |
| Defined in | [cocos2d/core/value-types/mat4.ts:1616](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1616) |






<!-- Method Block -->
#### Methods


##### clone

Copy of the specified matrix to obtain

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:69](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L69) |



##### copy

Copy the target matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:87](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L87) |



##### identity

The target of an assignment is the identity matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:136](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L136) |



##### transpose

Transposed matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:165](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L165) |



##### invert

Matrix inversion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:211](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L211) |



##### determinant

Matrix determinant

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:266](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L266) |



##### multiply

Matrix Multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:298](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L298) |



##### transform

Was added in a given transformation matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:340](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L340) |



##### translate

Add new displacement transducer in a matrix transformation on the basis of a given

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:374](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L374) |



##### scale

Add new scaling transformation in a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:400](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L400) |



##### rotate

Add a new rotational transform matrix transformation on the basis of a given

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:430](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L430) |

###### Parameters
- `rad` Unknown 旋转角度
- `axis` Unknown 旋转轴


##### rotateX

Add rotational transformation around the X axis at a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:494](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L494) |

###### Parameters
- `rad` Unknown 旋转角度


##### rotateY

Add about the Y axis rotation transformation in a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:540](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L540) |

###### Parameters
- `rad` Unknown 旋转角度


##### rotateZ

Added about the Z axis at a given rotational transformation matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:586](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L586) |

###### Parameters
- `rad` Unknown 旋转角度


##### fromTranslation

Displacement matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:634](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L634) |



##### fromScaling

Scaling matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:663](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L663) |



##### fromRotation

Calculates the rotation matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:692](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L692) |



##### fromXRotation

Calculating rotation matrix about the X axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:738](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L738) |



##### fromYRotation

Calculating rotation matrix about the Y axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:770](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L770) |



##### fromZRotation

Calculating rotation matrix about the Z axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:802](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L802) |



##### fromRT

The rotation and displacement information calculating matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:834](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L834) |



##### getTranslation

Extracting displacement information of the matrix, the matrix transform to the default sequential application S-> R-> T is

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:879](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L879) |



##### getScaling

Scaling information extraction matrix, the matrix transform to the default sequential application S-> R-> T is

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:896](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L896) |



##### getRotation

Rotation information extraction matrix, the matrix containing no default input scaling information, such as the use of `toRTS` should consider the scaling function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:924](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L924) |



##### toRTS

Extracting rotational displacement, zoom information, the default matrix transformation in order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:966](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L966) |



##### fromRTS

The rotary displacement, the scaling matrix calculation information, the order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:995](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L995) |



##### fromRTSOrigin

According to the specified rotation, displacement, and scale conversion matrix calculation information center, order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1043](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1043) |

###### Parameters
- `q` Unknown 旋转值
- `v` Unknown 位移值
- `s` Unknown 缩放值
- `o` Unknown 指定变换中心


##### fromQuat

The rotation matrix calculation information specified

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1100](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1100) |



##### frustum

The matrix calculation information specified frustum

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1148](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1148) |

###### Parameters
- `left` Unknown 左平面距离
- `right` Unknown 右平面距离
- `bottom` Unknown 下平面距离
- `top` Unknown 上平面距离
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### perspective

Perspective projection matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1187](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1187) |

###### Parameters
- `fovy` Unknown 纵向视角高度
- `aspect` Unknown 长宽比
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### ortho

Computing orthogonal projection matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1223](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1223) |

###### Parameters
- `left` Unknown 左平面距离
- `right` Unknown 右平面距离
- `bottom` Unknown 下平面距离
- `top` Unknown 上平面距离
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### lookAt

`Up` parallel vector or vector center` not be zero - the matrix calculation according to the viewpoint, note` eye

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1261](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1261) |

###### Parameters
- `eye` Unknown 当前位置
- `center` Unknown 目标视点
- `up` Unknown 视口上方向


##### inverseTranspose

Reversal matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1325](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1325) |



##### add

Element by element matrix addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1386](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1386) |



##### subtract

Matrix element by element subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1415](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1415) |



##### multiplyScalar

Matrix scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1444](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1444) |



##### multiplyScalarAndAdd

Elements of the matrix by the scalar multiplication and addition: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1473](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1473) |



##### strictEquals

Analyzing the equivalent matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1502](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1502) |



##### equals

Negative floating point error is approximately equivalent to determining a matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1518](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1518) |



##### toArray

Matrix transpose array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1582](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1582) |

###### Parameters
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

Transfer matrix array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1599](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1599) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1624](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1624) |



##### clone

clone a Mat4 object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1669](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1669) |



##### set

Sets the matrix with another one's value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1685](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1685) |

###### Parameters
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

Check whether two matrix equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1715](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1715) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

Check whether two matrix equal with default degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1726](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1726) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

Transform to string with matrix informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1739](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1739) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1764](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1764) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1774](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1774) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1785](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1785) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1796](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1796) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1807](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1807) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1816](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1816) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### subtract

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1828](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1828) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiply

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1838](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1838) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiplyScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1848](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1848) |

###### Parameters
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1858](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1858) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1870](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1870) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1882](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1882) |

###### Parameters
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1895](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1895) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1906](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1906) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1917](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1917) |

###### Parameters
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1928](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1928) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1941](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/mat4.ts#L1941) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/value-type.ts#L63) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



