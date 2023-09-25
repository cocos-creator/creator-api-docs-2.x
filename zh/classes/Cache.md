## `Cache` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


用于缓存某些内容



### 索引

##### 属性（properties）

  - [`count`](#count) `Number` 缓存数量



##### 方法

  - [`constructor`](#constructor) 创建一个 cache
  - [`add`](#add) 增加键值对到缓存中
  - [`get`](#get) 通过 key 获取对应的 value
  - [`has`](#has) 通过 Key 判断是否存在对应的内容
  - [`remove`](#remove) 通过 Key 移除对应的内容
  - [`clear`](#clear) 清除所有内容
  - [`forEach`](#foreach) 枚举所有内容并执行方法
  - [`find`](#find) 枚举所有内容，找到一个可以满足条件的元素
  - [`destroy`](#destroy) 销毁这个 cache



### Details


#### 属性（properties）


##### count

> 缓存数量

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/cache.js:239](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L239) |






<!-- Method Block -->
#### 方法


##### constructor

创建一个 cache

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache.js:56](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L56) |

###### 参数列表
- `map` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An object used to initialize


##### add

增加键值对到缓存中

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/asset-manager/cache.js:71](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L71) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The key
- `val` Any The value

##### 示例

```js
var cache = new Cache();
cache.add('test', null);
```

##### get

通过 key 获取对应的 value

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/asset-manager/cache.js:95](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L95) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### 示例

```js
var cache = new Cache();
var test = cache.get('test');
```

##### has

通过 Key 判断是否存在对应的内容

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/asset-manager/cache.js:117](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L117) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### 示例

```js
var cache = new Cache();
var exist = cache.has('test');
```

##### remove

通过 Key 移除对应的内容

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/asset-manager/cache.js:139](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L139) |

###### 参数列表
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### 示例

```js
var cache = new Cache();
var content = cache.remove('test');
```

##### clear

清除所有内容

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache.js:166](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L166) |


##### 示例

```js
var cache = new Cache();
cache.clear();
```

##### forEach

枚举所有内容并执行方法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache.js:189](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L189) |

###### 参数列表
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Function to be invoked
	- `val`  The value
	- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The corresponding key

##### 示例

```js
var cache = new Cache();
cache.forEach((val, key) => console.log(key));
```

##### find

枚举所有内容，找到一个可以满足条件的元素

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/asset-manager/cache.js:214](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L214) |

###### 参数列表
- `predicate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The condition

##### 示例

```js
var cache = new Cache();
var val = cache.find((val, key) => key === 'test');
```

##### destroy

销毁这个 cache

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache.js:253](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/cache.js#L253) |




