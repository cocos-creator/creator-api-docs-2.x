## `PhysicsRayResult` 类型



模块: [cc.primitive](../modules/cc.primitive.md)
父模块: [cc](../modules/cc.md)


用于保存物理射线检测结果



### 索引

##### 属性（properties）

  - [`hitPoint`](#hitpoint) `Vec3` 击中点
  - [`distance`](#distance) `number` 距离
  - [`collider`](#collider) `Collider3D` 击中的碰撞盒



##### 方法

  - [`_assign`](#assign) 设置射线，此方法由引擎内部使用，请勿在外部脚本调用
  - [`clone`](#clone) 克隆



### Details


#### 属性（properties）


##### hitPoint

> 击中点

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:41](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L41) |



##### distance

> 距离

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:53](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L53) |



##### collider

> 击中的碰撞盒

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:65](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L65) |






<!-- Method Block -->
#### 方法


##### _assign

设置射线，此方法由引擎内部使用，请勿在外部脚本调用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:81](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L81) |

###### 参数列表
- `hitPoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `distance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `collider` <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> 


##### clone

克隆

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:97](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L97) |




