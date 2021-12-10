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
  - [`UP_R`](#upr) `Vec2` 返回 x = 0 和 y = 1 的 Vec2 只读对象。
  - [`RIGHT`](#right) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 只读对象。
  - [`RIGHT_R`](#rightr) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 对象。
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 



##### 方法

  - [`mag`](#mag) 返回该向量的长度。
  - [`magSqr`](#magsqr) 返回该向量的长度平方。
  - [`subSelf`](#subself) 向量减法。
  - [`sub`](#sub) 向量减法，并返回新结果。
  - [`mulSelf`](#mulself) 缩放当前向量。
  - [`mul`](#mul) 缩放向量，并返回新结果。
  - [`divSelf`](#divself) 向量除法。
  - [`div`](#div) 向量除法，并返回新的结果。
  - [`scaleSelf`](#scaleself) 分量相乘。
  - [`scale`](#scale) 分量相乘，并返回新的结果。
  - [`negSelf`](#negself) 向量取反。
  - [`neg`](#neg) 返回取反后的新向量。
  - [`clone`](#clone) 获得指定向量的拷贝
  - [`copy`](#copy) 复制指定向量的值
  - [`set`](#set) 设置向量值
  - [`add`](#add) 逐元素向量加法
  - [`subtract`](#subtract) 逐元素向量减法
  - [`multiply`](#multiply) 逐元素向量乘法
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
| 定义于 | [cocos2d/core/value-types/vec2.ts:213](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L213) |



##### ZERO

> 返回 x = 0 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:223](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L223) |



##### ZERO_R

> 返回一个 x = 0 和 y = 0 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:230](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L230) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:239](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L239) |



##### UP_R

> 返回 x = 0 和 y = 1 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:246](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L246) |



##### RIGHT

> 返回 x = 1 和 y = 0 的 Vec2 只读对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:255](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L255) |



##### RIGHT_R

> 返回 x = 1 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:262](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L262) |



##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:734](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L734) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.ts:739](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L739) |






<!-- Method Block -->
#### 方法


##### mag

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:55](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L55) |


##### 示例

```js
var v = cc.v2(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:65](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L65) |


##### 示例

```js
var v = cc.v2(10, 10);
v.magSqr(); // return 200;
```

##### subSelf

向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:75](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L75) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### sub

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:87](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L87) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### 示例

```js
var v = cc.v2(10, 10);
v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
var v1 = new Vec2;
v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
```

##### mulSelf

缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:103](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L103) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.mulSelf(5);// return Vec2 {x: 50, y: 50};
```

##### mul

缩放向量，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:115](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L115) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### 示例

```js
var v = cc.v2(10, 10);
v.mul(5);      // return Vec2 {x: 50, y: 50};
var v1 = new Vec2;
v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
```

##### divSelf

向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:131](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L131) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.divSelf(5); // return Vec2 {x: 2, y: 2};
```

##### div

向量除法，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:143](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L143) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### 示例

```js
var v = cc.v2(10, 10);
v.div(5);      // return Vec2 {x: 2, y: 2};
var v1 = new Vec2;
v.div(5, v1);  // return Vec2 {x: 2, y: 2};
```

##### scaleSelf

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:159](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L159) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.scaleSelf(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
```

##### scale

分量相乘，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:171](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L171) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### 示例

```js
var v = cc.v2(10, 10);
v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
var v1 = new Vec2;
v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
```

##### negSelf

向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:187](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L187) |


##### 示例

```js
var v = cc.v2(10, 10);
v.negSelf(); // return Vec2 {x: -10, y: -10};
```

##### neg

返回取反后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:198](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L198) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### 示例

```js
var v = cc.v2(10, 10);
var v1 = new Vec2;
v.neg(v1);  // return Vec2 {x: -10, y: -10};
```

##### clone

获得指定向量的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:271](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L271) |



##### copy

复制指定向量的值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:282](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L282) |



##### set

设置向量值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:295](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L295) |



##### add

逐元素向量加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:308](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L308) |



##### subtract

逐元素向量减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:321](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L321) |



##### multiply

逐元素向量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:334](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L334) |



##### divide

逐元素向量除法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:347](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L347) |



##### ceil

逐元素向量向上取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:360](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L360) |



##### floor

逐元素向量向下取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:373](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L373) |



##### min

逐元素向量最小值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:386](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L386) |



##### max

逐元素向量最大值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:400](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L400) |



##### round

逐元素向量四舍五入取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:413](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L413) |



##### multiplyScalar

向量标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:426](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L426) |



##### scaleAndAdd

逐元素向量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:439](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L439) |



##### distance

求两向量的欧氏距离

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:452](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L452) |



##### squaredDistance

求两向量的欧氏距离平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:465](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L465) |



##### len

求向量长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:478](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L478) |



##### lengthSqr

求向量长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:491](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L491) |



##### negate

逐元素向量取负

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:504](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L504) |



##### inverse

逐元素向量取倒数，接近 0 时返回 Infinity

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:517](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L517) |



##### inverseSafe

逐元素向量取倒数，接近 0 时返回 0

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:530](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L530) |



##### normalize

归一化向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:556](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L556) |



##### dot

向量点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:575](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L575) |



##### cross

向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:586](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L586) |



##### lerp

逐元素向量线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:599](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L599) |



##### random

生成一个在单位圆上均匀分布的随机向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:614](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L614) |



##### transformMat3

向量与三维矩阵乘法，默认向量第三位为 1。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:629](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L629) |



##### transformMat4

向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:645](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L645) |



##### strictEquals

向量等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:661](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L661) |



##### equals

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:672](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L672) |



##### angle

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:688](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L688) |



##### toArray

向量转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:708](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L708) |



##### fromArray

数组转向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:721](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L721) |



##### constructor

构造函数，可查看 Cc/vec2:method 或者 Cc/p:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.ts:747](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L747) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

克隆一个 Vec2 对象

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:769](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L769) |



##### set

设置向量值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:779](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L779) |

###### 参数列表
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:793](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L793) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### fuzzyEquals

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:804](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L804) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:822](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L822) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:835](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L835) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:853](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L853) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:877](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L877) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:896](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L896) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### subtract

向量减法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:910](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L910) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### multiplyScalar

缩放当前向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:927](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L927) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:944](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L944) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:961](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L961) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:978](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L978) |


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
| 定义于 | [cocos2d/core/value-types/vec2.ts:994](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L994) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1008](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1008) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1022](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1022) |


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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1035](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1035) |


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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1048](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1048) |


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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1074](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1074) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1097](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1097) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

带方向的夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1119](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1119) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1131](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1131) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

按指定弧度旋转向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1146](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1146) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### project

返回当前向量在指定 vector 向量上的投影向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1163](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1163) |

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
| 定义于 | [cocos2d/core/value-types/vec2.ts:1178](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1178) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### maxAxis

Returns the maximum value in x, y.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.ts:1191](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/value-types/vec2.ts#L1191) |




