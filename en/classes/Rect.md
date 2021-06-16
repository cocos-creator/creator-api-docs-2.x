## `Rect` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


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
| Defined in | [cocos2d/core/value-types/rect.ts:77](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L77) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:81](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L81) |



##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:85](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L85) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:89](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L89) |



##### xMin

> The minimum x value, equals to rect.x

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:329](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L329) |



##### yMin

> The minimum y value, equals to rect.y

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:343](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L343) |



##### xMax

> The maximum x value.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:358](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L358) |



##### yMax

> The maximum y value.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:371](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L371) |



##### center

> The position of the center of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:384](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L384) |



##### origin

> The X and Y position of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:398](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L398) |



##### size

> Width and height of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [cocos2d/core/value-types/rect.ts:411](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L411) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor of Rect class.
see <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> for convenience method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/rect.ts:42](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L42) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:57](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L57) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:108](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L108) |


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
| Defined in | [cocos2d/core/value-types/rect.ts:121](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L121) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:140](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L140) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:179](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L179) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:198](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L198) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:221](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L221) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:240](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L240) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:258](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L258) |

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
| Defined in | [cocos2d/core/value-types/rect.ts:281](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L281) |

###### Parameters
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> The output rect
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The matrix4


##### toString

Output rect informations to string

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/rect.ts:315](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/rect.ts#L315) |


##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```

##### set

Copys all the properties from another given object to this value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/value-type.ts:80](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/value-types/value-type.ts#L80) |

###### Parameters
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy



