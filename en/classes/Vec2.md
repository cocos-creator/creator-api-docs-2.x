## `Vec2` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 2D vectors and points.


### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`ONE`](#one) `Vec2` return a Vec2 object with x = 1 and y = 1.
  - [`ZERO`](#zero) `Vec2` return a Vec2 object with x = 0 and y = 0.
  - [`UP`](#up) `Vec2` return a Vec2 object with x = 0 and y = 1.
  - [`RIGHT`](#right) `Vec2` return a Vec2 object with x = 1 and y = 0.



##### Methods

  - [`constructor`](#constructor) Constructor
see Cc/vec2:method or <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>
  - [`clone`](#clone) clone a Vec2 value
  - [`set`](#set) TODO
  - [`equals`](#equals) TODO
  - [`toString`](#tostring) TODO
  - [`lerp`](#lerp) TODO
  - [`addSelf`](#addself) Adds this vector. If you want to save result to another vector, use add() instead.
  - [`add`](#add) Adds two vectors, and returns the new result.
  - [`subSelf`](#subself) Subtracts one vector from this. If you want to save result to another vector, use sub() instead.
  - [`sub`](#sub) Subtracts one vector from this, and returns the new result.
  - [`mulSelf`](#mulself) Multiplies this by a number. If you want to save result to another vector, use mul() instead.
  - [`mul`](#mul) Multiplies by a number, and returns the new result.
  - [`scaleSelf`](#scaleself) Multiplies two vectors.
  - [`scale`](#scale) Multiplies two vectors, and returns the new result.
  - [`divSelf`](#divself) Divides by a number. If you want to save result to another vector, use div() instead.
  - [`div`](#div) Divides by a number, and returns the new result.
  - [`negSelf`](#negself) Negates the components. If you want to save result to another vector, use neg() instead.
  - [`neg`](#neg) Negates the components, and returns the new result.
  - [`dot`](#dot) Dot product
  - [`cross`](#cross) Cross product
  - [`mag`](#mag) Returns the length of this vector.
  - [`magSqr`](#magsqr) Returns the squared length of this vector.
  - [`normalizeSelf`](#normalizeself) Make the length of this vector to 1.
  - [`normalize`](#normalize) Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.
  - [`angle`](#angle) Get angle in radian between this and vector.
  - [`signAngle`](#signangle) Get angle in radian between this and vector with direction.
  - [`rotate`](#rotate) rotate
  - [`rotateSelf`](#rotateself) rotate self



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:62](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L62) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L65) |



##### ONE

> return a Vec2 object with x = 1 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:541](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L541) |



##### ZERO

> return a Vec2 object with x = 0 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:552](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L552) |



##### UP

> return a Vec2 object with x = 0 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:563](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L563) |



##### RIGHT

> return a Vec2 object with x = 1 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:574](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L574) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see Cc/vec2:method or <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:41](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L41) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec2 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L72) |



##### set

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:82](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L82) |

###### Parameters
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:96](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L96) |

###### Parameters
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L107) |



##### lerp

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:120](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L120) |

###### Parameters
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:138](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L138) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.addSelf(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
```

##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L155) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
v.add(cc.v2(5, 5));      // return Vec2 {x: 15, y: 15};
var v1;
v.add(cc.v2(5, 5), v1);  // return Vec2 {x: 15, y: 15};
```

##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:175](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L175) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### sub

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:192](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L192) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
var v1;
v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
```

##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:212](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L212) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.mulSelf(5);// return Vec2 {x: 50, y: 50};
```

##### mul

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L229) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
v.mul(5);      // return Vec2 {x: 50, y: 50};
var v1;
v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
```

##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:249](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L249) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.scaleSelf(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
```

##### scale

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:266](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L266) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
var v1;
v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
```

##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:286](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L286) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.divSelf(5); // return Vec2 {x: 2, y: 2};
```

##### div

Divides by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:303](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L303) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
v.div(5);      // return Vec2 {x: 2, y: 2};
var v1;
v.div(5, v1);  // return Vec2 {x: 2, y: 2};
```

##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L323) |


##### Examples

```js
var v = cc.v2(10, 10);
v.negSelf(); // return Vec2 {x: -10, y: -10};
```

##### neg

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:339](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L339) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector

##### Examples

```js
var v = cc.v2(10, 10);
var v1;
v.neg(v1);  // return Vec2 {x: -10, y: -10};
```

##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:357](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L357) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.dot(cc.v2(5, 5)); // return 100;
```

##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:371](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L371) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.cross(cc.v2(5, 5)); // return 0;
```

##### mag

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:385](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L385) |


##### Examples

```js
var v = cc.v2(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:398](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L398) |


##### Examples

```js
var v = cc.v2(10, 10);
v.magSqr(); // return 200;
```

##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:411](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L411) |


##### Examples

```js
var v = cc.v2(10, 10);
v.normalizeSelf(); // return Vec2 {x: 0.7071067811865475, y: 0.7071067811865475};
```

##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:438](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L438) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:461](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L461) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

Get angle in radian between this and vector with direction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:483](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L483) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:499](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L499) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### rotateSelf

rotate self

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js:514](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCVec2.js#L514) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



