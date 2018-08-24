## `game` 类型

继承于 [`EventTarget`](EventTarget.md)


模块: [cc](../modules/cc.md)


包含游戏主体信息并负责驱动游戏的游戏对象。


### 索引

##### 属性（properties）

  - [`EVENT_HIDE`](#eventhide) `String` 游戏进入后台时触发的事件。
  - [`EVENT_SHOW`](#eventshow) `String` 游戏进入前台运行时触发的事件。
  - [`EVENT_GAME_INITED`](#eventgameinited) `String` Event triggered after game inited, at this point all engine objects and game scripts are loaded
  - [`EVENT_ENGINE_INITED`](#eventengineinited) `String` Event triggered after engine inited, at this point you will be able to use all engine classes....
  - [`RENDER_TYPE_CANVAS`](#rendertypecanvas) `Number` Web Canvas 2d API as renderer backend
  - [`RENDER_TYPE_WEBGL`](#rendertypewebgl) `Number` WebGL API as renderer backend
  - [`RENDER_TYPE_OPENGL`](#rendertypeopengl) `Number` OpenGL API as renderer backend
  - [`frame`](#frame) `Object` 游戏画布的外框，container 的父容器。
  - [`container`](#container) `HTMLDivElement` 游戏画布的容器。
  - [`canvas`](#canvas) `HTMLCanvasElement` 游戏的画布。
  - [`renderType`](#rendertype) `Number` 游戏的渲染器类型。
  - [`config`](#config) `Object` "debugMode" 各种设置选项的意义。
  - [`game`](#game) `Game` 



##### 方法

  - [`onStart`](#onstart) 当引擎完成启动后的回调函数。
  - [`setFrameRate`](#setframerate) 设置游戏帧率。
  - [`getFrameRate`](#getframerate) 获取设置的游戏帧率（不等同于实际帧率）。
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
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`emit`](#emit) 通过事件名发送自定义事件
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件



### Details


#### 属性（properties）


##### EVENT_HIDE

> 游戏进入后台时触发的事件。
请注意，在 WEB 平台，这个事件不一定会 100% 触发，这完全取决于浏览器的回调行为。
在原生平台，它对应的是应用被切换到后台事件，下拉菜单和上拉状态栏等不一定会触发这个事件，这取决于系统行为。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:49](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L49) |

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
| 定义于 | [cocos2d/core/CCGame.js:66](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L66) |



##### EVENT_GAME_INITED

> Event triggered after game inited, at this point all engine objects and game scripts are loaded

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:79](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L79) |



##### EVENT_ENGINE_INITED

> Event triggered after engine inited, at this point you will be able to use all engine classes.
It was defined as EVENT_RENDERER_INITED in cocos creator v1.x and renamed in v2.0

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCGame.js:87](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L87) |



##### RENDER_TYPE_CANVAS

> Web Canvas 2d API as renderer backend

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCGame.js:98](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L98) |



##### RENDER_TYPE_WEBGL

> WebGL API as renderer backend

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCGame.js:105](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L105) |



##### RENDER_TYPE_OPENGL

> OpenGL API as renderer backend

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCGame.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L112) |



##### frame

> 游戏画布的外框，container 的父容器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/CCGame.js:139](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L139) |



##### container

> 游戏画布的容器。

| meta | description |
|------|-------------|
| 类型 | HTMLDivElement |
| 定义于 | [cocos2d/core/CCGame.js:146](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L146) |



##### canvas

> 游戏的画布。

| meta | description |
|------|-------------|
| 类型 | HTMLCanvasElement |
| 定义于 | [cocos2d/core/CCGame.js:153](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L153) |



##### renderType

> 游戏的渲染器类型。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCGame.js:161](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L161) |



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
| 定义于 | [cocos2d/core/CCGame.js:169](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L169) |



##### game

> 

| meta | description |
|------|-------------|
| 类型 | Game |
| 定义于 | [cocos2d/core/CCGame.js:845](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L845) |






<!-- Method Block -->
#### 方法


##### onStart

当引擎完成启动后的回调函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:231](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L231) |



##### setFrameRate

设置游戏帧率。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:242](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L242) |

###### 参数列表
- `frameRate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFrameRate

获取设置的游戏帧率（不等同于实际帧率）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/CCGame.js:259](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L259) |



##### step

执行一帧游戏循环。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:269](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L269) |



##### pause

暂停游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。这点和只暂停游戏逻辑的 cc.director.pause 不同。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:278](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L278) |



##### resume

恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:298](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L298) |



##### isPaused

判断游戏是否暂停。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCGame.js:315](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L315) |



##### restart

重新开始游戏

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:325](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L325) |



##### end

退出游戏

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:352](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L352) |



##### prepare

准备引擎，请不要直接调用这个函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:415](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L415) |

###### 参数列表
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### run

运行游戏，并且指定引擎配置和 onStart 的回调。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:442](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L442) |

###### 参数列表
- `config` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Pass configuration object or onStart function
- `onStart` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> function to be executed after game initialized


##### addPersistRootNode

声明常驻根节点，该节点不会被在场景切换中被销毁。<br/>
目标节点必须位于为层级的根节点，否则无效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:456](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L456) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be made persistent


##### removePersistRootNode

取消常驻根节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCGame.js:492](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L492) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be removed from persistent node list


##### isPersistRootNode

检查节点是否是常驻根节点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCGame.js:506](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L506) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be checked


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



