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
  - [`EVENT_BEFORE_VISIT`](#eventbeforevisit) `String` 这个事件从 v2.0 开始被废弃，请直接使用 cc.Director.EVENT_BEFORE_DRAW
  - [`EVENT_AFTER_VISIT`](#eventaftervisit) `String` 这个事件从 v2.0 开始被废弃，请直接使用 cc.Director.EVENT_BEFORE_DRAW
  - [`EVENT_BEFORE_DRAW`](#eventbeforedraw) `String` 渲染过程之前所触发的事件。
  - [`EVENT_AFTER_DRAW`](#eventafterdraw) `String` 渲染过程之后所触发的事件。
  - [`PROJECTION_2D`](#projection2d) `Number` Constant for 2D projection (orthogonal projection)
  - [`PROJECTION_3D`](#projection3d) `Number` Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
  - [`PROJECTION_CUSTOM`](#projectioncustom) `Number` Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
  - [`PROJECTION_DEFAULT`](#projectiondefault) `Number` Constant for default projection of cc.Director, default projection is 2D projection



##### 方法

  - [`convertToGL`](#converttogl) 将触摸点的屏幕坐标转换为 WebGL View 下的坐标。
  - [`convertToUI`](#converttoui) 将触摸点的 WebGL View 坐标转换为屏幕坐标。
  - [`end`](#end) End the life of director in the next frame
  - [`getWinSize`](#getwinsize) 获取视图的大小，以点为单位。
  - [`getWinSizeInPixels`](#getwinsizeinpixels) 获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
  - [`pause`](#pause) 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
  - [`runSceneImmediate`](#runsceneimmediate) 立刻切换指定场景。
  - [`runScene`](#runscene) 运行指定场景。
  - [`loadScene`](#loadscene) 通过场景名称进行加载场景。
  - [`preloadScene`](#preloadscene) 预加载场景，你可以在任何时候调用这个方法。
  - [`_loadSceneByUuid`](#loadscenebyuuid) Loads the scene by its uuid.
  - [`resume`](#resume) 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。
  - [`setDepthTest`](#setdepthtest) 启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。
  - [`setClearColor`](#setclearcolor) 设置场景的默认擦除颜色。
  - [`getRunningScene`](#getrunningscene) 获取当前逻辑场景。
  - [`getScene`](#getscene) 获取当前逻辑场景。
  - [`getAnimationInterval`](#getanimationinterval) 获取单位帧执行时间。
  - [`setAnimationInterval`](#setanimationinterval) Sets animation interval, this doesn't control the main loop....
  - [`getDeltaTime`](#getdeltatime) 获取上一帧的增量时间。
  - [`getTotalFrames`](#gettotalframes) 获取 director 启动以来游戏运行的总帧数。
  - [`isPaused`](#ispaused) 是否处于暂停状态。
  - [`getScheduler`](#getscheduler) 获取和 director 相关联的 cc.Scheduler。
  - [`setScheduler`](#setscheduler) 设置和 director 相关联的 cc.Scheduler。
  - [`getActionManager`](#getactionmanager) 获取和 director 相关联的 cc.ActionManager（动作管理器）。
  - [`setActionManager`](#setactionmanager) 设置和 director 相关联的 cc.ActionManager（动作管理器）。
  - [`getCollisionManager`](#getcollisionmanager) 获取和 director 相关联的 cc.CollisionManager （碰撞管理器）。
  - [`getPhysicsManager`](#getphysicsmanager) 返回与 director 相关联的 cc.PhysicsManager （物理管理器）。
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`emit`](#emit) 通过事件名发送自定义事件
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件



##### 事件

  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) 加载新场景之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) 运行新场景之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) 每个帧的开始时所触发的事件。
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) 将在引擎和组件 “update” 逻辑之后所触发的事件。
  - [`cc.Director.EVENT_BEFORE_DRAW`](#cc.director.eventbeforedraw) 渲染过程之前所触发的事件。
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) 渲染过程之后所触发的事件。


### Details


#### 属性（properties）


##### EVENT_PROJECTION_CHANGED

> cc.Director 投影变化的事件。从 v2.0 开始这个事件不会再被触发

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:980](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L980) |
| 废弃（Deprecated） | since v2.0 |



##### EVENT_BEFORE_SCENE_LOADING

> 加载新场景之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:996](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L996) |



##### EVENT_BEFORE_SCENE_LAUNCH

> 运行新场景之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1011](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1011) |



##### EVENT_AFTER_SCENE_LAUNCH

> 运行新场景之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1026](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1026) |



##### EVENT_BEFORE_UPDATE

> 每个帧的开始时所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1040](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1040) |



##### EVENT_AFTER_UPDATE

> 将在引擎和组件 “update” 逻辑之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1054](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1054) |



##### EVENT_BEFORE_VISIT

> 这个事件从 v2.0 开始被废弃，请直接使用 cc.Director.EVENT_BEFORE_DRAW

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1063](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1063) |
| 废弃（Deprecated） | since v2.0 |



##### EVENT_AFTER_VISIT

> 这个事件从 v2.0 开始被废弃，请直接使用 cc.Director.EVENT_BEFORE_DRAW

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1073](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1073) |
| 废弃（Deprecated） | since v2.0 |



##### EVENT_BEFORE_DRAW

> 渲染过程之前所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1088](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1088) |



##### EVENT_AFTER_DRAW

> 渲染过程之后所触发的事件。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1102) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1113](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1113) |
| 废弃（Deprecated） | since v2.0 |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1123) |
| 废弃（Deprecated） | since v2.0 |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1133](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1133) |
| 废弃（Deprecated） | since v2.0 |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCDirector.js:1143](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1143) |
| 废弃（Deprecated） | since v2.0 |






<!-- Method Block -->
#### 方法


##### convertToGL

将触摸点的屏幕坐标转换为 WebGL View 下的坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCDirector.js:230](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L230) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `uiPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### convertToUI

将触摸点的 WebGL View 坐标转换为屏幕坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCDirector.js:252](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L252) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### end

End the life of director in the next frame

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:281](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L281) |



##### getWinSize

获取视图的大小，以点为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/CCDirector.js:289](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L289) |
| 废弃（Deprecated） | since v2.0 |



##### getWinSizeInPixels

获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
如果要获取屏幕物理分辨率，需要用 cc.view.getFrameSize()）

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/CCDirector.js:302](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L302) |
| 废弃（Deprecated） | since v2.0 |



##### pause

暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。
如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 Game.pause。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:319](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L319) |



##### runSceneImmediate

立刻切换指定场景。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:403](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L403) |

###### 参数列表
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

运行指定场景。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:482](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L482) |

###### 参数列表
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

通过场景名称进行加载场景。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCDirector.js:539](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L539) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.


##### preloadScene

预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `cc.director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。
就算预加载还没完成，你也可以直接调用 `cc.director.loadScene`，加载完成后场景就会启动。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:567](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L567) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called when the load progression change.
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline
- `onLoaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:613](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L613) |

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
| 定义于 | [cocos2d/core/CCDirector.js:676](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L676) |



##### setDepthTest

启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:695](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L695) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

设置场景的默认擦除颜色。<br/>
支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 cc.macro.ENABLE_TRANSPARENT_CANVAS。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:711](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L711) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### getRunningScene

获取当前逻辑场景。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| 定义于 | [cocos2d/core/CCDirector.js:729](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L729) |
| 废弃（Deprecated） | since v2.0 |



##### getScene

获取当前逻辑场景。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| 定义于 | [cocos2d/core/CCDirector.js:741](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L741) |


##### 示例

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

获取单位帧执行时间。请使用 Game.setFrameRate 来控制游戏帧率。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/CCDirector.js:754](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L754) |
| 废弃（Deprecated） | since v2.0 |



##### setAnimationInterval

Sets animation interval, this doesn't control the main loop.
To control the game's frame rate overall, please use Game.setFrameRate

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:765](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L765) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The animation interval desired.


##### getDeltaTime

获取上一帧的增量时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/CCDirector.js:776](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L776) |



##### getTotalFrames

获取 director 启动以来游戏运行的总帧数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/CCDirector.js:786](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L786) |



##### isPaused

是否处于暂停状态。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCDirector.js:796](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L796) |



##### getScheduler

获取和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| 定义于 | [cocos2d/core/CCDirector.js:806](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L806) |



##### setScheduler

设置和 director 相关联的 cc.Scheduler。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:816](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L816) |

###### 参数列表
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

获取和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| 定义于 | [cocos2d/core/CCDirector.js:828](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L828) |



##### setActionManager

设置和 director 相关联的 cc.ActionManager（动作管理器）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCDirector.js:837](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L837) |

###### 参数列表
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

获取和 director 相关联的 cc.CollisionManager （碰撞管理器）。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| 定义于 | [cocos2d/core/CCDirector.js:863](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L863) |



##### getPhysicsManager

返回与 director 相关联的 cc.PhysicsManager （物理管理器）。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| 定义于 | [cocos2d/core/CCDirector.js:873](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L873) |



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




#### 事件

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




### `cc.Director.EVENT_BEFORE_DRAW` Event



模块: [cc](../modules/cc.md)


渲染过程之前所触发的事件。


### 索引







### Details




### `cc.Director.EVENT_AFTER_DRAW` Event



模块: [cc](../modules/cc.md)


渲染过程之后所触发的事件。


### 索引







### Details





