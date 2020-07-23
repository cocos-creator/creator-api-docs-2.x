## `Task` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Task is used to run in the pipeline for some effect



### Index

##### Properties

  - [`id`](#id) `Number` The id of task
  - [`onComplete`](#oncomplete) `Function` The callback when task is completed
  - [`onProgress`](#onprogress) `Function` The callback of progression
  - [`onError`](#onerror) `Function` The callback when something goes wrong
  - [`source`](#source) `*` The source of task
  - [`output`](#output) `*` The output of task
  - [`input`](#input) `*` The input of task
  - [`progress`](#progress) `*` The progression of task
  - [`options`](#options) `Object` Custom options
  - [`isFinish`](#isfinish) `Boolean` Whether or not this task is completed



##### Methods

  - [`constructor`](#constructor) Create a new Task
  - [`set`](#set) Set paramters of this task
  - [`dispatch`](#dispatch) Dispatch event
  - [`recycle`](#recycle) Recycle this for reuse
  - [`create`](#create) Create a new task from pool



### Details


#### Properties


##### id

> The id of task

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:47](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L47) |



##### onComplete

> The callback when task is completed

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:61](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L61) |



##### onProgress

> The callback of progression

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:73](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L73) |



##### onError

> The callback when something goes wrong

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:85](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L85) |



##### source

> The source of task

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/task.js:97](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L97) |



##### output

> The output of task

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/task.js:109](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L109) |



##### input

> The input of task

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/task.js:121](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L121) |



##### progress

> The progression of task

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/task.js:133](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L133) |



##### options

> Custom options

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:145](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L145) |



##### isFinish

> Whether or not this task is completed

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/task.js:282](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L282) |






<!-- Method Block -->
#### Methods


##### constructor

Create a new Task

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/task.js:161](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L161) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task is completed, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters


##### set

Set paramters of this task

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/task.js:182](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L182) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task complete, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters

##### Examples

```js
var task = new Task();
task.set({input: ['test'], onComplete: (err, result) => console.log(err), onProgress: (finish, total) => console.log(finish / total)});
```

##### dispatch

Dispatch event

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/task.js:217](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L217) |

###### Parameters
- `event` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The event name
- `param1` Any Parameter 1
- `param2` Any Parameter 2
- `param3` Any Parameter 3
- `param4` Any Parameter 4

##### Examples

```js
var task = Task.create();
Task.onComplete = (msg) => console.log(msg);
Task.dispatch('complete', 'hello world');
```

##### recycle

Recycle this for reuse

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/task.js:259](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L259) |



##### create

Create a new task from pool

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Task.html" class="crosslink">Task</a> 
| Defined in | [cocos2d/core/asset-manager/task.js:297](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/task.js#L297) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task complete, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters



