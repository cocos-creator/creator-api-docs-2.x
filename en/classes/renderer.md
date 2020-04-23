## `renderer` Class



Module: [cc](../modules/cc.md)


The renderer object which provide access to render system APIs,
detailed APIs will be available progressively.



### Index

##### Properties

  - [`renderEngine`](#renderengine) `Object` it will be inited as the canvas render engine.
  - [`drawCalls`](#drawcalls) `Number` The total draw call count in last rendered frame.





### Details


#### Properties


##### renderEngine

> The render engine is available only after cc.game.EVENT_ENGINE_INITED event.<br/>
Normally it will be inited as the webgl render engine, but in wechat open context domain,
it will be inited as the canvas render engine. Canvas render engine is no longer available for other use case since v2.0.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/renderer/index.js:71](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/renderer/index.js#L71) |



##### drawCalls

> The total draw call count in last rendered frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/index.js:98](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/renderer/index.js#L98) |






