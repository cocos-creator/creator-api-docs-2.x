## `Touch` 类型



模块: [cc](../modules/cc.md)


封装了触摸相关的信息。



### 索引



##### 方法

  - [`getLocation`](#getlocation) 获取当前触点位置。
  - [`getLocationX`](#getlocationx) 获取当前触点 X 轴位置。
  - [`getLocationY`](#getlocationy) 获取当前触点 Y 轴位置。
  - [`getPreviousLocation`](#getpreviouslocation) 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
  - [`getStartLocation`](#getstartlocation) 获取触点落下时的位置对象，对象包含 x 和 y 属性。
  - [`getDelta`](#getdelta) 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
  - [`getLocationInView`](#getlocationinview) 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
  - [`getPreviousLocationInView`](#getpreviouslocationinview) 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
  - [`getStartLocationInView`](#getstartlocationinview) 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
  - [`getID`](#getid) 触点的标识 ID，可以用来在多点触摸中跟踪触点。
  - [`setTouchInfo`](#settouchinfo) 设置触摸相关的信息。



### Details




<!-- Method Block -->
#### 方法


##### getLocation

获取当前触点位置。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:45](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L45) |



##### getLocationX

获取当前触点 X 轴位置。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:55](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L55) |



##### getLocationY

获取当前触点 Y 轴位置。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:65](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L65) |



##### getPreviousLocation

获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:75](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L75) |



##### getStartLocation

获取触点落下时的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:85](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L85) |



##### getDelta

获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:95](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L95) |



##### getLocationInView

获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:105](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L105) |



##### getPreviousLocationInView

获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:115](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L115) |



##### getStartLocationInView

获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:125](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L125) |



##### getID

触点的标识 ID，可以用来在多点触摸中跟踪触点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:135](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L135) |



##### setTouchInfo

设置触摸相关的信息。用于监控触摸事件。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event-manager/CCTouch.js:145](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event-manager/CCTouch.js#L145) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



