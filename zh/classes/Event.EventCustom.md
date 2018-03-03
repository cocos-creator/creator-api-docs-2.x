## `Event.EventCustom` 类型

继承于 [`Event`](Event.md)


模块: [cc](../modules/cc.md)


自定义事件


### 索引

##### 属性（properties）

  - [`detail`](#detail) `Object` 事件的详细数据
  - [`keyCode`](#keycode) `Number` keyCode 是只读属性它表示一个系统和依赖于实现的数字代码，可以识别按键的未修改值。</br>
这通常是十进制 ASCII (RFC20) 或者 Windows 1252 代码，所对应的密钥。</br>
如果无法识别该键，则该值为 0。
  - [`type`](#type) `String` 事件类型。
  - [`bubbles`](#bubbles) `Boolean` 表示该事件是否进行冒泡。
  - [`target`](#target) `Object` 最初事件触发的目标
  - [`currentTarget`](#currenttarget) `Object` 当前目标
  - [`eventPhase`](#eventphase) `Number` 事件阶段



##### 方法

  - [`constructor`](#constructor) 
  - [`setUserData`](#setuserdata) 设置用户数据
  - [`getUserData`](#getuserdata) 获取用户数据
  - [`getEventName`](#geteventname) 获取事件名称
  - [`unuse`](#unuse) 重置对象池中存储的事件。
  - [`reuse`](#reuse) 用于对象池再次使用的事件。
  - [`stopPropagation`](#stoppropagation) 停止传递当前事件。
  - [`stopPropagationImmediate`](#stoppropagationimmediate) 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
  - [`isStopped`](#isstopped) 检查该事件是否已经停止传递.
  - [`getCurrentTarget`](#getcurrenttarget) 获取当前目标节点
  - [`getType`](#gettype) 获取事件类型



### Details


#### 属性（properties）


##### detail

> 事件的详细数据

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:290](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L290) |



##### keyCode

> keyCode 是只读属性它表示一个系统和依赖于实现的数字代码，可以识别按键的未修改值。</br>
这通常是十进制 ASCII (RFC20) 或者 Windows 1252 代码，所对应的密钥。</br>
如果无法识别该键，则该值为 0。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:332](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L332) |



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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:282](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L282) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### setUserData

设置用户数据

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:303](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L303) |

###### 参数列表
- `data` Any 


##### getUserData

获取用户数据

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L313) |



##### getEventName

获取事件名称

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L323) |



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




