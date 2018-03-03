## `Intersection` 类型



模块: [cc](../modules/cc.md)


辅助类，用于测试形状与形状是否相交


### 索引



##### 方法

  - [`lineLine`](#lineline) 测试线段与线段是否相交
  - [`lineRect`](#linerect) 测试线段与矩形是否相交
  - [`linePolygon`](#linepolygon) 测试线段与多边形是否相交
  - [`rectRect`](#rectrect) 测试矩形与矩形是否相交
  - [`rectPolygon`](#rectpolygon) 测试矩形与多边形是否相交
  - [`polygonPolygon`](#polygonpolygon) 测试多边形与多边形是否相交
  - [`circleCircle`](#circlecircle) 测试圆形与圆形是否相交
  - [`polygonCircle`](#polygoncircle) 测试矩形与圆形是否相交
  - [`pointInPolygon`](#pointinpolygon) 测试一个点是否在一个多边形中
  - [`pointLineDistance`](#pointlinedistance) 计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。



### Details




<!-- Method Block -->
#### 方法


##### lineLine

测试线段与线段是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:12](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L12) |

###### 参数列表
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the first line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the first line
- `b1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the second line
- `b2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the second line


##### lineRect

测试线段与矩形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L43) |

###### 参数列表
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect


##### linePolygon

测试线段与多边形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L75) |

###### 参数列表
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### rectRect

测试矩形与矩形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:100](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L100) |

###### 参数列表
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The first rect
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The second rect


##### rectPolygon

测试矩形与多边形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:130](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L130) |

###### 参数列表
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### polygonPolygon

测试多边形与多边形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:182](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L182) |

###### 参数列表
- `a` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The first polygon, a set of points
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The second polygon, a set of points


##### circleCircle

测试圆形与圆形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:221](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L221) |

###### 参数列表
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### polygonCircle

测试矩形与圆形是否相交

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:238](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L238) |

###### 参数列表
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The Polygon, a set of points
- `circle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### pointInPolygon

测试一个点是否在一个多边形中

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:267](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L267) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### pointLineDistance

计算点到直线的距离。如果这是一条线段并且垂足不在线段内，则会计算点到线段端点的距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:297](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L297) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `start` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of line
- `end` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of line
- `isSegment` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> whether this line is a segment



