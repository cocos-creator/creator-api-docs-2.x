### `Node.EventType` Enum



Module: [cc](../modules/cc.md)


The event type supported by Node


### Index
  - `TOUCH_START`
  - `TOUCH_MOVE`
  - `TOUCH_END`
  - `TOUCH_CANCEL`
  - `MOUSE_DOWN`
  - `MOUSE_MOVE`
  - `MOUSE_ENTER`
  - `MOUSE_LEAVE`
  - `MOUSE_UP`
  - `MOUSE_WHEEL`
  - `POSITION_CHANGED`
  - `ROTATION_CHANGED`
  - `SCALE_CHANGED`
  - `SIZE_CHANGED`
  - `ANCHOR_CHANGED`
  - `CHILD_ADDED`
  - `CHILD_REMOVED`
  - `CHILD_REORDER`
  - `GROUP_CHANGED`

### Details


##### TOUCH_START

> The event type for touch start event, you can use its value directly: 'touchstart'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:133](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L133) |



##### TOUCH_MOVE

> The event type for touch move event, you can use its value directly: 'touchmove'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:140](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L140) |



##### TOUCH_END

> The event type for touch end event, you can use its value directly: 'touchend'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:147](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L147) |



##### TOUCH_CANCEL

> The event type for touch end event, you can use its value directly: 'touchcancel'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:154](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L154) |



##### MOUSE_DOWN

> The event type for mouse down events, you can use its value directly: 'mousedown'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:162](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L162) |



##### MOUSE_MOVE

> The event type for mouse move events, you can use its value directly: 'mousemove'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:169](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L169) |



##### MOUSE_ENTER

> The event type for mouse enter target events, you can use its value directly: 'mouseenter'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:176](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L176) |



##### MOUSE_LEAVE

> The event type for mouse leave target events, you can use its value directly: 'mouseleave'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:183](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L183) |



##### MOUSE_UP

> The event type for mouse up events, you can use its value directly: 'mouseup'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:190](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L190) |



##### MOUSE_WHEEL

> The event type for mouse wheel events, you can use its value directly: 'mousewheel'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:197](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L197) |



##### POSITION_CHANGED

> The event type for position change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:205](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L205) |



##### ROTATION_CHANGED

> The event type for rotation change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:215](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L215) |



##### SCALE_CHANGED

> The event type for scale change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:225](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L225) |



##### SIZE_CHANGED

> The event type for size change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:235](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L235) |



##### ANCHOR_CHANGED

> The event type for anchor point change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:245](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L245) |



##### CHILD_ADDED

> The event type for new child added events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:255](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L255) |



##### CHILD_REMOVED

> The event type for child removed events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:262](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L262) |



##### CHILD_REORDER

> The event type for children reorder events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:269](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L269) |



##### GROUP_CHANGED

> The event type for node group changed events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:276](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/CCNode.js#L276) |


