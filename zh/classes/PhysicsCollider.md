## `PhysicsCollider` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`density`](#density) `Number` 密度
  - [`sensor`](#sensor) `Boolean` 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。
  - [`friction`](#friction) `Number` 摩擦系数，取值一般在 [0, 1] 之间
  - [`restitution`](#restitution) `Number` 弹性系数，取值一般在 [0, 1]之间
  - [`body`](#body) `RigidBody` 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。



##### 方法

  - [`apply`](#apply) 应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。
  - [`getAABB`](#getaabb) 获取碰撞体的世界坐标系下的包围盒



### Details


#### 属性（properties）


##### density

> 密度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:53](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L53) |



##### sensor

> 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:71](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L71) |



##### friction

> 摩擦系数，取值一般在 [0, 1] 之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:89](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L89) |



##### restitution

> 弹性系数，取值一般在 [0, 1]之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:107](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L107) |



##### body

> 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:125](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L125) |






<!-- Method Block -->
#### 方法


##### apply

应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:257](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L257) |



##### getAABB

获取碰撞体的世界坐标系下的包围盒

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:269](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/collider/CCPhysicsCollider.js#L269) |




