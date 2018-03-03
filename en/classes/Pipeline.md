## `Pipeline` Class



Module: [cc](../modules/cc.md)


A pipeline describes a sequence of manipulations, each manipulation is called a pipe.</br>
It's designed for loading process. so items should be urls, and the url will be the identity of each item during the process.</br>
A list of items can flow in the pipeline and it will output the results of all pipes.</br>
They flow in the pipeline like water in tubes, they go through pipe by pipe separately.</br>
Finally all items will flow out the pipeline and the process is finished.


### Index



##### Methods

  - [`constructor`](#constructor) Constructor, pass an array of pipes to construct a new Pipeline,
the pipes will be chained in the given order.</br>
A pipe is an object which must contain an `id` in string and a `handle` function,
the id must be unique in the pipeline.</br>
It can also include `async` property to identify whether it's an asynchronous process.
  - [`insertPipe`](#insertpipe) Insert a new pipe at the given index of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
  - [`insertPipeAfter`](#insertpipeafter) !en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。
  - [`appendPipe`](#appendpipe) Add a new pipe at the end of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
  - [`flowIn`](#flowin) Let new items flow into the pipeline. </br>
Each item can be a simple url string or an object,
if it's an object, it must contain `id` property. </br>
You can specify its type by `type` property, by default, the type is the extension name in url. </br>
By adding a `skips` property including pipe ids, you can skip these pipe. </br>
The object can contain any supplementary property as you want. </br>
  - [`flowInDeps`](#flowindeps) Let new items flow into the pipeline and give a callback when the list of items are all completed. </br>
This is for loading dependencies for an existing item in flow, usually used in a pipe logic. </br>
For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded  </br>
after all its dependencies are loaded, then you will need to use function to flow in all dependencies  </br>
found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback).
  - [`copyItemStates`](#copyitemstates) Copy the item states from one source item to all destination items. </br>
It's quite useful when a pipe generate new items from one source item,</br>
then you should flowIn these generated items into pipeline, </br>
but you probably want them to skip all pipes the source item already go through,</br>
you can achieve it with this API. </br>
</br>
For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.
  - [`isFlowing`](#isflowing) Returns whether the pipeline is flowing (contains item) currently.
  - [`getItems`](#getitems) Returns all items in pipeline. Returns null, please use API of Loader or LoadingItems.
  - [`getItem`](#getitem) Returns an item in pipeline.
  - [`removeItem`](#removeitem) Removes an completed item in pipeline.
It will only remove the cache in the pipeline or loader, its dependencies won't be released.
cc.loader provided another method to completely cleanup the resource and its dependencies,
please refer to <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>
  - [`clear`](#clear) Clear the current pipeline, this function will clean up the items.



### Details




<!-- Method Block -->
#### Methods


##### constructor

Constructor, pass an array of pipes to construct a new Pipeline,
the pipes will be chained in the given order.</br>
A pipe is an object which must contain an `id` in string and a `handle` function,
the id must be unique in the pipeline.</br>
It can also include `async` property to identify whether it's an asynchronous process.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L111) |

###### Parameters
- `pipes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

```js
var pipeline = new Pipeline([
     {
         id: 'Downloader',
         handle: function (item, callback) {},
         async: true
     },
     {id: 'Parser', handle: function (item) {}, async: false}
 ]);
```

##### insertPipe

Insert a new pipe at the given index of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L155) |

###### Parameters
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to insert


##### insertPipeAfter

!en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:198](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L198) |

###### Parameters
- `refPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An existing pipe in the pipeline.
- `newPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted.


##### appendPipe

Add a new pipe at the end of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L215) |

###### Parameters
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be appended


##### flowIn

Let new items flow into the pipeline. </br>
Each item can be a simple url string or an object,
if it's an object, it must contain `id` property. </br>
You can specify its type by `type` property, by default, the type is the extension name in url. </br>
By adding a `skips` property including pipe ids, you can skip these pipe. </br>
The object can contain any supplementary property as you want. </br>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L239) |

###### Parameters
- `items` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

```js
pipeline.flowIn([
     'res/Background.png',
     {
         id: 'res/scene.json',
         type: 'scene',
         name: 'scene',
         skips: ['Downloader']
     }
 ]);
```

##### flowInDeps

Let new items flow into the pipeline and give a callback when the list of items are all completed. </br>
This is for loading dependencies for an existing item in flow, usually used in a pipe logic. </br>
For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded  </br>
after all its dependencies are loaded, then you will need to use function to flow in all dependencies  </br>
found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L287) |
| Deprecated | since v1.3 |

###### Parameters
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### copyItemStates

Copy the item states from one source item to all destination items. </br>
It's quite useful when a pipe generate new items from one source item,</br>
then you should flowIn these generated items into pipeline, </br>
but you probably want them to skip all pipes the source item already go through,</br>
you can achieve it with this API. </br>
</br>
For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:324](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L324) |

###### Parameters
- `srcItem` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The source item
- `dstItems` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A single destination item or an array of destination items


##### isFlowing

Returns whether the pipeline is flowing (contains item) currently.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L353) |
| Deprecated | since v1.3 |



##### getItems

Returns all items in pipeline. Returns null, please use API of Loader or LoadingItems.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:364](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L364) |
| Deprecated | since v1.3 |



##### getItem

Returns an item in pipeline.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:375](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L375) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### removeItem

Removes an completed item in pipeline.
It will only remove the cache in the pipeline or loader, its dependencies won't be released.
cc.loader provided another method to completely cleanup the resource and its dependencies,
please refer to <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L395) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### clear

Clear the current pipeline, this function will clean up the items.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L415) |




