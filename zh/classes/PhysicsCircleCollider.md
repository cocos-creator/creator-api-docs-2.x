## `PhysicsCircleCollider` 类型

继承于 [`PhysicsCollider`](PhysicsCollider.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`offset`](#offset) `Vec2` 
  - [`radius`](#radius) `Number` 
  - [`density`](#density) `Number` 
  - [`sensor`](#sensor) `Boolean` 
  - [`friction`](#friction) `Number` 
  - [`restitution`](#restitution) `Number` 
  - [`body`](#body) `RigidBody` 



##### 方法

  - [`apply`](#apply) 
  - [`getAABB`](#getaabb) 



### Details


#### 属性（properties）


##### offset

> 位置偏移量

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/collider/CCCircleCollider.js:40](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/collider/CCCircleCollider.js#L40) |



##### radius

> 圆形半径

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/collider/CCCircleCollider.js:56](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/collider/CCCircleCollider.js#L56) |



##### density

> 密度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:53](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L53) |



##### sensor

> 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:71](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L71) |



##### friction

> 摩擦系数，取值一般在 [0, 1] 之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:89](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L89) |



##### restitution

> 弹性系数，取值一般在 [0, 1]之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:107](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L107) |



##### body

> 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:125](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L125) |






<!-- Method Block -->
#### 方法


##### apply

应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:252](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L252) |



##### getAABB

获取碰撞体的世界坐标系下的包围盒

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/collider/CCPhysicsCollider.js:264](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L264) |




