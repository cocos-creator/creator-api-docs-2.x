## `Vec2` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of 2D vectors and points.



### Index

##### Properties

  - [`ONE`](#one) `Vec2` return a Vec2 object with x = 1 and y = 1.
  - [`ZERO`](#zero) `Vec2` return a Vec2 object with x = 0 and y = 0.
  - [`ZERO_R`](#zeror) `Vec2` return a readonly Vec2 object with x = 0 and y = 0.
  - [`UP`](#up) `Vec2` return a Vec2 object with x = 0 and y = 1.
  - [`UP_R`](#upr) `Vec2` return a readonly Vec2 object with x = 0 and y = 1.
  - [`RIGHT`](#right) `Vec2` return a readonly Vec2 object with x = 1 and y = 0.
  - [`RIGHT_R`](#rightr) `Vec2` return a Vec2 object with x = 1 and y = 0.
  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 



##### Methods

  - [`mag`](#mag) Returns the length of this vector.
  - [`magSqr`](#magsqr) Returns the squared length of this vector.
  - [`subSelf`](#subself) Subtracts one vector from this.
  - [`sub`](#sub) Subtracts one vector from this, and returns the new result.
  - [`mulSelf`](#mulself) Multiplies this by a number.
  - [`mul`](#mul) Multiplies by a number, and returns the new result.
  - [`divSelf`](#divself) Divides by a number.
  - [`div`](#div) Divides by a number, and returns the new result.
  - [`scaleSelf`](#scaleself) Multiplies two vectors.
  - [`scale`](#scale) Multiplies two vectors, and returns the new result.
  - [`negSelf`](#negself) Negates the components.
  - [`neg`](#neg) Negates the components, and returns the new result.
  - [`clone`](#clone) 
  - [`copy`](#copy) 
  - [`set`](#set) 
  - [`add`](#add) 
  - [`subtract`](#subtract) 
  - [`multiply`](#multiply) 
  - [`divide`](#divide) 
  - [`ceil`](#ceil) 
  - [`floor`](#floor) 
  - [`min`](#min) 
  - [`max`](#max) 
  - [`round`](#round) 
  - [`multiplyScalar`](#multiplyscalar) 
  - [`scaleAndAdd`](#scaleandadd) 
  - [`distance`](#distance) 
  - [`squaredDistance`](#squareddistance) 
  - [`len`](#len) 
  - [`lengthSqr`](#lengthsqr) 
  - [`negate`](#negate) 
  - [`inverse`](#inverse) 
  - [`inverseSafe`](#inversesafe) 
  - [`normalize`](#normalize) 
  - [`dot`](#dot) 
  - [`cross`](#cross) 
  - [`lerp`](#lerp) 
  - [`random`](#random) 
  - [`transformMat3`](#transformmat3) 
  - [`transformMat4`](#transformmat4) 
  - [`strictEquals`](#strictequals) 
  - [`equals`](#equals) 
  - [`angle`](#angle) 
  - [`toArray`](#toarray) 
  - [`fromArray`](#fromarray) 
  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Vec2 object
  - [`set`](#set) Sets vector with another's value
  - [`equals`](#equals) Check whether two vector equal
  - [`fuzzyEquals`](#fuzzyequals) Check whether two vector equal with some degree of variance.
  - [`toString`](#tostring) Transform to string with vector informations
  - [`lerp`](#lerp) Calculate linear interpolation result between this vector and another one with given ratio
  - [`clampf`](#clampf) Clamp the vector between from float and to float.
  - [`add`](#add) Adds this vector.
  - [`addSelf`](#addself) Adds this vector.
  - [`subtract`](#subtract) Subtracts one vector from this.
  - [`multiplyScalar`](#multiplyscalar) Multiplies this by a number.
  - [`multiply`](#multiply) Multiplies two vectors.
  - [`divide`](#divide) Divides by a number.
  - [`negate`](#negate) Negates the components.
  - [`dot`](#dot) Dot product
  - [`cross`](#cross) Cross product
  - [`len`](#len) Returns the length of this vector.
  - [`lengthSqr`](#lengthsqr) Returns the squared length of this vector.
  - [`normalizeSelf`](#normalizeself) Make the length of this vector to 1.
  - [`normalize`](#normalize) Note that the current vector is unchanged and a new normalized vector is returned.
  - [`angle`](#angle) Get angle in radian between this and vector.
  - [`signAngle`](#signangle) Get angle in radian between this and vector with direction.
  - [`rotate`](#rotate) rotate
  - [`rotateSelf`](#rotateself) rotate self
  - [`project`](#project) Calculates the projection of the current vector over the given vector.
  - [`transformMat4`](#transformmat4) Transforms the vec2 with a mat4.
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y.



### Details


#### Properties


##### ONE

> return a Vec2 object with x = 1 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:213](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L213) |



##### ZERO

> return a Vec2 object with x = 0 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:223](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L223) |



##### ZERO_R

> return a readonly Vec2 object with x = 0 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:230](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L230) |



##### UP

> return a Vec2 object with x = 0 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:239](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L239) |



##### UP_R

> return a readonly Vec2 object with x = 0 and y = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:246](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L246) |



##### RIGHT

> return a readonly Vec2 object with x = 1 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:255](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L255) |



##### RIGHT_R

> return a Vec2 object with x = 1 and y = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:262](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L262) |



##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:734](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L734) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec2.ts:739](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L739) |






<!-- Method Block -->
#### Methods


##### mag

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:55](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L55) |


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
| Defined in | [cocos2d/core/value-types/vec2.ts:65](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L65) |


##### Examples

```js
var v = cc.v2(10, 10);
v.magSqr(); // return 200;
```

##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:75](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L75) |

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
| Defined in | [cocos2d/core/value-types/vec2.ts:87](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L87) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### Examples

```js
var v = cc.v2(10, 10);
v.sub(cc.v2(5, 5));      // return Vec2 {x: 5, y: 5};
var v1 = new Vec2;
v.sub(cc.v2(5, 5), v1);  // return Vec2 {x: 5, y: 5};
```

##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:103](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L103) |

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
| Defined in | [cocos2d/core/value-types/vec2.ts:115](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L115) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### Examples

```js
var v = cc.v2(10, 10);
v.mul(5);      // return Vec2 {x: 50, y: 50};
var v1 = new Vec2;
v.mul(5, v1);  // return Vec2 {x: 50, y: 50};
```

##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:131](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L131) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

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
| Defined in | [cocos2d/core/value-types/vec2.ts:143](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L143) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### Examples

```js
var v = cc.v2(10, 10);
v.div(5);      // return Vec2 {x: 2, y: 2};
var v1 = new Vec2;
v.div(5, v1);  // return Vec2 {x: 2, y: 2};
```

##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:159](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L159) |

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
| Defined in | [cocos2d/core/value-types/vec2.ts:171](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L171) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### Examples

```js
var v = cc.v2(10, 10);
v.scale(cc.v2(5, 5));      // return Vec2 {x: 50, y: 50};
var v1 = new Vec2;
v.scale(cc.v2(5, 5), v1);  // return Vec2 {x: 50, y: 50};
```

##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:187](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L187) |


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
| Defined in | [cocos2d/core/value-types/vec2.ts:198](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L198) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created

##### Examples

```js
var v = cc.v2(10, 10);
var v1 = new Vec2;
v.neg(v1);  // return Vec2 {x: -10, y: -10};
```

##### clone



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:271](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L271) |



##### copy



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:282](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L282) |



##### set



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:295](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L295) |



##### add



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:308](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L308) |



##### subtract



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:321](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L321) |



##### multiply



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:334](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L334) |



##### divide



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:347](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L347) |



##### ceil



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:360](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L360) |



##### floor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:373](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L373) |



##### min



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:386](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L386) |



##### max



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:400](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L400) |



##### round



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:413](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L413) |



##### multiplyScalar



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:426](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L426) |



##### scaleAndAdd



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:439](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L439) |



##### distance



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:452](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L452) |



##### squaredDistance



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:465](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L465) |



##### len



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:478](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L478) |



##### lengthSqr



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:491](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L491) |



##### negate



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:504](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L504) |



##### inverse



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:517](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L517) |



##### inverseSafe



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:530](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L530) |



##### normalize



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:556](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L556) |



##### dot



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:575](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L575) |



##### cross



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:586](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L586) |



##### lerp



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:599](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L599) |



##### random



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:614](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L614) |



##### transformMat3



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:629](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L629) |



##### transformMat4



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:645](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L645) |



##### strictEquals



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:661](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L661) |



##### equals



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:672](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L672) |



##### angle



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:688](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L688) |



##### toArray



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:708](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L708) |



##### fromArray



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:721](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L721) |



##### constructor

Constructor
see Cc/vec2:method or Cc/p:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec2.ts:747](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L747) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

clone a Vec2 object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:769](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L769) |



##### set

Sets vector with another's value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:779](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L779) |

###### Parameters
- `newValue` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether two vector equal

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:793](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L793) |

###### Parameters
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### fuzzyEquals

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:804](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L804) |

###### Parameters
- `other` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:822](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L822) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:835](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L835) |

###### Parameters
- `to` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:853](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L853) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `max_inclusive` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var min_inclusive = cc.v2(0, 0);
var max_inclusive = cc.v2(20, 20);
var v1 = cc.v2(20, 20).clampf(min_inclusive, max_inclusive); // Vec2 {x: 20, y: 20};
var v2 = cc.v2(0, 0).clampf(min_inclusive, max_inclusive);   // Vec2 {x: 0, y: 0};
var v3 = cc.v2(10, 10).clampf(min_inclusive, max_inclusive); // Vec2 {x: 10, y: 10};
```

##### add

Adds this vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:877](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L877) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.add(cc.v2(5, 5));// return Vec2 {x: 15, y: 15};
```

##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:896](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L896) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### subtract

Subtracts one vector from this.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:910](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L910) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.subSelf(cc.v2(5, 5));// return Vec2 {x: 5, y: 5};
```

##### multiplyScalar

Multiplies this by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:927](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L927) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.multiply(5);// return Vec2 {x: 50, y: 50};
```

##### multiply

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:944](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L944) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.multiply(cc.v2(5, 5));// return Vec2 {x: 50, y: 50};
```

##### divide

Divides by a number.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:961](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L961) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.divide(5); // return Vec2 {x: 2, y: 2};
```

##### negate

Negates the components.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:978](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L978) |


##### Examples

```js
var v = cc.v2(10, 10);
v.negate(); // return Vec2 {x: -10, y: -10};
```

##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:994](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L994) |

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
| Defined in | [cocos2d/core/value-types/vec2.ts:1008](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1008) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v = cc.v2(10, 10);
v.cross(cc.v2(5, 5)); // return 0;
```

##### len

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1022](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1022) |


##### Examples

```js
var v = cc.v2(10, 10);
v.len(); // return 14.142135623730951;
```

##### lengthSqr

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1035](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1035) |


##### Examples

```js
var v = cc.v2(10, 10);
v.lengthSqr(); // return 200;
```

##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1048](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1048) |


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
| Defined in | [cocos2d/core/value-types/vec2.ts:1074](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1074) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1097](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1097) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### signAngle

Get angle in radian between this and vector with direction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1119](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1119) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1131](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1131) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

rotate self

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1146](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1146) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### project

Calculates the projection of the current vector over the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1163](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1163) |

###### Parameters
- `vector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var v1 = cc.v2(20, 20);
var v2 = cc.v2(5, 5);
v1.project(v2); // Vec2 {x: 20, y: 20};
```

##### transformMat4

Transforms the vec2 with a mat4. 3rd vector component is implicitly '0', 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1178](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1178) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### maxAxis

Returns the maximum value in x, y.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec2.ts:1191](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/value-types/vec2.ts#L1191) |




