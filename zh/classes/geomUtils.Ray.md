## `geomUtils.Ray` 类型



模块: [cc](../modules/cc.md)


射线。



### 索引

##### 属性（properties）

  - [`o`](#o) `Vec3` 起点。
  - [`d`](#d) `Vec3` 方向。



##### 方法

  - [`create`](#create) 创建一条射线。
  - [`clone`](#clone) 从一条射线克隆出一条新的射线。
  - [`copy`](#copy) 将从一个 ray 的值复制到另一个 ray。
  - [`fromPoints`](#frompoints) 用两个点创建一条射线。
  - [`set`](#set) 将给定射线的属性设置为给定的值。
  - [`computeHit`](#computehit) 



### Details


#### 属性（properties）


##### o

> 起点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/ray.ts:136](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L136) |



##### d

> e
Direction
方向。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/ray.ts:145](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L145) |






<!-- Method Block -->
#### 方法


##### create

创建一条射线。

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/geom-utils/ray.ts:42](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L42) |

###### 参数列表
- `ox` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The x part of the starting point.
- `oy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The y part of the starting point.
- `oz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The z part of the starting point.
- `dx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X in the direction.
- `dy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y in the direction.
- `dz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z in the direction.


##### clone

从一条射线克隆出一条新的射线。

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/geom-utils/ray.ts:60](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L60) |

###### 参数列表
- `a` Ray Clone target


##### copy

将从一个 ray 的值复制到另一个 ray。

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/geom-utils/ray.ts:76](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L76) |

###### 参数列表
- `out` Ray Accept the ray of the operation.
- `a` Ray Copied ray.


##### fromPoints

用两个点创建一条射线。

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/geom-utils/ray.ts:93](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L93) |

###### 参数列表
- `out` Ray Receive the operating ray.
- `origin` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Origin of ray
- `target` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> A point on a ray.


##### set

将给定射线的属性设置为给定的值。

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/geom-utils/ray.ts:110](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L110) |

###### 参数列表
- `out` Ray Receive the operating ray.
- `ox` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The x part of the starting point.
- `oy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The y part of the starting point.
- `oz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The z part of the starting point.
- `dx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> X in the direction.
- `dy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Y in the direction.
- `dz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Z in the direction.


##### computeHit



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/ray.ts:174](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/geom-utils/ray.ts#L174) |

###### 参数列表
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `distance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



