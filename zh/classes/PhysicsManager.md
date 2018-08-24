## `PhysicsManager` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


物理系统将 box2d 作为内部物理系统，并且隐藏了大部分 box2d 实现细节（比如创建刚体，同步刚体信息到节点中等）。
你可以通过物理系统访问一些 box2d 常用的功能，比如点击测试，射线测试，设置测试信息等。
物理系统还管理碰撞信息的分发，她会在产生碰撞时，将碰撞信息分发到各个碰撞回调中。
注意：你需要先在刚体中开启碰撞接听才会产生相应的碰撞回调。


### 索引

##### 属性（properties）

  - [`DrawBits`](#drawbits) `DrawBits` 指定物理系统需要绘制哪些调试信息。
  - [`PTM_RATIO`](#ptmratio) `Number` 物理单位与像素单位互相转换的比率，一般是 32。
  - [`VELOCITY_ITERATIONS`](#velocityiterations) `Number` 速度更新迭代数
  - [`POSITION_ITERATIONS`](#positioniterations) `Number` 位置迭代更新数
  - [`FIXED_TIME_STEP`](#fixedtimestep) `Number` 指定固定的物理更新间隔时间，需要开启 enabledAccumulator 才有效。
  - [`MAX_ACCUMULATOR`](#maxaccumulator) `Number` 每次可用于更新物理系统的最大时间，需要开启 enabledAccumulator 才有效。
  - [`enabledAccumulator`](#enabledaccumulator) `Boolean` 如果开启此选项，那么将会以固定的间隔时间 FIXED_TIME_STEP 来更新物理引擎，如果一个 update 的间隔时间大于 FIXED_TIME_STEP，则会对物理引擎进行多次更新。
  - [`enabled`](#enabled) `Boolean` 指定是否启用物理系统？
  - [`debugDrawFlags`](#debugdrawflags) `Number` 设置调试绘制标志
  - [`gravity`](#gravity) `Vec2` 物理世界重力值



##### 方法

  - [`testPoint`](#testpoint) 获取包含给定世界坐标系点的碰撞体
  - [`testAABB`](#testaabb) 获取与给定世界坐标系矩形相交的碰撞体
  - [`rayCast`](#raycast) 检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`emit`](#emit) 通过事件名发送自定义事件
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件



### Details


#### 属性（properties）


##### DrawBits

> 指定物理系统需要绘制哪些调试信息。

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/DrawBits.html" class="crosslink">DrawBits</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L67) |

##### 示例

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
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:85](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L85) |



##### VELOCITY_ITERATIONS

> 速度更新迭代数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:95](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L95) |



##### POSITION_ITERATIONS

> 位置迭代更新数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:106](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L106) |



##### FIXED_TIME_STEP

> 指定固定的物理更新间隔时间，需要开启 enabledAccumulator 才有效。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L117) |



##### MAX_ACCUMULATOR

> 每次可用于更新物理系统的最大时间，需要开启 enabledAccumulator 才有效。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:129](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L129) |



##### enabledAccumulator

> 如果开启此选项，那么将会以固定的间隔时间 FIXED_TIME_STEP 来更新物理引擎，如果一个 update 的间隔时间大于 FIXED_TIME_STEP，则会对物理引擎进行多次更新。
如果关闭此选项，那么将会根据设定的 frame rate 计算出一个间隔时间来更新物理引擎。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:160](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L160) |



##### enabled

> 指定是否启用物理系统？

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:550](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L550) |



##### debugDrawFlags

> 设置调试绘制标志

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:578](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L578) |

##### 示例

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
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:625](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L625) |






<!-- Method Block -->
#### 方法


##### testPoint

获取包含给定世界坐标系点的碰撞体

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:237](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L237) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world point


##### testAABB

获取与给定世界坐标系矩形相交的碰撞体

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsCollider.html" class="crosslink">[PhysicsCollider]</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:268](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L268) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the world rect


##### rayCast

检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsRayCastResult.html" class="crosslink">[PhysicsRayCastResult]</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:295](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsManager.js#L295) |

###### 参数列表
- `p1` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> start point of the raycast
- `p2` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> end point of the raycast
- `type` <a href="../enums/RayCastType.html" class="crosslink">RayCastType</a> optional, default is RayCastType.Closest


##### hasEventListener

检查事件目标对象是否有为特定类型的事件注册的回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/event/event-target.js:68](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L68) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/event/event-target.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L76) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### 示例

```js
eventTarget.on('fire', function (event) {
    cc.log("fire in the hole");
}, node);
```

##### off

删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L117) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### 示例

```js
// register fire eventListener
var callback = eventTarget.on('fire', function (event) {
    cc.log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');
```

##### targetOff

在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:151](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L151) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:164](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L164) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### 示例

```js
eventTarget.once('fire', function (event) {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### emit

通过事件名发送自定义事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:201](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L201) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### 示例

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

通过事件对象派发事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:221](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L221) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  



