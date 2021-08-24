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
  - [`xMin`](#xmin) `Number` 矩形 x 轴上的最小值，等价于 rect.x。
  - [`yMin`](#ymin) `Number` 矩形 y 轴上的最小值。
  - [`xMax`](#xmax) `Number` 矩形 x 轴上的最大值。
  - [`yMax`](#ymax) `Number` 矩形 y 轴上的最大值。
  - [`center`](#center) `Vec2` 矩形的中心点。
  - [`origin`](#origin) `Vec2` 矩形的 x 和 y 坐标。
  - [`size`](#size) `Size` 矩形的大小。



##### 方法

  - [`constructor`](#constructor) Rect类的构造函数。
  - [`fromMinMax`](#fromminmax) 根据指定 2 个坐标创建出一个矩形区域。
  - [`clone`](#clone) 克隆一个新的 Rect。
  - [`equals`](#equals) 是否等于指定的矩形。
  - [`lerp`](#lerp) 线性插值
  - [`intersects`](#intersects) 当前矩形与指定矩形是否相交。
  - [`intersection`](#intersection) 返回 2 个矩形重叠的部分。
  - [`contains`](#contains) 当前矩形是否包含指定坐标点。
  - [`containsRect`](#containsrect) 当前矩形是否包含指定矩形。
  - [`union`](#union) 返回一个包含当前矩形和指定矩形的最小矩形。
  - [`transformMat4`](#transformmat4) 使用 mat4 对矩形进行矩阵转换。
  - [`toString`](#tostring) 转换为方便阅读的字符串
  - [`set`](#set) 从其它对象把所有属性复制到当前对象。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:77](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L77) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:81](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L81) |



##### width

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:85](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L85) |



##### height

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:89](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L89) |



##### xMin

> 矩形 x 轴上的最小值，等价于 rect.x。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:329](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L329) |



##### yMin

> 矩形 y 轴上的最小值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:343](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L343) |



##### xMax

> 矩形 x 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:358](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L358) |



##### yMax

> 矩形 y 轴上的最大值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:371](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L371) |



##### center

> 矩形的中心点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:384](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L384) |



##### origin

> 矩形的 x 和 y 坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:398](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L398) |



##### size

> 矩形的大小。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [cocos2d/core/value-types/rect.ts:411](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L411) |






<!-- Method Block -->
#### 方法


##### constructor

Rect类的构造函数。可以通过 <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> 简便方法进行创建。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/rect.ts:42](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L42) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:57](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L57) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:108](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L108) |


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
| 定义于 | [cocos2d/core/value-types/rect.ts:121](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L121) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:140](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L140) |

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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/rect.ts:179](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L179) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:198](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L198) |

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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/rect.ts:221](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L221) |

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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/rect.ts:240](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L240) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:258](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L258) |

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
| 定义于 | [cocos2d/core/value-types/rect.ts:281](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L281) |

###### 参数列表
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> The output rect
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The matrix4


##### toString

转换为方便阅读的字符串

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/value-types/rect.ts:315](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/rect.ts#L315) |


##### 示例

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```

##### set

从其它对象把所有属性复制到当前对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/value-type.ts:80](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/value-types/value-type.ts#L80) |

###### 参数列表
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy



