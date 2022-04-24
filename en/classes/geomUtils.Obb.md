## `geomUtils.Obb` Class



Module: [cc](../modules/cc.md)


obb



### Index

##### Properties

  - [`type`](#type) `number` 
  - [`center`](#center) `Vec3` The center of the local coordinate.
  - [`halfExtents`](#halfextents) `Vec3` Half the length, width, and height.
  - [`orientation`](#orientation) `Mat3` Direction matrix.



##### Methods

  - [`create`](#create) create a new obb
  - [`clone`](#clone) clone a new obb
  - [`copy`](#copy) copy the values from one obb to another
  - [`fromPoints`](#frompoints) create a new obb from two corner points
  - [`set`](#set) Set the components of a obb to the given values
  - [`getBoundary`](#getboundary) Get the bounding points of this shape
  - [`transform`](#transform) Transform this shape
  - [`translateAndRotate`](#translateandrotate) Transform out based on this obb data.
  - [`setScale`](#setscale) Scale out based on this obb data.



### Details


#### Properties


##### type

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/geom-utils/obb.ts:53](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L53) |



##### center

> The center of the local coordinate.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/obb.ts:185](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L185) |



##### halfExtents

> Half the length, width, and height.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/obb.ts:194](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L194) |



##### orientation

> Direction matrix.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Mat3.html" class="crosslink">Mat3</a> |
| Defined in | [cocos2d/core/geom-utils/obb.ts:203](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L203) |






<!-- Method Block -->
#### Methods


##### create

create a new obb

| meta | description |
|------|-------------|
| Returns | Obb 
| Defined in | [cocos2d/core/geom-utils/obb.ts:63](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L63) |

###### Parameters
- `cx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> X coordinates of the shape relative to the origin.
- `cy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Y coordinates of the shape relative to the origin.
- `cz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z coordinates of the shape relative to the origin.
- `hw` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the width.
- `hh` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the height.
- `hl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the Length.
- `ox_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `ox_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `ox_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.


##### clone

clone a new obb

| meta | description |
|------|-------------|
| Returns | Obb 
| Defined in | [cocos2d/core/geom-utils/obb.ts:95](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L95) |

###### Parameters
- `a` Obb The target of cloning.


##### copy

copy the values from one obb to another

| meta | description |
|------|-------------|
| Returns | Obb 
| Defined in | [cocos2d/core/geom-utils/obb.ts:113](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L113) |

###### Parameters
- `out` Obb Obb that accepts the operation.
- `a` Obb Obb being copied.


##### fromPoints

create a new obb from two corner points

| meta | description |
|------|-------------|
| Returns | Obb 
| Defined in | [cocos2d/core/geom-utils/obb.ts:131](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L131) |

###### Parameters
- `out` Obb Obb that accepts the operation.
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The smallest point of obb.
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Obb's maximum point.


##### set

Set the components of a obb to the given values

| meta | description |
|------|-------------|
| Returns | Obb 
| Defined in | [cocos2d/core/geom-utils/obb.ts:149](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L149) |

###### Parameters
- `cx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> X coordinates of the shape relative to the origin.
- `cy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Y coordinates of the shape relative to the origin.
- `cz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z coordinates of the shape relative to the origin.
- `hw` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the width.
- `hh` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the height.
- `hl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Obb is half the Length.
- `ox_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `ox_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `ox_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oy_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_1` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_2` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.
- `oz_3` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Direction matrix parameter.


##### getBoundary

Get the bounding points of this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/obb.ts:225](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L225) |

###### Parameters
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### transform

Transform this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/obb.ts:240](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L240) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The transformation matrix.
- `pos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The position part of the transformation.
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> The rotating part of the transformation.
- `scale` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The scaling part of the transformation.
- `out` Obb Target of transformation.


##### translateAndRotate

Transform out based on this obb data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/obb.ts:258](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L258) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The transformation matrix.
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> The rotating part of the transformation.
- `out` Obb Target of transformation.


##### setScale

Scale out based on this obb data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/obb.ts:274](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/obb.ts#L274) |

###### Parameters
- `scale` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scale value.
- `out` Obb Scaled target.



