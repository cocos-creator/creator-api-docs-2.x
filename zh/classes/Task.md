## `Task` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


任务用于在管线中运行以达成某种效果



### 索引

##### 属性（properties）

  - [`id`](#id) `Number` 任务id
  - [`onComplete`](#oncomplete) `Function` 完成回调
  - [`onProgress`](#onprogress) `Function` 进度回调
  - [`onError`](#onerror) `Function` 错误回调
  - [`source`](#source) `*` 任务的源
  - [`output`](#output) `*` 任务的输出
  - [`input`](#input) `*` 任务的输入
  - [`progress`](#progress) `*` 任务的进度
  - [`options`](#options) `Object` 自定义参数
  - [`isFinish`](#isfinish) `Boolean` 此任务是否已经完成



##### 方法

  - [`constructor`](#constructor) 创建一个任务
  - [`set`](#set) 设置任务的参数
  - [`dispatch`](#dispatch) 发布事件
  - [`recycle`](#recycle) 回收 task 用于复用
  - [`create`](#create) 从对象池中创建 task



### Details


#### 属性（properties）


##### id

> 任务id

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:47](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L47) |



##### onComplete

> 完成回调

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:61](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L61) |



##### onProgress

> 进度回调

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:73](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L73) |



##### onError

> 错误回调

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:85](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L85) |



##### source

> 任务的源

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/task.js:97](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L97) |



##### output

> 任务的输出

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/task.js:109](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L109) |



##### input

> 任务的输入

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/task.js:121](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L121) |



##### progress

> 任务的进度

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/task.js:133](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L133) |



##### options

> 自定义参数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:145](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L145) |



##### isFinish

> 此任务是否已经完成

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/task.js:282](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L282) |






<!-- Method Block -->
#### 方法


##### constructor

创建一个任务

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/task.js:161](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L161) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task is completed, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters


##### set

设置任务的参数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/task.js:182](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L182) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task complete, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters

##### 示例

```js
var task = new Task();
task.set({input: ['test'], onComplete: (err, result) => console.log(err), onProgress: (finish, total) => console.log(finish / total)});
```

##### dispatch

发布事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/task.js:217](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L217) |

###### 参数列表
- `event` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The event name
- `param1` Any Parameter 1
- `param2` Any Parameter 2
- `param3` Any Parameter 3
- `param4` Any Parameter 4

##### 示例

```js
var task = Task.create();
Task.onComplete = (msg) => console.log(msg);
Task.dispatch('complete', 'hello world');
```

##### recycle

回收 task 用于复用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/task.js:259](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L259) |



##### create

从对象池中创建 task

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Task.html" class="crosslink">Task</a> 
| 定义于 | [cocos2d/core/asset-manager/task.js:297](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/task.js#L297) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when the task complete, if the pipeline is synchronous, onComplete is unnecessary.
	- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Continuously callback when the task is runing, if the pipeline is synchronous, onProgress is unnecessary.
	- `onError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when something goes wrong, if the pipeline is synchronous, onError is unnecessary.
	- `input`  Something will be handled with pipeline
	- `progress`  Progress information, you may need to assign it manually when multiple pipeline share one progress
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom parameters



