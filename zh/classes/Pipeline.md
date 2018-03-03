## `Pipeline` 类型



模块: [cc](../modules/cc.md)


pipeline 描述了一系列的操作，每个操作都被称为 pipe。</br>
它被设计来做加载过程的流程管理。所以 item 应该是 url，并且该 url 将是在处理中的每个 item 的身份标识。</br>
一个 item 列表可以在 pipeline 中流动，它将输出加载项经过所有 pipe 之后的结果。</br>
它们穿过 pipeline 就像水在管子里流动，将会按顺序流过每个 pipe。</br>
最后当所有加载项都流出 pipeline 时，整个加载流程就结束了。


### 索引



##### 方法

  - [`constructor`](#constructor) 构造函数，通过一系列的 pipe 来构造一个新的 pipeline，pipes 将会在给定的顺序中被锁定。</br>
一个 pipe 就是一个对象，它包含了字符串类型的 ‘id’ 和 ‘handle’ 函数，在 pipeline 中 id 必须是唯一的。</br>
它还可以包括 ‘async’ 属性以确定它是否是一个异步过程。
  - [`insertPipe`](#insertpipe) 在给定的索引位置插入一个新的 pipe。</br>
一个 pipe 必须包含一个字符串类型的 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。
  - [`insertPipeAfter`](#insertpipeafter) !en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。
  - [`appendPipe`](#appendpipe) 添加一个新的 pipe 到 pipeline 尾部。 </br>
该 pipe 必须包含一个字符串类型 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。
  - [`flowIn`](#flowin) 让新的 item 流入 pipeline 中。</br>
这里的每个 item 可以是一个简单字符串类型的 url 或者是一个对象,
如果它是一个对象的话，他必须要包含 ‘id’ 属性。</br>
你也可以指定它的 ‘type’ 属性类型，默认情况下，该类型是 ‘url’ 的后缀名。</br>
也通过添加一个 包含 ‘skips’ 属性的 item 对象，你就可以跳过 skips 中包含的 pipe。</br>
该对象可以包含任何附加属性。
  - [`flowInDeps`](#flowindeps) 让新 items 流入 pipeline 并且当 item 列表完成时进行回调函数。</br>
这个 API 的使用通常是为了加载依赖项。</br>
例如：</br>
我们需要加载一个场景配置的 JSON 文件，该场景会将所有的依赖项全部都加载完毕以后，进行回调表示加载完毕。
  - [`copyItemStates`](#copyitemstates) 从一个源 item 向所有目标 item 复制它的 pipe 状态，用于避免重复通过部分 pipe。</br>
当一个源 item 生成了一系列新的 items 时很有用，</br>
你希望让这些新的依赖项进入 pipeline，但是又不希望它们通过源 item 已经经过的 pipe，</br>
但是你可能希望他们源 item 已经通过并跳过所有 pipes，</br>
这个时候就可以使用这个 API。
  - [`isFlowing`](#isflowing) 获取 pipeline 当前是否正在处理中。
  - [`getItems`](#getitems) 获取 pipeline 中的所有 items。返回 null，请使用 Loader / LoadingItems API。
  - [`getItem`](#getitem) 根据 id 获取一个 item
  - [`removeItem`](#removeitem) 移除指定的已完成 item。
这将仅仅从 pipeline 或者 loader 中删除其缓存，并不会释放它所依赖的资源。
cc.loader 中提供了另一种删除资源及其依赖的清理方法，请参考 <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>
  - [`clear`](#clear) 清空当前 pipeline，该函数将清理 items。



### Details




<!-- Method Block -->
#### 方法


##### constructor

构造函数，通过一系列的 pipe 来构造一个新的 pipeline，pipes 将会在给定的顺序中被锁定。</br>
一个 pipe 就是一个对象，它包含了字符串类型的 ‘id’ 和 ‘handle’ 函数，在 pipeline 中 id 必须是唯一的。</br>
它还可以包括 ‘async’ 属性以确定它是否是一个异步过程。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L111) |

###### 参数列表
- `pipes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

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

在给定的索引位置插入一个新的 pipe。</br>
一个 pipe 必须包含一个字符串类型的 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L155) |

###### 参数列表
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to insert


##### insertPipeAfter

!en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:198](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L198) |

###### 参数列表
- `refPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An existing pipe in the pipeline.
- `newPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted.


##### appendPipe

添加一个新的 pipe 到 pipeline 尾部。 </br>
该 pipe 必须包含一个字符串类型 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L215) |

###### 参数列表
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be appended


##### flowIn

让新的 item 流入 pipeline 中。</br>
这里的每个 item 可以是一个简单字符串类型的 url 或者是一个对象,
如果它是一个对象的话，他必须要包含 ‘id’ 属性。</br>
你也可以指定它的 ‘type’ 属性类型，默认情况下，该类型是 ‘url’ 的后缀名。</br>
也通过添加一个 包含 ‘skips’ 属性的 item 对象，你就可以跳过 skips 中包含的 pipe。</br>
该对象可以包含任何附加属性。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L239) |

###### 参数列表
- `items` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

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

让新 items 流入 pipeline 并且当 item 列表完成时进行回调函数。</br>
这个 API 的使用通常是为了加载依赖项。</br>
例如：</br>
我们需要加载一个场景配置的 JSON 文件，该场景会将所有的依赖项全部都加载完毕以后，进行回调表示加载完毕。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L287) |
| 废弃（Deprecated） | since v1.3 |

###### 参数列表
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### copyItemStates

从一个源 item 向所有目标 item 复制它的 pipe 状态，用于避免重复通过部分 pipe。</br>
当一个源 item 生成了一系列新的 items 时很有用，</br>
你希望让这些新的依赖项进入 pipeline，但是又不希望它们通过源 item 已经经过的 pipe，</br>
但是你可能希望他们源 item 已经通过并跳过所有 pipes，</br>
这个时候就可以使用这个 API。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:324](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L324) |

###### 参数列表
- `srcItem` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The source item
- `dstItems` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A single destination item or an array of destination items


##### isFlowing

获取 pipeline 当前是否正在处理中。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L353) |
| 废弃（Deprecated） | since v1.3 |



##### getItems

获取 pipeline 中的所有 items。返回 null，请使用 Loader / LoadingItems API。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:364](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L364) |
| 废弃（Deprecated） | since v1.3 |



##### getItem

根据 id 获取一个 item

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:375](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L375) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### removeItem

移除指定的已完成 item。
这将仅仅从 pipeline 或者 loader 中删除其缓存，并不会释放它所依赖的资源。
cc.loader 中提供了另一种删除资源及其依赖的清理方法，请参考 <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L395) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### clear

清空当前 pipeline，该函数将清理 items。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L415) |




