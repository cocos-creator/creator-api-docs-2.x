## `CallbacksInvoker` 类型


定义于: [https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js:158](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L158)

模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


CallbacksInvoker 用来根据 Key 管理并调用回调方法。



### 索引



##### 方法

  - [`hasEventListener`](#haseventlistener) 检查指定事件是否已注册回调。
  - [`removeAll`](#removeall) 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
  - [`off`](#off) 删除之前与同类型，回调，目标注册的回调。
  - [`emit`](#emit) 通过事件名发送自定义事件



### Details




<!-- Method Block -->
#### 方法


##### hasEventListener

检查指定事件是否已注册回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/callbacks-invoker.js:188](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L188) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### removeAll

移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/callbacks-invoker.js:235](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L235) |

###### 参数列表
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### off

删除之前与同类型，回调，目标注册的回调。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/callbacks-invoker.js:279](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L279) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### emit

通过事件名发送自定义事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/callbacks-invoker.js:309](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/callbacks-invoker.js#L309) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### 示例

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```


