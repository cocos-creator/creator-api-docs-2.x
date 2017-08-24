## `Director` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)




<p>
    注意：用 cc.director 代替 cc.Director。<br/>
    cc.director 一个管理你的游戏的逻辑流程的单例对象。<br/>
    由于 cc.director 是一个单例，你不需要调用任何构造函数或创建函数，<br/>
    使用它的标准方法是通过调用：<br/>
      - cc.director.methodName();
    <br/>
    它创建和处理主窗口并且管理什么时候执行场景。<br/>
    <br/>
    cc.director 还负责：<br/>
     - 初始化 OpenGL 环境。<br/>
     - 设置OpenGL像素格式。(默认是 RGB565)<br/>
     - 设置OpenGL缓冲区深度 (默认是 0-bit)<br/>
     - 设置空白场景的颜色 (默认是 黑色)<br/>
     - 设置投影 (默认是 3D)<br/>
     - 设置方向 (默认是 Portrait)<br/>
   <br/>
   cc.director 设置了 OpenGL 默认环境 <br/>
     - GL_TEXTURE_2D   启用。<br/>
     - GL_VERTEX_ARRAY 启用。<br/>
     - GL_COLOR_ARRAY  启用。<br/>
     - GL_TEXTURE_COORD_ARRAY 启用。<br/>
</p>
<p>
  cc.director 也同步定时器与显示器的刷新速率。
  <br/>
  特点和局限性: <br/>
     - 将计时器 & 渲染与显示器的刷新频率同步。<br/>
     - 只支持动画的间隔 1/60 1/30 & 1/15。<br/>
</p>

### Index



