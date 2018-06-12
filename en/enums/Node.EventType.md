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
| Defined in | [cocos2d/core/CCNode.js:127](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L127) |



##### TOUCH_MOVE

> The event type for touch move event, you can use its value directly: 'touchmove'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:134](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L134) |



##### TOUCH_END

> The event type for touch end event, you can use its value directly: 'touchend'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:141](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L141) |



##### TOUCH_CANCEL

> The event type for touch end event, you can use its value directly: 'touchcancel'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:148](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L148) |



##### MOUSE_DOWN

> The event type for mouse down events, you can use its value directly: 'mousedown'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:156](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L156) |



##### MOUSE_MOVE

> The event type for mouse move events, you can use its value directly: 'mousemove'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:163](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L163) |



##### MOUSE_ENTER

> The event type for mouse enter target events, you can use its value directly: 'mouseenter'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:170](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L170) |



##### MOUSE_LEAVE

> The event type for mouse leave target events, you can use its value directly: 'mouseleave'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:177](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L177) |



##### MOUSE_UP

> The event type for mouse up events, you can use its value directly: 'mouseup'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:184](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L184) |



##### MOUSE_WHEEL

> The event type for mouse wheel events, you can use its value directly: 'mousewheel'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:191](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L191) |



##### POSITION_CHANGED

> The event type for position change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:199](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L199) |



##### ROTATION_CHANGED

> The event type for rotation change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:209](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L209) |



##### SCALE_CHANGED

> The event type for scale change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:219](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L219) |



##### SIZE_CHANGED

> The event type for size change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:229](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L229) |



##### ANCHOR_CHANGED

> The event type for anchor point change events.
Performance note, this event will be triggered every time corresponding properties being changed,
if the event callback have heavy logic it may have great performance impact, try to avoid such scenario.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:239](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L239) |



##### CHILD_ADDED

> The event type for new child added events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:249](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L249) |



##### CHILD_REMOVED

> The event type for child removed events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:256](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L256) |



##### CHILD_REORDER

> The event type for children reorder events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:263](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L263) |



##### GROUP_CHANGED

> The event type for node group changed events.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:270](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCNode.js#L270) |


