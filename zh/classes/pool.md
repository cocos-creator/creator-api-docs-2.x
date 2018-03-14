## `Pool` 类型



模块: [cc](../modules/cc.md)
父模块: [js](../modules/js.md)


长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。


### 索引

##### 属性（properties）

  - [`count`](#count) `Number` 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。



##### 方法

  - [`constructor`](#constructor) 使用构造函数来创建一个指定对象类型的对象池，您可以传递一个回调函数，用于处理对象回收时的清理逻辑。
  - [`get`](#get) 获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
  - [`_get`](#get) 获取对象池中的对象，如果对象池没有可用对象，则返回空。
  - [`put`](#put) 向对象池返还一个不再需要的对象。
  - [`resize`](#resize) 设置对象池容量。



### Details


#### 属性（properties）


##### count

> 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:894](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L894) |






<!-- Method Block -->
#### 方法


##### constructor

使用构造函数来创建一个指定对象类型的对象池，您可以传递一个回调函数，用于处理对象回收时的清理逻辑。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:859](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L859) |

###### 参数列表
- `cleanupFunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the callback method used to process the cleanup logic when the object is recycled.
	- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `size` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> initializes the length of the array


##### get

获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:884](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L884) |

###### 参数列表
- `params` Any parameters to used to initialize the object


##### _get

获取对象池中的对象，如果对象池没有可用对象，则返回空。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; Null 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:904](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L904) |



##### put

向对象池返还一个不再需要的对象。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:922](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L922) |



##### resize

设置对象池容量。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:938](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L938) |




