## `PhysicsContact` Class



Module: [cc](../modules/cc.md)


PhysicsContact will be generated during begin and end collision as a parameter of the collision callback.
Note that contacts will be reused for speed up cpu time, so do not cache anything in the contact.


### Index

##### Properties

  - [`colliderA`](#collidera) `Collider` 
  - [`colliderB`](#colliderb) `Collider` 
  - [`disabled`](#disabled) `Boolean` If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.
  - [`disabledOnce`](#disabledonce) `Boolean` Disabled contact for current time step or sub-step.



##### Methods

  - [`getWorldManifold`](#getworldmanifold) Get the world manifold.
  - [`getManifold`](#getmanifold) Get the manifold.
  - [`getImpulse`](#getimpulse) Get the impulses.
Note: PhysicsImpulse can only used in onPostSolve callback.
  - [`isTouching`](#istouching) Is this contact touching?
  - [`setTangentSpeed`](#settangentspeed) Set the desired tangent speed for a conveyor belt behavior.
  - [`getTangentSpeed`](#gettangentspeed) Get the desired tangent speed.
  - [`setFriction`](#setfriction) Override the default friction mixture. You can call this in onPreSolve callback.
  - [`getFriction`](#getfriction) Get the friction.
  - [`resetFriction`](#resetfriction) Reset the friction mixture to the default value.
  - [`setRestitution`](#setrestitution) Override the default restitution mixture. You can call this in onPreSolve callback.
  - [`getRestitution`](#getrestitution) Get the restitution.
  - [`resetRestitution`](#resetrestitution) Reset the restitution mixture to the default value.



### Details


#### Properties


##### colliderA

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:453](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L453) |



##### colliderB

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:456](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L456) |



##### disabled

> If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:459](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L459) |



##### disabledOnce

> Disabled contact for current time step or sub-step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:468](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L468) |






<!-- Method Block -->
#### Methods


##### getWorldManifold

Get the world manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/WorldManifold.html" class="crosslink">WorldManifold</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:213](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L213) |



##### getManifold

Get the manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Manifold.html" class="crosslink">Manifold</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:273](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L273) |



##### getImpulse

Get the impulses.
Note: PhysicsImpulse can only used in onPostSolve callback.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsImpulse.html" class="crosslink">PhysicsImpulse</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:337](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L337) |



##### isTouching

Is this contact touching?

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:479](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L479) |



##### setTangentSpeed

Set the desired tangent speed for a conveyor belt behavior.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:491](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L491) |

###### Parameters
- `tangentSpeed` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTangentSpeed

Get the desired tangent speed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:502](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L502) |



##### setFriction

Override the default friction mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:515](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L515) |

###### Parameters
- `friction` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFriction

Get the friction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:526](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L526) |



##### resetFriction

Reset the friction mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:537](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L537) |



##### setRestitution

Override the default restitution mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:547](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L547) |

###### Parameters
- `restitution` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getRestitution

Get the restitution.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:558](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L558) |



##### resetRestitution

Reset the restitution mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:569](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L569) |




