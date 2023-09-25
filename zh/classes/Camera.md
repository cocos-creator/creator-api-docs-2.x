## `Camera` 类型

继承于 [`Component`](Component.md)


模块: [cc](../modules/cc.md)


摄像机在制作卷轴或是其他需要移动屏幕的游戏时比较有用，使用摄像机将会比移动节点来移动屏幕更加高效。



### 索引

##### 属性（properties）

  - [`zoomRatio`](#zoomratio) `Number` 摄像机缩放比率, 只支持 2D camera。
  - [`fov`](#fov) `Number` 决定摄像机视角的宽度，当摄像机处于透视投影模式下这个属性才会生效。
  - [`orthoSize`](#orthosize) `Number` 摄像机在正交投影模式下的视窗大小。
  - [`nearClip`](#nearclip) `Number` 摄像机的近剪裁面。
  - [`farClip`](#farclip) `Number` 摄像机的远剪裁面。
  - [`ortho`](#ortho) `Boolean` 设置摄像机的投影模式是正交还是透视模式。
  - [`rect`](#rect) `Rect` 决定摄像机绘制在屏幕上哪个位置，值为（0 ~ 1）。
  - [`cullingMask`](#cullingmask) `Number` 决定摄像机会渲染场景的哪一部分。
  - [`clearFlags`](#clearflags) `Camera.ClearFlags` 决定摄像机渲染时会清除哪些状态。
  - [`backgroundColor`](#backgroundcolor) `Color` 摄像机用于清除屏幕的背景色。
  - [`depth`](#depth) `Number` 摄像机深度。
  - [`targetTexture`](#targettexture) `RenderTexture` 摄像机渲染的目标 RenderTexture。
  - [`renderStages`](#renderstages) `Number` 设置摄像机渲染的阶段
  - [`alignWithScreen`](#alignwithscreen) `Boolean` 是否自动将摄像机的视口对准屏幕
  - [`main`](#main) `Camera` 当前场景中激活的主摄像机。
  - [`cameras`](#cameras) `[Camera]` 当前激活的所有摄像机。
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

  - [`findCamera`](#findcamera) 获取节点所在的第一个摄像机。
  - [`getScreenToWorldMatrix2D`](#getscreentoworldmatrix2d) 获取屏幕坐标系到世界坐标系的矩阵，只适用于 alignWithScreen 为 true 的 2D 摄像机。
  - [`getWorldToScreenMatrix2D`](#getworldtoscreenmatrix2d) 获取世界坐标系到摄像机坐标系的矩阵，只适用于 alignWithScreen 为 true 的 2D 摄像机。
  - [`getScreenToWorldPoint`](#getscreentoworldpoint) 将坐标从屏幕坐标系转换到世界坐标系。
  - [`getWorldToScreenPoint`](#getworldtoscreenpoint) 将坐标从世界坐标系转化到屏幕坐标系。
  - [`getRay`](#getray) 从屏幕坐标获取一条射线
  - [`containsNode`](#containsnode) 检测节点是否被此摄像机影响
  - [`render`](#render) 手动渲染摄像机。
  - [`getNodeToCameraTransform`](#getnodetocameratransform) 返回一个将节点坐标系转换到摄像机坐标系下的矩阵
  - [`getCameraToWorldPoint`](#getcameratoworldpoint) 将一个摄像机坐标系下的点转换到世界坐标系下。
  - [`getWorldToCameraPoint`](#getworldtocamerapoint) 将一个世界坐标系下的点转换到摄像机坐标系下。
  - [`getCameraToWorldMatrix`](#getcameratoworldmatrix) 获取摄像机坐标系到世界坐标系的矩阵
  - [`getWorldToCameraMatrix`](#getworldtocameramatrix) 获取世界坐标系到摄像机坐标系的矩阵
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


##### zoomRatio

> 摄像机缩放比率, 只支持 2D camera。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:168](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L168) |



##### fov

> 决定摄像机视角的宽度，当摄像机处于透视投影模式下这个属性才会生效。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:185](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L185) |



##### orthoSize

> 摄像机在正交投影模式下的视窗大小。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:203](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L203) |



##### nearClip

> 摄像机的近剪裁面。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:221](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L221) |



##### farClip

> 摄像机的远剪裁面。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:240](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L240) |



##### ortho

> 设置摄像机的投影模式是正交还是透视模式。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:259](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L259) |



##### rect

> 决定摄像机绘制在屏幕上哪个位置，值为（0 ~ 1）。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Rect.html" class="crosslink">Rect</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:278](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L278) |



##### cullingMask

> 决定摄像机会渲染场景的哪一部分。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:297](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L297) |



##### clearFlags

> 决定摄像机渲染时会清除哪些状态。

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/Camera.ClearFlags.html" class="crosslink">Camera.ClearFlags</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:315](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L315) |



##### backgroundColor

> 摄像机用于清除屏幕的背景色。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:335](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L335) |



##### depth

> 摄像机深度。用于决定摄像机的渲染顺序，值越大渲染在越上层。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:355](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L355) |



##### targetTexture

> 摄像机渲染的目标 RenderTexture。
一般摄像机会直接渲染到屏幕上，但是有一些效果可以使用摄像机渲染到 RenderTexture 上再对 RenderTexture 进行处理来实现。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/RenderTexture.html" class="crosslink">RenderTexture</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:384](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L384) |



##### renderStages

> 设置摄像机渲染的阶段

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:404](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L404) |



##### alignWithScreen

> 是否自动将摄像机的视口对准屏幕

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:422](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L422) |



##### main

> 当前场景中激活的主摄像机。将会返回渲染在屏幕最底层，也就是 depth 最小的摄像机。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Camera.html" class="crosslink">Camera</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:444](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L444) |



##### cameras

> 当前激活的所有摄像机。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Camera.html" class="crosslink">[Camera]</a> |
| 定义于 | [cocos2d/core/camera/CCCamera.js:454](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L454) |



##### __eventTargets

> 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L63) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L80) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L111) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L159) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L191) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:211](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L211) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


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


##### findCamera

获取节点所在的第一个摄像机。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Camera.html" class="crosslink">Camera</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:466](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L466) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getScreenToWorldMatrix2D

获取屏幕坐标系到世界坐标系的矩阵，只适用于 alignWithScreen 为 true 的 2D 摄像机。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:633](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L633) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getWorldToScreenMatrix2D

获取世界坐标系到摄像机坐标系的矩阵，只适用于 alignWithScreen 为 true 的 2D 摄像机。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:648](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L648) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getScreenToWorldPoint

将坐标从屏幕坐标系转换到世界坐标系。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:680](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L680) |

###### 参数列表
- `screenPosition` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWorldToScreenPoint

将坐标从世界坐标系转化到屏幕坐标系。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:703](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L703) |

###### 参数列表
- `worldPosition` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getRay

从屏幕坐标获取一条射线

| meta | description |
|------|-------------|
| 返回 | Ray 
| 定义于 | [cocos2d/core/camera/CCCamera.js:727](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L727) |

###### 参数列表
- `screenPos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### containsNode

检测节点是否被此摄像机影响

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:753](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L753) |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> the node which need to check


##### render

手动渲染摄像机。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/camera/CCCamera.js:766](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L766) |

###### 参数列表
- `rootNode` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getNodeToCameraTransform

返回一个将节点坐标系转换到摄像机坐标系下的矩阵

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:827](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L827) |
| 废弃（Deprecated） | since v2.0.0 |

###### 参数列表
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> the node which should transform


##### getCameraToWorldPoint

将一个摄像机坐标系下的点转换到世界坐标系下。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:848](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L848) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point which should transform
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point to receive the result


##### getWorldToCameraPoint

将一个世界坐标系下的点转换到摄像机坐标系下。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:863](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L863) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point to receive the result


##### getCameraToWorldMatrix

获取摄像机坐标系到世界坐标系的矩阵

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:878](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L878) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getWorldToCameraMatrix

获取世界坐标系到摄像机坐标系的矩阵

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/camera/CCCamera.js:893](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/camera/CCCamera.js#L893) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### update

如果该组件启用，则每帧调用 update。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:232](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L232) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:243](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L243) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:254](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L254) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:265](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L265) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:278](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L278) |



##### onEnable

当该组件被启用，并且它的节点也激活时。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:291](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L291) |



##### onDisable

当该组件被禁用或节点变为无效时调用。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L301) |



##### onDestroy

当该组件被销毁时调用<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:311](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L311) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:321](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L321) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:326](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L326) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:331](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L331) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:341](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L341) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:359](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L359) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:383](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L383) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:401](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L401) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:419](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L419) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:439](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L439) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:452](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L452) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:544](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L544) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:582](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L582) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:599](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L599) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:615](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L615) |


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



