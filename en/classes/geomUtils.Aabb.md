## `geomUtils.Aabb` Class



Module: [cc](../modules/cc.md)


Aabb



### Index

##### Properties

  - [`center`](#center) `Vec3` 
  - [`halfExtents`](#halfextents) `Vec3` 
  - [`_type`](#type) `number` 



##### Methods

  - [`create`](#create) create a new aabb
  - [`clone`](#clone) clone a new aabb
  - [`copy`](#copy) copy the values from one aabb to another
  - [`fromPoints`](#frompoints) create a new aabb from two corner points
  - [`set`](#set) Set the components of a aabb to the given values
  - [`getBoundary`](#getboundary) Get the bounding points of this shape
  - [`transform`](#transform) Transform this shape



### Details


#### Properties


##### center

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/aabb.ts:124](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L124) |



##### halfExtents

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/aabb.ts:128](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L128) |



##### _type

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/geom-utils/aabb.ts:132](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L132) |






<!-- Method Block -->
#### Methods


##### create

create a new aabb

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 
| Defined in | [cocos2d/core/geom-utils/aabb.ts:52](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L52) |

###### Parameters
- `px` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X coordinates for aabb's original point
- `py` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y coordinates for aabb's original point
- `pz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z coordinates for aabb's original point
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb width
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb height
- `l` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb length


##### clone

clone a new aabb

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 
| Defined in | [cocos2d/core/geom-utils/aabb.ts:67](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L67) |

###### Parameters
- `a` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the source aabb


##### copy

copy the values from one aabb to another

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 
| Defined in | [cocos2d/core/geom-utils/aabb.ts:78](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L78) |

###### Parameters
- `out` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the receiving aabb
- `a` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the source aabb


##### fromPoints

create a new aabb from two corner points

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 
| Defined in | [cocos2d/core/geom-utils/aabb.ts:92](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L92) |

###### Parameters
- `out` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the receiving aabb
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> lower corner position of the aabb
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> upper corner position of the aabb


##### set

Set the components of a aabb to the given values

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 
| Defined in | [cocos2d/core/geom-utils/aabb.ts:106](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L106) |

###### Parameters
- `out` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the receiving aabb
- `px` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X coordinates for aabb's original point
- `py` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y coordinates for aabb's original point
- `pz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z coordinates for aabb's original point
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb width
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb height
- `l` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the half of aabb length


##### getBoundary

Get the bounding points of this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/aabb.ts:144](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L144) |

###### Parameters
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### transform

Transform this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/aabb.ts:155](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/aabb.ts#L155) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the transform matrix
- `pos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the position part of the transform
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> the rotation part of the transform
- `scale` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the scale part of the transform
- `out` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> the target shape



