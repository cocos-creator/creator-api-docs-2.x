## `Cache` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


use to cache something



### Index

##### Properties

  - [`count`](#count) `Number` The count of cached content



##### Methods

  - [`constructor`](#constructor) Create a cache
  - [`add`](#add) Add Key-Value to cache
  - [`get`](#get) Get the cached content by key
  - [`has`](#has) Check whether or not content exists by key
  - [`remove`](#remove) Remove the cached content by key
  - [`clear`](#clear) Clear all content
  - [`forEach`](#foreach) Enumerate all content and invoke function
  - [`find`](#find) Enumerate all content to find one element which can fulfill condition
  - [`destroy`](#destroy) Destroy this cache



### Details


#### Properties


##### count

> The count of cached content

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/cache.js:239](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L239) |






<!-- Method Block -->
#### Methods


##### constructor

Create a cache

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache.js:56](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L56) |

###### Parameters
- `map` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An object used to initialize


##### add

Add Key-Value to cache

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/cache.js:71](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L71) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The key
- `val` Any The value

##### Examples

```js
var cache = new Cache();
cache.add('test', null);
```

##### get

Get the cached content by key

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/cache.js:95](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L95) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### Examples

```js
var cache = new Cache();
var test = cache.get('test');
```

##### has

Check whether or not content exists by key

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/asset-manager/cache.js:117](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L117) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### Examples

```js
var cache = new Cache();
var exist = cache.has('test');
```

##### remove

Remove the cached content by key

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/cache.js:139](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L139) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The key

##### Examples

```js
var cache = new Cache();
var content = cache.remove('test');
```

##### clear

Clear all content

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache.js:166](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L166) |


##### Examples

```js
var cache = new Cache();
cache.clear();
```

##### forEach

Enumerate all content and invoke function

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache.js:189](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L189) |

###### Parameters
- `func` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Function to be invoked
	- `val`  The value
	- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The corresponding key

##### Examples

```js
var cache = new Cache();
cache.forEach((val, key) => console.log(key));
```

##### find

Enumerate all content to find one element which can fulfill condition

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/cache.js:214](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L214) |

###### Parameters
- `predicate` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The condition

##### Examples

```js
var cache = new Cache();
var val = cache.find((val, key) => key === 'test');
```

##### destroy

Destroy this cache

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache.js:253](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/cache.js#L253) |




