## `Skeleton` Class

Extends [`RenderComponent`](RenderComponent.md)


Module: [sp](../modules/sp.md)


The skeleton of Spine <br/>
<br/>
(Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/>



### Index

##### Properties

  - [`paused`](#paused) `Boolean` The skeletal animation is paused?
  - [`skeletonData`](#skeletondata) `sp.SkeletonData` The skeleton data contains the skeleton information (bind pose bones, slots, draw order,...
  - [`defaultSkin`](#defaultskin) `String` The name of default skin.
  - [`defaultAnimation`](#defaultanimation) `String` The name of default animation.
  - [`animation`](#animation) `String` The name of current playing animation.
  - [`_defaultSkinIndex`](#defaultskinindex) `Number` 
  - [`loop`](#loop) `Boolean` TODO
  - [`premultipliedAlpha`](#premultipliedalpha) `Boolean` Indicates whether to enable premultiplied alpha.
  - [`timeScale`](#timescale) `Number` The time scale of this skeleton.
  - [`debugSlots`](#debugslots) `Boolean` Indicates whether open debug slots.
  - [`debugBones`](#debugbones) `Boolean` Indicates whether open debug bones.
  - [`debugMesh`](#debugmesh) `Boolean` Indicates whether open debug mesh.
  - [`useTint`](#usetint) `Boolean` Enabled two color tint.
  - [`enableBatch`](#enablebatch) `Boolean` Enabled batch model, if skeleton is complex, do not enable batch, or will lower performance.
  - [`sharedMaterials`](#sharedmaterials) `[Material]` The materials used by this render component.
  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,...
  - [`node`](#node) `Node` The node this component is attached to.
  - [`uuid`](#uuid) `String` The uuid for editor.
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` indicates whether this component is enabled or not.
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` indicates whether this component is enabled and its node is also active in the hierarchy.
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` Returns a value which used to indicate the onLoad get called or not.
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`setSkeletonData`](#setskeletondata) This method is different from the `skeletonData` property.
  - [`setSlotsRange`](#setslotsrange) Sets slots visible range.
  - [`setAnimationStateData`](#setanimationstatedata) Sets animation state data.<br>...
  - [`setAnimationCacheMode`](#setanimationcachemode) It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
  - [`isAnimationCached`](#isanimationcached) Whether in cached mode.
  - [`setVertexEffectDelegate`](#setvertexeffectdelegate) Sets vertex effect delegate.
  - [`updateWorldTransform`](#updateworldtransform) Computes the world SRT from the local SRT for each bone.
  - [`setToSetupPose`](#settosetuppose) Sets the bones and slots to the setup pose.
  - [`setBonesToSetupPose`](#setbonestosetuppose) Sets the bones to the setup pose,...
  - [`setSlotsToSetupPose`](#setslotstosetuppose) Sets the slots to the setup pose,...
  - [`updateAnimationCache`](#updateanimationcache) performance due to calculating all data in a single frame.
  - [`invalidAnimationCache`](#invalidanimationcache) Invalidates the animation cache, which is then recomputed on each frame..
  - [`findBone`](#findbone) Finds a bone by name.
  - [`findSlot`](#findslot) Finds a slot by name.
  - [`setSkin`](#setskin) Finds a skin by name and makes it the active skin.
  - [`getAttachment`](#getattachment) Returns the attachment for the slot and attachment name.
  - [`setAttachment`](#setattachment) Sets the attachment for the slot and attachment name.
  - [`getTextureAtlas`](#gettextureatlas) Return the renderer of attachment.
  - [`setMix`](#setmix) Mix applies all keyframe values,...
  - [`setAnimation`](#setanimation) Set the current animation.
  - [`addAnimation`](#addanimation) Adds an animation to be played delay seconds after the current or last queued animation.<br>...
  - [`findAnimation`](#findanimation) Find animation with specified name.
  - [`getCurrent`](#getcurrent) Returns track entry by trackIndex.<br>...
  - [`clearTracks`](#cleartracks) Clears all tracks of animation state.
  - [`clearTrack`](#cleartrack) Clears track of animation state by trackIndex.
  - [`setStartListener`](#setstartlistener) Set the start event listener.
  - [`setInterruptListener`](#setinterruptlistener) Set the interrupt event listener.
  - [`setEndListener`](#setendlistener) Set the end event listener.
  - [`setDisposeListener`](#setdisposelistener) Set the dispose event listener.
  - [`setCompleteListener`](#setcompletelistener) Set the complete event listener.
  - [`setEventListener`](#seteventlistener) Set the animation event listener.
  - [`setTrackStartListener`](#settrackstartlistener) Set the start event listener for specified TrackEntry.
  - [`setTrackInterruptListener`](#settrackinterruptlistener) Set the interrupt event listener for specified TrackEntry.
  - [`setTrackEndListener`](#settrackendlistener) Set the end event listener for specified TrackEntry.
  - [`setTrackDisposeListener`](#settrackdisposelistener) Set the dispose event listener for specified TrackEntry.
  - [`setTrackCompleteListener`](#settrackcompletelistener) Set the complete event listener for specified TrackEntry.
  - [`setTrackEventListener`](#settrackeventlistener) Set the event listener for specified TrackEntry.
  - [`getState`](#getstate) Get the animation state object
  - [`getMaterial`](#getmaterial) Get the material by index.
  - [`getMaterials`](#getmaterials) Gets all the materials.
  - [`setMaterial`](#setmaterial) Set the material by index.
  - [`update`](#update) This is a lifecycle method.
  - [`lateUpdate`](#lateupdate) This is a lifecycle method.
  - [`__preload`](#preload) `__preload` is called before every onLoad.
  - [`onLoad`](#onload) When attaching to an active node or its node first activated.
  - [`start`](#start) Called before all scripts' update if the Component is enabled the first time.
  - [`onEnable`](#onenable) This is a lifecycle method.
  - [`onDisable`](#ondisable) This is a lifecycle method.
  - [`onDestroy`](#ondestroy) This is a lifecycle method.
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
  - [`addComponent`](#addcomponent) Adds a component class to the node.
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't....
  - [`getComponents`](#getcomponents) Returns all components of supplied Type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns the components of supplied type in self or any of its children using depth first search.
  - [`_getLocalBounds`](#getlocalbounds) If the component's bounding box is different from the node's, you can implement this method to supply
  - [`onRestore`](#onrestore) for undo/redo operation.
  - [`schedule`](#schedule) Schedules a custom selector....
  - [`scheduleOnce`](#scheduleonce) Schedules a callback function that runs only once, with a delay of 0 or larger.
  - [`unschedule`](#unschedule) Unschedules a custom callback function.
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function....
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### paused

> The skeletal animation is paused?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:108](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L108) |



##### skeletonData

> The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
attachments, skins, etc) and animations but does not hold any state.<br/>
Multiple skeletons can share the same skeleton data.

| meta | description |
|------|-------------|
| Type | sp.SkeletonData |
| Defined in | [extensions/spine/Skeleton.js:121](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L121) |



##### defaultSkin

> The name of default skin.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [extensions/spine/Skeleton.js:147](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L147) |



##### defaultAnimation

> The name of default animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [extensions/spine/Skeleton.js:157](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L157) |



##### animation

> The name of current playing animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [extensions/spine/Skeleton.js:167](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L167) |



##### _defaultSkinIndex

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [extensions/spine/Skeleton.js:194](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L194) |



##### loop

> TODO

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:304](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L304) |



##### premultipliedAlpha

> Indicates whether to enable premultiplied alpha.
You should disable this option when image's transparent area appears to have opaque pixels,
or enable this option when image's half transparent area appears to be darken.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:315](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L315) |



##### timeScale

> The time scale of this skeleton.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [extensions/spine/Skeleton.js:329](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L329) |



##### debugSlots

> Indicates whether open debug slots.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:340](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L340) |



##### debugBones

> Indicates whether open debug bones.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:355](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L355) |



##### debugMesh

> Indicates whether open debug mesh.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:370](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L370) |



##### useTint

> Enabled two color tint.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:385](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L385) |



##### enableBatch

> Enabled batch model, if skeleton is complex, do not enable batch, or will lower performance.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/spine/Skeleton.js:399](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L399) |



##### sharedMaterials

> The materials used by this render component.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Material.html" class="crosslink">[Material]</a> |
| Defined in | [cocos2d/core/components/CCRenderComponent.js:63](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCRenderComponent.js#L63) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in `_onPreDestroy`.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L63) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L80) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L111) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L159) |

##### Examples

```js
comp.enabled = true;
cc.log(comp.enabled);
```


##### enabledInHierarchy

> indicates whether this component is enabled and its node is also active in the hierarchy.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L191) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:211](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L211) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
```


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


##### setSkeletonData

Sets runtime skeleton data to sp.Skeleton.<br>
This method is different from the `skeletonData` property. This method is passed in the raw data provided by the Spine runtime, and the skeletonData type is the asset type provided by Creator.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:522](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L522) |

###### Parameters
- `skeletonData` sp.spine.SkeletonData 


##### setSlotsRange

Sets slots visible range.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:563](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L563) |

###### Parameters
- `startSlotIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `endSlotIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setAnimationStateData

Sets animation state data.<br>
The parameter type is <a href="../modules/sp.spine.html">sp.spine</a>.AnimationStateData.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:579](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L579) |

###### Parameters
- `stateData` sp.spine.AnimationStateData 


##### setAnimationCacheMode

It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
If set the mode in editor, then no need to worry about order problem.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:627](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L627) |

###### Parameters
- `cacheMode` AnimationCacheMode 

##### Examples

```js
skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
```

##### isAnimationCached

Whether in cached mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [extensions/spine/Skeleton.js:648](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L648) |



##### setVertexEffectDelegate

Sets vertex effect delegate.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:754](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L754) |

###### Parameters
- `effectDelegate` sp.VertexEffectDelegate 


##### updateWorldTransform

Computes the world SRT from the local SRT for each bone.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:766](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L766) |


##### Examples

```js
var bone = spine.findBone('head');
cc.log(bone.worldX); // return 0;
spine.updateWorldTransform();
bone = spine.findBone('head');
cc.log(bone.worldX); // return -23.12;
```

##### setToSetupPose

Sets the bones and slots to the setup pose.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:786](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L786) |



##### setBonesToSetupPose

Sets the bones to the setup pose,
using the values from the `BoneData` list in the `SkeletonData`.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:797](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L797) |



##### setSlotsToSetupPose

Sets the slots to the setup pose,
using the values from the `SlotData` list in the `SkeletonData`.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:812](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L812) |



##### updateAnimationCache

Updating an animation cache to calculate all frame data in the animation is a cost in
performance due to calculating all data in a single frame.
To update the cache, use the invalidAnimationCache method with high performance.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:827](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L827) |

###### Parameters
- `animName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### invalidAnimationCache

Invalidates the animation cache, which is then recomputed on each frame..

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:846](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L846) |



##### findBone

Finds a bone by name.
This does a string comparison for every bone.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.Bone object.

| meta | description |
|------|-------------|
| Returns | sp.spine.Bone 
| Defined in | [extensions/spine/Skeleton.js:860](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L860) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### findSlot

Finds a slot by name. This does a string comparison for every slot.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.Slot object.

| meta | description |
|------|-------------|
| Returns | sp.spine.Slot 
| Defined in | [extensions/spine/Skeleton.js:881](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L881) |

###### Parameters
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setSkin

Finds a skin by name and makes it the active skin.
This does a string comparison for every skin.<br>
Note that setting the skin does not change which attachments are visible.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.Skin object.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:900](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L900) |

###### Parameters
- `skinName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getAttachment

Returns the attachment for the slot and attachment name.
The skeleton looks first in its skin, then in the skeleton data’s default skin.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.Attachment object.

| meta | description |
|------|-------------|
| Returns | sp.spine.Attachment 
| Defined in | [extensions/spine/Skeleton.js:922](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L922) |

###### Parameters
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setAttachment

Sets the attachment for the slot and attachment name.
The skeleton looks first in its skin, then in the skeleton data’s default skin.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:943](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L943) |

###### Parameters
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTextureAtlas

Return the renderer of attachment.

| meta | description |
|------|-------------|
| Returns | sp.spine.TextureAtlasRegion 
| Defined in | [extensions/spine/Skeleton.js:961](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L961) |

###### Parameters
- `regionAttachment` sp.spine.RegionAttachment &#124; spine.BoundingBoxAttachment 


##### setMix

Mix applies all keyframe values,
interpolated for the specified time and mixed with the current values.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:972](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L972) |

###### Parameters
- `fromAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `toAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setAnimation

Set the current animation. Any queued animations are cleared.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry object.

| meta | description |
|------|-------------|
| Returns | sp.spine.TrackEntry 
| Defined in | [extensions/spine/Skeleton.js:988](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L988) |

###### Parameters
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addAnimation

Adds an animation to be played delay seconds after the current or last queued animation.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry object.

| meta | description |
|------|-------------|
| Returns | sp.spine.TrackEntry 
| Defined in | [extensions/spine/Skeleton.js:1039](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1039) |

###### Parameters
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### findAnimation

Find animation with specified name.

| meta | description |
|------|-------------|
| Returns | sp.spine.Animation 
| Defined in | [extensions/spine/Skeleton.js:1071](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1071) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getCurrent

Returns track entry by trackIndex.<br>
Returns a <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry object.

| meta | description |
|------|-------------|
| Returns | sp.spine.TrackEntry 
| Defined in | [extensions/spine/Skeleton.js:1085](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1085) |

###### Parameters
- `trackIndex` Unknown 


##### clearTracks

Clears all tracks of animation state.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1105](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1105) |



##### clearTrack

Clears track of animation state by trackIndex.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1120](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1120) |

###### Parameters
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setStartListener

Set the start event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1140](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1140) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setInterruptListener

Set the interrupt event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1151](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1151) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEndListener

Set the end event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1162](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1162) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setDisposeListener

Set the dispose event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1173](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1173) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setCompleteListener

