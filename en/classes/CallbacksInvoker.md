## `CallbacksInvoker` Class


Defined in: [https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js:158](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js#L158)

Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


The callbacks invoker to handle and invoke callbacks by key.



### Index



##### Methods

  - [`hasEventListener`](#haseventlistener) Check if the specified key has any registered callback.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
  - [`off`](#off) 
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.



### Details




<!-- Method Block -->
#### Methods


##### hasEventListener

Check if the specified key has any registered callback. If a callback is also specified,
 it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:188](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js#L188) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:235](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js#L235) |

###### Parameters
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### off



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:279](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js#L279) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:309](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/callbacks-invoker.js#L309) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```


