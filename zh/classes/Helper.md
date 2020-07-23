## `Helper` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


提供一些辅助方法，helper 是一个单例, 所有成员能通过 `cc.assetManager.utils` 访问



### 索引



##### 方法

  - [`decodeUuid`](#decodeuuid) 解码 uuid，返回原始 uuid
  - [`getUuidFromURL`](#getuuidfromurl) 从 url 中提取 uuid
  - [`getUrlWithUuid`](#geturlwithuuid) 转换 uuid 为 url
  - [`isSceneObj`](#issceneobj) 检测数据的类型是否是 Scene 或者 Prefab
  - [`isScene`](#isscene) 检查资源类型是否是场景
  - [`normalize`](#normalize) 标准化 url ，去除 './' 和 '/'



### Details




<!-- Method Block -->
#### 方法


##### decodeUuid

解码 uuid，返回原始 uuid

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:42](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L42) |

###### 参数列表
- `base64` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the encoded uuid

##### 示例

```js
var uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
var originalUuid = decodeUuid(uuid); // fc991dd7-0033-4b80-9d41-c8a86a702e59
```

##### getUuidFromURL

从 url 中提取 uuid

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:62](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L62) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> url

##### 示例

```js
var url = 'res/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
var uuid = getUuidFromURL(url); // fc991dd7-0033-4b80-9d41-c8a86a702e59
```

##### getUrlWithUuid

转换 uuid 为 url

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:91](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L91) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The uuid of asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters

##### 示例

```js
var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: false});
```

##### isSceneObj

检测数据的类型是否是 Scene 或者 Prefab

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:123](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L123) |

###### 参数列表
- `json` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> serialized data


##### isScene

检查资源类型是否是场景

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:146](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L146) |

###### 参数列表
- `asset` Any asset


##### normalize

标准化 url ，去除 './' 和 '/'

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:164](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/helper.js#L164) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> url



