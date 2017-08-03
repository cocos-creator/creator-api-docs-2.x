## `textureCache` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




cc.textureCache is a singleton object, it's the global cache for cc.Texture2D

### Index



##### Methods

  - [`description`](#description) Description
  - [`textureForKey`](#textureforkey) Returns an already created texture. Returns null if the texture doesn't exist.
  - [`getTextureForKey`](#gettextureforkey) Returns an already created texture. Returns null if the texture doesn't exist.
  - [`getTextureColors`](#gettexturecolors) 
  - [`getAllTextures`](#getalltextures) #en get all textures
#zh 获取所有贴图
  - [`removeAllTextures`](#removealltextures) <p>Purges the dictionary of loaded textures. <br />
Call this method if you receive the "Memory Warning"  <br />
In the short term: it will free some resources preventing your app from being killed  <br />
In the medium term: it will allocate more resources <br />
In the long term: it will be the same</p>
  - [`removeTexture`](#removetexture) Deletes a texture from the cache given a texture.
  - [`removeTextureForKey`](#removetextureforkey) Deletes a texture from the cache given a its key name.
  - [`addImage`](#addimage) <p>Returns a Texture2D object given an file image <br />
If the file image was not previously loaded, it will create a new Texture2D <br />
 object and it will return it. It will use the filename as a key.<br />
Otherwise it will return a reference of a previously loaded image. <br />
Supported image extensions: .png, .jpg, .gif</p>
  - [`cacheImage`](#cacheimage) Cache the image data.
  - [`addUIImage`](#adduiimage) <p>Returns a Texture2D object given an UIImage image<br />
If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
Otherwise it will return a reference of a previously loaded image<br />
The "key" parameter will be used as the "key" for the cache.<br />
If "key" is null, then a new texture will be created each time.</p>



### Details




<!-- Method Block -->
#### Methods


##### description

Description

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:58](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L58) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### textureForKey

Returns an already created texture. Returns null if the texture doesn't exist.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L67) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> | Null 

###### Parameters
- textureKeyName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/textureForKey.js

##### getTextureForKey

Returns an already created texture. Returns null if the texture doesn't exist.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:80](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L80) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> | Null 

###### Parameters
- textureKeyName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/getTextureForKey.js

##### getTextureColors



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L110) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

###### Parameters
- texture HTMLImageElement 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/getTextureColors.js

##### getAllTextures

#en get all textures
#zh 获取所有贴图

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:131](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L131) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D[]</a> 



##### removeAllTextures

<p>Purges the dictionary of loaded textures. <br />
Call this method if you receive the "Memory Warning"  <br />
In the short term: it will free some resources preventing your app from being killed  <br />
In the medium term: it will allocate more resources <br />
In the long term: it will be the same</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:146](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L146) |


##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/removeAllTextures.js

##### removeTexture

Deletes a texture from the cache given a texture.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:164](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L164) |

###### Parameters
- texture HTMLImageElement 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/removeTexture.js

##### removeTextureForKey

Deletes a texture from the cache given a its key name.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:183](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L183) |

###### Parameters
- textureKeyName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/removeTextureForKey.js

##### addImage

<p>Returns a Texture2D object given an file image <br />
If the file image was not previously loaded, it will create a new Texture2D <br />
 object and it will return it. It will use the filename as a key.<br />
Otherwise it will return a reference of a previously loaded image. <br />
Supported image extensions: .png, .jpg, .gif</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:199](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L199) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 

###### Parameters
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/addImage.js

##### cacheImage

Cache the image data.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:215](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L215) |

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- texture HTMLImageElement | HTMLCanvasElement 


##### addUIImage

<p>Returns a Texture2D object given an UIImage image<br />
If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
Otherwise it will return a reference of a previously loaded image<br />
The "key" parameter will be used as the "key" for the cache.<br />
If "key" is null, then a new texture will be created each time.</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js:234](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureCache.js#L234) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 

###### Parameters
- image HTMLImageElement | HTMLCanvasElement 
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



