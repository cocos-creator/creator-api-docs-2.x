## `renderer` 类型



模块: [cc](../modules/cc.md)


提供基础渲染接口的渲染器对象，渲染层的基础接口将逐步开放给用户


### 索引

##### 属性（properties）

  - [`renderEngine`](#renderengine) `Object` 基础渲染引擎对象只在 cc.game.EVENT_ENGINE_INITED 事件触发后才可获取。
  - [`drawCalls`](#drawcalls) `Number` 上一次渲染帧所提交的渲染批次总数。





### Details


#### 属性（properties）


##### renderEngine

> 基础渲染引擎对象只在 cc.game.EVENT_ENGINE_INITED 事件触发后才可获取。<br/>
大多数情况下，它都会是 WebGL 渲染引擎实例，但是在微信开放数据域当中，它会是 Canvas 渲染引擎实例。请注意，从 2.0 开始，我们在其他平台和环境下都废弃了 Canvas 渲染器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/renderer/index.js:64](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/renderer/index.js#L64) |



##### drawCalls

> 上一次渲染帧所提交的渲染批次总数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/index.js:91](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/renderer/index.js#L91) |






