## `Parser` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Parse the downloaded file, it's a singleton, all member can be accessed with `cc.assetManager.parser`



### Index



##### Methods

  - [`parseImage`](#parseimage) Parse image file
  - [`parseAudio`](#parseaudio) Parse audio file
  - [`parsePVRTex`](#parsepvrtex) Parse pvr file
  - [`parsePKMTex`](#parsepkmtex) Parse pkm file
  - [`parsePlist`](#parseplist) Parse plist file
  - [`parseImport`](#parseimport) Deserialize asset file
  - [`register`](#register) Register custom handler if you want to change default behavior or extend parser to parse other format file
  - [`parse`](#parse) Use corresponding handler to parse file



### Details




<!-- Method Block -->
#### Methods


##### parseImage

Parse image file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:53](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L53) |

###### Parameters
- `file` Blob The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `img` ImageBitmap &#124; HTMLImageElement The parsed content

##### Examples

```js
downloader.downloadFile('test.jpg', {responseType: 'blob'}, null, (err, file) => {
     parser.parseImage(file, null, (err, img) => console.log(err));
});
```

##### parseAudio

Parse audio file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:93](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L93) |

###### Parameters
- `file` ArrayBuffer &#124; HTMLAudioElement The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `audio` AudioBuffer &#124; HTMLAudioElement The parsed content

##### Examples

```js
downloader.downloadFile('test.mp3', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parseAudio(file, null, (err, audio) => console.log(err));
});
```

##### parsePVRTex

Parse pvr file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:128](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L128) |

###### Parameters
- `file` ArrayBuffer &#124; ArrayBufferView The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `pvrAsset` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parsed content

##### Examples

```js
downloader.downloadFile('test.pvr', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parsePVRTex(file, null, (err, pvrAsset) => console.log(err));
});
```

##### parsePKMTex

Parse pkm file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:199](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L199) |

###### Parameters
- `file` ArrayBuffer &#124; ArrayBufferView The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `etcAsset` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parsed content

##### Examples

```js
downloader.downloadFile('test.pkm', {responseType: 'arraybuffer'}, null, (err, file) => {
     parser.parsePKMTex(file, null, (err, etcAsset) => console.log(err));
});
```

##### parsePlist

Parse plist file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:269](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L269) |

###### Parameters
- `file` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The downloaded file
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `data`  The parsed content

##### Examples

```js
downloader.downloadFile('test.plist', {responseType: 'text'}, null, (err, file) => {
     parser.parsePlist(file, null, (err, data) => console.log(err));
});
```

##### parseImport

Deserialize asset file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:298](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L298) |

###### Parameters
- `file` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The serialized json
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish parsing
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The parsed content

##### Examples

```js
downloader.downloadFile('test.json', {responseType: 'json'}, null, (err, file) => {
     parser.parseImport(file, null, (err, data) => console.log(err));
});
```

##### register

Register custom handler if you want to change default behavior or extend parser to parse other format file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:336](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L336) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The corresponding handler
	- `file`  File
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramter
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing parsing

##### Examples

```js
parser.register('.tga', (file, options, onComplete) => onComplete(null, null));
parser.register({'.tga': (file, options, onComplete) => onComplete(null, null), '.ext': (file, options, onComplete) => onComplete(null, null)});
```

##### parse

Use corresponding handler to parse file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:367](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/parser.js#L367) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The id of file
- `file` Any File
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The corresponding type of file, likes '.jpg'.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters will be transferred to the corresponding handler.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing downloading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `contetnt`  The parsed file

##### Examples

```js
downloader.downloadFile('test.jpg', {responseType: 'blob'}, null, (err, file) => {
     parser.parse('test.jpg', file, '.jpg', null, (err, img) => console.log(err));
});
```


