## `Vec3` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)


表示 3D 向量和坐标



### 索引

##### 属性（properties）

  - [`ONE`](#one) `Vec3` 新 Vec3 对象。
  - [`ZERO`](#zero) `Vec3` 返回 x = 0，y = 0，z = 0 的 Vec3 对象。
  - [`UP`](#up) `Vec3` 返回 x = 0, y = 1, z = 0 的 Vec3 对象。
  - [`RIGHT`](#right) `Vec3` 返回 x = 1，y = 0，z = 0 的 Vec3 对象。
  - [`FRONT`](#front) `Vec3` 返回 x = 0，y = 0，z = 1 的 Vec3 对象。
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 



##### 方法

  - [`zero`](#zero) 将目标赋值为零向量
  - [`clone`](#clone) 获得指定向量的拷贝
  - [`copy`](#copy) 复制目标向量
  - [`set`](#set) 设置向量值
  - [`add`](#add) 逐元素向量加法
  - [`subtract`](#subtract) 逐元素向量减法
  - [`multiply`](#multiply) 逐元素向量乘法 (分量积)
  - [`divide`](#divide) 逐元素向量除法
  - [`ceil`](#ceil) 逐元素向量向上取整
  - [`floor`](#floor) 逐元素向量向下取整
  - [`min`](#min) 逐元素向量最小值
  - [`max`](#max) 逐元素向量最大值
  - [`round`](#round) 逐元素向量四舍五入取整
  - [`multiplyScalar`](#multiplyscalar) 向量标量乘法
  - [`scaleAndAdd`](#scaleandadd) 逐元素向量乘加: A + B * scale
  - [`distance`](#distance) 求两向量的欧氏距离
  - [`squaredDistance`](#squareddistance) 求两向量的欧氏距离平方
  - [`len`](#len) 求向量长度
  - [`lengthSqr`](#lengthsqr) 求向量长度平方
  - [`negate`](#negate) 逐元素向量取负
  - [`inverse`](#inverse) 逐元素向量取倒数，接近 0 时返回 Infinity
  - [`inverseSafe`](#inversesafe) 逐元素向量取倒数，接近 0 时返回 0
  - [`normalize`](#normalize) 归一化向量
  - [`dot`](#dot) 向量点积（数量积）
  - [`cross`](#cross) 向量叉积（向量积）
  - [`lerp`](#lerp) 逐元素向量线性插值： A + t * (B - A)
  - [`random`](#random) 生成一个在单位球体上均匀分布的随机向量
  - [`transformMat4`](#transformmat4) 向量与四维矩阵乘法，默认向量第四位为 1。
  - [`transformMat4Normal`](#transformmat4normal) 向量与四维矩阵乘法，默认向量第四位为 0。
  - [`transformMat3`](#transformmat3) 向量与三维矩阵乘法
  - [`transformQuat`](#transformquat) 向量四元数乘法
  - [`rotateX`](#rotatex) 绕 X 轴旋转向量指定弧度
  - [`rotateY`](#rotatey) 绕 Y 轴旋转向量指定弧度
  - [`rotateZ`](#rotatez) 绕 Z 轴旋转向量指定弧度
  - [`strictEquals`](#strictequals) 向量等价判断
  - [`equals`](#equals) 排除浮点数误差的向量近似等价判断
  - [`angle`](#angle) 求两向量夹角弧度
  - [`projectOnPlane`](#projectonplane) 计算向量在指定平面上的投影
  - [`project`](#project) 计算向量在指定向量上的投影
  - [`toArray`](#toarray) 向量转数组
  - [`fromArray`](#fromarray) 数组转向量
  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec3:method
  - [`clone`](#clone) 克隆一个 Vec3 值
  - [`set`](#set) 用另一个向量设置当前的向量对象值。
  - [`equals`](#equals) 当前的向量是否与指定的向量相等。
  - [`fuzzyEquals`](#fuzzyequals) 近似判断两个点是否相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`lerp`](#lerp) 线性插值。
  - [`clampf`](#clampf) 返回指定限制区域后的向量。
  - [`addSelf`](#addself) 向量加法。
  - [`add`](#add) 向量加法，并返回新结果。
  - [`subtract`](#subtract) 向量减法。
  - [`multiplyScalar`](#multiplyscalar) 缩放当前向量。
  - [`multiply`](#multiply) 分量相乘。
  - [`divide`](#divide) 向量除法。
  - [`negate`](#negate) 向量取反。
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`len`](#len) 返回该向量的长度。
  - [`lengthSqr`](#lengthsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。
  - [`transformMat4`](#transformmat4) Transforms the vec3 with a mat4. 4th vector component is implicitly '1'
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y, and z
  - [`angle`](#angle) 夹角的弧度。
  - [`project`](#project) 返回当前向量在指定 vector 向量上的投影向量。
  - [`signAngle`](#signangle) 带方向的夹角的弧度。
  - [`rotate`](#rotate) 返回旋转给定弧度后的新向量。
  - [`rotateSelf`](#rotateself) 按指定弧度旋转向量。



### Details


#### 属性（properties）


##### ONE

> 新 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:81](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L81) |



##### ZERO

> 返回 x = 0，y = 0，z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:91](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L91) |



##### UP

> 返回 x = 0, y = 1, z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:101](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L101) |



##### RIGHT

> 返回 x = 1，y = 0，z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:111](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L111) |



##### FRONT

> 返回 x = 0，y = 0，z = 1 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:121](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L121) |



##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:926](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L926) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:930](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L930) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.ts:934](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L934) |






<!-- Method Block -->
#### 方法


##### zero

将目标赋值为零向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:132](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L132) |



##### clone

获得指定向量的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:147](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L147) |



##### copy

复制目标向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:159](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L159) |



##### set

设置向量值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:174](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L174) |



##### add

逐元素向量加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:189](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L189) |



##### subtract

逐元素向量减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:204](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L204) |



##### multiply

逐元素向量乘法 (分量积)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:219](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L219) |



##### divide

逐元素向量除法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:234](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L234) |



##### ceil

逐元素向量向上取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:249](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L249) |



##### floor

逐元素向量向下取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:264](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L264) |



##### min

逐元素向量最小值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:279](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L279) |



##### max

逐元素向量最大值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:294](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L294) |



##### round

逐元素向量四舍五入取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:309](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L309) |



##### multiplyScalar

向量标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:324](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L324) |



##### scaleAndAdd

逐元素向量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:339](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L339) |



##### distance

求两向量的欧氏距离

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:354](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L354) |



##### squaredDistance

求两向量的欧氏距离平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:369](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L369) |



##### len

求向量长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:384](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L384) |



##### lengthSqr

求向量长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:399](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L399) |



##### negate

逐元素向量取负

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:414](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L414) |



##### inverse

逐元素向量取倒数，接近 0 时返回 Infinity

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:429](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L429) |



##### inverseSafe

逐元素向量取倒数，接近 0 时返回 0

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:444](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L444) |



##### normalize

归一化向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:478](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L478) |



##### dot

向量点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:501](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L501) |



##### cross

向量叉积（向量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:513](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L513) |



##### lerp

逐元素向量线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:530](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L530) |



##### random

生成一个在单位球体上均匀分布的随机向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:545](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L545) |

###### 参数列表
- `scale` Unknown 生成的向量长度


##### transformMat4

向量与四维矩阵乘法，默认向量第四位为 1。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:567](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L567) |



##### transformMat4Normal

向量与四维矩阵乘法，默认向量第四位为 0。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:588](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L588) |



##### transformMat3

向量与三维矩阵乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:609](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L609) |



##### transformQuat

向量四元数乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:645](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L645) |



##### rotateX

绕 X 轴旋转向量指定弧度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:709](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L709) |

###### 参数列表
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateY

绕 Y 轴旋转向量指定弧度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:741](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L741) |

###### 参数列表
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### rotateZ

绕 Z 轴旋转向量指定弧度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:773](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L773) |

###### 参数列表
- `v` Unknown 待旋转向量
- `o` Unknown 旋转中心
- `a` Unknown 旋转弧度


##### strictEquals

向量等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:805](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L805) |



##### equals

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:817](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L817) |



##### angle

求两向量夹角弧度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:838](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L838) |



##### projectOnPlane

计算向量在指定平面上的投影

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:859](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L859) |

###### 参数列表
- `a` Unknown 待投影向量
- `n` Unknown 指定平面的法线


##### project

计算向量在指定向量上的投影

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:873](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L873) |

###### 参数列表
- `a` Unknown 待投影向量
- `n` Unknown 目标向量


##### toArray

向量转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:892](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L892) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### fromArray

数组转向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:909](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L909) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor

构造函数，可查看 Cc/vec3:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.ts:940](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L940) |

###### 参数列表
- `x` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec3 值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:965](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L965) |



##### set

用另一个向量设置当前的向量对象值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:975](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L975) |

###### 参数列表
- `newValue` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:990](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L990) |

###### 参数列表
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fuzzyEquals

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1002](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1002) |

###### 参数列表
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1022](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1022) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1036](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1036) |

###### 参数列表
- `to` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### clampf

返回指定限制区域后的向量。<br/>
向量大于 max_inclusive 则返回 max_inclusive。<br/>
向量小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1051](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1051) |

###### 参数列表
- `min_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `max_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1070](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1070) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1085](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1085) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### subtract

向量减法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1101](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1101) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### multiplyScalar

缩放当前向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1116](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1116) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1131](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1131) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### divide

向量除法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1146](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1146) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

向量取反。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1161](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1161) |



##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1175](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1175) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1186](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1186) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### len

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1200](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1200) |


##### 示例

```js
var v = cc.v2(10, 10);
v.len(); // return 14.142135623730951;
```

##### lengthSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1213](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1213) |



##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1223](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1223) |



##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1235](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1235) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### transformMat4

Transforms the vec3 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1254](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1254) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### maxAxis

Returns the maximum value in x, y, and z

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1267](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1267) |



##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1276](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1276) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### project

返回当前向量在指定 vector 向量上的投影向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1284](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1284) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 

##### 示例

```js
var v1 = cc.v3(20, 20, 20);
var v2 = cc.v3(5, 5, 5);
v1.project(v2); // Vec3 {x: 20, y: 20, z: 20};
```

##### signAngle

带方向的夹角的弧度。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1298](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1298) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1314](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1314) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

按指定弧度旋转向量。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.ts:1328](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/vec3.ts#L1328) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



