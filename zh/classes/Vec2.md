## `Vec2` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)


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
  - [`pFuzzyEqual`](#pfuzzyequal) 近似判断两个点是否相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`lerp`](#lerp) 线性插值。
  - [`clampf`](#clampf) 返回指定限制区域后的向量。
  - [`addSelf`](#addself) 向量加法。
  - [`add`](#add) 向量加法，并返回新结果。
  - [`subSelf`](#subself) 向量减法。
  - [`sub`](#sub) 向量减法，并返回新结果。
  - [`mulSelf`](#mulself) 缩放当前向量。
  - [`mul`](#mul) 缩放向量，并返回新结果。
  - [`scaleSelf`](#scaleself) 分量相乘。
  - [`scale`](#scale) 分量相乘，并返回新的结果。
  - [`divSelf`](#divself) 向量除法。
  - [`div`](#div) 向量除法，并返回新的结果。
  - [`negSelf`](#negself) 向量取反。
  - [`neg`](#neg) 返回取反后的新向量。
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`mag`](#mag) 返回该向量的长度。
  - [`magSqr`](#magsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。
  - [`angle`](#angle) 夹角的弧度。
  - [`signAngle`](#signangle) 带方向的夹角的弧度。
  - [`rotate`](#rotate) 返回旋转给定弧度后的新向量。
  - [`rotateSelf`](#rotateself) 按指定弧度旋转向量。
  - [`project`](#project) 返回当前向量在指定 vector 向量上的投影向量。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:64](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L64) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L67) |



##### ONE

> 新 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:595](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L595) |



##### ZERO

> 返回 x = 0 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:606](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L606) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:617](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L617) |



##### RIGHT

> 返回 x = 1 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/vec2.js:628](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L628) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 Cc/vec2:method 或者 <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec2.js:43](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L43) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec2 值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:74](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L74) |



##### set

设置向量值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L84) |

###### 参数列表
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:98](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L98) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### pFuzzyEqual

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:109](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L109) |

###### 参数列表
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:127](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L127) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:140](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L140) |

###### 参数列表
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### clampf

返回指定限制区域后的向量。<br/>
向量大于 max_inclusive 则返回 max_inclusive。<br/>
向量小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:158](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L158) |

###### 参数列表
- `min_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `max_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var min_inclusive = cc.v2(0, 0);
var max_inclusive = cc.v2(20, 20);
var v1 = cc.v2(20, 20).clamp(min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
var v2 = cc.v2(0, 0).clamp(min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
var v3 = cc.v2(10, 10).clamp(min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
```

##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:182](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L182) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L199) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:219](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L219) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:236](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L236) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:256](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L256) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:273](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L273) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:293](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L293) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:310](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L310) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:330](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L330) |

###### 参数列表
- `divisor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

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
| 定义于 | [cocos2d/core/value-types/vec2.js:347](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L347) |

###### 参数列表
- `divisor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
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
| 定义于 | [cocos2d/core/value-types/vec2.js:367](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L367) |


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
| 定义于 | [cocos2d/core/value-types/vec2.js:383](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L383) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:401](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L401) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:415](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L415) |

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
| 定义于 | [cocos2d/core/value-types/vec2.js:429](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L429) |


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
| 定义于 | [cocos2d/core/value-types/vec2.js:442](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L442) |


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
| 定义于 | [cocos2d/core/value-types/vec2.js:455](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L455) |


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
| 定义于 | [cocos2d/core/value-types/vec2.js:481](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L481) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:504](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L504) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

带方向的夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:526](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L526) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:538](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L538) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### rotateSelf

按指定弧度旋转向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:553](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L553) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### project

返回当前向量在指定 vector 向量上的投影向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/vec2.js:570](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L570) |

###### 参数列表
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var v1 = cc.v2(20, 20);
var v2 = cc.v2(5, 5);
v1.project(v2); // Vec2 {x: 20, y: 20};
```


