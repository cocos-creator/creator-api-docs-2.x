## `url` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`_rawAssets`](#rawassets) `Object` The base url of raw assets.
  - [`_builtinRawAssets`](#builtinrawassets) `Object` The base url of builtin raw assets.



##### 方法

  - [`raw`](#raw) Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.
  - [`builtinRaw`](#builtinraw) Returns the url of builtin raw assets. This method can only used in editor.



### Details


#### 属性（properties）


##### _rawAssets

> The base url of raw assets.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:38](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L38) |



##### _builtinRawAssets

> The base url of builtin raw assets.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L46) |






<!-- Method Block -->
#### 方法


##### raw

Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L66) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:94](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L94) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---
var url = cc.url.builtinRaw("textures/myTexture.png");
console.log(url);   // "resources/default-raw/textures/myTexture.png"

```


