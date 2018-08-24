## `loader` 类型

继承于 [`Pipeline`](Pipeline.md)


模块: [cc](../modules/cc.md)


Loader for resource loading process. It's a singleton object.


### 索引

##### 属性（properties）

  - [`assetLoader`](#assetloader) `Object` The asset loader in cc.loader's pipeline, it's by default the first pipe....
  - [`downloader`](#downloader) `Object` The downloader in cc.loader's pipeline, it's by default the second pipe....
  - [`loader`](#loader) `Object` The loader in cc.loader's pipeline, it's by default the third pipe....



##### 方法

  - [`getXMLHttpRequest`](#getxmlhttprequest) Gets a new XMLHttpRequest instance.
  - [`addDownloadHandlers`](#adddownloadhandlers) Add custom supported types handler or modify existing type handler for download process.
  - [`addLoadHandlers`](#addloadhandlers) Add custom supported types handler or modify existing type handler for load process.
  - [`load`](#load) Load resources with a progression callback and a complete callback....
  - [`loadRes`](#loadres) Load resources from the "resources" folder inside the "assets" folder of your project.<br>...
  - [`loadResArray`](#loadresarray) This method is like <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a> except that it accepts array of url.
  - [`loadResDir`](#loadresdir) Load all assets in a folder inside the "assets/resources" folder of your project.<br>...
  - [`getRes`](#getres) Get resource data by id. <br>...
  - [`getDependsRecursively`](#getdependsrecursively) 获取一个指定资源的所有依赖资源，包含它自身，并保存在数组中返回。
  - [`release`](#release) 通过 id（通常是资源 url）来释放一个资源或者一个资源数组。
  - [`releaseAsset`](#releaseasset) 通过资源对象自身来释放资源。
  - [`releaseRes`](#releaseres) 释放通过 <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a> 加载的资源。
  - [`releaseResDir`](#releaseresdir) 释放通过 <a href="../classes/loader.html#method_loadResDir" class="crosslink">loadResDir</a> 加载的资源。
  - [`releaseAll`](#releaseall) 释放所有资源。
  - [`setAutoRelease`](#setautorelease) 设置当场景切换时是否自动释放资源。
  - [`setAutoReleaseRecursively`](#setautoreleaserecursively) 设置当场景切换时是否自动释放资源及资源引用的其它资源。
  - [`isAutoRelease`](#isautorelease) 返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。
  - [`constructor`](#constructor) 构造函数，通过一系列的 pipe 来构造一个新的 pipeline，pipes 将会在给定的顺序中被锁定。
  - [`insertPipe`](#insertpipe) 在给定的索引位置插入一个新的 pipe。
  - [`insertPipeAfter`](#insertpipeafter) 在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。
  - [`appendPipe`](#appendpipe) 添加一个新的 pipe 到 pipeline 尾部。
  - [`flowIn`](#flowin) 让新的 item 流入 pipeline 中。
  - [`copyItemStates`](#copyitemstates) 从一个源 item 向所有目标 item 复制它的 pipe 状态，用于避免重复通过部分 pipe。
  - [`getItem`](#getitem) 根据 id 获取一个 item
  - [`removeItem`](#removeitem) 移除指定的已完成 item。
  - [`clear`](#clear) 清空当前 pipeline，该函数将清理 items。



### Details


#### 属性（properties）


##### assetLoader

> The asset loader in cc.loader's pipeline, it's by default the first pipe.
It's used to identify an asset's type, and determine how to download it.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:100](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L100) |



##### downloader

> The downloader in cc.loader's pipeline, it's by default the second pipe.
It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
You can add your own download function with addDownloadHandlers

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:108](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L108) |



##### loader

> The loader in cc.loader's pipeline, it's by default the third pipe.
It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
You can add your own download function with addLoadHandlers

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L117) |






<!-- Method Block -->
#### 方法


##### getXMLHttpRequest

Gets a new XMLHttpRequest instance.

| meta | description |
|------|-------------|
| 返回 | XMLHttpRequest 
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:147](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L147) |



##### addDownloadHandlers

Add custom supported types handler or modify existing type handler for download process.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:154](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L154) |

###### 参数列表
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler

##### 示例

```js
cc.loader.addDownloadHandlers({
     // This will match all url with `.scene` extension or all url with `scene` type
     'scene' : function (url, callback) {}
 });
```

##### addLoadHandlers

Add custom supported types handler or modify existing type handler for load process.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:168](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L168) |

###### 参数列表
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler

##### 示例

```js
cc.loader.addLoadHandlers({
     // This will match all url with `.scene` extension or all url with `scene` type
     'scene' : function (url, callback) {}
 });
```

##### load

Load resources with a progression callback and a complete callback.
The progression callback is the same as Pipeline's <a href="../classes/LoadingItems.html#method_onProgress" class="crosslink">onProgress</a>
The complete callback is almost the same as Pipeline's <a href="../classes/LoadingItems.html#method_onComplete" class="crosslink">onComplete</a>
The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:182](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L182) |

###### 参数列表
- `resources` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Url list in an array
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when all resources loaded

##### 示例

```js
cc.loader.load('a.png', function (err, tex) {
    cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
});

cc.loader.load('http://example.com/a.png', function (err, tex) {
    cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
});

cc.loader.load({url: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
    cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
});

cc.loader.load(['a.png', 'b.json'], function (errors, results) {
    if (errors) {
        for (var i = 0; i < errors.length; i++) {
            cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
        }
    }
    var aTex = results.getContent('a.png');
    var bJsonObj = results.getContent('b.json');
});
```

##### loadRes

Load resources from the "resources" folder inside the "assets" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:410](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L410) |

###### 参数列表
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

##### 示例

```js
// load the prefab (project/assets/resources/misc/character/cocos) from resources folder
cc.loader.loadRes('misc/character/cocos', function (err, prefab) {
    if (err) {
        cc.error(err.message || err);
        return;
    }
    cc.log('Result should be a prefab: ' + (prefab instanceof cc.Prefab));
});

// load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
cc.loader.loadRes('imgs/cocos', cc.SpriteFrame, function (err, spriteFrame) {
    if (err) {
        cc.error(err.message || err);
        return;
    }
    cc.log('Result should be a sprite frame: ' + (spriteFrame instanceof cc.SpriteFrame));
});
```

##### loadResArray

This method is like <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a> except that it accepts array of url.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:533](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L533) |

###### 参数列表
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

##### 示例

```js
// load the SpriteFrames from resources folder
var spriteFrames;
var urls = ['misc/characters/character_01', 'misc/weapons/weapons_01'];
cc.loader.loadResArray(urls, cc.SpriteFrame, function (err, assets) {
    if (err) {
        cc.error(err);
        return;
    }
    spriteFrames = assets;
    // ...
});
```

##### loadResDir

Load all assets in a folder inside the "assets/resources" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:591](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L591) |

###### 参数列表
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

##### 示例

```js
// load the texture (resources/imgs/cocos.png) and the corresponding sprite frame
cc.loader.loadResDir('imgs/cocos', function (err, assets) {
    if (err) {
        cc.error(err);
        return;
    }
    var texture = assets[0];
    var spriteFrame = assets[1];
});

// load all textures in "resources/imgs/"
cc.loader.loadResDir('imgs', cc.Texture2D, function (err, textures) {
    var texture1 = textures[0];
    var texture2 = textures[1];
});

// load all JSONs in "resources/data/"
cc.loader.loadResDir('data', function (err, objects, urls) {
    var data = objects[0];
    var url = urls[0];
});
```

##### getRes

Get resource data by id. <br>
When you load resources with <a href="../classes/loader.html#method_load" class="crosslink">load</a> or <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a>,
the url will be the unique identity of the resource.
After loaded, you can acquire them by passing the url to this API.

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:670](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L670) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be returned if this argument is supplied.


##### getDependsRecursively

获取一个指定资源的所有依赖资源，包含它自身，并保存在数组中返回。owner 参数接收以下几种类型：1. 资源 asset 对象；2. 资源目录下的 url；3. 资源的 uuid。<br>
返回的数组将仅保存依赖资源的 uuid，获取这些 uuid 后，你可以从 loader 释放这些资源；通过 <a href="../classes/loader.html#method_getRes" class="crosslink">getRes</a> 获取某个资源或者进行其他你需要的操作。<br>
想要释放一个资源及其依赖资源，可以参考 <a href="../classes/loader.html#method_release" class="crosslink">release</a>。下面是一些示例代码：

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:707](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L707) |

###### 参数列表
- `owner` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/RawAsset.html" class="crosslink">RawAsset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The owner asset or the resource url or the asset's uuid

##### 示例

```js
// Release all dependencies of a loaded prefab
var deps = cc.loader.getDependsRecursively(prefab);
cc.loader.release(deps);
// Retrieve all dependent textures
var deps = cc.loader.getDependsRecursively('prefabs/sample');
var textures = [];
for (var i = 0; i < deps.length; ++i) {
    var item = cc.loader.getRes(deps[i]);
    if (item instanceof cc.Texture2D) {
        textures.push(item);
    }
}
```

##### release

通过 id（通常是资源 url）来释放一个资源或者一个资源数组。
从 v1.3 开始，这个方法不仅会从 loader 中删除资源的缓存引用，还会清理它的资源内容。
比如说，当你释放一个 texture 资源，这个 texture 和它的 gl 贴图数据都会被释放。
在复杂项目中，我们建议你结合 <a href="../classes/loader.html#method_getDependsRecursively" class="crosslink">getDependsRecursively</a> 来使用，便于在设备内存告急的情况下更快地释放不再需要的资源的内存。
注意，这个函数可能会导致资源贴图或资源所依赖的贴图不可用，如果场景中存在节点仍然依赖同样的贴图，它们可能会变黑并报 GL 错误。
如果你只想删除一个资源的缓存引用，请使用 Pipeline/removeItem:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:748](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L748) |

###### 参数列表
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/RawAsset.html" class="crosslink">RawAsset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

```js
// Release a texture which is no longer need
cc.loader.release(texture);
// Release all dependencies of a loaded prefab
var deps = cc.loader.getDependsRecursively('prefabs/sample');
cc.loader.release(deps);
// If there is no instance of this prefab in the scene, the prefab and its dependencies like textures, sprite frames, etc, will be freed up.
// If you have some other nodes share a texture in this prefab, you can skip it in two ways:
// 1. Forbid auto release a texture before release
cc.loader.setAutoRelease(texture2d, false);
// 2. Remove it from the dependencies array
var deps = cc.loader.getDependsRecursively('prefabs/sample');
var index = deps.indexOf(texture2d._uuid);
if (index !== -1)
    deps.splice(index, 1);
cc.loader.release(deps);
```

##### releaseAsset

通过资源对象自身来释放资源。详细信息请参考 <a href="../classes/loader.html#method_release" class="crosslink">release</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:811](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L811) |

###### 参数列表
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> 


##### releaseRes

释放通过 <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a> 加载的资源。详细信息请参考 <a href="../classes/loader.html#method_release" class="crosslink">release</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:825](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L825) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.


##### releaseResDir

释放通过 <a href="../classes/loader.html#method_loadResDir" class="crosslink">loadResDir</a> 加载的资源。详细信息请参考 <a href="../classes/loader.html#method_release" class="crosslink">release</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:843](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L843) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.


##### releaseAll

释放所有资源。详细信息请参考 <a href="../classes/loader.html#method_release" class="crosslink">release</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:859](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L859) |



##### setAutoRelease

设置当场景切换时是否自动释放资源。<br>
默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
而使用 `cc.loader.loadRes` 或 `cc.loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
使用这个 API 可以在单个资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
<br>
参考：<a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>，<a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:880](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L880) |

###### 参数列表
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically

##### 示例

```js
// auto release the texture event if "Auto Release Assets" disabled in current scene
cc.loader.setAutoRelease(texture2d, true);
// don't release the texture even if "Auto Release Assets" enabled in current scene
cc.loader.setAutoRelease(texture2d, false);
// first parameter can be url
cc.loader.setAutoRelease(audioUrl, false);
```

##### setAutoReleaseRecursively

设置当场景切换时是否自动释放资源及资源引用的其它资源。<br>
默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
而使用 `cc.loader.loadRes` 或 `cc.loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
使用这个 API 可以在指定资源及资源递归引用到的所有资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
<br>
参考：<a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>，<a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:920](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L920) |

###### 参数列表
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically

##### 示例

```js
// auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
cc.loader.setAutoReleaseRecursively(spriteFrame, true);
// don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
cc.loader.setAutoReleaseRecursively(spriteFrame, false);
// don't release the Prefab and all the referenced assets
cc.loader.setAutoReleaseRecursively(prefab, false);
```

##### isAutoRelease

返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。<br>
<br>
参考：<a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>，<a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/load-pipeline/CCLoader.js:968](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/CCLoader.js#L968) |

###### 参数列表
- `assetOrUrl` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url


##### constructor

构造函数，通过一系列的 pipe 来构造一个新的 pipeline，pipes 将会在给定的顺序中被锁定。<br/>
一个 pipe 就是一个对象，它包含了字符串类型的 ‘id’ 和 ‘handle’ 函数，在 pipeline 中 id 必须是唯一的。<br/>
它还可以包括 ‘async’ 属性以确定它是否是一个异步过程。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L112) |

###### 参数列表
- `pipes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

```js
var pipeline = new Pipeline([
     {
         id: 'Downloader',
         handle: function (item, callback) {},
         async: true
     },
     {id: 'Parser', handle: function (item) {}, async: false}
 ]);
```

##### insertPipe

在给定的索引位置插入一个新的 pipe。<br/>
一个 pipe 必须包含一个字符串类型的 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:156](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L156) |

###### 参数列表
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to insert


##### insertPipeAfter

!en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L199) |

###### 参数列表
- `refPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An existing pipe in the pipeline.
- `newPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted.


##### appendPipe

添加一个新的 pipe 到 pipeline 尾部。 <br/>
该 pipe 必须包含一个字符串类型 ‘id’ 和 ‘handle’ 函数，该 id 在 pipeline 必须是唯一标识。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:216](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L216) |

###### 参数列表
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be appended


##### flowIn

让新的 item 流入 pipeline 中。<br/>
这里的每个 item 可以是一个简单字符串类型的 url 或者是一个对象,
如果它是一个对象的话，他必须要包含 ‘id’ 属性。<br/>
你也可以指定它的 ‘type’ 属性类型，默认情况下，该类型是 ‘url’ 的后缀名。<br/>
也通过添加一个 包含 ‘skips’ 属性的 item 对象，你就可以跳过 skips 中包含的 pipe。<br/>
该对象可以包含任何附加属性。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:240](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L240) |

###### 参数列表
- `items` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### 示例

```js
pipeline.flowIn([
     'res/Background.png',
     {
         id: 'res/scene.json',
         type: 'scene',
         name: 'scene',
         skips: ['Downloader']
     }
 ]);
```

##### copyItemStates

从一个源 item 向所有目标 item 复制它的 pipe 状态，用于避免重复通过部分 pipe。<br/>
当一个源 item 生成了一系列新的 items 时很有用，<br/>
你希望让这些新的依赖项进入 pipeline，但是又不希望它们通过源 item 已经经过的 pipe，<br/>
但是你可能希望他们源 item 已经通过并跳过所有 pipes，<br/>
这个时候就可以使用这个 API。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:325](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L325) |

###### 参数列表
- `srcItem` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The source item
- `dstItems` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A single destination item or an array of destination items


##### getItem

根据 id 获取一个 item

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:354](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L354) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### removeItem

移除指定的已完成 item。
这将仅仅从 pipeline 或者 loader 中删除其缓存，并不会释放它所依赖的资源。
cc.loader 中提供了另一种删除资源及其依赖的清理方法，请参考 <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:374](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L374) |

###### 参数列表
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### clear

清空当前 pipeline，该函数将清理 items。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/load-pipeline/pipeline.js:394](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/load-pipeline/pipeline.js#L394) |




