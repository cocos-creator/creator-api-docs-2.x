## `geomUtils.Triangle` Class



Module: [cc](../modules/cc.md)


Triangle



### Index

##### Properties

  - [`a`](#a) `Vec3` 
  - [`b`](#b) `Vec3` 
  - [`c`](#c) `Vec3` 



##### Methods

  - [`create`](#create) create a new triangle
  - [`clone`](#clone) clone a new triangle
  - [`copy`](#copy) copy the values from one triangle to another
  - [`fromPoints`](#frompoints) Create a triangle from three points
  - [`set`](#set) Set the components of a triangle to the given values



### Details


#### Properties


##### a

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/triangle.ts:133](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L133) |



##### b

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/triangle.ts:137](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L137) |



##### c

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/triangle.ts:141](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L141) |






<!-- Method Block -->
#### Methods


##### create

create a new triangle

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| Defined in | [cocos2d/core/geom-utils/triangle.ts:38](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L38) |

###### Parameters
- `ax` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `ay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `az` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `bx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `by` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `bz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `cx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `cy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `cz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

clone a new triangle

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| Defined in | [cocos2d/core/geom-utils/triangle.ts:56](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L56) |

###### Parameters
- `t` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the source plane


##### copy

copy the values from one triangle to another

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| Defined in | [cocos2d/core/geom-utils/triangle.ts:70](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L70) |

###### Parameters
- `out` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the receiving triangle
- `t` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the source triangle


##### fromPoints

Create a triangle from three points

| meta | description |
|------|-------------|
| Returns | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| Defined in | [cocos2d/core/geom-utils/triangle.ts:85](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L85) |

###### Parameters
- `out` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the receiving triangle
- `a` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `b` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `c` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### set

Set the components of a triangle to the given values

| meta | description |
|------|-------------|
| Returns | Plane 
| Defined in | [cocos2d/core/geom-utils/triangle.ts:101](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/triangle.ts#L101) |

###### Parameters
- `out` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the receiving plane
- `ax` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X component of a
- `ay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y component of a
- `az` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z component of a
- `bx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X component of b
- `by` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y component of b
- `bz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z component of b
- `cx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X component of c
- `cy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y component of c
- `cz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z component of c



