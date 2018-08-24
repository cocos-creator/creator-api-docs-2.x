## `LoadingItems` Class

Extends [`CallbacksInvoker`](CallbacksInvoker.md)


Module: [cc](../modules/cc.md)


LoadingItems is the queue of items which can flow them into the loading pipeline.<br/>
Please don't construct it directly, use LoadingItems.create instead, because we use an internal pool to recycle the queues.<br/>
It hold a map of items, each entry in the map is a url to object key value pair.<br/>
Each item always contains the following property:<br/>
- id: The identification of the item, usually it's identical to url<br/>
- url: The url <br/>
- type: The type, it's the extension name of the url by default, could be specified manually too.<br/>
- error: The error happened in pipeline will be stored in this property.<br/>
- content: The content processed by the pipeline, the final result will also be stored in this property.<br/>
- complete: The flag indicate whether the item is completed by the pipeline.<br/>
- states: An object stores the states of each pipe the item go through, the state can be: Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE<br/>
<br/>
Item can hold other custom properties.<br/>
Each LoadingItems object will be destroyed for recycle after onComplete callback<br/>
So please don't hold its reference for later usage, you can copy properties in it though.


### Index

##### Properties

  - [`map`](#map) `Object` The map of all items.
  - [`completed`](#completed) `Object` The map of completed items.
  - [`totalCount`](#totalcount) `Number` Total count of all items.
  - [`completedCount`](#completedcount) `Number` Total count of completed items.
  - [`active`](#active) `Boolean` Activated or not.



##### Methods

  - [`onProgress`](#onprogress) This is a callback which will be invoked while an item flow out the pipeline.
  - [`onComplete`](#oncomplete) This is a callback which will be invoked while all items is completed,...
  - [`create`](#create) The constructor function of LoadingItems, this will use recycled LoadingItems in the internal pool if possible.
  - [`getQueue`](#getqueue) Retrieve the LoadingItems queue object for an item.
  - [`itemComplete`](#itemcomplete) Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.
  - [`append`](#append) Add urls to the LoadingItems queue.
  - [`allComplete`](#allcomplete) Complete a LoadingItems queue, please do not call this method unless you know what's happening.
  - [`isCompleted`](#iscompleted) Check whether all items are completed.
  - [`isItemCompleted`](#isitemcompleted) Check whether an item is completed.
  - [`exists`](#exists) Check whether an item exists.
  - [`getContent`](#getcontent) Returns the content of an internal item.
  - [`getError`](#geterror) Returns the error of an internal item.
  - [`addListener`](#addlistener) Add a listener for an item, the callback will be invoked when the item is completed.
  - [`hasListener`](#haslistener) Check if the specified key has any registered callback.
  - [`remove`](#remove) Removes a listener.
  - [`removeAllListeners`](#removealllisteners) Removes all callbacks registered in a certain event
  - [`itemComplete`](#itemcomplete) Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.
  - [`destroy`](#destroy) Destroy the LoadingItems queue, the queue object won't be garbage collected, it will be recycled, so every after destroy is not reliable.
  - [`invoke`](#invoke) 
  - [`add`](#add) 
  - [`hasEventListener`](#haseventlistener) Check if the specified key has any registered callback.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



### Details


#### Properties


##### map

> The map of all items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:212](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L212) |



##### completed

> The map of completed items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:220](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L220) |



##### totalCount

> Total count of all items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:228](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L228) |



##### completedCount

> Total count of completed items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:236](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L236) |



##### active

> Activated or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:244](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L244) |






<!-- Method Block -->
#### Methods


##### onProgress

This is a callback which will be invoked while an item flow out the pipeline.
You can pass the callback function in LoadingItems.create or set it later.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:179](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L179) |

###### Parameters
- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.

##### Examples

```js
loadingItems.onProgress = function (completedCount, totalCount, item) {
     var progress = (100 * completedCount / totalCount).toFixed(2);
     cc.log(progress + '%');
 }
```

##### onComplete

This is a callback which will be invoked while all items is completed,
You can pass the callback function in LoadingItems.create or set it later.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:195](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L195) |

###### Parameters
- `errors` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> All errored urls will be stored in this array, if no error happened, then it will be null
- `items` <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> All items.

##### Examples

```js
loadingItems.onComplete = function (errors, items) {
     if (error)
         cc.log('Completed with ' + errors.length + ' errors');
     else
         cc.log('Completed ' + items.totalCount + ' items');
 }
```

##### create

The constructor function of LoadingItems, this will use recycled LoadingItems in the internal pool if possible.
You can pass onProgress and onComplete callbacks to visualize the loading process.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:292](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L292) |

###### Parameters
- `pipeline` <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> The pipeline to process the queue.
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The items array.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The progression callback, refer to LoadingItems.onProgress
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The completion callback, refer to LoadingItems.onComplete

##### Examples

```js
cc.LoadingItems.create(cc.loader, ['a.png', 'b.plist'], function (completedCount, totalCount, item) {
     var progress = (100 * completedCount / totalCount).toFixed(2);
     cc.log(progress + '%');
 }, function (errors, items) {
     if (errors) {
         for (var i = 0; i < errors.length; ++i) {
             cc.log('Error url: ' + errors[i] + ', error: ' + items.getError(errors[i]));
         }
     }
     else {
         var result_a = items.getContent('a.png');
         // ...
     }
 })
```

##### getQueue

Retrieve the LoadingItems queue object for an item.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:359](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L359) |

###### Parameters
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to query


##### itemComplete

Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:371](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L371) |

###### Parameters
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item which has completed


##### append

Add urls to the LoadingItems queue.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:439](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L439) |

###### Parameters
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The url list to be appended, the url can be object or string


##### allComplete

Complete a LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:523](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L523) |



##### isCompleted

Check whether all items are completed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:535](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L535) |



##### isItemCompleted

Check whether an item is completed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:545](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L545) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### exists

Check whether an item exists.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:556](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L556) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getContent

Returns the content of an internal item.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:567](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L567) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getError

Returns the error of an internal item.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:589](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L589) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### addListener

Add a listener for an item, the callback will be invoked when the item is completed.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:610](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L610) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> can be null
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### hasListener

Check if the specified key has any registered callback.
If a callback is also specified, it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:621](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L621) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### remove

Removes a listener.
It will only remove when key, callback, target all match correctly.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:636](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L636) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAllListeners

Removes all callbacks registered in a certain event
type or all callbacks registered with a certain target.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:651](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L651) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### itemComplete

Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:683](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L683) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item url


##### destroy

Destroy the LoadingItems queue, the queue object won't be garbage collected, it will be recycled, so every after destroy is not reliable.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/loading-items.js:723](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/loading-items.js#L723) |



##### invoke



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:236](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/callbacks-invoker.js#L236) |

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
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:97](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/callbacks-invoker.js#L97) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### hasEventListener

Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/callbacks-invoker.js#L112) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:154](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/callbacks-invoker.js#L154) |

###### Parameters
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed



