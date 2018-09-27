## `CallbacksInvoker` Class

Extends [`_CallbacksHandler`](_CallbacksHandler.md)


Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


The callbacks invoker to handle and invoke callbacks by key.


### Index



##### Methods

  - [`invoke`](#invoke) 
  - [`add`](#add) 
  - [`has`](#has) Check if the specified key has any registered callback.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
  - [`remove`](#remove) 



### Details




<!-- Method Block -->
#### Methods


##### invoke



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:230](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/callbacks-invoker.js#L230) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `p1` Any 
- `p2` Any 
- `p3` Any 
- `p4` Any 
- `p5` Any 


##### add



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:97](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/callbacks-invoker.js#L97) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### has

Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:112](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/callbacks-invoker.js#L112) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:148](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/callbacks-invoker.js#L148) |

###### Parameters
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### remove



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:186](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/callbacks-invoker.js#L186) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  



