## `Physics3DManager` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


物理系统管理器。



### 索引

##### 属性（properties）

  - [`enabled`](#enabled) `boolean` 是否启用物理系统，默认不启用。
  - [`allowSleep`](#allowsleep) `boolean` 物理系统是否允许自动休眠，默认为 true。
  - [`maxSubStep`](#maxsubstep) `number` 物理每帧模拟的最大子步数，默认为 2。
  - [`deltaTime`](#deltatime) `number` 物理每步模拟消耗的固定时间，默认为 1/60 秒。
  - [`useFixedTime`](#usefixedtime) `boolean` 是否使用固定的时间步长。
  - [`gravity`](#gravity) `Vec3` 物理世界的重力数值，默认为 (0, -10, 0)。
  - [`defaultMaterial`](#defaultmaterial) `PhysicsMaterial | null` 获取全局的默认物理材质，注意：builtin 时为 null。



##### 方法

  - [`update`](#update) 执行一次物理系统的模拟，目前将在每帧自动执行一次。
  - [`raycast`](#raycast) 检测所有的碰撞盒，并返回所有被检测到的结果，若没有检测到，则返回空值。
  - [`raycastClosest`](#raycastclosest) 检测所有的碰撞盒，并返回射线距离最短的检测结果，若没有，则返回空值。



### Details


#### 属性（properties）


##### enabled

> 是否启用物理系统，默认不启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:46](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L46) |



##### allowSleep

> 物理系统是否允许自动休眠，默认为 true。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:60](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L60) |



##### maxSubStep

> 物理每帧模拟的最大子步数，默认为 2。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:77](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L77) |



##### deltaTime

> 物理每步模拟消耗的固定时间，默认为 1/60 秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:91](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L91) |



##### useFixedTime

> 是否使用固定的时间步长。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:105](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L105) |



##### gravity

> 物理世界的重力数值，默认为 (0, -10, 0)。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:119](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L119) |



##### defaultMaterial

> 获取全局的默认物理材质，注意：builtin 时为 null。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/PhysicsMaterial.html" class="crosslink">PhysicsMaterial</a> &#124; Null |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:136](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L136) |






<!-- Method Block -->
#### 方法


##### update

执行一次物理系统的模拟，目前将在每帧自动执行一次。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:196](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L196) |

###### 参数列表
- `deltaTime` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The time difference from the last execution is currently elapsed per frame


##### raycast

检测所有的碰撞盒，并返回所有被检测到的结果，若没有检测到，则返回空值。注意返回值是从对象池中取的，所以请不要保存结果引用或者修改结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult[]</a> &#124; Null 
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:223](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L223) |

###### 参数列表
- `worldRay` Ray A ray in world space
- `groupIndexOrName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Collision group index or group name
- `maxDistance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Maximum detection distance
- `queryTrigger` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Detect trigger or not


##### raycastClosest

检测所有的碰撞盒，并返回射线距离最短的检测结果，若没有，则返回空值。注意返回值是从对象池中取的，所以请不要保存结果引用或者修改结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult</a> &#124; Null 
| 定义于 | [cocos2d/core/3d/physics/framework/physics-manager.ts:250](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/3d/physics/framework/physics-manager.ts#L250) |

###### 参数列表
- `worldRay` Ray A ray in world space
- `groupIndexOrName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Collision group index or group name
- `maxDistance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Maximum detection distance
- `queryTrigger` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Detect trigger or not



