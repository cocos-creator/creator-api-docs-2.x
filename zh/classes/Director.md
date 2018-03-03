## `Director` 类型

继承于 [`EventTarget`](EventTarget.md)


模块: [cc](../modules/cc.md)


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


### 索引

##### 属性（properties）

  - [`EVENT_PROJECTION_CHANGED`](#eventprojectionchanged) `String` cc.Director 投影变化的事件。
  - [`EVENT_BEFORE_SCENE_LOADING`](#eventbeforesceneloading) `String` 加载新场景之前所触发的事件。
  - [`EVENT_BEFORE_SCENE_LAUNCH`](#eventbeforescenelaunch) `String` 运行新场景之前所触发的事件。
  - [`EVENT_AFTER_SCENE_LAUNCH`](#eventafterscenelaunch) `String` 运行新场景之后所触发的事件。
  - [`EVENT_BEFORE_UPDATE`](#eventbeforeupdate) `String` 每个帧的开始时所触发的事件。
  - [`EVENT_AFTER_UPDATE`](#eventafterupdate) `String` 将在引擎和组件 “update” 逻辑之后所触发的事件。
  - [`EVENT_BEFORE_VISIT`](#eventbeforevisit) `String` 访问渲染场景树之前所触发的事件。
  - [`EVENT_AFTER_VISIT`](#eventaftervisit) `String` 访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。
  - [`EVENT_AFTER_DRAW`](#eventafterdraw) `String` 渲染过程之后所触发的事件。
  - [`PROJECTION_2D`](#projection2d) `Number` Constant for 2D projection (orthogonal projection)
  - [`PROJECTION_3D`](#projection3d) `Number` Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
  - [`PROJECTION_CUSTOM`](#projectioncustom) `Number` Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
  - [`PROJECTION_DEFAULT`](#projectiondefault) `Number` Constant for default projection of cc.Director, default projection is 2D projection



##### 方法

  - [`convertToUI`](#converttoui) 将触摸点的 WebGL View 坐标转换为屏幕坐标。
  - [`getWinSize`](#getwinsize) 获取视图的大小，以点为单位。
  - [`getWinSizeInPixels`](#getwinsizeinpixels) 获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
如果要获取屏幕物理分辨率，需要用 cc.view.getFrameSize()）
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



##### 事件

  - [`cc.Director.EVENT_PROJECTION_CHANGED`](#cc.director.eventprojectionchanged) cc.Director 投影变化的事件。
  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) 加载新场景之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) 运行新场景之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) 每个帧的开始时所触发的事件。
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) 将在引擎和组件 “update” 逻辑之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_VISIT`](#cc.director.eventbeforevisit) 访问渲染场景树之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_VISIT`](#cc.director.eventaftervisit) 访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) 渲染过程之后所触发的事件。


### Details


#### 属性（properties）


##### EVENT_PROJECTION_CHANGED

> cc.Director 投影变化的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1275) |



##### EVENT_BEFORE_SCENE_LOADING

> 加载新场景之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1291](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1291) |



##### EVENT_BEFORE_SCENE_LAUNCH

> 运行新场景之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1307](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1307) |



##### EVENT_AFTER_SCENE_LAUNCH

> 运行新场景之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1323) |



##### EVENT_BEFORE_UPDATE

> 每个帧的开始时所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1338](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1338) |



##### EVENT_AFTER_UPDATE

> 将在引擎和组件 “update” 逻辑之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1353) |



##### EVENT_BEFORE_VISIT

> 访问渲染场景树之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1368](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1368) |



##### EVENT_AFTER_VISIT

> 访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1386](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1386) |



##### EVENT_AFTER_DRAW

> 渲染过程之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1404](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1404) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1567](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1567) |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1576](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1576) |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1585](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1585) |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1594](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1594) |






<!-- Method Block -->
#### 方法


##### convertToUI

将触摸点的 WebGL View 坐标转换为屏幕坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:271](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L271) |

###### 参数列表
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWinSize

获取视图的大小，以点为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L336) |



##### getWinSizeInPixels

获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
如果要获取屏幕物理分辨率，需要用 cc.view.getFrameSize()）

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:348](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L348) |



##### getVisibleSize

获取运行场景的可见大小。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L370) |



