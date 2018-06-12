## `url` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`_rawAssets`](#rawassets) `Object` 
  - [`_builtinRawAssets`](#builtinrawassets) `Object` 



##### 方法

  - [`raw`](#raw) 
  - [`builtinRaw`](#builtinraw) 



### Details


#### 属性（properties）


##### _rawAssets

> The base url of raw assets.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/platform/url.js:39](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/url.js#L39) |



##### _builtinRawAssets

> The base url of builtin raw assets.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/platform/url.js:47](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/url.js#L47) |






<!-- Method Block -->
#### 方法


##### raw

Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/platform/url.js:69](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/url.js#L69) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---
var url = cc.url.raw("textures/myTexture.png");
console.log(url);   // "resources/raw/textures/myTexture.png"

```

##### builtinRaw

Returns the url of builtin raw assets. This method can only used in editor.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/platform/url.js:105](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/url.js#L105) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---
var url = cc.url.builtinRaw("textures/myTexture.png");
console.log(url);   // "resources/default-raw/textures/myTexture.png"

```


