## `Texture2D` Class

Extends [`RawAsset`](RawAsset.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




<p>
This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
 i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
Be aware that the content of the generated textures will be upside-down! </p>

### Index

##### Properties

  - [`PIXEL_FORMAT_RGBA8888`](#pixelformatrgba8888) `Number` 32-bit texture: RGBA8888
  - [`PIXEL_FORMAT_RGB888`](#pixelformatrgb888) `Number` 24-bit texture: RGB888, not supported yet
  - [`PIXEL_FORMAT_RGB565`](#pixelformatrgb565) `Number` 16-bit texture without Alpha channel, not supported yet
  - [`PIXEL_FORMAT_A8`](#pixelformata8) `Number` 8-bit textures used as masks, not supported yet
  - [`PIXEL_FORMAT_I8`](#pixelformati8) `Number` 8-bit intensity texture, not supported yet
  - [`PIXEL_FORMAT_AI88`](#pixelformatai88) `Number` 16-bit textures used as masks, not supported yet
  - [`PIXEL_FORMAT_RGBA4444`](#pixelformatrgba4444) `Number` 16-bit textures: RGBA4444, not supported yet
  - [`PIXEL_FORMAT_RGB5A1`](#pixelformatrgb5a1) `Number` 16-bit textures: RGB5A1, not supported yet
  - [`PIXEL_FORMAT_PVRTC4`](#pixelformatpvrtc4) `Number` 4-bit PVRTC-compressed texture: PVRTC4, not supported yet
  - [`PIXEL_FORMAT_PVRTC2`](#pixelformatpvrtc2) `Number` 2-bit PVRTC-compressed texture: PVRTC2, not supported yet
  - [`PIXEL_FORMAT_DEFAULT`](#pixelformatdefault) `Number` Default texture format: RGBA8888
  - [`defaultPixelFormat`](#defaultpixelformat) `Number` The default pixel format
  - [`name`](#name) `WebGLTexture` WebGLTexture Object.
  - [`url`](#url) `String` The source file's url for the texture, it could be empty if the texture wasn't created via a file.
  - [`pixelFormat`](#pixelformat) `Number` Pixel format of the texture.
  - [`pixelWidth`](#pixelwidth) `Number` Width in pixels.
  - [`pixelHeight`](#pixelheight) `Number` Height in pixels.
  - [`width`](#width) `Number` Content width in points.
  - [`height`](#height) `Number` Content height in points.
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`getPixelWidth`](#getpixelwidth) Get width in pixels.
  - [`getPixelHeight`](#getpixelheight) Get height of in pixels.
  - [`getContentSize`](#getcontentsize) Get content size.
  - [`getContentSizeInPixels`](#getcontentsizeinpixels) Get content size in pixels.
  - [`initWithElement`](#initwithelement) Init with HTML element.
  - [`initWithData`](#initwithdata) Intializes with a texture2d with data.
  - [`initWithImage`](#initwithimage) Initializes a texture from a UIImage object.
Extensions to make it easy to create a CCTexture2D object from an image file.
Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA).
  - [`getHtmlElementObj`](#gethtmlelementobj) HTMLElement Object getter, available only on web.
In most case, it will return null, because we are recycling the dom image element for better loading performance and lower image cache memory usage.
  - [`isLoaded`](#isloaded) Check whether texture is loaded.
  - [`handleLoadedTexture`](#handleloadedtexture) Handler of texture loaded event.
  - [`description`](#description) Description of cc.Texture2D.
  - [`releaseTexture`](#releasetexture) Release texture.
  - [`getPixelFormat`](#getpixelformat) Pixel format of the texture.
  - [`hasPremultipliedAlpha`](#haspremultipliedalpha) Whether or not the texture has their Alpha premultiplied,
support only in WebGl rendering mode.
  - [`hasMipmaps`](#hasmipmaps) Whether or not use mipmap, support only in WebGl rendering mode.
  - [`setTexParameters`](#settexparameters) Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.
  - [`setAntiAliasTexParameters`](#setantialiastexparameters) sets antialias texture parameters:              <br/>
 - GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
 - GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode
  - [`setAliasTexParameters`](#setaliastexparameters) Sets alias texture parameters:                 <br/>
  GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
  GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.
  - [`destroy`](#destroy) Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
<br/>
After destroy, this CCObject is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.
  - [`_destruct`](#destruct) Clear all references in the instance.

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
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object. (Editor Only)
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### PIXEL_FORMAT_RGBA8888

> 32-bit texture: RGBA8888

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:375](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L375) |



##### PIXEL_FORMAT_RGB888

> 24-bit texture: RGB888, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:383](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L383) |



##### PIXEL_FORMAT_RGB565

> 16-bit texture without Alpha channel, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:391](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L391) |



##### PIXEL_FORMAT_A8

> 8-bit textures used as masks, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L399) |



##### PIXEL_FORMAT_I8

> 8-bit intensity texture, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:407](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L407) |



##### PIXEL_FORMAT_AI88

> 16-bit textures used as masks, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L415) |



##### PIXEL_FORMAT_RGBA4444

> 16-bit textures: RGBA4444, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:423](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L423) |



##### PIXEL_FORMAT_RGB5A1

> 16-bit textures: RGB5A1, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:431](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L431) |



##### PIXEL_FORMAT_PVRTC4

> 4-bit PVRTC-compressed texture: PVRTC4, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:439](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L439) |



##### PIXEL_FORMAT_PVRTC2

> 2-bit PVRTC-compressed texture: PVRTC2, not supported yet

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L447) |



##### PIXEL_FORMAT_DEFAULT

> Default texture format: RGBA8888

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:455](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L455) |



##### defaultPixelFormat

> The default pixel format

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:463](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L463) |



##### name

> WebGLTexture Object.

| meta | description |
|------|-------------|
| Type | WebGLTexture |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1020](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1020) |



##### url

> The source file's url for the texture, it could be empty if the texture wasn't created via a file.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1027](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1027) |



##### pixelFormat

> Pixel format of the texture.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1034](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1034) |



##### pixelWidth

> Width in pixels.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1041](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1041) |



##### pixelHeight

> Height in pixels.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1048](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1048) |



##### width

> Content width in points.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1055](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1055) |



##### height

> Content height in points.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:1061](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L1061) |



##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js:48](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js#L48) |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L50) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L57) |



##### isValid

> Indicates whether the object is not yet destroyed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L225) |

##### Examples

```js
cc.log(obj.isValid);
```





<!-- Method Block -->
#### Methods


##### getPixelWidth

Get width in pixels.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L111) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getPixelHeight

Get height of in pixels.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:120](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L120) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getContentSize

Get content size.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:129](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L129) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### getContentSizeInPixels

Get content size in pixels.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:145](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L145) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 



##### initWithElement

Init with HTML element.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:154](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L154) |

###### Parameters
- element HTMLImageElement | HTMLCanvasElement 

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:173](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L173) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- pixelFormat <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- pixelsWide <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- pixelsHigh <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- contentSize <a href="../classes/Size.html" class="crosslink">Size</a> 


##### initWithImage

Initializes a texture from a UIImage object.
Extensions to make it easy to create a CCTexture2D object from an image file.
Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA).

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:188](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L188) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- uiImage HTMLImageElement 


##### getHtmlElementObj

HTMLElement Object getter, available only on web.
In most case, it will return null, because we are recycling the dom image element for better loading performance and lower image cache memory usage.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L201) |
| Return 		 | HTMLImageElement | HTMLCanvasElement 



##### isLoaded

Check whether texture is loaded.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:211](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L211) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### handleLoadedTexture

Handler of texture loaded event.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L220) |

###### Parameters
- premultiplied <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### description

Description of cc.Texture2D.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L239) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### releaseTexture

Release texture.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:248](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L248) |



##### getPixelFormat

Pixel format of the texture.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:262](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L262) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### hasPremultipliedAlpha

Whether or not the texture has their Alpha premultiplied,
support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:272](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L272) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### hasMipmaps

Whether or not use mipmap, support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:282](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L282) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### setTexParameters

Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:291](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L291) |

###### Parameters
- texParams <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> texParams object or minFilter
- magFilter <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- wrapS <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 
- wrapT <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 


##### setAntiAliasTexParameters

sets antialias texture parameters:              <br/>
 - GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
 - GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:322](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L322) |



##### setAliasTexParameters

Sets alias texture parameters:                 <br/>
  GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
  GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:333](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L333) |



##### on

Register an callback of a specific event type on the EventTarget.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:157](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L157) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- event <a href="../classes/Event.html" class="crosslink">Event</a> event
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, can be null
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:209](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L209) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, if it's not given, only callback without target will be removed
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L257) |

###### Parameters
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L277) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- event <a href="../classes/Event.html" class="crosslink">Event</a> event
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to invoke the callback, can be null
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:311](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L311) |

###### Parameters
- event <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:325](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L325) |

###### Parameters
- message <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- detail Any whatever argument the message needs


##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
<br/>
After destroy, this CCObject is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:246](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L246) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### Example

```js
obj.destroy();
```

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:366](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L366) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L399) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:424](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L424) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 

###### Parameters
- exporting <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:434](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L434) |

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- ctx _Deserializer 