##### getVisibleOrigin

获取视图在游戏内容中的坐标原点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:378](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L378) |



##### pause

暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 Game.pause。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:394](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L394) |



##### runSceneImmediate

立刻切换指定场景。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:538](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L538) |

###### 参数列表
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

运行指定场景。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:647](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L647) |

###### 参数列表
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

通过场景名称进行加载场景。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L704) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.


##### preloadScene

预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `cc.director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。
就算预加载还没完成，你也可以直接调用 `cc.director.loadScene`，加载完成后场景就会启动。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:752](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L752) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `onLoaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:787](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L787) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the uuid of the scene asset to load
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `onUnloaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `dontRunScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Just download and initialize the scene but will not launch it,
                                  only take effect in the Editor.


##### resume

恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:850](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L850) |



##### setDepthTest

启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:881](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L881) |

###### 参数列表
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

设置场景的默认擦除颜色。<br/>
支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 cc.macro.ENABLE_TRANSPARENT_CANVAS。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:891](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L891) |

###### 参数列表
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### setProjection

设置 OpenGL 投影。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:977](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L977) |

###### 参数列表
- `projection` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setViewport

设置视窗（请不要主动调用这个接口，除非你知道你在做什么）。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:987](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L987) |



##### getProjection

获取 OpenGL 投影。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1007](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1007) |



##### setAlphaBlending

启用/禁用 透明度融合。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1017](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1017) |

###### 参数列表
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isSendCleanupToScene

更换场景时是否接收清理消息。<br>
如果新场景是采用 push 方式进入的，那么旧的场景将不会接收到 “cleanup” 消息。<br/>
如果新场景取代旧的场景，它将会接收到 “cleanup” 消息。</br>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1027](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1027) |



##### getRunningScene

获取当前运行的渲染场景，一般情况下，你不会需要用到这个接口，请使用 getScene。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1043](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1043) |



##### getScene

获取当前逻辑场景。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1056](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1056) |


##### 示例

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

获取单位帧执行时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1069](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1069) |



##### isDisplayStats

获取是否显示 FPS 信息。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1079](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1079) |



##### setDisplayStats

设置是否在左下角显示 FPS。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1089](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1089) |

###### 参数列表
- `displayStats` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isNextDeltaTimeZero

返回下一个 “delta time” 是否等于零。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1102](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1102) |



##### isPaused

是否处于暂停状态。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1112](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1112) |



##### getTotalFrames

获取 director 启动以来游戏运行的总帧数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1122) |



##### getScheduler

获取和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1176](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1176) |



##### setScheduler

设置和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1186) |

###### 参数列表
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

获取和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1198](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1198) |



##### setActionManager

设置和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1207](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1207) |

###### 参数列表
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1233](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1233) |



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1242](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1242) |



##### getDeltaTime

获取上一帧的 “delta time”。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1251](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1251) |



##### on

注册事件目标的特定事件类型回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:217](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L217) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:274](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L274) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:329](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L329) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L351) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:396](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L396) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L410) |

###### 参数列表
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs




#### 事件

### `cc.Director.EVENT_PROJECTION_CHANGED` Event



模块: [cc](../modules/cc.md)


cc.Director 投影变化的事件。


### 索引







### Details




### `cc.Director.EVENT_BEFORE_SCENE_LOADING` Event



模块: [cc](../modules/cc.md)


加载新场景之前所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_AFTER_SCENE_LAUNCH` Event



模块: [cc](../modules/cc.md)


运行新场景之后所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_BEFORE_UPDATE` Event



模块: [cc](../modules/cc.md)


每个帧的开始时所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_AFTER_UPDATE` Event



模块: [cc](../modules/cc.md)


将在引擎和组件 “update” 逻辑之后所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_BEFORE_VISIT` Event



模块: [cc](../modules/cc.md)


访问渲染场景树之前所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_AFTER_VISIT` Event



模块: [cc](../modules/cc.md)


访问渲染场景图之后所触发的事件，渲染队列已准备就绪，但在这一时刻还没有呈现在画布上。


### 索引







### Details




### `cc.Director.EVENT_AFTER_DRAW` Event



模块: [cc](../modules/cc.md)


渲染过程之后所触发的事件。


### 索引







### Details





