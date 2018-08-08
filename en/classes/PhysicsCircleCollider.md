## `PhysicsCircleCollider` Class

Extends [`PhysicsCollider`](PhysicsCollider.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`offset`](#offset) `Vec2` Position offset
  - [`radius`](#radius) `Number` Circle radius
  - [`density`](#density) `Number` The density.
  - [`sensor`](#sensor) `Boolean` A sensor collider collects contact information but never generates a collision response
  - [`friction`](#friction) `Number` The friction coefficient, usually in the range [0,1].
  - [`restitution`](#restitution) `Number` The restitution (elasticity) usually in the range [0,1].
  - [`body`](#body) `RigidBody` Physics collider will find the rigidbody component on the node and set to this property.



##### Methods

  - [`apply`](#apply) Apply current changes to collider, this will regenerate inner box2d fixtures.
  - [`getAABB`](#getaabb) Get the world aabb of the collider



### Details


#### Properties


##### offset

> Position offset

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/collider/CCCircleCollider.js:40](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/collider/CCCircleCollider.js#L40) |



##### radius

> Circle radius

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/collider/CCCircleCollider.js:56](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/collider/CCCircleCollider.js#L56) |



##### density

> The density.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:53](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L53) |



##### sensor

> A sensor collider collects contact information but never generates a collision response

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:71](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L71) |



##### friction

> The friction coefficient, usually in the range [0,1].

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:89](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L89) |



##### restitution

> The restitution (elasticity) usually in the range [0,1].

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:107](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L107) |



##### body

> Physics collider will find the rigidbody component on the node and set to this property.

| meta | description |
|------|-------------|
| Type | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:125](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L125) |






<!-- Method Block -->
#### Methods


##### apply

Apply current changes to collider, this will regenerate inner box2d fixtures.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:252](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L252) |



##### getAABB

Get the world aabb of the collider

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:264](https://github.com/cocos-creator/engine/blob/44d068bea8120146521ec334827cb5b67a7d9b8f/cocos2d/core/physics/collider/CCPhysicsCollider.js#L264) |




