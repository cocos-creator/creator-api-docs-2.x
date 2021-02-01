## `Pipeline` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


管线能执行任务达到某个效果



### 索引

##### 属性（properties）

  - [`id`](#id) `Number` 管线的 id
  - [`name`](#name) `String` 管线的名字
  - [`pipes`](#pipes) `Function[]` 所有的管道



##### 方法

  - [`constructor`](#constructor) 创建一个管线
  - [`insert`](#insert) 在某个特定的点为管线插入一个新的 pipe
  - [`append`](#append) 添加一个管道到管线中
  - [`remove`](#remove) 移除特定位置的管道
  - [`sync`](#sync) 同步执行任务
  - [`async`](#async) 异步执行任务



### Details


#### 属性（properties）


##### id

> 管线的 id

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:50](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L50) |



##### name

> 管线的名字

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:62](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L62) |



##### pipes

> 所有的管道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function[]</a> |
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:74](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L74) |






<!-- Method Block -->
#### 方法


##### constructor

创建一个管线

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:97](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L97) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of pipeline
- `funcs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function[]</a> The array of pipe, every pipe must be function which take two parameters, the first is a `Task` flowed in pipeline, the second is complete callback

##### 示例

```js
var pipeline = new Pipeline('download', [
(task, done) => {
     var url = task.input;
     cc.assetManager.downloader.downloadFile(url, null, null, (err, result) => {
         task.output = result;
         done(err);
     });
},
(task, done) => {
     var text = task.input;
     var json = JSON.stringify(text);
     task.output = json;
     done();
}
]);
```

##### insert

在某个特定的点为管线插入一个新的 pipe

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:130](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L130) |

###### 参数列表
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The new pipe
	- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task handled with pipeline will be transferred to this function
	- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback you need to invoke manually when this pipe is finished. if the pipeline is synchronous, callback is unnecessary.
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The specific point you want to insert at.

##### 示例

```js
var pipeline = new Pipeline('test', []);
pipeline.insert((task, done) => {
     // do something
     done();
}, 0);
```

##### append

添加一个管道到管线中

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:165](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L165) |

###### 参数列表
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The new pipe
	- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task handled with pipeline will be transferred to this function
	- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback you need to invoke manually when this pipe is finished. if the pipeline is synchronous, callback is unnecessary.

##### 示例

```js
var pipeline = new Pipeline('test', []);
pipeline.append((task, done) => {
     // do something
     done();
});
```

##### remove

移除特定位置的管道

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:197](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L197) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The specific point

##### 示例

```js
var pipeline = new Pipeline('test', (task, done) => {
     // do something
     done();
});
pipeline.remove(0);
```

##### sync

同步执行任务

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:227](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L227) |

###### 参数列表
- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task will be executed

##### 示例

```js
var pipeline = new Pipeline('sync', [(task) => {
     let input = task.input;
     task.output = doSomething(task.input);
}]);

var task = new Task({input: 'test'});
console.log(pipeline.sync(task));
```

##### async

异步执行任务

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pipeline.js:275](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L275) |

###### 参数列表
- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task will be executed

##### 示例

```js
var pipeline = new Pipeline('sync', [(task, done) => {
     let input = task.input;
     task.output = doSomething(task.input);
     done();
}]);
var task = new Task({input: 'test', onComplete: (err, result) => console.log(result)});
pipeline.async(task);
```


