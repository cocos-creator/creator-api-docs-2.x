## `Pipeline` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Pipeline can execute the task for some effect.



### Index

##### Properties

  - [`id`](#id) `Number` The id of pipeline
  - [`name`](#name) `String` The name of pipeline
  - [`pipes`](#pipes) `Function[]` All pipes of pipeline



##### Methods

  - [`constructor`](#constructor) Create a new pipeline
  - [`insert`](#insert) At specific point insert a new pipe to pipeline
  - [`append`](#append) Append a new pipe to the pipeline
  - [`remove`](#remove) Remove pipe which at specific point
  - [`sync`](#sync) Execute task synchronously
  - [`async`](#async) Execute task asynchronously



### Details


#### Properties


##### id

> The id of pipeline

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/pipeline.js:50](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L50) |



##### name

> The name of pipeline

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/pipeline.js:62](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L62) |



##### pipes

> All pipes of pipeline

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function[]</a> |
| Defined in | [cocos2d/core/asset-manager/pipeline.js:74](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L74) |






<!-- Method Block -->
#### Methods


##### constructor

Create a new pipeline

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pipeline.js:97](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L97) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of pipeline
- `funcs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function[]</a> The array of pipe, every pipe must be function which take two parameters, the first is a `Task` flowed in pipeline, the second is complete callback

##### Examples

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

At specific point insert a new pipe to pipeline

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| Defined in | [cocos2d/core/asset-manager/pipeline.js:130](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L130) |

###### Parameters
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The new pipe
	- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task handled with pipeline will be transferred to this function
	- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback you need to invoke manually when this pipe is finished. if the pipeline is synchronous, callback is unnecessary.
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The specific point you want to insert at.

##### Examples

```js
var pipeline = new Pipeline('test', []);
pipeline.insert((task, done) => {
     // do something
     done();
}, 0);
```

##### append

Append a new pipe to the pipeline

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| Defined in | [cocos2d/core/asset-manager/pipeline.js:165](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L165) |

###### Parameters
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The new pipe
	- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task handled with pipeline will be transferred to this function
	- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback you need to invoke manually when this pipe is finished. if the pipeline is synchronous, callback is unnecessary.

##### Examples

```js
var pipeline = new Pipeline('test', []);
pipeline.append((task, done) => {
     // do something
     done();
});
```

##### remove

Remove pipe which at specific point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> 
| Defined in | [cocos2d/core/asset-manager/pipeline.js:197](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L197) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The specific point

##### Examples

```js
var pipeline = new Pipeline('test', (task, done) => {
     // do something
     done();
});
pipeline.remove(0);
```

##### sync

Execute task synchronously

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/pipeline.js:227](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L227) |

###### Parameters
- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task will be executed

##### Examples

```js
var pipeline = new Pipeline('sync', [(task) => {
     let input = task.input;
     task.output = doSomething(task.input);
}]);

var task = new Task({input: 'test'});
console.log(pipeline.sync(task));
```

##### async

Execute task asynchronously

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pipeline.js:275](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pipeline.js#L275) |

###### Parameters
- `task` <a href="../classes/Task.html" class="crosslink">Task</a> The task will be executed

##### Examples

```js
var pipeline = new Pipeline('sync', [(task, done) => {
     let input = task.input;
     task.output = doSomething(task.input);
     done();
}]);
var task = new Task({input: 'test', onComplete: (err, result) => console.log(result)});
pipeline.async(task);
```


