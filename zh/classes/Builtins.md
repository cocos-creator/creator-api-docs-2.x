## `Builtins` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


此模块包含内建资源，这是一个单例，所有成员能通过 `cc.assetManager.builtins` 访问



### 索引



##### 方法

  - [`init`](#init) 初始化
  - [`getBuiltin`](#getbuiltin) 通过特定的类型和名称获取内建资源
  - [`clear`](#clear) 清空所有内置资源



### Details




<!-- Method Block -->
#### 方法


##### init

初始化

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/builtins.js:66](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/builtins.js#L66) |

###### 参数列表
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Callback when finish loading built-in assets


##### getBuiltin

通过特定的类型和名称获取内建资源

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> &#124; <a href="../classes/Cache.html" class="crosslink">Cache</a> 
| 定义于 | [cocos2d/core/asset-manager/builtins.js:90](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/builtins.js#L90) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The type of asset, such as `effect`
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The name of asset, such as `phong`

##### 示例

```js
cc.assetManaer.builtins.getBuiltin('effect', 'phone');
```

##### clear

清空所有内置资源

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/builtins.js:114](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/builtins.js#L114) |




