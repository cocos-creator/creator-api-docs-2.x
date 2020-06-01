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

  - [`maxConcurrency`](#maxconcurrency) `Number` The maximum number of concurrent when downloading
  - [`maxRequestsPerFrame`](#maxrequestsperframe) `Number` The maximum number of request can be launched per frame when downloading
  - [`maxRetryCount`](#maxretrycount) `Number` The max number of retries when fail
  - [`retryInterval`](#retryinterval) `Number` Wait for while before another retry, unit: ms



##### Methods

  - [`loadSubpackage`](#loadsubpackage) `cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead
  - [`downloadDomImage`](#downloaddomimage) Use Image element to download image
  - [`downloadDomAudio`](#downloaddomaudio) Use audio element to download audio
  - [`downloadFile`](#downloadfile) Use XMLHttpRequest to download file
  - [`downloadScript`](#downloadscript) Load script
  - [`register`](#register) Register custom handler if you want to change default behavior or extend downloader to download other format file
  - [`download`](#download) Use corresponding handler to download file under limitation



### Details


#### Properties


##### maxConcurrency

> The maximum number of concurrent when downloading

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:211](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L211) |



##### maxRequestsPerFrame

> The maximum number of request can be launched per frame when downloading

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:224](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L224) |



##### maxRetryCount

> The max number of retries when fail

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:237](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L237) |



##### retryInterval

> Wait for while before another retry, unit: ms

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/downloader.js:253](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L253) |






<!-- Method Block -->
#### Methods


##### loadSubpackage

`cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:574](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/deprecated.js#L574) |
| Deprecated | &#x60;cc.loader.downloader.loadSubpackage&#x60; is deprecated, please use {{#crossLink &quot;AssetManager/loadBundle:method&quot;}}{{/crossLink}} instead |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Subpackage name
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when subpackage loaded
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> error information


##### downloadDomImage

Use Image element to download image

| meta | description |
|------|-------------|
| Returns | HTMLImageElement 
| Defined in | [cocos2d/core/asset-manager/downloader.js:267](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L267) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the image
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when image loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `img` HTMLImageElement The loaded Image element, null if error occurred

##### Examples

```js
downloadDomImage('http://example.com/test.jpg', null, (err, img) => console.log(err));
```

##### downloadDomAudio

Use audio element to download audio

| meta | description |
|------|-------------|
| Returns | HTMLAudioElement 
| Defined in | [cocos2d/core/asset-manager/downloader.js:291](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L291) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the audio
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when audio loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `audio` HTMLAudioElement The loaded audio element, null if error occurred

##### Examples

```js
downloadDomAudio('http://example.com/test.mp3', null, (err, audio) => console.log(err));
```

##### downloadFile

Use XMLHttpRequest to download file

| meta | description |
|------|-------------|
| Returns | XMLHttpRequest 
| Defined in | [cocos2d/core/asset-manager/downloader.js:315](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L315) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `responseType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Indicate which type of content should be returned
	- `withCredentials` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Indicate whether or not cross-site Access-Contorl requests should be made using credentials
	- `mimeType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Indicate which type of content should be returned. In some browsers, responseType does't work, you can use mimeType instead
	- `timeout` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Represent the number of ms a request can take before being terminated.
	- `header` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The header should be tranferred to server
- `onFileProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback continuously during download is processing
	- `loaded` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Size of downloaded content.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Total size of content.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when file loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `response`  The loaded content, null if error occurred, type of content can be indicated by options.responseType

##### Examples

```js
downloadFile('http://example.com/test.bin', {responseType: 'arraybuffer'}, null, (err, arrayBuffer) => console.log(err));
```

##### downloadScript

Load script

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/downloader.js:349](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L349) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the script
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `isAsync` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Indicate whether or not loading process should be async
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when script loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success

##### Examples

```js
downloadScript('http://localhost:8080/index.js', null, (err) => console.log(err));
```

##### register

Register custom handler if you want to change default behavior or extend downloader to download other format file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/downloader.js:378](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L378) |

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
| Defined in | [cocos2d/core/asset-manager/downloader.js:409](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/downloader.js#L409) |

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


