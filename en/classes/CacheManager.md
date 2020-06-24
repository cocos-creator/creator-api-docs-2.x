## `CacheManager` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Cache manager is a module which controls all caches downloaded from server in non-web platform, it is a singleton
All member can be accessed with `cc.assetManager.cacheManager`.



### Index

##### Properties

  - [`cacheDir`](#cachedir) `String` The name of cacheDir
  - [`cacheEnabled`](#cacheenabled) `Boolean` Whether or not cache asset into user's storage space, this property only works on mini-game platforms
  - [`autoClear`](#autoclear) `Boolean` Whether or not auto clear cache when storage ran out, this property only works on mini-game platforms
  - [`cacheInterval`](#cacheinterval) `Number` The interval between caching resources, this property only works on mini-game platforms
  - [`deleteInterval`](#deleteinterval) `Number` The interval between deleting resources, when you use `cleanLRU`, the resources will be deleted as this interval



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
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:20](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L20) |



##### cacheEnabled

> Whether or not cache asset into user's storage space, this property only works on mini-game platforms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:33](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L33) |



##### autoClear

> Whether or not auto clear cache when storage ran out, this property only works on mini-game platforms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:46](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L46) |



##### cacheInterval

> The interval between caching resources, this property only works on mini-game platforms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:59](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L59) |



##### deleteInterval

> The interval between deleting resources, when you use `cleanLRU`, the resources will be deleted as this interval

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:72](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L72) |






<!-- Method Block -->
#### Methods


##### getCache

Get cached path with origin url

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:85](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L85) |

###### Parameters
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### getTemp

Get temporary path with origin url, this method only works on mini-game platforms

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:98](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L98) |

###### Parameters
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### clearCache

Clear all caches, please use with caution, If necessary, we recommend using it before the game is launched

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:111](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L111) |



##### clearLRU

Clear part of caches with LRU strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:122](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L122) |



##### removeCache

Remove cache with origin url

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/cache-manager.d.ts:133](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L133) |




