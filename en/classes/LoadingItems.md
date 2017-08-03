## `LoadingItems` Class

Extends [`CallbacksInvoker`](CallbacksInvoker.md)


Module: [cc](../modules/cc.md)




LoadingItems is the queue of items which can flow them into the loading pipeline.</br>
Please don't construct it directly, use LoadingItems.create instead, because we use an internal pool to recycle the queues.</br>
It hold a map of items, each entry in the map is a url to object key value pair.</br>
Each item always contains the following property:</br>
- id: The identification of the item, usually it's identical to url</br>
- url: The url </br>
- type: The type, it's the extension name of the url by default, could be specified manually too.</br>
- error: The error happened in pipeline will be stored in this property.</br>
- content: The content processed by the pipeline, the final result will also be stored in this property.</br>
- complete: The flag indicate whether the item is completed by the pipeline.</br>
- states: An object stores the states of each pipe the item go through, the state can be: Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE</br>
</br>
Item can hold other custom properties.</br>
Each LoadingItems object will be destroyed for recycle after onComplete callback</br>
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
You can pass the callback function in LoadingItems.create or set it later.
  - [`onComplete`](#oncomplete) This is a callback which will be invoked while all items is completed,
You can pass the callback function in LoadingItems.create or set it later.
  - [`create`](#create) The constructor function of LoadingItems, this will use recycled LoadingItems in the internal pool if possible.
You can pass onProgress and onComplete callbacks to visualize the loading process.
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
  - [`hasListener`](#haslistener) Check if the specified key has any registered callback. </br>
If a callback is also specified, it will only return true if the callback is registered.
  - [`remove`](#remove) Removes a listener. </br>
It will only remove when key, callback, target all match correctly.
  - [`removeAllListeners`](#removealllisteners) Removes all callbacks registered in a certain event
type or all callbacks registered with a certain target.
  - [`itemComplete`](#itemcomplete) Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.
  - [`destroy`](#destroy) Destroy the LoadingItems queue, the queue object won't be garbage collected, it will be recycled, so every after destroy is not reliable.
  - [`invoke`](#invoke) 
  - [`invokeAndRemove`](#invokeandremove) 
  - [`bindKey`](#bindkey) 
  - [`add`](#add) 
  - [`has`](#has) Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



### Details


#### Properties


##### map

> The map of all items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:233](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L233) |



##### completed

> The map of completed items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:241](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L241) |



##### totalCount

> Total count of all items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:249](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L249) |



##### completedCount

> Total count of completed items.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L257) |



##### active

> Activated or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:265](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L265) |






<!-- Method Block -->
#### Methods


##### onProgress

This is a callback which will be invoked while an item flow out the pipeline.
You can pass the callback function in LoadingItems.create or set it later.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L200) |

###### Parameters
- completedCount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
- totalCount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:216](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L216) |

###### Parameters
- errors <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> All errored urls will be stored in this array, if no error happened, then it will be null
- items <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> All items.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L313) |
| Return 		 | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 

###### Parameters
- pipeline <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> The pipeline to process the queue.
- urlList <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The items array.
- onProgress <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The progression callback, refer to LoadingItems.onProgress
- onComplete <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The completion callback, refer to LoadingItems.onComplete

##### Example

```js
LoadingItems.create(cc.loader, ['a.png', 'b.plist'], function (completedCount, totalCount, item) {
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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:380](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L380) |
| Return 		 | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to query


##### itemComplete

Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:392](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L392) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item which has completed


##### append

Add urls to the LoadingItems queue.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:460](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L460) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

###### Parameters
- urlList <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The url list to be appended, the url can be object or string


##### allComplete

Complete a LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:544](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L544) |



##### isCompleted

Check whether all items are completed.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:556](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L556) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### isItemCompleted

Check whether an item is completed.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:566](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L566) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### exists

Check whether an item exists.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:577](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L577) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getContent

Returns the content of an internal item.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:588](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L588) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getError

Returns the error of an internal item.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:610](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L610) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### addListener

Add a listener for an item, the callback will be invoked when the item is completed.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:631](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L631) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> can be null
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### hasListener

Check if the specified key has any registered callback. </br>
If a callback is also specified, it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:642](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L642) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### remove

Removes a listener. </br>
It will only remove when key, callback, target all match correctly.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:657](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L657) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAllListeners

Removes all callbacks registered in a certain event
type or all callbacks registered with a certain target.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:672](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L672) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### itemComplete

Complete an item in the LoadingItems queue, please do not call this method unless you know what's happening.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L704) |

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item url


##### destroy

Destroy the LoadingItems queue, the queue object won't be garbage collected, it will be recycled, so every after destroy is not reliable.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:743](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L743) |



##### invoke



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:242](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L242) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- p1 Any 
- p2 Any 
- p3 Any 
- p4 Any 
- p5 Any 


##### invokeAndRemove



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:281](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L281) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- p1 Any 
- p2 Any 
- p3 Any 
- p4 Any 
- p5 Any 


##### bindKey



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:319](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L319) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- remove <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> remove callbacks after invoked


##### add



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:71](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L71) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### has

Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:104](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L104) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/callbacks-invoker.js#L155) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed



