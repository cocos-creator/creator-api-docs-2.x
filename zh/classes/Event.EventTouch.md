## `Event.EventTouch` 类型

继承于 [`Event`](Event.md)


模块: [cc](../modules/cc.md)


触摸事件


### 索引

##### 属性（properties）

  - [`touch`](#touch) `Touch` 当前触点对象
  - [`type`](#type) `String` 事件类型。
  - [`bubbles`](#bubbles) `Boolean` 表示该事件是否进行冒泡。
  - [`target`](#target) `Object` 最初事件触发的目标
  - [`currentTarget`](#currenttarget) `Object` 当前目标
  - [`eventPhase`](#eventphase) `Number` 事件阶段



##### 方法

  - [`constructor`](#constructor) 
  - [`getEventCode`](#geteventcode) 获取事件类型。
  - [`getTouches`](#gettouches) 获取触摸点的列表。
  - [`setLocation`](#setlocation) 设置当前触点位置
  - [`getLocation`](#getlocation) 获取触点位置。
  - [`getLocationInView`](#getlocationinview) 获取当前触点在游戏窗口中的位置。
  - [`getPreviousLocation`](#getpreviouslocation) 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
  - [`getStartLocation`](#getstartlocation) 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
  - [`getID`](#getid) 触点的标识 ID，可以用来在多点触摸中跟踪触点。
  - [`getDelta`](#getdelta) 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
  - [`getDeltaX`](#getdeltax) 获取触点距离上一次事件移动的 x 轴距离。
  - [`getDeltaY`](#getdeltay) 获取触点距离上一次事件移动的 y 轴距离。
  - [`getLocationX`](#getlocationx) 获取当前触点 X 轴位置。
  - [`getLocationY`](#getlocationy) 获取当前触点 Y 轴位置。
  - [`unuse`](#unuse) 重置对象池中存储的事件。
  - [`reuse`](#reuse) 用于对象池再次使用的事件。
  - [`stopPropagation`](#stoppropagation) 停止传递当前事件。
  - [`stopPropagationImmediate`](#stoppropagationimmediate) 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
  - [`isStopped`](#isstopped) 检查该事件是否已经停止传递.
  - [`getCurrentTarget`](#getcurrenttarget) 获取当前目标节点
  - [`getType`](#gettype) 获取事件类型



### Details


#### 属性（properties）


##### touch

> 当前触点对象

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Touch.html" class="crosslink">Touch</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L336) |



##### type

> 事件类型。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L43) |



##### bubbles

> 表示该事件是否进行冒泡。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:51](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L51) |



##### target

> 最初事件触发的目标

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:59](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L59) |



##### currentTarget

> 当前目标

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L67) |



##### eventPhase

> 事件阶段

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L75) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:327](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L327) |

###### 参数列表
- `touchArr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of the touches
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### getEventCode

获取事件类型。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L351) |



##### getTouches

获取触摸点的列表。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:361](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L361) |



##### setLocation

设置当前触点位置

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L379) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getLocation

获取触点位置。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:390](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L390) |



##### getLocationInView

获取当前触点在游戏窗口中的位置。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:400](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L400) |



##### getPreviousLocation

获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L410) |



##### getStartLocation

获获取触点落下时的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:420](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L420) |



##### getID

触点的标识 ID，可以用来在多点触摸中跟踪触点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:430](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L430) |



##### getDelta

获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:440](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L440) |



##### getDeltaX

获取触点距离上一次事件移动的 x 轴距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:450](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L450) |



##### getDeltaY

获取触点距离上一次事件移动的 y 轴距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:460](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L460) |



##### getLocationX

获取当前触点 X 轴位置。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:470](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L470) |



##### getLocationY

获取当前触点 Y 轴位置。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:480](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L480) |



##### unuse

重置对象池中存储的事件。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L110) |



##### reuse

用于对象池再次使用的事件。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L125) |



##### stopPropagation

停止传递当前事件。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L136) |



##### stopPropagationImmediate

立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:145](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L145) |



##### isStopped

检查该事件是否已经停止传递.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L155) |



##### getCurrentTarget

获取当前目标节点

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:165](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L165) |



##### getType

获取事件类型

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:180](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L180) |




