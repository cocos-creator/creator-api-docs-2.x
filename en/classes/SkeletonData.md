## `SkeletonData` Class

Extends [`Asset`](Asset.md)


Module: [sp](../modules/sp.md)


The skeleton data of spine.


### Index

##### Properties

  - [`skeletonJson`](#skeletonjson) `Object` See http://en.esotericsoftware.com/spine-json-format
  - [`atlasText`](#atlastext) `String` 
  - [`textures`](#textures) `Texture2D[]` 
  - [`scale`](#scale) `Number` A scale can be specified on the JSON or binary loader which will scale the bone positions,
image sizes, and animation translations.
This can be useful when using different sized images than were used when designing the skeleton
in Spine. For example, if using images that are half the size than were used in Spine,
a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
resolution texture atlases.
see http://en.esotericsoftware.com/spine-using-runtimes#Scaling
  - [`_skeletonData`](#skeletondata) `sp.spine.SkeletonData` 
  - [`_atlasCache`](#atlascache) `sp.spine.Atlas` 
  - [`rawUrl`](#rawurl) `String` Returns the url of this asset's first raw file, if none of rawFile exists,
it will returns an empty string.
  - [`rawUrls`](#rawurls) `String[]` Returns the url of this asset's raw files, if none of rawFile exists,
it will returns an empty array.
  - [`_rawFiles`](#rawfiles) `String[]` 在 lite 版的 Fireball 里，raw asset 并不仅仅是在 properties 里声明了 rawType 才有，
而是每个 asset 都能指定自己的 raw file url。这些 url 就存在 _rawFiles 字段中。
AssetLibrary 并不会帮你加载这些 url，除非你声明了 rawType。
在 Creator 里，_rawFiles 保留了下来，为了复用 cocos 引擎原有实现，直接用 _rawFiles 来加载 Asset 在 import 之前的源文件。
  - [`_uuid`](#uuid) `String` 
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`getRuntimeData`](#getruntimedata) Get the included SkeletonData used in spine runtime.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.SkeletonData object.
  - [`_getAtlas`](#getatlas) 
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法
  - [`createNode`](#createnode) Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.
  - [`_setRawFiles`](#setrawfiles) Set raw file names for this asset.
  - [`_preloadRawFiles`](#preloadrawfiles) Preload raw files when loading scene.
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


##### skeletonJson

> See http://en.esotericsoftware.com/spine-json-format

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:93](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L93) |



##### atlasText

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:110](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L110) |



##### textures

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture2D.html" class="crosslink">Texture2D[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:130](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L130) |



##### scale

> A scale can be specified on the JSON or binary loader which will scale the bone positions,
image sizes, and animation translations.
This can be useful when using different sized images than were used when designing the skeleton
in Spine. For example, if using images that are half the size than were used in Spine,
a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
resolution texture atlases.
see http://en.esotericsoftware.com/spine-using-runtimes#Scaling

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:138](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L138) |



##### _skeletonData

> 

| meta | description |
|------|-------------|
| Type | sp.spine.SkeletonData |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:173](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L173) |



##### _atlasCache

> 

| meta | description |
|------|-------------|
| Type | sp.spine.Atlas |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:178](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L178) |



##### rawUrl

> Returns the url of this asset's first raw file, if none of rawFile exists,
it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:53](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L53) |



##### rawUrls

> Returns the url of this asset's raw files, if none of rawFile exists,
it will returns an empty array.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:77](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L77) |



##### _rawFiles

> 在 lite 版的 Fireball 里，raw asset 并不仅仅是在 properties 里声明了 rawType 才有，
而是每个 asset 都能指定自己的 raw file url。这些 url 就存在 _rawFiles 字段中。
AssetLibrary 并不会帮你加载这些 url，除非你声明了 rawType。
在 Creator 里，_rawFiles 保留了下来，为了复用 cocos 引擎原有实现，直接用 _rawFiles 来加载 Asset 在 import 之前的源文件。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:104](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L104) |



##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js:49](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCRawAsset.js#L49) |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L50) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L57) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:208](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L208) |

##### Examples

```js
obj.name = "New Obj";
```


##### isValid

> Indicates whether the object is not yet destroyed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L225) |

##### Examples

```js
cc.log(obj.isValid);
```





<!-- Method Block -->
#### Methods


##### getRuntimeData

Get the included SkeletonData used in spine runtime.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.SkeletonData object.

| meta | description |
|------|-------------|
| Returns | sp.spine.SkeletonData 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:189](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L189) |

###### Parameters
- `quiet` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _getAtlas



| meta | description |
|------|-------------|
| Returns | sp.spine.Atlas 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js:264](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/SkeletonData.js#L264) |

###### Parameters
- `quiet` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### serialize

应 AssetDB 要求提供这个方法

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:143](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L143) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:154](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L154) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawFiles

Set raw file names for this asset.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:168](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L168) |

###### Parameters
- `rawFiles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> 


##### _preloadRawFiles

Preload raw files when loading scene.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js:179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/assets/CCAsset.js#L179) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 


##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
<br/>
After destroy, this CCObject is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:246](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L246) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L379) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:412](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L412) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L437) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L447) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



