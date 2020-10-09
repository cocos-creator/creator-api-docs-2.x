## `geomUtils.Plane` 类型



模块: [cc](../modules/cc.md)


平面。



### 索引

##### 属性（properties）

  - [`n`](#n) `Vec3` 法线向量。
  - [`d`](#d) `number` 原点到平面的距离。



##### 方法

  - [`create`](#create) 创建一个新的 plane。
  - [`clone`](#clone) 克隆一个新的 plane。
  - [`copy`](#copy) 复制一个平面的值到另一个。
  - [`fromPoints`](#frompoints) 用三个点创建一个平面。
  - [`set`](#set) 将给定平面的属性设置为给定值。
  - [`fromNormalAndPoint`](#fromnormalandpoint) 用一条法线和一个点创建平面。
  - [`normalize`](#normalize) 归一化一个平面。
  - [`transform`](#transform) 变换一个平面。



### Details


#### 属性（properties）


##### n

> 法线向量。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/plane.ts:173](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L173) |



##### d

> 原点到平面的距离。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/geom-utils/plane.ts:182](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L182) |






<!-- Method Block -->
#### 方法


##### create

创建一个新的 plane。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:46](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L46) |

###### 参数列表
- `nx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the normal component.
- `ny` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the normal component.
- `nz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the normal component.
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Distance from the origin.


##### clone

克隆一个新的 plane。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:62](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L62) |

###### 参数列表
- `p` Plane The source of cloning.


##### copy

复制一个平面的值到另一个。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:75](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L75) |

###### 参数列表
- `out` Plane The object that accepts the action.
- `p` Plane The source of the copy.


##### fromPoints

用三个点创建一个平面。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:92](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L92) |

###### 参数列表
- `out` Plane The object that accepts the action.
- `a` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Point a。
- `b` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Point b。
- `c` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Point c。


##### set

将给定平面的属性设置为给定值。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:114](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L114) |

###### 参数列表
- `out` Plane The object that accepts the action.
- `nx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the normal component.
- `ny` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the normal component.
- `nz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the normal component.
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Distance from the origin.


##### fromNormalAndPoint

用一条法线和一个点创建平面。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:136](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L136) |

###### 参数列表
- `out` Plane The object that accepts the action.
- `normal` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The normal of a plane.
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> A point on the plane.


##### normalize

归一化一个平面。

| meta | description |
|------|-------------|
| 返回 | Plane 
| 定义于 | [cocos2d/core/geom-utils/plane.ts:154](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L154) |

###### 参数列表
- `out` Plane The object that accepts the action.
- `a` Plane Source data for operations.


##### transform

变换一个平面。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/plane.ts:208](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/plane.ts#L208) |

###### 参数列表
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 



