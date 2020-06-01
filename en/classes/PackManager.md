## `PackManager` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Handle the packed asset, include unpacking, loading, cache and so on. It is a singleton. All member can be accessed with `cc.assetManager.packManager`



### Index



##### Methods

  - [`unpackJson`](#unpackjson) Unpack the json, revert to what it was before packing
  - [`register`](#register) Register custom handler if you want to change default behavior or extend packManager to unpack other format pack
  - [`unpack`](#unpack) Use corresponding handler to unpack package
  - [`load`](#load) Download request item, If item is not in any package, download as usual.



### Details




<!-- Method Block -->
#### Methods


##### unpackJson

Unpack the json, revert to what it was before packing

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pack-manager.js:54](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/pack-manager.js#L54) |

###### Parameters
- `pack` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> The pack
- `json` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The content of pack
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish unpacking
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `content` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The unpacked assets

##### Examples

```js
downloader.downloadFile('pack.json', {responseType: 'json'}, null, (err, file) => {
     packManager.unpackJson(['a', 'b'], file, null, (err, data) => console.log(err));
});
```

##### register

Register custom handler if you want to change default behavior or extend packManager to unpack other format pack

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pack-manager.js:115](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/pack-manager.js#L115) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Extension likes '.bin' or map likes {'.bin': binHandler, '.ab': abHandler}
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> handler
	- `packUuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The uuid of pack
	- `data`  The content of pack
	- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
	- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finishing unpacking

##### Examples

```js
packManager.register('.bin', (packUuid, file, options, onComplete) => onComplete(null, null));
packManager.register({'.bin': (packUuid, file, options, onComplete) => onComplete(null, null), '.ab': (packUuid, file, options, onComplete) => onComplete(null, null)});
```

##### unpack

Use corresponding handler to unpack package

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pack-manager.js:147](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/pack-manager.js#L147) |

###### Parameters
- `pack` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> The uuid of packed assets
- `data` Any The packed data
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The type indicates that which handler should be used to download, such as '.jpg'
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameter
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback when finishing unpacking
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `data`  Original assets

##### Examples

```js
downloader.downloadFile('pack.json', {responseType: 'json'}, null, (err, file) => {
     packManager.unpack(['2fawq123d', '1zsweq23f'], file, '.json', null, (err, data) => console.log(err));
});
```

##### load

Download request item, If item is not in any package, download as usual. Otherwise, download the corresponding package and unpack it.
And then retrieve the corresponding content form it.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/pack-manager.js:180](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/pack-manager.js#L180) |

###### Parameters
- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> Some item you want to download
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finished
	- `err` Err The occurred error, null indicetes success
	- `data`  The unpacked data retrieved from package

##### Examples

```js
var requestItem = cc.AssetManager.RequestItem.create();
requestItem.uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
requestItem.info = config.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
packManager.load(requestItem, null, (err, data) => console.log(err));
```


