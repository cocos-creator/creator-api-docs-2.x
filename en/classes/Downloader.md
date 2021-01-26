## `Downloader` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Control all download process, it is a singleton. All member can be accessed with `cc.assetManager.downloader` , it can download several types of files:
1. Text
2. Image
3. Audio
4. Assets
5. Scripts



### Index

##### Properties

  - [`remoteServerAddress`](#remoteserveraddress) `String` The address of remote server
  - [`maxConcurrency`](#maxconcurrency) `Number` The maximum number of concurrent when downloading
  - [`maxRequestsPerFrame`](#maxrequestsperframe) `Number` The maximum number of request can be launched per frame when downloading
  - [`maxRetryCount`](#maxretrycount) `Number` The max number of retries when fail
  - [`retryInterval`](#retryinterval) `Number` Wait for while before another retry, unit: ms



##### Methods

  - [`loadSubpackage`](#loadsubpackage) `cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead
  - [`register`](#register) Register custom handler if you want to change default behavior or extend downloader to download other format file
  - [`download`](#download) Use corresponding handler to download file under limitation



### Details


#### Properties


##### remoteServerAddress

> The address of remote server

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:214](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L214) |



##### maxConcurrency

> The maximum number of concurrent when downloading

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:229](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L229) |



##### maxRequestsPerFrame

> The maximum number of request can be launched per frame when downloading

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:242](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L242) |



##### maxRetryCount

> The max number of retries when fail

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:255](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L255) |



##### retryInterval

> Wait for while before another retry, unit: ms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:271](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L271) |






<!-- Method Block -->
#### Methods


##### loadSubpackage

`cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:585](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/deprecated.js#L585) |
| Deprecated | cc.loader.downloader.loadSubpackage is deprecated, please use AssetManager.loadBundle instead |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Subpackage name
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when subpackage loaded
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> error information


##### register

Register custom handler if you want to change default behavior or extend downloader to download other format file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/downloader.js:397](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L397) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> handler
	- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> url
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> some optional paramters will be transferred to handler.
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing downloading

##### Examples

```js
downloader.register('.tga', (url, options, onComplete) => onComplete(null, null));
downloader.register({'.tga': (url, options, onComplete) => onComplete(null, null), '.ext': (url, options, onComplete) => onComplete(null, null)});
```

##### download

Use corresponding handler to download file under limitation

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/downloader.js:428](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/downloader.js#L428) |

###### Parameters
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

##### Examples

```js
download('http://example.com/test.tga', '.tga', {onFileProgress: (loaded, total) => console.lgo(loaded/total)}, onComplete: (err) => console.log(err));
```


