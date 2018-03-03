## `LoadingItems` 类型

继承于 [`CallbacksInvoker`](CallbacksInvoker.md)


模块: [cc](../modules/cc.md)


LoadingItems 是一个加载对象队列，可以用来输送加载对象到加载管线中。</br>
请不要直接使用 new 构造这个类的对象，你可以使用 LoadingItems.create 来创建一个新的加载队列，这样可以允许我们的内部对象池回收并重利用加载队列。
它有一个 map 属性用来存放加载项，在 map 对象中已 url 为 key 值。</br>
每个对象都会包含下列属性：</br>
- id：该对象的标识，通常与 url 相同。</br>
- url：路径 </br>
- type: 类型，它这是默认的 URL 的扩展名，可以手动指定赋值。</br>
- error：pipeline 中发生的错误将被保存在这个属性中。</br>
- content: pipeline 中处理的临时结果，最终的结果也将被存储在这个属性中。</br>
- complete：该标志表明该对象是否通过 pipeline 完成。</br>
- states：该对象存储每个管道中对象经历的状态，状态可以是 Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE</br>
</br>
对象可容纳其他自定义属性。</br>
每个 LoadingItems 对象都会在 onComplete 回调之后被销毁，所以请不要持有它的引用并在结束回调之后依赖它的内容执行任何逻辑，有这种需求的话你可以提前复制它的内容。


### 索引

