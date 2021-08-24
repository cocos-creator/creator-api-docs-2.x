## `Downloader` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


管理所有下载过程，downloader 是个单例，所有成员能通过 `cc.assetManager.downloader` 访问，它能下载以下几种类型的文件：
1. 文本
2. 图片
3. 音频
4. 资源
5. 脚本



### 索引

##### 属性（properties）

  - [`remoteServerAddress`](#remoteserveraddress) `String` 远程服务器地址
  - [`maxConcurrency`](#maxconcurrency) `Number` 下载时的最大并发数
  - [`maxRequestsPerFrame`](#maxrequestsperframe) `Number` 下载时每帧可以启动的最大请求数
  - [`maxRetryCount`](#maxretrycount) `Number` 失败重试次数
  - [`retryInterval`](#retryinterval) `Number` 重试的间隔时间



##### 方法

  - [`loadSubpackage`](#loadsubpackage) `cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead
  - [`register`](#register) 当你想修改默认行为或者拓展 downloader 来下载其他格式文件时可以注册自定义的 handler
  - [`download`](#download) 在限制下使用对应的 handler 来下载文件



### Details


#### 属性（properties）


##### remoteServerAddress

> 远程服务器地址

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:214](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L214) |



##### maxConcurrency

> 下载时的最大并发数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:229](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L229) |



##### maxRequestsPerFrame

> 下载时每帧可以启动的最大请求数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:242](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L242) |



##### maxRetryCount

> 失败重试次数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:255](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L255) |



##### retryInterval

> 重试的间隔时间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:271](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L271) |






<!-- Method Block -->
#### 方法


##### loadSubpackage

`cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:585](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/deprecated.js#L585) |
| 废弃（Deprecated） | cc.loader.downloader.loadSubpackage is deprecated, please use AssetManager.loadBundle instead |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Subpackage name
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when subpackage loaded
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> error information


##### register

当你想修改默认行为或者拓展 downloader 来下载其他格式文件时可以注册自定义的 handler

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/downloader.js:397](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L397) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> handler
	- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> url
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> some optional paramters will be transferred to handler.
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing downloading

##### 示例

```js
downloader.register('.tga', (url, options, onComplete) => onComplete(null, null));
downloader.register({'.tga': (url, options, onComplete) => onComplete(null, null), '.ext': (url, options, onComplete) => onComplete(null, null)});
```

##### download

在限制下使用对应的 handler 来下载文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/downloader.js:428](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/downloader.js#L428) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The url should be downloaded
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The type indicates that which handler should be used to download, such as '.jpg'
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> some optional paramters will be transferred to the corresponding handler.
	- `onFileProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> progressive callback will be transferred to handler.
	- `maxRetryCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> How many times should retry when download failed
	- `maxConcurrency` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The maximum number of concurrent when downloading
	- `maxRequestsPerFrame` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The maximum number of request can be launched per frame when downloading
	- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The priority of this url, default is 0, the greater number is higher priority.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing downloading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `contetnt`  The downloaded file

##### 示例

```js
download('http://example.com/test.tga', '.tga', {onFileProgress: (loaded, total) => console.lgo(loaded/total)}, onComplete: (err) => console.log(err));
```


