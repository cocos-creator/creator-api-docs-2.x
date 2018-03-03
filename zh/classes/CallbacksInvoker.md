## `CallbacksInvoker` 类型

继承于 [`_CallbacksHandler`](_CallbacksHandler.md)


模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


CallbacksInvoker 用来根据 Key 管理并调用回调方法。


### 索引



##### 方法

  - [`invoke`](#invoke) 
  - [`add`](#add) 
  - [`has`](#has) Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
  - [`remove`](#remove) 



### Details




<!-- Method Block -->
#### 方法


##### invoke



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L229) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `p1` Any 
- `p2` Any 
- `p3` Any 
- `p4` Any 
- `p5` Any 


##### add



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:96](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L96) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### has

Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L111) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:147](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L147) |

###### 参数列表
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### remove



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:185](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L185) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  



