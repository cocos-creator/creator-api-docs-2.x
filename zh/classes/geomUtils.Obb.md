## `geomUtils.Obb` 类型



模块: [cc](../modules/cc.md)


基础几何  方向包围盒。



### 索引

##### 属性（properties）

  - [`type`](#type) `number` 获取形状的类型。
  - [`center`](#center) `Vec3` 本地坐标的中心点。
  - [`halfExtents`](#halfextents) `Vec3` 长宽高的一半。
  - [`orientation`](#orientation) `Mat3` 方向矩阵。



##### 方法

  - [`create`](#create) 创建一个新的 obb 实例。
  - [`clone`](#clone) 克隆一个 obb。
  - [`copy`](#copy) 将从一个 obb 的值复制到另一个 obb。
  - [`fromPoints`](#frompoints) 用两个点创建一个新的 obb。
  - [`set`](#set) 将给定 obb 的属性设置为给定的值。
  - [`getBoundary`](#getboundary) 获取 obb 的最小点和最大点。
  - [`transform`](#transform) 将 out 根据这个 obb 的数据进行变换。
  - [`translateAndRotate`](#translateandrotate) 将 out 根据这个 obb 的数据进行变换。
  - [`setScale`](#setscale) 将 out 根据这个 obb 的数据进行缩放。



### Details


#### 属性（properties）


##### type

> 获取形状的类型。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/geom-utils/obb.ts:53](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L53) |



##### center

> 本地坐标的中心点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/obb.ts:185](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L185) |



##### halfExtents

> 长宽高的一半。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/obb.ts:194](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L194) |



##### orientation

> 方向矩阵。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Mat3.html" class="crosslink">Mat3</a> |
| 定义于 | [cocos2d/core/geom-utils/obb.ts:203](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L203) |






<!-- Method Block -->
#### 方法


##### create

创建一个新的 obb 实例。

| meta | description |
|------|-------------|
| 返回 | Obb 
| 定义于 | [cocos2d/core/geom-utils/obb.ts:63](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L63) |

###### 参数列表
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

克隆一个 obb。

| meta | description |
|------|-------------|
| 返回 | Obb 
| 定义于 | [cocos2d/core/geom-utils/obb.ts:95](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L95) |

###### 参数列表
- `a` Obb The target of cloning.


##### copy

将从一个 obb 的值复制到另一个 obb。

| meta | description |
|------|-------------|
| 返回 | Obb 
| 定义于 | [cocos2d/core/geom-utils/obb.ts:113](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L113) |

###### 参数列表
- `out` Obb Obb that accepts the operation.
- `a` Obb Obb being copied.


##### fromPoints

用两个点创建一个新的 obb。

| meta | description |
|------|-------------|
| 返回 | Obb 
| 定义于 | [cocos2d/core/geom-utils/obb.ts:131](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L131) |

###### 参数列表
- `out` Obb Obb that accepts the operation.
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The smallest point of obb.
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Obb's maximum point.


##### set

将给定 obb 的属性设置为给定的值。

| meta | description |
|------|-------------|
| 返回 | Obb 
| 定义于 | [cocos2d/core/geom-utils/obb.ts:149](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L149) |

###### 参数列表
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

获取 obb 的最小点和最大点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/obb.ts:225](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L225) |

###### 参数列表
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### transform

将 out 根据这个 obb 的数据进行变换。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/obb.ts:240](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L240) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The transformation matrix.
- `pos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The position part of the transformation.
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> The rotating part of the transformation.
- `scale` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The scaling part of the transformation.
- `out` Obb Target of transformation.


##### translateAndRotate

将 out 根据这个 obb 的数据进行变换。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/obb.ts:258](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L258) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The transformation matrix.
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> The rotating part of the transformation.
- `out` Obb Target of transformation.


##### setScale

将 out 根据这个 obb 的数据进行缩放。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/obb.ts:274](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/geom-utils/obb.ts#L274) |

###### 参数列表
- `scale` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Scale value.
- `out` Obb Scaled target.



