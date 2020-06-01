## `Parser` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


解析已下载的文件，parser 是一个单例, 所有成员能通过 `cc.assetManaager.parser` 访问



### 索引



##### 方法

  - [`parseImage`](#parseimage) 解析图片文件
  - [`parseAudio`](#parseaudio) 解析音频文件
  - [`parsePVRTex`](#parsepvrtex) 解析压缩纹理格式 pvr 文件
  - [`parsePKMTex`](#parsepkmtex) 解析压缩纹理格式 pkm 文件
  - [`parsePlist`](#parseplist) 解析 plist 文件
  - [`parseImport`](#parseimport) 反序列化资源文件
  - [`register`](#register) 当你想修改默认行为或者拓展 parser 来解析其他格式文件时可以注册自定义的handler
  - [`parse`](#parse) 使用对应的handler来解析文件



### Details




<!-- Method Block -->
#### 方法


##### parseImage

解析图片文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:53](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L53) |

###### 参数列表
- `file` Blob The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `img` ImageBitmap &#124; HTMLImageElement The parsed content

##### 示例

```js
downloader.downloadFile('test.jpg', {responseType: 'blob'}, null, (err, file) => {
     parser.parseImage(file, null, (err, img) => console.log(err));
});
```

##### parseAudio

解析音频文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:93](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L93) |

###### 参数列表
- `file` ArrayBuffer &#124; HTMLAudioElement The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `audio` AudioBuffer &#124; HTMLAudioElement The parsed content

##### 示例

```js
downloader.downloadFile('test.mp3', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parseAudio(file, null, (err, audio) => console.log(err));
});
```

##### parsePVRTex

解析压缩纹理格式 pvr 文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:128](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L128) |

###### 参数列表
- `file` ArrayBuffer &#124; ArrayBufferView The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `pvrAsset` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parsed content

##### 示例

```js
downloader.downloadFile('test.pvr', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parsePVRTex(file, null, (err, pvrAsset) => console.log(err));
});
```

##### parsePKMTex

解析压缩纹理格式 pkm 文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:199](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L199) |

###### 参数列表
- `file` ArrayBuffer &#124; ArrayBufferView The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `etcAsset` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parsed content

##### 示例

```js
downloader.downloadFile('test.pkm', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parsePKMTex(file, null, (err, etcAsset) => console.log(err));
});
```

##### parsePlist

解析 plist 文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:269](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L269) |

###### 参数列表
- `file` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `data`  The parsed content

##### 示例

```js
downloader.downloadFile('test.plist', {responseType: 'text'}, null, (err, file) => {
     parser.parsePlist(file, null, (err, data) => console.log(err));
});
```

##### parseImport

反序列化资源文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:298](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L298) |

###### 参数列表
- `file` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The serialized json
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The parsed content

##### 示例

```js
downloader.downloadFile('test.json', {responseType: 'json'}, null, (err, file) => {
     parser.parseImport(file, null, (err, data) => console.log(err));
});
```

##### register

当你想修改默认行为或者拓展 parser 来解析其他格式文件时可以注册自定义的handler

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:335](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L335) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The corresponding handler
	- `file`  File
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramter
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing parsing

##### 示例

```js
parser.register('.tga', (file, options, onComplete) => onComplete(null, null));
parser.register({'.tga': (file, options, onComplete) => onComplete(null, null), '.ext': (file, options, onComplete) => onComplete(null, null)});
```

##### parse

使用对应的handler来解析文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:366](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/parser.js#L366) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The id of file
- `file` Any File
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The corresponding type of file, likes '.jpg'.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters will be transferred to the corresponding handler.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing downloading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `contetnt`  The parsed file

##### 示例

```js
downloader.downloadFile('test.jpg', {responseType: 'blob'}, null, (err, file) => {
     parser.parse('test.jpg', file, '.jpg', null, (err, img) => console.log(err));
});
```


