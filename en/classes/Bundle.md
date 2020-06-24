## `Bundle` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc.AssetManager](../modules/cc.AssetManager.md)


A bundle contains an amount of assets(includes scene), you can load, preload, release asset which is in this bundle



### Index

##### Properties

  - [`name`](#name) `String` The name of this bundle
  - [`deps`](#deps) `String[]` The dependency of this bundle
  - [`base`](#base) `String` The root path of this bundle, such like 'http://example.com/bundle1'



##### Methods

  - [`constructor`](#constructor) Create a bundle
  - [`getInfoWithPath`](#getinfowithpath) Get asset's info using path, only valid when asset is in bundle folder.
  - [`getDirWithPath`](#getdirwithpath) Get all asset's info within specific folder
  - [`getAssetInfo`](#getassetinfo) Get asset's info with uuid
  - [`getSceneInfo`](#getsceneinfo) Get scene'info with name
  - [`init`](#init) Initialize this bundle with options
  - [`load`](#load) Load the asset within this bundle by the path which is relative to bundle's path
  - [`preload`](#preload) Preload the asset within this bundle by the path which is relative to bundle's path.
  - [`loadDir`](#loaddir) Load all assets under a folder inside the bundle folder.<br>...
  - [`preloadDir`](#preloaddir) Preload all assets under a folder inside the bundle folder.<br> After calling this method, you still need to finish loading by calling `Bundle.loadDir`.
  - [`loadScene`](#loadscene) Loads the scene within this bundle by its name.
  - [`preloadScene`](#preloadscene) Preloads the scene within this bundle by its name.
  - [`get`](#get) Get asset within this bundle by path and type.
  - [`release`](#release) Release the asset loaded by <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> or <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> and it's dependencies.
  - [`releaseUnusedAssets`](#releaseunusedassets) Release all unused assets within this bundle.
  - [`releaseAll`](#releaseall) Release all assets within this bundle.



### Details


#### Properties


##### name

> The name of this bundle

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/bundle.js:66](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L66) |



##### deps

> The dependency of this bundle

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/core/asset-manager/bundle.js:80](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L80) |



##### base

> The root path of this bundle, such like 'http://example.com/bundle1'

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/bundle.js:94](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L94) |






<!-- Method Block -->
#### Methods


##### constructor

Create a bundle

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:52](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L52) |



##### getInfoWithPath

Get asset's info using path, only valid when asset is in bundle folder.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/asset-manager/bundle.js:108](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L108) |

###### Parameters
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The relative path of asset, such as 'images/a'
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The constructor of asset, such as  `cc.Texture2D`

##### Examples

```js
var info = bundle.getInfoWithPath('image/a', cc.Texture2D);
```

##### getDirWithPath

Get all asset's info within specific folder

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> 
| Defined in | [cocos2d/core/asset-manager/bundle.js:130](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L130) |

###### Parameters
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The relative path of folder, such as 'images'
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The constructor should be used to filter paths
- `out` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The output array

##### Examples

```js
var infos = [];
bundle.getDirWithPath('images', cc.Texture2D, infos);
```

##### getAssetInfo

Get asset's info with uuid

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/asset-manager/bundle.js:156](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L156) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The asset's uuid

##### Examples

```js
var info = bundle.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getSceneInfo

Get scene'info with name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/asset-manager/bundle.js:177](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L177) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of scene

##### Examples

```js
var info = bundle.getSceneInfo('first.fire');
```

##### init

Initialize this bundle with options

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:198](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L198) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### load

Load the asset within this bundle by the path which is relative to bundle's path

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:216](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L216) |

###### Parameters
- `paths` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> Paths of the target assets.The path is relative to the bundle's folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The finished request item.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when all assets loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error info or null if loaded successfully.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/Asset.html" class="crosslink">Asset[]</a> The loaded assets.

##### Examples

```js
// load the texture (${project}/assets/resources/textures/background.jpg) from resources
cc.resources.load('textures/background', cc.Texture2D, (err, texture) => console.log(err));

// load the audio (${project}/assets/resources/music/hit.mp3) from resources
cc.resources.load('music/hit', cc.AudioClip, (err, audio) => console.log(err));

// load the prefab (${project}/assets/bundle1/misc/character/cocos) from bundle1 folder
bundle1.load('misc/character/cocos', cc.Prefab, (err, prefab) => console.log(err));

// load the sprite frame (${project}/assets/some/xxx/bundle2/imgs/cocos.png) from bundle2 folder
bundle2.load('imgs/cocos', cc.SpriteFrame, null, (err, spriteFrame) => console.log(err));
```

##### preload

Preload the asset within this bundle by the path which is relative to bundle's path.
After calling this method, you still need to finish loading by calling `Bundle.load`.
It will be totally fine to call `Bundle.load` at any time even if the preloading is not
yet finished

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:260](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L260) |

###### Parameters
- `paths` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> Paths of the target asset.The path is relative to bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The finished request item.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when the resource loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error info or null if loaded successfully.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> The preloaded items.

##### Examples

```js
// preload the texture (${project}/assets/resources/textures/background.jpg) from resources
cc.resources.preload('textures/background', cc.Texture2D);

// preload the audio (${project}/assets/resources/music/hit.mp3) from resources
cc.resources.preload('music/hit', cc.AudioClip);
// wait for while
cc.resources.load('music/hit', cc.AudioClip, (err, audioClip) => {});

* // preload the prefab (${project}/assets/bundle1/misc/character/cocos) from bundle1 folder
bundle1.preload('misc/character/cocos', cc.Prefab);

// load the sprite frame of (${project}/assets/bundle2/imgs/cocos.png) from bundle2 folder
bundle2.preload('imgs/cocos', cc.SpriteFrame);
// wait for while
bundle2.load('imgs/cocos', cc.SpriteFrame, (err, spriteFrame) => {});
```

##### loadDir

Load all assets under a folder inside the bundle folder.<br>
<br>
Note: All asset paths in Creator use forward slashes, paths using backslashes will not work.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:312](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L312) |

###### Parameters
- `dir` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> path of the target folder.The path is relative to the bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called with the error. If all assets are loaded successfully, error will be null.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset[]</a> &#124; <a href="../classes/Asset.html" class="crosslink">Asset</a> An array of all loaded assets.

##### Examples

```js
// load all audios (resources/audios/)
cc.resources.loadDir('audios', cc.AudioClip, (err, audios) => {});

// load all textures in "resources/imgs/"
cc.resources.loadDir('imgs', cc.Texture2D, null, function (err, textures) {
    var texture1 = textures[0];
    var texture2 = textures[1];
});

// load all prefabs (${project}/assets/bundle1/misc/characters/) from bundle1 folder
bundle1.loadDir('misc/characters', cc.Prefab, (err, prefabs) => console.log(err));

// load all sprite frame (${project}/assets/some/xxx/bundle2/skills/) from bundle2 folder
bundle2.loadDir('skills', cc.SpriteFrame, null, (err, spriteFrames) => console.log(err));
```

##### preloadDir

Preload all assets under a folder inside the bundle folder.<br> After calling this method, you still need to finish loading by calling `Bundle.loadDir`.
It will be totally fine to call `Bundle.loadDir` at any time even if the preloading is not yet finished

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:361](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L361) |

###### Parameters
- `dir` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> path of the target folder.The path is relative to the bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be preloaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called with the error. If all assets are preloaded successfully, error will be null.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> An array of all preloaded items.

##### Examples

```js
// preload all audios (resources/audios/)
cc.resources.preloadDir('audios', cc.AudioClip);

// preload all textures in "resources/imgs/"
cc.resources.preloadDir('imgs', cc.Texture2D);
// wait for while
cc.resources.loadDir('imgs', cc.Texture2D, (err, textures) => {});

// preload all prefabs (${project}/assets/bundle1/misc/characters/) from bundle1 folder
bundle1.preloadDir('misc/characters', cc.Prefab);

// preload all sprite frame (${project}/assets/some/xxx/bundle2/skills/) from bundle2 folder
bundle2.preloadDir('skills', cc.SpriteFrame);
// wait for while
bundle2.loadDir('skills', cc.SpriteFrame, (err, spriteFrames) => {});
```

##### loadScene

Loads the scene within this bundle by its name.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:411](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L411) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `sceneAsset` <a href="../classes/SceneAsset.html" class="crosslink">SceneAsset</a> The scene asset

##### Examples

```js
bundle1.loadScene('first', (err, sceneAsset) => cc.director.runScene(sceneAsset));
```

##### preloadScene

Preloads the scene within this bundle by its name. After calling this method, you still need to finish loading by calling `Bundle.loadScene` or `cc.director.loadScene`.
It will be totally fine to call `Bundle.loadDir` at any time even if the preloading is not yet finished

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:462](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L462) |

###### Parameters
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called when the load progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.

##### Examples

```js
bundle1.preloadScene('first');
// wait for a while
bundle1.loadScene('first', (err, scene) => cc.director.runScene(scene));
```

##### get

Get asset within this bundle by path and type. <br>
After you load asset with <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> or <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a>,
you can acquire them by passing the path to this API.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| Defined in | [cocos2d/core/asset-manager/bundle.js:506](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L506) |

###### Parameters
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of asset
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be returned if this argument is supplied.

##### Examples

```js
bundle1.get('music/hit', cc.AudioClip);
```

##### release

Release the asset loaded by <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> or <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> and it's dependencies.
Refer to <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:532](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L532) |

###### Parameters
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of asset
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.

##### Examples

```js
// release a texture which is no longer need
bundle1.release('misc/character/cocos');
```

##### releaseUnusedAssets

Release all unused assets within this bundle. Refer to <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:556](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L556) |


##### Examples

```js
// release all unused asset within bundle1
bundle1.releaseUnusedAssets();
```

##### releaseAll

Release all assets within this bundle. Refer to <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a> for detailed informations.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/bundle.js:583](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/bundle.js#L583) |


##### Examples

```js
// release all asset within bundle1
bundle1.releaseAll();
```


