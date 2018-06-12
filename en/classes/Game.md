## `Game` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)


cc.game is the singleton object for game related functions.


### Index

##### Properties

  - [`EVENT_HIDE`](#eventhide) `String` 
  - [`EVENT_SHOW`](#eventshow) `String` 
  - [`EVENT_GAME_INITED`](#eventgameinited) `String` 
  - [`EVENT_RENDERER_INITED`](#eventrendererinited) `String` 
  - [`RENDER_TYPE_CANVAS`](#rendertypecanvas) `Number` 
  - [`RENDER_TYPE_WEBGL`](#rendertypewebgl) `Number` 
  - [`RENDER_TYPE_OPENGL`](#rendertypeopengl) `Number` 
  - [`CONFIG_KEY`](#configkey) `Object` 
  - [`frame`](#frame) `Object` 
  - [`container`](#container) `HTMLDivElement` 
  - [`canvas`](#canvas) `HTMLCanvasElement` 
  - [`renderType`](#rendertype) `Number` 
  - [`config`](#config) `Object` 



##### Methods

  - [`onStart`](#onstart) 
  - [`setFrameRate`](#setframerate) 
  - [`getFrameRate`](#getframerate) 
  - [`step`](#step) 
  - [`pause`](#pause) 
  - [`resume`](#resume) 
  - [`isPaused`](#ispaused) 
  - [`restart`](#restart) 
  - [`end`](#end) 
  - [`prepare`](#prepare) 
  - [`run`](#run) 
  - [`addPersistRootNode`](#addpersistrootnode) 
  - [`removePersistRootNode`](#removepersistrootnode) 
  - [`isPersistRootNode`](#ispersistrootnode) 
  - [`hasEventListener`](#haseventlistener) 
  - [`on`](#on) 
  - [`off`](#off) 
  - [`targetOff`](#targetoff) 
  - [`once`](#once) 
  - [`emit`](#emit) 
  - [`dispatchEvent`](#dispatchevent) 



### Details


#### Properties


##### EVENT_HIDE

> Event triggered when game hide to background.
Please note that this event is not 100% guaranteed to be fired on Web platform,
on native platforms, it corresponds to enter background event, os status bar or notification center may not trigger this event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:48](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L48) |

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
| Defined in | [cocos2d/core/CCGame.js:65](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L65) |



##### EVENT_GAME_INITED

> Event triggered after game inited, at this point all engine objects and game scripts are loaded

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:78](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L78) |



##### EVENT_RENDERER_INITED

> Event triggered after renderer inited, at this point you will be able to use the render context

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:86](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L86) |



##### RENDER_TYPE_CANVAS

> Web Canvas 2d API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:94](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L94) |



##### RENDER_TYPE_WEBGL

> WebGL API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:101](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L101) |



##### RENDER_TYPE_OPENGL

> OpenGL API as renderer backend

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:108](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L108) |



##### CONFIG_KEY

> Key of config

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:119](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L119) |



##### frame

> The outer frame of the game canvas, parent of game container.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:157](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L157) |



##### container

> The container of game canvas.

| meta | description |
|------|-------------|
| Type | HTMLDivElement |
| Defined in | [cocos2d/core/CCGame.js:164](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L164) |



##### canvas

> The canvas of the game.

| meta | description |
|------|-------------|
| Type | HTMLCanvasElement |
| Defined in | [cocos2d/core/CCGame.js:171](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L171) |



##### renderType

> The renderer backend of the game.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCGame.js:179](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L179) |



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
| Defined in | [cocos2d/core/CCGame.js:187](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L187) |






<!-- Method Block -->
#### Methods


##### onStart

Callback when the scripts of engine have been load.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:249](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L249) |



##### setFrameRate

Set frame rate of game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:260](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L260) |

###### Parameters
- `frameRate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFrameRate

Get frame rate set for the game, it doesn't represent the real frame rate.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCGame.js:277](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L277) |



##### step

Run the game frame by frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:287](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L287) |



##### pause

Pause the game main loop. This will pause:
game logic execution, rendering process, event manager, background music and all audio effects.
This is different with cc.director.pause which only pause the game logic execution.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:296](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L296) |



##### resume

Resume the game from pause. This will resume:
game logic execution, rendering process, event manager, background music and all audio effects.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:316](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L316) |



##### isPaused

Check whether the game is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:333](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L333) |



##### restart

Restart game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:343](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L343) |



##### end

End game, it will close the game window

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:370](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L370) |



##### prepare

Prepare game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:380](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L380) |

###### Parameters
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### run

Run game with configuration object and onStart function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:481](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L481) |

###### Parameters
- `config` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Pass configuration object or onStart function
- `onStart` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> function to be executed after game initialized


##### addPersistRootNode

Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br/>
The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:505](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L505) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be made persistent


##### removePersistRootNode

Remove a persistent root node.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:541](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L541) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be removed from persistent node list


##### isPersistRootNode

Check whether the node is a persistent root node.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:557](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/CCGame.js#L557) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be checked


##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L69) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L77) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
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
| Defined in | [cocos2d/core/event/event-target.js:114](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L114) |

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
| Defined in | [cocos2d/core/event/event-target.js:148](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L148) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:161](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L161) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function (event) {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### emit

Send an event to this object directly.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:194](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L194) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `detail` Any whatever argument the message needs
- `target` Any the target which emit this event

##### Examples

```js
eventTarget.emit('fire', {data: 'test'});
eventTarget.emit('fire', null, target);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:229](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/event/event-target.js#L229) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  



