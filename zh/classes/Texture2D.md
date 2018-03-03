## `Texture2D` 类型

继承于 [`RawAsset`](RawAsset.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


<p>
This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
 i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
Be aware that the content of the generated textures will be upside-down! </p>


### 索引

##### 属性（properties）

  - [`url`](#url) `String` 贴图文件的 url，当贴图不是由文件创建时值可能为空
  - [`loaded`](#loaded) `Boolean` 贴图是否已经成功加载
  - [`width`](#width) `Number` 贴图像素宽度
  - [`height`](#height) `Number` 贴图像素高度
  - [`pixelFormat`](#pixelformat) `Number` Pixel format of the texture.
  - [`pixelWidth`](#pixelwidth) `Number` Width in pixels.
  - [`pixelHeight`](#pixelheight) `Number` Height in pixels.
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被销毁后将不可用）。



##### 方法

  - [`update`](#update) Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.
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
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`emit`](#emit) 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。<br/>
销毁后，CCObject 不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
实际销毁操作会延迟到当前帧渲染前执行。
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


#### 属性（properties）


##### url

> 贴图文件的 url，当贴图不是由文件创建时值可能为空

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:223](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L223) |



##### loaded

> 贴图是否已经成功加载

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:232](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L232) |



##### width

> 贴图像素宽度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:241](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L241) |



##### height

> 贴图像素高度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:250](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L250) |



##### pixelFormat

> Pixel format of the texture.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:927](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L927) |



##### pixelWidth

> Width in pixels.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:934](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L934) |
| 废弃（Deprecated） | please use width instead |



##### pixelHeight

> Height in pixels.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:942](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L942) |
| 废弃（Deprecated） | please use height instead |



##### _uuid

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js:49](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js#L49) |



##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L50) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L57) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:208](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L208) |

##### 示例

```js
obj.name = "New Obj";
```


##### isValid

> 表示该对象是否可用（被销毁后将不可用）。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L225) |

##### 示例

```js
cc.log(obj.isValid);
```





<!-- Method Block -->
#### 方法


##### update

Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L275) |

###### 参数列表
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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:292](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L292) |
| 废弃（Deprecated） | use width or height property instead |



##### getPixelHeight

Get height of in pixels.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L302) |
| 废弃（Deprecated） | use width or height property instead |



##### getContentSize

Get content size.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:312](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L312) |
| 废弃（Deprecated） | use width or height property instead |



##### getContentSizeInPixels

Get content size in pixels.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:322](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L322) |
| 废弃（Deprecated） | use width or height property instead |



##### initWithElement

Init with HTML element.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:332](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L332) |

###### 参数列表
- `element` HTMLImageElement &#124; HTMLCanvasElement 

##### 示例

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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L351) |

###### 参数列表
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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:366](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L366) |

###### 参数列表
- `uiImage` HTMLImageElement 


##### getHtmlElementObj

HTMLElement Object getter, available only on web.
In most case, it will return null, because we are recycling the dom image element for better loading performance and lower image cache memory usage.

| meta | description |
|------|-------------|
| 返回 | HTMLImageElement &#124; HTMLCanvasElement 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L379) |



##### isLoaded

Check whether texture is loaded.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:389](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L389) |
| 废弃（Deprecated） | use loaded property instead |



##### handleLoadedTexture

Handler of texture loaded event.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L399) |

###### 参数列表
- `premultiplied` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### description

Description of cc.Texture2D.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:417](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L417) |



##### releaseTexture

Release texture.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L426) |



##### getPixelFormat

Pixel format of the texture.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:436](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L436) |



##### hasPremultipliedAlpha

Whether or not the texture has their Alpha premultiplied,
support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:446](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L446) |



##### hasMipmaps

Whether or not use mipmap, support only in WebGl rendering mode.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:456](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L456) |



##### setTexParameters

Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:465](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L465) |
| 废弃（Deprecated） | use update function with filter and wrap options instead |

###### 参数列表
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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:494](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L494) |
| 废弃（Deprecated） | use update function with filter options instead |



##### setAliasTexParameters

Sets alias texture parameters:                 <br/>
  GL_TEXTURE_MIN_FILTER = GL_NEAREST           <br/>
  GL_TEXTURE_MAG_FILTER = GL_NEAREST           <br/>
supported only in native or WebGl rendering mode

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js:506](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTexture2D.js#L506) |
| 废弃（Deprecated） | use update function with filter options instead |



##### on

注册事件目标的特定事件类型回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:217](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L217) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
node.on(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### off

删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:274](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L274) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### 示例

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

在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:329](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L329) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L351) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

分发事件到事件流中。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:396](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L396) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L410) |

###### 参数列表
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs


##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
销毁后，CCObject 不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
实际销毁操作会延迟到当前帧渲染前执行。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:246](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L246) |


##### 示例

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L379) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:412](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L412) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L437) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L447) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



