## `Event` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:31](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L31)

Module: [cc](../modules/cc.md)




包含事件相关信息的对象。

### Index

##### Properties

  - [`type`](#type) `String` 事件类型。
  - [`bubbles`](#bubbles) `Boolean` 表示该事件是否进行冒泡。
  - [`target`](#target) `Object` 最初事件触发的目标
  - [`currentTarget`](#currenttarget) `Object` 当前目标
  - [`eventPhase`](#eventphase) `Number` 事件阶段
  - [`NO_TYPE`](#notype) `String` 没有类型的事件
  - [`TOUCH`](#touch) `String` 触摸事件类型
  - [`MOUSE`](#mouse) `String` 鼠标事件类型
  - [`KEYBOARD`](#keyboard) `String` 键盘事件类型
  - [`ACCELERATION`](#acceleration) `String` 加速器事件类型
  - [`NONE`](#none) `Number` 尚未派发事件阶段
  - [`CAPTURING_PHASE`](#capturingphase) `Number` 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。
  - [`AT_TARGET`](#attarget) `Number` 目标阶段仅包括事件目标节点。
  - [`BUBBLING_PHASE`](#bubblingphase) `Number` 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。



##### Methods

  - [`constructor`](#constructor) 
  - [`unuse`](#unuse) 重置对象池中存储的事件。
  - [`reuse`](#reuse) 用于对象池再次使用的事件。
  - [`stopPropagation`](#stoppropagation) 停止传递当前事件。
  - [`stopPropagationImmediate`](#stoppropagationimmediate) 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
  - [`isStopped`](#isstopped) 检查该事件是否已经停止传递.
  - [`getCurrentTarget`](#getcurrenttarget) 获取当前目标节点
  - [`getType`](#gettype) 获取事件类型



### Details


#### Properties


##### type

> 事件类型。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:43](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L43) |



##### bubbles

> 表示该事件是否进行冒泡。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:51](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L51) |



##### target

> 最初事件触发的目标

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:59](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L59) |



##### currentTarget

> 当前目标

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:67](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L67) |



##### eventPhase

> 事件阶段

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:75](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L75) |



##### NO_TYPE

> 没有类型的事件

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:192](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L192) |



##### TOUCH

> 触摸事件类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:201](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L201) |



##### MOUSE

> 鼠标事件类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:209](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L209) |



##### KEYBOARD

> 键盘事件类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:217](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L217) |



##### ACCELERATION

> 加速器事件类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:225](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L225) |



##### NONE

> 尚未派发事件阶段

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:235](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L235) |



##### CAPTURING_PHASE

> 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:243](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L243) |



##### AT_TARGET

> 目标阶段仅包括事件目标节点。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:253](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L253) |



##### BUBBLING_PHASE

> 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:263](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L263) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:37](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L37) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- bubbles <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### unuse

重置对象池中存储的事件。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:110](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L110) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### reuse

用于对象池再次使用的事件。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:125](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L125) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### stopPropagation

停止传递当前事件。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:136](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L136) |



##### stopPropagationImmediate

立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:145](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L145) |



##### isStopped

检查该事件是否已经停止传递.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:155](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L155) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getCurrentTarget

获取当前目标节点

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:165](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L165) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### getType

获取事件类型

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js:180](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event.js#L180) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 




