## `DependUtil` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Control asset's dependency list, it is a singleton. All member can be accessed with `cc.assetManager.dependUtil`



### Index



##### Methods

  - [`getNativeDep`](#getnativedep) Get asset's native dependency.
  - [`getDeps`](#getdeps) Get asset's direct referencing non-native dependency list.
  - [`getDependsRecursively`](#getdependsrecursively) Get non-native dependency list of the loaded asset, include indirect reference.



### Details




<!-- Method Block -->
#### Methods


##### getNativeDep

Get asset's native dependency. For example, Texture's native dependency is image.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/asset-manager/depend-util.js:50](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/depend-util.js#L50) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> asset's uuid

##### Examples

```js
var dep = dependUtil.getNativeDep('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getDeps

Get asset's direct referencing non-native dependency list. For example, Material's non-native dependencies are Texture.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> 
| Defined in | [cocos2d/core/asset-manager/depend-util.js:72](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/depend-util.js#L72) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> asset's uuid

##### Examples

```js
var deps = dependUtil.getDeps('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getDependsRecursively

Get non-native dependency list of the loaded asset, include indirect reference.
The returned array stores the dependencies with their uuid, after retrieve dependencies,

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> 
| Defined in | [cocos2d/core/asset-manager/depend-util.js:96](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/asset-manager/depend-util.js#L96) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The asset's uuid

##### Examples

```js
var deps = dependUtil.getDepsRecursively('fcmR3XADNLgJ1ByKhqcC5Z');
```


