## `AnimationClip` Class

Extends [`Asset`](Asset.md)


Module: [cc](../modules/cc.md)


Class for animation data handling.



### Index

##### Properties

  - [`duration`](#duration) `Number` Duration of this animation.
  - [`sample`](#sample) `Number` FrameRate of this animation.
  - [`speed`](#speed) `Number` Speed of this animation.
  - [`wrapMode`](#wrapmode) `WrapMode` WrapMode of this animation.
  - [`curveData`](#curvedata) `Object` Curve data.
  - [`events`](#events) `Object[]` Event data.
  - [`_uuid`](#uuid) `String` 
  - [`loaded`](#loaded) `Boolean` Whether the asset is loaded or not.
  - [`nativeUrl`](#nativeurl) `String` Returns the url of this asset's native object, if none it will returns an empty string.
  - [`refCount`](#refcount) `Number` The number of reference
  - [`_native`](#native) `String` Serializable url for native asset.
  - [`_nativeAsset`](#nativeasset) `Object` The underlying native asset of this asset if one is available.
  - [`url`](#url) `String` `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`createWithSpriteFrames`](#createwithspriteframes) Crate clip with a set of sprite frames
  - [`toString`](#tostring) Returns the asset's url.
  - [`serialize`](#serialize) Provide this method at the request of AssetDB.
  - [`createNode`](#createnode) Create a new node using this asset in the scene....
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`addRef`](#addref) Add references of asset
  - [`decRef`](#decref) Reduce references of asset and it will be auto released when refCount equals 0.
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### duration

> Duration of this animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-clip.js:50](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L50) |



##### sample

> FrameRate of this animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-clip.js:60](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L60) |



##### speed

> Speed of this animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-clip.js:70](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L70) |



##### wrapMode

> WrapMode of this animation.

| meta | description |
|------|-------------|
| Type | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| Defined in | [cocos2d/animation/animation-clip.js:80](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L80) |



##### curveData

> Curve data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/animation/animation-clip.js:90](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L90) |

##### Examples

```js
{
    // 根节点不用查找路径
    // root properties
    props: {
        x: [
            { frame: 0, value: 0, curve: [0,0.5,0.5,1] },
            { frame: 1, value: 200, curve: null }
        ]
    },
    comps: {
        // component
        'comp-1': {
            // component properties
            'prop-1': [
                { frame: 0, value: 10, curve: [0,0.5,0.5,1] },
                { frame: 1, value: 20, curve: null }
            ]
        }
    },
    paths: {
        // key 为节点到root的路径名, 通过cc.find找到
        'foo/bar': {
            // node properties
            props: {
                x: [
                    { frame: 0, value: 0, curve: [0,0.5,0.5,1]
                    { frame: 1, value: 200, curve: null }
                ]
            },
            comps: {
                // component
                'comp-1': {
                    // component property
                    'prop-1': [
                        { frame: 0, value: 10, curve: [0,0.5,0.
                            { frame: 1, value: 20, curve: null }
                        ]
                        }
                }
            },
            'hello': {
                props: {
                    position: [
                        {
                            frame: 0,
                            value: [0,0],
                            motionPath: [
                                [320, 240, 0, 240, 640, 240],
                                [640, 0, 400, 0, 1000, 0]
                            ]
                        },
                        { frame: 5, value: [640, 480] }
                    ]
                }
            }
        }
    }
}
```


##### events

> Event data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [cocos2d/animation/animation-clip.js:102](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L102) |

##### Examples

```js
// frame    : The exactly time in second.
// func     : Callback function name
// params   : Callback parameters
[
    { frame: 0, func: 'onAnimationEvent1', params:['param-1', 'param-2'] },
    { frame: 2, func: 'onAnimationEvent3', params:['param-1', 'param-2'] },
    { frame: 3, func: 'onAnimationEvent2', params:['param-1'] },
    // The second event at frame 3
    { frame: 3, func: 'onAnimationEvent4', params:['param-1'] },
    { frame: 4, func: 'onAnimationEvent4', params:['param-1'] }
]
```


##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L57) |



##### loaded

> Whether the asset is loaded or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:66](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L66) |



##### nativeUrl

> Returns the url of this asset's native object, if none it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:81](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L81) |



##### refCount

> The number of reference

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:115](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L115) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L131) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:142](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L142) |



##### url

> `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:717](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/asset-manager/deprecated.js#L717) |
| Deprecated | cc.Asset.url is deprecated, please use cc.Asset.nativeUrl instead |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L258) |

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


##### createWithSpriteFrames

Crate clip with a set of sprite frames

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> 
| Defined in | [cocos2d/animation/animation-clip.js:117](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/animation/animation-clip.js#L117) |

###### Parameters
- `spriteFrames` <a href="../classes/SpriteFrame.html" class="crosslink">[SpriteFrame]</a> 
- `sample` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
```

##### toString

Returns the asset's url.

The `Asset` object overrides the `toString()` method of the `Object` object.
For `Asset` objects, the `toString()` method returns a string representation of the object.
JavaScript calls the `toString()` method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:223](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L223) |



##### serialize

Provide this method at the request of AssetDB.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:243](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L243) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:257](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L257) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:272](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L272) |

###### Parameters
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addRef

Add references of asset

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:294](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L294) |



##### decRef

Reduce references of asset and it will be auto released when refCount equals 0.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:312](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/assets/CCAsset.js#L312) |



##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable anymore.
You can use `cc.isValid(obj)` to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L293) |


##### Examples

```js
obj.destroy();
```

##### _destruct

Clear all references in the instance.

NOTE: this method will not clear the `getter` or `setter` functions which defined in the instance of `CCObject`.
You can override the `_destruct` method if you need, for example:

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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:484](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L484) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:512](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L512) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:525](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L525) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



