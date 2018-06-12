## `Event.EventMouse` Class

Extends [`Event`](Event.md)


Module: [cc](../modules/cc.md)


The mouse event


### Index

##### Properties

  - [`NONE`](#none) `Number` 
  - [`DOWN`](#down) `Number` 
  - [`UP`](#up) `Number` 
  - [`MOVE`](#move) `Number` 
  - [`SCROLL`](#scroll) `Number` 
  - [`BUTTON_LEFT`](#buttonleft) `Number` 
  - [`BUTTON_RIGHT`](#buttonright) `Number` 
  - [`BUTTON_MIDDLE`](#buttonmiddle) `Number` 
  - [`BUTTON_4`](#button4) `Number` 
  - [`BUTTON_5`](#button5) `Number` 
  - [`BUTTON_6`](#button6) `Number` 
  - [`BUTTON_7`](#button7) `Number` 
  - [`BUTTON_8`](#button8) `Number` 
  - [`type`](#type) `String` 
  - [`bubbles`](#bubbles) `Boolean` 
  - [`target`](#target) `Object` 
  - [`currentTarget`](#currenttarget) `Object` 
  - [`eventPhase`](#eventphase) `Number` 



##### Methods

  - [`setScrollData`](#setscrolldata) 
  - [`getScrollX`](#getscrollx) 
  - [`getScrollY`](#getscrolly) 
  - [`setLocation`](#setlocation) 
  - [`getLocation`](#getlocation) 
  - [`getLocationInView`](#getlocationinview) 
  - [`getPreviousLocation`](#getpreviouslocation) 
  - [`getDelta`](#getdelta) 
  - [`getDeltaX`](#getdeltax) 
  - [`getDeltaY`](#getdeltay) 
  - [`setButton`](#setbutton) 
  - [`getButton`](#getbutton) 
  - [`getLocationX`](#getlocationx) 
  - [`getLocationY`](#getlocationy) 
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


##### NONE

> The none event code of mouse event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:208](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L208) |



##### DOWN

> The event type code of mouse down event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:216](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L216) |



##### UP

> The event type code of mouse up event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:224](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L224) |



##### MOVE

> The event type code of mouse move event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:232](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L232) |



##### SCROLL

> The event type code of mouse scroll event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:240](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L240) |



##### BUTTON_LEFT

> The tag of Mouse left button.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:249](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L249) |



##### BUTTON_RIGHT

> The tag of Mouse right button  (The right button number is 2 on browser).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:258](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L258) |



##### BUTTON_MIDDLE

> The tag of Mouse middle button  (The right button number is 1 on browser).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:267](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L267) |



##### BUTTON_4

> The tag of Mouse button 4.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:276](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L276) |



##### BUTTON_5

> The tag of Mouse button 5.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:285](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L285) |



##### BUTTON_6

> The tag of Mouse button 6.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:294](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L294) |



##### BUTTON_7

> The tag of Mouse button 7.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:303](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L303) |



##### BUTTON_8

> The tag of Mouse button 8.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEvent.js:312](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L312) |



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






<!-- Method Block -->
#### Methods


##### setScrollData

Sets scroll data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event-manager/CCEvent.js:58](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L58) |

###### Parameters
- `scrollX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `scrollY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getScrollX

Returns the x axis scroll value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:70](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L70) |



##### getScrollY

Returns the y axis scroll value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:80](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L80) |



##### setLocation

Sets cursor location.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event-manager/CCEvent.js:90](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L90) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getLocation

Returns cursor location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:102](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L102) |



##### getLocationInView

Returns the current cursor location in screen coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:112](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L112) |



##### getPreviousLocation

Returns the previous touch location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:127](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L127) |



##### getDelta

Returns the delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:137](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L137) |



##### getDeltaX

Returns the X axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:147](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L147) |



##### getDeltaY

Returns the Y axis delta distance from the previous location to current location.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:157](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L157) |



##### setButton

Sets mouse button.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event-manager/CCEvent.js:167](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L167) |

###### Parameters
- `button` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getButton

Returns mouse button.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:177](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L177) |



##### getLocationX

Returns location X axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:187](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L187) |



##### getLocationY

Returns location Y axis data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/event-manager/CCEvent.js:197](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event-manager/CCEvent.js#L197) |



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




