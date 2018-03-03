## `Event.EventTouch` Class

Extends [`Event`](Event.md)


Module: [cc](../modules/cc.md)


The touch event


### Index

##### Properties

  - [`touch`](#touch) `Touch` The current touch object
  - [`type`](#type) `String` The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
  - [`bubbles`](#bubbles) `Boolean` Indicate whether the event bubbles up through the tree or not.
  - [`target`](#target) `Object` A reference to the target to which the event was originally dispatched.
  - [`currentTarget`](#currenttarget) `Object` A reference to the currently registered target for the event.
  - [`eventPhase`](#eventphase) `Number` Indicates which phase of the event flow is currently being evaluated.
Returns an integer value represented by 4 constants:
 - Event.NONE = 0
 - Event.CAPTURING_PHASE = 1
 - Event.AT_TARGET = 2
 - Event.BUBBLING_PHASE = 3
The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.



##### Methods

  - [`constructor`](#constructor) 
  - [`getEventCode`](#geteventcode) Returns event code.
  - [`getTouches`](#gettouches) Returns touches of event.
  - [`setLocation`](#setlocation) Sets touch location.
  - [`getLocation`](#getlocation) Returns touch location.
  - [`getLocationInView`](#getlocationinview) Returns the current touch location in screen coordinates.
  - [`getPreviousLocation`](#getpreviouslocation) Returns the previous touch location.
  - [`getStartLocation`](#getstartlocation) Returns the start touch location.
  - [`getID`](#getid) Returns the id of cc.Touch.
  - [`getDelta`](#getdelta) Returns the delta distance from the previous location to current location.
  - [`getDeltaX`](#getdeltax) Returns the X axis delta distance from the previous location to current location.
  - [`getDeltaY`](#getdeltay) Returns the Y axis delta distance from the previous location to current location.
  - [`getLocationX`](#getlocationx) Returns location X axis data.
  - [`getLocationY`](#getlocationy) Returns location Y axis data.
  - [`unuse`](#unuse) Reset the event for being stored in the object pool.
  - [`reuse`](#reuse) Reuse the event for being used again by the object pool.
  - [`stopPropagation`](#stoppropagation) Stops propagation for current event.
  - [`stopPropagationImmediate`](#stoppropagationimmediate) Stops propagation for current event immediately,
the event won't even be dispatched to the listeners attached in the current target.
  - [`isStopped`](#isstopped) Checks whether the event has been stopped.
  - [`getCurrentTarget`](#getcurrenttarget) <p>
    Gets current target of the event                                                            <br/>
    note: It only be available when the event listener is associated with node.                <br/>
         It returns 0 when the listener is associated with fixed priority.
</p>
  - [`getType`](#gettype) Gets the event type.



### Details


#### Properties


##### touch

> The current touch object

| meta | description |
|------|-------------|
| Type | <a href="../classes/Touch.html" class="crosslink">Touch</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L336) |



##### type

> The name of the event (case-sensitive), e.g. "click", "fire", or "submit".

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L43) |



##### bubbles

> Indicate whether the event bubbles up through the tree or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:51](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L51) |



##### target

> A reference to the target to which the event was originally dispatched.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:59](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L59) |



##### currentTarget

> A reference to the currently registered target for the event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L67) |



##### eventPhase

> Indicates which phase of the event flow is currently being evaluated.
Returns an integer value represented by 4 constants:
 - Event.NONE = 0
 - Event.CAPTURING_PHASE = 1
 - Event.AT_TARGET = 2
 - Event.BUBBLING_PHASE = 3
The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L75) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:327](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L327) |

###### Parameters
- `touchArr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of the touches
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### getEventCode

Returns event code.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L351) |



##### getTouches

Returns touches of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:361](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L361) |



##### setLocation

Sets touch location.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L379) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getLocation

Returns touch location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:390](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L390) |



##### getLocationInView

Returns the current touch location in screen coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:400](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L400) |



##### getPreviousLocation

Returns the previous touch location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L410) |



##### getStartLocation

Returns the start touch location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:420](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L420) |



##### getID

Returns the id of cc.Touch.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:430](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L430) |



##### getDelta

Returns the delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:440](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L440) |



##### getDeltaX

Returns the X axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:450](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L450) |



##### getDeltaY

Returns the Y axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:460](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L460) |



##### getLocationX

Returns location X axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:470](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L470) |



##### getLocationY

Returns location Y axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:480](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L480) |



##### unuse

Reset the event for being stored in the object pool.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L110) |



##### reuse

Reuse the event for being used again by the object pool.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L125) |



##### stopPropagation

Stops propagation for current event.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L136) |



##### stopPropagationImmediate

Stops propagation for current event immediately,
the event won't even be dispatched to the listeners attached in the current target.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:145](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L145) |



##### isStopped

Checks whether the event has been stopped.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L155) |



##### getCurrentTarget

<p>
    Gets current target of the event                                                            <br/>
    note: It only be available when the event listener is associated with node.                <br/>
         It returns 0 when the listener is associated with fixed priority.
</p>

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:165](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L165) |



##### getType

Gets the event type.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:180](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L180) |




