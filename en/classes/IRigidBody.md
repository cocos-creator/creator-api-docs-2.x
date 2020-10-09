## `IRigidBody` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Rigid body interface



### Index

##### Properties

  - [`rigidBody`](#rigidbody) `RigidBody3D` 
  - [`mass`](#mass) `number` 
  - [`linearDamping`](#lineardamping) `number` 
  - [`angularDamping`](#angulardamping) `number` 
  - [`isKinematic`](#iskinematic) `boolean` 
  - [`useGravity`](#usegravity) `boolean` 
  - [`fixedRotation`](#fixedrotation) `boolean` 
  - [`linearFactor`](#linearfactor) `IVec3Like` 
  - [`angularFactor`](#angularfactor) `IVec3Like` 
  - [`allowSleep`](#allowsleep) `boolean` 
  - [`isAwake`](#isawake) `boolean` 
  - [`isSleepy`](#issleepy) `boolean` 
  - [`isSleeping`](#issleeping) `boolean` 



##### Methods

  - [`wakeUp`](#wakeup) 
  - [`sleep`](#sleep) 
  - [`getLinearVelocity`](#getlinearvelocity) 
  - [`setLinearVelocity`](#setlinearvelocity) 
  - [`getAngularVelocity`](#getangularvelocity) 
  - [`setAngularVelocity`](#setangularvelocity) 
  - [`applyForce`](#applyforce) 
  - [`applyLocalForce`](#applylocalforce) 
  - [`applyImpulse`](#applyimpulse) 
  - [`applyLocalImpulse`](#applylocalimpulse) 
  - [`applyTorque`](#applytorque) 
  - [`applyLocalTorque`](#applylocaltorque) 



### Details


#### Properties


##### rigidBody

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/RigidBody3D.html" class="crosslink">RigidBody3D</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:37](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L37) |



##### mass

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:42](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L42) |



##### linearDamping

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:46](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L46) |



##### angularDamping

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:50](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L50) |



##### isKinematic

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:54](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L54) |



##### useGravity

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:58](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L58) |



##### fixedRotation

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:62](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L62) |



##### linearFactor

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:66](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L66) |



##### angularFactor

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:70](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L70) |



##### allowSleep

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:74](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L74) |



##### isAwake

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:78](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L78) |



##### isSleepy

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:83](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L83) |



##### isSleeping

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:88](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L88) |






<!-- Method Block -->
#### Methods


##### wakeUp



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:94](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L94) |



##### sleep



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:98](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L98) |



##### getLinearVelocity



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:103](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L103) |

###### Parameters
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### setLinearVelocity



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:108](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L108) |

###### Parameters
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### getAngularVelocity



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:113](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L113) |

###### Parameters
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### setAngularVelocity



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:118](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L118) |

###### Parameters
- `out` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyForce



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:124](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L124) |

###### Parameters
- `force` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `relativePoint` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyLocalForce



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:130](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L130) |

###### Parameters
- `force` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `relativePoint` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyImpulse



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:136](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L136) |

###### Parameters
- `force` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `relativePoint` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyLocalImpulse



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:142](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L142) |

###### Parameters
- `force` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 
- `relativePoint` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyTorque



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:148](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L148) |

###### Parameters
- `torque` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 


##### applyLocalTorque



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/spec/I-rigid-body.ts:153](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/3d/physics/spec/I-rigid-body.ts#L153) |

###### Parameters
- `torque` <a href="../classes/IVec3Like.html" class="crosslink">IVec3Like</a> 



