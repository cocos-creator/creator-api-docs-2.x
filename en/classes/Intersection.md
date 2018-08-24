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
| Defined in | [cocos2d/core/collider/CCIntersection.js:37](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L37) |

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
| Defined in | [cocos2d/core/collider/CCIntersection.js:68](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L68) |

###### Parameters
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect


##### linePolygon

Test line and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:100](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L100) |

###### Parameters
- `a1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of the line
- `a2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of the line
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### rectRect

Test rect and rect

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:125](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L125) |

###### Parameters
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The first rect
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> The second rect


##### rectPolygon

Test rect and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:155](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L155) |

###### Parameters
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> The rect
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### polygonPolygon

Test polygon and polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:207](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L207) |

###### Parameters
- `a` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The first polygon, a set of points
- `b` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The second polygon, a set of points


##### circleCircle

Test circle and circle

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:246](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L246) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### polygonCircle

Test polygon and circle

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:263](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L263) |

###### Parameters
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The Polygon, a set of points
- `circle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object contains position and radius


##### pointInPolygon

Test whether the point is in the polygon

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:292](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L292) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `polygon` <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> The polygon, a set of points


##### pointLineDistance

Calculate the distance of point to line.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/collider/CCIntersection.js:322](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/collider/CCIntersection.js#L322) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The point
- `start` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The start point of line
- `end` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The end point of line
- `isSegment` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> whether this line is a segment



