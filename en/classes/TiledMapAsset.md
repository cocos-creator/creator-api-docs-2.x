## `TiledMapAsset` Class

Extends [`Asset`](Asset.md)


Module: [cc](../modules/cc.md)


Class for tiled map asset handling.



### Index

##### Properties

  - [`textures`](#textures) `Texture2D[]` 
  - [`textureNames`](#texturenames) `String[]` 
  - [`textureSizes`](#texturesizes) `Size[]` 
  - [`imageLayerTextures`](#imagelayertextures) `Texture2D[]` 
  - [`imageLayerTextureNames`](#imagelayertexturenames) `String[]` 
  - [`loaded`](#loaded) `Boolean` Whether the asset is loaded or not
  - [`url`](#url) `String` Points to the true url of this asset's native object, only valid when asset is loaded and asyncLoadAsset is not enabled.
  - [`nativeUrl`](#nativeurl) `String` Returns the url of this asset's native object, if none it will returns an empty string.
  - [`_native`](#native) `String` Serializable url for native asset.
  - [`_nativeAsset`](#nativeasset) `Object` The underlying native asset of this asset if one is available.
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`toString`](#tostring) Returns the asset's url.
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法
  - [`createNode`](#createnode) Create a new node using this asset in the scene....
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### textures

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture2D.html" class="crosslink">Texture2D[]</a> |
| Defined in | [cocos2d/tilemap/CCTiledMapAsset.js:43](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/tilemap/CCTiledMapAsset.js#L43) |



##### textureNames

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/tilemap/CCTiledMapAsset.js:51](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/tilemap/CCTiledMapAsset.js#L51) |



##### textureSizes

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size[]</a> |
| Defined in | [cocos2d/tilemap/CCTiledMapAsset.js:56](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/tilemap/CCTiledMapAsset.js#L56) |



##### imageLayerTextures

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture2D.html" class="crosslink">Texture2D[]</a> |
| Defined in | [cocos2d/tilemap/CCTiledMapAsset.js:64](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/tilemap/CCTiledMapAsset.js#L64) |



##### imageLayerTextureNames

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/tilemap/CCTiledMapAsset.js:72](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/tilemap/CCTiledMapAsset.js#L72) |



##### loaded

> Whether the asset is loaded or not

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L57) |



##### url

> Points to the true url of this asset's native object, only valid when asset is loaded and asyncLoadAsset is not enabled.
The difference between nativeUrl and url is that the latter is final path, there is no needs to transform url by md5 and subpackage.
Besides, url may points to temporary path or cached path on mini game platform which has cache mechanism (WeChat etc).
If you want to make use of the native file on those platforms, you should use url instead of nativeUrl.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:68](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L68) |



##### nativeUrl

> Returns the url of this asset's native object, if none it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:85](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L85) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:123](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L123) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L131) |



##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCRawAsset.js:46](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCRawAsset.js#L46) |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L258) |

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


##### toString

Returns the asset's url.

The `Asset` object overrides the `toString()` method of the `Object` object.
For `Asset` objects, the toString() method returns a string representation of the object.
JavaScript calls the toString() method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:184](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L184) |



##### serialize

应 AssetDB 要求提供这个方法

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:198](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L198) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:209](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L209) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:224](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/assets/CCAsset.js#L224) |

###### Parameters
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L293) |


##### Examples

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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:460](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L460) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:485](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L485) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:495](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCObject.js#L495) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



