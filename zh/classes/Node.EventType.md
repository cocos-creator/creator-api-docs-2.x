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
  - [`CHILD_ADDED`](#childadded) `String` 当新的子节点被添加时触发的事件。
  - [`CHILD_REMOVED`](#childremoved) `String` 当子节点被移除时触发的事件。
  - [`CHILD_REORDER`](#childreorder) `String` 当子节点顺序改变时触发的事件。
  - [`GROUP_CHANGED`](#groupchanged) `String` 当节点归属群组发生变化时触发的事件。





### Details


#### 属性（properties）


##### TOUCH_START

> 当手指触摸到屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L134) |



##### TOUCH_MOVE

> 当手指在屏幕上移动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:141](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L141) |



##### TOUCH_END

> 当手指在目标节点区域内离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:148](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L148) |



##### TOUCH_CANCEL

> 当手指在目标节点区域外离开屏幕时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:155](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L155) |



##### MOUSE_DOWN

> 当鼠标按下时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:163](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L163) |



##### MOUSE_MOVE

> 当鼠标在目标节点在目标节点区域中移动时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:170](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L170) |



##### MOUSE_ENTER

> 当鼠标移入目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:177](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L177) |



##### MOUSE_LEAVE

> 当鼠标移出目标节点区域时，不论是否按下。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:184](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L184) |



##### MOUSE_UP

> 当鼠标从按下状态松开时触发一次。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:191](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L191) |



##### MOUSE_WHEEL

> 当鼠标滚轮滚动时。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:198](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L198) |



##### POSITION_CHANGED

> 当节点位置改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:206](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L206) |



##### ROTATION_CHANGED

> 当节点旋转改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:216](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L216) |



##### SCALE_CHANGED

> 当节点缩放改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:226](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L226) |



##### SIZE_CHANGED

> 当节点尺寸改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:236](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L236) |



##### ANCHOR_CHANGED

> 当节点锚点改变时触发的事件。
性能警告：这个事件会在每次对应的属性被修改时触发，如果事件回调损耗较高，有可能对性能有很大的负面影响，请尽量避免这种情况。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:246](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L246) |



##### CHILD_ADDED

> 当新的子节点被添加时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:256](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L256) |



##### CHILD_REMOVED

> 当子节点被移除时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:263](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L263) |



##### CHILD_REORDER

> 当子节点顺序改变时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:270](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L270) |



##### GROUP_CHANGED

> 当节点归属群组发生变化时触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:277](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L277) |






