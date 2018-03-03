## `eventManager` 类型



模块: [cc](../modules/cc.md)

该类已废弃。

该类已废弃，请使用 cc.systemEvent 或 cc.EventTarget 代替，详见 [监听和发射事件](../../../manual/zh/scripting/events.md)。<br>
<br>
事件管理器，它主要管理事件监听器注册和派发系统事件。


### 索引



##### 方法

  - [`pauseTarget`](#pausetarget) 暂停传入的 node 相关的所有监听器的事件响应。
  - [`resumeTarget`](#resumetarget) 恢复传入的 node 相关的所有监听器的事件响应。
  - [`hasEventListener`](#haseventlistener) 查询指定的事件 ID 是否存在
  - [`addListener`](#addlistener) 将事件监听器添加到事件管理器中。<br/>
如果参数 “nodeOrPriority” 是节点，优先级由 node 的渲染顺序决定，显示在上层的节点将优先收到事件。<br/>
如果参数 “nodeOrPriority” 是数字，优先级则固定为该参数的数值，数字越小，优先级越高。<br/>
  - [`removeListener`](#removelistener) 移除一个已添加的监听器。
  - [`removeListeners`](#removelisteners) 移除注册到 eventManager 中指定类型的所有事件监听器。<br/>
1. 如果传入的第一个参数类型是 Node，那么事件管理器将移除与该对象相关的所有事件监听器。
（如果第二参数 recursive 是 true 的话，就会连同该对象的子控件上所有的事件监听器也一并移除）<br/>
2. 如果传入的第一个参数类型是 Number（该类型 EventListener 中定义的事件类型），
那么事件管理器将移除该类型的所有事件监听器。<br/>

下列是目前存在监听器类型：       <br/>
cc.EventListener.UNKNOWN       <br/>
cc.EventListener.KEYBOARD      <br/>
cc.EventListener.ACCELERATION，<br/>
  - [`removeAllListeners`](#removealllisteners) 移除所有事件监听器。
  - [`setPriority`](#setpriority) 设置 FixedPriority 类型监听器的优先级。
  - [`setEnabled`](#setenabled) 启用或禁用事件管理器，禁用后不会分发任何事件。
  - [`isEnabled`](#isenabled) 检测事件管理器是否启用。



### Details




<!-- Method Block -->
#### 方法


##### pauseTarget

暂停传入的 node 相关的所有监听器的事件响应。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:142](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L142) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### resumeTarget

恢复传入的 node 相关的所有监听器的事件响应。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L166) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### hasEventListener

查询指定的事件 ID 是否存在

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:718](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L718) |

###### 参数列表
- `listenerID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The listener id.


##### addListener

将事件监听器添加到事件管理器中。<br/>
如果参数 “nodeOrPriority” 是节点，优先级由 node 的渲染顺序决定，显示在上层的节点将优先收到事件。<br/>
如果参数 “nodeOrPriority” 是数字，优先级则固定为该参数的数值，数字越小，优先级越高。<br/>

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:729](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L729) |

###### 参数列表
- `listener` <a href="../classes/EventListener.html" class="crosslink">EventListener</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The listener of a specified event or a object of some event parameters.
- `nodeOrPriority` <a href="../classes/Node.html" class="crosslink">Node</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.


##### removeListener

移除一个已添加的监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:806](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L806) |

###### 参数列表
- `listener` <a href="../classes/EventListener.html" class="crosslink">EventListener</a> an event listener or a registered node target

##### 示例

```js

// 1. remove eventManager add Listener;
var mouseListener1 = cc.eventManager.addListener({
    event: cc.EventListener.MOUSE,
    onMouseDown:  function(keyCode, event){ },
    onMouseUp: function(keyCode, event){ },
    onMouseMove: function () { },
    onMouseScroll: function () { }
}, node);

cc.eventManager.removeListener(mouseListener1);

// 2. remove eventListener create Listener;
var mouseListener2 = cc.EventListener.create({
    event: cc.EventListener.MOUSE,
    onMouseDown:  function(keyCode, event){ },
    onMouseUp: function(keyCode, event){ },
    onMouseMove: function () { },
    onMouseScroll: function () { }
});

cc.eventManager.removeListener(mouseListener2);

```

##### removeListeners

移除注册到 eventManager 中指定类型的所有事件监听器。<br/>
1. 如果传入的第一个参数类型是 Node，那么事件管理器将移除与该对象相关的所有事件监听器。
（如果第二参数 recursive 是 true 的话，就会连同该对象的子控件上所有的事件监听器也一并移除）<br/>
2. 如果传入的第一个参数类型是 Number（该类型 EventListener 中定义的事件类型），
那么事件管理器将移除该类型的所有事件监听器。<br/>

下列是目前存在监听器类型：       <br/>
cc.EventListener.UNKNOWN       <br/>
cc.EventListener.KEYBOARD      <br/>
cc.EventListener.ACCELERATION，<br/>

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:900](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L900) |

###### 参数列表
- `listenerType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Node.html" class="crosslink">Node</a> listenerType or a node
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### removeAllListeners

移除所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:984](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L984) |



##### setPriority

设置 FixedPriority 类型监听器的优先级。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:997](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L997) |

###### 参数列表
- `listener` <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
- `fixedPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setEnabled

启用或禁用事件管理器，禁用后不会分发任何事件。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:1027](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L1027) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isEnabled

检测事件管理器是否启用。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js:1037](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventManager.js#L1037) |




