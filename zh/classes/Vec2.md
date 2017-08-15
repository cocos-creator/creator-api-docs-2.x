## `Vec2` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




表示 2D 向量和坐标

### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`ONE`](#one) `Vec2` 新 Vec2 对象。
  - [`ZERO`](#zero) `Vec2` 返回 x = 0 和 y = 0 的 Vec2 对象。
  - [`UP`](#up) `Vec2` 返回 x = 0 和 y = 1 的 Vec2 对象。
  - [`RIGHT`](#right) `Vec2` 返回 x = 1 和 y = 0 的 Vec2 对象。



##### Methods

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


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:62](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L62) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:65](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L65) |



##### ONE

> 新 Vec2 对象。

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:541](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L541) |



##### ZERO

> 返回 x = 0 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:552](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L552) |



##### UP

> 返回 x = 0 和 y = 1 的 Vec2 对象。

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:563](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L563) |



##### RIGHT

> 返回 x = 1 和 y = 0 的 Vec2 对象。

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:574](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L574) |






<!-- Method Block -->
#### Methods


##### constructor

构造函数，可查看 Cc/vec2:method 或者 <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:41](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L41) |

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec2 值

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:72](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L72) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### set

设置向量值。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:82](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L82) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- newValue <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:96](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L96) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:107](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L107) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 



##### lerp

线性插值。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:120](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L120) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- to <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:138](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L138) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.addSelf(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
```

##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:155](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L155) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:175](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L175) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### sub

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:192](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L192) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:212](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L212) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- num <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.mulSelf(5);// return Vec2 {x: 50, y: 50};
```

##### mul

缩放当前向量，并返回新结果。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:229](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L229) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- num <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:249](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L249) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.scaleSelf(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
```

##### scale

分量相乘，并返回新的结果。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:266](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L266) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:286](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L286) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.divSelf(5); // return Vec2 {x: 2, y: 2};
```

##### div

向量除法，并返回新的结果。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:303](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L303) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:323](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L323) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### Example

```js
var v = cc.v2(10, 10);
v.negSelf(); // return Vec2 {x: -10, y: -10};
```

##### neg

返回取反后的新向量。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:339](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L339) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Example

```js
var v = cc.v2(10, 10);
var v1;
v.neg(v1);  // return Vec2 {x: -10, y: -10};
```

##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:357](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L357) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.dot(cc.v2(5, 5)); // return 100;
```

##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:371](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L371) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Example

```js
var v = cc.v2(10, 10);
v.cross(cc.v2(5, 5)); // return 0;
```

##### mag

返回该向量的长度。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:385](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L385) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### Example

```js
var v = cc.v2(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:398](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L398) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### Example

```js
var v = cc.v2(10, 10);
v.magSqr(); // return 200;
```

##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:411](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L411) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:438](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L438) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:461](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L461) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

带方向的夹角的弧度。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:483](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L483) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:499](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L499) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- radians <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### rotateSelf

按指定弧度旋转向量。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js:514](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/value-types/CCVec2.js#L514) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- radians <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



