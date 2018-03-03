## `loader` Class

Extends [`Pipeline`](Pipeline.md)


Module: [cc](../modules/cc.md)


Loader for resource loading process. It's a singleton object.


### Index

##### Properties

  - [`assetLoader`](#assetloader) `Object` The asset loader in cc.loader's pipeline, it's by default the first pipe.
It's used to identify an asset's type, and determine how to download it.
  - [`downloader`](#downloader) `Object` The downloader in cc.loader's pipeline, it's by default the second pipe.
It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
You can add your own download function with addDownloadHandlers
  - [`loader`](#loader) `Object` The downloader in cc.loader's pipeline, it's by default the third pipe.
It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
You can add your own download function with addLoadHandlers



##### Methods

  - [`getXMLHttpRequest`](#getxmlhttprequest) Gets a new XMLHttpRequest instance.
  - [`addDownloadHandlers`](#adddownloadhandlers) Add custom supported types handler or modify existing type handler for download process.
  - [`addLoadHandlers`](#addloadhandlers) Add custom supported types handler or modify existing type handler for load process.
  - [`load`](#load) Load resources with a progression callback and a complete callback.
The progression callback is the same as Pipeline's <a href="../classes/LoadingItems.html#method_onProgress" class="crosslink">onProgress</a>
The complete callback is almost the same as Pipeline's <a href="../classes/LoadingItems.html#method_onComplete" class="crosslink">onComplete</a>
The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
  - [`loadRes`](#loadres) Load resources from the "resources" folder inside the "assets" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.
  - [`loadResArray`](#loadresarray) This method is like <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a> except that it accepts array of url.
  - [`loadResDir`](#loadresdir) Load all assets in a folder inside the "assets/resources" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.
  - [`getRes`](#getres) Get resource data by id. <br>
When you load resources with <a href="../classes/loader.html#method_load" class="crosslink">load</a> or <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a>,
the url will be the unique identity of the resource.
After loaded, you can acquire them by passing the url to this API.
  - [`getDependsRecursively`](#getdependsrecursively) Get all resource dependencies of the requested asset in an array, including itself.
The owner parameter accept the following types: 1. The asset itself; 2. The resource url; 3. The asset's uuid.<br>
The returned array stores the dependencies with their uuids, after retrieve dependencies,
you can release them, access dependent assets by passing the uuid to <a href="../classes/loader.html#method_getRes" class="crosslink">getRes</a>, or other stuffs you want.<br>
For release all dependencies of an asset, please refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a>
Here is some examples:
  - [`release`](#release) Release the content of an asset or an array of assets by uuid.
Start from v1.3, this method will not only remove the cache of the asset in loader, but also clean up its content.
For example, if you release a texture, the texture asset and its gl texture data will be freed up.
In complexe project, you can use this function with <a href="../classes/loader.html#method_getDependsRecursively" class="crosslink">getDependsRecursively</a> to free up memory in critical circumstances.
Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture, they may turn to black and report gl errors.
If you only want to remove the cache of an asset, please use Pipeline/removeItem:method
  - [`releaseAsset`](#releaseasset) Release the asset by its object. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.
  - [`releaseRes`](#releaseres) Release the asset loaded by <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a>. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.
  - [`releaseResDir`](#releaseresdir) Release the all assets loaded by <a href="../classes/loader.html#method_loadResDir" class="crosslink">loadResDir</a>. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.
  - [`releaseAll`](#releaseall) Resource all assets. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.
  - [`setAutoRelease`](#setautorelease) Indicates whether to release the asset when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved
according to whether the previous scene checked the "Auto Release Assets" option.
On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>, <a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>
  - [`setAutoReleaseRecursively`](#setautoreleaserecursively) Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved
according to whether the previous scene checked the "Auto Release Assets" option.
On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on the specified asset and its recursively referenced assets, to force preserve or release specified asset when scene switching.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>, <a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>
  - [`isAutoRelease`](#isautorelease) Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>, <a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>
  - [`constructor`](#constructor) Constructor, pass an array of pipes to construct a new Pipeline,
the pipes will be chained in the given order.</br>
A pipe is an object which must contain an `id` in string and a `handle` function,
the id must be unique in the pipeline.</br>
It can also include `async` property to identify whether it's an asynchronous process.
  - [`insertPipe`](#insertpipe) Insert a new pipe at the given index of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
  - [`insertPipeAfter`](#insertpipeafter) !en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。
  - [`appendPipe`](#appendpipe) Add a new pipe at the end of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
  - [`flowIn`](#flowin) Let new items flow into the pipeline. </br>
Each item can be a simple url string or an object,
if it's an object, it must contain `id` property. </br>
You can specify its type by `type` property, by default, the type is the extension name in url. </br>
By adding a `skips` property including pipe ids, you can skip these pipe. </br>
The object can contain any supplementary property as you want. </br>
  - [`flowInDeps`](#flowindeps) Let new items flow into the pipeline and give a callback when the list of items are all completed. </br>
This is for loading dependencies for an existing item in flow, usually used in a pipe logic. </br>
For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded  </br>
after all its dependencies are loaded, then you will need to use function to flow in all dependencies  </br>
found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback).
  - [`copyItemStates`](#copyitemstates) Copy the item states from one source item to all destination items. </br>
It's quite useful when a pipe generate new items from one source item,</br>
then you should flowIn these generated items into pipeline, </br>
but you probably want them to skip all pipes the source item already go through,</br>
you can achieve it with this API. </br>
</br>
For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.
  - [`isFlowing`](#isflowing) Returns whether the pipeline is flowing (contains item) currently.
  - [`getItems`](#getitems) Returns all items in pipeline. Returns null, please use API of Loader or LoadingItems.
  - [`getItem`](#getitem) Returns an item in pipeline.
  - [`removeItem`](#removeitem) Removes an completed item in pipeline.
It will only remove the cache in the pipeline or loader, its dependencies won't be released.
cc.loader provided another method to completely cleanup the resource and its dependencies,
please refer to <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>
  - [`clear`](#clear) Clear the current pipeline, this function will clean up the items.



### Details


#### Properties


##### assetLoader

> The asset loader in cc.loader's pipeline, it's by default the first pipe.
It's used to identify an asset's type, and determine how to download it.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L101) |



##### downloader

> The downloader in cc.loader's pipeline, it's by default the second pipe.
It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
You can add your own download function with addDownloadHandlers

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:109](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L109) |



##### loader

> The downloader in cc.loader's pipeline, it's by default the third pipe.
It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
You can add your own download function with addLoadHandlers

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:118](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L118) |






<!-- Method Block -->
#### Methods


##### getXMLHttpRequest

Gets a new XMLHttpRequest instance.

| meta | description |
|------|-------------|
| Returns | XMLHttpRequest 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:148](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L148) |



##### addDownloadHandlers

Add custom supported types handler or modify existing type handler for download process.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L155) |

###### Parameters
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler

##### Examples

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:169](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L169) |

###### Parameters
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler

##### Examples

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:183](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L183) |

###### Parameters
- `resources` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Url list in an array
- `progressCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change
	- `completedCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `totalCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest item which flow out the pipeline
- `completeCallback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when all resources loaded

##### Examples

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:402](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L402) |

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

##### Examples

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:525](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L525) |

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

##### Examples

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:583](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L583) |

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

##### Examples

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
| Returns | Any 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:645](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L645) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be returned if this argument is supplied.


##### getDependsRecursively

Get all resource dependencies of the requested asset in an array, including itself.
The owner parameter accept the following types: 1. The asset itself; 2. The resource url; 3. The asset's uuid.<br>
The returned array stores the dependencies with their uuids, after retrieve dependencies,
you can release them, access dependent assets by passing the uuid to <a href="../classes/loader.html#method_getRes" class="crosslink">getRes</a>, or other stuffs you want.<br>
For release all dependencies of an asset, please refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a>
Here is some examples:

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:682](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L682) |

###### Parameters
- `owner` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/RawAsset.html" class="crosslink">RawAsset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The owner asset or the resource url or the asset's uuid

##### Examples

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

Release the content of an asset or an array of assets by uuid.
Start from v1.3, this method will not only remove the cache of the asset in loader, but also clean up its content.
For example, if you release a texture, the texture asset and its gl texture data will be freed up.
In complexe project, you can use this function with <a href="../classes/loader.html#method_getDependsRecursively" class="crosslink">getDependsRecursively</a> to free up memory in critical circumstances.
Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture, they may turn to black and report gl errors.
If you only want to remove the cache of an asset, please use Pipeline/removeItem:method

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:723](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L723) |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/RawAsset.html" class="crosslink">RawAsset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

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

Release the asset by its object. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:795](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L795) |

###### Parameters
- `asset` <a href="../classes/Asset.html" class="crosslink">Asset</a> 


##### releaseRes

Release the asset loaded by <a href="../classes/loader.html#method_loadRes" class="crosslink">loadRes</a>. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:809](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L809) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.


##### releaseResDir

Release the all assets loaded by <a href="../classes/loader.html#method_loadResDir" class="crosslink">loadResDir</a>. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:827](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L827) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.


##### releaseAll

Resource all assets. Refer to <a href="../classes/loader.html#method_release" class="crosslink">release</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:843](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L843) |



##### setAutoRelease

Indicates whether to release the asset when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved
according to whether the previous scene checked the "Auto Release Assets" option.
On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>, <a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:864](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L864) |

###### Parameters
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically

##### Examples

```js
// auto release the texture event if "Auto Release Assets" disabled in current scene
cc.loader.setAutoRelease(texture2d, true);
// don't release the texture even if "Auto Release Assets" enabled in current scene
cc.loader.setAutoRelease(texture2d, false);
// first parameter can be url
cc.loader.setAutoRelease(audioUrl, false);
```

##### setAutoReleaseRecursively

Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved
according to whether the previous scene checked the "Auto Release Assets" option.
On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on the specified asset and its recursively referenced assets, to force preserve or release specified asset when scene switching.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>, <a href="../classes/loader.html#method_isAutoRelease" class="crosslink">cc.loader.isAutoRelease</a>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:904](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L904) |

###### Parameters
- `assetOrUrlOrUuid` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url or uuid
- `autoRelease` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> indicates whether should release automatically

##### Examples

```js
// auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
cc.loader.setAutoReleaseRecursively(spriteFrame, true);
// don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
cc.loader.setAutoReleaseRecursively(spriteFrame, false);
// don't release the Prefab and all the referenced assets
cc.loader.setAutoReleaseRecursively(prefab, false);
```

##### isAutoRelease

Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
<br>
See: <a href="../classes/loader.html#method_setAutoRelease" class="crosslink">cc.loader.setAutoRelease</a>, <a href="../classes/loader.html#method_setAutoReleaseRecursively" class="crosslink">cc.loader.setAutoReleaseRecursively</a>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js:952](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/CCLoader.js#L952) |

###### Parameters
- `assetOrUrl` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> asset object or the raw asset's url


##### constructor

Constructor, pass an array of pipes to construct a new Pipeline,
the pipes will be chained in the given order.</br>
A pipe is an object which must contain an `id` in string and a `handle` function,
the id must be unique in the pipeline.</br>
It can also include `async` property to identify whether it's an asynchronous process.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L111) |

###### Parameters
- `pipes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

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

Insert a new pipe at the given index of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L155) |

###### Parameters
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to insert


##### insertPipeAfter

!en
Insert a pipe to the end of an existing pipe. The existing pipe must be a valid pipe in the pipeline.
!zh
在当前 pipeline 的一个已知 pipe 后面插入一个新的 pipe。

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:198](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L198) |

###### Parameters
- `refPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> An existing pipe in the pipeline.
- `newPipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be inserted.


##### appendPipe

Add a new pipe at the end of the pipeline. </br>
A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L215) |

###### Parameters
- `pipe` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The pipe to be appended


##### flowIn

Let new items flow into the pipeline. </br>
Each item can be a simple url string or an object,
if it's an object, it must contain `id` property. </br>
You can specify its type by `type` property, by default, the type is the extension name in url. </br>
By adding a `skips` property including pipe ids, you can skip these pipe. </br>
The object can contain any supplementary property as you want. </br>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L239) |

###### Parameters
- `items` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

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

##### flowInDeps

Let new items flow into the pipeline and give a callback when the list of items are all completed. </br>
This is for loading dependencies for an existing item in flow, usually used in a pipe logic. </br>
For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded  </br>
after all its dependencies are loaded, then you will need to use function to flow in all dependencies  </br>
found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L287) |
| Deprecated | since v1.3 |

###### Parameters
- `urlList` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### copyItemStates

Copy the item states from one source item to all destination items. </br>
It's quite useful when a pipe generate new items from one source item,</br>
then you should flowIn these generated items into pipeline, </br>
but you probably want them to skip all pipes the source item already go through,</br>
you can achieve it with this API. </br>
</br>
For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:324](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L324) |

###### Parameters
- `srcItem` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The source item
- `dstItems` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A single destination item or an array of destination items


##### isFlowing

Returns whether the pipeline is flowing (contains item) currently.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L353) |
| Deprecated | since v1.3 |



##### getItems

Returns all items in pipeline. Returns null, please use API of Loader or LoadingItems.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/LoadingItems.html" class="crosslink">LoadingItems</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:364](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L364) |
| Deprecated | since v1.3 |



##### getItem

Returns an item in pipeline.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:375](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L375) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### removeItem

Removes an completed item in pipeline.
It will only remove the cache in the pipeline or loader, its dependencies won't be released.
cc.loader provided another method to completely cleanup the resource and its dependencies,
please refer to <a href="../classes/loader.html#method_release" class="crosslink">cc.loader.release</a>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L395) |

###### Parameters
- `id` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The id of the item


##### clear

Clear the current pipeline, this function will clean up the items.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/pipeline.js#L415) |




