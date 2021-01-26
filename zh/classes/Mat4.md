## `Mat4` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


表示 4*4 矩阵



### 索引

##### 属性（properties）

  - [`IDENTITY`](#identity) `Mat4` Identity  of Mat4
  - [`m`](#m) `Float64Array | Float32Array` 矩阵数据



##### 方法

  - [`mul`](#mul) 将当前矩阵与指定矩阵相乘
  - [`mulScalar`](#mulscalar) 将矩阵的每一个元素都乘以指定的缩放值。
  - [`sub`](#sub) 将当前矩阵与指定的矩阵相减
  - [`clone`](#clone) 获得指定矩阵的拷贝
  - [`copy`](#copy) 复制目标矩阵
  - [`identity`](#identity) 将目标赋值为单位矩阵
  - [`transpose`](#transpose) 转置矩阵
  - [`invert`](#invert) 矩阵求逆
  - [`determinant`](#determinant) 矩阵行列式
  - [`multiply`](#multiply) 矩阵乘法
  - [`transform`](#transform) 在给定矩阵变换基础上加入变换
  - [`translate`](#translate) 在给定矩阵变换基础上加入新位移变换
  - [`scale`](#scale) 在给定矩阵变换基础上加入新缩放变换
  - [`rotate`](#rotate) 在给定矩阵变换基础上加入新旋转变换
  - [`rotateX`](#rotatex) 在给定矩阵变换基础上加入绕 X 轴的旋转变换
  - [`rotateY`](#rotatey) 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
  - [`rotateZ`](#rotatez) 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
  - [`fromTranslation`](#fromtranslation) 计算位移矩阵
  - [`fromScaling`](#fromscaling) 计算缩放矩阵
  - [`fromRotation`](#fromrotation) 计算旋转矩阵
  - [`fromXRotation`](#fromxrotation) 计算绕 X 轴的旋转矩阵
  - [`fromYRotation`](#fromyrotation) 计算绕 Y 轴的旋转矩阵
  - [`fromZRotation`](#fromzrotation) 计算绕 Z 轴的旋转矩阵
  - [`fromRT`](#fromrt) 根据旋转和位移信息计算矩阵
  - [`getTranslation`](#gettranslation) 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
  - [`getScaling`](#getscaling) 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
  - [`getRotation`](#getrotation) 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。
  - [`toRTS`](#torts) 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
  - [`fromRTS`](#fromrts) 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
  - [`fromRTSOrigin`](#fromrtsorigin) 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
  - [`fromQuat`](#fromquat) 根据指定的旋转信息计算矩阵
  - [`frustum`](#frustum) 根据指定的视锥体信息计算矩阵
  - [`perspective`](#perspective) 计算透视投影矩阵
  - [`ortho`](#ortho) 计算正交投影矩阵
  - [`lookAt`](#lookat) 根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行
  - [`inverseTranspose`](#inversetranspose) 计算逆转置矩阵
  - [`add`](#add) 逐元素矩阵加法
  - [`subtract`](#subtract) 逐元素矩阵减法
  - [`multiplyScalar`](#multiplyscalar) 矩阵标量乘法
  - [`multiplyScalarAndAdd`](#multiplyscalarandadd) 逐元素矩阵标量乘加: A + B * scale
  - [`strictEquals`](#strictequals) 矩阵等价判断
  - [`equals`](#equals) 排除浮点数误差的矩阵近似等价判断
  - [`toArray`](#toarray) 矩阵转数组
  - [`fromArray`](#fromarray) 数组转矩阵
  - [`constructor`](#constructor) 构造函数，可查看 <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>
  - [`clone`](#clone) 克隆一个 Mat4 对象
  - [`set`](#set) 用另一个矩阵设置这个矩阵的值。
  - [`equals`](#equals) 当前的矩阵是否与指定的矩阵相等。
  - [`fuzzyEquals`](#fuzzyequals) 近似判断两个矩阵是否相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
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
  - [`lerp`](#lerp) 线性插值。



### Details


#### 属性（properties）


##### IDENTITY

> Identity  of Mat4

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> |
| 定义于 | [cocos2d/core/value-types/mat4.ts:86](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L86) |



##### m

> 矩阵数据

| meta | description |
|------|-------------|
| 类型 | Float64Array &#124; Float32Array |
| 定义于 | [cocos2d/core/value-types/mat4.ts:1641](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1641) |






<!-- Method Block -->
#### 方法


##### mul

将当前矩阵与指定矩阵相乘

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:52](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L52) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### mulScalar

将矩阵的每一个元素都乘以指定的缩放值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:63](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L63) |

###### 参数列表
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### sub

将当前矩阵与指定的矩阵相减

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:74](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L74) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### clone

获得指定矩阵的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:93](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L93) |



##### copy

复制目标矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:111](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L111) |



##### identity

将目标赋值为单位矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:160](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L160) |



##### transpose

转置矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:189](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L189) |



##### invert

矩阵求逆

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:235](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L235) |



##### determinant

矩阵行列式

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:290](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L290) |



##### multiply

矩阵乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:322](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L322) |



##### transform

在给定矩阵变换基础上加入变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:364](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L364) |



##### translate

在给定矩阵变换基础上加入新位移变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:398](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L398) |



##### scale

在给定矩阵变换基础上加入新缩放变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:424](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L424) |



##### rotate

在给定矩阵变换基础上加入新旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:454](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L454) |

###### 参数列表
- `rad` Unknown 旋转角度
- `axis` Unknown 旋转轴


##### rotateX

在给定矩阵变换基础上加入绕 X 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:518](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L518) |

###### 参数列表
- `rad` Unknown 旋转角度


##### rotateY

在给定矩阵变换基础上加入绕 Y 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:564](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L564) |

###### 参数列表
- `rad` Unknown 旋转角度


##### rotateZ

在给定矩阵变换基础上加入绕 Z 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:610](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L610) |

###### 参数列表
- `rad` Unknown 旋转角度


##### fromTranslation

计算位移矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:658](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L658) |



##### fromScaling

计算缩放矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:687](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L687) |



##### fromRotation

计算旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:716](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L716) |



##### fromXRotation

计算绕 X 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:762](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L762) |



##### fromYRotation

计算绕 Y 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:794](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L794) |



##### fromZRotation

计算绕 Z 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:826](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L826) |



##### fromRT

根据旋转和位移信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:858](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L858) |



##### getTranslation

提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:903](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L903) |



##### getScaling

提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:920](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L920) |



##### getRotation

提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:948](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L948) |



##### toRTS

提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:990](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L990) |



##### fromRTS

根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1019](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1019) |



##### fromRTSOrigin

根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1067](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1067) |

###### 参数列表
- `q` Unknown 旋转值
- `v` Unknown 位移值
- `s` Unknown 缩放值
- `o` Unknown 指定变换中心


##### fromQuat

根据指定的旋转信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1124](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1124) |



##### frustum

根据指定的视锥体信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1172](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1172) |

###### 参数列表
- `left` Unknown 左平面距离
- `right` Unknown 右平面距离
- `bottom` Unknown 下平面距离
- `top` Unknown 上平面距离
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### perspective

计算透视投影矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1211](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1211) |

###### 参数列表
- `fovy` Unknown 纵向视角高度
- `aspect` Unknown 长宽比
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### ortho

计算正交投影矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1247](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1247) |

###### 参数列表
- `left` Unknown 左平面距离
- `right` Unknown 右平面距离
- `bottom` Unknown 下平面距离
- `top` Unknown 上平面距离
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### lookAt

根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1285](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1285) |

###### 参数列表
- `eye` Unknown 当前位置
- `center` Unknown 目标视点
- `up` Unknown 视口上方向


##### inverseTranspose

计算逆转置矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1349](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1349) |



##### add

逐元素矩阵加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1410](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1410) |



##### subtract

逐元素矩阵减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1439](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1439) |



##### multiplyScalar

矩阵标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1468](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1468) |



##### multiplyScalarAndAdd

逐元素矩阵标量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1497](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1497) |



##### strictEquals

矩阵等价判断

| meta | description |
|------|-------------|
| 返回 | Bool 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1526](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1526) |



##### equals

排除浮点数误差的矩阵近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1543](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1543) |



##### toArray

矩阵转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1607](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1607) |

###### 参数列表
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

数组转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1624](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1624) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1649](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1649) |



##### clone

克隆一个 Mat4 对象

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1689](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1689) |



##### set

用另一个矩阵设置这个矩阵的值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1705](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1705) |

###### 参数列表
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

当前的矩阵是否与指定的矩阵相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1735](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1735) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

近似判断两个矩阵是否相等。<br/>
判断 2 个矩阵是否在默认误差范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1746](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1746) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1759](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1759) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1784](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1784) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1794](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1794) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1805](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1805) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1816](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1816) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1827](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1827) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1836](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1836) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### subtract

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1848](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1848) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiply

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1858](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1858) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiplyScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1868](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1868) |

###### 参数列表
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1878](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1878) |

###### 参数列表
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1890](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1890) |

###### 参数列表
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1902](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1902) |

###### 参数列表
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1915](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1915) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1926](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1926) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1937](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1937) |

###### 参数列表
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1948](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1948) |

###### 参数列表
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1961](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/mat4.ts#L1961) |

###### 参数列表
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/value-types/value-type.ts#L63) |

###### 参数列表
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



