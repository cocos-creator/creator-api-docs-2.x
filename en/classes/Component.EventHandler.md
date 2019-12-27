## `Component.EventHandler` Class



Module: [cc](../modules/cc.md)


Component will register a event to target component's handler.
And it will trigger the handler when a certain event occurs.

!@zh
“EventHandler” 类用来设置场景中的事件回调，
该类允许用户设置回调目标节点，目标组件名，组件方法名，
并可通过 emit 方法调用目标函数。


##### Examples

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

### Index

##### Properties

  - [`target`](#target) `Node` the node that contains target callback, such as the node example script belongs to
  - [`component`](#component) `String` name of the component(script) that contains target callback, such as the name 'MainMenu' of script in example
  - [`handler`](#handler) `String` Event handler, such as function's name 'onClick' in example
  - [`customEventData`](#customeventdata) `String` Custom Event Data, such as 'eventType' in example



##### Methods

  - [`emitEvents`](#emitevents) 
  - [`emit`](#emit) Emit event with params



### Details


#### Properties


##### target

> the node that contains target callback, such as the node example script belongs to

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:61](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L61) |



##### component

> name of the component(script) that contains target callback, such as the name 'MainMenu' of script in example

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:72](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L72) |



##### handler

> Event handler, such as function's name 'onClick' in example

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:92](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L92) |



##### customEventData

> Custom Event Data, such as 'eventType' in example

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:103](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L103) |






<!-- Method Block -->
#### Methods


##### emitEvents



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:116](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L116) |

###### Parameters
- `events` <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> 
- `params` Any 


##### emit

Emit event with params

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponentEventHandler.js:140](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponentEventHandler.js#L140) |

###### Parameters
- `params` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

```js
// Call Function
var eventHandler = new cc.Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick"
eventHandler.emit(["param1", "param2", ....]);
```


