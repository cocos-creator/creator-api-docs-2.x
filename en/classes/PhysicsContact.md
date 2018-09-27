## `PhysicsContact` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


PhysicsContact will be generated during begin and end collision as a parameter of the collision callback.
Note that contacts will be reused for speed up cpu time, so do not cache anything in the contact.


### Index

##### Properties

  - [`colliderA`](#collidera) `Collider` 
  - [`colliderB`](#colliderb) `Collider` 
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

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:478](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L478) |



##### colliderB

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:481](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L481) |



##### disabled

> If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:484](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L484) |



##### disabledOnce

> Disabled contact for current time step or sub-step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:493](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L493) |






<!-- Method Block -->
#### Methods


##### getWorldManifold

Get the world manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/WorldManifold.html" class="crosslink">WorldManifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:238](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L238) |



##### getManifold

Get the manifold.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Manifold.html" class="crosslink">Manifold</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:298](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L298) |



##### getImpulse

Get the impulses.
Note: PhysicsImpulse can only used in onPostSolve callback.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsImpulse.html" class="crosslink">PhysicsImpulse</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:362](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L362) |



##### isTouching

Is this contact touching?

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:504](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L504) |



##### setTangentSpeed

Set the desired tangent speed for a conveyor belt behavior.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:516](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L516) |

###### Parameters
- `tangentSpeed` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTangentSpeed

Get the desired tangent speed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:527](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L527) |



##### setFriction

Override the default friction mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:540](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L540) |

###### Parameters
- `friction` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFriction

Get the friction.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:551](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L551) |



##### resetFriction

Reset the friction mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:562](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L562) |



##### setRestitution

Override the default restitution mixture. You can call this in onPreSolve callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:572](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L572) |

###### Parameters
- `restitution` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getRestitution

Get the restitution.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:583](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L583) |



##### resetRestitution

Reset the restitution mixture to the default value.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:594](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/physics/CCPhysicsContact.js#L594) |




