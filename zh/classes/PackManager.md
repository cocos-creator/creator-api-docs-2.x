## `PackManager` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


处理打包资源，包括拆包，加载，缓存等等，这是一个单例, 所有成员能通过 `cc.assetManager.packManager` 访问



### 索引



##### 方法

  - [`unpackJson`](#unpackjson) 拆解 json 包，恢复为打包之前的内容
  - [`register`](#register) 当你想修改默认行为或者拓展 packManager 来拆分其他格式的包时可以注册自定义的 handler
  - [`unpack`](#unpack) 用对应的 handler 来进行解包
  - [`load`](#load) 下载请求对象，如果请求对象不在任何包内，则正常下载，否则下载对应的 package 并进行拆解，并取回包内对应的内容



### Details




<!-- Method Block -->
#### 方法


##### unpackJson

拆解 json 包，恢复为打包之前的内容

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pack-manager.js:57](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pack-manager.js#L57) |

###### 参数列表
- `pack` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> The pack
- `json` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The content of pack
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish unpacking
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `content` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The unpacked assets

##### 示例

```js
downloader.downloadFile('pack.json', {responseType: 'json'}, null, (err, file) => {
     packManager.unpackJson(['a', 'b'], file, null, (err, data) => console.log(err));
});
```

##### register

当你想修改默认行为或者拓展 packManager 来拆分其他格式的包时可以注册自定义的 handler

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pack-manager.js:121](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pack-manager.js#L121) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.bin' or map likes {'.bin': binHandler, '.ab': abHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> handler
	- `packUuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The uuid of pack
	- `data`  The content of pack
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finishing unpacking

##### 示例

```js
packManager.register('.bin', (packUuid, file, options, onComplete) => onComplete(null, null));
packManager.register({'.bin': (packUuid, file, options, onComplete) => onComplete(null, null), '.ab': (packUuid, file, options, onComplete) => onComplete(null, null)});
```

##### unpack

用对应的 handler 来进行解包

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pack-manager.js:153](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pack-manager.js#L153) |

###### 参数列表
- `pack` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> The uuid of packed assets
- `data` Any The packed data
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The type indicates that which handler should be used to download, such as '.jpg'
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameter
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing unpacking
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `data`  Original assets

##### 示例

```js
downloader.downloadFile('pack.json', {responseType: 'json'}, null, (err, file) => {
     packManager.unpack(['2fawq123d', '1zsweq23f'], file, '.json', null, (err, data) => console.log(err));
});
```

##### load

下载请求对象，如果请求对象不在任何包内，则正常下载，否则下载对应的 package 并进行拆解，并取回包内对应的内容

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/pack-manager.js:186](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/pack-manager.js#L186) |

###### 参数列表
- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> Some item you want to download
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finished
	- `err` Err The occurred error, null indicetes success
	- `data`  The unpacked data retrieved from package

##### 示例

```js
var requestItem = cc.AssetManager.RequestItem.create();
requestItem.uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
requestItem.info = config.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
packManager.load(requestItem, null, (err, data) => console.log(err));
```


