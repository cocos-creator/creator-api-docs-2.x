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

  - [`maxConcurrency`](#maxconcurrency) `Number` 下载时的最大并发数
  - [`maxRequestsPerFrame`](#maxrequestsperframe) `Number` 下载时每帧可以启动的最大请求数
  - [`maxRetryCount`](#maxretrycount) `Number` 失败重试次数
  - [`retryInterval`](#retryinterval) `Number` 重试的间隔时间



##### 方法

  - [`loadSubpackage`](#loadsubpackage) `cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead
  - [`downloadDomImage`](#downloaddomimage) 使用 Image 元素来下载图片
  - [`downloadDomAudio`](#downloaddomaudio) 使用 Audio 元素来下载音频
  - [`downloadFile`](#downloadfile) 使用 XMLHttpRequest 来下载文件
  - [`downloadScript`](#downloadscript) 加载脚本
  - [`register`](#register) 当你想修改默认行为或者拓展 downloader 来下载其他格式文件时可以注册自定义的 handler
  - [`download`](#download) 在限制下使用对应的 handler 来下载文件



### Details


#### 属性（properties）


##### maxConcurrency

> 下载时的最大并发数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:210](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L210) |



##### maxRequestsPerFrame

> 下载时每帧可以启动的最大请求数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:223](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L223) |



##### maxRetryCount

> 失败重试次数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:236](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L236) |



##### retryInterval

> 重试的间隔时间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/downloader.js:252](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L252) |






<!-- Method Block -->
#### 方法


##### loadSubpackage

`cc.loader.downloader.loadSubpackage` is deprecated, please use <a href="../classes/AssetManager.html#method_loadBundle" class="crosslink">loadBundle</a> instead

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:574](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/deprecated.js#L574) |
| 废弃（Deprecated） | cc.loader.downloader.loadSubpackage is deprecated, please use AssetManager.loadBundle instead |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Subpackage name
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when subpackage loaded
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> error information


##### downloadDomImage

使用 Image 元素来下载图片

| meta | description |
|------|-------------|
| 返回 | HTMLImageElement 
| 定义于 | [cocos2d/core/asset-manager/downloader.js:266](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L266) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the image
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when image loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `img` HTMLImageElement The loaded Image element, null if error occurred

##### 示例

```js
downloadDomImage('http://example.com/test.jpg', null, (err, img) => console.log(err));
```

##### downloadDomAudio

使用 Audio 元素来下载音频

| meta | description |
|------|-------------|
| 返回 | HTMLAudioElement 
| 定义于 | [cocos2d/core/asset-manager/downloader.js:290](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L290) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the audio
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when audio loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `audio` HTMLAudioElement The loaded audio element, null if error occurred

##### 示例

```js
downloadDomAudio('http://example.com/test.mp3', null, (err, audio) => console.log(err));
```

##### downloadFile

使用 XMLHttpRequest 来下载文件

| meta | description |
|------|-------------|
| 返回 | XMLHttpRequest 
| 定义于 | [cocos2d/core/asset-manager/downloader.js:314](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L314) |

###### 参数列表
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

##### 示例

```js
downloadFile('http://example.com/test.bin', {responseType: 'arraybuffer'}, null, (err, arrayBuffer) => console.log(err));
```

##### downloadScript

加载脚本

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/downloader.js:348](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L348) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Url of the script
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `isAsync` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Indicate whether or not loading process should be async
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when script loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success

##### 示例

```js
downloadScript('http://localhost:8080/index.js', null, (err) => console.log(err));
```

##### register

当你想修改默认行为或者拓展 downloader 来下载其他格式文件时可以注册自定义的 handler

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/downloader.js:377](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L377) |

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
| 定义于 | [cocos2d/core/asset-manager/downloader.js:408](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/downloader.js#L408) |

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


