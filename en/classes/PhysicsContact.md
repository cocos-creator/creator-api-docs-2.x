## `PhysicsContact` Class



Module: [cc](../modules/cc.md)


PhysicsContact will be generated during begin and end collision as a parameter of the collision callback.
Note that contacts will be reused for speed up cpu time, so do not cache anything in the contact.



### Index

##### Properties

  - [`colliderA`](#collidera) `Collider` One of the collider that collided
  - [`colliderB`](#colliderb) `Collider` One of the collider that collided
  - [`disabled`](#disabled) `Boolean` If set disabled to true, the contact will be ignored until contact end.
  - [`disabledOnce`](#disabledonce) `Boolean` Disabled contact for current time step or sub-step.



##### Methods

  - [`getWorldManifold`](#getworldmanifold) Get the world manifold.
  - [`getManifold`](#getmanifold) Get the manifold.
  - [`getImpulse`](#getimpulse) Get the impulses.
  - [`isTouching`](#istouching) Is this contact touching?
  - [`setTangentSpeed`](#settangentspeed) Set the desired tangent speed for a conveyor belt behavior.
  - [`getTangentSpeed`](#gettangentspeed) Get the desired tangent speed.
  - [`setFriction`](#setfriction) Override the default friction mixture.
  - [`getFriction`](#getfriction) Get the friction.
  - [`resetFriction`](#resetfriction) Reset the friction mixture to the default value.
  - [`setRestitution`](#setrestitution) Override the default restitution mixture.
  - [`getRestitution`](#getrestitution) Get the restitution.
  - [`resetRestitution`](#resetrestitution) Reset the restitution mixture to the default value.



### Details


#### Properties


##### colliderA

> One of the collider that collided

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:423](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L423) |



##### colliderB

> One of the collider that collided

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:430](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L430) |



##### disabled

> If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:437](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L437) |



##### disabledOnce

> Disabled contact for current time step or sub-step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:446](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L446) |






<!-- Method Block -->
#### Methods


##### getWorldManifold

Get the world manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/WorldManifold.html" class="crosslink">WorldManifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:236](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L236) |



##### getManifold

Get the manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Manifold.html" class="crosslink">Manifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:276](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L276) |



##### getImpulse

Get the impulses.
Note: PhysicsImpulse can only used in onPostSolve callback.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsImpulse.html" class="crosslink">PhysicsImpulse</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:318](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L318) |



##### isTouching

Is this contact touching?

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:457](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L457) |



##### setTangentSpeed

Set the desired tangent speed for a conveyor belt behavior.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:469](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L469) |

###### Parameters
- `tangentSpeed` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTangentSpeed

Get the desired tangent speed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:480](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L480) |



##### setFriction

Override the default friction mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:493](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L493) |

###### Parameters
- `friction` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFriction

Get the friction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:504](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L504) |



##### resetFriction

Reset the friction mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:515](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L515) |



##### setRestitution

Override the default restitution mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:525](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L525) |

###### Parameters
- `restitution` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getRestitution

Get the restitution.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:536](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L536) |



##### resetRestitution

Reset the restitution mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:547](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L547) |