Set the complete event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1184](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1184) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEventListener

Set the animation event listener.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1195](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1195) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackStartListener

Set the start event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1206](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1206) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackInterruptListener

Set the interrupt event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1217](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1217) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackEndListener

Set the end event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1228](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1228) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackDisposeListener

Set the dispose event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1239](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1239) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackCompleteListener

Set the complete event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1250](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1250) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 
	- `entry` sp.spine.TrackEntry 
	- `loopCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setTrackEventListener

Set the event listener for specified TrackEntry.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/Skeleton.js:1266](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1266) |

###### Parameters
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### getState

Get the animation state object

| meta | description |
|------|-------------|
| Returns | sp.spine.AnimationState 
| Defined in | [extensions/spine/Skeleton.js:1277](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/spine/Skeleton.js#L1277) |



##### getMaterial

Get the material by index.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/MaterialVariant.html" class="crosslink">MaterialVariant</a> 
| Defined in | [cocos2d/core/components/CCRenderComponent.js:156](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCRenderComponent.js#L156) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getMaterials

Gets all the materials.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/MaterialVariant.html" class="crosslink">[MaterialVariant]</a> 
| Defined in | [cocos2d/core/components/CCRenderComponent.js:179](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCRenderComponent.js#L179) |



##### setMaterial

Set the material by index.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Material.html" class="crosslink">Material</a> 
| Defined in | [cocos2d/core/components/CCRenderComponent.js:193](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCRenderComponent.js#L193) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `material` <a href="../classes/Material.html" class="crosslink">Material</a> 


##### update

Update is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:232](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L232) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:243](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L243) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:254](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L254) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:265](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L265) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:278](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L278) |



##### onEnable

Called when this component becomes enabled and its node is active.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:291](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L291) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L301) |



##### onDestroy

Called when this component will be destroyed.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:311](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L311) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:321](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L321) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:326](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L326) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:331](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L331) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:341](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L341) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the constructor or the class name of the component to add

##### Examples

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### getComponent

Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:359](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L359) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
// get sprite component.
var sprite = node.getComponent(cc.Sprite);
// get custom test calss.
var test = node.getComponent("Test");
```

