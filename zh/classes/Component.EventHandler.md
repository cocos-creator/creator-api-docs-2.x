## `Component.EventHandler` 类型



模块: [cc](../modules/cc.md)





##### 示例

```js
// Let's say we have a MainMenu component on newTarget
// file: MainMenu.js
cc.Class({
  extends: cc.Component,
  // sender: the node MainMenu.js belongs to
  // eventType: CustomEventData
  onClick (sender, eventType) {
    cc.log('click');
  }
})
// Create new EventHandler
var eventHandler = new cc.Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "onClick";
eventHandler.customEventData = "my data";
```

### 索引

##### 属性（properties）

  - [`target`](#target) `Node` 事件响应函数所在节点 ，比如例子中脚本归属的节点本身
  - [`component`](#component) `String` 事件响应函数所在组件名（脚本名）, 比如例子中的脚本名 'MainMenu'
  - [`handler`](#handler) `String` 响应事件函数名，比如例子中的 'onClick'
  - [`customEventData`](#customeventdata) `String` 自定义事件数据，比如例子中的 eventType



##### 方法

  - [`emitEvents`](#emitevents) 
  - [`emit`](#emit) 触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。



### Details


#### 属性（properties）


##### target

> 事件响应函数所在节点 ，比如例子中脚本归属的节点本身

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:61](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L61) |



##### component

> 事件响应函数所在组件名（脚本名）, 比如例子中的脚本名 'MainMenu'

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:72](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L72) |



##### handler

> 响应事件函数名，比如例子中的 'onClick'

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:92](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L92) |



##### customEventData

> 自定义事件数据，比如例子中的 eventType

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:103](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L103) |






<!-- Method Block -->
#### 方法


##### emitEvents



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:116](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L116) |

###### 参数列表
- `events` <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> 
- `params` Any 


##### emit

触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponentEventHandler.js:140](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponentEventHandler.js#L140) |

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


