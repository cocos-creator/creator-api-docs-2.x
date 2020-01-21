## `geomUtils.Plane` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


plane。



### Index

##### Properties

  - [`n`](#n) `Vec3` A normal vector.
  - [`d`](#d) `number` The distance from the origin to the plane.



##### Methods

  - [`create`](#create) create a new plane
  - [`clone`](#clone) clone a new plane
  - [`copy`](#copy) copy the values from one plane to another
  - [`fromPoints`](#frompoints) create a plane from three points
  - [`set`](#set) Set the components of a plane to the given values
  - [`fromNormalAndPoint`](#fromnormalandpoint) create plane from normal and point
  - [`normalize`](#normalize) normalize a plane
  - [`transform`](#transform) Transform a plane.



### Details


#### Properties


##### n

> A normal vector.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/plane.ts:173](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L173) |



##### d

> The distance from the origin to the plane.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/geom-utils/plane.ts:182](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L182) |






<!-- Method Block -->
#### Methods


##### create

create a new plane

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:46](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L46) |

###### Parameters
- `nx` Unknown The x part of the normal component.
- `ny` Unknown The y part of the normal component.
- `nz` Unknown The z part of the normal component.
- `d` Unknown Distance from the origin.


##### clone

clone a new plane

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:62](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L62) |

###### Parameters
- `p` Unknown The source of cloning.


##### copy

copy the values from one plane to another

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:75](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L75) |

###### Parameters
- `out` Unknown The object that accepts the action.
- `p` Unknown The source of the copy.


##### fromPoints

create a plane from three points

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:92](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L92) |

###### Parameters
- `out` Unknown The object that accepts the action.
- `a` Unknown Point a。
- `b` Unknown Point b。
- `c` Unknown Point c。


##### set

Set the components of a plane to the given values

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:114](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L114) |

###### Parameters
- `out` Unknown The object that accepts the action.
- `nx` Unknown The x part of the normal component.
- `ny` Unknown The y part of the normal component.
- `nz` Unknown The z part of the normal component.
- `d` Unknown Distance from the origin.


##### fromNormalAndPoint

create plane from normal and point

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:136](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L136) |

###### Parameters
- `out` Unknown The object that accepts the action.
- `normal` Unknown The normal of a plane.
- `point` Unknown A point on the plane.


##### normalize

normalize a plane

| meta | description |
|------|-------------|
| Returns | Unknown 
| Defined in | [cocos2d/core/geom-utils/plane.ts:154](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L154) |

###### Parameters
- `out` Unknown The object that accepts the action.
- `a` Unknown Source data for operations.


##### transform

Transform a plane.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/plane.ts:208](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/geom-utils/plane.ts#L208) |

###### Parameters
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 



