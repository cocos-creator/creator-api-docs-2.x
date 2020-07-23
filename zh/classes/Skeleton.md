## `Skeleton` 类型

继承于 [`RenderComponent`](RenderComponent.md)


模块: [sp](../modules/sp.md)


Spine 骨骼动画 <br/>
<br/>
(Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。



### 索引

##### 属性（properties）

  - [`paused`](#paused) `Boolean` 该骨骼动画是否暂停。
  - [`skeletonData`](#skeletondata) `sp.SkeletonData` attachments，皮肤等等）和动画但不持有任何状态。
  - [`defaultSkin`](#defaultskin) `String` 默认的皮肤名称。
  - [`defaultAnimation`](#defaultanimation) `String` 默认的动画名称。
  - [`animation`](#animation) `String` 当前播放的动画名称。
  - [`_defaultSkinIndex`](#defaultskinindex) `Number` 
  - [`loop`](#loop) `Boolean` 是否循环播放当前骨骼动画。
  - [`premultipliedAlpha`](#premultipliedalpha) `Boolean` 是否启用贴图预乘。
  - [`timeScale`](#timescale) `Number` 当前骨骼中所有动画的时间缩放率。
  - [`debugSlots`](#debugslots) `Boolean` 是否显示 slot 的 debug 信息。
  - [`debugBones`](#debugbones) `Boolean` 是否显示 bone 的 debug 信息。
  - [`debugMesh`](#debugmesh) `Boolean` 是否显示 mesh 的 debug 信息。
  - [`useTint`](#usetint) `Boolean` 是否启用染色效果。
  - [`enableBatch`](#enablebatch) `Boolean` 开启合批，如果渲染大量相同纹理，且结构简单的骨骼动画，开启合批可以降低drawcall，否则请不要开启，cpu消耗会上升。
  - [`sharedMaterials`](#sharedmaterials) `[Material]` 渲染组件使用的材质。
  - [`__eventTargets`](#eventtargets) `Array` 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。
  - [`node`](#node) `Node` 该组件被附加到的节点。
  - [`uuid`](#uuid) `String` 组件的 uuid，用于编辑器。
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` 表示该组件自身是否启用。
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` 表示该组件是否被启用并且所在的节点也处于激活状态。
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`setSkeletonData`](#setskeletondata) 设置底层运行时用到的 SkeletonData。
  - [`setSlotsRange`](#setslotsrange) 设置骨骼插槽可视范围。
  - [`setAnimationStateData`](#setanimationstatedata) 设置动画状态数据。
  - [`setAnimationCacheMode`](#setanimationcachemode) 若想切换渲染模式，最好在设置'dragonAsset'之前，先设置好渲染模式，否则有运行时开销。
  - [`isAnimationCached`](#isanimationcached) 当前是否处于缓存模式。
  - [`setVertexEffectDelegate`](#setvertexeffectdelegate) 设置顶点动画代理
  - [`updateWorldTransform`](#updateworldtransform) 当获取 bone 的数值未更新时，即可使用该函数进行更新数值。
  - [`setToSetupPose`](#settosetuppose) 还原到起始动作
  - [`setBonesToSetupPose`](#setbonestosetuppose) 使用 SkeletonData 中的 BoneData 列表中的值。
  - [`setSlotsToSetupPose`](#setslotstosetuppose) 设置 slot 到起始动作。
  - [`updateAnimationCache`](#updateanimationcache) 更新某个动画缓存, 预计算动画中所有帧数据，由于在单帧计算所有数据，所以较消耗性能。
  - [`invalidAnimationCache`](#invalidanimationcache) 使动画缓存失效，之后会在每帧重新计算。
  - [`findBone`](#findbone) 通过名称查找 bone。
  - [`findSlot`](#findslot) 通过名称查找 slot。
  - [`setSkin`](#setskin) 按名称查找皮肤，激活该皮肤。
  - [`getAttachment`](#getattachment) 通过 slot 和 attachment 的名称获取 attachment。
  - [`setAttachment`](#setattachment) 通过 slot 和 attachment 的名字来设置 attachment。
  - [`getTextureAtlas`](#gettextureatlas) Return the renderer of attachment.
  - [`setMix`](#setmix) 为所有关键帧设定混合及混合时间（从当前值开始差值）。
  - [`setAnimation`](#setanimation) 设置当前动画。
  - [`addAnimation`](#addanimation) 添加一个动画到动画队列尾部，还可以延迟指定的秒数。
  - [`findAnimation`](#findanimation) 查找指定名称的动画
  - [`getCurrent`](#getcurrent) 通过 track 索引获取 TrackEntry。
  - [`clearTracks`](#cleartracks) 清除所有 track 的动画状态。
  - [`clearTrack`](#cleartrack) 清除出指定 track 的动画状态。
  - [`setStartListener`](#setstartlistener) 用来设置开始播放动画的事件监听。
  - [`setInterruptListener`](#setinterruptlistener) 用来设置动画被打断的事件监听。
  - [`setEndListener`](#setendlistener) 用来设置动画播放完后的事件监听。
  - [`setDisposeListener`](#setdisposelistener) 用来设置动画将被销毁的事件监听。
  - [`setCompleteListener`](#setcompletelistener) 用来设置动画播放一次循环结束后的事件监听。
  - [`setEventListener`](#seteventlistener) 用来设置动画播放过程中帧事件的监听。
  - [`setTrackStartListener`](#settrackstartlistener) 用来为指定的 TrackEntry 设置动画开始播放的事件监听。
  - [`setTrackInterruptListener`](#settrackinterruptlistener) 用来为指定的 TrackEntry 设置动画被打断的事件监听。
  - [`setTrackEndListener`](#settrackendlistener) 用来为指定的 TrackEntry 设置动画播放结束的事件监听。
  - [`setTrackDisposeListener`](#settrackdisposelistener) 用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。
  - [`setTrackCompleteListener`](#settrackcompletelistener) 用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。
  - [`setTrackEventListener`](#settrackeventlistener) 用来为指定的 TrackEntry 设置动画帧事件的监听。
  - [`getState`](#getstate) 获取动画状态
  - [`getMaterial`](#getmaterial) 根据指定索引获取材质
  - [`getMaterials`](#getmaterials) 获取所有材质。
  - [`setMaterial`](#setmaterial) 根据指定索引设置材质
  - [`update`](#update) 如果该组件启用，则每帧调用 update。
  - [`lateUpdate`](#lateupdate) 如果该组件启用，则每帧调用 LateUpdate。
  - [`__preload`](#preload) `__preload` is called before every onLoad....
  - [`onLoad`](#onload) 当附加到一个激活的节点上或者其节点第一次激活时候调用。
  - [`start`](#start) 如果该组件第一次启用，则在所有组件的 update 之前调用。
  - [`onEnable`](#onenable) 当该组件被启用，并且它的节点也激活时。
  - [`onDisable`](#ondisable) 当该组件被禁用或节点变为无效时调用。
  - [`onDestroy`](#ondestroy) 该方法为生命周期方法，父类未必会有实现。
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。
  - [`addComponent`](#addcomponent) 向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。
  - [`getComponent`](#getcomponent) 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。
  - [`getComponents`](#getcomponents) 返回节点上指定类型的所有组件。
  - [`getComponentInChildren`](#getcomponentinchildren) 递归查找所有子节点中第一个匹配指定类型的组件。
  - [`getComponentsInChildren`](#getcomponentsinchildren) 递归查找自身或所有子节点中指定类型的组件
  - [`_getLocalBounds`](#getlocalbounds) 以便编辑器的场景视图可以正确地执行点选测试。
  - [`onRestore`](#onrestore) onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。
  - [`schedule`](#schedule) 调度一个自定义的回调函数。
  - [`scheduleOnce`](#scheduleonce) 调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
  - [`unschedule`](#unschedule) 取消调度一个自定义的回调函数。
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消调度所有已调度的回调函数：定制的回调函数以及 `update` 回调函数。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) 清除实例中的所有引用。
  - [`_onPreDestroy`](#onpredestroy) 在对象被销毁之前调用。
  - [`_serialize`](#serialize) 为此对象定制序列化。
  - [`_deserialize`](#deserialize) 从自定义序列化数据初始化此对象。



### Details


#### 属性（properties）


##### paused

> 该骨骼动画是否暂停。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:108](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L108) |



##### skeletonData

> 骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
attachments，皮肤等等）和动画但不持有任何状态。<br/>
多个 Skeleton 可以共用相同的骨骼数据。

| meta | description |
|------|-------------|
| 类型 | sp.SkeletonData |
| 定义于 | [extensions/spine/Skeleton.js:121](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L121) |



##### defaultSkin

> 默认的皮肤名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [extensions/spine/Skeleton.js:147](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L147) |



##### defaultAnimation

> 默认的动画名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [extensions/spine/Skeleton.js:157](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L157) |



##### animation

> 当前播放的动画名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [extensions/spine/Skeleton.js:167](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L167) |



##### _defaultSkinIndex

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [extensions/spine/Skeleton.js:194](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L194) |



##### loop

> 是否循环播放当前骨骼动画。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:302](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L302) |



##### premultipliedAlpha

> 是否启用贴图预乘。
当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:313](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L313) |



##### timeScale

> 当前骨骼中所有动画的时间缩放率。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [extensions/spine/Skeleton.js:327](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L327) |



##### debugSlots

> 是否显示 slot 的 debug 信息。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:338](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L338) |



##### debugBones

> 是否显示 bone 的 debug 信息。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:353](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L353) |



##### debugMesh

> 是否显示 mesh 的 debug 信息。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:368](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L368) |



##### useTint

> 是否启用染色效果。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:383](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L383) |



##### enableBatch

> 开启合批，如果渲染大量相同纹理，且结构简单的骨骼动画，开启合批可以降低drawcall，否则请不要开启，cpu消耗会上升。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [extensions/spine/Skeleton.js:397](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L397) |



##### sharedMaterials

> 渲染组件使用的材质。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Material.html" class="crosslink">[Material]</a> |
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:63](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCRenderComponent.js#L63) |



##### __eventTargets

> 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L63) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L80) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L111) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L159) |

##### 示例

```js
comp.enabled = true;
cc.log(comp.enabled);
```


##### enabledInHierarchy

> 表示该组件是否被启用并且所在的节点也处于激活状态。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L191) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:207](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L207) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L240) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L258) |

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


##### setSkeletonData

设置底层运行时用到的 SkeletonData。<br>
这个接口有别于 `skeletonData` 属性，这个接口传入的是 Spine runtime 提供的原始数据，而 skeletonData 的类型是 Creator 提供的资源类型。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:520](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L520) |

###### 参数列表
- `skeletonData` sp.spine.SkeletonData 


##### setSlotsRange

设置骨骼插槽可视范围。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:561](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L561) |

###### 参数列表
- `startSlotIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `endSlotIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setAnimationStateData

设置动画状态数据。<br>
参数是 <a href="../modules/sp.spine.html">sp.spine</a>.AnimationStateData。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:577](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L577) |

###### 参数列表
- `stateData` sp.spine.AnimationStateData 


##### setAnimationCacheMode

若想切换渲染模式，最好在设置'dragonAsset'之前，先设置好渲染模式，否则有运行时开销。
若在编辑中设置渲染模式，则无需担心设置次序的问题。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:625](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L625) |

###### 参数列表
- `cacheMode` AnimationCacheMode 

##### 示例

```js
skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
```

##### isAnimationCached

当前是否处于缓存模式。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [extensions/spine/Skeleton.js:646](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L646) |



##### setVertexEffectDelegate

设置顶点动画代理

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:752](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L752) |

###### 参数列表
- `effectDelegate` sp.VertexEffectDelegate 


##### updateWorldTransform

重新更新所有骨骼的世界 Transform，
当获取 bone 的数值未更新时，即可使用该函数进行更新数值。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:764](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L764) |


##### 示例

```js
var bone = spine.findBone('head');
cc.log(bone.worldX); // return 0;
spine.updateWorldTransform();
bone = spine.findBone('head');
cc.log(bone.worldX); // return -23.12;
```

##### setToSetupPose

还原到起始动作

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:784](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L784) |



##### setBonesToSetupPose

设置 bone 到起始动作
使用 SkeletonData 中的 BoneData 列表中的值。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:795](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L795) |



##### setSlotsToSetupPose

设置 slot 到起始动作。
使用 SkeletonData 中的 SlotData 列表中的值。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:810](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L810) |



##### updateAnimationCache

更新某个动画缓存, 预计算动画中所有帧数据，由于在单帧计算所有数据，所以较消耗性能。
若想更新缓存，可使用 invalidAnimationCache 方法，具有较高性能。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:825](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L825) |

###### 参数列表
- `animName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### invalidAnimationCache

使动画缓存失效，之后会在每帧重新计算。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:844](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L844) |



##### findBone

通过名称查找 bone。
这里对每个 bone 的名称进行了对比。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Bone 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Bone 
| 定义于 | [extensions/spine/Skeleton.js:858](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L858) |

###### 参数列表
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### findSlot

通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Slot 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Slot 
| 定义于 | [extensions/spine/Skeleton.js:879](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L879) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setSkin

按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
注意：设置皮肤不会改变 attachment 的可见性。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Skin 对象。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:898](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L898) |

###### 参数列表
- `skinName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getAttachment

通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Attachment 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Attachment 
| 定义于 | [extensions/spine/Skeleton.js:920](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L920) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setAttachment

通过 slot 和 attachment 的名字来设置 attachment。
Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:941](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L941) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTextureAtlas

Return the renderer of attachment.

| meta | description |
|------|-------------|
| 返回 | sp.spine.TextureAtlasRegion 
| 定义于 | [extensions/spine/Skeleton.js:959](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L959) |

###### 参数列表
- `regionAttachment` sp.spine.RegionAttachment &#124; spine.BoundingBoxAttachment 


##### setMix

为所有关键帧设定混合及混合时间（从当前值开始差值）。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:970](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L970) |

###### 参数列表
- `fromAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `toAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setAnimation

设置当前动画。队列中的任何的动画将被清除。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.TrackEntry 
| 定义于 | [extensions/spine/Skeleton.js:986](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L986) |

###### 参数列表
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addAnimation

添加一个动画到动画队列尾部，还可以延迟指定的秒数。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.TrackEntry 
| 定义于 | [extensions/spine/Skeleton.js:1037](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1037) |

###### 参数列表
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### findAnimation

查找指定名称的动画

| meta | description |
|------|-------------|
| 返回 | sp.spine.Animation 
| 定义于 | [extensions/spine/Skeleton.js:1069](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1069) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getCurrent

通过 track 索引获取 TrackEntry。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.TrackEntry 
| 定义于 | [extensions/spine/Skeleton.js:1083](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1083) |

###### 参数列表
- `trackIndex` Unknown 


##### clearTracks

清除所有 track 的动画状态。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1103](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1103) |



##### clearTrack

清除出指定 track 的动画状态。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1118](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1118) |

###### 参数列表
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setStartListener

用来设置开始播放动画的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1137](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1137) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setInterruptListener

用来设置动画被打断的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1148](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1148) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEndListener

用来设置动画播放完后的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1159](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1159) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setDisposeListener

用来设置动画将被销毁的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1170](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1170) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setCompleteListener

用来设置动画播放一次循环结束后的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1181](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1181) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEventListener

用来设置动画播放过程中帧事件的监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1192](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1192) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackStartListener

用来为指定的 TrackEntry 设置动画开始播放的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1203](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1203) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackInterruptListener

用来为指定的 TrackEntry 设置动画被打断的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1214](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1214) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackEndListener

用来为指定的 TrackEntry 设置动画播放结束的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1225](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1225) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackDisposeListener

用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1236](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1236) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackCompleteListener

用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1247](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1247) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 
	- `entry` sp.spine.TrackEntry 
	- `loopCount` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setTrackEventListener

用来为指定的 TrackEntry 设置动画帧事件的监听。

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/Skeleton.js:1263](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1263) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### getState

获取动画状态

| meta | description |
|------|-------------|
| 返回 | sp.spine.AnimationState 
| 定义于 | [extensions/spine/Skeleton.js:1274](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/extensions/spine/Skeleton.js#L1274) |



##### getMaterial

根据指定索引获取材质

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/MaterialVariant.html" class="crosslink">MaterialVariant</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:154](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCRenderComponent.js#L154) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getMaterials

获取所有材质。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/MaterialVariant.html" class="crosslink">[MaterialVariant]</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:177](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCRenderComponent.js#L177) |



##### setMaterial

根据指定索引设置材质

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Material.html" class="crosslink">Material</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:191](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCRenderComponent.js#L191) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `material` <a href="../classes/Material.html" class="crosslink">Material</a> 


##### update

如果该组件启用，则每帧调用 update。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:228](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L228) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:239](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L239) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:250](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L250) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:261](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L261) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:274](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L274) |



##### onEnable

当该组件被启用，并且它的节点也激活时。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:287](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L287) |



##### onDisable

当该组件被禁用或节点变为无效时调用。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:297](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L297) |



##### onDestroy

当该组件被销毁时调用<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:307](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L307) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:317](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L317) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:322](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L322) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:327](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L327) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:337](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L337) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the constructor or the class name of the component to add

##### 示例

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### getComponent

获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:355](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L355) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
// get sprite component.
var sprite = node.getComponent(cc.Sprite);
// get custom test calss.
var test = node.getComponent("Test");
```

##### getComponents

返回节点上指定类型的所有组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:379](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L379) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprites = node.getComponents(cc.Sprite);
var tests = node.getComponents("Test");
```

##### getComponentInChildren

递归查找所有子节点中第一个匹配指定类型的组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:397](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L397) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

递归查找自身或所有子节点中指定类型的组件

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:415](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L415) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### _getLocalBounds

如果组件的包围盒与节点不同，您可以实现该方法以提供自定义的轴向对齐的包围盒（AABB），
以便编辑器的场景视图可以正确地执行点选测试。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:435](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L435) |

###### 参数列表
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
<br/>
如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
<br/>
编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。然而，在极端的情况下，它可能无法良好运作。<br/>
那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
<br/>
同样的，编辑可能无法在极端情况下正确地重置您的组件。如果你需要支持组件重置菜单，则需要在该方法中手工同步组件属性到“内部状态”。一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。这意味着仅仅指定了默认值的属性将被编辑器重置。
<br/>
此方法仅在编辑器下会被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:448](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L448) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:540](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L540) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### 示例

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.schedule(timeCallback, 1);
```

##### scheduleOnce

调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:578](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L578) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### 示例

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.scheduleOnce(timeCallback, 2);
```

##### unschedule

取消调度一个自定义的回调函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:595](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L595) |

###### 参数列表
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### 示例

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

取消调度所有已调度的回调函数：定制的回调函数以及 `update` 回调函数。动作不受此方法影响。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:611](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/components/CCComponent.js#L611) |


##### 示例

```js
this.unscheduleAllCallbacks();
```

##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 `cc.isValid(obj)` 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L293) |


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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:484](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L484) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:512](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L512) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:525](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCObject.js#L525) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