##### 属性（properties）

  - [`map`](#map) `Object` 存储所有加载项的对象。
  - [`completed`](#completed) `Object` 存储已经完成的加载项。
  - [`totalCount`](#totalcount) `Number` 所有加载项的总数。
  - [`completedCount`](#completedcount) `Number` 所有完成加载项的总数。
  - [`active`](#active) `Boolean` 是否启用。



##### 方法

  - [`onProgress`](#onprogress) 这个回调函数将在 item 加载结束后被调用。你可以在构造时传递这个回调函数或者是在构造之后直接设置。
  - [`onComplete`](#oncomplete) 该函数将在加载队列全部完成时被调用。你可以在构造时传递这个回调函数或者是在构造之后直接设置。
  - [`create`](#create) LoadingItems 的构造函数，这种构造方式会重用内部对象缓冲池中的 LoadingItems 队列，以尽量避免对象创建。
你可以传递 onProgress 和 onComplete 回调函数来获知加载进度信息。
  - [`getQueue`](#getqueue) 通过 item 对象获取它的 LoadingItems 队列。
  - [`itemComplete`](#itemcomplete) 通知 LoadingItems 队列一个 item 对象已完成，请不要调用这个函数，除非你知道自己在做什么。
  - [`append`](#append) 向一个 LoadingItems 队列添加加载项。
  - [`allComplete`](#allcomplete) 完成一个 LoadingItems 队列，请不要调用这个函数，除非你知道自己在做什么。
  - [`isCompleted`](#iscompleted) 检查是否所有加载项都已经完成。
  - [`isItemCompleted`](#isitemcompleted) 通过 id 检查指定加载项是否已经加载完成。
  - [`exists`](#exists) 通过 id 检查加载项是否存在。
  - [`getContent`](#getcontent) 通过 id 获取指定对象的内容。
  - [`getError`](#geterror) 通过 id 获取指定对象的错误信息。
  - [`addListener`](#addlistener) 监听加载项（通过 key 指定）的完成事件。
  - [`hasListener`](#haslistener) 检查指定的加载项是否有完成事件监听器。</br>
如果同时还指定了一个回调方法，并且回调有注册，它只会返回 true。
  - [`remove`](#remove) 移除指定加载项已经注册的完成事件监听器。</br>
只会删除 key, callback, target 均匹配的监听器。
  - [`removeAllListeners`](#removealllisteners) 删除指定目标的所有完成事件监听器。
  - [`itemComplete`](#itemcomplete) 通知 LoadingItems 队列一个 item 对象已完成，请不要调用这个函数，除非你知道自己在做什么。
  - [`destroy`](#destroy) 销毁一个 LoadingItems 队列，这个队列对象会被内部缓冲池回收，所以销毁后的所有内部信息都是不可依赖的。
  - [`invoke`](#invoke) 
  - [`add`](#add) 
  - [`has`](#has) Check if the specified key has any registered callback. If a callback is also specified,
it will only return true if the callback is registered.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



### Details


#### 属性（properties）


##### map

> 存储所有加载项的对象。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:211](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L211) |



##### completed

> 存储已经完成的加载项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:219](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L219) |



##### totalCount

> 所有加载项的总数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:227](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L227) |



##### completedCount

> 所有完成加载项的总数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:235](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L235) |



##### active

> 是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L243) |






<!-- Method Block -->
#### 方法


##### onProgress

这个回调函数将在 item 加载结束后被调用。你可以在构造时传递这个回调函数或者是在构造之后直接设置。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:178](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L178) |

###### 参数列表
- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.

##### 示例

```js
loadingItems.onProgress = function (completedCount, totalCount, item) {
     var progress = (100 * completedCount / totalCount).toFixed(2);
     cc.log(progress + '%');
 }
```

##### onComplete

该函数将在加载队列全部完成时被调用。你可以在构造时传递这个回调函数或者是在构造之后直接设置。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:194](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L194) |

###### 参数列表
- `errors` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> All errored urls will be stored in this array, if no error happened, then it will be null
- `items` <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> All items.

##### 示例

```js
loadingItems.onComplete = function (errors, items) {
     if (error)
         cc.log('Completed with ' + errors.length + ' errors');
     else
         cc.log('Completed ' + items.totalCount + ' items');
 }
```

##### create

LoadingItems 的构造函数，这种构造方式会重用内部对象缓冲池中的 LoadingItems 队列，以尽量避免对象创建。
你可以传递 onProgress 和 onComplete 回调函数来获知加载进度信息。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:291](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L291) |

###### 参数列表
- `pipeline` <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> The pipeline to process the queue.
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The items array.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The progression callback, refer to LoadingItems.onProgress
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The completion callback, refer to LoadingItems.onComplete

##### 示例

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

通过 item 对象获取它的 LoadingItems 队列。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:358](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L358) |

###### 参数列表
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to query


##### itemComplete

通知 LoadingItems 队列一个 item 对象已完成，请不要调用这个函数，除非你知道自己在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L370) |

###### 参数列表
- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item which has completed


##### append

向一个 LoadingItems 队列添加加载项。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:438](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L438) |

###### 参数列表
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The url list to be appended, the url can be object or string


##### allComplete

完成一个 LoadingItems 队列，请不要调用这个函数，除非你知道自己在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:522](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L522) |



##### isCompleted

检查是否所有加载项都已经完成。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:534](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L534) |



##### isItemCompleted

通过 id 检查指定加载项是否已经加载完成。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:544](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L544) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### exists

通过 id 检查加载项是否存在。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:555](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L555) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getContent

通过 id 获取指定对象的内容。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:566](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L566) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### getError

通过 id 获取指定对象的错误信息。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:588](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L588) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item's id.


##### addListener

监听加载项（通过 key 指定）的完成事件。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:609](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L609) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> can be null
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> can be null


##### hasListener

检查指定的加载项是否有完成事件监听器。</br>
如果同时还指定了一个回调方法，并且回调有注册，它只会返回 true。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:620](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L620) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### remove

移除指定加载项已经注册的完成事件监听器。</br>
只会删除 key, callback, target 均匹配的监听器。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:635](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L635) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### removeAllListeners

删除指定目标的所有完成事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:650](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L650) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### itemComplete

通知 LoadingItems 队列一个 item 对象已完成，请不要调用这个函数，除非你知道自己在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:682](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L682) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item url


##### destroy

销毁一个 LoadingItems 队列，这个队列对象会被内部缓冲池回收，所以销毁后的所有内部信息都是不可依赖的。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js:722](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loading-items.js#L722) |



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



