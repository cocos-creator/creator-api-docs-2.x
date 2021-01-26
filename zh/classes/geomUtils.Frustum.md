## `geomUtils.Frustum` 类型



模块: [cc](../modules/cc.md)


平截头体



### 索引

##### 属性（properties）

  - [`accurate`](#accurate) `boolean` Set whether to use accurate intersection testing function on this frustum
  - [`planes`](#planes) `Plane[]` 
  - [`planes`](#planes) `Vec3[]` 



##### 方法

  - [`create`](#create) create a new frustum
  - [`clone`](#clone) Clone a frustum
  - [`copy`](#copy) Copy the values from one frustum to another
  - [`update`](#update) 
  - [`transform`](#transform) 



### Details


#### 属性（properties）


##### accurate

> Set whether to use accurate intersection testing function on this frustum

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:50](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L50) |



##### planes

> 

| meta | description |
|------|-------------|
| 类型 | Plane |
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:128](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L128) |



##### planes

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3[]</a> |
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:132](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L132) |






<!-- Method Block -->
#### 方法


##### create

create a new frustum

| meta | description |
|------|-------------|
| 返回 | Frustum 
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:89](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L89) |



##### clone

Clone a frustum

| meta | description |
|------|-------------|
| 返回 | Frustum 
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:99](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L99) |

###### 参数列表
- `f` Frustum 


##### copy

Copy the values from one frustum to another

| meta | description |
|------|-------------|
| 返回 | Frustum 
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:110](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L110) |

###### 参数列表
- `out` Frustum 
- `f` Frustum 


##### update



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:150](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L150) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the view-projection matrix
- `inv` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the inverse view-projection matrix


##### transform



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/frustum.ts:198](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/frustum.ts#L198) |

###### 参数列表
- `mat` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 



