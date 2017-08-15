## `PhysicsCircleCollider` Class

Extends [`PhysicsCollider`](PhysicsCollider.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)






### Index

##### Properties

  - [`offset`](#offset) `Vec2` 位置偏移量
  - [`radius`](#radius) `Number` 圆形半径
  - [`density`](#density) `Number` 密度
  - [`sensor`](#sensor) `Boolean` 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。
  - [`friction`](#friction) `Number` 摩擦系数，取值一般在 [0, 1] 之间
  - [`restitution`](#restitution) `Number` 弹性系数，取值一般在 [0, 1]之间
  - [`body`](#body) `RigidBody` 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。



##### Methods

  - [`apply`](#apply) 应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。
  - [`getAABB`](#getaabb) 获取碰撞体的世界坐标系下的包围盒



### Details


#### Properties


##### offset

> 位置偏移量

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/collider/CCCircleCollider.js:39](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/collider/CCCircleCollider.js#L39) |



##### radius

> 圆形半径

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/collider/CCCircleCollider.js:55](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/collider/CCCircleCollider.js#L55) |



##### density

> 密度

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:52](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L52) |



##### sensor

> 一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:70](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L70) |



##### friction

> 摩擦系数，取值一般在 [0, 1] 之间

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:88](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L88) |



##### restitution

> 弹性系数，取值一般在 [0, 1]之间

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:106](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L106) |



##### body

> 碰撞体会在初始化时查找节点上是否存在刚体，如果查找成功则赋值到这个属性上。

| meta | description |
|------|-------------|
| Type | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:124](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L124) |






<!-- Method Block -->
#### Methods


##### apply

应用当前 collider 中的修改，调用此函数会重新生成内部 box2d 的夹具。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:250](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L250) |



##### getAABB

获取碰撞体的世界坐标系下的包围盒

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js:262](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/physics/collider/CCPhysicsCollider.js#L262) |




