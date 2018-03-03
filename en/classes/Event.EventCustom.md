## `Event.EventCustom` Class

Extends [`Event`](Event.md)


Module: [cc](../modules/cc.md)


The Custom event


### Index

##### Properties

  - [`detail`](#detail) `Object` A reference to the detailed data of the event
  - [`keyCode`](#keycode) `Number` The keyCode read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key. </br>
This is usually the decimal ASCII (RFC 20) or Windows 1252 code corresponding to the key.</br>
If the key can't be identified, this value is 0.</br>
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
  - [`setUserData`](#setuserdata) Sets user data
  - [`getUserData`](#getuserdata) Gets user data
  - [`getEventName`](#geteventname) Gets event name
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


##### detail

> A reference to the detailed data of the event

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:290](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L290) |



##### keyCode

> The keyCode read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key. </br>
This is usually the decimal ASCII (RFC 20) or Windows 1252 code corresponding to the key.</br>
If the key can't be identified, this value is 0.</br>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:332](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L332) |



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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:282](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L282) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### setUserData

Sets user data

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:303](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L303) |

###### Parameters
- `data` Any 


##### getUserData

Gets user data

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L313) |



##### getEventName

Gets event name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L323) |



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




