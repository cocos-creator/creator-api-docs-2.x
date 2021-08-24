## `AssetManager` 类型



模块: [cc](../modules/cc.md)


此模块管理资源的行为和信息，包括加载，释放等，这是一个单例，所有成员能够通过 `cc.assetManager` 调用



### 索引

##### 属性（properties）

  - [`pipeline`](#pipeline) `Pipeline` 正常加载管线
  - [`fetchPipeline`](#fetchpipeline) `Pipeline` 下载管线
  - [`transformPipeline`](#transformpipeline) `Pipeline` Url 转换器
  - [`bundles`](#bundles) `Cache` 已加载 bundle 的集合， 你能通过 <a href="../classes/AssetManager.html#method_removeBundle" class="crosslink">removeBundle</a> 来移除缓存
  - [`assets`](#assets) `Cache` 已加载资源的集合， 你能通过 <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> 来移除缓存
  - [`dependUtil`](#dependutil) `DependUtil` 管理资源依赖关系
  - [`cacheAsset`](#cacheasset) `Boolean` 是否缓存已加载的资源
  - [`force`](#force) `Boolean` 是否强制加载资源, 如果为 true ，加载资源将会忽略报错
  - [`utils`](#utils) `Helper` 一些有用的方法
  - [`downloader`](#downloader) `Downloader` 管理所有下载任务
  - [`parser`](#parser) `Parser` 管理所有解析任务
  - [`builtins`](#builtins) `Builtins` 管理内置资源
  - [`packManager`](#packmanager) `PackManager` 管理所有合并后的资源
  - [`cacheManager`](#cachemanager) `cc.AssetManager.CacheManager` 缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存
  - [`presets`](#presets) `Object` 可选参数的预设集
  - [`main`](#main) `Bundle` 内置 main 包
  - [`resources`](#resources) `Bundle` 内置 resources 包
  - [`internal`](#internal) `Bundle` 内置 internal 包



##### 方法

  - [`init`](#init) 初始化资源管理器
  - [`getBundle`](#getbundle) 获取已加载的分包
  - [`removeBundle`](#removebundle) 移除此包, 注意：这个包内的资源不会自动释放, 如果需要的话你可以在摧毁之前手动调用 <a href="../classes/Bundle.html#method_releaseAll" class="crosslink">releaseAll</a> 进行释放
  - [`loadAny`](#loadany) 通用加载资源接口，可传入进度回调以及完成回调，通过组合 `request` 和 `options` 参数，几乎可以实现和扩展所有想要的加载效果。
  - [`preloadAny`](#preloadany) 通用预加载资源接口，可传入进度回调以及完成回调，非常建议你使用更简单的 API ，例如 `preloadRes`, `preloadResDir` 等。
  - [`postLoadNative`](#postloadnative) 加载资源的原生文件，如果你勾选了'延迟加载资源'选项，你可能需要在使用资源之前调用此方法来加载原生文件
  - [`loadRemote`](#loadremote) 使用 url 加载远程资源，例如音频，图片，文本等等。
  - [`loadScript`](#loadscript) 加载脚本
  - [`loadBundle`](#loadbundle) 加载资源包
  - [`releaseAsset`](#releaseasset) 释放资源以及其依赖资源, 这个方法不仅会从 assetManager 中删除资源的缓存引用，还会清理它的资源内容。
  - [`releaseUnusedAssets`](#releaseunusedassets) 释放所有没有用到的资源。
  - [`releaseAll`](#releaseall) 释放所有资源。



### Details


#### 属性（properties）


##### pipeline

> 正常加载管线

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:71](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L71) |



##### fetchPipeline

> 下载管线

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:83](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L83) |



##### transformPipeline

> Url 转换器

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Pipeline.html" class="crosslink">Pipeline</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:95](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L95) |



##### bundles

> 已加载 bundle 的集合， 你能通过 <a href="../classes/AssetManager.html#method_removeBundle" class="crosslink">removeBundle</a> 来移除缓存

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Cache.html" class="crosslink">Cache</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:108](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L108) |



##### assets

> 已加载资源的集合， 你能通过 <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> 来移除缓存

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Cache.html" class="crosslink">Cache</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:122](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L122) |



##### dependUtil

> 管理资源依赖关系

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/DependUtil.html" class="crosslink">DependUtil</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:144](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L144) |



##### cacheAsset

> 是否缓存已加载的资源

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:158](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L158) |



##### force

> 是否强制加载资源, 如果为 true ，加载资源将会忽略报错

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:170](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L170) |



##### utils

> 一些有用的方法

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Helper.html" class="crosslink">Helper</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:182](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L182) |



##### downloader

> 管理所有下载任务

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Downloader.html" class="crosslink">Downloader</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:194](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L194) |



##### parser

> 管理所有解析任务

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Parser.html" class="crosslink">Parser</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:206](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L206) |



##### builtins

> 管理内置资源

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Builtins.html" class="crosslink">Builtins</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:218](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L218) |



##### packManager

> 管理所有合并后的资源

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/PackManager.html" class="crosslink">PackManager</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:230](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L230) |



##### cacheManager

> 缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存

| meta | description |
|------|-------------|
| 类型 | cc.AssetManager.CacheManager |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:244](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L244) |



##### presets

> 可选参数的预设集

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:258](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L258) |



##### main

> 内置 main 包

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:317](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L317) |



##### resources

> 内置 resources 包

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:332](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L332) |



##### internal

> 内置 internal 包

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> |
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:347](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L347) |






<!-- Method Block -->
#### 方法


##### init

初始化资源管理器

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:362](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L362) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getBundle

获取已加载的分包

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Bundle.html" class="crosslink">Bundle</a> 
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:390](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L390) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of bundle

##### 示例

```js
// ${project}/assets/test1
cc.assetManager.getBundle('test1');

cc.assetManager.getBundle('resources');
```

##### removeBundle

移除此包, 注意：这个包内的资源不会自动释放, 如果需要的话你可以在摧毁之前手动调用 <a href="../classes/Bundle.html#method_releaseAll" class="crosslink">releaseAll</a> 进行释放

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:414](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L414) |

###### 参数列表
- `bundle` <a href="../classes/Bundle.html" class="crosslink">Bundle</a> The bundle to be removed


##### loadAny

通用加载资源接口，可传入进度回调以及完成回调，通过组合 `request` 和 `options` 参数，几乎可以实现和扩展所有想要的加载效果。非常建议你使用更简单的API，例如 `load`、`loadDir` 等。
`options` 中的自定义参数将会分发到 `requests` 的每一项中，如果request中已存在同名的参数则以 `requests` 中为准，同时如果有其他
依赖资源，则 `options` 中的参数会继续向依赖项中分发。request中的自定义参数都会以 `options` 形式传入加载流程中的 `downloader`, `parser` 的方法中, 你可以
扩展 `downloader`, `parser` 收集参数完成想实现的效果。

保留关键字: `uuid`, `url`, `path`, `dir`, `scene`, `type`, `priority`, `preset`, `audioLoadMode`, `ext`, `bundle`, `onFileProgress`, `maxConcurrency`, `maxRequestsPerFrame`
`maxRetryCount`, `version`, `responseType`, `withCredentials`, `mimeType`, `timeout`, `header`, `reload`, `cacheAsset`, `cacheEnabled`,
请不要使用这些字段为自定义参数!

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:432](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L432) |

###### 参数列表
- `requests` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> The request you want to load
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `finished` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The current request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.
	- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The loaded content

##### 示例

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

通用预加载资源接口，可传入进度回调以及完成回调，非常建议你使用更简单的 API ，例如 `preloadRes`, `preloadResDir` 等。`preloadAny` 和 `loadAny` 几乎一样，区别在于 `preloadAny` 只会下载资源，不会去解析资源，你需要调用 `cc.assetManager.loadAny(preloadTask)`
来完成资源加载。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:498](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L498) |

###### 参数列表
- `requests` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> The request you want to preload
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `finished` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The current request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish preloading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in preloading process.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> The preloaded content

##### 示例

```js
cc.assetManager.preloadAny('0cbZa5Y71CTZAccaIFluuZ', (err) => cc.assetManager.loadAny('0cbZa5Y71CTZAccaIFluuZ'));
```

##### postLoadNative

加载资源的原生文件，如果你勾选了'延迟加载资源'选项，你可能需要在使用资源之前调用此方法来加载原生文件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:539](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L539) |

###### 参数列表
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.

##### 示例

```js
cc.assetManager.postLoadNative(texture, (err) => console.log(err));
```

##### loadRemote

使用 url 加载远程资源，例如音频，图片，文本等等。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:594](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L594) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The url of asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
	- `audioLoadMode` cc.AudioClip.LoadMode Indicate which mode audio you want to load
	- `ext` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> If the url does not have a extension name, you can specify one manually.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when finish loading
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error occured in loading process.
	- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The loaded texture

##### 示例

```js
cc.assetManager.loadRemote('http://www.cloud.com/test1.jpg', (err, texture) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test2.mp3', (err, audioClip) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test3', { ext: '.png' }, (err, texture) => console.log(err));
```

##### loadScript

加载脚本

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:643](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L643) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> Url of the script
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramters
	- `async` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Indicate whether or not loading process should be async
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when script loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success

##### 示例

```js
loadScript('http://localhost:8080/index.js', null, (err) => console.log(err));
```

##### loadBundle

加载资源包

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:673](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L673) |

###### 参数列表
- `nameOrUrl` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name or root path of bundle
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional paramter, same like downloader.downloadFile
	- `version` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The version of this bundle, you can check config.json in this bundle
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when bundle loaded or failed
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `bundle` <a href="../classes/Bundle.html" class="crosslink">Bundle</a> The loaded bundle

##### 示例

```js
loadBundle('http://localhost:8080/test', null, (err, bundle) => console.log(err));
```

##### releaseAsset

释放资源以及其依赖资源, 这个方法不仅会从 assetManager 中删除资源的缓存引用，还会清理它的资源内容。
比如说，当你释放一个 texture 资源，这个 texture 和它的 gl 贴图数据都会被释放。
注意，这个函数可能会导致资源贴图或资源所依赖的贴图不可用，如果场景中存在节点仍然依赖同样的贴图，它们可能会变黑并报 GL 错误。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:711](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L711) |

###### 参数列表
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> The asset to be released

##### 示例

```js
// release a texture which is no longer need
cc.assetManager.releaseAsset(texture);
```

##### releaseUnusedAssets

释放所有没有用到的资源。详细信息请参考 <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:737](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L737) |



##### releaseAll

释放所有资源。详细信息请参考 <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/CCAssetManager.js:756](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/asset-manager/CCAssetManager.js#L756) |




