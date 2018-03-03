## `Event.EventMouse` Class

Extends [`Event`](Event.md)


Module: [cc](../modules/cc.md)


The mouse event


### Index

##### Properties

  - [`NONE`](#none) `Number` The none event code of mouse event.
  - [`DOWN`](#down) `Number` The event type code of mouse down event.
  - [`UP`](#up) `Number` The event type code of mouse up event.
  - [`MOVE`](#move) `Number` The event type code of mouse move event.
  - [`SCROLL`](#scroll) `Number` The event type code of mouse scroll event.
  - [`BUTTON_LEFT`](#buttonleft) `Number` The tag of Mouse left button.
  - [`BUTTON_RIGHT`](#buttonright) `Number` The tag of Mouse right button  (The right button number is 2 on browser).
  - [`BUTTON_MIDDLE`](#buttonmiddle) `Number` The tag of Mouse middle button  (The right button number is 1 on browser).
  - [`BUTTON_4`](#button4) `Number` The tag of Mouse button 4.
  - [`BUTTON_5`](#button5) `Number` The tag of Mouse button 5.
  - [`BUTTON_6`](#button6) `Number` The tag of Mouse button 6.
  - [`BUTTON_7`](#button7) `Number` The tag of Mouse button 7.
  - [`BUTTON_8`](#button8) `Number` The tag of Mouse button 8.
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

  - [`setScrollData`](#setscrolldata) Sets scroll data.
  - [`getScrollX`](#getscrollx) Returns the x axis scroll value.
  - [`getScrollY`](#getscrolly) Returns the y axis scroll value.
  - [`setLocation`](#setlocation) Sets cursor location.
  - [`getLocation`](#getlocation) Returns cursor location.
  - [`getLocationInView`](#getlocationinview) Returns the current cursor location in screen coordinates.
  - [`getPreviousLocation`](#getpreviouslocation) Returns the previous touch location.
  - [`getDelta`](#getdelta) Returns the delta distance from the previous location to current location.
  - [`getDeltaX`](#getdeltax) Returns the X axis delta distance from the previous location to current location.
  - [`getDeltaY`](#getdeltay) Returns the Y axis delta distance from the previous location to current location.
  - [`setButton`](#setbutton) Sets mouse button.
  - [`getButton`](#getbutton) Returns mouse button.
  - [`getLocationX`](#getlocationx) Returns location X axis data.
  - [`getLocationY`](#getlocationy) Returns location Y axis data.
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


##### NONE

> The none event code of mouse event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:207](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L207) |



##### DOWN

> The event type code of mouse down event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L215) |



##### UP

> The event type code of mouse up event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:223](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L223) |



##### MOVE

> The event type code of mouse move event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:231](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L231) |



##### SCROLL

> The event type code of mouse scroll event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L239) |



##### BUTTON_LEFT

> The tag of Mouse left button.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:248](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L248) |



##### BUTTON_RIGHT

> The tag of Mouse right button  (The right button number is 2 on browser).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L257) |



##### BUTTON_MIDDLE

> The tag of Mouse middle button  (The right button number is 1 on browser).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:266](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L266) |



##### BUTTON_4

> The tag of Mouse button 4.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L275) |



##### BUTTON_5

> The tag of Mouse button 5.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:284](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L284) |



##### BUTTON_6

> The tag of Mouse button 6.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:293](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L293) |



##### BUTTON_7

> The tag of Mouse button 7.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L302) |



##### BUTTON_8

> The tag of Mouse button 8.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L311) |



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


##### setScrollData

Sets scroll data.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L57) |

###### Parameters
- `scrollX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `scrollY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getScrollX

Returns the x axis scroll value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:69](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L69) |



##### getScrollY

Returns the y axis scroll value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:79](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L79) |



##### setLocation

Sets cursor location.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:89](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L89) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getLocation

Returns cursor location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L101) |



##### getLocationInView

Returns the current cursor location in screen coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L111) |



##### getPreviousLocation

Returns the previous touch location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:126](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L126) |



##### getDelta

Returns the delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L136) |



##### getDeltaX

Returns the X axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:146](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L146) |



##### getDeltaY

Returns the Y axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:156](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L156) |



##### setButton

Sets mouse button.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L166) |

###### Parameters
- `button` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getButton

Returns mouse button.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:176](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L176) |



##### getLocationX

Returns location X axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L186) |



##### getLocationY

Returns location Y axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:196](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L196) |



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




