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
  - [`xMin`](#xmin) `Number` TODO
  - [`yMin`](#ymin) `Number` TODO
  - [`xMax`](#xmax) `Number` TODO
  - [`yMax`](#ymax) `Number` TODO
  - [`center`](#center) `Vec2` The position of the center of the rectangle.
  - [`origin`](#origin) `Vec2` The X and Y position of the rectangle.
  - [`size`](#size) `Size` Width and height of the rectangle.



##### Methods

  - [`constructor`](#constructor) Constructor of cc.Rect class.
see <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> for convenience method.
  - [`fromMinMax`](#fromminmax) Creates a rectangle from two coordinate values.
  - [`contain`](#contain) Checks if rect contains.
  - [`clone`](#clone) TODO
  - [`equals`](#equals) TODO
  - [`lerp`](#lerp) TODO
  - [`toString`](#tostring) TODO
  - [`intersects`](#intersects) TODO
  - [`contains`](#contains) TODO
  - [`containsRect`](#containsrect) Returns true if the other rect totally inside this rectangle.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L66) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:69](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L69) |



##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L72) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L75) |



##### xMin

> TODO

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L215) |



##### yMin

> TODO

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L229) |



##### xMax

> TODO

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L243) |



##### yMax

> TODO

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L254) |



##### center

> The position of the center of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:265](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L265) |



##### origin

> The X and Y position of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:281](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L281) |



##### size

> Width and height of the rectangle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:296](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L296) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor of cc.Rect class.
see <a href="../modules/cc.html#method_rect" class="crosslink">cc.rect</a> for convenience method.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:38](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L38) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:79](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L79) |

###### Parameters
- `v1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `v2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
cc.Rect.fromMinMax(cc.v2(10, 10), cc.v2(20, 20)); // Rect {x: 10, y: 10, width: 10, height: 10};
```

##### contain

Checks if rect contains.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:99](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L99) |

###### Parameters
- `a` <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect a
- `b` <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect b

##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(5, 5, 5, 5);
var c = new cc.Rect(20, 20, 10, 10);
cc.Rect.contain(a, b); //  1;
cc.Rect.contain(b, a); // -1;
cc.Rect.contain(a, c); //  0;
```

##### clone

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:138](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L138) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L151) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:170](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L170) |

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

##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L201) |


##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
a.toString();// "(0.00, 0.00, 10.00, 10.00)";
```

##### intersects

TODO

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L311) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 10, 10);
var b = new cc.Rect(0, 0, 20, 20);
a.intersects(b);// true
```

##### contains

TODO

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:326](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L326) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js:345](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCRect.js#L345) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 

##### Examples

```js
var a = new cc.Rect(0, 0, 20, 20);
var b = new cc.Rect(0, 0, 10, 10);
a.containsRect(b);// true
```


