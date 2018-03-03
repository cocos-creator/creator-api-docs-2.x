## `Event.EventMouse` 类型

继承于 [`Event`](Event.md)


模块: [cc](../modules/cc.md)


鼠标事件类型


### 索引

##### 属性（properties）

  - [`NONE`](#none) `Number` 无。
  - [`DOWN`](#down) `Number` 鼠标按下事件。
  - [`UP`](#up) `Number` 鼠标按下后释放事件。
  - [`MOVE`](#move) `Number` 鼠标移动事件。
  - [`SCROLL`](#scroll) `Number` 鼠标滚轮事件。
  - [`BUTTON_LEFT`](#buttonleft) `Number` 鼠标左键的标签。
  - [`BUTTON_RIGHT`](#buttonright) `Number` 鼠标右键的标签。
  - [`BUTTON_MIDDLE`](#buttonmiddle) `Number` 鼠标中键的标签。
  - [`BUTTON_4`](#button4) `Number` 鼠标按键 4 的标签。
  - [`BUTTON_5`](#button5) `Number` 鼠标按键 5 的标签。
  - [`BUTTON_6`](#button6) `Number` 鼠标按键 6 的标签。
  - [`BUTTON_7`](#button7) `Number` 鼠标按键 7 的标签。
  - [`BUTTON_8`](#button8) `Number` 鼠标按键 8 的标签。
  - [`type`](#type) `String` 事件类型。
  - [`bubbles`](#bubbles) `Boolean` 表示该事件是否进行冒泡。
  - [`target`](#target) `Object` 最初事件触发的目标
  - [`currentTarget`](#currenttarget) `Object` 当前目标
  - [`eventPhase`](#eventphase) `Number` 事件阶段



##### 方法

  - [`setScrollData`](#setscrolldata) 设置鼠标的滚动数据。
  - [`getScrollX`](#getscrollx) 获取鼠标滚动的X轴距离，只有滚动时才有效。
  - [`getScrollY`](#getscrolly) 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。
  - [`setLocation`](#setlocation) 设置当前鼠标位置。
  - [`getLocation`](#getlocation) 获取鼠标位置对象，对象包含 x 和 y 属性。
  - [`getLocationInView`](#getlocationinview) 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
  - [`getPreviousLocation`](#getpreviouslocation) 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
  - [`getDelta`](#getdelta) 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
  - [`getDeltaX`](#getdeltax) 获取鼠标距离上一次事件移动的 X 轴距离。
  - [`getDeltaY`](#getdeltay) 获取鼠标距离上一次事件移动的 Y 轴距离。
  - [`setButton`](#setbutton) 设置鼠标按键。
  - [`getButton`](#getbutton) 获取鼠标按键。
  - [`getLocationX`](#getlocationx) 获取鼠标当前位置 X 轴。
  - [`getLocationY`](#getlocationy) 获取鼠标当前位置 Y 轴。
  - [`constructor`](#constructor) 
  - [`unuse`](#unuse) 重置对象池中存储的事件。
  - [`reuse`](#reuse) 用于对象池再次使用的事件。
  - [`stopPropagation`](#stoppropagation) 停止传递当前事件。
  - [`stopPropagationImmediate`](#stoppropagationimmediate) 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
  - [`isStopped`](#isstopped) 检查该事件是否已经停止传递.
  - [`getCurrentTarget`](#getcurrenttarget) 获取当前目标节点
  - [`getType`](#gettype) 获取事件类型



### Details


#### 属性（properties）


##### NONE

> 无。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:207](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L207) |



##### DOWN

> 鼠标按下事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L215) |



##### UP

> 鼠标按下后释放事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:223](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L223) |



##### MOVE

> 鼠标移动事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:231](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L231) |



##### SCROLL

> 鼠标滚轮事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L239) |



##### BUTTON_LEFT

> 鼠标左键的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:248](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L248) |



##### BUTTON_RIGHT

> 鼠标右键的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L257) |



##### BUTTON_MIDDLE

> 鼠标中键的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:266](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L266) |



##### BUTTON_4

> 鼠标按键 4 的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L275) |



##### BUTTON_5

> 鼠标按键 5 的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:284](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L284) |



##### BUTTON_6

> 鼠标按键 6 的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:293](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L293) |



##### BUTTON_7

> 鼠标按键 7 的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L302) |



##### BUTTON_8

> 鼠标按键 8 的标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L311) |



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


##### setScrollData

设置鼠标的滚动数据。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L57) |

###### 参数列表
- `scrollX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `scrollY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getScrollX

获取鼠标滚动的X轴距离，只有滚动时才有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:69](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L69) |



##### getScrollY

获取滚轮滚动的 Y 轴距离，只有滚动时才有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:79](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L79) |



##### setLocation

设置当前鼠标位置。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:89](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L89) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getLocation

获取鼠标位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L101) |



##### getLocationInView

获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L111) |



##### getPreviousLocation

获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:126](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L126) |



##### getDelta

获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L136) |



##### getDeltaX

获取鼠标距离上一次事件移动的 X 轴距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:146](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L146) |



##### getDeltaY

获取鼠标距离上一次事件移动的 Y 轴距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:156](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L156) |



##### setButton

设置鼠标按键。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L166) |

###### 参数列表
- `button` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getButton

获取鼠标按键。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:176](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L176) |



##### getLocationX

获取鼠标当前位置 X 轴。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L186) |



##### getLocationY

获取鼠标当前位置 Y 轴。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js:196](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEvent.js#L196) |



##### constructor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js:37](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event.js#L37) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- `bubbles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


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




