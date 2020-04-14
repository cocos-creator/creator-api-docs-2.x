## `Texture2D` 类型

继承于 [`Asset`](Asset.md), [`EventTarget`](EventTarget.md)(mixin)


模块: [cc](../modules/cc.md)


This class allows to easily create OpenGL or Canvas 2D textures from images or raw data.



### 索引

##### 属性（properties）

  - [`genMipmaps`](#genmipmaps) `Boolean` 是否为纹理设置生成 mipmaps。
  - [`packable`](#packable) `Boolean` 设置纹理是否允许参与合图。
  - [`loaded`](#loaded) `Boolean` 贴图是否已经成功加载
  - [`width`](#width) `Number` 贴图像素宽度
  - [`height`](#height) `Number` 贴图像素高度
  - [`url`](#url) `String` 资源的原生文件的真实url，只在资源被加载后以及没有启用延迟加载时才有效。
  - [`nativeUrl`](#nativeurl) `String` 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
  - [`_native`](#native) `String` Serializable url for native asset.
  - [`_nativeAsset`](#nativeasset) `Object` The underlying native asset of this asset if one is available....
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

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
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件
  - [`toString`](#tostring) Returns the asset's url....
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法
  - [`createNode`](#createnode) 使用该资源在场景中创建一个新节点。
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`_destruct`](#destruct) Clear all references in the instance....
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object. (Editor Only)
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### 事件

  - [`load`](#load) 当该资源加载成功后触发该事件


### Details


#### 属性（properties）


##### genMipmaps

> 是否为纹理设置生成 mipmaps。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:329](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L329) |



##### packable

> 设置纹理是否允许参与合图。
如果需要在自定义 Effect 中使用纹理 UV，需要禁止该选项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:349](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L349) |



##### loaded

> 贴图是否已经成功加载

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:383](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L383) |



##### width

> 贴图像素宽度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:392](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L392) |



##### height

> 贴图像素高度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:401](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L401) |



##### url

> 资源的原生文件的真实url，只在资源被加载后以及没有启用延迟加载时才有效。 nativeUrl 与 url 的区别在于，url 是资源最终路径，所以 url 不需要再经过 md5 以及子包的路径转换，
另外某些带缓存机制的小游戏平台（微信等）上url可能会指向临时文件路径或者缓存路径，如果你需要在这些平台上使用资源的原生文件，请使用url，避免使用nativeUrl

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:68](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L68) |



##### nativeUrl

> 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:85](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L85) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:123](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L123) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L131) |



##### _uuid

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCRawAsset.js:46](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCRawAsset.js#L46) |



##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L240) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L258) |

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


##### getImpl

返回渲染器内部贴图对象

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:420](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L420) |



##### update

Update texture options, not available in Canvas render mode.
image, format, premultiplyAlpha can not be updated in native.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:439](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L439) |

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
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:517](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L517) |

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
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:546](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L546) |

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
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:588](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L588) |



##### destroy

销毁该贴图，并立即释放它对应的显存。（继承自 cc.Object.destroy）<br/>
销毁后，该对象不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:603](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L603) |



##### getPixelFormat

获取纹理的像素格式。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:624](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L624) |



##### hasPremultipliedAlpha

检查纹理在上传 GPU 时预乘选项是否开启。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:636](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L636) |



##### handleLoadedTexture

贴图加载事件处理器。v2.0 之后你将不在需要手动执行这个函数，它会在贴图加载成功之后自动执行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:647](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L647) |

###### 参数列表
- `premultiplied` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### description

cc.Texture2D 描述。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:694](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L694) |



##### releaseTexture

释放纹理，请使用 destroy 替代。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:705](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L705) |
| 废弃（Deprecated） | since v2.0 |



##### setTexParameters

设置纹理包装模式。
若纹理贴图尺寸是 NPOT（non power of 2），则只能使用 Texture2D.WrapMode.CLAMP_TO_EDGE。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:717](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L717) |

###### 参数列表
- `wrapS` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 
- `wrapT` <a href="../enums/Texture2D.WrapMode.html" class="crosslink">Texture2D.WrapMode</a> 


##### setFilters

设置纹理贴图缩小和放大过滤器算法选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:735](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L735) |

###### 参数列表
- `minFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 
- `magFilter` <a href="../enums/Texture2D.Filter.html" class="crosslink">Texture2D.Filter</a> 


##### setFlipY

设置贴图的纵向翻转选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:751](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L751) |

###### 参数列表
- `flipY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setPremultiplyAlpha

设置贴图的预乘选项。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCTexture2D.js:766](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCTexture2D.js#L766) |

###### 参数列表
- `premultiply` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### hasEventListener

检查事件目标对象是否有为特定类型的事件注册的回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L69) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L77) |

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
| 定义于 | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L119) |

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
| 定义于 | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L163) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L182) |

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
| 定义于 | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/event/event-target.js#L208) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### toString

Returns the asset's url.

The `Asset` object overrides the `toString()` method of the `Object` object.
For `Asset` objects, the toString() method returns a string representation of the object.
JavaScript calls the toString() method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:184](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L184) |



##### serialize

应 AssetDB 要求提供这个方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:198](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L198) |



##### createNode

使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:209](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L209) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:224](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L224) |

###### 参数列表
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:460](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L460) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:485](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L485) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:495](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L495) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### 事件

### `load` Event



模块: [cc](../modules/cc.md)


当该资源加载成功后触发该事件


### 索引







### Details





