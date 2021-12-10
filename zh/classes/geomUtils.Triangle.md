## `geomUtils.Triangle` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


Triangle



### 索引

##### 属性（properties）

  - [`a`](#a) `Vec3` 
  - [`b`](#b) `Vec3` 
  - [`c`](#c) `Vec3` 



##### 方法

  - [`create`](#create) create a new triangle
  - [`clone`](#clone) clone a new triangle
  - [`copy`](#copy) copy the values from one triangle to another
  - [`fromPoints`](#frompoints) Create a triangle from three points
  - [`set`](#set) Set the components of a triangle to the given values



### Details


#### 属性（properties）


##### a

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:133](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L133) |



##### b

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:137](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L137) |



##### c

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:141](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L141) |






<!-- Method Block -->
#### 方法


##### create

create a new triangle

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:38](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L38) |

###### 参数列表
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
| 返回 | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:56](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L56) |

###### 参数列表
- `t` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the source plane


##### copy

copy the values from one triangle to another

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:70](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L70) |

###### 参数列表
- `out` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the receiving triangle
- `t` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the source triangle


##### fromPoints

Create a triangle from three points

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:85](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L85) |

###### 参数列表
- `out` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> the receiving triangle
- `a` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `b` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `c` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### set

Set the components of a triangle to the given values

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/triangle.ts:101](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/geom-utils/triangle.ts#L101) |

###### 参数列表
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



