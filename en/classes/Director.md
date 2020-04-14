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
  - [`getTotalTime`](#gettotaltime) Returns the total passed time since game start, unit: ms
  - [`getTotalFrames`](#gettotalframes) Returns how many frames were called since the director started.
  - [`isPaused`](#ispaused) Returns whether or not the Director is paused.
  - [`getScheduler`](#getscheduler) Returns the cc.Scheduler associated with this director.
  - [`setScheduler`](#setscheduler) Sets the cc.Scheduler associated with this director.
  - [`getActionManager`](#getactionmanager) Returns the cc.ActionManager associated with this director.
  - [`setActionManager`](#setactionmanager) Sets the cc.ActionManager associated with this director.
  - [`getCollisionManager`](#getcollisionmanager) Returns the cc.CollisionManager associated with this director.
  - [`getPhysicsManager`](#getphysicsmanager) Returns the cc.PhysicsManager associated with this director.
  - [`getPhysics3DManager`](#getphysics3dmanager) Returns the cc.Physics3DManager associated with this director.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.



##### Events

  - [`cc.Director.EVENT_BEFORE_SCENE_LOADING`](#cc.director.eventbeforesceneloading) The event which will be triggered before loading a new scene.
  - [`cc.Director.EVENT_AFTER_SCENE_LAUNCH`](#cc.director.eventafterscenelaunch) The event which will be triggered after launching a new scene.
  - [`cc.Director.EVENT_BEFORE_UPDATE`](#cc.director.eventbeforeupdate) The event which will be triggered at the beginning of every frame.
  - [`cc.Director.EVENT_AFTER_UPDATE`](#cc.director.eventafterupdate) The event which will be triggered after engine and components update logic.
  - [`cc.Director.EVENT_BEFORE_DRAW`](#cc.director.eventbeforedraw) The event which will be triggered before the rendering process.
  - [`cc.Director.EVENT_AFTER_DRAW`](#cc.director.eventafterdraw) The event which will be triggered after the rendering process.
  - [`Director.EVENT_BEFORE_PHYSICS`](#director.eventbeforephysics) The event which will be triggered before the physics process....
  - [`Director.EVENT_AFTER_PHYSICS`](#director.eventafterphysics) The event which will be triggered after the physics process....


### Details


#### Properties


##### EVENT_PROJECTION_CHANGED

> The event projection changed of cc.Director. This event will not get triggered since v2.0

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1031](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1031) |
| Deprecated | since v2.0 |



##### EVENT_BEFORE_SCENE_LOADING

> The event which will be triggered before loading a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1047](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1047) |



##### EVENT_BEFORE_SCENE_LAUNCH

> The event which will be triggered before launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1062](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1062) |



##### EVENT_AFTER_SCENE_LAUNCH

> The event which will be triggered after launching a new scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1077](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1077) |



##### EVENT_BEFORE_UPDATE

> The event which will be triggered at the beginning of every frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1091](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1091) |



##### EVENT_AFTER_UPDATE

> The event which will be triggered after engine and components update logic.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1105](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1105) |



##### EVENT_BEFORE_VISIT

> The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1114](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1114) |
| Deprecated | since v2.0 |



##### EVENT_AFTER_VISIT

> The event is deprecated since v2.0, please use cc.Director.EVENT_BEFORE_DRAW instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1124](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1124) |
| Deprecated | since v2.0 |



##### EVENT_BEFORE_DRAW

> The event which will be triggered before the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1139](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1139) |



##### EVENT_AFTER_DRAW

> The event which will be triggered after the rendering process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCDirector.js:1153](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1153) |



##### PROJECTION_2D

> Constant for 2D projection (orthogonal projection)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1164](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1164) |
| Deprecated | since v2.0 |



##### PROJECTION_3D

> Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1174](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1174) |
| Deprecated | since v2.0 |



##### PROJECTION_CUSTOM

> Constant for custom projection, if cc.Director's projection set to it, it calls "updateProjection" on the projection delegate.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1184](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1184) |
| Deprecated | since v2.0 |



##### PROJECTION_DEFAULT

> Constant for default projection of cc.Director, default projection is 2D projection

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCDirector.js:1194](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L1194) |
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
| Defined in | [cocos2d/core/CCDirector.js:244](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L244) |
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
| Defined in | [cocos2d/core/CCDirector.js:266](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L266) |
| Deprecated | since v2.0 |

###### Parameters
- `glPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### end

End the life of director in the next frame

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:295](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L295) |



##### getWinSize

Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:303](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L303) |
| Deprecated | since v2.0 |



##### getWinSizeInPixels

Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use cc.view.getFrameSize())

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCDirector.js:316](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L316) |
| Deprecated | since v2.0 |



##### pause

Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:333](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L333) |



##### runSceneImmediate

Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:418](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L418) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:497](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L497) |

###### Parameters
- `scene` <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- `onBeforeLoadScene` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- `onLaunched` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

Loads the scene by its name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:554](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L554) |

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
| Defined in | [cocos2d/core/CCDirector.js:582](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L582) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called when the load progression change.
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline
- `onLoaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.
	- `asset` cc.SceneAsset The scene asset itself.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:629](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L629) |

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
| Defined in | [cocos2d/core/CCDirector.js:692](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L692) |



##### setDepthTest

Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:711](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L711) |
| Deprecated | since v2.0 |

###### Parameters
- `on` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

Set color for clear screen.<br/>
(Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:727](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L727) |
| Deprecated | since v2.0 |

###### Parameters
- `clearColor` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### getRunningScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:745](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L745) |
| Deprecated | since v2.0 |



##### getScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scene.html" class="crosslink">Scene</a> 
| Defined in | [cocos2d/core/CCDirector.js:757](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L757) |


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
| Defined in | [cocos2d/core/CCDirector.js:770](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L770) |
| Deprecated | since v2.0 |



##### setAnimationInterval

Sets animation interval, this doesn't control the main loop.
To control the game's frame rate overall, please use Game.setFrameRate

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:781](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L781) |
| Deprecated | since v2.0 |

###### Parameters
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The animation interval desired.


##### getDeltaTime

Returns the delta time since last frame.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:792](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L792) |



##### getTotalTime

Returns the total passed time since game start, unit: ms

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:802](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L802) |



