## `Vec2` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


表示 2D 向量和坐标



### 索引

##### 属性（properties）

  - [`ONE`](#one) `Vec2` 新 Vec2 对象。
  - [`ZERO`](#zero) `Vec2` 返回 x = 0 和 y = 0 的 Vec2 对象。
  - [`ZERO_R`](#zeror) `Vec2` 返回一个 x = 0 和 y = 0 的 Vec2 只读对象。
  - [`UP`](#up) `Vec2` 返回 x = 0 和 y = 1 的 Vec2 对象。
  - [`UP`](#up) `Vec2` 返回 x = 0 和 y = 1 的 Vec2 只读对象。
  - [`RIGHT`](#right) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 只读对象。
  - [`RIGHT_R`](#rightr) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 对象。
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 



##### 方法

  - [`clone`](#clone) 获得指定向量的拷贝
  - [`copy`](#copy) 复制指定向量的值
  - [`set`](#set) 设置向量值
  - [`add`](#add) 逐元素向量加法
  - [`subtract`](#subtract) 逐元素向量减法
  - [`multiply`](#multiply) 逐元素向量乘法
  - [`divide`](#divide) 逐元素向量除法
  - [`ceil`](#ceil) 逐元素向量向上取整
  - [`ceil`](#ceil) 逐元素向量向下取整
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
  - [`cross`](#cross) 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量
  - [`lerp`](#lerp) 逐元素向量线性插值： A + t * (B - A)
  - [`random`](#random) 生成一个在单位圆上均匀分布的随机向量
  - [`transformMat3`](#transformmat3) 向量与三维矩阵乘法，默认向量第三位为 1。
  - [`transformMat4`](#transformmat4) 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。
  - [`strictEquals`](#strictequals) 向量等价判断
  - [`equals`](#equals) 排除浮点数误差的向量近似等价判断
  - [`angle`](#angle) 排除浮点数误差的向量近似等价判断
  - [`toArray`](#toarray) 向量转数组
  - [`fromArray`](#fromarray) 数组转向量
  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec2:method 或者 Cc/p:method
  - [`clone`](#clone) 克隆一个 Vec2 对象
  - [`set`](#set) 设置向量值。
  - [`equals`](#equals) 当前的向量是否与指定的向量相等。
  - [`fuzzyEquals`](#fuzzyequals) 近似判断两个点是否相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`lerp`](#lerp) 线性插值。
  - [`clampf`](#clampf) 返回指定限制区域后的向量。
  - [`add`](#add) 向量加法。
  - [`addSelf`](#addself) 向量加法。
  - [`subtract`](#subtract) 向量减法。
  - [`multiply`](#multiply) 缩放当前向量。
  - [`multiply`](#multiply) 分量相乘。
  - [`divide`](#divide) 向量除法。
  - [`negate`](#negate) 向量取反。
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`len`](#len) 返回该向量的长度。
  - [`lengthSqr`](#lengthsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。
  - [`angle`](#angle) 夹角的弧度。
  - [`signAngle`](#signangle) 带方向的夹角的弧度。
  - [`rotate`](#rotate) 返回旋转给定弧度后的新向量。
  - [`rotateSelf`](#rotateself) 按指定弧度旋转向量。
  - [`project`](#project) 返回当前向量在指定 vector 向量上的投影向量。
  - [`transformMat4`](#transformmat4) Transforms the vec2 with a mat4. 3rd vector component is implicitly '0', 4th vector component is implicitly '1'
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y.



### Details


#### 属性（properties）


##### ONE

> 新 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:79](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L79) |



##### ZERO

> 返回 x = 0 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:89](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L89) |



##### ZERO_R

> 返回一个 x = 0 和 y = 0 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:96](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L96) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:105](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L105) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:112](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L112) |



##### RIGHT

> 返回 x = 1 和 y = 0 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:121](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L121) |



##### RIGHT_R

> 返回 x = 1 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:128](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L128) |



##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:600](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L600) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:605](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L605) |






<!-- Method Block -->
#### 方法


##### clone

获得指定向量的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:137](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L137) |



##### copy

复制指定向量的值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:148](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L148) |



##### set

设置向量值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:161](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L161) |



##### add

逐元素向量加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:174](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L174) |



##### subtract

逐元素向量减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:187](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L187) |



##### multiply

逐元素向量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:200](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L200) |



##### divide

逐元素向量除法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:213](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L213) |



##### ceil

逐元素向量向上取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:226](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L226) |



##### ceil

逐元素向量向下取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:239](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L239) |



##### min

逐元素向量最小值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:252](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L252) |



##### max

逐元素向量最大值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:266](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L266) |



##### round

逐元素向量四舍五入取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:279](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L279) |



##### multiplyScalar

向量标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:292](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L292) |



##### scaleAndAdd

逐元素向量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:305](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L305) |



##### distance

求两向量的欧氏距离

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:318](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L318) |



##### squaredDistance

求两向量的欧氏距离平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:331](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L331) |



##### len

求向量长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:344](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L344) |



##### lengthSqr

求向量长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:357](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L357) |



##### negate

逐元素向量取负

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:370](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L370) |



##### inverse

逐元素向量取倒数，接近 0 时返回 Infinity

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:383](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L383) |



##### inverseSafe

逐元素向量取倒数，接近 0 时返回 0

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:396](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L396) |



##### normalize

归一化向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:422](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L422) |



##### dot

向量点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:441](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L441) |



##### cross

向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:452](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L452) |



##### lerp

逐元素向量线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:465](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L465) |



##### random

生成一个在单位圆上均匀分布的随机向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:480](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L480) |



##### transformMat3

向量与三维矩阵乘法，默认向量第三位为 1。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:495](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L495) |



##### transformMat4

向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:511](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L511) |



##### strictEquals

向量等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:527](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L527) |



##### equals

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:538](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L538) |



##### angle

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:554](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L554) |



##### toArray

向量转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:574](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L574) |



##### fromArray

数组转向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:587](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L587) |



##### constructor

构造函数，可查看 Cc/vec2:method 或者 Cc/p:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:613](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L613) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

克隆一个 Vec2 对象

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:635](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L635) |



##### set

设置向量值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:645](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L645) |

###### 参数列表
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:659](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L659) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### fuzzyEquals

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:670](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L670) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:688](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L688) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:701](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L701) |