##### getComponents

Returns all components of supplied Type in the node.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:383](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L383) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponents(cc.Sprite);
var tests = node.getComponents("Test");
```

##### getComponentInChildren

Returns the component of supplied type in any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:401](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L401) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

Returns the components of supplied type in self or any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:419](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L419) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### _getLocalBounds

If the component's bounding box is different from the node's, you can implement this method to supply
a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:439](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L439) |

###### Parameters
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
an undo operation on this component.<br/>
<br/>
If the component contains the "internal state", short for "temporary member variables which not included<br/>
in its CCClass properties", then you may need to implement this function.<br/>
<br/>
The editor will call the getset accessors of your component to record/restore the component's state<br/>
for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement<br/>
this function to manually synchronize your component's "internal states" with its public properties.<br/>
Once you implement this function, all the getset accessors of your component will not be called when<br/>
the user performs an undo/redo operation. Which means that only the properties with default value<br/>
will be recorded or restored by editor.<br/>
<br/>
Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need<br/>
to support the reset menu, you should manually synchronize your component's "internal states" with its<br/>
properties in this function. Once you implement this function, all the getset accessors of your component<br/>
will not be called during reset operation. Which means that only the properties with default value<br/>
will be reset by editor.

This function is only called in editor mode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:452](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L452) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:544](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L544) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.schedule(timeCallback, 1);
```

##### scheduleOnce

Schedules a callback function that runs only once, with a delay of 0 or larger.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:582](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L582) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.scheduleOnce(timeCallback, 2);
```

##### unschedule

Unschedules a custom callback function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:599](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L599) |

###### Parameters
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### Examples

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
Actions are not affected by this method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:615](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/cocos2d/core/components/CCComponent.js#L615) |


##### Examples

```js
this.unscheduleAllCallbacks();
```

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



