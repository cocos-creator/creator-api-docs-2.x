## `RenderTexture` 类型

继承于 [`Texture2D`](Texture2D.md)


模块: [cc](../modules/cc.md)


Render textures are textures that can be rendered to.



### 索引

##### 属性（properties）

  - [`genMipmaps`](#genmipmaps) `Boolean` 是否为纹理设置生成 mipmaps。
  - [`packable`](#packable) `Boolean` 设置纹理是否允许参与合图。
  - [`loaded`](#loaded) `Boolean` 贴图是否已经成功加载
  - [`width`](#width) `Number` 贴图像素宽度
  - [`height`](#height) `Number` 贴图像素高度
  - [`url`](#url) `String` `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead
  - [`_uuid`](#uuid) `String` 
  - [`nativeUrl`](#nativeurl) `String` 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
  - [`refCount`](#refcount) `Number` 引用的数量
  - [`_native`](#native) `String` 保存原生资源的 URL。
  - [`_nativeAsset`](#nativeasset) `Object` 此资源依赖的底层原生资源（如果有的话）。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`initWithSize`](#initwithsize) 初始化 render texture
  - [`readPixels`](#readpixels) 从 render texture 读取像素数据，数据类型为 RGBA 格式的 Uint8Array 数组。
  - [`getImpl`](#getimpl) 返回渲染器内部贴图对象
  - [`update`](#update) Update texture options, not available in Canvas render mode....
  - [`initWithElement`](#initwithelement) 用 HTML Image 或 Canvas 对象初始化贴图。
  - [`initWithData`](#initwithdata) 使用一个存储在 Unit8Array 中的图像数据（raw data）初始化数据。
  - [`getHtmlElementObj`](#gethtmlelementobj) 获取当前贴图对应的 HTML Image 或 Canvas 对象，只在 Web 平台下有效。
  - [`destroy`](#destroy) 销毁该贴图，并立即释放它对应的显存。
  - [`getPixelFormat`](#getpixelformat) 获取纹理的像素格式。
  - [`hasPremultipliedAlpha`](#haspremultipliedalpha) 检查纹理在上传 GPU 时预乘选项是否开启。
  - [`handleLoadedTexture`](#handleloadedtexture) 贴图加载事件处理器。
  - [`description`](#description) cc.Texture2D 描述。
  - [`releaseTexture`](#releasetexture) 释放纹理，请使用 destroy 替代。
  - [`setTexParameters`](#settexparameters) 设置纹理包装模式。
  - [`setFilters`](#setfilters) 设置纹理贴图缩小和放大过滤器算法选项。
  - [`setFlipY`](#setflipy) 设置贴图的纵向翻转选项。
  - [`setPremultiplyAlpha`](#setpremultiplyalpha) 设置贴图的预乘选项。
  - [`toString`](#tostring) 返回资源的 URL。
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法。
  - [`createNode`](#createnode) 使用该资源在场景中创建一个新节点。
  - [`_setRawAsset`](#setrawasset) 为此资源设置原生文件名。
  - [`addRef`](#addref) 增加资源的引用
  - [`decRef`](#decref) 减少资源的引用并尝试进行自动释放。
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件
  - [`_destruct`](#destruct) 清除实例中的所有引用。
  - [`_onPreDestroy`](#onpredestroy) 在对象被销毁之前调用。
  - [`_serialize`](#serialize) 为此对象定制序列化。
  - [`_deserialize`](#deserialize) 从自定义序列化数据初始化此对象。



##### 事件

  - [`load`](#load) 当该资源加载成功后触发该事件


### Details


#### 属性（properties）


##### genMipmaps

> 是否为纹理设置生成 mipmaps。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:331](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L331) |



##### packable

> 设置纹理是否允许参与合图。
如果需要在自定义 Effect 中使用纹理 UV，需要禁止该选项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:351](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L351) |



##### loaded

> 贴图是否已经成功加载

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:459](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L459) |



##### width

> 贴图像素宽度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:468](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L468) |



##### height

> 贴图像素高度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:477](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L477) |



##### url

> `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:717](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/asset-manager/deprecated.js#L717) |
| 废弃（Deprecated） | &#x60;cc.Asset.url&#x60; is deprecated, please use &#x60;cc.Asset.nativeUrl&#x60; instead |



##### _uuid

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L57) |



##### nativeUrl

> 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:81](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L81) |



##### refCount

> 引用的数量

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:115](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L115) |



##### _native

> 保存原生资源的 URL。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L131) |



##### _nativeAsset

> 此资源依赖的底层原生资源（如果有的话）。
此属性可用于访问与资源相关的其他详细信息或功能。
如果 `_native` 可用，则此属性将由加载器初始化。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:142](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L142) |



##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L240) |

##### 示例

```js
obj.name = "New Obj";
```


##### isValid

> 表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。如果希望判断当前帧是否调用过 `destroy`，请使用 `cc.isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L258) |

##### 示例

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### 方法


##### initWithSize

初始化 render texture

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCRenderTexture.js:58](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCRenderTexture.js#L58) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `depthStencilFormat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### readPixels

从 render texture 读取像素数据，数据类型为 RGBA 格式的 Uint8Array 数组。
默认每次调用此函数会生成一个大小为 （长 x 高 x 4） 的 Uint8Array。
你可以通过传入 data 来接收像素数据，也可以通过传参来指定需要读取的区域的像素。

| meta | description |
|------|-------------|
| 返回 | Uint8Array 
| 定义于 | [cocos2d/core/assets/CCRenderTexture.js:133](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCRenderTexture.js#L133) |

###### 参数列表
- `data` Uint8Array 
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getImpl

返回渲染器内部贴图对象

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:496](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L496) |



##### update

Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:515](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L515) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `image` DOMImageElement 
	- `genMipmaps` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `format` PixelFormat 
	- `minFilter` Filter 
	- `magFilter` Filter 
	- `wrapS` <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> 
	- `wrapT` <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> 
	- `premultiplyAlpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### initWithElement

用 HTML Image 或 Canvas 对象初始化贴图。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:604](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L604) |

###### 参数列表
- `element` HTMLImageElement &#124; HTMLCanvasElement 

##### 示例

```js
var img = new Image();
img.src = dataURL;
texture.initWithElement(img);
```

##### initWithData

使用一个存储在 Unit8Array 中的图像数据（raw data）初始化数据。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:636](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L636) |

###### 参数列表
- `data` TypedArray 
- `pixelFormat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsWidth` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `pixelsHeight` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getHtmlElementObj

获取当前贴图对应的 HTML Image 或 Canvas 对象，只在 Web 平台下有效。<br/>
注意：<br/>
texture 默认参与动态合图，如果需要获取到正确的 Html 元素对象，需要先设置 texture.packable 为 false

| meta | description |
|------|-------------|
| 返回 | HTMLImageElement &#124; HTMLCanvasElement 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:679](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L679) |



##### destroy

销毁该贴图，并立即释放它对应的显存。（继承自 cc.Object.destroy）<br/>
销毁后，该对象不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:694](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L694) |



##### getPixelFormat

获取纹理的像素格式。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:716](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L716) |



##### hasPremultipliedAlpha

检查纹理在上传 GPU 时预乘选项是否开启。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:728](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L728) |



##### handleLoadedTexture

贴图加载事件处理器。v2.0 之后你将不在需要手动执行这个函数，它会在贴图加载成功之后自动执行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:743](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L743) |

###### 参数列表
- `premultiplied` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### description

cc.Texture2D 描述。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:796](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L796) |



##### releaseTexture

释放纹理，请使用 destroy 替代。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:807](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L807) |
| 废弃（Deprecated） | since v2.0 |



##### setTexParameters

设置纹理包装模式。
若纹理贴图尺寸是 NPOT（non power of 2），则只能使用 Texture2D.WrapMode.CLAMP_TO_EDGE。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:819](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L819) |

###### 参数列表
- `wrapS` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 
- `wrapT` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 


##### setFilters

设置纹理贴图缩小和放大过滤器算法选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:837](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L837) |

###### 参数列表
- `minFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 
- `magFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 


##### setFlipY

设置贴图的纵向翻转选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:853](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L853) |

###### 参数列表
- `flipY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setPremultiplyAlpha

设置贴图的预乘选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:869](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCTexture2D.js#L869) |

###### 参数列表
- `premultiply` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### toString

返回资源的 URL。

Asset 对象将会重写 Object 对象的 `toString()` 方法。
对于 Asset 对象，`toString()` 方法返回该对象的字符串表示形式。
当资源要表示为文本值时或在字符串连接时引用时，JavaScript 会自动调用 `toString()` 方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:223](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L223) |



##### serialize

应 AssetDB 要求提供这个方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:243](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L243) |



##### createNode

使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:257](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L257) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

为此资源设置原生文件名。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:272](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L272) |

###### 参数列表
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addRef

增加资源的引用

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:294](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L294) |



##### decRef

减少资源的引用并尝试进行自动释放。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:312](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/assets/CCAsset.js#L312) |



##### hasEventListener

检查事件目标对象是否有为特定类型的事件注册的回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L69) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L77) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### 示例

```js
eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, node);
```

##### off

删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L119) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### 示例

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

在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L163) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L182) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### 示例

```js
eventTarget.once('fire', function () {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### dispatchEvent

通过事件对象派发事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/event/event-target.js#L208) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### _destruct

清除实例中的所有引用。

注意：此方法不会清除在 `CCObject` 实例中定义的 `getter` 或 `setter`。如果需要，你可以重写 `_destruct` 方法。例如：

```js
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
```

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:484](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L484) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:512](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L512) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:525](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCObject.js#L525) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### 事件

### `load` Event



模块: [cc](../modules/cc.md)


当该资源加载成功后触发该事件


### 索引







### Details





