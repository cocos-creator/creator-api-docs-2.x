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

  - [`mul`](#mul) Multiply the current matrix with another one
  - [`mulScalar`](#mulscalar) Multiply each element of the matrix by a scalar.
  - [`sub`](#sub) Subtracts the current matrix with another one
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
| Defined in | [cocos2d/core/value-types/mat4.ts:86](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L86) |



##### m

> Matrix Data

| meta | description |
|------|-------------|
| Type | Float64Array &#124; Float32Array |
| Defined in | [cocos2d/core/value-types/mat4.ts:1641](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1641) |






<!-- Method Block -->
#### Methods


##### mul

Multiply the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:52](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L52) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mulScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:63](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L63) |

###### Parameters
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### sub

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:74](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L74) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### clone

Copy of the specified matrix to obtain

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:93](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L93) |



##### copy

Copy the target matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:111](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L111) |



##### identity

The target of an assignment is the identity matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:160](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L160) |



##### transpose

Transposed matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:189](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L189) |



##### invert

Matrix inversion

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:235](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L235) |



##### determinant

Matrix determinant

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:290](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L290) |



##### multiply

Matrix Multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:322](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L322) |



##### transform

Was added in a given transformation matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:364](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L364) |



##### translate

Add new displacement transducer in a matrix transformation on the basis of a given

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:398](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L398) |



##### scale

Add new scaling transformation in a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:424](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L424) |



##### rotate

Add a new rotational transform matrix transformation on the basis of a given

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:454](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L454) |

###### Parameters
- `rad` Unknown 旋转角度
- `axis` Unknown 旋转轴


##### rotateX

Add rotational transformation around the X axis at a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:518](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L518) |

###### Parameters
- `rad` Unknown 旋转角度


##### rotateY

Add about the Y axis rotation transformation in a given matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:564](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L564) |

###### Parameters
- `rad` Unknown 旋转角度


##### rotateZ

Added about the Z axis at a given rotational transformation matrix transformation on the basis of

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:610](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L610) |

###### Parameters
- `rad` Unknown 旋转角度


##### fromTranslation

Displacement matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:658](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L658) |



##### fromScaling

Scaling matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:687](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L687) |



##### fromRotation

Calculates the rotation matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:716](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L716) |



##### fromXRotation

Calculating rotation matrix about the X axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:762](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L762) |



##### fromYRotation

Calculating rotation matrix about the Y axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:794](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L794) |



##### fromZRotation

Calculating rotation matrix about the Z axis

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:826](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L826) |



##### fromRT

The rotation and displacement information calculating matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:858](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L858) |



##### getTranslation

Extracting displacement information of the matrix, the matrix transform to the default sequential application S-> R-> T is

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:903](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L903) |



##### getScaling

Scaling information extraction matrix, the matrix transform to the default sequential application S-> R-> T is

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:920](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L920) |



##### getRotation

Rotation information extraction matrix, the matrix containing no default input scaling information, such as the use of `toRTS` should consider the scaling function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:948](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L948) |



##### toRTS

Extracting rotational displacement, zoom information, the default matrix transformation in order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:990](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L990) |



##### fromRTS

The rotary displacement, the scaling matrix calculation information, the order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1019](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1019) |



##### fromRTSOrigin

According to the specified rotation, displacement, and scale conversion matrix calculation information center, order S-> R-> T applications

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1067](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1067) |

###### Parameters
- `q` Unknown 旋转值
- `v` Unknown 位移值
- `s` Unknown 缩放值
- `o` Unknown 指定变换中心


##### fromQuat

The rotation matrix calculation information specified

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1124](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1124) |



##### frustum

The matrix calculation information specified frustum

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1172](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1172) |

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
| Defined in | [cocos2d/core/value-types/mat4.ts:1211](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1211) |

###### Parameters
- `fovy` Unknown 纵向视角高度
- `aspect` Unknown 长宽比
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### ortho

Computing orthogonal projection matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1247](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1247) |

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
| Defined in | [cocos2d/core/value-types/mat4.ts:1285](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1285) |

###### Parameters
- `eye` Unknown 当前位置
- `center` Unknown 目标视点
- `up` Unknown 视口上方向


##### inverseTranspose

Reversal matrix calculation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1349](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1349) |



##### add

Element by element matrix addition

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1410](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1410) |



##### subtract

Matrix element by element subtraction

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1439](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1439) |



##### multiplyScalar

Matrix scalar multiplication

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1468](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1468) |



##### multiplyScalarAndAdd

Elements of the matrix by the scalar multiplication and addition: A + B * scale

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1497](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1497) |



##### strictEquals

Analyzing the equivalent matrix

| meta | description |
|------|-------------|
| Returns | Bool 
| Defined in | [cocos2d/core/value-types/mat4.ts:1526](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1526) |



##### equals

Negative floating point error is approximately equivalent to determining a matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1543](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1543) |



##### toArray

Matrix transpose array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1607](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1607) |

###### Parameters
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

Transfer matrix array

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1624](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1624) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### constructor

Constructor
see <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.ts:1649](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1649) |



##### clone

clone a Mat4 object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1689](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1689) |



##### set

Sets the matrix with another one's value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1705](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1705) |

###### Parameters
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

Check whether two matrix equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1735](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1735) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

Check whether two matrix equal with default degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1746](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1746) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

Transform to string with matrix informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1759](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1759) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1784](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1784) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1794](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1794) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1805](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1805) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1816](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1816) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1827](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1827) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1836](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1836) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### subtract

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1848](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1848) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiply

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1858](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1858) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiplyScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1868](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1868) |

###### Parameters
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1878](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1878) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1890](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1890) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1902](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1902) |

###### Parameters
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1915](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1915) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1926](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1926) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1937](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1937) |

###### Parameters
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1948](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1948) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.ts:1961](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/mat4.ts#L1961) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L63) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



