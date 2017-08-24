## `PhysicsManager` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




物理系统将 box2d 作为内部物理系统，并且隐藏了大部分 box2d 实现细节（比如创建刚体，同步刚体信息到节点中等）。
你可以通过物理系统访问一些 box2d 常用的功能，比如点击测试，射线测试，设置测试信息等。
物理系统还管理碰撞信息的分发，她会在产生碰撞时，将碰撞信息分发到各个碰撞回调中。
注意：你需要先在刚体中开启碰撞接听才会产生相应的碰撞回调。

### Index

##### Properties

  - [`DrawBits`](#drawbits) `DrawBits` 指定物理系统需要绘制哪些调试信息。
  - [`PTM_RATIO`](#ptmratio) `Number` 物理单位与像素单位互相转换的比率，一般是 32。
  - [`VELOCITY_ITERATIONS`](#velocityiterations) `Number` 速度更新迭代数
  - [`POSITION_ITERATIONS`](#positioniterations) `Number` 位置迭代更新数
  - [`enabledAccumulator`](#enabledaccumulator) `Boolean` 如果开启此选项，那么将会以一个固定的时间步来更新物理引擎，如果一个 update 的间隔时间大于这个时间步，则会对物理引擎进行多次更新。
如果关闭此选项，那么将会根据设定的 frame rate 计算出一个时间步来更新物理引擎。
  - [`enabled`](#enabled) `Boolean` 指定是否启用物理系统？
  - [`debugDrawFlags`](#debugdrawflags) `Number` 设置调试绘制标志
  - [`gravity`](#gravity) `Vec2` 物理世界重力值



##### Methods

  - [`testPoint`](#testpoint) 获取包含给定世界坐标系点的碰撞体
  - [`testAABB`](#testaabb) 获取与给定世界坐标系矩形相交的碰撞体
  - [`rayCast`](#raycast) 检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。
  - [`attachDebugDrawToCamera`](#attachdebugdrawtocamera) 将物理的调试绘制信息附加到指定摄像机上
  - [`detachDebugDrawFromCamera`](#detachdebugdrawfromcamera) 将物理的调试绘制信息从指定摄像机上移除
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`emit`](#emit) 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。



### Details


#### Properties


##### DrawBits

> 指定物理系统需要绘制哪些调试信息。

| meta | description |
|------|-------------|
| Type | <a href="../enums/DrawBits.html" class="crosslink">DrawBits</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:62](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L62) |

##### Examples

```js
cc.director.getPhysicsManager().debugDrawFlags =
// cc.PhysicsManager.DrawBits.e_aabbBit |
// cc.PhysicsManager.DrawBits.e_pairBit |
// cc.PhysicsManager.DrawBits.e_centerOfMassBit |
cc.PhysicsManager.DrawBits.e_jointBit |
cc.PhysicsManager.DrawBits.e_shapeBit;
```


##### PTM_RATIO

> 物理单位与像素单位互相转换的比率，一般是 32。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:80](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L80) |



##### VELOCITY_ITERATIONS

> 速度更新迭代数

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:90](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L90) |



##### POSITION_ITERATIONS

> 位置迭代更新数

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L101) |



##### enabledAccumulator

> 如果开启此选项，那么将会以一个固定的时间步来更新物理引擎，如果一个 update 的间隔时间大于这个时间步，则会对物理引擎进行多次更新。
如果关闭此选项，那么将会根据设定的 frame rate 计算出一个时间步来更新物理引擎。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:130](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L130) |



##### enabled

> 指定是否启用物理系统？

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:505](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L505) |



##### debugDrawFlags

> 设置调试绘制标志

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:532](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L532) |

##### Examples

```js
// enable all debug draw info
var Bits = cc.PhysicsManager.DrawBits;
cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
Bits.e_pairBit |
Bits.e_centerOfMassBit |
Bits.e_jointBit |
Bits.e_shapeBit;

// disable debug draw info
cc.director.getPhysicsManager().debugDrawFlags = 0;
```


##### gravity

> 物理世界重力值

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:580](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L580) |






<!-- Method Block -->
#### Methods


##### testPoint

获取包含给定世界坐标系点的碰撞体

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:202](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L202) |
| Return 		 | <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> 

###### Parameters
- point <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world point


##### testAABB

获取与给定世界坐标系矩形相交的碰撞体

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:233](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L233) |
| Return 		 | <a href="../classes/PhysicsCollider.html" class="crosslink">[PhysicsCollider]</a> 

###### Parameters
- rect <a href="../classes/Rect.html" class="crosslink">Rect</a> the world rect


##### rayCast

检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:260](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L260) |
| Return 		 | <a href="../classes/PhysicsRayCastResult.html" class="crosslink">[PhysicsRayCastResult]</a> 

###### Parameters
- p1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a> start point of the raycast
- p2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a> end point of the raycast
- type <a href="../enums/RayCastType.html" class="crosslink">RayCastType</a> optional, default is RayCastType.Closest


##### attachDebugDrawToCamera

将物理的调试绘制信息附加到指定摄像机上

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:345](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L345) |

###### Parameters
- camera <a href="../classes/Camera.html" class="crosslink">Camera</a> 


##### detachDebugDrawFromCamera

将物理的调试绘制信息从指定摄像机上移除

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js:357](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsManager.js#L357) |

###### Parameters
- camera <a href="../classes/Camera.html" class="crosslink">Camera</a> 


##### on

注册事件目标的特定事件类型回调。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:157](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L157) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- event <a href="../classes/Event.html" class="crosslink">Event</a> event
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, can be null
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Example

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:209](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L209) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, if it's not given, only callback without target will be removed
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Example

```js
// register touchEnd eventListener
var touchEnd = node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
// remove touch end event listener
node.off(cc.Node.EventType.TOUCH_END, touchEnd, node);
// remove all touch end event listeners
node.off(cc.Node.EventType.TOUCH_END);
```

##### targetOff

在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L257) |

###### Parameters
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L277) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- event <a href="../classes/Event.html" class="crosslink">Event</a> event
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, can be null
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Example

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

分发事件到事件流中。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L311) |

###### Parameters
- event <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:325](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L325) |

###### Parameters
- message <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- detail Any whatever argument the message needs