##### Methods

  - [`convertToUI`](#converttoui) 将触摸点的 WebGL View 坐标转换为屏幕坐标。
  - [`getWinSize`](#getwinsize) 获取视图的大小，以点为单位。
  - [`getWinSizeInPixels`](#getwinsizeinpixels) 获取视图大小，以像素为单位。
  - [`getVisibleSize`](#getvisiblesize) 获取运行场景的可见大小。
  - [`getVisibleOrigin`](#getvisibleorigin) 获取视图在游戏内容中的坐标原点。
  - [`pause`](#pause) 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 Game.pause。
  - [`runSceneImmediate`](#runsceneimmediate) 立刻切换指定场景。
  - [`runScene`](#runscene) 运行指定场景。
  - [`loadScene`](#loadscene) 通过场景名称进行加载场景。
  - [`preloadScene`](#preloadscene) 预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `cc.director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。
就算预加载还没完成，你也可以直接调用 `cc.director.loadScene`，加载完成后场景就会启动。
  - [`_loadSceneByUuid`](#loadscenebyuuid) Loads the scene by its uuid.
  - [`resume`](#resume) 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。
  - [`setDepthTest`](#setdepthtest) 启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。
  - [`setClearColor`](#setclearcolor) 设置场景的默认擦除颜色。<br/>
支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 cc.macro.ENABLE_TRANSPARENT_CANVAS。
  - [`setProjection`](#setprojection) 设置 OpenGL 投影。
  - [`setViewport`](#setviewport) 设置视窗（请不要主动调用这个接口，除非你知道你在做什么）。
  - [`getProjection`](#getprojection) 获取 OpenGL 投影。
  - [`setAlphaBlending`](#setalphablending) 启用/禁用 透明度融合。
  - [`isSendCleanupToScene`](#issendcleanuptoscene) 更换场景时是否接收清理消息。<br>
如果新场景是采用 push 方式进入的，那么旧的场景将不会接收到 “cleanup” 消息。<br/>
如果新场景取代旧的场景，它将会接收到 “cleanup” 消息。</br>
  - [`getRunningScene`](#getrunningscene) 获取当前运行的渲染场景，一般情况下，你不会需要用到这个接口，请使用 getScene。
  - [`getScene`](#getscene) 获取当前逻辑场景。
  - [`getAnimationInterval`](#getanimationinterval) 获取单位帧执行时间。
  - [`isDisplayStats`](#isdisplaystats) 获取是否显示 FPS 信息。
  - [`setDisplayStats`](#setdisplaystats) 设置是否在左下角显示 FPS。
  - [`isNextDeltaTimeZero`](#isnextdeltatimezero) 返回下一个 “delta time” 是否等于零。
  - [`isPaused`](#ispaused) 是否处于暂停状态。
  - [`getTotalFrames`](#gettotalframes) 获取 director 启动以来游戏运行的总帧数。
  - [`getScheduler`](#getscheduler) 获取和 director 相关联的 cc.Scheduler。
  - [`setScheduler`](#setscheduler) 设置和 director 相关联的 cc.Scheduler。
  - [`getActionManager`](#getactionmanager) 获取和 director 相关联的 cc.ActionManager（动作管理器）。
  - [`setActionManager`](#setactionmanager) 设置和 director 相关联的 cc.ActionManager（动作管理器）。
  - [`getCollisionManager`](#getcollisionmanager) Returns the cc.CollisionManager associated with this director.
  - [`getPhysicsManager`](#getphysicsmanager) Returns the cc.PhysicsManager associated with this director.
  - [`getDeltaTime`](#getdeltatime) 获取上一帧的 “delta time”。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`emit`](#emit) 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。



##### Events

  - [`cc.Director.EVENT_PROJECTION_CHANGED`](#cc.director.eventprojectionchanged) cc.Director 投影变化的事件。
  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) 加载新场景之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) 运行新场景之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) 每个帧的开始时所触发的事件。
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) 将在引擎和组件 “update” 逻辑之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_VISIT`](#cc.director.eventbeforevisit) 访问渲染场景树之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_VISIT`](#cc.director.eventaftervisit) 访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) 渲染过程之后所触发的事件。


### Details




<!-- Method Block -->
#### Methods


##### convertToUI

将触摸点的 WebGL View 坐标转换为屏幕坐标。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:268](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L268) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- glPoint <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWinSize

获取视图的大小，以点为单位。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:333](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L333) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getWinSizeInPixels

获取视图大小，以像素为单位。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:345](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L345) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getVisibleSize

获取运行场景的可见大小。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:363](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L363) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getVisibleOrigin

获取视图在游戏内容中的坐标原点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:371](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L371) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### pause

暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 Game.pause。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:387](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L387) |



##### runSceneImmediate

立刻切换指定场景。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:531](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L531) |

###### Parameters
- scene <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- onBeforeLoadScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

运行指定场景。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:640](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L640) |

###### Parameters
- scene <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- onBeforeLoadScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

通过场景名称进行加载场景。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:697](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L697) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.


##### preloadScene

预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `cc.director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。
就算预加载还没完成，你也可以直接调用 `cc.director.loadScene`，加载完成后场景就会启动。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:745](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L745) |

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- onLoaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L780) |

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the uuid of the scene asset to load
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- onUnloaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- dontRunScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Just download and initialize the scene but will not launch it,
                                  only take effect in the Editor.


##### resume

恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:843](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L843) |



##### setDepthTest

启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:874](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L874) |

###### Parameters
- on <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

设置场景的默认擦除颜色。<br/>
支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 cc.macro.ENABLE_TRANSPARENT_CANVAS。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:884](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L884) |

###### Parameters
- clearColor <a href="../classes/Color.html" class="crosslink">Color</a> 


##### setProjection

设置 OpenGL 投影。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:970](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L970) |

###### Parameters
- projection <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setViewport

设置视窗（请不要主动调用这个接口，除非你知道你在做什么）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:980](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L980) |



##### getProjection

获取 OpenGL 投影。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1000](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1000) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setAlphaBlending

启用/禁用 透明度融合。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1010](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1010) |

###### Parameters
- on <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isSendCleanupToScene

更换场景时是否接收清理消息。<br>
如果新场景是采用 push 方式进入的，那么旧的场景将不会接收到 “cleanup” 消息。<br/>
如果新场景取代旧的场景，它将会接收到 “cleanup” 消息。</br>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1020](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1020) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getRunningScene

获取当前运行的渲染场景，一般情况下，你不会需要用到这个接口，请使用 getScene。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1036](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1036) |
| Return 		 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 



##### getScene

获取当前逻辑场景。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1049](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1049) |
| Return 		 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 


##### Example

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

获取单位帧执行时间。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1062](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1062) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### isDisplayStats

获取是否显示 FPS 信息。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1072](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1072) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### setDisplayStats

设置是否在左下角显示 FPS。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1082](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1082) |

###### Parameters
- displayStats <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isNextDeltaTimeZero

返回下一个 “delta time” 是否等于零。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1095](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1095) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### isPaused

是否处于暂停状态。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1105](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1105) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getTotalFrames

获取 director 启动以来游戏运行的总帧数。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1115](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1115) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getScheduler

获取和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1169](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1169) |
| Return 		 | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 



##### setScheduler

设置和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1179) |

###### Parameters
- scheduler <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

获取和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1191](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1191) |
| Return 		 | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 



##### setActionManager

设置和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1200) |

###### Parameters
- actionManager <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1226](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1226) |
| Return 		 | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1235](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1235) |
| Return 		 | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 



##### getDeltaTime

获取上一帧的 “delta time”。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1244](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1244) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



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




#### Events

### `cc.Director.EVENT_PROJECTION_CHANGED` Event



Module: [cc](../modules/cc.md)




cc.Director 投影变化的事件。

### Index







### Details




### `cc.Director.EVENT_BEFORE_SCENE_LOADING` Event



Module: [cc](../modules/cc.md)




加载新场景之前所触发的事件。

### Index







### Details




### `cc.Director.EVENT_AFTER_SCENE_LAUNCH` Event



Module: [cc](../modules/cc.md)




运行新场景之后所触发的事件。

### Index







### Details




### `cc.Director.EVENT_BEFORE_UPDATE` Event



Module: [cc](../modules/cc.md)




每个帧的开始时所触发的事件。

### Index







### Details




### `cc.Director.EVENT_AFTER_UPDATE` Event



Module: [cc](../modules/cc.md)




将在引擎和组件 “update” 逻辑之后所触发的事件。

### Index







### Details




### `cc.Director.EVENT_BEFORE_VISIT` Event



Module: [cc](../modules/cc.md)




访问渲染场景树之前所触发的事件。

### Index







### Details




### `cc.Director.EVENT_AFTER_VISIT` Event



Module: [cc](../modules/cc.md)




访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。

### Index







### Details




### `cc.Director.EVENT_AFTER_DRAW` Event



Module: [cc](../modules/cc.md)




渲染过程之后所触发的事件。

### Index







### Details





