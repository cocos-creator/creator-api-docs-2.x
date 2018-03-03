## `Skeleton` 类型

继承于 [`_RendererUnderSG`](_RendererUnderSG.md)


模块: [sp](../modules/sp.md)


Spine 骨骼动画 <br/>
<br/>
(Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。


### 索引

##### 属性（properties）

  - [`paused`](#paused) `Boolean` 该骨骼动画是否暂停。
  - [`skeletonData`](#skeletondata) `SkeletonData` 骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
attachments，皮肤等等）和动画但不持有任何状态。<br/>
多个 Skeleton 可以共用相同的骨骼数据。
  - [`defaultSkin`](#defaultskin) `String` 默认的皮肤名称。
  - [`defaultAnimation`](#defaultanimation) `String` 默认的动画名称。
  - [`animation`](#animation) `String` 当前播放的动画名称。
  - [`_defaultSkinIndex`](#defaultskinindex) `Number` 
  - [`loop`](#loop) `Boolean` 是否循环播放当前骨骼动画。
  - [`premultipliedAlpha`](#premultipliedalpha) `Boolean` 是否启用贴图预乘。
当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。
  - [`timeScale`](#timescale) `Number` 当前骨骼中所有动画的时间缩放率。
  - [`debugSlots`](#debugslots) `Boolean` 是否显示 slot 的 debug 信息。
  - [`debugBones`](#debugbones) `Boolean` 是否显示 bone 的 debug 信息。
  - [`_sgNode`](#sgnode) `_ccsg.Node` Reference to the instance of _ccsg.Node
If it is possible to return null from your overloaded _createSgNode,
then you should always check for null before using this property and reimplement `__preload`.
  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy
  - [`node`](#node) `Node` 该组件被附加到的节点。组件总会附加到一个节点。
  - [`uuid`](#uuid) `String` 组件的 uuid，用于编辑器。
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` 表示该组件自身是否启用。
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` 表示该组件是否被启用并且所在的节点也处于激活状态。
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被销毁后将不可用）。



##### 方法

  - [`updateWorldTransform`](#updateworldtransform) 重新更新所有骨骼的世界 Transform，
当获取 bone 的数值未更新时，即可使用该函数进行更新数值。
  - [`setToSetupPose`](#settosetuppose) 还原到起始动作
  - [`setBonesToSetupPose`](#setbonestosetuppose) 设置 bone 到起始动作
使用 SkeletonData 中的 BoneData 列表中的值。
  - [`setSlotsToSetupPose`](#setslotstosetuppose) 设置 slot 到起始动作。
使用 SkeletonData 中的 SlotData 列表中的值。
  - [`findBone`](#findbone) 通过名称查找 bone。
这里对每个 bone 的名称进行了对比。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Bone 对象。
  - [`findSlot`](#findslot) 通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Slot 对象。
  - [`setSkin`](#setskin) 按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
注意：设置皮肤不会改变 attachment 的可见性。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Skin 对象。
  - [`getAttachment`](#getattachment) 通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Attachment 对象。
  - [`setAttachment`](#setattachment) 通过 slot 和 attachment 的名字来设置 attachment。
Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。
  - [`setSkeletonData`](#setskeletondata) 设置底层运行时用到的 SkeletonData。<br>
这个接口有别于 `skeletonData` 属性，这个接口传入的是 Spine runtime 提供的原始数据，而 skeletonData 的类型是 Creator 提供的资源类型。
  - [`setAnimationStateData`](#setanimationstatedata) 设置动画状态数据。<br>
参数是 <a href="../modules/sp.spine.html">sp.spine</a>.AnimationStateData。
  - [`setMix`](#setmix) 为所有关键帧设定混合及混合时间（从当前值开始差值）。
  - [`setAnimationListener`](#setanimationlistener) 设置动画事件监听器。
  - [`setAnimation`](#setanimation) 设置当前动画。队列中的任何的动画将被清除。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。
  - [`addAnimation`](#addanimation) 添加一个动画到动画队列尾部，还可以延迟指定的秒数。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。
  - [`findAnimation`](#findanimation) 查找指定名称的动画
  - [`getCurrent`](#getcurrent) 通过 track 索引获取 TrackEntry。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。
  - [`clearTracks`](#cleartracks) 清除所有 track 的动画状态。
  - [`clearTrack`](#cleartrack) 清除出指定 track 的动画状态。
  - [`setStartListener`](#setstartlistener) 用来设置开始播放动画的事件监听。
  - [`setInterruptListener`](#setinterruptlistener) 用来设置动画被打断的事件监听。
  - [`setEndListener`](#setendlistener) 用来设置动画播放完后的事件监听。
  - [`setDisposeListener`](#setdisposelistener) 用来设置动画将被销毁的事件监听。
  - [`setCompleteListener`](#setcompletelistener) 用来设置动画播放一次循环结束后的事件监听。
  - [`setEventListener`](#seteventlistener) 用来设置动画播放过程中帧事件的监听。
  - [`setTrackStartListener`](#settrackstartlistener) 用来为指定的 TrackEntry 设置动画开始播放的事件监听。（只支持 Web 平台）
  - [`setTrackInterruptListener`](#settrackinterruptlistener) 用来为指定的 TrackEntry 设置动画被打断的事件监听。（只支持 Web 平台）
  - [`setTrackEndListener`](#settrackendlistener) 用来为指定的 TrackEntry 设置动画播放结束的事件监听。（只支持 Web 平台）
  - [`setTrackDisposeListener`](#settrackdisposelistener) 用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。（只支持 Web 平台）
  - [`setTrackCompleteListener`](#settrackcompletelistener) 用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。（只支持 Web 平台）
  - [`setTrackEventListener`](#settrackeventlistener) 用来为指定的 TrackEntry 设置动画帧事件的监听。（只支持 Web 平台）
  - [`_createSgNode`](#createsgnode) Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.
  - [`_initSgNode`](#initsgnode) 
  - [`_removeSgNode`](#removesgnode) 
  - [`update`](#update) 如果该组件启用，则每帧调用 update。
  - [`lateUpdate`](#lateupdate) 如果该组件启用，则每帧调用 LateUpdate。
  - [`__preload`](#preload) `__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.
  - [`onLoad`](#onload) 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。
  - [`start`](#start) 如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。
  - [`onEnable`](#onenable) 当该组件被启用，并且它的节点也激活时。
  - [`onDisable`](#ondisable) 当该组件被禁用或节点变为无效时调用。
  - [`onDestroy`](#ondestroy) 当该组件被销毁时调用
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
  - [`addComponent`](#addcomponent) 向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。
  - [`getComponent`](#getcomponent) 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。
  - [`getComponents`](#getcomponents) 返回节点上指定类型的所有组件。
  - [`getComponentInChildren`](#getcomponentinchildren) 递归查找所有子节点中第一个匹配指定类型的组件。
  - [`getComponentsInChildren`](#getcomponentsinchildren) 递归查找自身或所有子节点中指定类型的组件
  - [`_getLocalBounds`](#getlocalbounds) 如果组件的包围盒与节点不同，您可以实现该方法以提供自定义的轴向对齐的包围盒（AABB），
以便编辑器的场景视图可以正确地执行点选测试。
  - [`onRestore`](#onrestore) onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
<br/>
如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
<br/>
编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。
然而，在极端的情况下，它可能无法良好运作。<br/>
那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。
一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。
这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
<br/>
同样的，编辑可能无法在极端情况下正确地重置您的组件。<br/>
于是如果你需要支持组件重置菜单，你需要在该方法中手工同步组件属性到“内部状态”。<br/>
一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。
这意味着仅仅指定了默认值的属性将被编辑器重置。
<br/>
此方法仅在编辑器下会被调用。
  - [`schedule`](#schedule) 调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。
  - [`scheduleOnce`](#scheduleonce) 调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
  - [`unschedule`](#unschedule) 取消调度一个自定义的回调函数。
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。动作不受此方法影响。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。<br/>
销毁后，CCObject 不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
实际销毁操作会延迟到当前帧渲染前执行。
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


#### 属性（properties）


##### paused

> 该骨骼动画是否暂停。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:102](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L102) |



##### skeletonData

> 骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
attachments，皮肤等等）和动画但不持有任何状态。<br/>
多个 Skeleton 可以共用相同的骨骼数据。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/SkeletonData.html" class="crosslink">SkeletonData</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:130](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L130) |



##### defaultSkin

> 默认的皮肤名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:167](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L167) |



##### defaultAnimation

> 默认的动画名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:177](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L177) |



##### animation

> 当前播放的动画名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:187](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L187) |



##### _defaultSkinIndex

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:210](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L210) |



##### loop

> 是否循环播放当前骨骼动画。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:308](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L308) |



##### premultipliedAlpha

> 是否启用贴图预乘。
当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:319](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L319) |



##### timeScale

> 当前骨骼中所有动画的时间缩放率。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:342](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L342) |



##### debugSlots

> 是否显示 slot 的 debug 信息。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:358](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L358) |



##### debugBones

> 是否显示 bone 的 debug 信息。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:375](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L375) |



##### _sgNode

> Reference to the instance of _ccsg.Node
If it is possible to return null from your overloaded _createSgNode,
then you should always check for null before using this property and reimplement `__preload`.

| meta | description |
|------|-------------|
| 类型 | _ccsg.Node |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCRendererUnderSG.js:41](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCRendererUnderSG.js#L41) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:61](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L61) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L75) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L111) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:159](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L159) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L166) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:197](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L197) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:213](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L213) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L50) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L57) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:208](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L208) |

##### 示例

```js
obj.name = "New Obj";
```


##### isValid

> 表示该对象是否可用（被销毁后将不可用）。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L225) |

##### 示例

```js
cc.log(obj.isValid);
```





<!-- Method Block -->
#### 方法


##### updateWorldTransform

重新更新所有骨骼的世界 Transform，
当获取 bone 的数值未更新时，即可使用该函数进行更新数值。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:517](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L517) |


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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:535](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L535) |



##### setBonesToSetupPose

设置 bone 到起始动作
使用 SkeletonData 中的 BoneData 列表中的值。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:546](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L546) |



##### setSlotsToSetupPose

设置 slot 到起始动作。
使用 SkeletonData 中的 SlotData 列表中的值。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:561](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L561) |



##### findBone

通过名称查找 bone。
这里对每个 bone 的名称进行了对比。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Bone 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Bone 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:576](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L576) |

###### 参数列表
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### findSlot

通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Slot 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Slot 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:597](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L597) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setSkin

按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
注意：设置皮肤不会改变 attachment 的可见性。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Skin 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Skin 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:616](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L616) |

###### 参数列表
- `skinName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getAttachment

通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.Attachment 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.Attachment 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:638](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L638) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setAttachment

通过 slot 和 attachment 的名字来设置 attachment。
Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:659](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L659) |

###### 参数列表
- `slotName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `attachmentName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setSkeletonData

设置底层运行时用到的 SkeletonData。<br>
这个接口有别于 `skeletonData` 属性，这个接口传入的是 Spine runtime 提供的原始数据，而 skeletonData 的类型是 Creator 提供的资源类型。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:676](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L676) |

###### 参数列表
- `skeletonData` sp.spine.SkeletonData 
- `ownsSkeletonData` sp.spine.SkeletonData 


##### setAnimationStateData

设置动画状态数据。<br>
参数是 <a href="../modules/sp.spine.html">sp.spine</a>.AnimationStateData。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:707](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L707) |

###### 参数列表
- `stateData` sp.spine.AnimationStateData 


##### setMix

为所有关键帧设定混合及混合时间（从当前值开始差值）。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:721](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L721) |

###### 参数列表
- `fromAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `toAnimation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setAnimationListener

设置动画事件监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:737](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L737) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### setAnimation

设置当前动画。队列中的任何的动画将被清除。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.TrackEntry 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:750](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L750) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:779](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L779) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:798](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L798) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getCurrent

通过 track 索引获取 TrackEntry。<br>
返回一个 <a href="../modules/sp.spine.html">sp.spine</a>.TrackEntry 对象。

| meta | description |
|------|-------------|
| 返回 | sp.spine.TrackEntry 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:812](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L812) |

###### 参数列表
- `trackIndex` Unknown 


##### clearTracks

清除所有 track 的动画状态。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:828](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L828) |



##### clearTrack

清除出指定 track 的动画状态。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:839](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L839) |

###### 参数列表
- `trackIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setStartListener

用来设置开始播放动画的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:873](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L873) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setInterruptListener

用来设置动画被打断的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:886](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L886) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEndListener

用来设置动画播放完后的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:899](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L899) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setDisposeListener

用来设置动画将被销毁的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:912](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L912) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setCompleteListener

用来设置动画播放一次循环结束后的事件监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:925](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L925) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setEventListener

用来设置动画播放过程中帧事件的监听。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:938](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L938) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackStartListener

用来为指定的 TrackEntry 设置动画开始播放的事件监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:951](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L951) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackInterruptListener

用来为指定的 TrackEntry 设置动画被打断的事件监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:964](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L964) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackEndListener

用来为指定的 TrackEntry 设置动画播放结束的事件监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:977](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L977) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackDisposeListener

用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:990](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L990) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackCompleteListener

用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:1003](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L1003) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### setTrackEventListener

用来为指定的 TrackEntry 设置动画帧事件的监听。（只支持 Web 平台）

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js:1016](https:/github.com/cocos-creator/engine/blob/master/extensions/spine/Skeleton.js#L1016) |

###### 参数列表
- `entry` sp.spine.TrackEntry 
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> 


##### _createSgNode

Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.

| meta | description |
|------|-------------|
| 返回 | _ccsg.Node 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L65) |



##### _initSgNode



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L75) |



##### _removeSgNode



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:81](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L81) |



##### update

如果该组件启用，则每帧调用 update。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:234](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L234) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L243) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:251](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L251) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:262](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L262) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:273](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L273) |



##### onEnable

当该组件被启用，并且它的节点也激活时。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:284](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L284) |



##### onDisable

当该组件被禁用或节点变为无效时调用。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:292](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L292) |



##### onDestroy

当该组件被销毁时调用

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:300](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L300) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:308](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L308) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L313) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:318](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L318) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:328](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L328) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:346](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L346) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L370) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L388) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:406](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L406) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L426) |

###### 参数列表
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
<br/>
如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
<br/>
编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。
然而，在极端的情况下，它可能无法良好运作。<br/>
那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。
一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。
这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
<br/>
同样的，编辑可能无法在极端情况下正确地重置您的组件。<br/>
于是如果你需要支持组件重置菜单，你需要在该方法中手工同步组件属性到“内部状态”。<br/>
一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。
这意味着仅仅指定了默认值的属性将被编辑器重置。
<br/>
此方法仅在编辑器下会被调用。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:439](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L439) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:541](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L541) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:578](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L578) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:595](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L595) |

###### 参数列表
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### 示例

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。动作不受此方法影响。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:611](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L611) |


##### 示例

```js
this.unscheduleAllCallbacks();
```

##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
销毁后，CCObject 不再可用。您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
实际销毁操作会延迟到当前帧渲染前执行。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:246](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L246) |


##### 示例

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L379) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:412](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L412) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L437) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L447) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



