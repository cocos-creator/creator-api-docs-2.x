## `CacheManager` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Cache manager is a module which controls all caches downloaded from server in non-web platform, it is a singleton
All member can be accessed with `cc.assetManager.cacheManager`.



### Index

##### Properties

  - [`cacheDir`](#cachedir) `String` The name of cacheDir
  - [`cacheEnabled`](#cacheenabled) `Boolean` Whether or not cache asset into user's storage space, this property only works on mini-game platforms
  - [`autoClear`](#autoclear) `Boolean` Whether or not auto clear cache when storage ran out, this property only works on mini-game platforms
  - [`cacheInterval`](#cacheinterval) `Number` The interval between caching resources, this property only works on mini-game platforms, unit: ms
  - [`deleteInterval`](#deleteinterval) `Number` The interval between deleting resources, when you use `cleanLRU`, the resources will be deleted as this interval, unit: ms
  - [`cachedFiles`](#cachedfiles) `Cache` List of all cached files



##### Methods

  - [`getCache`](#getcache) Get cached path with origin url
  - [`getTemp`](#gettemp) Get temporary path with origin url, this method only works on mini-game platforms
  - [`clearCache`](#clearcache) Clear all caches, please use with caution, If necessary, we recommend using it before the game is launched
  - [`clearLRU`](#clearlru) Clear part of caches with LRU strategy
  - [`removeCache`](#removecache) Remove cache with origin url



### Details


#### Properties


##### cacheDir

> The name of cacheDir

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:20](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L20) |



##### cacheEnabled

> Whether or not cache asset into user's storage space, this property only works on mini-game platforms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:33](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L33) |



##### autoClear

> Whether or not auto clear cache when storage ran out, this property only works on mini-game platforms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:46](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L46) |



##### cacheInterval

> The interval between caching resources, this property only works on mini-game platforms, unit: ms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:59](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L59) |



##### deleteInterval

> The interval between deleting resources, when you use `cleanLRU`, the resources will be deleted as this interval, unit: ms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:72](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L72) |



##### cachedFiles

> List of all cached files

| meta | description |
|------|-------------|
| Type | <a href="../classes/Cache.html" class="crosslink">Cache</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:85](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L85) |






<!-- Method Block -->
#### Methods


##### getCache

Get cached path with origin url

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:99](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L99) |

###### Parameters
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### getTemp

Get temporary path with origin url, this method only works on mini-game platforms

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:112](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L112) |

###### Parameters
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### clearCache

Clear all caches, please use with caution, If necessary, we recommend using it before the game is launched

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:125](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L125) |



##### clearLRU

Clear part of caches with LRU strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:136](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L136) |



##### removeCache

Remove cache with origin url

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.ts:147](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/cache-manager.ts#L147) |




