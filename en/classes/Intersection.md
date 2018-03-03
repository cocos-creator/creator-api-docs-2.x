## `Intersection` Class



Module: [cc](../modules/cc.md)


Intersection helper class


### Index



##### Methods

  - [`lineLine`](#lineline) Test line and line
  - [`lineRect`](#linerect) Test line and rect
  - [`linePolygon`](#linepolygon) Test line and polygon
  - [`rectRect`](#rectrect) Test rect and rect
  - [`rectPolygon`](#rectpolygon) Test rect and polygon
  - [`polygonPolygon`](#polygonpolygon) Test polygon and polygon
  - [`circleCircle`](#circlecircle) Test circle and circle
  - [`polygonCircle`](#polygoncircle) Test polygon and circle
  - [`pointInPolygon`](#pointinpolygon) Test whether the point is in the polygon
  - [`pointLineDistance`](#pointlinedistance) Calculate the distance of point to line.



### Details




<!-- Method Block -->
#### Methods


##### lineLine

Test line and line

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:12](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L12) |

###### Parameters
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the first line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the first line
- `b1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the second line
- `b2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the second line


##### lineRect

Test line and rect

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L43) |

###### Parameters
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect


##### linePolygon

Test line and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L75) |

###### Parameters
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### rectRect

Test rect and rect

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:100](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L100) |

###### Parameters
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The first rect
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The second rect


##### rectPolygon

Test rect and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:130](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L130) |

###### Parameters
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### polygonPolygon

Test polygon and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:182](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L182) |

###### Parameters
- `a` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The first polygon, a set of points
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The second polygon, a set of points


##### circleCircle

Test circle and circle

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:221](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L221) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### polygonCircle

Test polygon and circle

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:238](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L238) |

###### Parameters
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The Polygon, a set of points
- `circle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### pointInPolygon

Test whether the point is in the polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:267](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L267) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### pointLineDistance

Calculate the distance of point to line.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js:297](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCIntersection.js#L297) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `start` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of line
- `end` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of line
- `isSegment` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> whether this line is a segment



