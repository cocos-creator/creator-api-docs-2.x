## `PhysicsManager` Class



Module: [cc](../modules/cc.md)


Physics manager uses box2d as the inner physics system, and hide most box2d implement details(creating rigidbody, synchronize rigidbody info to node).
You can visit some common box2d function through physics manager(hit testing, raycast, debug info).
Physics manager distributes the collision information to each collision callback when collision is produced.
Note: You need first enable the collision listener in the rigidbody.



### Index

##### Properties

  - [`PTM_RATIO`](#ptmratio) `Number` The ratio transform between physics unit and pixel unit, generally is 32.
  - [`VELOCITY_ITERATIONS`](#velocityiterations) `Number` The velocity iterations for the velocity constraint solver.
  - [`POSITION_ITERATIONS`](#positioniterations) `Number` The position Iterations for the position constraint solver.
  - [`FIXED_TIME_STEP`](#fixedtimestep) `Number` Specify the fixed time step.
  - [`MAX_ACCUMULATOR`](#maxaccumulator) `Number` Specify the max accumulator time.
  - [`enabledAccumulator`](#enabledaccumulator) `Boolean` If enabled accumulator, then will call step function with the fixed time step FIXED_TIME_STEP.
  - [`enabled`](#enabled) `Boolean` Enabled the physics manager?
  - [`debugDrawFlags`](#debugdrawflags) `Number` Debug draw flags.
  - [`gravity`](#gravity) `Vec2` The physics world gravity.



##### Methods

  - [`testPoint`](#testpoint) Test which collider contains the given world point
  - [`testAABB`](#testaabb) Test which colliders intersect the given world rect
  - [`rayCast`](#raycast) Raycast the world for all colliders in the path of the ray.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.
  - [`clear`](#clear) Destroy all callbackInfos.



### Details


#### Properties


##### PTM_RATIO

> The ratio transform between physics unit and pixel unit, generally is 32.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:70](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L70) |



##### VELOCITY_ITERATIONS

> The velocity iterations for the velocity constraint solver.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:80](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L80) |



##### POSITION_ITERATIONS

> The position Iterations for the position constraint solver.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:91](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L91) |



##### FIXED_TIME_STEP

> Specify the fixed time step.
Need enabledAccumulator to make it work.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:102](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L102) |



##### MAX_ACCUMULATOR

> Specify the max accumulator time.
Need enabledAccumulator to make it work.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:114](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L114) |



##### enabledAccumulator

> If enabled accumulator, then will call step function with the fixed time step FIXED_TIME_STEP.
And if the update dt is bigger than the time step, then will call step function several times.
If disabled accumulator, then will call step function with a time step calculated with the frame rate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:145](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L145) |



##### enabled

> Enabled the physics manager?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:535](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L535) |



##### debugDrawFlags

> Debug draw flags.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:563](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L563) |

##### Examples

```js
// enable all debug draw info
var Bits = cc.PhysicsManager.DrawBits;
cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
Bits.e_pairBit |
Bits.e_centerOfMassBit |
Bits.e_jointBit |
Bits.e_shapeBit;

// disable debug draw info
cc.director.getPhysicsManager().debugDrawFlags = 0;
```


##### gravity

> The physics world gravity.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:610](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L610) |






<!-- Method Block -->
#### Methods


##### testPoint

Test which collider contains the given world point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:222](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L222) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world point


##### testAABB

Test which colliders intersect the given world rect

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsCollider.html" class="crosslink">[PhysicsCollider]</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:253](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L253) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the world rect


##### rayCast

Raycast the world for all colliders in the path of the ray.
The raycast ignores colliders that contain the starting point.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsRayCastResult.html" class="crosslink">[PhysicsRayCastResult]</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:280](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/physics/CCPhysicsManager.js#L280) |

###### Parameters
- `p1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> start point of the raycast
- `p2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> end point of the raycast
- `type` <a href="../enums/RayCastType.html" class="crosslink">RayCastType</a> optional, default is RayCastType.Closest


##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L69) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L77) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L119) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

```js
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');
```

##### targetOff

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L163) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L182) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function () {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L208) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### clear

Destroy all callbackInfos.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:221](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/event/event-target.js#L221) |




