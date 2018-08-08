## `PhysicsManager` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Physics manager uses box2d as the inner physics system, and hide most box2d implement details(creating rigidbody, synchronize rigidbody info to node).
You can visit some common box2d function through physics manager(hit testing, raycast, debug info).
Physics manager distributes the collision information to each collision callback when collision is produced.
Note: You need first enable the collision listener in the rigidbody.


### Index

##### Properties

  - [`DrawBits`](#drawbits) `DrawBits` The draw bits for drawing physics debug information.
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
  - [`attachDebugDrawToCamera`](#attachdebugdrawtocamera) Attach physics debug draw to camera
  - [`detachDebugDrawFromCamera`](#detachdebugdrawfromcamera) Detach physics debug draw to camera
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.



### Details


#### Properties


##### DrawBits

> The draw bits for drawing physics debug information.

| meta | description |
|------|-------------|
| Type | <a href="../enums/DrawBits.html" class="crosslink">DrawBits</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:60](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L60) |

##### Examples

```js
cc.director.getPhysicsManager().debugDrawFlags =
// cc.PhysicsManager.DrawBits.e_aabbBit |
// cc.PhysicsManager.DrawBits.e_pairBit |
// cc.PhysicsManager.DrawBits.e_centerOfMassBit |
cc.PhysicsManager.DrawBits.e_jointBit |
cc.PhysicsManager.DrawBits.e_shapeBit;
```


##### PTM_RATIO

> The ratio transform between physics unit and pixel unit, generally is 32.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:78](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L78) |



##### VELOCITY_ITERATIONS

> The velocity iterations for the velocity constraint solver.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:88](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L88) |



##### POSITION_ITERATIONS

> The position Iterations for the position constraint solver.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:99](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L99) |



##### FIXED_TIME_STEP

> Specify the fixed time step.
Need enabledAccumulator to make it work.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:110](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L110) |



##### MAX_ACCUMULATOR

> Specify the max accumulator time.
Need enabledAccumulator to make it work.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:122](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L122) |



##### enabledAccumulator

> If enabled accumulator, then will call step function with the fixed time step FIXED_TIME_STEP.
And if the update dt is bigger than the time step, then will call step function several times.
If disabled accumulator, then will call step function with a time step calculated with the frame rate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:152](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L152) |



##### enabled

> Enabled the physics manager?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:530](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L530) |



##### debugDrawFlags

> Debug draw flags.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:557](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L557) |

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
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:605](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L605) |






<!-- Method Block -->
#### Methods


##### testPoint

Test which collider contains the given world point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:227](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L227) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world point


##### testAABB

Test which colliders intersect the given world rect

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsCollider.html" class="crosslink">[PhysicsCollider]</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:258](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L258) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the world rect


##### rayCast

Raycast the world for all colliders in the path of the ray.
The raycast ignores colliders that contain the starting point.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsRayCastResult.html" class="crosslink">[PhysicsRayCastResult]</a> 
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:285](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L285) |

###### Parameters
- `p1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> start point of the raycast
- `p2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> end point of the raycast
- `type` <a href="../enums/RayCastType.html" class="crosslink">RayCastType</a> optional, default is RayCastType.Closest


##### attachDebugDrawToCamera

Attach physics debug draw to camera

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:370](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L370) |

###### Parameters
- `camera` <a href="../classes/Camera.html" class="crosslink">Camera</a> 


##### detachDebugDrawFromCamera

Detach physics debug draw to camera

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:382](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/physics/CCPhysicsManager.js#L382) |

###### Parameters
- `camera` <a href="../classes/Camera.html" class="crosslink">Camera</a> 


##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:218](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L218) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:275](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L275) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Examples

```js
// register touchEnd eventListener
var touchEnd = node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
// remove touch end event listener
node.off(cc.Node.EventType.TOUCH_END, touchEnd, node);
// remove all touch end event listeners
node.off(cc.Node.EventType.TOUCH_END);
```

##### targetOff

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:330](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L330) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:352](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L352) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:397](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L397) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:411](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L411) |

###### Parameters
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs



