## `loader` Class



Module: [cc](../modules/cc.md)

deprecated: cc.loader is deprecated, please backup your project and upgrade to cc.assetManager

`cc.loader` is deprecated, please backup your project and upgrade to <a href="../classes/AssetManager.html" class="crosslink">AssetManager</a>



### Index

##### Properties

  - [`onProgress`](#onprogress) `Unknown` `cc.loader.onProgress` is deprecated, please transfer onProgress to API as a parameter
  - [`assetLoader`](#assetloader) `Object` `cc.loader.assetLoader` was removed, assetLoader and md5Pipe were merged into <a href="../classes/AssetManager.html#property_transformPipeline" class="crosslink">transformPipeline</a>
  - [`md5Pipe`](#md5pipe) `Object` `cc.loader.md5Pipe` is deprecated, assetLoader and md5Pipe were merged into <a href="../classes/AssetManager.html#property_transformPipeline" class="crosslink">transformPipeline</a>
  - [`downloader`](#downloader) `Object` `cc.loader.downloader` is deprecated, please use <a href="../classes/AssetManager.html#property_downloader" class="crosslink">downloader</a> instead
  - [`loader`](#loader) `Object` `cc.loader.loader` is deprecated, please use <a href="../classes/AssetManager.html#property_parser" class="crosslink">parser</a> instead



##### Methods

  - [`load`](#load) `cc.loader.load` is deprecated, please use <a href="../classes/AssetManager.html#method_loadAny" class="crosslink">loadAny</a> instead
  - [`getXMLHttpRequest`](#getxmlhttprequest) `cc.loader.getXMLHttpRequest` is deprecated, please use `XMLHttpRequest` directly
  - [`getItem`](#getitem) `cc.loader.getItem` is deprecated, please use `cc.assetManager.asset.get` instead
  - [`loadRes`](#loadres) `cc.loader.loadRes` is deprecated, please use <a href="../classes/Bundle.html#method_load" class="crosslink">load</a>  instead
  - [`loadResArray`](#loadresarray) `cc.loader.loadResArray` is deprecated, please use <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> instead
  - [`loadResDir`](#loadresdir) `cc.loader.loadResDir` is deprecated, please use <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> instead
  - [`getRes`](#getres) `cc.loader.getRes` is deprecated, please use <a href="../classes/Bundle.html#method_get" class="crosslink">get</a> instead
  - [`getDependsRecursively`](#getdependsrecursively) `cc.loader.getDependsRecursively` is deprecated, please use use DependUtil/getDepsRecursively:method instead
  - [`addDownloadHandlers`](#adddownloadhandlers) `cc.loader.addDownloadHandlers` is deprecated, please use `cc.assetManager.downloader.register` instead
  - [`addLoadHandlers`](#addloadhandlers) `cc.loader.addLoadHandlers` is deprecated, please use `cc.assetManager.parser.register` instead
  - [`release`](#release) `cc.loader.release` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> instead
  - [`releaseAsset`](#releaseasset) `cc.loader.releaseAsset` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> instead
  - [`releaseRes`](#releaseres) `cc.loader.releaseRes` is deprecated, please use AssetManager/releaseRes:method instead
  - [`releaseResDir`](#releaseresdir) `cc.loader.releaseResDir` was removed, please use AssetManager/releaseRes:method instead
  - [`releaseAll`](#releaseall) `cc.loader.releaseAll` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a> instead
  - [`removeItem`](#removeitem) `cc.loader.removeItem` is deprecated, please use `cc.assetManager.assets.remove` instead
  - [`setAutoRelease`](#setautorelease) `cc.loader.setAutoRelease` is deprecated, if you want to prevent some asset from auto releasing, please use <a href="../classes/Asset.html#method_addRef" class="crosslink">addRef</a> instead
  - [`setAutoReleaseRecursively`](#setautoreleaserecursively) `cc.loader.setAutoReleaseRecursively` is deprecated, if you want to prevent some asset from auto releasing, please use <a href="../classes/Asset.html#method_addRef" class="crosslink">addRef</a> instead
  - [`isAutoRelease`](#isautorelease) `cc.loader.isAutoRelease` is deprecated



### Details


#### Properties


##### onProgress

> `cc.loader.onProgress` is deprecated, please transfer onProgress to API as a parameter

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:72](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L72) |
| Deprecated | cc.loader.onProgress is deprecated, please transfer onProgress to API as a parameter |



##### assetLoader

> `cc.loader.assetLoader` was removed, assetLoader and md5Pipe were merged into <a href="../classes/AssetManager.html#property_transformPipeline" class="crosslink">transformPipeline</a>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:341](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L341) |
| Deprecated | cc.loader.assetLoader was removed, assetLoader and md5Pipe were merged into cc.assetManager.transformPipeline |



##### md5Pipe

> `cc.loader.md5Pipe` is deprecated, assetLoader and md5Pipe were merged into <a href="../classes/AssetManager.html#property_transformPipeline" class="crosslink">transformPipeline</a>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:354](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L354) |
| Deprecated | cc.loader.md5Pipe is deprecated, assetLoader and md5Pipe were merged into cc.assetManager.transformPipeline |



##### downloader

> `cc.loader.downloader` is deprecated, please use <a href="../classes/AssetManager.html#property_downloader" class="crosslink">downloader</a> instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:365](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L365) |
| Deprecated | cc.loader.downloader is deprecated, please use cc.assetManager.downloader instead |



##### loader

> `cc.loader.loader` is deprecated, please use <a href="../classes/AssetManager.html#property_parser" class="crosslink">parser</a> instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:376](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L376) |
| Deprecated | cc.loader.loader is deprecated, please use cc.assetManager.parser instead |






<!-- Method Block -->
#### Methods


##### load

`cc.loader.load` is deprecated, please use <a href="../classes/AssetManager.html#method_loadAny" class="crosslink">loadAny</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:84](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L84) |
| Deprecated | cc.loader.load is deprecated, please use cc.assetManager.loadAny instead |

###### Parameters
- `resources` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Url list in an array
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when all resources loaded


##### getXMLHttpRequest

`cc.loader.getXMLHttpRequest` is deprecated, please use `XMLHttpRequest` directly

| meta | description |
|------|-------------|
| Returns | XMLHttpRequest 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:173](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L173) |
| Deprecated | cc.loader.getXMLHttpRequest is deprecated, please use XMLHttpRequest directly |



##### getItem

`cc.loader.getItem` is deprecated, please use `cc.assetManager.asset.get` instead

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:186](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L186) |
| Deprecated | cc.loader.getItem is deprecated, please use cc.assetManager.assets.get instead |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### loadRes

`cc.loader.loadRes` is deprecated, please use <a href="../classes/Bundle.html#method_load" class="crosslink">load</a>  instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:198](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L198) |
| Deprecated | cc.loader.loadRes is deprecated, please use cc.resources.load  instead |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Url of the target resource.
                      The url is relative to the "resources" folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when the resource loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error info or null if loaded successfully.
	- `resource` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The loaded resource if it can be found otherwise returns null.


##### loadResArray

`cc.loader.loadResArray` is deprecated, please use <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:232](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L232) |
| Deprecated | cc.loader.loadResArray is deprecated, please use cc.resources.load instead |

###### Parameters
- `urls` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> Array of URLs of the target resource.
                         The url is relative to the "resources" folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called
                                        with the error. If all assets are loaded successfully, error will be null.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> An array of all loaded assets.
                                                    If nothing to load, assets will be an empty array.


##### loadResDir

`cc.loader.loadResDir` is deprecated, please use <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:270](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L270) |
| Deprecated | cc.loader.loadResDir is deprecated, please use cc.resources.loadDir instead |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Url of the target folder.
                      The url is relative to the "resources" folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline.
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called
                                        with the error. If all assets are loaded successfully, error will be null.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> An array of all loaded assets.
                                            If nothing to load, assets will be an empty array.
	- `urls` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> An array that lists all the URLs of loaded assets.


##### getRes

`cc.loader.getRes` is deprecated, please use <a href="../classes/Bundle.html#method_get" class="crosslink">get</a> instead

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:311](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L311) |
| Deprecated | cc.loader.getRes is deprecated, please use cc.resources.get instead |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be returned if this argument is supplied.


##### getDependsRecursively

`cc.loader.getDependsRecursively` is deprecated, please use use DependUtil/getDepsRecursively:method instead

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:328](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L328) |
| Deprecated | cc.loader.getDependsRecursively is deprecated, please use use cc.assetManager.dependUtil.getDepsRecursively instead |

###### Parameters
- `owner` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The owner asset or the resource url or the asset's uuid


##### addDownloadHandlers

`cc.loader.addDownloadHandlers` is deprecated, please use `cc.assetManager.downloader.register` instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:387](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L387) |
| Deprecated | cc.loader.addDownloadHandlers is deprecated, please use cc.assetManager.downloader.register instead |

###### Parameters
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler


##### addLoadHandlers

`cc.loader.addLoadHandlers` is deprecated, please use `cc.assetManager.parser.register` instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:408](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L408) |
| Deprecated | cc.loader.addLoadHandlers is deprecated, please use cc.assetManager.parser.register instead |

###### Parameters
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler


##### release

`cc.loader.release` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:435](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L435) |
| Deprecated | cc.loader.release is deprecated, please use cc.assetManager.releaseAsset instead |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### releaseAsset

`cc.loader.releaseAsset` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:464](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L464) |
| Deprecated | cc.loader.releaseAsset is deprecated, please use cc.assetManager.releaseAsset instead |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> 


##### releaseRes

`cc.loader.releaseRes` is deprecated, please use AssetManager/releaseRes:method instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:475](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L475) |
| Deprecated | cc.loader.releaseRes is deprecated, please use cc.assetManager.releaseRes instead |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.


##### releaseResDir

`cc.loader.releaseResDir` was removed, please use AssetManager/releaseRes:method instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:487](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L487) |
| Deprecated | cc.loader.releaseResDir was removed, please use cc.assetManager.releaseRes instead |



##### releaseAll

`cc.loader.releaseAll` is deprecated, please use <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:499](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L499) |
| Deprecated | cc.loader.releaseAll is deprecated, please use cc.assetManager.releaseAll instead |



##### removeItem

`cc.loader.removeItem` is deprecated, please use `cc.assetManager.assets.remove` instead

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:510](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L510) |
| Deprecated | cc.loader.removeItem is deprecated, please use cc.assetManager.assets.remove instead |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### setAutoRelease

`cc.loader.setAutoRelease` is deprecated, if you want to prevent some asset from auto releasing, please use <a href="../classes/Asset.html#method_addRef" class="crosslink">addRef</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:522](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L522) |
| Deprecated | cc.loader.setAutoRelease is deprecated, if you want to prevent some asset from auto releasing, please use cc.Asset.addRef instead |

###### Parameters
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically


##### setAutoReleaseRecursively

`cc.loader.setAutoReleaseRecursively` is deprecated, if you want to prevent some asset from auto releasing, please use <a href="../classes/Asset.html#method_addRef" class="crosslink">addRef</a> instead

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/deprecated.js:535](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L535) |
| Deprecated | cc.loader.setAutoReleaseRecursively is deprecated, if you want to prevent some asset from auto releasing, please use cc.Asset.addRef instead |

###### Parameters
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically


##### isAutoRelease

`cc.loader.isAutoRelease` is deprecated

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/asset-manager/deprecated.js:554](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/asset-manager/deprecated.js#L554) |
| Deprecated | cc.loader.isAutoRelease is deprecated |

###### Parameters
- `assetOrUrl` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url



