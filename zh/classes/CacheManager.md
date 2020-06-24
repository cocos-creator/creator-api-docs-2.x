## `CacheManager` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存，这是一个单例，所有成员能通过 `cc.assetManager.cacheManager` 访问。



### 索引

##### 属性（properties）

  - [`cacheDir`](#cachedir) `String` 缓存目录的名称
  - [`cacheEnabled`](#cacheenabled) `Boolean` 是否缓存资源到用户存储空间，此属性只在小游戏平台有效
  - [`autoClear`](#autoclear) `Boolean` 是否在存储空间满了后自动清理缓存，此属性只在小游戏平台有效
  - [`cacheInterval`](#cacheinterval) `Number` 缓存资源的间隔时间，此属性只在小游戏平台有效
  - [`deleteInterval`](#deleteinterval) `Number` 清理资源的间隔时间，当你使用 `cleanLRU` 时，资源将以此间隔被删除



##### 方法

  - [`getCache`](#getcache) 通过原始 url 获取缓存后的路径
  - [`getTemp`](#gettemp) 通过原始 url 获取临时文件的路径，此方法只在小游戏平台有效
  - [`clearCache`](#clearcache) 清空所有缓存，请谨慎使用，如果必要的话，我们建议在游戏启动之前使用
  - [`clearLRU`](#clearlru) 使用 LRU 策略清空部分缓存
  - [`removeCache`](#removecache) 通过原始 url 移除缓存



### Details


#### 属性（properties）


##### cacheDir

> 缓存目录的名称

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:20](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L20) |



##### cacheEnabled

> 是否缓存资源到用户存储空间，此属性只在小游戏平台有效

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:33](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L33) |



##### autoClear

> 是否在存储空间满了后自动清理缓存，此属性只在小游戏平台有效

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:46](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L46) |



##### cacheInterval

> 缓存资源的间隔时间，此属性只在小游戏平台有效

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:59](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L59) |



##### deleteInterval

> 清理资源的间隔时间，当你使用 `cleanLRU` 时，资源将以此间隔被删除

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:72](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L72) |






<!-- Method Block -->
#### 方法


##### getCache

通过原始 url 获取缓存后的路径

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:85](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L85) |

###### 参数列表
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### getTemp

通过原始 url 获取临时文件的路径，此方法只在小游戏平台有效

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:98](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L98) |

###### 参数列表
- `originUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### clearCache

清空所有缓存，请谨慎使用，如果必要的话，我们建议在游戏启动之前使用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:111](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L111) |



##### clearLRU

使用 LRU 策略清空部分缓存

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:122](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L122) |



##### removeCache

通过原始 url 移除缓存

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/cache-manager.d.ts:133](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/cache-manager.d.ts#L133) |