###### 参数列表
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### clampf

返回指定限制区域后的向量。<br/>
向量大于 max_inclusive 则返回 max_inclusive。<br/>
向量小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:719](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L719) |

###### 参数列表
- `min_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `max_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var min_inclusive = cc.v2(0, 0);
var max_inclusive = cc.v2(20, 20);
var v1 = cc.v2(20, 20).clampf(min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
var v2 = cc.v2(0, 0).clampf(min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
var v3 = cc.v2(10, 10).clampf(min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
```

##### add

向量加法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:743](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L743) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.add(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
```

##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:762](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L762) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### subtract

向量减法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:777](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L777) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### multiply

缩放当前向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:794](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L794) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.multiply(5);// return Vec2 {x: 50, y: 50};
```

##### multiply

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:811](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L811) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.multiply(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
```

##### divide

向量除法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:828](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L828) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.divide(5); // return Vec2 {x: 2, y: 2};
```

##### negate

向量取反。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:845](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L845) |


##### 示例

```js
var v = cc.v2(10, 10);
v.negate(); // return Vec2 {x: -10, y: -10};
```

##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:861](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L861) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.dot(cc.v2(5, 5)); // return 100;
```

##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:875](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L875) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.cross(cc.v2(5, 5)); // return 0;
```

##### len

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:889](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L889) |


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
| 定义于 | [cocos2d/core/value-types/vec2.ts:902](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L902) |


##### 示例

```js
var v = cc.v2(10, 10);
v.lengthSqr(); // return 200;
```

##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:915](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L915) |


##### 示例

```js
var v = cc.v2(10, 10);
v.normalizeSelf(); // return Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
```

##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:941](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L941) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:964](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L964) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

带方向的夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:986](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L986) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:998](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L998) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

按指定弧度旋转向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1013](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L1013) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### project

返回当前向量在指定 vector 向量上的投影向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1030](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L1030) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v1 = cc.v2(20, 20);
var v2 = cc.v2(5, 5);
v1.project(v2); // Vec2 {x: 20, y: 20};
```

##### transformMat4

Transforms the vec2 with a mat4. 3rd vector component is implicitly '0', 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1045](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L1045) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### maxAxis

Returns the maximum value in x, y.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1058](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/vec2.ts#L1058) |




