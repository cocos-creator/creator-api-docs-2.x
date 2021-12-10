## `DependUtil` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


控制资源的依赖列表，这是一个单例, 所有成员能通过 `cc.assetManager.dependUtil` 访问



### 索引



##### 方法

  - [`getNativeDep`](#getnativedep) 获取资源的原生依赖，例如 Texture 的原生依赖是图片
  - [`getDeps`](#getdeps) 获取资源直接引用的非原生依赖列表，例如，材质的非原生依赖是 Texture
  - [`getDependsRecursively`](#getdependsrecursively) 获取某个已经加载好的资源的所有非原生依赖资源列表，包括间接引用的资源，并保存在数组中返回。



### Details




<!-- Method Block -->
#### 方法


##### getNativeDep

获取资源的原生依赖，例如 Texture 的原生依赖是图片

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/asset-manager/depend-util.js:53](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/asset-manager/depend-util.js#L53) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> asset's uuid

##### 示例

```js
var dep = dependUtil.getNativeDep('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getDeps

获取资源直接引用的非原生依赖列表，例如，材质的非原生依赖是 Texture

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> 
| 定义于 | [cocos2d/core/asset-manager/depend-util.js:76](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/asset-manager/depend-util.js#L76) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> asset's uuid

##### 示例

```js
var deps = dependUtil.getDeps('fcmR3XADNLgJ1ByKhqcC5Z');
```

##### getDependsRecursively

获取某个已经加载好的资源的所有非原生依赖资源列表，包括间接引用的资源，并保存在数组中返回。
返回的数组将仅保存依赖资源的 uuid。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string[]</a> 
| 定义于 | [cocos2d/core/asset-manager/depend-util.js:100](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/asset-manager/depend-util.js#L100) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The asset's uuid

##### 示例

```js
var deps = dependUtil.getDepsRecursively('fcmR3XADNLgJ1ByKhqcC5Z');
```


