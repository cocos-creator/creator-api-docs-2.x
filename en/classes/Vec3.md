## `Vec3` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)


Representation of 3D vectors and points.



### Index

##### Properties

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`ONE`](#one) `Vec3` return a Vec3 object with x = 1, y = 1, z = 1.
  - [`ZERO`](#zero) `Vec3` return a Vec3 object with x = 0, y = 0, z = 0.
  - [`UP`](#up) `Vec3` return a Vec3 object with x = 0, y = 1, z = 0.
  - [`RIGHT`](#right) `Vec3` return a Vec3 object with x = 1, y = 0, z = 0.
  - [`FRONT`](#front) `Vec3` return a Vec3 object with x = 0, y = 0, z = 1.



##### Methods

  - [`constructor`](#constructor) Constructor
  - [`clone`](#clone) clone a Vec3 value
  - [`set`](#set) Set the current vector value with the given vector.
  - [`equals`](#equals) Check whether the vector equals another one
  - [`fuzzyEquals`](#fuzzyequals) Check whether two vector equal with some degree of variance.
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
  - [`transformMat4`](#transformmat4) Transforms the vec3 with a mat4.
  - [`angle`](#angle) Get angle in radian between this and vector.
  - [`project`](#project) Calculates the projection of the current vector over the given vector.
  - [`signAngle`](#signangle) Get angle in radian between this and vector with direction.
  - [`rotate`](#rotate) rotate.
  - [`rotateSelf`](#rotateself) rotate self.



### Details


#### Properties


##### x

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:70](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L70) |



##### y

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:73](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L73) |



##### z

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:76](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L76) |



##### ONE

> return a Vec3 object with x = 1, y = 1, z = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:533](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L533) |



##### ZERO

> return a Vec3 object with x = 0, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:544](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L544) |



##### UP

> return a Vec3 object with x = 0, y = 1, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:555](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L555) |



##### RIGHT

> return a Vec3 object with x = 1, y = 0, z = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:566](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L566) |



##### FRONT

> return a Vec3 object with x = 0, y = 0, z = 1.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/value-types/vec3.js:577](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L577) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor
see Cc/vec3:method

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/vec3.js:46](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L46) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a Vec3 value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:83](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L83) |



##### set

Set the current vector value with the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:93](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L93) |

###### Parameters
- `newValue` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> !#en new value to set. !#zh 要设置的新值


##### equals

Check whether the vector equals another one

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:108](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L108) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fuzzyEquals

Check whether two vector equal with some degree of variance.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:120](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L120) |

###### Parameters
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

Transform to string with vector informations

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:140](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L140) |



##### lerp

Calculate linear interpolation result between this vector and another one with given ratio

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:154](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L154) |

###### Parameters
- `to` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### clampf

Clamp the vector between from float and to float.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:169](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L169) |

###### Parameters
- `min_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `max_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### addSelf

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:188](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L188) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### add

Adds two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:203](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L203) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### subSelf

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:219](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L219) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### sub

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:234](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L234) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### mulSelf

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:250](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L250) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:265](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L265) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### scaleSelf

Multiplies two vectors.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:281](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L281) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### scale

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:296](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L296) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### divSelf

Divides by a number. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:312](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L312) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

Divides by a number, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:327](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L327) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### negSelf

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:343](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L343) |



##### neg

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:357](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L357) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### dot

Dot product

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:372](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L372) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### cross

Cross product

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:383](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L383) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### mag

Returns the length of this vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:397](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L397) |


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
| Defined in | [cocos2d/core/value-types/vec3.js:410](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L410) |



##### normalizeSelf

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:420](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L420) |



##### normalize

Returns this vector with a magnitude of 1.<br/>
<br/>
Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:432](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L432) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### transformMat4

Transforms the vec3 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:451](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L451) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### angle

Get angle in radian between this and vector.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:463](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L463) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### project

Calculates the projection of the current vector over the given vector.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:472](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L472) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 

##### Examples

```js
var v1 = cc.v3(20, 20, 20);
var v2 = cc.v3(5, 5, 5);
v1.project(v2); // Vec3 {x: 20, y: 20, z: 20};
```

##### signAngle

Get angle in radian between this and vector with direction. <br/>
In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:487](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L487) |

###### Parameters
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

rotate. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:503](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L503) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

rotate self. In order to compatible with the vec2 API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/value-types/vec3.js:516](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/value-types/vec3.js#L516) |

###### Parameters
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



