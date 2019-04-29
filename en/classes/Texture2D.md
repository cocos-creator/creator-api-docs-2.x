## `Texture2D` Class

Extends [`Asset`](Asset.md), [`EventTarget`](EventTarget.md)(mixin)


Module: [cc](../modules/cc.md)


This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.<br/>
The created cc.Texture2D object will always have power-of-two dimensions.<br/>
Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
i.e. "contentSize" != (pixelsWidth, pixelsHight) and (maxS, maxT) != (1.0, 1.0).<br/>
Be aware that the content of the generated textures will be upside-down!


### Index

##### Properties

  - [`url`](#url) `String` The url of the texture, this could be empty if the texture wasn't created via a file.
  - [`width`](#width) `Number` Texture width in pixel
  - [`height`](#height) `Number` Texture height in pixel
  - [`pixelFormat`](#pixelformat) `Number` Pixel format of the texture.
  - [`pixelWidth`](#pixelwidth) `Number` Width in pixels.
  - [`pixelHeight`](#pixelheight) `Number` Height in pixels.
  - [`loaded`](#loaded) `Boolean` Whether the asset is loaded or not
  - [`nativeUrl`](#nativeurl) `String` Returns the url of this asset's native object, if none it will returns an empty string.
  - [`_native`](#native) `String` Serializable url for native asset.
  - [`_nativeAsset`](#nativeasset) `Object` The underlying native asset of this asset if one is available.
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`update`](#update) Update texture options, not available in Canvas render mode.
  - [`getPixelWidth`](#getpixelwidth) Get width in pixels.
  - [`getPixelHeight`](#getpixelheight) Get height of in pixels.
  - [`getContentSize`](#getcontentsize) Get content size.
  - [`getContentSizeInPixels`](#getcontentsizeinpixels) Get content size in pixels.
  - [`initWithElement`](#initwithelement) Init with HTML element.
  - [`initWithData`](#initwithdata) Intializes with a texture2d with data.
  - [`initWithImage`](#initwithimage) Initializes a texture from a UIImage object.
  - [`getHtmlElementObj`](#gethtmlelementobj) HTMLElement Object getter, available only on web.
  - [`isLoaded`](#isloaded) Check whether texture is loaded.
  - [`handleLoadedTexture`](#handleloadedtexture) Handler of texture loaded event.
  - [`description`](#description) Description of cc.Texture2D.
  - [`destroy`](#destroy) Destory this texture and immediately release its video memory.
  - [`getPixelFormat`](#getpixelformat) Pixel format of the texture.
  - [`hasPremultipliedAlpha`](#haspremultipliedalpha) Whether or not the texture has their Alpha premultiplied,...
  - [`hasMipmaps`](#hasmipmaps) Whether or not use mipmap, support only in WebGl rendering mode.
  - [`setTexParameters`](#settexparameters) Sets the min filter, mag filter, wrap s and wrap t texture parameters.
  - [`setAntiAliasTexParameters`](#setantialiastexparameters) sets antialias texture parameters:              ...
  - [`setAliasTexParameters`](#setaliastexparameters) Sets alias texture parameters:                 ...
  - [`toString`](#tostring) Returns the asset's url.
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法
  - [`createNode`](#createnode) Create a new node using this asset in the scene....
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### Events

  - [`load`](#load) This event is emitted when the asset is loaded


### Details


#### Properties


##### url

> The url of the texture, this could be empty if the texture wasn't created via a file.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:205](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L205) |



##### width

> Texture width in pixel

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:218](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L218) |



##### height

> Texture height in pixel

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:227](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L227) |



##### pixelFormat

> Pixel format of the texture.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:1027](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L1027) |



##### pixelWidth

> Width in pixels.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:1034](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L1034) |
| Deprecated | please use width instead |



##### pixelHeight

> Height in pixels.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/textures/CCTexture2D.js:1042](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L1042) |
| Deprecated | please use height instead |



##### loaded

> Whether the asset is loaded or not

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L57) |



##### nativeUrl

> Returns the url of this asset's native object, if none it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:70](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L70) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:108](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L108) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:116](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L116) |



##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCRawAsset.js:46](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCRawAsset.js#L46) |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:243](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L243) |

##### Examples

```js
obj.name = "New Obj";
```


##### isValid

> Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `cc.isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:261](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L261) |

##### Examples

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### Methods


##### update

Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:282](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L282) |

###### Parameters
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `image` DOMImageElement 
	- `mipmap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `format` PixelFormat 
	- `minFilter` Filter 
	- `magFilter` Filter 
	- `wrapS` <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> 
	- `wrapT` <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> 
	- `premultiplyAlpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### getPixelWidth

Get width in pixels.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:303](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L303) |
| Deprecated | use width or height property instead |



##### getPixelHeight

Get height of in pixels.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:313](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L313) |
| Deprecated | use width or height property instead |



##### getContentSize

Get content size.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:323](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L323) |
| Deprecated | use width or height property instead |



##### getContentSizeInPixels

Get content size in pixels.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:333](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L333) |
| Deprecated | use width or height property instead |



##### initWithElement

Init with HTML element.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:343](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L343) |

###### Parameters
- `element` HTMLImageElement &#124; HTMLCanvasElement 

##### Examples

```js
var img = new Image();
img.src = dataURL;
texture.initWithElement(img);
texture.handleLoadedTexture();
```

##### initWithData

Intializes with a texture2d with data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:362](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L362) |

###### Parameters
- `data` TypedArray 
- `pixelFormat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsWidth` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsHeight` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `contentSize` <a href="../classes/Size.html" class="crosslink">Size</a> contentSize is deprecated and ignored


##### initWithImage

Initializes a texture from a UIImage object.
Extensions to make it easy to create a CCTexture2D object from an image file.
Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:377](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L377) |

###### Parameters
- `uiImage` HTMLImageElement 


##### getHtmlElementObj

HTMLElement Object getter, available only on web.
In most case, it will return null, because we are recycling the dom image element for better loading performance and lower image cache memory usage.

| meta | description |
|------|-------------|
| Returns | HTMLImageElement &#124; HTMLCanvasElement 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:390](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L390) |



##### isLoaded

Check whether texture is loaded.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:428](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L428) |
| Deprecated | use &#x60;loaded&#x60; property instead |



##### handleLoadedTexture

Handler of texture loaded event.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:441](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L441) |



##### description

Description of cc.Texture2D.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:458](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L458) |



##### destroy

Destory this texture and immediately release its video memory. (Inherit from cc.Object.destroy)<br>
After destroy, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:474](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L474) |



##### getPixelFormat

Pixel format of the texture.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:490](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L490) |



##### hasPremultipliedAlpha

Whether or not the texture has their Alpha premultiplied,
support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:500](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L500) |



##### hasMipmaps

Whether or not use mipmap, support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/textures/CCTexture2D.js:510](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L510) |



##### setTexParameters

Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:519](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L519) |
| Deprecated | use update function with filter and wrap options instead |

###### Parameters
- `texParams` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> texParams object or minFilter
- `magFilter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `wrapS` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 
- `wrapT` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 


##### setAntiAliasTexParameters

sets antialias texture parameters:              <br/>
 - GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
 - GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:548](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L548) |
| Deprecated | use update function with filter options instead |



##### setAliasTexParameters

Sets alias texture parameters:                 <br/>
  GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
  GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/textures/CCTexture2D.js:560](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/textures/CCTexture2D.js#L560) |
| Deprecated | use update function with filter options instead |



##### toString

Returns the asset's url.

The `Asset` object overrides the `toString()` method of the `Object` object.
For `Asset` objects, the toString() method returns a string representation of the object.
JavaScript calls the toString() method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:165](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L165) |



##### serialize

应 AssetDB 要求提供这个方法

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:179](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L179) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:190](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L190) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:205](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/assets/CCAsset.js#L205) |

###### Parameters
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:218](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L218) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:275](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L275) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Examples

```js
// register touchEnd eventListener
var touchEnd = node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
// remove touch end event listener
node.off(cc.Node.EventType.TOUCH_END, touchEnd, node);
// remove all touch end event listeners
node.off(cc.Node.EventType.TOUCH_END);
```

##### targetOff

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:330](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L330) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:352](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L352) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:397](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L397) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:411](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event/event-target.js#L411) |

###### Parameters
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs


##### _destruct

Clear all references in the instance.

NOTE: this method will not clear the getter or setter functions which defined in the instance of CCObject.
      You can override the _destruct method if you need, for example:
      _destruct: function () {
          for (var key in this) {
              if (this.hasOwnProperty(key)) {
                  switch (typeof this[key]) {
                      case 'string':
                          this[key] = '';
                          break;
                      case 'object':
                      case 'function':
                          this[key] = null;
                          break;
              }
          }
      }

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:428](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L428) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:461](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L461) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:486](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L486) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:496](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/CCObject.js#L496) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### Events

### `load` Event



Module: [cc](../modules/cc.md)


This event is emitted when the asset is loaded


### Index







### Details





