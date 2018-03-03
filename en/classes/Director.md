## `Director` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)


<p>
   ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
   cc.director is a singleton object which manage your game's logic flow.<br/>
   Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
   the standard way to use it is by calling:<br/>
     - cc.director.methodName(); <br/>

   It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
   <br/>
   The cc.director is also responsible for:<br/>
     - initializing the OpenGL context<br/>
     - setting the OpenGL pixel format (default on is RGB565)<br/>
     - setting the OpenGL buffer depth (default on is 0-bit)<br/>
     - setting the color for clear screen (default one is BLACK)<br/>
     - setting the projection (default one is 3D)<br/>
     - setting the orientation (default one is Portrait)<br/>
     <br/>
   <br/>
   The cc.director also sets the default OpenGL context:<br/>
     - GL_TEXTURE_2D is enabled<br/>
     - GL_VERTEX_ARRAY is enabled<br/>
     - GL_COLOR_ARRAY is enabled<br/>
     - GL_TEXTURE_COORD_ARRAY is enabled<br/>
</p>
<p>
  cc.director also synchronizes timers with the refresh rate of the display.<br/>
  Features and Limitations:<br/>
     - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
     - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
</p>


### Index

##### Properties

  - [`EVENT_PROJECTION_CHANGED`](#eventprojectionchanged) `String` The event projection changed of cc.Director.
  - [`EVENT_BEFORE_SCENE_LOADING`](#eventbeforesceneloading) `String` The event which will be triggered before loading a new scene.
  - [`EVENT_BEFORE_SCENE_LAUNCH`](#eventbeforescenelaunch) `String` The event which will be triggered before launching a new scene.
  - [`EVENT_AFTER_SCENE_LAUNCH`](#eventafterscenelaunch) `String` The event which will be triggered after launching a new scene.
  - [`EVENT_BEFORE_UPDATE`](#eventbeforeupdate) `String` The event which will be triggered at the beginning of every frame.
  - [`EVENT_AFTER_UPDATE`](#eventafterupdate) `String` The event which will be triggered after engine and components update logic.
  - [`EVENT_BEFORE_VISIT`](#eventbeforevisit) `String` The event which will be triggered before visiting the rendering scene graph.
  - [`EVENT_AFTER_VISIT`](#eventaftervisit) `String` The event which will be triggered after visiting the rendering scene graph,
the render queue is ready but not rendered at this point.
  - [`EVENT_AFTER_DRAW`](#eventafterdraw) `String` The event which will be triggered after the rendering process.
  - [`PROJECTION_2D`](#projection2d) `Number` Constant for 2D projection (orthogonal projection)
  - [`PROJECTION_3D`](#projection3d) `Number` Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
  - [`PROJECTION_CUSTOM`](#projectioncustom) `Number` Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
  - [`PROJECTION_DEFAULT`](#projectiondefault) `Number` Constant for default projection of cc.Director, default projection is 2D projection



##### Methods

  - [`convertToUI`](#converttoui) Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.
  - [`getWinSize`](#getwinsize) Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.
  - [`getWinSizeInPixels`](#getwinsizeinpixels) Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use cc.view.getFrameSize())
  - [`getVisibleSize`](#getvisiblesize) Returns the visible size of the running scene.
  - [`getVisibleOrigin`](#getvisibleorigin) Returns the visible origin of the running scene.
  - [`pause`](#pause) Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause
  - [`runSceneImmediate`](#runsceneimmediate) Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.
  - [`runScene`](#runscene) Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.
  - [`loadScene`](#loadscene) Loads the scene by its name.
  - [`preloadScene`](#preloadscene) Preloads the scene to reduces loading time. You can call this method at any time you want.
After calling this method, you still need to launch the scene by `cc.director.loadScene`.
It will be totally fine to call `cc.director.loadScene` at any time even if the preloading is not
yet finished, the scene will be launched after loaded automatically.
  - [`_loadSceneByUuid`](#loadscenebyuuid) Loads the scene by its uuid.
  - [`resume`](#resume) Resume game logic execution after pause, if the current scene is not paused, nothing will happen.
  - [`setDepthTest`](#setdepthtest) Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
  - [`setClearColor`](#setclearcolor) Set color for clear screen.<br/>
(Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js)
  - [`setProjection`](#setprojection) Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
  - [`setViewport`](#setviewport) Update the view port.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
  - [`getProjection`](#getprojection) Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
  - [`setAlphaBlending`](#setalphablending) Enables/disables OpenGL alpha blending.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
  - [`isSendCleanupToScene`](#issendcleanuptoscene) Returns whether or not the replaced scene will receive the cleanup message.<br/>
If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
If the new scene replaces the old one, the it will receive the "cleanup" message.
  - [`getRunningScene`](#getrunningscene) Returns current render Scene, normally you will never need to use this API.
In most case, you probably want to use `getScene` instead.
  - [`getScene`](#getscene) Returns current logic Scene.
  - [`getAnimationInterval`](#getanimationinterval) Returns the FPS value.
  - [`isDisplayStats`](#isdisplaystats) Returns whether or not to display the FPS informations.
  - [`setDisplayStats`](#setdisplaystats) Sets whether display the FPS on the bottom-left corner.
  - [`isNextDeltaTimeZero`](#isnextdeltatimezero) Returns whether next delta time equals to zero.
  - [`isPaused`](#ispaused) Returns whether or not the Director is paused.
  - [`getTotalFrames`](#gettotalframes) Returns how many frames were called since the director started.
  - [`getScheduler`](#getscheduler) Returns the cc.Scheduler associated with this director.
  - [`setScheduler`](#setscheduler) Sets the cc.Scheduler associated with this director.
  - [`getActionManager`](#getactionmanager) Returns the cc.ActionManager associated with this director.
  - [`setActionManager`](#setactionmanager) Sets the cc.ActionManager associated with this director.
  - [`getCollisionManager`](#getcollisionmanager) Returns the cc.CollisionManager associated with this director.
  - [`getPhysicsManager`](#getphysicsmanager) Returns the cc.PhysicsManager associated with this director.
  - [`getDeltaTime`](#getdeltatime) Returns the delta time since last frame.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.



##### Events

  - [`cc.Director.EVENT_PROJECTION_CHANGED`](#cc.director.eventprojectionchanged) The event projection changed of cc.Director.
  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) The event which will be triggered before loading a new scene.
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) The event which will be triggered after launching a new scene.
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) The event which will be triggered at the beginning of every frame.
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) The event which will be triggered after engine and components update logic.
  - [`cc.Director.EVENT_BEFORE_VISIT`](#cc.director.eventbeforevisit) The event which will be triggered before visiting the rendering scene graph.
  - [`cc.Director.EVENT_AFTER_VISIT`](#cc.director.eventaftervisit) The event which will be triggered after visiting the rendering scene graph,
the render queue is ready but not rendered at this point.
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) The event which will be triggered after the rendering process.


### Details


#### Properties


##### EVENT_PROJECTION_CHANGED

> The event projection changed of cc.Director.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1275) |



##### EVENT_BEFORE_SCENE_LOADING

> The event which will be triggered before loading a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1291](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1291) |



##### EVENT_BEFORE_SCENE_LAUNCH

> The event which will be triggered before launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1307](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1307) |



##### EVENT_AFTER_SCENE_LAUNCH

> The event which will be triggered after launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1323) |



##### EVENT_BEFORE_UPDATE

> The event which will be triggered at the beginning of every frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1338](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1338) |



##### EVENT_AFTER_UPDATE

> The event which will be triggered after engine and components update logic.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1353) |



##### EVENT_BEFORE_VISIT

> The event which will be triggered before visiting the rendering scene graph.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1368](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1368) |



##### EVENT_AFTER_VISIT

> The event which will be triggered after visiting the rendering scene graph,
the render queue is ready but not rendered at this point.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1386](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1386) |



##### EVENT_AFTER_DRAW

> The event which will be triggered after the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1404](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1404) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1567](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1567) |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1576](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1576) |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1585](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1585) |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1594](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1594) |






<!-- Method Block -->
#### Methods


##### convertToUI

Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:271](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L271) |

###### Parameters
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWinSize

Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L336) |



##### getWinSizeInPixels

Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use cc.view.getFrameSize())

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:348](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L348) |



##### getVisibleSize

Returns the visible size of the running scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L370) |



##### getVisibleOrigin

Returns the visible origin of the running scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:378](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L378) |



##### pause

Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:394](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L394) |



##### runSceneImmediate

Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:538](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L538) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:647](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L647) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

Loads the scene by its name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L704) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.


##### preloadScene

Preloads the scene to reduces loading time. You can call this method at any time you want.
After calling this method, you still need to launch the scene by `cc.director.loadScene`.
It will be totally fine to call `cc.director.loadScene` at any time even if the preloading is not
yet finished, the scene will be launched after loaded automatically.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:752](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L752) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `onLoaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:787](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L787) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the uuid of the scene asset to load
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `onUnloaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `dontRunScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Just download and initialize the scene but will not launch it,
                                  only take effect in the Editor.


##### resume

Resume game logic execution after pause, if the current scene is not paused, nothing will happen.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:850](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L850) |



##### setDepthTest

Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:881](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L881) |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

Set color for clear screen.<br/>
(Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js)

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:891](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L891) |

###### Parameters
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### setProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:977](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L977) |

###### Parameters
- `projection` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setViewport

Update the view port.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:987](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L987) |



##### getProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1007](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1007) |



##### setAlphaBlending

Enables/disables OpenGL alpha blending.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1017](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1017) |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isSendCleanupToScene

Returns whether or not the replaced scene will receive the cleanup message.<br/>
If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
If the new scene replaces the old one, the it will receive the "cleanup" message.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1027](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1027) |



##### getRunningScene

Returns current render Scene, normally you will never need to use this API.
In most case, you probably want to use `getScene` instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1043](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1043) |



##### getScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1056](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1056) |


##### Examples

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

Returns the FPS value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1069](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1069) |



##### isDisplayStats

Returns whether or not to display the FPS informations.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1079](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1079) |



##### setDisplayStats

Sets whether display the FPS on the bottom-left corner.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1089](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1089) |

###### Parameters
- `displayStats` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isNextDeltaTimeZero

Returns whether next delta time equals to zero.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1102](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1102) |



##### isPaused

Returns whether or not the Director is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1112](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1112) |



##### getTotalFrames

Returns how many frames were called since the director started.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1122) |



##### getScheduler

Returns the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1176](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1176) |



##### setScheduler

Sets the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1186) |

###### Parameters
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

Returns the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1198](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1198) |



##### setActionManager

Sets the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1207](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1207) |

###### Parameters
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1233](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1233) |



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1242](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1242) |



##### getDeltaTime

Returns the delta time since last frame.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js:1251](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCDirector.js#L1251) |



##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:217](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L217) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:274](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L274) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Examples

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

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:329](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L329) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L351) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:396](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L396) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L410) |

###### Parameters
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs




#### Events

### `cc.Director.EVENT_PROJECTION_CHANGED` Event



Module: [cc](../modules/cc.md)


The event projection changed of cc.Director.


### Index







### Details




### `cc.Director.EVENT_BEFORE_SCENE_LOADING` Event



Module: [cc](../modules/cc.md)


The event which will be triggered before loading a new scene.


### Index







### Details




### `cc.Director.EVENT_AFTER_SCENE_LAUNCH` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after launching a new scene.


### Index







### Details




### `cc.Director.EVENT_BEFORE_UPDATE` Event



Module: [cc](../modules/cc.md)


The event which will be triggered at the beginning of every frame.


### Index







### Details




### `cc.Director.EVENT_AFTER_UPDATE` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after engine and components update logic.


### Index







### Details




### `cc.Director.EVENT_BEFORE_VISIT` Event



Module: [cc](../modules/cc.md)


The event which will be triggered before visiting the rendering scene graph.


### Index







### Details




### `cc.Director.EVENT_AFTER_VISIT` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after visiting the rendering scene graph,
the render queue is ready but not rendered at this point.


### Index







### Details




### `cc.Director.EVENT_AFTER_DRAW` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after the rendering process.


### Index







### Details





