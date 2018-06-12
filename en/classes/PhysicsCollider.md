## `PhysicsCollider` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`density`](#density) `Number` 
  - [`sensor`](#sensor) `Boolean` 
  - [`friction`](#friction) `Number` 
  - [`restitution`](#restitution) `Number` 
  - [`body`](#body) `RigidBody` 



##### Methods

  - [`apply`](#apply) 
  - [`getAABB`](#getaabb) 



### Details


#### Properties


##### density

> The density.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:53](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L53) |



##### sensor

> A sensor collider collects contact information but never generates a collision response

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:71](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L71) |



##### friction

> The friction coefficient, usually in the range [0,1].

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:89](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L89) |



##### restitution

> The restitution (elasticity) usually in the range [0,1].

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:107](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L107) |



##### body

> Physics collider will find the rigidbody component on the node and set to this property.

| meta | description |
|------|-------------|
| Type | <a href="../classes/RigidBody.html" class="crosslink">RigidBody</a> |
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:125](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L125) |






<!-- Method Block -->
#### Methods


##### apply

Apply current changes to collider, this will regenerate inner box2d fixtures.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:252](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L252) |



##### getAABB

Get the world aabb of the collider

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/collider/CCPhysicsCollider.js:264](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/collider/CCPhysicsCollider.js#L264) |




