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
  - [`mat4`](#mat4) The convenience method to create a new <a href="../classes/Mat4.html" class="crosslink">cc.Mat4</a>.
  - [`lerp`](#lerp) Linearly interpolates between this value to to value by ratio which is in the range [0, 1].



### Details




<!-- Method Block -->
#### Methods


##### constructor

Constructor
see <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/mat4.js:43](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L43) |

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
| Defined in | [cocos2d/core/value-types/mat4.js:95](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L95) |



##### set

Sets the matrix with another one's value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:110](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L110) |

###### Parameters
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

Check whether two matrix equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:139](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L139) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

Check whether two matrix equal with default degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:150](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L150) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

Transform to string with matrix informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:163](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L163) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:180](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L180) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:190](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L190) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:201](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L201) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:212](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L212) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:223](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L223) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:232](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L232) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### sub

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:244](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L244) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mul

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:256](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L256) |

###### Parameters
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mulScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:268](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L268) |

###### Parameters
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:280](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L280) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:292](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L292) |

###### Parameters
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:304](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L304) |

###### Parameters
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:317](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L317) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:328](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L328) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:339](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L339) |

###### Parameters
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:350](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L350) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:363](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L363) |

###### Parameters
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### mat4

The convenience method to create a new <a href="../classes/Mat4.html" class="crosslink">cc.Mat4</a>.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/value-types/mat4.js:375](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/mat4.js#L375) |

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


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/value-type.js:67](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/value-types/value-type.js#L67) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



