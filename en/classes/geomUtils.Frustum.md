## `geomUtils.Frustum` Class



Module: [cc](../modules/cc.md)


frustum



### Index

##### Properties

  - [`accurate`](#accurate) `boolean` Set whether to use accurate intersection testing function on this frustum
  - [`planes`](#planes) `Plane[]` 
  - [`planes`](#planes) `Vec3[]` 



##### Methods

  - [`create`](#create) create a new frustum
  - [`clone`](#clone) Clone a frustum
  - [`copy`](#copy) Copy the values from one frustum to another
  - [`update`](#update) Update the frustum information according to the given transform matrix.
  - [`transform`](#transform) transform by matrix



### Details


#### Properties


##### accurate

> Set whether to use accurate intersection testing function on this frustum

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/geom-utils/frustum.ts:50](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L50) |



##### planes

> 

| meta | description |
|------|-------------|
| Type | Plane |
| Defined in | [cocos2d/core/geom-utils/frustum.ts:128](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L128) |



##### planes

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3[]</a> |
| Defined in | [cocos2d/core/geom-utils/frustum.ts:132](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L132) |






<!-- Method Block -->
#### Methods


##### create

create a new frustum

| meta | description |
|------|-------------|
| Returns | Frustum 
| Defined in | [cocos2d/core/geom-utils/frustum.ts:89](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L89) |



##### clone

Clone a frustum

| meta | description |
|------|-------------|
| Returns | Frustum 
| Defined in | [cocos2d/core/geom-utils/frustum.ts:99](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L99) |

###### Parameters
- `f` Frustum 


##### copy

Copy the values from one frustum to another

| meta | description |
|------|-------------|
| Returns | Frustum 
| Defined in | [cocos2d/core/geom-utils/frustum.ts:110](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L110) |

###### Parameters
- `out` Frustum 
- `f` Frustum 


##### update

Update the frustum information according to the given transform matrix.
Note that the resulting planes are not normalized under normal mode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/frustum.ts:150](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L150) |

###### Parameters
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the view-projection matrix
- `inv` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the inverse view-projection matrix


##### transform

transform by matrix

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/frustum.ts:198](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/geom-utils/frustum.ts#L198) |

###### Parameters
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 



