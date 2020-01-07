## `geomUtils.Sphere` Class



Module: [cc](../modules/cc.md)


Sphere.



### Index

##### Properties

  - [`center`](#center) `Vec3` The center of the local coordinate.
  - [`radius`](#radius) `number` 



##### Methods

  - [`create`](#create) create a new sphere
  - [`clone`](#clone) clone a new sphere
  - [`copy`](#copy) copy the values from one sphere to another
  - [`fromPoints`](#frompoints) create a new bounding sphere from two corner points
  - [`set`](#set) Set the components of a sphere to the given values
  - [`clone`](#clone) Clone.
  - [`copy`](#copy) Copy sphere
  - [`getBoundary`](#getboundary) Get the bounding points of this shape
  - [`transform`](#transform) Transform this shape
  - [`setScale`](#setscale) Scale out based on the sphere data.



### Details


#### Properties


##### center

> The center of the local coordinate.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/sphere.ts:126](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L126) |



##### radius

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/geom-utils/sphere.ts:135](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L135) |






<!-- Method Block -->
#### Methods


##### create

create a new sphere

| meta | description |
|------|-------------|
| Returns | Sphere 
| Defined in | [cocos2d/core/geom-utils/sphere.ts:43](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L43) |

###### Parameters
- `cx` Unknown X coordinates of the shape relative to the origin.
- `cy` Unknown Y coordinates of the shape relative to the origin.
- `cz` Unknown Z coordinates of the shape relative to the origin.
- `r` Unknown Radius of sphere


##### clone

clone a new sphere

| meta | description |
|------|-------------|
| Returns | Sphere 
| Defined in | [cocos2d/core/geom-utils/sphere.ts:59](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L59) |

###### Parameters
- `p` Sphere The target of cloning.


##### copy

copy the values from one sphere to another

| meta | description |
|------|-------------|
| Returns | Sphere 
| Defined in | [cocos2d/core/geom-utils/sphere.ts:72](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L72) |

###### Parameters
- `out` Sphere Accept the sphere of operations.
- `a` Sphere Sphere being copied.


##### fromPoints

create a new bounding sphere from two corner points

| meta | description |
|------|-------------|
| Returns | Sphere 
| Defined in | [cocos2d/core/geom-utils/sphere.ts:89](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L89) |

###### Parameters
- `out` Unknown Accept the sphere of operations.
- `minPos` Unknown The smallest point of sphere.
- `maxPos` Unknown The maximum point of sphere.


##### set

Set the components of a sphere to the given values

| meta | description |
|------|-------------|
| Returns | Sphere 
| Defined in | [cocos2d/core/geom-utils/sphere.ts:106](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L106) |

###### Parameters
- `out` Sphere Accept the sphere of operations.
- `cx` Unknown X coordinates of the shape relative to the origin.
- `cy` Unknown Y coordinates of the shape relative to the origin.
- `cz` Unknown Z coordinates of the shape relative to the origin.
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Radius.


##### clone

Clone.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/sphere.ts:161](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L161) |



##### copy

Copy sphere

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/sphere.ts:172](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L172) |

###### Parameters
- `a` Unknown Copy target.


##### getBoundary

Get the bounding points of this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/sphere.ts:184](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L184) |

###### Parameters
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### transform

Transform this shape

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/sphere.ts:198](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L198) |

###### Parameters
- `m` Unknown The transformation matrix.
- `pos` Unknown The position part of the transformation.
- `rot` Unknown The rotating part of the transformation.
- `scale` Unknown The scaling part of the transformation.
- `out` Unknown The target of the transformation.


##### setScale

Scale out based on the sphere data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/sphere.ts:227](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/sphere.ts#L227) |

###### Parameters
- `scale` Unknown Scale value
- `out` Unknown Scale target



