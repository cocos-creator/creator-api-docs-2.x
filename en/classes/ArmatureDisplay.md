## `ArmatureDisplay` Class

Extends [`RenderComponent`](RenderComponent.md)


Module: [dragonBones](../modules/dragonBones.md)


The Armature Display of DragonBones <br/>
<br/>
Armature Display has a reference to a DragonBonesAsset and stores the state for ArmatureDisplay instance,
which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
Multiple Armature Display can use the same DragonBonesAsset which includes all animations, skins, and attachments. <br/>



### Index

##### Properties

  - [`dragonAsset`](#dragonasset) `DragonBonesAsset` The DragonBones data contains the armatures information (bind pose bones, slots, draw order,...
  - [`dragonAtlasAsset`](#dragonatlasasset) `DragonBonesAtlasAsset` The atlas asset for the DragonBones.
  - [`armatureName`](#armaturename) `String` The name of current armature.
  - [`animationName`](#animationname) `String` The name of current playing animation.
  - [`_defaultArmatureIndex`](#defaultarmatureindex) `Number` 
  - [`timeScale`](#timescale) `Number` The time scale of this armature.
  - [`playTimes`](#playtimes) `Number` The play times of the default animation.
  - [`premultipliedAlpha`](#premultipliedalpha) `Boolean` Indicates whether to enable premultiplied alpha.
  - [`debugBones`](#debugbones) `Boolean` Indicates whether open debug bones.
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

  - [`getArmatureKey`](#getarmaturekey) The key of dragonbones cache data, which is regard as 'dragonbonesName', when you want to change dragonbones cloth.
  - [`setAnimationCacheMode`](#setanimationcachemode) It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
  - [`isAnimationCached`](#isanimationcached) Whether in cached mode.
  - [`playAnimation`](#playanimation) Play the specified animation.
  - [`updateAnimationCache`](#updateanimationcache) performance due to calculating all data in a single frame.
  - [`invalidAnimationCache`](#invalidanimationcache) Invalidates the animation cache, which is then recomputed on each frame..
  - [`getArmatureNames`](#getarmaturenames) Get the all armature names in the DragonBones Data.
  - [`getAnimationNames`](#getanimationnames) Get the all animation names of specified armature.
  - [`on`](#on) Add event listener for the DragonBones Event, the same to addEventListener.
  - [`off`](#off) Remove the event listener for the DragonBones Event, the same to removeEventListener.
  - [`once`](#once) Add DragonBones one-time event listener, the callback will remove itself after the first time it is triggered.
  - [`addEventListener`](#addeventlistener) Add event listener for the DragonBones Event.
  - [`removeEventListener`](#removeeventlistener) Remove the event listener for the DragonBones Event.
  - [`buildArmature`](#buildarmature) Build the armature for specified name.
  - [`armature`](#armature) Get the current armature object of the ArmatureDisplay.
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



##### Events

  - [`dragonBones.EventObject.START`](#dragonbones.eventobject.start) Animation start play.
  - [`dragonBones.EventObject.LOOP_COMPLETE`](#dragonbones.eventobject.loopcomplete) Animation loop play complete once.
  - [`dragonBones.EventObject.COMPLETE`](#dragonbones.eventobject.complete) Animation play complete.
  - [`dragonBones.EventObject.FADE_IN`](#dragonbones.eventobject.fadein) Animation fade in start.
  - [`dragonBones.EventObject.FADE_IN_COMPLETE`](#dragonbones.eventobject.fadeincomplete) Animation fade in complete.
  - [`dragonBones.EventObject.FADE_OUT`](#dragonbones.eventobject.fadeout) Animation fade out start.
  - [`dragonBones.EventObject.FADE_OUT_COMPLETE`](#dragonbones.eventobject.fadeoutcomplete) Animation fade out complete.
  - [`dragonBones.EventObject.FRAME_EVENT`](#dragonbones.eventobject.frameevent) Animation frame event.
  - [`dragonBones.EventObject.SOUND_EVENT`](#dragonbones.eventobject.soundevent) Animation frame sound event.


### Details


#### Properties


##### dragonAsset

> The DragonBones data contains the armatures information (bind pose bones, slots, draw order,
attachments, skins, etc) and animations but does not hold any state.<br/>
Multiple ArmatureDisplay can share the same DragonBones data.

| meta | description |
|------|-------------|
| Type | <a href="../classes/DragonBonesAsset.html" class="crosslink">DragonBonesAsset</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:115](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L115) |



##### dragonAtlasAsset

> The atlas asset for the DragonBones.

| meta | description |
|------|-------------|
| Type | <a href="../classes/DragonBonesAtlasAsset.html" class="crosslink">DragonBonesAtlasAsset</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:139](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L139) |



##### armatureName

> The name of current armature.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:158](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L158) |



##### animationName

> The name of current playing animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:196](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L196) |



##### _defaultArmatureIndex

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:211](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L211) |



##### timeScale

> The time scale of this armature.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:302](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L302) |



##### playTimes

> The play times of the default animation.
     -1 means using the value of config file;
     0 means repeat for ever
     >0 means repeat times

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:318](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L318) |



##### premultipliedAlpha

> Indicates whether to enable premultiplied alpha.
You should disable this option when image's transparent area appears to have opaque pixels,
or enable this option when image's half transparent area appears to be darken.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:335](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L335) |



##### debugBones

> Indicates whether open debug bones.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:349](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L349) |



##### enableBatch

> Enabled batch model, if skeleton is complex, do not enable batch, or will lower performance.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:363](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L363) |



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


##### getArmatureKey

The key of dragonbones cache data, which is regard as 'dragonbonesName', when you want to change dragonbones cloth.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:499](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L499) |


##### Examples

```js
let factory = dragonBones.CCFactory.getInstance();
let needChangeSlot = needChangeArmature.armature().getSlot("changeSlotName");
factory.replaceSlotDisplay(toChangeArmature.getArmatureKey(), "armatureName", "slotName", "displayName", needChangeSlot);
```

##### setAnimationCacheMode

It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
If set the mode in editor, then no need to worry about order problem.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:515](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L515) |

###### Parameters
- `cacheMode` AnimationCacheMode 

##### Examples

```js
armatureDisplay.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
```

##### isAnimationCached

Whether in cached mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:539](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L539) |



##### playAnimation

Play the specified animation.
Parameter animName specify the animation name.
Parameter playTimes specify the repeat times of the animation.
-1 means use the value of the config file.
0 means play the animation for ever.
>0 means repeat times.

| meta | description |
|------|-------------|
| Returns | dragonBones.AnimationState 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:795](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L795) |

###### Parameters
- `animName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `playTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### updateAnimationCache

Updating an animation cache to calculate all frame data in the animation is a cost in
performance due to calculating all data in a single frame.
To update the cache, use the invalidAnimationCache method with high performance.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:843](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L843) |

###### Parameters
- `animName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### invalidAnimationCache

Invalidates the animation cache, which is then recomputed on each frame..

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:859](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L859) |



##### getArmatureNames

Get the all armature names in the DragonBones Data.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:871](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L871) |



##### getAnimationNames

Get the all animation names of specified armature.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:884](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L884) |

###### Parameters
- `armatureName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### on

Add event listener for the DragonBones Event, the same to addEventListener.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:909](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L909) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null


##### off

Remove the event listener for the DragonBones Event, the same to removeEventListener.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:924](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L924) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### once

Add DragonBones one-time event listener, the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:938](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L938) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null


##### addEventListener

Add event listener for the DragonBones Event.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:953](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L953) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null


##### removeEventListener

Remove the event listener for the DragonBones Event.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:968](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L968) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### buildArmature

Build the armature for specified name.

| meta | description |
|------|-------------|
| Returns | dragonBones.ArmatureDisplay 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:982](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L982) |

###### Parameters
- `armatureName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### armature

Get the current armature object of the ArmatureDisplay.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [extensions/dragonbones/ArmatureDisplay.js:996](https://github.com/cocos-creator/engine/blob/22ca6465effd8063cb95e509843b8bef3d880759/extensions/dragonbones/ArmatureDisplay.js#L996) |



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




#### Events

### `dragonBones.EventObject.START` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation start play.


### Index







### Details




### `dragonBones.EventObject.LOOP_COMPLETE` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation loop play complete once.


### Index







### Details




### `dragonBones.EventObject.COMPLETE` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation play complete.


### Index







### Details




### `dragonBones.EventObject.FADE_IN` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation fade in start.


### Index







### Details




### `dragonBones.EventObject.FADE_IN_COMPLETE` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation fade in complete.


### Index







### Details




### `dragonBones.EventObject.FADE_OUT` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation fade out start.


### Index







### Details




### `dragonBones.EventObject.FADE_OUT_COMPLETE` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation fade out complete.


### Index







### Details




### `dragonBones.EventObject.FRAME_EVENT` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation frame event.


### Index







### Details




### `dragonBones.EventObject.SOUND_EVENT` Event



Module: [dragonBones](../modules/dragonBones.md)


Animation frame sound event.


### Index







### Details





