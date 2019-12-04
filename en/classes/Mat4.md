## `Mat4` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)


Representation of 4*4 matrix.



### Index



##### Methods

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
  - [`sub`](#sub) Subtracts the current matrix with another one
  - [`mul`](#mul) Subtracts the current matrix with another one
  - [`mulScalar`](#mulscalar) Multiply each element of the matrix by a scalar.
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




<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.js:44](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L44) |

###### Parameters
- `m00` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 0, row 0 position (index 0)
- `m01` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 0, row 1 position (index 1)
- `m02` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 0, row 2 position (index 2)
- `m03` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 0, row 3 position (index 3)
- `m10` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 1, row 0 position (index 4)
- `m11` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 1, row 1 position (index 5)
- `m12` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 1, row 2 position (index 6)
- `m13` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 1, row 3 position (index 7)
- `m20` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 2, row 0 position (index 8)
- `m21` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 2, row 1 position (index 9)
- `m22` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 2, row 2 position (index 10)
- `m23` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 2, row 3 position (index 11)
- `m30` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 3, row 0 position (index 12)
- `m31` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 3, row 1 position (index 13)
- `m32` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 3, row 2 position (index 14)
- `m33` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Component in column 3, row 3 position (index 15)


##### clone

clone a Mat4 object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:108](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L108) |



##### set

Sets the matrix with another one's value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:124](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L124) |

###### Parameters
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

Check whether two matrix equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:154](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L154) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

Check whether two matrix equal with default degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:165](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L165) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

Transform to string with matrix informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:178](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L178) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:203](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L203) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:213](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L213) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:224](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L224) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:235](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L235) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:246](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L246) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:255](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L255) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### sub

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:267](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L267) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mul

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:279](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L279) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mulScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:291](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L291) |

###### Parameters
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:303](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L303) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:315](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L315) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:327](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L327) |

###### Parameters
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:340](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L340) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:351](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L351) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:362](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L362) |

###### Parameters
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:373](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L373) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:386](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/mat4.js#L386) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.js:67](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/value-type.js#L67) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



