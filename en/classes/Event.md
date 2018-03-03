## `Event` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:31](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L31)

Module: [cc](../modules/cc.md)


Base class of all kinds of events.


### Index

##### Properties

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
  - [`NO_TYPE`](#notype) `String` Code for event without type.
  - [`TOUCH`](#touch) `String` The type code of Touch event.
  - [`MOUSE`](#mouse) `String` The type code of Mouse event.
  - [`KEYBOARD`](#keyboard) `String` The type code of Keyboard event.
  - [`ACCELERATION`](#acceleration) `String` The type code of Acceleration event.
  - [`NONE`](#none) `Number` Events not currently dispatched are in this phase
  - [`CAPTURING_PHASE`](#capturingphase) `Number` The capturing phase comprises the journey from the root to the last node before the event target's node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
  - [`AT_TARGET`](#attarget) `Number` The target phase comprises only the event target node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
  - [`BUBBLING_PHASE`](#bubblingphase) `Number` The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow



##### Methods

  - [`constructor`](#constructor) 
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



##### NO_TYPE

> Code for event without type.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:192](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L192) |



##### TOUCH

> The type code of Touch event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L201) |



##### MOUSE

> The type code of Mouse event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:209](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L209) |



##### KEYBOARD

> The type code of Keyboard event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:217](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L217) |



##### ACCELERATION

> The type code of Acceleration event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L225) |



##### NONE

> Events not currently dispatched are in this phase

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:235](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L235) |



##### CAPTURING_PHASE

> The capturing phase comprises the journey from the root to the last node before the event target's node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L243) |



##### AT_TARGET

> The target phase comprises only the event target node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:253](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L253) |



##### BUBBLING_PHASE

> The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:263](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L263) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:37](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L37) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


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




