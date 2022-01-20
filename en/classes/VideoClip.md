## `VideoClip` Class

Extends [`Asset`](Asset.md), [`EventTarget`](EventTarget.md)(mixin)


Module: [cc](../modules/cc.md)


Class for video data handling.



### Index

##### Properties

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

  - [`toString`](#tostring) Returns the asset's url.
  - [`serialize`](#serialize) Provide this method at the request of AssetDB.
  - [`createNode`](#createnode) Create a new node using this asset in the scene....
  - [`_setRawAsset`](#setrawasset) Set native file name for this asset.
  - [`addRef`](#addref) Add references of asset
  - [`decRef`](#decref) Reduce references of asset and it will be auto released when refCount equals 0.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.
  - [`clear`](#clear) Destroy all callbackInfos.
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### _uuid

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L57) |



##### loaded

> Whether the asset is loaded or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:66](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L66) |



##### nativeUrl

> Returns the url of this asset's native object, if none it will returns an empty string.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:81](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L81) |



##### refCount

> The number of reference

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:115](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L115) |



##### _native

> Serializable url for native asset.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L131) |



##### _nativeAsset

> The underlying native asset of this asset if one is available.
This property can be used to access additional details or functionality releated to the asset.
This property will be initialized by the loader if `_native` is available.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/assets/CCAsset.js:142](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L142) |



##### url

> `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:728](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/asset-manager/deprecated.js#L728) |
| Deprecated | cc.Asset.url is deprecated, please use cc.Asset.nativeUrl instead |



##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L258) |

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
For `Asset` objects, the `toString()` method returns a string representation of the object.
JavaScript calls the `toString()` method automatically when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:212](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L212) |



##### serialize

Provide this method at the request of AssetDB.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:232](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L232) |



##### createNode

Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:246](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L246) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

Set native file name for this asset.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/assets/CCAsset.js:261](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L261) |

###### Parameters
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addRef

Add references of asset

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:283](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L283) |



##### decRef

Reduce references of asset and it will be auto released when refCount equals 0.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| Defined in | [cocos2d/core/assets/CCAsset.js:301](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/assets/CCAsset.js#L301) |



##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L69) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L77) |

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
| Defined in | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L119) |

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
| Defined in | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L163) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L182) |

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

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L208) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### clear

Destroy all callbackInfos.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:221](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/event/event-target.js#L221) |



##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable anymore.
You can use `cc.isValid(obj)` to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L293) |


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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L511) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/platform/CCObject.js#L524) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



