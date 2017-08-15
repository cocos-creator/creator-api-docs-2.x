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



##### Methods

  - [`convertToUI`](#converttoui) Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.
  - [`getWinSize`](#getwinsize) Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.
  - [`getWinSizeInPixels`](#getwinsizeinpixels) Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
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
  - [`setClearColor`](#setclearcolor) set color for clear screen.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js
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




<!-- Method Block -->
#### Methods


##### convertToUI

Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in CCDirectorWebGL.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:268](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L268) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- glPoint <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWinSize

Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:333](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L333) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getWinSizeInPixels

Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:345](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L345) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getVisibleSize

Returns the visible size of the running scene.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:363](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L363) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getVisibleOrigin

Returns the visible origin of the running scene.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:371](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L371) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### pause

Pause the director's ticker, only involve the game logic execution.
It won't pause the rendering process nor the event manager.
If you want to pause the entier game including rendering, audio and event,
please use Game.pause

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:387](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L387) |



##### runSceneImmediate

Run a scene. Replaces the running scene with a new one or enter the first scene.<br/>
The new scene will be launched immediately.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:531](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L531) |

###### Parameters
- scene <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- onBeforeLoadScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### runScene

Run a scene. Replaces the running scene with a new one or enter the first scene.
The new scene will be launched at the end of the current frame.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:638](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L638) |

###### Parameters
- scene <a href="../classes/Scene.html" class="crosslink">Scene</a> The need run scene.
- onBeforeLoadScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene before loading.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The function invoked at the scene after launch.


##### loadScene

Loads the scene by its name.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:695](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L695) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.


##### preloadScene

Preloads the scene to reduces loading time. You can call this method at any time you want.
After calling this method, you still need to launch the scene by `cc.director.loadScene`.
It will be totally fine to call `cc.director.loadScene` at any time even if the preloading is not
yet finished, the scene will be launched after loaded automatically.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:743](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L743) |

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- onLoaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.


##### _loadSceneByUuid

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:778](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L778) |

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the uuid of the scene asset to load
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- onUnloaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- dontRunScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Just download and initialize the scene but will not launch it,
                                  only take effect in the Editor.


##### resume

Resume game logic execution after pause, if the current scene is not paused, nothing will happen.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:841](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L841) |



##### setDepthTest

Enables or disables WebGL depth test.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:872](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L872) |

###### Parameters
- on <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setClearColor

set color for clear screen.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:882](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L882) |

###### Parameters
- clearColor <a href="../classes/Color.html" class="crosslink">Color</a> 


##### setProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:966](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L966) |

###### Parameters
- projection <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setViewport

Update the view port.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:976](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L976) |



##### getProjection

Sets an OpenGL projection.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:996](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L996) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setAlphaBlending

Enables/disables OpenGL alpha blending.<br/>
Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1006](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1006) |

###### Parameters
- on <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isSendCleanupToScene

Returns whether or not the replaced scene will receive the cleanup message.<br/>
If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
If the new scene replaces the old one, the it will receive the "cleanup" message.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1016](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1016) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getRunningScene

Returns current render Scene, normally you will never need to use this API.
In most case, you probably want to use `getScene` instead.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1032](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1032) |
| Return 		 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 



##### getScene

Returns current logic Scene.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1045](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1045) |
| Return 		 | <a href="../classes/Scene.html" class="crosslink">Scene</a> 


##### Example

```js
// This will help you to get the Canvas node in scene
 cc.director.getScene().getChildByName('Canvas');
```

##### getAnimationInterval

Returns the FPS value.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1058](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1058) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### isDisplayStats

Returns whether or not to display the FPS informations.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1068](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1068) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### setDisplayStats

Sets whether display the FPS on the bottom-left corner.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1078](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1078) |

###### Parameters
- displayStats <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isNextDeltaTimeZero

Returns whether next delta time equals to zero.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1091](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1091) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### isPaused

Returns whether or not the Director is paused.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1101](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1101) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getTotalFrames

Returns how many frames were called since the director started.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1111](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1111) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getScheduler

Returns the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1165](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1165) |
| Return 		 | <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 



##### setScheduler

Sets the cc.Scheduler associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1175](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1175) |

###### Parameters
- scheduler <a href="../classes/Scheduler.html" class="crosslink">Scheduler</a> 


##### getActionManager

Returns the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1187](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1187) |
| Return 		 | <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 



##### setActionManager

Sets the cc.ActionManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1196](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1196) |

###### Parameters
- actionManager <a href="../classes/ActionManager.html" class="crosslink">ActionManager</a> 


##### getCollisionManager

Returns the cc.CollisionManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1222](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1222) |
| Return 		 | <a href="../classes/CollisionManager.html" class="crosslink">CollisionManager</a> 



##### getPhysicsManager

Returns the cc.PhysicsManager associated with this director.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1231](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1231) |
| Return 		 | <a href="../classes/PhysicsManager.html" class="crosslink">PhysicsManager</a> 



##### getDeltaTime

Returns the delta time since last frame.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js:1240](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/CCDirector.js#L1240) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:157](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L157) |
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

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:209](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L209) |

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

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:257](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L257) |

###### Parameters
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:277](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L277) |

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

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:311](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L311) |

###### Parameters
- event <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js:325](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event/event-target.js#L325) |

###### Parameters
- message <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- detail Any whatever argument the message needs




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