##### getTotalFrames

Returns how many frames were called since the director started.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCDirector.js:812](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L812) |



##### isPaused

Returns whether or not the Director is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCDirector.js:822](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L822) |



##### getScheduler

Returns the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 
| Defined in | [cocos2d/core/CCDirector.js:832](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L832) |



##### setScheduler

Sets the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:842](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L842) |

###### Parameters
- `scheduler` <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

Returns the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:854](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L854) |



##### setActionManager

Sets the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCDirector.js:863](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L863) |

###### Parameters
- `actionManager` <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:889](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L889) |



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:899](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L899) |



##### getPhysics3DManager

Returns the cc.Physics3DManager associated with this director.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Physics3DManager.html" class="crosslink">Physics3DManager</a> 
| Defined in | [cocos2d/core/CCDirector.js:909](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/CCDirector.js#L909) |



##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L69) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L77) |

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
eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L119) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

```js
// register fire eventListener
var callback = eventTarget.on('fire', function () {
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
| Defined in | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L163) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L182) |

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
eventTarget.once('fire', function () {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L208) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:235](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L235) |

###### Parameters
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:309](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L309) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
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




### `Director.EVENT_BEFORE_PHYSICS` Event



Module: [cc](../modules/cc.md)


The event which will be triggered before the physics process.<br/>
物理过程之前所触发的事件。


### Index







### Details




### `Director.EVENT_AFTER_PHYSICS` Event



Module: [cc](../modules/cc.md)


The event which will be triggered after the physics process.<br/>
物理过程之后所触发的事件。


### Index







### Details





