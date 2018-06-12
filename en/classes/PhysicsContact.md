## `PhysicsContact` Class



Module: [cc](../modules/cc.md)


PhysicsContact will be generated during begin and end collision as a parameter of the collision callback.
Note that contacts will be reused for speed up cpu time, so do not cache anything in the contact.


### Index

##### Properties

  - [`colliderA`](#collidera) `Collider` 
  - [`colliderB`](#colliderb) `Collider` 
  - [`disabled`](#disabled) `Boolean` 
  - [`disabledOnce`](#disabledonce) `Boolean` 



##### Methods

  - [`getWorldManifold`](#getworldmanifold) 
  - [`getManifold`](#getmanifold) 
  - [`getImpulse`](#getimpulse) 
  - [`isTouching`](#istouching) 
  - [`setTangentSpeed`](#settangentspeed) 
  - [`getTangentSpeed`](#gettangentspeed) 
  - [`setFriction`](#setfriction) 
  - [`getFriction`](#getfriction) 
  - [`resetFriction`](#resetfriction) 
  - [`setRestitution`](#setrestitution) 
  - [`getRestitution`](#getrestitution) 
  - [`resetRestitution`](#resetrestitution) 



### Details


#### Properties


##### colliderA

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:419](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L419) |



##### colliderB

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:422](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L422) |



##### disabled

> If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:425](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L425) |



##### disabledOnce

> Disabled contact for current time step or sub-step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:434](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L434) |






<!-- Method Block -->
#### Methods


##### getWorldManifold

Get the world manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/WorldManifold.html" class="crosslink">WorldManifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:232](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L232) |



##### getManifold

Get the manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Manifold.html" class="crosslink">Manifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:272](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L272) |



##### getImpulse

Get the impulses.
Note: PhysicsImpulse can only used in onPostSolve callback.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsImpulse.html" class="crosslink">PhysicsImpulse</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:314](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L314) |



##### isTouching

Is this contact touching?

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:445](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L445) |



##### setTangentSpeed

Set the desired tangent speed for a conveyor belt behavior.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:457](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L457) |

###### Parameters
- `tangentSpeed` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTangentSpeed

Get the desired tangent speed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:468](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L468) |



##### setFriction

Override the default friction mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:481](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L481) |

###### Parameters
- `friction` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFriction

Get the friction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:492](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L492) |



##### resetFriction

Reset the friction mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:503](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L503) |



##### setRestitution

Override the default restitution mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:513](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L513) |

###### Parameters
- `restitution` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getRestitution

Get the restitution.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:524](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L524) |



##### resetRestitution

Reset the restitution mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:535](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L535) |




