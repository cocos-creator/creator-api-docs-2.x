## `game` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)


An object to boot the game.


### Index

##### Properties

  - [`EVENT_HIDE`](#eventhide) `String` Event triggered when game hide to background.
  - [`EVENT_SHOW`](#eventshow) `String` Event triggered when game back to foreground
  - [`EVENT_GAME_INITED`](#eventgameinited) `String` Event triggered after game inited, at this point all engine objects and game scripts are loaded
  - [`EVENT_ENGINE_INITED`](#eventengineinited) `String` Event triggered after engine inited, at this point you will be able to use all engine classes.
  - [`RENDER_TYPE_CANVAS`](#rendertypecanvas) `Number` Web Canvas 2d API as renderer backend
  - [`RENDER_TYPE_WEBGL`](#rendertypewebgl) `Number` WebGL API as renderer backend
  - [`RENDER_TYPE_OPENGL`](#rendertypeopengl) `Number` OpenGL API as renderer backend
  - [`frame`](#frame) `Object` The outer frame of the game canvas, parent of game container.
  - [`container`](#container) `HTMLDivElement` The container of game canvas.
  - [`canvas`](#canvas) `HTMLCanvasElement` The canvas of the game.
  - [`renderType`](#rendertype) `Number` The renderer backend of the game.
  - [`config`](#config) `Object` 1.
  - [`game`](#game) `Game` 



##### Methods

  - [`onStart`](#onstart) Callback when the scripts of engine have been load.
  - [`setFrameRate`](#setframerate) Set frame rate of game.
  - [`getFrameRate`](#getframerate) Get frame rate set for the game, it doesn't represent the real frame rate.
  - [`step`](#step) Run the game frame by frame.
  - [`pause`](#pause) Pause the game main loop.
  - [`resume`](#resume) Resume the game from pause.
  - [`isPaused`](#ispaused) Check whether the game is paused.
  - [`restart`](#restart) Restart game.
  - [`end`](#end) End game, it will close the game window
  - [`prepare`](#prepare) Prepare game.
  - [`run`](#run) Run game with configuration object and onStart function.
  - [`addPersistRootNode`](#addpersistrootnode) Add a persistent root node to the game, the persistent node won't be destroyed during scene transition....
  - [`removePersistRootNode`](#removepersistrootnode) Remove a persistent root node.
  - [`isPersistRootNode`](#ispersistrootnode) Check whether the node is a persistent root node.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.



### Details


#### Properties


##### EVENT_HIDE

> Event triggered when game hide to background.
Please note that this event is not 100% guaranteed to be fired on Web platform,
on native platforms, it corresponds to enter background event, os status bar or notification center may not trigger this event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:49](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L49) |

##### Examples

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

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:66](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L66) |



##### EVENT_GAME_INITED

> Event triggered after game inited, at this point all engine objects and game scripts are loaded

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:79](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L79) |



##### EVENT_ENGINE_INITED

> Event triggered after engine inited, at this point you will be able to use all engine classes.
It was defined as EVENT_RENDERER_INITED in cocos creator v1.x and renamed in v2.0

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:87](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L87) |



##### RENDER_TYPE_CANVAS

> Web Canvas 2d API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:98](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L98) |



##### RENDER_TYPE_WEBGL

> WebGL API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:105](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L105) |



##### RENDER_TYPE_OPENGL

> OpenGL API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L112) |



##### frame

> The outer frame of the game canvas, parent of game container.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:139](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L139) |



##### container

> The container of game canvas.

| meta | description |
|------|-------------|
| Type | HTMLDivElement |
| Defined in | [cocos2d/core/CCGame.js:146](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L146) |



##### canvas

> The canvas of the game.

| meta | description |
|------|-------------|
| Type | HTMLCanvasElement |
| Defined in | [cocos2d/core/CCGame.js:153](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L153) |



##### renderType

> The renderer backend of the game.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:161](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L161) |



##### config

> The current game configuration, including:<br/>
1. debugMode<br/>
     "debugMode" possible values :<br/>
     0 - No message will be printed.                                                      <br/>
     1 - cc.error, cc.assert, cc.warn, cc.log will print in console.                      <br/>
     2 - cc.error, cc.assert, cc.warn will print in console.                              <br/>
     3 - cc.error, cc.assert will print in console.                                       <br/>
     4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.<br/>
     5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.        <br/>
     6 - cc.error, cc.assert will print on canvas, available only on web.                 <br/>
2. showFPS<br/>
     Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.<br/>
3. exposeClassName<br/>
     Expose class name to chrome debug tools, the class intantiate performance is a little bit slower when exposed.<br/>
4. frameRate<br/>
     "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.<br/>
5. id<br/>
     "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.<br/>
6. renderMode<br/>
     "renderMode" sets the renderer type, only useful on web :<br/>
     0 - Automatically chosen by engine<br/>
     1 - Forced to use canvas renderer<br/>
     2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers<br/>
7. scenes<br/>
     "scenes" include available scenes in the current bundle.<br/>
<br/>
Please DO NOT modify this object directly, it won't have any effect.<br/>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:169](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L169) |



##### game

> 

| meta | description |
|------|-------------|
| Type | Game |
| Defined in | [cocos2d/core/CCGame.js:845](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L845) |






<!-- Method Block -->
#### Methods


##### onStart

Callback when the scripts of engine have been load.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:231](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L231) |



##### setFrameRate

Set frame rate of game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:242](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L242) |

###### Parameters
- `frameRate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFrameRate

Get frame rate set for the game, it doesn't represent the real frame rate.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCGame.js:259](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L259) |



##### step

Run the game frame by frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:269](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L269) |



##### pause

Pause the game main loop. This will pause:
game logic execution, rendering process, event manager, background music and all audio effects.
This is different with cc.director.pause which only pause the game logic execution.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:278](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L278) |



##### resume

Resume the game from pause. This will resume:
game logic execution, rendering process, event manager, background music and all audio effects.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:298](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L298) |



##### isPaused

Check whether the game is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:315](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L315) |



##### restart

Restart game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:325](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L325) |



##### end

End game, it will close the game window

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:352](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L352) |



##### prepare

Prepare game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:415](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L415) |

###### Parameters
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### run

Run game with configuration object and onStart function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:442](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L442) |

###### Parameters
- `config` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Pass configuration object or onStart function
- `onStart` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> function to be executed after game initialized


##### addPersistRootNode

Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br/>
The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:456](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L456) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be made persistent


##### removePersistRootNode

Remove a persistent root node.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:492](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L492) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be removed from persistent node list


##### isPersistRootNode

Check whether the node is a persistent root node.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:506](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCGame.js#L506) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be checked


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



