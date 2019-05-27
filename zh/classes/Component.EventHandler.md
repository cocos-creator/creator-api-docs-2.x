## `Component.EventHandler` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





##### 示例

```js
// Create new EventHandler
var eventHandler = new cc.Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick";
eventHandler.customEventData = "my data";
```

### 索引

##### 属性（properties）

  - [`target`](#target) `Node` 目标节点
  - [`component`](#component) `String` 目标组件名
  - [`handler`](#handler) `String` 响应事件函数名
  - [`customEventData`](#customeventdata) `String` 自定义事件数据



##### 方法

  - [`emitEvents`](#emitevents) 
  - [`emit`](#emit) 触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。



### Details


#### 属性（properties）


##### target

> 目标节点

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:51](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L51) |



##### component

> 目标组件名

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:62](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L62) |



##### handler

> 响应事件函数名

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:82](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L82) |



##### customEventData

> 自定义事件数据

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:93](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L93) |






<!-- Method Block -->
#### 方法


##### emitEvents



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:106](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L106) |

###### 参数列表
- `events` <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> 
- `params` Any 


##### emit

触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:130](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/components/CCComponentEventHandler.js#L130) |

###### 参数列表
- `params` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

```js
// Call Function
var eventHandler = new cc.Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick"
eventHandler.emit(["param1", "param2", ....]);
```


