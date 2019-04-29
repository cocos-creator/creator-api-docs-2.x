## `RenderTexture` Class

Extends [`Texture2D`](Texture2D.md)


Module: [cc](../modules/cc.md)


Render textures are textures that can be rendered to.



### Index

##### Properties

  - [`url`](#url) `String` The url of the texture, this could be empty if the texture wasn't created via a file.
  - [`loaded`](#loaded) `Boolean` Whether the texture is loaded or not
  - [`width`](#width) `Number` Texture width in pixel
  - [`height`](#height) `Number` Texture height in pixel
  - [`nativeUrl`](#nativeurl) `String` Returns the url of this asset's native object, if none it will returns an empty string.
  - [`_native`](#native) `String` Serializable url for native asset.
  - [`_nativeAsset`](#nativeasset) `Object` The underlying native asset of this asset if one is available.
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`initWithSize`](#initwithsize) Init the render texture with size.
  - [`readPixels`](#readpixels) Get pixels from render texture, the pixels data stores in a RGBA Uint8Array.
  - [`getImpl`](#getimpl) Get renderer texture implementation object
  - [`update`](#update) Update texture options, not available in Canvas render mode.
  - [`initWithElement`](#initwithelement) Init with HTML element.
  - [`initWithData`](#initwithdata) Intializes with a texture2d with data in Uint8Array.
  - [`getHtmlElementObj`](#gethtmlelementobj) HTMLElement Object getter, available only on web.
  - [`destroy`](#destroy) Destory this texture and immediately release its video memory.
  - [`getPixelFormat`](#getpixelformat) Pixel format of the texture.
  - [`hasPremultipliedAlpha`](#haspremultipliedalpha) Whether or not the texture has their Alpha premultiplied.
  - [`hasMipmap`](#hasmipmap) Whether or not use mipmap.
  - [`handleLoadedTexture`](#handleloadedtexture) Handler of texture loaded event.
  - [`description`](#description) Description of cc.Texture2D.
  - [`releaseTexture`](#releasetexture) Release texture, please use destroy instead.
  - [`setTexParameters`](#settexparameters) Sets the wrap s and wrap t options.
  - [`setFilters`](#setfilters) Sets the minFilter and magFilter options
  - [`setFlipY`](#setflipy) Sets the flipY options
  - [`setPremultiplyAlpha`](#setpremultiplyalpha) Sets the premultiply alpha options
  - [`setMipmap`](#setmipmap) Sets whether generate mipmaps for the texture
  - [`toString`](#tostring) Returns the asset's url.
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法
  - [`createNode`](#createnode) Create a new node using this asset in the scene....
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.
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
| Defined in | [cocos2d/core/assets/CCTexture2D.js:305](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L305) |



##### loaded

> Whether the texture is loaded or not

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/assets/CCTexture2D.js:317](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L317) |



##### width

> Texture width in pixel

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCTexture2D.js:326](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L326) |



##### height

> Texture height in pixel

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCTexture2D.js:335](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L335) |



##### nativeUrl

> Returns the url of this asset's native object, if none it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:70](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L70) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:108](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L108) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:116](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L116) |



##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCRawAsset.js:46](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCRawAsset.js#L46) |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L258) |

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


##### initWithSize

Init the render texture with size.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCRenderTexture.js:22](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCRenderTexture.js#L22) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `depthStencilFormat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### readPixels

Get pixels from render texture, the pixels data stores in a RGBA Uint8Array.
It will return a new (width * height * 4) length Uint8Array by default。
You can specify a data to store the pixels to reuse the data,
you and can specify other params to specify the texture region to read.

| meta | description |
|------|-------------|
| Returns | Uint8Array 
| Defined in | [cocos2d/core/assets/CCRenderTexture.js:95](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCRenderTexture.js#L95) |

###### Parameters
- `data` Uint8Array 
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getImpl

Get renderer texture implementation object
extended from render.Texture2D

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:354](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L354) |



##### update

Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:373](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L373) |

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


##### initWithElement

Init with HTML element.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:453](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L453) |

###### Parameters
- `element` HTMLImageElement &#124; HTMLCanvasElement 

##### Examples

```js
var img = new Image();
img.src = dataURL;
texture.initWithElement(img);
```

##### initWithData

Intializes with a texture2d with data in Uint8Array.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:482](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L482) |

###### Parameters
- `data` TypedArray 
- `pixelFormat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsWidth` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsHeight` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getHtmlElementObj

HTMLElement Object getter, available only on web.

| meta | description |
|------|-------------|
| Returns | HTMLImageElement &#124; HTMLCanvasElement 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:521](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L521) |



##### destroy

Destory this texture and immediately release its video memory. (Inherit from cc.Object.destroy)<br>
After destroy, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:532](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L532) |



##### getPixelFormat

Pixel format of the texture.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:551](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L551) |



##### hasPremultipliedAlpha

Whether or not the texture has their Alpha premultiplied.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:563](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L563) |



##### hasMipmap

Whether or not use mipmap.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:574](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L574) |



##### handleLoadedTexture

Handler of texture loaded event.
Since v2.0, you don't need to invoke this function, it will be invoked automatically after texture loaded.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:585](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L585) |

###### Parameters
- `premultiplied` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### description

Description of cc.Texture2D.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCTexture2D.js:634](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L634) |



##### releaseTexture

Release texture, please use destroy instead.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:645](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L645) |
| Deprecated | since v2.0 |



##### setTexParameters

Sets the wrap s and wrap t options. <br/>
If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:657](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L657) |

###### Parameters
- `wrapS` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 
- `wrapT` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 


##### setFilters

Sets the minFilter and magFilter options

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:675](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L675) |

###### Parameters
- `minFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 
- `magFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 


##### setFlipY

Sets the flipY options

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:691](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L691) |

###### Parameters
- `flipY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setPremultiplyAlpha

Sets the premultiply alpha options

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:706](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L706) |

###### Parameters
- `premultiply` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setMipmap

Sets whether generate mipmaps for the texture

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCTexture2D.js:721](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCTexture2D.js#L721) |

###### Parameters
- `mipmap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### toString

Returns the asset's url.

The `Asset` object overrides the `toString()` method of the `Object` object.
For `Asset` objects, the toString() method returns a string representation of the object.
JavaScript calls the toString() method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:165](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L165) |



##### serialize

应 AssetDB 要求提供这个方法

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:179](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L179) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:190](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L190) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:205](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/assets/CCAsset.js#L205) |

###### Parameters
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:68](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L68) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:76](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L76) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:116](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L116) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

```js
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');
```

##### targetOff

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:150](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L150) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L163) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function () {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:200](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L200) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:220](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/event/event-target.js#L220) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:460](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L460) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:485](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L485) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:495](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCObject.js#L495) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### Events

### `load` Event



Module: [cc](../modules/cc.md)


This event is emitted when the asset is loaded


### Index







### Details





