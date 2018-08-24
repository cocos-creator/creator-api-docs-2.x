## `Pipeline` Class



Module: [cc](../modules/cc.md)


A pipeline describes a sequence of manipulations, each manipulation is called a pipe.<br/>
It's designed for loading process. so items should be urls, and the url will be the identity of each item during the process.<br/>
A list of items can flow in the pipeline and it will output the results of all pipes.<br/>
They flow in the pipeline like water in tubes, they go through pipe by pipe separately.<br/>
Finally all items will flow out the pipeline and the process is finished.


### Index



##### Methods

  - [`constructor`](#constructor) Constructor, pass an array of pipes to construct a new Pipeline,...
  - [`insertPipe`](#insertpipe) Insert a new pipe at the given index of the pipeline.
  - [`insertPipeAfter`](#insertpipeafter) Insert a pipe to the end of an existing pipe.
  - [`appendPipe`](#appendpipe) Add a new pipe at the end of the pipeline.
  - [`flowIn`](#flowin) Let new items flow into the pipeline.
  - [`copyItemStates`](#copyitemstates) Copy the item states from one source item to all destination items.
  - [`getItem`](#getitem) Returns an item in pipeline.
  - [`removeItem`](#removeitem) Removes an completed item in pipeline.
  - [`clear`](#clear) Clear the current pipeline, this function will clean up the items.



### Details




<!-- Method Block -->
#### Methods


##### constructor

Constructor, pass an array of pipes to construct a new Pipeline,
the pipes will be chained in the given order.<br/>
A pipe is an object which must contain an `id` in string and a `handle` function,
the id must be unique in the pipeline.<br/>
It can also include `async` property to identify whether it's an asynchronous process.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L112) |

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

Insert a new pipe at the given index of the pipeline. <br/>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:156](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L156) |

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
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L199) |

###### Parameters
- `refPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An existing pipe in the pipeline.
- `newPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted.


##### appendPipe

Add a new pipe at the end of the pipeline. <br/>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:216](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L216) |

###### Parameters
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be appended


##### flowIn

Let new items flow into the pipeline. <br/>
Each item can be a simple url string or an object,
if it's an object, it must contain `id` property. <br/>
You can specify its type by `type` property, by default, the type is the extension name in url. <br/>
By adding a `skips` property including pipe ids, you can skip these pipe. <br/>
The object can contain any supplementary property as you want. <br/>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:240](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L240) |

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

##### copyItemStates

Copy the item states from one source item to all destination items. <br/>
It's quite useful when a pipe generate new items from one source item,<br/>
then you should flowIn these generated items into pipeline, <br/>
but you probably want them to skip all pipes the source item already go through,<br/>
you can achieve it with this API. <br/>
<br/>
For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:325](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L325) |

###### Parameters
- `srcItem` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The source item
- `dstItems` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A single destination item or an array of destination items


##### getItem

Returns an item in pipeline.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:354](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L354) |

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
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:374](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L374) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### clear

Clear the current pipeline, this function will clean up the items.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/load-pipeline/pipeline.js:394](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L394) |




