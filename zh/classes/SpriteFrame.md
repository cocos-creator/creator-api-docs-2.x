## `SpriteFrame` 类型

继承于 [`Asset`](Asset.md), [`EventTarget`](EventTarget.md)(mixin)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


一个 SpriteFrame 包含：<br/>
 - 纹理：会被渲染组件使用的 Texture2D 对象。<br/>
 - 矩形：在纹理中的矩形区域。


##### 示例

```js
// load a cc.SpriteFrame with image path (Recommend)
var self = this;
var url = "test assets/PurpleMonster";
cc.resources.load(url, cc.SpriteFrame, null, function (err, spriteFrame) {
 var node = new cc.Node("New Sprite");
 var sprite = node.addComponent(cc.Sprite);
 sprite.spriteFrame = spriteFrame;
 node.parent = self.node
});
```

### 索引

##### 属性（properties）

  - [`insetTop`](#insettop) `Number` sprite 的顶部边框
  - [`insetBottom`](#insetbottom) `Number` sprite 的底部边框
  - [`insetLeft`](#insetleft) `Number` sprite 的左边边框
  - [`insetRight`](#insetright) `Number` sprite 的左边边框
  - [`url`](#url) `String` `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead
  - [`_uuid`](#uuid) `String` 
  - [`loaded`](#loaded) `Boolean` 该资源是否已经成功加载。
  - [`nativeUrl`](#nativeurl) `String` 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
  - [`refCount`](#refcount) `Number` 引用的数量
  - [`_native`](#native) `String` 保存原生资源的 URL。
  - [`_nativeAsset`](#nativeasset) `Object` 此资源依赖的底层原生资源（如果有的话）。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`constructor`](#constructor) SpriteFrame 类的构造函数。
  - [`textureLoaded`](#textureloaded) 返回是否已加载纹理
  - [`isRotated`](#isrotated) 获取 SpriteFrame 是否旋转
  - [`setRotated`](#setrotated) 设置 SpriteFrame 是否旋转
  - [`isFlipX`](#isflipx) 获取 SpriteFrame 是否反转 x 轴
  - [`isFlipY`](#isflipy) 获取 SpriteFrame 是否反转 y 轴
  - [`setFlipX`](#setflipx) 设置 SpriteFrame 是否翻转 x 轴
  - [`setFlipY`](#setflipy) 设置 SpriteFrame 是否翻转 y 轴
  - [`getRect`](#getrect) 获取 SpriteFrame 的纹理矩形区域
  - [`setRect`](#setrect) 设置 SpriteFrame 的纹理矩形区域
  - [`getOriginalSize`](#getoriginalsize) 获取修剪前的原始大小
  - [`setOriginalSize`](#setoriginalsize) 设置修剪前的原始大小
  - [`getTexture`](#gettexture) 获取使用的纹理实例
  - [`getOffset`](#getoffset) 获取偏移量
  - [`setOffset`](#setoffset) 设置偏移量
  - [`clone`](#clone) 克隆 SpriteFrame
  - [`setTexture`](#settexture) 通过 Texture，rect，rotated，offset 和 originalSize 设置 SpriteFrame。
  - [`ensureLoadTexture`](#ensureloadtexture) 当加载中的场景或 Prefab 被标记为 `asyncLoadAssets` 时，用户在场景中由自定义组件关联到的所有 SpriteFrame 的贴图都不会被提前加载。
  - [`clearTexture`](#cleartexture) 当你暂时不再使用这个 SpriteFrame 时，可以调用这个方法来保证引用的贴图对象能被 GC。
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`on`](#on) 注册事件目标的特定事件类型回调。
  - [`off`](#off) 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
  - [`targetOff`](#targetoff) 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 通过事件对象派发事件
  - [`clear`](#clear) 销毁记录的事件
  - [`toString`](#tostring) 返回资源的 URL。
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法。
  - [`createNode`](#createnode) 使用该资源在场景中创建一个新节点。
  - [`_setRawAsset`](#setrawasset) 为此资源设置原生文件名。
  - [`addRef`](#addref) 增加资源的引用
  - [`decRef`](#decref) 减少资源的引用并尝试进行自动释放。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) 清除实例中的所有引用。
  - [`_onPreDestroy`](#onpredestroy) 在对象被销毁之前调用。
  - [`_serialize`](#serialize) 为此对象定制序列化。
  - [`_deserialize`](#deserialize) 从自定义序列化数据初始化此对象。



### Details


#### 属性（properties）


##### insetTop

> sprite 的顶部边框

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:87](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L87) |



##### insetBottom

> sprite 的底部边框

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:106](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L106) |



##### insetLeft

> sprite 的左边边框

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:125](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L125) |



##### insetRight

> sprite 的左边边框

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:144](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L144) |



##### url

> `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:728](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/deprecated.js#L728) |
| 废弃（Deprecated） | cc.Asset.url is deprecated, please use cc.Asset.nativeUrl instead |



##### _uuid

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L57) |



##### loaded

> 该资源是否已经成功加载。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:66](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L66) |



##### nativeUrl

> 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:81](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L81) |



##### refCount

> 引用的数量

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:115](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L115) |



##### _native

> 保存原生资源的 URL。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L131) |



##### _nativeAsset

> 此资源依赖的底层原生资源（如果有的话）。
此属性可用于访问与资源相关的其他详细信息或功能。
如果 `_native` 可用，则此属性将由加载器初始化。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:142](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L142) |



##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L240) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L258) |

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


##### constructor

SpriteFrame 类的构造函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:164](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L164) |

###### 参数列表
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `rotated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the frame is rotated in the texture
- `offset` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The offset of the frame in the texture
- `originalSize` <a href="../classes/Size.html" class="crosslink">Size</a> The size of the frame in the texture


##### textureLoaded

返回是否已加载纹理

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:224](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L224) |



##### isRotated

获取 SpriteFrame 是否旋转

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:247](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L247) |



##### setRotated

设置 SpriteFrame 是否旋转

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:257](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L257) |

###### 参数列表
- `bRotated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isFlipX

获取 SpriteFrame 是否反转 x 轴

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:270](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L270) |



##### isFlipY

获取 SpriteFrame 是否反转 y 轴

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:280](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L280) |



##### setFlipX

设置 SpriteFrame 是否翻转 x 轴

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:290](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L290) |

###### 参数列表
- `flipX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setFlipY

设置 SpriteFrame 是否翻转 y 轴

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:303](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L303) |

###### 参数列表
- `flipY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### getRect

获取 SpriteFrame 的纹理矩形区域

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:316](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L316) |



##### setRect

设置 SpriteFrame 的纹理矩形区域

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:326](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L326) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 


##### getOriginalSize

获取修剪前的原始大小

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:339](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L339) |



##### setOriginalSize

设置修剪前的原始大小

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:349](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L349) |

###### 参数列表
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### getTexture

获取使用的纹理实例

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:364](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L364) |



##### getOffset

获取偏移量

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:420](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L420) |



##### setOffset

设置偏移量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:430](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L430) |

###### 参数列表
- `offsets` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### clone

克隆 SpriteFrame

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:440](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L440) |



##### setTexture

通过 Texture，rect，rotated，offset 和 originalSize 设置 SpriteFrame。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:450](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L450) |

###### 参数列表
- `texture` <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `rotated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `offset` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `originalSize` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### ensureLoadTexture

当加载中的场景或 Prefab 被标记为 `asyncLoadAssets` 时，用户在场景中由自定义组件关联到的所有 SpriteFrame 的贴图都不会被提前加载。
只有当 Sprite 组件要渲染这些 SpriteFrame 时，才会检查贴图是否加载。如果你希望加载过程提前，你可以手工调用这个方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:498](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L498) |


##### 示例

```js
if (spriteFrame.textureLoaded()) {
    this._onSpriteFrameLoaded();
}
else {
    spriteFrame.once('load', this._onSpriteFrameLoaded, this);
    spriteFrame.ensureLoadTexture();
}
```

##### clearTexture

当你暂时不再使用这个 SpriteFrame 时，可以调用这个方法来保证引用的贴图对象能被 GC。然后当你要渲染 SpriteFrame 时，你需要手动调用 `ensureLoadTexture` 来重新加载贴图。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCSpriteFrame.js:526](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCSpriteFrame.js#L526) |
| 废弃（Deprecated） | since 2.1 |



##### hasEventListener

检查事件目标对象是否有为特定类型的事件注册的回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L69) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L77) |

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
| 定义于 | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L119) |

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
| 定义于 | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L163) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L182) |

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
| 定义于 | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L208) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### clear

销毁记录的事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/event/event-target.js:221](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/event/event-target.js#L221) |



##### toString

返回资源的 URL。

Asset 对象将会重写 Object 对象的 `toString()` 方法。
对于 Asset 对象，`toString()` 方法返回该对象的字符串表示形式。
当资源要表示为文本值时或在字符串连接时引用时，JavaScript 会自动调用 `toString()` 方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:212](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L212) |



##### serialize

应 AssetDB 要求提供这个方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:232](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L232) |



##### createNode

使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:246](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L246) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

为此资源设置原生文件名。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:261](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L261) |

###### 参数列表
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addRef

增加资源的引用

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:283](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L283) |



##### decRef

减少资源的引用并尝试进行自动释放。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:301](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/assets/CCAsset.js#L301) |



##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 `cc.isValid(obj)` 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L293) |


##### 示例

```js
obj.destroy();
```

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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L511) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L524) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



