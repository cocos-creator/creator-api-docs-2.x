## `Vec2` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


表示 2D 向量和坐标


### 索引

##### 属性（properties）

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`ONE`](#one) `Vec2` 新 Vec2 对象。
  - [`ZERO`](#zero) `Vec2` 返回 x = 0 和 y = 0 的 Vec2 对象。
  - [`UP`](#up) `Vec2` 返回 x = 0 和 y = 1 的 Vec2 对象。
  - [`RIGHT`](#right) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 对象。



##### 方法

  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec2:method 或者 <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>
  - [`clone`](#clone) 克隆一个 Vec2 值
  - [`set`](#set) 设置向量值。
  - [`equals`](#equals) 当前的向量是否与指定的向量相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`lerp`](#lerp) 线性插值。
  - [`addSelf`](#addself) 向量加法。如果你想保存结果到另一个向量，使用 add() 代替。
  - [`add`](#add) 向量加法，并返回新结果。
  - [`subSelf`](#subself) 向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。
  - [`sub`](#sub) 向量减法，并返回新结果。
  - [`mulSelf`](#mulself) 缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。
  - [`mul`](#mul) 缩放当前向量，并返回新结果。
  - [`scaleSelf`](#scaleself) 分量相乘。
  - [`scale`](#scale) 分量相乘，并返回新的结果。
  - [`divSelf`](#divself) 向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。
  - [`div`](#div) 向量除法，并返回新的结果。
  - [`negSelf`](#negself) 向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。
  - [`neg`](#neg) 返回取反后的新向量。
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`mag`](#mag) 返回该向量的长度。
  - [`magSqr`](#magsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。
  - [`angle`](#angle) 夹角的弧度。
  - [`signAngle`](#signangle) 带方向的夹角的弧度。
  - [`rotate`](#rotate) 返回旋转给定弧度后的新向量。
  - [`rotateSelf`](#rotateself) 按指定弧度旋转向量。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:62](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L62) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L65) |



##### ONE

> 新 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:541](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L541) |



##### ZERO

> 返回 x = 0 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:552](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L552) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:563](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L563) |



##### RIGHT

> 返回 x = 1 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:574](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L574) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 Cc/vec2:method 或者 <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:41](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L41) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec2 值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L72) |



##### set

设置向量值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:82](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L82) |

###### 参数列表
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:96](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L96) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L107) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:120](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L120) |

###### 参数列表
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:138](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L138) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.addSelf(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
```

##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L155) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
v.add(cc.v2(5, 5));      // return Vec2 {x: 15, y: 15};
var v1;
v.add(cc.v2(5, 5), v1);  // return Vec2 {x: 15, y: 15};
```

##### subSelf

向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:175](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L175) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:192](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L192) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
var v1;
v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
```

##### mulSelf

缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:212](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L212) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.mulSelf(5);// return Vec2 {x: 50, y: 50};
```

##### mul

缩放当前向量，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L229) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
v.mul(5);      // return Vec2 {x: 50, y: 50};
var v1;
v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
```

##### scaleSelf

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:249](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L249) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:266](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L266) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
var v1;
v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
```

##### divSelf

向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:286](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L286) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:303](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L303) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
v.div(5);      // return Vec2 {x: 2, y: 2};
var v1;
v.div(5, v1);  // return Vec2 {x: 2, y: 2};
```

##### negSelf

向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L323) |


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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:339](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L339) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### 示例

```js
var v = cc.v2(10, 10);
var v1;
v.neg(v1);  // return Vec2 {x: -10, y: -10};
```

##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:357](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L357) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:371](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L371) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v = cc.v2(10, 10);
v.cross(cc.v2(5, 5)); // return 0;
```

##### mag

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:385](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L385) |


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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:398](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L398) |


##### 示例

```js
var v = cc.v2(10, 10);
v.magSqr(); // return 200;
```

##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:411](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L411) |


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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:438](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L438) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:461](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L461) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

带方向的夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:483](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L483) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:499](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L499) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### rotateSelf

按指定弧度旋转向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:514](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L514) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



