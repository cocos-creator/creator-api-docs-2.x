## `Game` 类型

继承于 [`EventTarget`](EventTarget.md)


模块: [cc](../modules/cc.md)


cc.game 是 Game 的实例，用来驱动整个游戏。


### 索引

##### 属性（properties）

  - [`EVENT_HIDE`](#eventhide) `String` 游戏进入后台时触发的事件。
  - [`EVENT_SHOW`](#eventshow) `String` 游戏进入前台运行时触发的事件。
  - [`EVENT_GAME_INITED`](#eventgameinited) `String` Event triggered after game inited, at this point all engine objects and game scripts are loaded
  - [`EVENT_RENDERER_INITED`](#eventrendererinited) `String` Event triggered after renderer inited, at this point you will be able to use the render context
  - [`CONFIG_KEY`](#configkey) `Object` Key of config
  - [`frame`](#frame) `Object` 游戏画布的外框，cc.container 的父类。
  - [`container`](#container) `HTMLDivElement` 游戏画布的容器。
  - [`canvas`](#canvas) `HTMLCanvasElement` 游戏的画布。
  - [`config`](#config) `Object` "debugMode" 各种设置选项的意义。



##### 方法

  - [`onStart`](#onstart) 当引擎完成启动后的回调函数。
  - [`setFrameRate`](#setframerate) 设置游戏帧率。
  - [`step`](#step) 执行一帧游戏循环。
  - [`pause`](#pause) 暂停游戏主循环。
  - [`resume`](#resume) 恢复游戏主循环。
  - [`isPaused`](#ispaused) 判断游戏是否暂停。
  - [`restart`](#restart) 重新开始游戏
  - [`end`](#end) 退出游戏
  - [`prepare`](#prepare) 准备引擎，请不要直接调用这个函数。
  - [`run`](#run) 运行游戏，并且指定引擎配置和 onStart 的回调。
  - [`addPersistRootNode`](#addpersistrootnode) 声明常驻根节点，该节点不会被在场景切换中被销毁。
  - [`removePersistRootNode`](#removepersistrootnode) 取消常驻根节点。
  - [`isPersistRootNode`](#ispersistrootnode) 检查节点是否是常驻根节点。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`emit`](#emit) 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。



### Details


#### 属性（properties）


##### EVENT_HIDE

> 游戏进入后台时触发的事件。
请注意，在 WEB 平台，这个事件不一定会 100% 触发，这完全取决于浏览器的回调行为。
在原生平台，它对应的是应用被切换到后台事件，下拉菜单和上拉状态栏等不一定会触发这个事件，这取决于系统行为。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:47](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L47) |

##### 示例

```js
cc.game.on(cc.game.EVENT_HIDE, function () {
    cc.audioEngine.pauseMusic();
    cc.audioEngine.pauseAllEffects();
});
```


##### EVENT_SHOW

> Event triggered when game back to foreground
Please note that this event is not 100% guaranteed to be fired on Web platform,
on native platforms, it corresponds to enter foreground event.
游戏进入前台运行时触发的事件。
请注意，在 WEB 平台，这个事件不一定会 100% 触发，这完全取决于浏览器的回调行为。
在原生平台，它对应的是应用被切换到前台事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:64](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L64) |



##### EVENT_GAME_INITED

> Event triggered after game inited, at this point all engine objects and game scripts are loaded

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:76](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L76) |



##### EVENT_RENDERER_INITED

> Event triggered after renderer inited, at this point you will be able to use the render context

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:83](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L83) |



##### CONFIG_KEY

> Key of config

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/CCGame.js:97](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L97) |



##### frame

> 游戏画布的外框，cc.container 的父类。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/CCGame.js:135](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L135) |



##### container

> 游戏画布的容器。

| meta | description |
|------|-------------|
| 类型 | HTMLDivElement |
| 定义于 | [cocos2d/core/CCGame.js:142](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L142) |



##### canvas

> 游戏的画布。

| meta | description |
|------|-------------|
| 类型 | HTMLCanvasElement |
| 定义于 | [cocos2d/core/CCGame.js:149](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L149) |



##### config

> 当前的游戏配置，包括：                                                                  <br/>
1. debugMode（debug 模式，但是在浏览器中这个选项会被忽略）                                <br/>
     "debugMode" 各种设置选项的意义。                                                   <br/>
         0 - 没有消息被打印出来。                                                       <br/>
         1 - cc.error，cc.assert，cc.warn，cc.log 将打印在 console 中。                  <br/>
         2 - cc.error，cc.assert，cc.warn 将打印在 console 中。                          <br/>
         3 - cc.error，cc.assert 将打印在 console 中。                                   <br/>
         4 - cc.error，cc.assert，cc.warn，cc.log 将打印在 canvas 中（仅适用于 web 端）。 <br/>
         5 - cc.error，cc.assert，cc.warn 将打印在 canvas 中（仅适用于 web 端）。         <br/>
         6 - cc.error，cc.assert 将打印在 canvas 中（仅适用于 web 端）。                  <br/>
2. showFPS（显示 FPS）                                                            <br/>
     当 showFPS 为 true 的时候界面的左下角将显示 fps 的信息，否则被隐藏。              <br/>
3. exposeClassName                                                           <br/>
     暴露类名让 Chrome DevTools 可以识别，如果开启会稍稍降低类的创建过程的性能，但对对象构造没有影响。 <br/>
4. frameRate (帧率)                                                              <br/>
     “frameRate” 设置想要的帧率你的游戏，但真正的FPS取决于你的游戏实现和运行环境。      <br/>
5. id                                                                            <br/>
     "gameCanvas" Web 页面上的 Canvas Element ID，仅适用于 web 端。                         <br/>
6. renderMode（渲染模式）                                                         <br/>
     “renderMode” 设置渲染器类型，仅适用于 web 端：                              <br/>
         0 - 通过引擎自动选择。                                                     <br/>
         1 - 强制使用 canvas 渲染。
         2 - 强制使用 WebGL 渲染，但是在部分 Android 浏览器中这个选项会被忽略。     <br/>
7. scenes                                                                         <br/>
     “scenes” 当前包中可用场景。                                                   <br/>
<br/>
注意：请不要直接修改这个对象，它不会有任何效果。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/CCGame.js:157](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L157) |






<!-- Method Block -->
#### 方法


##### onStart

当引擎完成启动后的回调函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:219](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L219) |



##### setFrameRate

设置游戏帧率。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:230](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L230) |

###### 参数列表
- `frameRate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### step

执行一帧游戏循环。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:247](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L247) |



##### pause

暂停游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。这点和只暂停游戏逻辑的 cc.director.pause 不同。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:256](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L256) |



##### resume

恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:276](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L276) |



##### isPaused

判断游戏是否暂停。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCGame.js:293](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L293) |



##### restart

重新开始游戏

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:303](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L303) |



##### end

退出游戏

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:330](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L330) |



##### prepare

准备引擎，请不要直接调用这个函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:340](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L340) |

###### 参数列表
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### run

运行游戏，并且指定引擎配置和 onStart 的回调。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:440](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L440) |

###### 参数列表
- `config` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Pass configuration object or onStart function
- `onStart` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> function to be executed after game initialized


##### addPersistRootNode

声明常驻根节点，该节点不会被在场景切换中被销毁。<br/>
目标节点必须位于为层级的根节点，否则无效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:464](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L464) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be made persistent


##### removePersistRootNode

取消常驻根节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:500](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L500) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be removed from persistent node list


##### isPersistRootNode

检查节点是否是常驻根节点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCGame.js:516](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCGame.js#L516) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be checked


##### on

注册事件目标的特定事件类型回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/event/event-target.js:218](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L218) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:275](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L275) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### 示例

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
| 定义于 | [cocos2d/core/event/event-target.js:330](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L330) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:352](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L352) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

分发事件到事件流中。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:397](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L397) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:411](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/event/event-target.js#L411) |

###### 参数列表
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs



