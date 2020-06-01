## `geomUtils.Ray` Class



Module: [cc](../modules/cc.md)


ray



### Index

##### Properties

  - [`o`](#o) `Vec3` Start point.
  - [`d`](#d) `Vec3` e...



##### Methods

  - [`create`](#create) create a new ray
  - [`clone`](#clone) Creates a new ray initialized with values from an existing ray
  - [`copy`](#copy) Copy the values from one ray to another
  - [`fromPoints`](#frompoints) create a ray from two points
  - [`set`](#set) Set the components of a ray to the given values
  - [`computeHit`](#computehit) Compute hit.



### Details


#### Properties


##### o

> Start point.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/ray.ts:136](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L136) |



##### d

> e
Direction

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/ray.ts:145](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L145) |






<!-- Method Block -->
#### Methods


##### create

create a new ray

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/geom-utils/ray.ts:42](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L42) |

###### Parameters
- `ox` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The x part of the starting point.
- `oy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The y part of the starting point.
- `oz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The z part of the starting point.
- `dx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X in the direction.
- `dy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y in the direction.
- `dz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z in the direction.


##### clone

Creates a new ray initialized with values from an existing ray

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/geom-utils/ray.ts:60](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L60) |

###### Parameters
- `a` Ray Clone target


##### copy

Copy the values from one ray to another

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/geom-utils/ray.ts:76](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L76) |

###### Parameters
- `out` Ray Accept the ray of the operation.
- `a` Ray Copied ray.


##### fromPoints

create a ray from two points

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/geom-utils/ray.ts:93](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L93) |

###### Parameters
- `out` Ray Receive the operating ray.
- `origin` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Origin of ray
- `target` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> A point on a ray.


##### set

Set the components of a ray to the given values

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/geom-utils/ray.ts:110](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L110) |

###### Parameters
- `out` Ray Receive the operating ray.
- `ox` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The x part of the starting point.
- `oy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The y part of the starting point.
- `oz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The z part of the starting point.
- `dx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X in the direction.
- `dy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y in the direction.
- `dz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z in the direction.


##### computeHit

Compute hit.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/ray.ts:174](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/geom-utils/ray.ts#L174) |

###### Parameters
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `distance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



