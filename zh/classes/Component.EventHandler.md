## `Component.EventHandler` Class



Module: [cc](../modules/cc.md)






### Index

##### Properties

  - [`target`](#target) `Node` 目标节点
  - [`component`](#component) `String` 目标组件名
  - [`handler`](#handler) `String` 响应事件函数名
  - [`customEventData`](#customeventdata) `String` 自定义事件数据



##### Methods

  - [`emitEvents`](#emitevents) 
  - [`emit`](#emit) 触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。



### Details


#### Properties


##### target

> 目标节点

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L50) |



##### component

> 目标组件名

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:61](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L61) |



##### handler

> 响应事件函数名

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:71](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L71) |



##### customEventData

> 自定义事件数据

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:82](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L82) |






<!-- Method Block -->
#### Methods


##### emitEvents



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:95](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L95) |

###### Parameters
- events <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> 
- params Any 


##### emit

触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js:119](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponentEventHandler.js#L119) |

###### Parameters
- params <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Example

```js
// Call Function
var eventHandler = new cc.Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick"
eventHandler.emit(["param1", "param2", ....]);
```


