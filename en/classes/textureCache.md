## `textureCache` Class



Module: [cc](../modules/cc.md)


cc.textureCache is a singleton object, it's the global cache for cc.Texture2D


### Index



##### Methods

  - [`description`](#description) Description
  - [`getTextureForKey`](#gettextureforkey) Returns an already created texture.
  - [`getTextureColors`](#gettexturecolors) 
  - [`getAllTextures`](#getalltextures) get all textures
  - [`removeAllTextures`](#removealltextures) <p>Purges the dictionary of loaded textures.
  - [`removeTexture`](#removetexture) Deletes a texture from the cache given a texture.
  - [`removeTextureForKey`](#removetextureforkey) Deletes a texture from the cache given a its key name.
  - [`addImage`](#addimage) object and it will return it.
  - [`cacheImage`](#cacheimage) Cache the image data.



### Details




<!-- Method Block -->
#### Methods


##### description

Description

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/textures/CCTextureCache.js:44](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L44) |



##### getTextureForKey

Returns an already created texture. Returns null if the texture doesn't exist.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> &#124; Null 
| Defined in | [cocos2d/core/textures/CCTextureCache.js:53](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L53) |

###### Parameters
- `textureKeyName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
------------------
var key = cc.textureCache.getTextureForKey("hello.png");

```

##### getTextureColors



| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/core/textures/CCTextureCache.js:83](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L83) |

###### Parameters
- `texture` HTMLImageElement 

##### Examples

```js
---------------
var cacheTextureForColor = cc.textureCache.getTextureColors(texture);

```

##### getAllTextures

get all textures

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Texture2D.html" class="crosslink">Texture2D[]</a> 
| Defined in | [cocos2d/core/textures/CCTextureCache.js:104](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L104) |



##### removeAllTextures

<p>Purges the dictionary of loaded textures. <br />
Call this method if you receive the "Memory Warning"  <br />
In the short term: it will free some resources preventing your app from being killed  <br />
In the medium term: it will allocate more resources <br />
In the long term: it will be the same</p>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTextureCache.js:119](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L119) |


##### Examples

```js
--------
cc.textureCache.removeAllTextures();

```

##### removeTexture

Deletes a texture from the cache given a texture.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTextureCache.js:137](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L137) |

###### Parameters
- `texture` HTMLImageElement 

##### Examples

```js
-----
cc.textureCache.removeTexture(texture);

```

##### removeTextureForKey

Deletes a texture from the cache given a its key name.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTextureCache.js:156](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L156) |

###### Parameters
- `textureKeyName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
------
cc.textureCache.removeTexture("hello.png");

```

##### addImage

Returns a Texture2D object given an file image <br />
If the file image was not previously loaded, it will create a new Texture2D
object and it will return it. It will use the filename as a key.
Otherwise it will return a reference of a previously loaded image. <br />
Supported image extensions: .png, .jpg, .gif

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
| Defined in | [cocos2d/core/textures/CCTextureCache.js:178](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L178) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `cb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Examples

```js
----
cc.textureCache.addImage("hello.png");

```

##### cacheImage

Cache the image data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTextureCache.js:229](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/textures/CCTextureCache.js#L229) |

###### Parameters
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `texture` HTMLImageElement &#124; HTMLCanvasElement 



