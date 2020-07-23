## `AssetManager` Class



Module: [cc](../modules/cc.md)


This module controls asset's behaviors and information, include loading, releasing etc. it is a singleton
All member can be accessed with `cc.assetManager`.



### Index

##### Properties

  - [`pipeline`](#pipeline) `Pipeline` Normal loading pipeline
  - [`fetchPipeline`](#fetchpipeline) `Pipeline` Fetching pipeline
  - [`transformPipeline`](#transformpipeline) `Pipeline` Url transformer
  - [`bundles`](#bundles) `Cache` The collection of bundle which is already loaded, you can remove cache with <a href="../classes/AssetManager.html#method_removeBundle" class="crosslink">removeBundle</a>
  - [`assets`](#assets) `Cache` The collection of asset which is already loaded, you can remove cache with <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a>
  - [`dependUtil`](#dependutil) `DependUtil` Manage relationship between asset and its dependencies
  - [`cacheAsset`](#cacheasset) `Boolean` Whether or not cache the loaded asset
  - [`force`](#force) `Boolean` Whether or not load asset forcely, if it is true, asset will be loaded regardless of error
  - [`utils`](#utils) `Helper` Some useful function
  - [`downloader`](#downloader) `Downloader` Manage all downloading task
  - [`parser`](#parser) `Parser` Manage all parsing task
  - [`builtins`](#builtins) `Builtins` Manage internal asset
  - [`packManager`](#packmanager) `PackManager` Manage all packed asset
  - [`cacheManager`](#cachemanager) `cc.AssetManager.CacheManager` Cache manager is a module which controls all caches downloaded from server in non-web platform.
  - [`presets`](#presets) `Object` The preset of options
  - [`main`](#main) `Bundle` The builtin 'main' bundle
  - [`resources`](#resources) `Bundle` The builtin 'resources' bundle
  - [`internal`](#internal) `Bundle` The builtin 'internal' bundle



##### Methods

  - [`init`](#init) Initialize assetManager with options
  - [`getBundle`](#getbundle) Get the bundle which has been loaded
  - [`removeBundle`](#removebundle) Remove this bundle.
  - [`loadAny`](#loadany) General interface used to load assets with a progression callback and a complete callback.
  - [`preloadAny`](#preloadany) General interface used to preload assets with a progression callback and a complete callback.It is highly recommended that you use more simple API, such as `preloadRes`, `preloadResDir` etc.
  - [`postLoadNative`](#postloadnative) Load native file of asset, if you check the option 'Async Load Assets', you may need to load native file with this before you use the asset
  - [`loadRemote`](#loadremote) Load remote asset with url, such as audio, image, text and so on.
  - [`loadScript`](#loadscript) Load script
  - [`loadBundle`](#loadbundle) load bundle
  - [`releaseAsset`](#releaseasset) Release asset and it's dependencies.
  - [`releaseUnusedAssets`](#releaseunusedassets) Release all unused assets.
  - [`releaseAll`](#releaseall) Release all assets.



### Details


#### Properties


##### pipeline

> Normal loading pipeline

| meta | description |
|------|-------------|
| Type | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:71](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L71) |



##### fetchPipeline

> Fetching pipeline

| meta | description |
|------|-------------|
| Type | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:83](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L83) |



##### transformPipeline

> Url transformer

| meta | description |
|------|-------------|
| Type | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:95](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L95) |



##### bundles

> The collection of bundle which is already loaded, you can remove cache with <a href="../classes/AssetManager.html#method_removeBundle" class="crosslink">removeBundle</a>

| meta | description |
|------|-------------|
| Type | <a href="../classes/Cache.html" class="crosslink">Cache</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:108](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L108) |



##### assets

> The collection of asset which is already loaded, you can remove cache with <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a>

| meta | description |
|------|-------------|
| Type | <a href="../classes/Cache.html" class="crosslink">Cache</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:122](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L122) |



##### dependUtil

> Manage relationship between asset and its dependencies

| meta | description |
|------|-------------|
| Type | <a href="../classes/DependUtil.html" class="crosslink">DependUtil</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:144](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L144) |



##### cacheAsset

> Whether or not cache the loaded asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:158](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L158) |



##### force

> Whether or not load asset forcely, if it is true, asset will be loaded regardless of error

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:170](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L170) |



##### utils

> Some useful function

| meta | description |
|------|-------------|
| Type | <a href="../classes/Helper.html" class="crosslink">Helper</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:182](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L182) |



##### downloader

> Manage all downloading task

| meta | description |
|------|-------------|
| Type | <a href="../classes/Downloader.html" class="crosslink">Downloader</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:194](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L194) |



##### parser

> Manage all parsing task

| meta | description |
|------|-------------|
| Type | <a href="../classes/Parser.html" class="crosslink">Parser</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:206](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L206) |



##### builtins

> Manage internal asset

| meta | description |
|------|-------------|
| Type | <a href="../classes/Builtins.html" class="crosslink">Builtins</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:218](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L218) |



##### packManager

> Manage all packed asset

| meta | description |
|------|-------------|
| Type | <a href="../classes/PackManager.html" class="crosslink">PackManager</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:230](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L230) |



##### cacheManager

> Cache manager is a module which controls all caches downloaded from server in non-web platform.

| meta | description |
|------|-------------|
| Type | cc.AssetManager.CacheManager |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:244](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L244) |



##### presets

> The preset of options

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:258](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L258) |



##### main

> The builtin 'main' bundle

| meta | description |
|------|-------------|
| Type | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:315](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L315) |



##### resources

> The builtin 'resources' bundle

| meta | description |
|------|-------------|
| Type | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:330](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L330) |



##### internal

> The builtin 'internal' bundle

| meta | description |
|------|-------------|
| Type | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:345](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L345) |






<!-- Method Block -->
#### Methods


##### init

Initialize assetManager with options

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:360](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L360) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getBundle

Get the bundle which has been loaded

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> 
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:388](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L388) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of bundle

##### Examples

```js
// ${project}/assets/test1
cc.assetManager.getBundle('test1');

cc.assetManager.getBundle('resources');
```

##### removeBundle

Remove this bundle. NOTE: The asset whthin this bundle will not be released automatically, you can call <a href="../classes/Bundle.html#method_releaseAll" class="crosslink">releaseAll</a> manually before remove it if you need

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:412](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L412) |

###### Parameters
- `bundle` <a href="../classes/Bundle.html" class="crosslink">Bundle</a> The bundle to be removed


##### loadAny

General interface used to load assets with a progression callback and a complete callback. You can achieve almost all effect you want with combination of `requests` and `options`.
It is highly recommended that you use more simple API, such as `load`, `loadDir` etc. Every custom parameter in `options` will be distribute to each of `requests`.
if request already has same one, the parameter in request will be given priority. Besides, if request has dependencies, `options` will distribute to dependencies too.
Every custom parameter in `requests` will be tranfered to handler of `downloader` and `parser` as `options`.
You can register you own handler downloader or parser to collect these custom parameters for some effect.

Reserved Keyword: `uuid`, `url`, `path`, `dir`, `scene`, `type`, `priority`, `preset`, `audioLoadMode`, `ext`, `bundle`, `onFileProgress`, `maxConcurrency`, `maxRequestsPerFrame`
`maxRetryCount`, `version`, `responseType`, `withCredentials`, `mimeType`, `timeout`, `header`, `reload`, `cacheAsset`, `cacheEnabled`,
Please DO NOT use these words as custom options!

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:430](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L430) |

###### Parameters
- `requests` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> The request you want to load
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `finished` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The current request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.
	- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The loaded content

##### Examples

```js
cc.assetManager.loadAny({url: 'http://example.com/a.png'}, (err, img) => cc.log(img));
cc.assetManager.loadAny(['60sVXiTH1D/6Aft4MRt9VC'], (err, assets) => cc.log(assets));
cc.assetManager.loadAny([{ uuid: '0cbZa5Y71CTZAccaIFluuZ'}, {url: 'http://example.com/a.png'}], (err, assets) => cc.log(assets));
cc.assetManager.downloader.register('.asset', (url, options, onComplete) => {
     url += '?userName=' + options.userName + "&password=" + options.password;
     cc.assetManager.downloader.downloadFile(url, null, onComplete);
});
cc.assetManager.parser.register('.asset', (file, options, onComplete) => {
     var json = JSON.parse(file);
     var skin = json[options.skin];
     var model = json[options.model];
     onComplete(null, {skin, model});
});
cc.assetManager.loadAny({ url: 'http://example.com/my.asset', skin: 'xxx', model: 'xxx', userName: 'xxx', password: 'xxx' });
```

##### preloadAny

General interface used to preload assets with a progression callback and a complete callback.It is highly recommended that you use more simple API, such as `preloadRes`, `preloadResDir` etc.
Everything about preload is just likes `cc.assetManager.loadAny`, the difference is `cc.assetManager.preloadAny` will only download asset but not parse asset. You need to invoke `cc.assetManager.loadAny(preloadTask)`
to finish loading asset

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:495](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L495) |

###### Parameters
- `requests` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> The request you want to preload
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `finished` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The current request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish preloading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in preloading process.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> The preloaded content

##### Examples

```js
cc.assetManager.preloadAny('0cbZa5Y71CTZAccaIFluuZ', (err) => cc.assetManager.loadAny('0cbZa5Y71CTZAccaIFluuZ'));
```

##### postLoadNative

Load native file of asset, if you check the option 'Async Load Assets', you may need to load native file with this before you use the asset

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:535](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L535) |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.

##### Examples

```js
cc.assetManager.postLoadNative(texture, (err) => console.log(err));
```

##### loadRemote

Load remote asset with url, such as audio, image, text and so on.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:588](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L588) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The url of asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
	- `audioLoadMode` cc.AudioClip.LoadMode Indicate which mode audio you want to load
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.
	- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The loaded texture

##### Examples

```js
cc.assetManager.loadRemote('http://www.cloud.com/test1.jpg', (err, texture) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test2.mp3', (err, audioClip) => console.log(err));
```

##### loadScript

Load script

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:629](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L629) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> Url of the script
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `isAsync` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Indicate whether or not loading process should be async
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when script loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success

##### Examples

```js
loadScript('http://localhost:8080/index.js', null, (err) => console.log(err));
```

##### loadBundle

load bundle

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:659](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L659) |

###### Parameters
- `nameOrUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name or root path of bundle
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramter, same like downloader.downloadFile
	- `version` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The version of this bundle, you can check config.json in this bundle
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when bundle loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `bundle` <a href="../classes/Bundle.html" class="crosslink">Bundle</a> The loaded bundle

##### Examples

```js
loadBundle('http://localhost:8080/test', null, (err, bundle) => console.log(err));
```

##### releaseAsset

Release asset and it's dependencies.
This method will not only remove the cache of the asset in assetManager, but also clean up its content.
For example, if you release a texture, the texture asset and its gl texture data will be freed up.
Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture, they may turn to black and report gl errors.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:697](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L697) |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The asset to be released

##### Examples

```js
// release a texture which is no longer need
cc.assetManager.releaseAsset(texture);
```

##### releaseUnusedAssets

Release all unused assets. Refer to <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:723](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L723) |



##### releaseAll

Release all assets. Refer to <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/CCAssetManager.js:742](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/CCAssetManager.js#L742) |




