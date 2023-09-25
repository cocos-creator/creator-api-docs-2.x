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
| 定义于 | [cocos2d/core/CCNode.js:266](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L266) |



##### TOUCH_MOVE

> 当手指在屏幕上移动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:273](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L273) |



##### TOUCH_END

> 当手指在目标节点区域内离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:280](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L280) |



##### TOUCH_CANCEL

> 当手指在目标节点区域外离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:287](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L287) |



##### MOUSE_DOWN

> 当鼠标按下时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:295](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L295) |



##### MOUSE_MOVE

> 当鼠标在目标节点在目标节点区域中移动时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:302](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L302) |



##### MOUSE_ENTER

> 当鼠标移入目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:309](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L309) |



##### MOUSE_LEAVE

> 当鼠标移出目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:316](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L316) |



##### MOUSE_UP

> 当鼠标从按下状态松开时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:323](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L323) |



##### MOUSE_WHEEL

> 当鼠标滚轮滚动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:330](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L330) |



##### POSITION_CHANGED

> 当节点位置改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:338](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L338) |



##### ROTATION_CHANGED

> 当节点旋转改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:348](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L348) |



##### SCALE_CHANGED

> 当节点缩放改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:358](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L358) |



##### SIZE_CHANGED

> 当节点尺寸改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:368](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L368) |



##### ANCHOR_CHANGED

> 当节点锚点改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:378](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L378) |



##### COLOR_CHANGED

> 当节点颜色改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:388](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L388) |



##### CHILD_ADDED

> 当新的子节点被添加时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:398](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L398) |



##### CHILD_REMOVED

> 当子节点被移除时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:405](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L405) |



##### CHILD_REORDER

> 当子节点顺序改变时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:412](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L412) |



##### GROUP_CHANGED

> 当节点归属群组发生变化时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:419](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L419) |



##### SIBLING_ORDER_CHANGED

> 当节点在兄弟节点中的顺序发生变化时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:426](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/CCNode.js#L426) |






