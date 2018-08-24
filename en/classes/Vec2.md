## `Vec2` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)


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
  - [`clone`](#clone) clone a Vec2 value
  - [`set`](#set) TODO
  - [`equals`](#equals) Check whether two vector equal
  - [`pFuzzyEqual`](#pfuzzyequal) Check whether two vector equal with some degree of variance.
  - [`toString`](#tostring) Transform to string with vector informations
  - [`lerp`](#lerp) Calculate linear interpolation result between this vector and another one with given ratio
  - [`clampf`](#clampf) Clamp the vector between from float and to float.
  - [`addSelf`](#addself) Adds this vector.
  - [`add`](#add) Adds two vectors, and returns the new result.
  - [`subSelf`](#subself) Subtracts one vector from this.
  - [`sub`](#sub) Subtracts one vector from this, and returns the new result.
  - [`mulSelf`](#mulself) Multiplies this by a number.
  - [`mul`](#mul) Multiplies by a number, and returns the new result.
  - [`scaleSelf`](#scaleself) Multiplies two vectors.
  - [`scale`](#scale) Multiplies two vectors, and returns the new result.
  - [`divSelf`](#divself) Divides by a number.
  - [`div`](#div) Divides by a number, and returns the new result.
  - [`negSelf`](#negself) Negates the components.
  - [`neg`](#neg) Negates the components, and returns the new result.
  - [`dot`](#dot) Dot product
  - [`cross`](#cross) Cross product
  - [`mag`](#mag) Returns the length of this vector.
  - [`magSqr`](#magsqr) Returns the squared length of this vector.
  - [`normalizeSelf`](#normalizeself) Make the length of this vector to 1.
  - [`normalize`](#normalize) Note that the current vector is unchanged and a new normalized vector is returned.
  - [`angle`](#angle) Get angle in radian between this and vector.
  - [`signAngle`](#signangle) Get angle in radian between this and vector with direction.
  - [`rotate`](#rotate) rotate
  - [`rotateSelf`](#rotateself) rotate self
  - [`project`](#project) Calculates the projection of the current vector over the given vector.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:64](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L64) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L67) |



##### ONE

> return a Vec2 object with x = 1 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:595](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L595) |



##### ZERO

> return a Vec2 object with x = 0 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:606](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L606) |



##### UP

> return a Vec2 object with x = 0 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:617](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L617) |



##### RIGHT

> return a Vec2 object with x = 1 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.js:628](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L628) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see Cc/vec2:method or <a href="../modules/cc.html#method_p" class="crosslink">cc.p</a>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.js:43](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L43) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec2 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:74](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L74) |



##### set

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L84) |

###### Parameters
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether two vector equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:98](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L98) |

###### Parameters
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### pFuzzyEqual

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:109](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L109) |

###### Parameters
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:127](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L127) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:140](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L140) |

###### Parameters
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:158](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L158) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `max_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var min_inclusive = cc.v2(0, 0);
var max_inclusive = cc.v2(20, 20);
var v1 = cc.v2(20, 20).clamp(min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
var v2 = cc.v2(0, 0).clamp(min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
var v3 = cc.v2(10, 10).clamp(min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
```

##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:182](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L182) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L199) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:219](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L219) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:236](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L236) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:256](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L256) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:273](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L273) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:293](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L293) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:310](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L310) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:330](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L330) |

###### Parameters
- `divisor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

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
| Defined in | [cocos2d/core/value-types/vec2.js:347](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L347) |

###### Parameters
- `divisor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
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
| Defined in | [cocos2d/core/value-types/vec2.js:367](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L367) |


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
| Defined in | [cocos2d/core/value-types/vec2.js:383](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L383) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:401](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L401) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:415](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L415) |

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
| Defined in | [cocos2d/core/value-types/vec2.js:429](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L429) |


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
| Defined in | [cocos2d/core/value-types/vec2.js:442](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L442) |


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
| Defined in | [cocos2d/core/value-types/vec2.js:455](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L455) |


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
| Defined in | [cocos2d/core/value-types/vec2.js:481](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L481) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:504](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L504) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

Get angle in radian between this and vector with direction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:526](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L526) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:538](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L538) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### rotateSelf

rotate self

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:553](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L553) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### project

Calculates the projection of the current vector over the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.js:570](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/vec2.js#L570) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v1 = cc.v2(20, 20);
var v2 = cc.v2(5, 5);
v1.project(v2); // Vec2 {x: 20, y: 20};
```


