## `PhysicsBoxCollider` 类型

继承于 [`PhysicsCollider`](PhysicsCollider.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`offset`](#offset) `Vec2` 位置偏移量
  - [`size`](#size) `Size` 包围盒大小
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


##### offset

> 位置偏移量

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js:40](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js#L40) |



##### size

> 包围盒大小

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js#L57) |



##### density

> 密度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:52](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L52) |



##### sensor

> 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:70](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L70) |



##### friction

> 摩擦系数，取值一般在 [0, 1] 之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:88](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L88) |



##### restitution

> 弹性系数，取值一般在 [0, 1]之间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:106](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L106) |



##### body

> 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L124) |






<!-- Method Block -->
#### 方法


##### apply

应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:256](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L256) |



##### getAABB

获取碰撞体的世界坐标系下的包围盒

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js:268](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/collider/CCPhysicsCollider.js#L268) |




