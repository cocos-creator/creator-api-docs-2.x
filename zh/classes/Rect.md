## `Rect` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


通过位置和宽高定义的 2D 矩形。


### 索引

##### 属性（properties）

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 
  - [`xMin`](#xmin) `Number` 矩形 x 轴上的最小值。
  - [`yMin`](#ymin) `Number` 矩形 y 轴上的最小值。
  - [`xMax`](#xmax) `Number` 矩形 x 轴上的最大值。
  - [`yMax`](#ymax) `Number` 矩形 y 轴上的最大值。
  - [`center`](#center) `Vec2` 矩形的中心点。
  - [`origin`](#origin) `Vec2` 矩形的 x 和 y 坐标。
  - [`size`](#size) `Size` 矩形的大小。



##### 方法

  - [`constructor`](#constructor) cc.Rect类的构造函数。可以通过 <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> 简便方法进行创建。
  - [`fromMinMax`](#fromminmax) 根据指定 2 个坐标创建出一个矩形区域。
  - [`contain`](#contain) 判断 2 个矩形是否有包含。<br/>
返回 1 为 a 包含 b，如果 -1 为 b 包含 a,
0 这则都不包含。
  - [`clone`](#clone) 克隆一个新的 Rect。
  - [`equals`](#equals) 是否等于指定的矩形。
  - [`lerp`](#lerp) 线性插值
  - [`toString`](#tostring) 转换为方便阅读的字符串
  - [`intersects`](#intersects) 当前矩形与指定矩形是否相交。
  - [`contains`](#contains) 当前矩形是否包含指定坐标点。
Returns true if the point inside this rectangle.
  - [`containsRect`](#containsrect) 当前矩形是否包含指定矩形。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L66) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:69](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L69) |



##### width

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L72) |



##### height

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L75) |



##### xMin

> 矩形 x 轴上的最小值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L215) |



##### yMin

> 矩形 y 轴上的最小值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L229) |



##### xMax

> 矩形 x 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L243) |



##### yMax

> 矩形 y 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L254) |



##### center

> 矩形的中心点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:265](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L265) |



##### origin

> 矩形的 x 和 y 坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:281](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L281) |



##### size

> 矩形的大小。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:296](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L296) |






<!-- Method Block -->
#### 方法


##### constructor

cc.Rect类的构造函数。可以通过 <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> 简便方法进行创建。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:38](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L38) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### fromMinMax

根据指定 2 个坐标创建出一个矩形区域。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:79](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L79) |

###### 参数列表
- `v1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `v2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
```

##### contain

判断 2 个矩形是否有包含。<br/>
返回 1 为 a 包含 b，如果 -1 为 b 包含 a,
0 这则都不包含。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:99](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L99) |

###### 参数列表
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect a
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect b

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(5, 5, 5, 5);
var c = new cc.Rect(20, 20, 10, 10);
cc.Rect.contain(a, b); //  1;
cc.Rect.contain(b, a); // -1;
cc.Rect.contain(a, c); //  0;
```

##### clone

克隆一个新的 Rect。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:138](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L138) |


##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
a.clone();// Rect {x: 0, y: 0, width: 10, height: 10}
```

##### equals

是否等于指定的矩形。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L151) |

###### 参数列表
- `other` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 10, 10);
a.equals(b);// true;
```

##### lerp

线性插值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:170](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L170) |

###### 参数列表
- `to` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient.
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> optional, the receiving vector.

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(50, 50, 100, 100);
update (dt) {
   // method 1;
   var c = a.lerp(b, dt * 0.1);
   // method 2;
   a.lerp(b, dt * 0.1, c);
}
```

##### toString

转换为方便阅读的字符串

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L201) |


##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```

##### intersects

当前矩形与指定矩形是否相交。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L311) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 20, 20);
a.intersects(b);// true
```

##### contains

当前矩形是否包含指定坐标点。
Returns true if the point inside this rectangle.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:326](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L326) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Vec2(0, 5);
a.contains(b);// true
```

##### containsRect

当前矩形是否包含指定矩形。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:345](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L345) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 20, 20);
var b = new cc.Rect(0, 0, 10, 10);
a.containsRect(b);// true
```


