## `Rect` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)


A 2D rectangle defined by x, y position and width, height.


### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 
  - [`xMin`](#xmin) `Number` The minimum x value, equals to rect.x
  - [`yMin`](#ymin) `Number` The minimum y value, equals to rect.y
  - [`xMax`](#xmax) `Number` The maximum x value.
  - [`yMax`](#ymax) `Number` The maximum y value.
  - [`center`](#center) `Vec2` The position of the center of the rectangle.
  - [`origin`](#origin) `Vec2` The X and Y position of the rectangle.
  - [`size`](#size) `Size` Width and height of the rectangle.



##### Methods

  - [`constructor`](#constructor) Constructor of Rect class.
  - [`fromMinMax`](#fromminmax) Creates a rectangle from two coordinate values.
  - [`clone`](#clone) TODO
  - [`equals`](#equals) TODO
  - [`lerp`](#lerp) TODO
  - [`intersects`](#intersects) Check whether the current rectangle intersects with the given one
  - [`intersection`](#intersection) Returns the overlapping portion of 2 rectangles.
  - [`contains`](#contains) Check whether the current rect contains the given point
  - [`containsRect`](#containsrect) Returns true if the other rect totally inside this rectangle.
  - [`union`](#union) Returns the smallest rectangle that contains the current rect and the given rect.
  - [`transformMat4`](#transformmat4) Apply matrix4 to the rect.
  - [`toString`](#tostring) Output rect informations to string
  - [`set`](#set) Copys all the properties from another given object to this value.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L67) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:70](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L70) |



##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:73](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L73) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L76) |



##### xMin

> The minimum x value, equals to rect.x

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:321](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L321) |



##### yMin

> The minimum y value, equals to rect.y

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:335](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L335) |



##### xMax

> The maximum x value.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:349](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L349) |



##### yMax

> The maximum y value.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.js:360](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L360) |



##### center

> The position of the center of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/rect.js:371](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L371) |



##### origin

> The X and Y position of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/rect.js:387](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L387) |



##### size

> Width and height of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [cocos2d/core/value-types/rect.js:402](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L402) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor of Rect class.
see <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> for convenience method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/rect.js:39](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L39) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### fromMinMax

Creates a rectangle from two coordinate values.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/rect.js:80](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L80) |

###### Parameters
- `v1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `v2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
```

##### clone

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/rect.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L102) |


##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
a.clone();// Rect {x: 0, y: 0, width: 10, height: 10}
```

##### equals

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/rect.js:115](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L115) |

###### Parameters
- `other` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 10, 10);
a.equals(b);// true;
```

##### lerp

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/rect.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L134) |

###### Parameters
- `to` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient.
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> optional, the receiving vector.

##### Examples

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

Check whether the current rectangle intersects with the given one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/rect.js:172](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L172) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 20, 20);
a.intersects(b);// true
```

##### intersection

Returns the overlapping portion of 2 rectangles.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/rect.js:191](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L191) |

###### Parameters
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> Stores the result
- `rectB` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 10, 20, 20);
var b = new cc.Rect(0, 10, 10, 10);
var intersection = new cc.Rect();
a.intersection(intersection, b); // intersection {x: 0, y: 10, width: 10, height: 10};
```

##### contains

Check whether the current rect contains the given point

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/rect.js:214](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L214) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Vec2(0, 5);
a.contains(b);// true
```

##### containsRect

Returns true if the other rect totally inside this rectangle.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/rect.js:233](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L233) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 20, 20);
var b = new cc.Rect(0, 0, 10, 10);
a.containsRect(b);// true
```

##### union

Returns the smallest rectangle that contains the current rect and the given rect.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/rect.js:251](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L251) |

###### Parameters
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> Stores the result
- `rectB` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 10, 20, 20);
var b = new cc.Rect(0, 10, 10, 10);
var union = new cc.Rect();
a.union(union, b); // union {x: 0, y: 10, width: 20, height: 20};
```

##### transformMat4

Apply matrix4 to the rect.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/rect.js:274](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L274) |

###### Parameters
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> The output rect
- `mat` vmath.mat4 The matrix4


##### toString

Output rect informations to string

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/rect.js:307](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/rect.js#L307) |


##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```

##### set

Copys all the properties from another given object to this value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/value-type.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/value-type.js#L84) |

###### Parameters
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy



