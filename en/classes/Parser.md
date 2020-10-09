## `Parser` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Parse the downloaded file, it's a singleton, all member can be accessed with `cc.assetManager.parser`



### Index



##### Methods

  - [`register`](#register) Register custom handler if you want to change default behavior or extend parser to parse other format file
  - [`parse`](#parse) Use corresponding handler to parse file



### Details




<!-- Method Block -->
#### Methods


##### register

Register custom handler if you want to change default behavior or extend parser to parse other format file

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/parser.js:336](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/parser.js#L336) |

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
| Defined in | [cocos2d/core/asset-manager/parser.js:367](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/parser.js#L367) |

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


