## `Builtins` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


This module contains the builtin asset, it's a singleton, all member can be accessed with `cc.assetManager.builtins`



### Index



##### Methods

  - [`init`](#init) Initialize
  - [`getBuiltin`](#getbuiltin) Get the built-in asset using specific type and name.
  - [`clear`](#clear) Clear all builtin assets



### Details




<!-- Method Block -->
#### Methods


##### init

Initialize

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/builtins.js:66](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/builtins.js#L66) |

###### Parameters
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish loading built-in assets


##### getBuiltin

Get the built-in asset using specific type and name.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/Cache.html" class="crosslink">Cache</a> 
| Defined in | [cocos2d/core/asset-manager/builtins.js:90](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/builtins.js#L90) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The type of asset, such as `effect`
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of asset, such as `phong`

##### Examples

```js
cc.assetManaer.builtins.getBuiltin('effect', 'phone');
```

##### clear

Clear all builtin assets

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/builtins.js:114](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/builtins.js#L114) |




