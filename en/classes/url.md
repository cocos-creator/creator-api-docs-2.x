## `url` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`_rawAssets`](#rawassets) `Object` The base url of raw assets.
  - [`_builtinRawAssets`](#builtinrawassets) `Object` The base url of builtin raw assets.



##### Methods

  - [`raw`](#raw) Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.
  - [`builtinRaw`](#builtinraw) Returns the url of builtin raw assets. This method can only used in editor.



### Details


#### Properties


##### _rawAssets

> The base url of raw assets.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:38](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L38) |



##### _builtinRawAssets

> The base url of builtin raw assets.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L46) |






<!-- Method Block -->
#### Methods


##### raw

Returns the url of raw assets, you will only need this if the raw asset is inside the "resources" folder.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L66) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
---
var url = cc.url.raw("textures/myTexture.png");
console.log(url);   // "resources/raw/textures/myTexture.png"

```

##### builtinRaw

Returns the url of builtin raw assets. This method can only used in editor.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js:94](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/url.js#L94) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
---
var url = cc.url.builtinRaw("textures/myTexture.png");
console.log(url);   // "resources/default-raw/textures/myTexture.png"

```


