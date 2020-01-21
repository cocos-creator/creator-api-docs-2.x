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
| 定义于 | [cocos2d/core/value-types/mat4.ts:62](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L62) |



##### m

> 矩阵数据

| meta | description |
|------|-------------|
| 类型 | Float64Array &#124; Float32Array |
| 定义于 | [cocos2d/core/value-types/mat4.ts:1616](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1616) |






<!-- Method Block -->
#### 方法


##### clone

获得指定矩阵的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:69](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L69) |



##### copy

复制目标矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:87](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L87) |



##### identity

将目标赋值为单位矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:136](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L136) |



##### transpose

转置矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:165](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L165) |



##### invert

矩阵求逆

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:211](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L211) |



##### determinant

矩阵行列式

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:266](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L266) |



##### multiply

矩阵乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:298](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L298) |



##### transform

在给定矩阵变换基础上加入变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:340](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L340) |



##### translate

在给定矩阵变换基础上加入新位移变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:374](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L374) |



##### scale

在给定矩阵变换基础上加入新缩放变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:400](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L400) |



##### rotate

在给定矩阵变换基础上加入新旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:430](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L430) |

###### 参数列表
- `rad` Unknown 旋转角度
- `axis` Unknown 旋转轴


##### rotateX

在给定矩阵变换基础上加入绕 X 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:494](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L494) |

###### 参数列表
- `rad` Unknown 旋转角度


##### rotateY

在给定矩阵变换基础上加入绕 Y 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:540](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L540) |

###### 参数列表
- `rad` Unknown 旋转角度


##### rotateZ

在给定矩阵变换基础上加入绕 Z 轴的旋转变换

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:586](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L586) |

###### 参数列表
- `rad` Unknown 旋转角度


##### fromTranslation

计算位移矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:634](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L634) |



##### fromScaling

计算缩放矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:663](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L663) |



##### fromRotation

计算旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:692](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L692) |



##### fromXRotation

计算绕 X 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:738](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L738) |



##### fromYRotation

计算绕 Y 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:770](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L770) |



##### fromZRotation

计算绕 Z 轴的旋转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:802](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L802) |



##### fromRT

根据旋转和位移信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:834](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L834) |



##### getTranslation

提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:879](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L879) |



##### getScaling

提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:896](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L896) |



##### getRotation

提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:924](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L924) |



##### toRTS

提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:966](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L966) |



##### fromRTS

根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:995](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L995) |



##### fromRTSOrigin

根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1043](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1043) |

###### 参数列表
- `q` Unknown 旋转值
- `v` Unknown 位移值
- `s` Unknown 缩放值
- `o` Unknown 指定变换中心


##### fromQuat

根据指定的旋转信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1100](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1100) |



##### frustum

根据指定的视锥体信息计算矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1148](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1148) |

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
| 定义于 | [cocos2d/core/value-types/mat4.ts:1187](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1187) |

###### 参数列表
- `fovy` Unknown 纵向视角高度
- `aspect` Unknown 长宽比
- `near` Unknown 近平面距离
- `far` Unknown 远平面距离


##### ortho

计算正交投影矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1223](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1223) |

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
| 定义于 | [cocos2d/core/value-types/mat4.ts:1261](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1261) |

###### 参数列表
- `eye` Unknown 当前位置
- `center` Unknown 目标视点
- `up` Unknown 视口上方向


##### inverseTranspose

计算逆转置矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1325](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1325) |



##### add

逐元素矩阵加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1386](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1386) |



##### subtract

逐元素矩阵减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1415](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1415) |



##### multiplyScalar

矩阵标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1444](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1444) |



##### multiplyScalarAndAdd

逐元素矩阵标量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1473](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1473) |



##### strictEquals

矩阵等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1502](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1502) |



##### equals

排除浮点数误差的矩阵近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1518](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1518) |



##### toArray

矩阵转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1582](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1582) |

###### 参数列表
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

数组转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1599](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1599) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_mat4" class="crosslink">cc.mat4</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat4.ts:1624](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1624) |



##### clone

克隆一个 Mat4 对象

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1669](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1669) |



##### set

用另一个矩阵设置这个矩阵的值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1685](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1685) |

###### 参数列表
- `srcObj` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### equals

当前的矩阵是否与指定的矩阵相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1715](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1715) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### fuzzyEquals

近似判断两个矩阵是否相等。<br/>
判断 2 个矩阵是否在默认误差范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1726](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1726) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1739](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1739) |



##### identity

Set the matrix to the identity matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1764](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1764) |



##### transpose

Transpose the values of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1774](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1774) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### invert

Inverts a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1785](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1785) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### adjoint

Calculates the adjugate of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1796](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1796) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### determinant

Calculates the determinant of a mat4

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1807](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1807) |



##### add

Adds two Mat4

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1816](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1816) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created.


##### subtract

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1828](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1828) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiply

Subtracts the current matrix with another one

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1838](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1838) |

###### 参数列表
- `other` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the second operand


##### multiplyScalar

Multiply each element of the matrix by a scalar.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1848](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1848) |

###### 参数列表
- `number` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> amount to scale the matrix's elements by


##### translate

Translate a mat4 by the given vector

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1858](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1858) |

###### 参数列表
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to translate by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### scale

Scales the mat4 by the dimensions in the given vec3

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1870](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1870) |

###### 参数列表
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> vector to scale by
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### rotate

Rotates a mat4 by the given angle around the given axis

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1882](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1882) |

###### 参数列表
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angle to rotate the matrix by
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the axis to rotate around
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the receiving matrix, you can pass the same matrix to save result to itself, if not provided, a new matrix will be created


##### getTranslation

Returns the translation vector component of a transformation matrix.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1895](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1895) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive translation component, if not provided, a new vec3 will be created


##### getScale

Returns the scale factor component of a transformation matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1906](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1906) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Vector to receive scale component, if not provided, a new vec3 will be created


##### getRotation

Returns the rotation factor component of a transformation matrix

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1917](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1917) |

###### 参数列表
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Vector to receive rotation component, if not provided, a new quaternion object will be created


##### fromRTS

Restore the matrix values from a quaternion rotation, vector translation and vector scale

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1928](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1928) |

###### 参数列表
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion
- `v` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Translation vector
- `s` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scaling vector


##### fromQuat

Restore the matrix values from a quaternion rotation

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/value-types/mat4.ts:1941](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/mat4.ts#L1941) |

###### 参数列表
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> Rotation quaternion


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/value-type.ts#L63) |

###### 参数列表
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient



