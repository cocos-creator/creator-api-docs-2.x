## `Parser` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


解析已下载的文件，parser 是一个单例, 所有成员能通过 `cc.assetManaager.parser` 访问



### 索引



##### 方法

  - [`register`](#register) 当你想修改默认行为或者拓展 parser 来解析其他格式文件时可以注册自定义的handler
  - [`parse`](#parse) 使用对应的handler来解析文件



### Details




<!-- Method Block -->
#### 方法


##### register

当你想修改默认行为或者拓展 parser 来解析其他格式文件时可以注册自定义的handler

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/parser.js:443](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/parser.js#L443) |

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
| 定义于 | [cocos2d/core/asset-manager/parser.js:474](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/parser.js#L474) |

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


