## `Game` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)


cc.game is the singleton object for game related functions.


### Index

##### Properties

  - [`EVENT_HIDE`](#eventhide) `String` Event triggered when game hide to background.
  - [`EVENT_SHOW`](#eventshow) `String` Event triggered when game back to foreground
  - [`EVENT_GAME_INITED`](#eventgameinited) `String` Event triggered after game inited, at this point all engine objects and game scripts are loaded
  - [`EVENT_RENDERER_INITED`](#eventrendererinited) `String` Event triggered after renderer inited, at this point you will be able to use the render context
  - [`CONFIG_KEY`](#configkey) `Object` Key of config
  - [`frame`](#frame) `Object` The outer frame of the game canvas, parent of cc.container.
  - [`container`](#container) `HTMLDivElement` The container of game canvas, equals to cc.container.
  - [`canvas`](#canvas) `HTMLCanvasElement` The canvas of the game, equals to cc._canvas.
  - [`config`](#config) `Object` 1.



##### Methods

  - [`onStart`](#onstart) Callback when the scripts of engine have been load.
  - [`setFrameRate`](#setframerate) Set frameRate of game.
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
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.



### Details


#### Properties


##### EVENT_HIDE

> Event triggered when game hide to background.
Please note that this event is not 100% guaranteed to be fired on Web platform,
on native platforms, it corresponds to enter background event, os status bar or notification center may not trigger this event.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:47](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L47) |

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
| Defined in | [cocos2d/core/CCGame.js:64](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L64) |



##### EVENT_GAME_INITED

> Event triggered after game inited, at this point all engine objects and game scripts are loaded

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L76) |



##### EVENT_RENDERER_INITED

> Event triggered after renderer inited, at this point you will be able to use the render context

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCGame.js:83](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L83) |



##### CONFIG_KEY

> Key of config

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:97](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L97) |



##### frame

> The outer frame of the game canvas, parent of cc.container.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/CCGame.js:135](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L135) |



##### container

> The container of game canvas, equals to cc.container.

| meta | description |
|------|-------------|
| Type | HTMLDivElement |
| Defined in | [cocos2d/core/CCGame.js:142](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L142) |



##### canvas

> The canvas of the game, equals to cc._canvas.

| meta | description |
|------|-------------|
| Type | HTMLCanvasElement |
| Defined in | [cocos2d/core/CCGame.js:149](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L149) |



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
| Defined in | [cocos2d/core/CCGame.js:157](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L157) |






<!-- Method Block -->
#### Methods


##### onStart

Callback when the scripts of engine have been load.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:219](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L219) |



##### setFrameRate

Set frameRate of game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:230](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L230) |

###### Parameters
- `frameRate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### step

Run the game frame by frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:247](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L247) |



##### pause

Pause the game main loop. This will pause:
game logic execution, rendering process, event manager, background music and all audio effects.
This is different with cc.director.pause which only pause the game logic execution.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:256](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L256) |



##### resume

Resume the game from pause. This will resume:
game logic execution, rendering process, event manager, background music and all audio effects.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:276](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L276) |



##### isPaused

Check whether the game is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:293](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L293) |



##### restart

Restart game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:303](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L303) |



##### end

End game, it will close the game window

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:330](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L330) |



##### prepare

Prepare game.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:340](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L340) |

###### Parameters
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### run

Run game with configuration object and onStart function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:440](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L440) |

###### Parameters
- `config` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Pass configuration object or onStart function
- `onStart` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> function to be executed after game initialized


##### addPersistRootNode

Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br/>
The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:464](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L464) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be made persistent


##### removePersistRootNode

Remove a persistent root node.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCGame.js:500](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L500) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be removed from persistent node list


##### isPersistRootNode

Check whether the node is a persistent root node.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCGame.js:516](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/CCGame.js#L516) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> The node to be checked


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



