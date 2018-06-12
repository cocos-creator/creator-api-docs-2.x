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
  - [`xMin`](#xmin) `Number` 
  - [`yMin`](#ymin) `Number` 
  - [`xMax`](#xmax) `Number` 
  - [`yMax`](#ymax) `Number` 
  - [`center`](#center) `Vec2` 
  - [`origin`](#origin) `Vec2` 
  - [`size`](#size) `Size` 



##### 方法

  - [`constructor`](#constructor) 
  - [`fromMinMax`](#fromminmax) 
  - [`clone`](#clone) 
  - [`equals`](#equals) 
  - [`lerp`](#lerp) 
  - [`intersects`](#intersects) 
  - [`intersection`](#intersection) 
  - [`contains`](#contains) 
  - [`containsRect`](#containsrect) 
  - [`union`](#union) 
  - [`transformMat4`](#transformmat4) 
  - [`toString`](#tostring) 



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:67](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L67) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:70](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L70) |



##### width

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:73](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L73) |



##### height

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:76](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L76) |



##### xMin

> 矩形 x 轴上的最小值，等价于 rect.x。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:314](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L314) |



##### yMin

> 矩形 y 轴上的最小值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:328](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L328) |



##### xMax

> 矩形 x 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:342](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L342) |



##### yMax

> 矩形 y 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:353](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L353) |



##### center

> 矩形的中心点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:364](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L364) |



##### origin

> 矩形的 x 和 y 坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:380](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L380) |



##### size

> 矩形的大小。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [cocos2d/core/value-types/rect.js:395](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L395) |






<!-- Method Block -->
#### 方法


##### constructor

Rect类的构造函数。可以通过 <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> 简便方法进行创建。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/rect.js:39](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L39) |

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
| 定义于 | [cocos2d/core/value-types/rect.js:80](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L80) |

###### 参数列表
- `v1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `v2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
```

##### clone

克隆一个新的 Rect。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/value-types/rect.js:102](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L102) |


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
| 定义于 | [cocos2d/core/value-types/rect.js:115](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L115) |

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
| 定义于 | [cocos2d/core/value-types/rect.js:134](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L134) |

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

##### intersects

当前矩形与指定矩形是否相交。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/rect.js:165](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L165) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 20, 20);
a.intersects(b);// true
```

##### intersection

返回 2 个矩形重叠的部分。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/value-types/rect.js:184](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L184) |

###### 参数列表
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> Stores the result
- `rectB` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 10, 20, 20);
var b = new cc.Rect(0, 10, 10, 10);
var intersection = new cc.Rect();
a.intersection(intersection, b); // intersection {x: 0, y: 10, width: 10, height: 10};
```

##### contains

当前矩形是否包含指定坐标点。
Returns true if the point inside this rectangle.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/rect.js:207](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L207) |

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
| 定义于 | [cocos2d/core/value-types/rect.js:226](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L226) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 0, 20, 20);
var b = new cc.Rect(0, 0, 10, 10);
a.containsRect(b);// true
```

##### union

返回一个包含当前矩形和指定矩形的最小矩形。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/value-types/rect.js:244](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L244) |

###### 参数列表
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> Stores the result
- `rectB` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### 示例

```js
var a = new cc.Rect(0, 10, 20, 20);
var b = new cc.Rect(0, 10, 10, 10);
var union = new cc.Rect();
a.union(union, b); // union {x: 0, y: 10, width: 20, height: 20};
```

##### transformMat4

使用 mat4 对矩形进行矩阵转换。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/rect.js:267](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L267) |

###### 参数列表
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> The output rect
- `mat` vmath.mat4 The matrix4


##### toString

转换为方便阅读的字符串

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/value-types/rect.js:300](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/value-types/rect.js#L300) |


##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```


