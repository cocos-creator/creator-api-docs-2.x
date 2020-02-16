## `geomUtils.Sphere` 类型



模块: [cc](../modules/cc.md)


轴对齐球。



### 索引

##### 属性（properties）

  - [`center`](#center) `Vec3` 本地坐标的中心点。
  - [`radius`](#radius) `number` 半径。



##### 方法

  - [`create`](#create) 创建一个新的 sphere 实例。
  - [`clone`](#clone) 克隆一个新的 sphere 实例。
  - [`copy`](#copy) 将从一个 sphere 的值复制到另一个 sphere。
  - [`fromPoints`](#frompoints) 从两个点创建一个新的 sphere。
  - [`set`](#set) 将球体的属性设置为给定的值。
  - [`clone`](#clone) 获得克隆。
  - [`copy`](#copy) 拷贝对象。
  - [`getBoundary`](#getboundary) 获取此形状的边界点。
  - [`transform`](#transform) 将 out 根据这个 sphere 的数据进行变换。
  - [`setScale`](#setscale) 将 out 根据这个 sphere 的数据进行缩放。



### Details


#### 属性（properties）


##### center

> 本地坐标的中心点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:126](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L126) |



##### radius

> 半径。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:135](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L135) |






<!-- Method Block -->
#### 方法


##### create

创建一个新的 sphere 实例。

| meta | description |
|------|-------------|
| 返回 | Sphere 
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:43](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L43) |

###### 参数列表
- `cx` Unknown X coordinates of the shape relative to the origin.
- `cy` Unknown Y coordinates of the shape relative to the origin.
- `cz` Unknown Z coordinates of the shape relative to the origin.
- `r` Unknown Radius of sphere


##### clone

克隆一个新的 sphere 实例。

| meta | description |
|------|-------------|
| 返回 | Sphere 
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:59](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L59) |

###### 参数列表
- `p` Sphere The target of cloning.


##### copy

将从一个 sphere 的值复制到另一个 sphere。

| meta | description |
|------|-------------|
| 返回 | Sphere 
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:72](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L72) |

###### 参数列表
- `out` Sphere Accept the sphere of operations.
- `a` Sphere Sphere being copied.


##### fromPoints

从两个点创建一个新的 sphere。

| meta | description |
|------|-------------|
| 返回 | Sphere 
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:89](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L89) |

###### 参数列表
- `out` Unknown Accept the sphere of operations.
- `minPos` Unknown The smallest point of sphere.
- `maxPos` Unknown The maximum point of sphere.


##### set

将球体的属性设置为给定的值。

| meta | description |
|------|-------------|
| 返回 | Sphere 
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:106](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L106) |

###### 参数列表
- `out` Sphere Accept the sphere of operations.
- `cx` Unknown X coordinates of the shape relative to the origin.
- `cy` Unknown Y coordinates of the shape relative to the origin.
- `cz` Unknown Z coordinates of the shape relative to the origin.
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Radius.


##### clone

获得克隆。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:161](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L161) |



##### copy

拷贝对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:172](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L172) |

###### 参数列表
- `a` Unknown Copy target.


##### getBoundary

获取此形状的边界点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:184](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L184) |

###### 参数列表
- `minPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `maxPos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### transform

将 out 根据这个 sphere 的数据进行变换。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:198](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L198) |

###### 参数列表
- `m` Unknown The transformation matrix.
- `pos` Unknown The position part of the transformation.
- `rot` Unknown The rotating part of the transformation.
- `scale` Unknown The scaling part of the transformation.
- `out` Unknown The target of the transformation.


##### setScale

将 out 根据这个 sphere 的数据进行缩放。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/sphere.ts:227](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/sphere.ts#L227) |

###### 参数列表
- `scale` Unknown Scale value
- `out` Unknown Scale target



