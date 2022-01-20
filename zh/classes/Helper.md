## `Helper` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


提供一些辅助方法，helper 是一个单例, 所有成员能通过 `cc.assetManager.utils` 访问



### 索引



##### 方法

  - [`decodeUuid`](#decodeuuid) 解码 uuid，返回原始 uuid
  - [`getUuidFromURL`](#getuuidfromurl) 从 url 中提取 uuid
  - [`getUrlWithUuid`](#geturlwithuuid) 转换 uuid 为 url
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
| 定义于 | [cocos2d/core/asset-manager/helper.js:42](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/helper.js#L42) |

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
| 定义于 | [cocos2d/core/asset-manager/helper.js:62](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/helper.js#L62) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> url

##### 示例

```js
var url = 'assets/main/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
var uuid = getUuidFromURL(url); // fc991dd7-0033-4b80-9d41-c8a86a702e59
```

##### getUrlWithUuid

转换 uuid 为 url

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:91](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/helper.js#L91) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The uuid of asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters
	- `isNative` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Indicates whether the path you want is a native resource path
	- `nativeExt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Extension of the native resource path, it is required when isNative is true

##### 示例

```js
// json path, 'assets/main/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: false});

// png path, 'assets/main/native/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.png';
var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: true, nativeExt: '.png'});
```

##### isScene

检查资源类型是否是场景

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:130](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/helper.js#L130) |

###### 参数列表
- `asset` Any asset


##### normalize

标准化 url ，去除 './' 和 '/'

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/asset-manager/helper.js:148](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/helper.js#L148) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> url



