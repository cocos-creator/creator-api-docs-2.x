## `Node.EventType` 类型



模块: [cc](../modules/cc.md)


Node 支持的事件类型



### 索引

##### 属性（properties）

  - [`TOUCH_START`](#touchstart) `String` 当手指触摸到屏幕时。
  - [`TOUCH_MOVE`](#touchmove) `String` 当手指在屏幕上移动时。
  - [`TOUCH_END`](#touchend) `String` 当手指在目标节点区域内离开屏幕时。
  - [`TOUCH_CANCEL`](#touchcancel) `String` 当手指在目标节点区域外离开屏幕时。
  - [`MOUSE_DOWN`](#mousedown) `String` 当鼠标按下时触发一次。
  - [`MOUSE_MOVE`](#mousemove) `String` 当鼠标在目标节点在目标节点区域中移动时，不论是否按下。
  - [`MOUSE_ENTER`](#mouseenter) `String` 当鼠标移入目标节点区域时，不论是否按下。
  - [`MOUSE_LEAVE`](#mouseleave) `String` 当鼠标移出目标节点区域时，不论是否按下。
  - [`MOUSE_UP`](#mouseup) `String` 当鼠标从按下状态松开时触发一次。
  - [`MOUSE_WHEEL`](#mousewheel) `String` 当鼠标滚轮滚动时。
  - [`POSITION_CHANGED`](#positionchanged) `String` 当节点位置改变时触发的事件。
  - [`ROTATION_CHANGED`](#rotationchanged) `String` 当节点旋转改变时触发的事件。
  - [`SCALE_CHANGED`](#scalechanged) `String` 当节点缩放改变时触发的事件。
  - [`SIZE_CHANGED`](#sizechanged) `String` 当节点尺寸改变时触发的事件。
  - [`ANCHOR_CHANGED`](#anchorchanged) `String` 当节点锚点改变时触发的事件。
  - [`COLOR_CHANGED`](#colorchanged) `String` 当节点颜色改变时触发的事件。
  - [`CHILD_ADDED`](#childadded) `String` 当新的子节点被添加时触发的事件。
  - [`CHILD_REMOVED`](#childremoved) `String` 当子节点被移除时触发的事件。
  - [`CHILD_REORDER`](#childreorder) `String` 当子节点顺序改变时触发的事件。
  - [`GROUP_CHANGED`](#groupchanged) `String` 当节点归属群组发生变化时触发的事件。
  - [`SIBLING_ORDER_CHANGED`](#siblingorderchanged) `String` 当节点在兄弟节点中的顺序发生变化时触发的事件。





### Details


#### 属性（properties）


##### TOUCH_START

> 当手指触摸到屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:265](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L265) |



##### TOUCH_MOVE

> 当手指在屏幕上移动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:272](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L272) |



##### TOUCH_END

> 当手指在目标节点区域内离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:279](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L279) |



##### TOUCH_CANCEL

> 当手指在目标节点区域外离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:286](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L286) |



##### MOUSE_DOWN

> 当鼠标按下时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:294](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L294) |



##### MOUSE_MOVE

> 当鼠标在目标节点在目标节点区域中移动时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:301](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L301) |



##### MOUSE_ENTER

> 当鼠标移入目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:308](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L308) |



##### MOUSE_LEAVE

> 当鼠标移出目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:315](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L315) |



##### MOUSE_UP

> 当鼠标从按下状态松开时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:322](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L322) |



##### MOUSE_WHEEL

> 当鼠标滚轮滚动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:329](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L329) |



##### POSITION_CHANGED

> 当节点位置改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:337](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L337) |



##### ROTATION_CHANGED

> 当节点旋转改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:347](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L347) |



##### SCALE_CHANGED

> 当节点缩放改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:357](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L357) |



##### SIZE_CHANGED

> 当节点尺寸改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:367](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L367) |



##### ANCHOR_CHANGED

> 当节点锚点改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:377](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L377) |



##### COLOR_CHANGED

> 当节点颜色改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:387](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L387) |



##### CHILD_ADDED

> 当新的子节点被添加时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:397](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L397) |



##### CHILD_REMOVED

> 当子节点被移除时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:404](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L404) |



##### CHILD_REORDER

> 当子节点顺序改变时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:411](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L411) |



##### GROUP_CHANGED

> 当节点归属群组发生变化时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:418](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L418) |



##### SIBLING_ORDER_CHANGED

> 当节点在兄弟节点中的顺序发生变化时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:425](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/CCNode.js#L425) |






