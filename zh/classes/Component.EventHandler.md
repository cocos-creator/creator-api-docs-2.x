## `Component.EventHandler` 类型



模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`target`](#target) `Node` 
  - [`component`](#component) `String` 
  - [`handler`](#handler) `String` 
  - [`customEventData`](#customeventdata) `String` 



##### 方法

  - [`emitEvents`](#emitevents) 
  - [`emit`](#emit) 



### Details


#### 属性（properties）


##### target

> 目标节点

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:51](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L51) |



##### component

> 目标组件名

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:62](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L62) |



##### handler

> 响应事件函数名

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:72](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L72) |



##### customEventData

> 自定义事件数据

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:83](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L83) |






<!-- Method Block -->
#### 方法


##### emitEvents



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:96](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L96) |

###### 参数列表
- `events` <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> 
- `params` Any 


##### emit

触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:120](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/components/CCComponentEventHandler.js#L120) |

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


