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
  - [`EVENT_AFTER_VISIT`](#eventaftervisit) `String` The event which will be triggered after visiting the rendering scene graph,...
  - [`EVENT_AFTER_DRAW`](#eventafterdraw) `String` The event which will be triggered after the rendering process.
  - [`PROJECTION_2D`](#projection2d) `Number` Constant for 2D projection (orthogonal projection)
  - [`PROJECTION_3D`](#projection3d) `Number` Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
  - [`PROJECTION_CUSTOM`](#projectioncustom) `Number` Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
  - [`PROJECTION_DEFAULT`](#projectiondefault) `Number` Constant for default projection of cc.Director, default projection is 2D projection



##### Methods

  - [`convertToUI`](#converttoui) Converts an OpenGL coordinate to a view coordinate...
  - [`getWinSize`](#getwinsize) Returns the size of the WebGL view in points....
  - [`getWinSizeInPixels`](#getwinsizeinpixels) On Mac winSize and winSizeInPixels return the same value.
  - [`getVisibleSize`](#getvisiblesize) Returns the visible size of the running scene.
  - [`getVisibleOrigin`](#getvisibleorigin) Returns the visible origin of the running scene.
  - [`pause`](#pause) Pause the director's ticker, only involve the game logic execution.
  - [`runSceneImmediate`](#runsceneimmediate) Run a scene.
  - [`runScene`](#runscene) Run a scene.
  - [`loadScene`](#loadscene) Loads the scene by its name.
  - [`preloadScene`](#preloadscene) Preloads the scene to reduces loading time.
  - [`_loadSceneByUuid`](#loadscenebyuuid) Loads the scene by its uuid.
  - [`resume`](#resume) Resume game logic execution after pause, if the current scene is not paused, nothing will happen.
  - [`setDepthTest`](#setdepthtest) Enables or disables WebGL depth test....
  - [`setClearColor`](#setclearcolor) Set color for clear screen....
  - [`setProjection`](#setprojection) Sets an OpenGL projection....
  - [`setViewport`](#setviewport) Update the view port....
  - [`getProjection`](#getprojection) Sets an OpenGL projection....
  - [`setAlphaBlending`](#setalphablending) Enables/disables OpenGL alpha blending....
  - [`isSendCleanupToScene`](#issendcleanuptoscene) Returns whether or not the replaced scene will receive the cleanup message....
  - [`getRunningScene`](#getrunningscene) Returns current render Scene, normally you will never need to use this API.
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
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.



##### Events

  - [`cc.Director.EVENT_PROJECTION_CHANGED`](#cc.director.eventprojectionchanged) The event projection changed of cc.Director.
  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) The event which will be triggered before loading a new scene.
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) The event which will be triggered after launching a new scene.
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) The event which will be triggered at the beginning of every frame.
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) The event which will be triggered after engine and components update logic.
  - [`cc.Director.EVENT_BEFORE_VISIT`](#cc.director.eventbeforevisit) The event which will be triggered before visiting the rendering scene graph.
  - [`cc.Director.EVENT_AFTER_VISIT`](#cc.director.eventaftervisit) The event which will be triggered after visiting the rendering scene graph,...
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) The event which will be triggered after the rendering process.


### Details


#### Properties


##### EVENT_PROJECTION_CHANGED

> The event projection changed of cc.Director.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1276](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1276) |



##### EVENT_BEFORE_SCENE_LOADING

> The event which will be triggered before loading a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1292](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1292) |



##### EVENT_BEFORE_SCENE_LAUNCH

> The event which will be triggered before launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1308](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1308) |



##### EVENT_AFTER_SCENE_LAUNCH

> The event which will be triggered after launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1324](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1324) |



##### EVENT_BEFORE_UPDATE

> The event which will be triggered at the beginning of every frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1339](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1339) |



##### EVENT_AFTER_UPDATE

> The event which will be triggered after engine and components update logic.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1354](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1354) |



##### EVENT_BEFORE_VISIT

> The event which will be triggered before visiting the rendering scene graph.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1369](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1369) |



##### EVENT_AFTER_VISIT

> The event which will be triggered after visiting the rendering scene graph,
the render queue is ready but not rendered at this point.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1387](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1387) |



##### EVENT_AFTER_DRAW

> The event which will be triggered after the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1405](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1405) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1568](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1568) |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1577](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1577) |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1586](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1586) |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1595](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1595) |






<!-- Method Block -->
#### Methods


##### convertToUI

Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCDirector.js:272](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L272) |

###### Parameters
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWinSize

Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:337](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L337) |



##### getWinSizeInPixels

Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use cc.view.getFrameSize())

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:349](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L349) |



##### getVisibleSize

Returns the visible size of the running scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:371](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L371) |



##### getVisibleOrigin

Returns the visible origin of the running scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCDirector.js:379](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L379) |



##### pause

Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:395](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L395) |



##### runSceneImmediate

Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:539](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L539) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:648](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L648) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

Loads the scene by its name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:705](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L705) |

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
| Defined in | [cocos2d/core/CCDirector.js:753](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L753) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `onLoaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:788](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L788) |

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
| Defined in | [cocos2d/core/CCDirector.js:851](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L851) |



##### setDepthTest

Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:882](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L882) |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

Set color for clear screen.<br/>
(Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:892](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L892) |

###### Parameters
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### setProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:978](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L978) |

###### Parameters
- `projection` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setViewport

Update the view port.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:988](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L988) |



##### getProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:1008](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1008) |



##### setAlphaBlending

Enables/disables OpenGL alpha blending.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:1018](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1018) |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isSendCleanupToScene

Returns whether or not the replaced scene will receive the cleanup message.<br/>
If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
If the new scene replaces the old one, the it will receive the "cleanup" message.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:1028](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1028) |



##### getRunningScene

Returns current render Scene, normally you will never need to use this API.
In most case, you probably want to use `getScene` instead.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:1044](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1044) |



##### getScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:1057](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1057) |


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
| Defined in | [cocos2d/core/CCDirector.js:1070](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1070) |



##### isDisplayStats

Returns whether or not to display the FPS informations.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:1080](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1080) |



##### setDisplayStats

Sets whether display the FPS on the bottom-left corner.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:1090](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1090) |

###### Parameters
- `displayStats` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isNextDeltaTimeZero

Returns whether next delta time equals to zero.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:1103](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1103) |



##### isPaused

Returns whether or not the Director is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:1113](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1113) |



##### getTotalFrames

Returns how many frames were called since the director started.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:1123](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1123) |



##### getScheduler

Returns the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| Defined in | [cocos2d/core/CCDirector.js:1177](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1177) |



##### setScheduler

Sets the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:1187](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1187) |

###### Parameters
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

Returns the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:1199](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1199) |



##### setActionManager

Sets the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:1208](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1208) |

###### Parameters
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:1234](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1234) |



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:1243](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1243) |



##### getDeltaTime

Returns the delta time since last frame.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:1252](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCDirector.js#L1252) |



##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:218](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L218) |

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
| Defined in | [cocos2d/core/event/event-target.js:275](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L275) |

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
| Defined in | [cocos2d/core/event/event-target.js:330](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L330) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:352](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L352) |

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
| Defined in | [cocos2d/core/event/event-target.js:397](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L397) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:411](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/event/event-target.js#L411) |

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





