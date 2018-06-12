## `Event` Class


Defined in: [https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js:32](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L32)

Module: [cc](../modules/cc.md)


Base class of all kinds of events.


### Index

##### Properties

  - [`type`](#type) `String` 
  - [`bubbles`](#bubbles) `Boolean` 
  - [`target`](#target) `Object` 
  - [`currentTarget`](#currenttarget) `Object` 
  - [`eventPhase`](#eventphase) `Number` 
  - [`NO_TYPE`](#notype) `String` 
  - [`TOUCH`](#touch) `String` 
  - [`MOUSE`](#mouse) `String` 
  - [`KEYBOARD`](#keyboard) `String` 
  - [`ACCELERATION`](#acceleration) `String` 
  - [`NONE`](#none) `Number` 
  - [`CAPTURING_PHASE`](#capturingphase) `Number` 
  - [`AT_TARGET`](#attarget) `Number` 
  - [`BUBBLING_PHASE`](#bubblingphase) `Number` 



##### Methods

  - [`constructor`](#constructor) 
  - [`unuse`](#unuse) 
  - [`reuse`](#reuse) 
  - [`stopPropagation`](#stoppropagation) 
  - [`stopPropagationImmediate`](#stoppropagationimmediate) 
  - [`isStopped`](#isstopped) 
  - [`getCurrentTarget`](#getcurrenttarget) 
  - [`getType`](#gettype) 



### Details


#### Properties


##### type

> The name of the event (case-sensitive), e.g. "click", "fire", or "submit".

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:44](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L44) |



##### bubbles

> Indicate whether the event bubbles up through the tree or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/event/event.js:52](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L52) |



##### target

> A reference to the target to which the event was originally dispatched.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/event/event.js:60](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L60) |



##### currentTarget

> A reference to the currently registered target for the event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/event/event.js:68](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L68) |



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
| Defined in | [cocos2d/core/event/event.js:76](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L76) |



##### NO_TYPE

> Code for event without type.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:193](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L193) |



##### TOUCH

> The type code of Touch event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:202](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L202) |



##### MOUSE

> The type code of Mouse event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:210](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L210) |



##### KEYBOARD

> The type code of Keyboard event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:218](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L218) |



##### ACCELERATION

> The type code of Acceleration event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/event/event.js:226](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L226) |



##### NONE

> Events not currently dispatched are in this phase

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event/event.js:236](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L236) |



##### CAPTURING_PHASE

> The capturing phase comprises the journey from the root to the last node before the event target's node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event/event.js:244](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L244) |



##### AT_TARGET

> The target phase comprises only the event target node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event/event.js:254](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L254) |



##### BUBBLING_PHASE

> The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event/event.js:264](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L264) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event.js:38](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L38) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### unuse

Reset the event for being stored in the object pool.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/event/event.js:111](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L111) |



##### reuse

Reuse the event for being used again by the object pool.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/event/event.js:126](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L126) |



##### stopPropagation

Stops propagation for current event.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event.js:137](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L137) |



##### stopPropagationImmediate

Stops propagation for current event immediately,
the event won't even be dispatched to the listeners attached in the current target.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event.js:146](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L146) |



##### isStopped

Checks whether the event has been stopped.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event.js:156](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L156) |



##### getCurrentTarget

<p>
    Gets current target of the event                                                            <br/>
    note: It only be available when the event listener is associated with node.                <br/>
         It returns 0 when the listener is associated with fixed priority.
</p>

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/core/event/event.js:166](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L166) |



##### getType

Gets the event type.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/event/event.js:181](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event.js#L181) |




