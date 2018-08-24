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
  - [`EVENT_BEFORE_VISIT`](#eventbeforevisit) `String` The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead
  - [`EVENT_AFTER_VISIT`](#eventaftervisit) `String` The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead
  - [`EVENT_BEFORE_DRAW`](#eventbeforedraw) `String` The event which will be triggered before the rendering process.
  - [`EVENT_AFTER_DRAW`](#eventafterdraw) `String` The event which will be triggered after the rendering process.
  - [`PROJECTION_2D`](#projection2d) `Number` Constant for 2D projection (orthogonal projection)
  - [`PROJECTION_3D`](#projection3d) `Number` Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
  - [`PROJECTION_CUSTOM`](#projectioncustom) `Number` Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.
  - [`PROJECTION_DEFAULT`](#projectiondefault) `Number` Constant for default projection of cc.Director, default projection is 2D projection



##### Methods

  - [`convertToGL`](#converttogl) Converts a view coordinate to an WebGL coordinate...
  - [`convertToUI`](#converttoui) Converts an OpenGL coordinate to a view coordinate...
  - [`end`](#end) End the life of director in the next frame
  - [`getWinSize`](#getwinsize) Returns the size of the WebGL view in points....
  - [`getWinSizeInPixels`](#getwinsizeinpixels) On Mac winSize and winSizeInPixels return the same value.
  - [`pause`](#pause) Pause the director's ticker, only involve the game logic execution.
  - [`runSceneImmediate`](#runsceneimmediate) Run a scene.
  - [`runScene`](#runscene) Run a scene.
  - [`loadScene`](#loadscene) Loads the scene by its name.
  - [`preloadScene`](#preloadscene) Preloads the scene to reduces loading time.
  - [`_loadSceneByUuid`](#loadscenebyuuid) Loads the scene by its uuid.
  - [`resume`](#resume) Resume game logic execution after pause, if the current scene is not paused, nothing will happen.
  - [`setDepthTest`](#setdepthtest) Enables or disables WebGL depth test....
  - [`setClearColor`](#setclearcolor) Set color for clear screen....
  - [`getRunningScene`](#getrunningscene) Returns current logic Scene.
  - [`getScene`](#getscene) Returns current logic Scene.
  - [`getAnimationInterval`](#getanimationinterval) Returns the FPS value.
  - [`setAnimationInterval`](#setanimationinterval) Sets animation interval, this doesn't control the main loop.
  - [`getDeltaTime`](#getdeltatime) Returns the delta time since last frame.
  - [`getTotalFrames`](#gettotalframes) Returns how many frames were called since the director started.
  - [`isPaused`](#ispaused) Returns whether or not the Director is paused.
  - [`getScheduler`](#getscheduler) Returns the cc.Scheduler associated with this director.
  - [`setScheduler`](#setscheduler) Sets the cc.Scheduler associated with this director.
  - [`getActionManager`](#getactionmanager) Returns the cc.ActionManager associated with this director.
  - [`setActionManager`](#setactionmanager) Sets the cc.ActionManager associated with this director.
  - [`getCollisionManager`](#getcollisionmanager) Returns the cc.CollisionManager associated with this director.
  - [`getPhysicsManager`](#getphysicsmanager) Returns the cc.PhysicsManager associated with this director.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.



##### Events

  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) The event which will be triggered before loading a new scene.
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) The event which will be triggered after launching a new scene.
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) The event which will be triggered at the beginning of every frame.
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) The event which will be triggered after engine and components update logic.
  - [`cc.Director.EVENT_BEFORE_DRAW`](#cc.director.eventbeforedraw) The event which will be triggered before the rendering process.
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) The event which will be triggered after the rendering process.


### Details


#### Properties


##### EVENT_PROJECTION_CHANGED

> The event projection changed of cc.Director. This event will not get triggered since v2.0

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:980](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L980) |
| Deprecated | since v2.0 |



##### EVENT_BEFORE_SCENE_LOADING

> The event which will be triggered before loading a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:996](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L996) |



##### EVENT_BEFORE_SCENE_LAUNCH

> The event which will be triggered before launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1011](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1011) |



##### EVENT_AFTER_SCENE_LAUNCH

> The event which will be triggered after launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1026](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1026) |



##### EVENT_BEFORE_UPDATE

> The event which will be triggered at the beginning of every frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1040](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1040) |



##### EVENT_AFTER_UPDATE

> The event which will be triggered after engine and components update logic.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1054](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1054) |



##### EVENT_BEFORE_VISIT

> The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1063](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1063) |
| Deprecated | since v2.0 |



##### EVENT_AFTER_VISIT

> The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1073](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1073) |
| Deprecated | since v2.0 |



##### EVENT_BEFORE_DRAW

> The event which will be triggered before the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1088](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1088) |



##### EVENT_AFTER_DRAW

> The event which will be triggered after the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1102) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1113](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1113) |
| Deprecated | since v2.0 |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1123) |
| Deprecated | since v2.0 |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1133](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1133) |
| Deprecated | since v2.0 |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1143](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L1143) |
| Deprecated | since v2.0 |






<!-- Method Block -->
#### Methods


##### convertToGL

Converts a view coordinate to an WebGL coordinate<br/>
Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
Implementation can be found in CCDirectorWebGL.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCDirector.js:230](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L230) |
| Deprecated | since v2.0 |

###### Parameters
- `uiPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### convertToUI

Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCDirector.js:252](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L252) |
| Deprecated | since v2.0 |

###### Parameters
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### end

End the life of director in the next frame

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:281](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L281) |



##### getWinSize

Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:289](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L289) |
| Deprecated | since v2.0 |



##### getWinSizeInPixels

Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use cc.view.getFrameSize())

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:302](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L302) |
| Deprecated | since v2.0 |



##### pause

Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:319](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L319) |



##### runSceneImmediate

Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:403](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L403) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:482](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L482) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

Loads the scene by its name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:539](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L539) |

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
| Defined in | [cocos2d/core/CCDirector.js:567](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L567) |

###### Parameters
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
| Defined in | [cocos2d/core/CCDirector.js:613](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L613) |

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
| Defined in | [cocos2d/core/CCDirector.js:676](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L676) |



##### setDepthTest

Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:695](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L695) |
| Deprecated | since v2.0 |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

Set color for clear screen.<br/>
(Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:711](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L711) |
| Deprecated | since v2.0 |

###### Parameters
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### getRunningScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:729](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L729) |
| Deprecated | since v2.0 |



##### getScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:741](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L741) |


##### Examples

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

Returns the FPS value. Please use Game.setFrameRate to control animation interval.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:754](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L754) |
| Deprecated | since v2.0 |



##### setAnimationInterval

Sets animation interval, this doesn't control the main loop.
To control the game's frame rate overall, please use Game.setFrameRate

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:765](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L765) |
| Deprecated | since v2.0 |

###### Parameters
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The animation interval desired.


##### getDeltaTime

Returns the delta time since last frame.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:776](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L776) |



##### getTotalFrames

Returns how many frames were called since the director started.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:786](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L786) |



##### isPaused

Returns whether or not the Director is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:796](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L796) |



##### getScheduler

Returns the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| Defined in | [cocos2d/core/CCDirector.js:806](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L806) |



##### setScheduler

Sets the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:816](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L816) |

###### Parameters
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

Returns the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:828](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L828) |



##### setActionManager

Sets the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:837](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L837) |

###### Parameters
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:863](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L863) |



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:873](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCDirector.js#L873) |



##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:68](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L68) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L76) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.on('fire', function (event) {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L117) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

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

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:151](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L151) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:164](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L164) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function (event) {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:201](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L201) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:221](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/event/event-target.js#L221) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  




#### Events

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




### `cc.Director.EVENT_BEFORE_DRAW` Event



Module: [cc](../modules/cc.md)


The event which will be triggered before the rendering process.


### Index







### Details




### `cc.Director.EVENT_AFTER_DRAW` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after the rendering process.


### Index







### Details





