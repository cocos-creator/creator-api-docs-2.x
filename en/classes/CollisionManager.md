## `CollisionManager` Class



Module: [cc](../modules/cc.md)


A simple collision manager class.
It will calculate whether the collider collides other colliders, if collides then call the callbacks.


### Index

##### Properties

  - [`enabled`](#enabled) `Boolean` 
  - [`enabledDrawBoundingBox`](#enableddrawboundingbox) `Boolean` 
  - [`enabledDebugDraw`](#enableddebugdraw) `Boolean` 



##### Methods

  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.



### Details


#### Properties


##### enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/collider/CCCollisionManager.js:120](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/collider/CCCollisionManager.js#L120) |



##### enabledDrawBoundingBox

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/collider/CCCollisionManager.js:128](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/collider/CCCollisionManager.js#L128) |



##### enabledDebugDraw

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/collider/CCCollisionManager.js:462](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/collider/CCCollisionManager.js#L462) |






<!-- Method Block -->
#### Methods


##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:68](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L68) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:76](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L76) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.on('fire', function (event) {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:113](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L113) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

```js
// register fire eventListener
var callback = eventTarget.on('fire', function (event) {
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
| Defined in | [cocos2d/core/event/event-target.js:147](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L147) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:160](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L160) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function (event) {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:193](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L193) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:213](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/event/event-target.js#L213) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  



