## `Helper` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


Provide some helpful function, it is a singleton. All member can be accessed with `cc.assetManager.utils`



### Index



##### Methods

  - [`decodeUuid`](#decodeuuid) Decode uuid, returns the original uuid
  - [`getUuidFromURL`](#getuuidfromurl) Extract uuid from url
  - [`getUrlWithUuid`](#geturlwithuuid) Transform uuid to url
  - [`isSceneObj`](#issceneobj) Check if the type of data is cc.Scene or cc.Prefab
  - [`isScene`](#isscene) Check if the type of asset is scene
  - [`normalize`](#normalize) Normalize url, strip './' and '/'



### Details




<!-- Method Block -->
#### Methods


##### decodeUuid

Decode uuid, returns the original uuid

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:42](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L42) |

###### Parameters
- `base64` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the encoded uuid

##### Examples

```js
var uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
var originalUuid = decodeUuid(uuid); // fc991dd7-0033-4b80-9d41-c8a86a702e59
```

##### getUuidFromURL

Extract uuid from url

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:62](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L62) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> url

##### Examples

```js
var url = 'res/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
var uuid = getUuidFromURL(url); // fc991dd7-0033-4b80-9d41-c8a86a702e59
```

##### getUrlWithUuid

Transform uuid to url

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:91](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L91) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> The uuid of asset
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Some optional parameters

##### Examples

```js
var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: false});
```

##### isSceneObj

Check if the type of data is cc.Scene or cc.Prefab

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:123](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L123) |

###### Parameters
- `json` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> serialized data


##### isScene

Check if the type of asset is scene

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:146](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L146) |

###### Parameters
- `asset` Any asset


##### normalize

Normalize url, strip './' and '/'

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/asset-manager/helper.js:164](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/helper.js#L164) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> url



