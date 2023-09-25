## `DependUtil` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


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
| Defined in | [cocos2d/core/asset-manager/depend-util.js:53](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/depend-util.js#L53) |

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
| Defined in | [cocos2d/core/asset-manager/depend-util.js:76](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/depend-util.js#L76) |

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
| Defined in | [cocos2d/core/asset-manager/depend-util.js:100](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/depend-util.js#L100) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The asset's uuid

##### Examples

```js
var deps = dependUtil.getDepsRecursively('fcmR3XADNLgJ1ByKhqcC5Z');
```


