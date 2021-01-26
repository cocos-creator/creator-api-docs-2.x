## `Bundle` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


一个包含一定数量资源（包括场景）的包，你可以加载，预加载，释放此包内的资源



### 索引

##### 属性（properties）

  - [`name`](#name) `String` 此 bundle 的名称
  - [`deps`](#deps) `String[]` 此 bundle 的依赖
  - [`base`](#base) `String` 此 bundle 的根路径, 例如 'http://example.com/bundle1'



##### 方法

  - [`constructor`](#constructor) 创建一个 bundle
  - [`getInfoWithPath`](#getinfowithpath) 使用 path 获取资源的配置信息
  - [`getDirWithPath`](#getdirwithpath) 获取在某个指定文件夹下的所有资源信息
  - [`getAssetInfo`](#getassetinfo) 通过 uuid 获取资源信息
  - [`getSceneInfo`](#getsceneinfo) 通过场景名获取场景信息
  - [`init`](#init) 初始化此 bundle
  - [`load`](#load) 通过相对路径加载分包中的资源。
  - [`preload`](#preload) 通过相对路径预加载分包中的资源。
  - [`loadDir`](#loaddir) 加载目标文件夹中的所有资源, 注意：路径中只能使用斜杠，反斜杠将停止工作
  - [`preloadDir`](#preloaddir) 预加载目标文件夹中的所有资源。
  - [`loadScene`](#loadscene) 通过场景名称加载分包中的场景。
  - [`preloadScene`](#preloadscene) 通过场景名称预加载分包中的场景.调用完后，你仍然需要通过 `Bundle.loadScene` 或 `cc.director.loadScene` 来完成加载。
  - [`get`](#get) 通过路径与类型获取资源。
  - [`release`](#release) 释放通过 <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> 或者 <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> 加载的资源。
  - [`releaseUnusedAssets`](#releaseunusedassets) 释放此包中的所有没有用到的资源。
  - [`releaseAll`](#releaseall) 释放此包中的所有资源。



### Details


#### 属性（properties）


##### name

> 此 bundle 的名称

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/bundle.js:66](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L66) |



##### deps

> 此 bundle 的依赖

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/asset-manager/bundle.js:80](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L80) |



##### base

> 此 bundle 的根路径, 例如 'http://example.com/bundle1'

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/bundle.js:94](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L94) |






<!-- Method Block -->
#### 方法


##### constructor

创建一个 bundle

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:52](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L52) |



##### getInfoWithPath

使用 path 获取资源的配置信息

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/asset-manager/bundle.js:108](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L108) |

###### 参数列表
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The relative path of asset, such as 'images/a'
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The constructor of asset, such as  `cc.Texture2D`

##### 示例

```js
var info = bundle.getInfoWithPath('image/a', cc.Texture2D);
```

##### getDirWithPath

获取在某个指定文件夹下的所有资源信息

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> 
| 定义于 | [cocos2d/core/asset-manager/bundle.js:130](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L130) |

###### 参数列表
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The relative path of folder, such as 'images'
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The constructor should be used to filter paths
- `out` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The output array

##### 示例

```js
var infos = [];
bundle.getDirWithPath('images', cc.Texture2D, infos);
```

##### getAssetInfo

通过 uuid 获取资源信息

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/asset-manager/bundle.js:156](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L156) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The asset's uuid

##### 示例

```js
var info = bundle.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getSceneInfo

通过场景名获取场景信息

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/asset-manager/bundle.js:177](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L177) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of scene

##### 示例

```js
var info = bundle.getSceneInfo('first.fire');
```

##### init

初始化此 bundle

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:198](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L198) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### load

通过相对路径加载分包中的资源。路径是相对分包文件夹路径的相对路径

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:216](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L216) |

###### 参数列表
- `paths` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> Paths of the target assets.The path is relative to the bundle's folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The finished request item.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when all assets loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error info or null if loaded successfully.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/Asset.html" class="crosslink">Asset[]</a> The loaded assets.

##### 示例

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

通过相对路径预加载分包中的资源。路径是相对分包文件夹路径的相对路径。调用完后，你仍然需要通过 `Bundle.load` 来完成加载。
就算预加载还没完成，你也可以直接调用 `Bundle.load`。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:262](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L262) |

###### 参数列表
- `paths` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> Paths of the target asset.The path is relative to bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The finished request item.
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when the resource loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The error info or null if loaded successfully.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> The preloaded items.

##### 示例

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

加载目标文件夹中的所有资源, 注意：路径中只能使用斜杠，反斜杠将停止工作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:314](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L314) |

###### 参数列表
- `dir` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> path of the target folder.The path is relative to the bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be loaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called with the error. If all assets are loaded successfully, error will be null.
	- `assets` <a href="../classes/Asset.html" class="crosslink">Asset[]</a> &#124; <a href="../classes/Asset.html" class="crosslink">Asset</a> An array of all loaded assets.

##### 示例

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

预加载目标文件夹中的所有资源。调用完后，你仍然需要通过 `Bundle.loadDir` 来完成加载。
就算预加载还没完成，你也可以直接调用 `Bundle.loadDir`。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:363](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L363) |

###### 参数列表
- `dir` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> path of the target folder.The path is relative to the bundle folder, extensions must be omitted.
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be preloaded if this argument is supplied.
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> A callback which is called when all assets have been loaded, or an error occurs.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> If one of the asset failed, the complete callback is immediately called with the error. If all assets are preloaded successfully, error will be null.
	- `items` <a href="../classes/RequestItem.html" class="crosslink">RequestItem[]</a> An array of all preloaded items.

##### 示例

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

通过场景名称加载分包中的场景。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:413](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L413) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to load.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback invoked when progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed.
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items.
	- `item` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched.
	- `err` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The occurred error, null indicetes success
	- `sceneAsset` <a href="../classes/SceneAsset.html" class="crosslink">SceneAsset</a> The scene asset

##### 示例

```js
bundle1.loadScene('first', (err, sceneAsset) => cc.director.runScene(sceneAsset));
```

##### preloadScene

通过场景名称预加载分包中的场景.调用完后，你仍然需要通过 `Bundle.loadScene` 或 `cc.director.loadScene` 来完成加载。
就算预加载还没完成，你也可以直接调用 `Bundle.loadScene` 或 `cc.director.loadScene`。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:464](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L464) |

###### 参数列表
- `sceneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the scene to preload.
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
- `onProgress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called when the load progression change.
	- `finish` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of the items that are already completed
	- `total` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The total number of the items
	- `item` <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> The latest request item
- `onComplete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene loaded.
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> null or the error object.

##### 示例

```js
bundle1.preloadScene('first');
// wait for a while
bundle1.loadScene('first', (err, scene) => cc.director.runScene(scene));
```

##### get

通过路径与类型获取资源。在你使用 <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> 或者 <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> 之后，
你能通过传路径通过这个 API 获取到这些资源。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/asset-manager/bundle.js:508](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L508) |

###### 参数列表
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of asset
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be returned if this argument is supplied.

##### 示例

```js
bundle1.get('music/hit', cc.AudioClip);
```

##### release

释放通过 <a href="../classes/Bundle.html#method_load" class="crosslink">load</a> 或者 <a href="../classes/Bundle.html#method_loadDir" class="crosslink">loadDir</a> 加载的资源。详细信息请参考 <a href="../classes/AssetManager.html#method_releaseAsset" class="crosslink">releaseAsset</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:534](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L534) |

###### 参数列表
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of asset
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Only asset of type will be released if this argument is supplied.

##### 示例

```js
// release a texture which is no longer need
bundle1.release('misc/character/cocos');
```

##### releaseUnusedAssets

释放此包中的所有没有用到的资源。详细信息请参考 <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:558](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L558) |


##### 示例

```js
// release all unused asset within bundle1
bundle1.releaseUnusedAssets();
```

##### releaseAll

释放此包中的所有资源。详细信息请参考 <a href="../classes/AssetManager.html#method_releaseAll" class="crosslink">releaseAll</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/bundle.js:585](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/bundle.js#L585) |


##### 示例

```js
// release all asset within bundle1
bundle1.releaseAll();
```


