## `Scene` 类型

继承于 [`Node`](Node.md)


模块: [cc](../modules/cc.md)


cc.Scene 是 cc.Node 的子类，仅作为一个抽象的概念。<br/>
cc.Scene 和 cc.Node 有点不同，用户不应直接修改 cc.Scene。


### 索引

##### 属性（properties）

  - [`autoReleaseAssets`](#autoreleaseassets) `Boolean` 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
  - [`groupIndex`](#groupindex) `Integer` 节点的分组索引。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>
  - [`group`](#group) `String` 节点的分组。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>
  - [`position`](#position) `Vec2` 节点在父节点坐标系中的位置（x, y）。
  - [`x`](#x) `Number` 节点 X 轴坐标。
  - [`y`](#y) `Number` 节点 Y 轴坐标。
  - [`rotation`](#rotation) `Number` 该节点旋转角度。
  - [`rotationX`](#rotationx) `Number` 该节点 X 轴旋转角度。
  - [`rotationY`](#rotationy) `Number` 该节点 Y 轴旋转角度。
  - [`scaleX`](#scalex) `Number` 节点 X 轴缩放。
  - [`scaleY`](#scaley) `Number` 节点 Y 轴缩放。
  - [`skewX`](#skewx) `Number` 该节点 Y 轴倾斜角度。
  - [`skewY`](#skewy) `Number` 该节点 X 轴倾斜角度。
  - [`opacity`](#opacity) `Number` 节点透明度，默认值为 255。
  - [`cascadeOpacity`](#cascadeopacity) `Boolean` 节点的不透明度值是否影响其子节点，默认值为 true。
  - [`color`](#color) `Color` 节点颜色。默认为白色，数值为：（255，255，255）。
  - [`anchorX`](#anchorx) `Number` 节点 X 轴锚点位置。
  - [`anchorY`](#anchory) `Number` 节点 Y 轴锚点位置。
  - [`width`](#width) `Number` 节点宽度。
  - [`height`](#height) `Number` 节点高度。
  - [`zIndex`](#zindex) `Number` 该节点渲染排序的 Z 轴深度。
  - [`_sgNode`](#sgnode) `_ccsg.Node` Current scene graph node for this node.
  - [`_sizeProvider`](#sizeprovider) `_ccsg.Node` Current active size provider for this node.
Size provider can equals to this._sgNode.
  - [`scale`](#scale) `Number` 节点相对父节点的缩放。
  - [`_components`](#components) `Component[]` 
  - [`_prefab`](#prefab) `PrefabInfo` The PrefabInfo object
  - [`_persistNode`](#persistnode) `Boolean` If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.
  - [`name`](#name) `String` 该节点名称。
  - [`uuid`](#uuid) `String` 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。
  - [`children`](#children) `Node[]` 节点的所有子节点。
  - [`childrenCount`](#childrencount) `Number` 节点的子节点数量。
  - [`active`](#active) `Boolean` 当前节点的自身激活状态。<br/>
值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。<br/>
如果你想检查节点在场景中实际的激活状态可以使用 Node/activeInHierarchy:property。
  - [`activeInHierarchy`](#activeinhierarchy) `Boolean` 表示此节点是否在场景中激活。
  - [`tag`](#tag) `Number` 节点标签。
  - [`__eventTargets`](#eventtargets) `EventTarget[]` Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy
  - [`parent`](#parent) `Node` 该节点的父节点。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被销毁后将不可用）。



##### 方法

  - [`constructor`](#constructor) 
  - [`on`](#on) 在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的 this 对象。<br/>
同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。<br/>
推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 cc.eventManager。
  - [`off`](#off) 删除之前与同类型，回调，目标或 useCapture 注册的回调。
  - [`targetOff`](#targetoff) 移除目标上的所有注册事件。
  - [`pauseSystemEvents`](#pausesystemevents) 暂停当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将暂停本节点和它的子树上所有节点的节点系统事件。
参考：http://cocos.com/docs/creator/scripting/internal-events.html
  - [`resumeSystemEvents`](#resumesystemevents) 恢复当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将恢复本节点和它的子树上所有节点的节点系统事件。
参考：http://cocos.com/docs/creator/scripting/internal-events.html
  - [`runAction`](#runaction) 执行并返回该执行的动作。该节点将会变成动作的目标。<br/>
调用 runAction 时，节点自身处于不激活状态将不会有任何效果。<br/>
注意：你不应该修改 runAction 后的动作，将无法发挥作用，如果想进行修改，请在定义 action 时加入。
  - [`pauseAllActions`](#pauseallactions) 暂停本节点上所有正在运行的动作。和 `cc.director.getActionManager().pauseTarget(node);` 等价。
  - [`resumeAllActions`](#resumeallactions) 恢复运行本节点上所有暂停的动作。和 `cc.director.getActionManager().resumeTarget(node);` 等价。
  - [`stopAllActions`](#stopallactions) 停止并且移除所有正在运行的动作列表。
  - [`stopAction`](#stopaction) 停止并移除指定的动作。
  - [`stopActionByTag`](#stopactionbytag) 停止并且移除指定标签的动作。
  - [`getActionByTag`](#getactionbytag) 通过标签获取指定动作。
  - [`getNumberOfRunningActions`](#getnumberofrunningactions) 获取运行着的动作加上正在调度运行的动作的总数。<br/>
例如：<br/>
- 如果你正在运行 7 个动作中的 1 个 Sequence，它将返回 1。<br/>
- 如果你正在运行 2 个动作中的 7 个 Sequence，它将返回 7。<br/>
  - [`getPosition`](#getposition) 获取节点在父节点坐标系中的位置（x, y）。
  - [`setPosition`](#setposition) 设置节点在父节点坐标系中的位置。<br/>
可以通过两种方式设置坐标点：<br/>
1. 传入 2 个数值 x 和 y。<br/>
2. 传入 cc.v2(x, y) 类型为 cc.Vec2 的对象。
  - [`getScale`](#getscale) 获取节点的缩放。当 X 轴和 Y 轴有相同的缩放数值时。
  - [`setScale`](#setscale) 设置节点的缩放比例，默认值为 1.0。这个函数可以在同一时间修改 X 和 Y 缩放。
  - [`getContentSize`](#getcontentsize) 获取节点自身大小，不受该节点是否被缩放或者旋转的影响。
  - [`setContentSize`](#setcontentsize) 设置节点原始大小，不受该节点是否被缩放或者旋转的影响。
  - [`setOpacityModifyRGB`](#setopacitymodifyrgb) 设置更改透明度时是否修改RGB值，
  - [`isOpacityModifyRGB`](#isopacitymodifyrgb) 更改透明度时是否修改RGB值。
  - [`getAnchorPoint`](#getanchorpoint) 获取节点锚点，用百分比表示。<br/>
锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
  - [`setAnchorPoint`](#setanchorpoint) 设置锚点的百分比。<br/>
锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
  - [`getAnchorPointInPoints`](#getanchorpointinpoints) 返回锚点的绝对像素位置。<br/>
你只能读它。如果您要修改它，使用 setAnchorPoint。
  - [`getDisplayedOpacity`](#getdisplayedopacity) 获取节点显示透明度，
显示透明度和透明度之间的不同之处在于当启用级连透明度时，
显示透明度是基于自身透明度和父节点透明度计算的。
  - [`getDisplayedColor`](#getdisplayedcolor) 获取节点的显示颜色，
显示颜色和颜色之间的不同之处在于当启用级连颜色时，
显示颜色是基于自身颜色和父节点颜色计算的。
  - [`getNodeToParentTransformAR`](#getnodetoparenttransformar) 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。<br/>
这个矩阵以像素为单位。<br/>
该方法基于节点坐标。
  - [`getBoundingBox`](#getboundingbox) 返回父节坐标系下的轴向对齐的包围盒。
  - [`getBoundingBoxToWorld`](#getboundingboxtoworld) 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。<br/>
该边框包含自身和已激活的子节点的世界边框。
  - [`getNodeToParentTransform`](#getnodetoparenttransform) 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。这个矩阵以像素为单位。
  - [`getNodeToWorldTransform`](#getnodetoworldtransform) 返回节点到世界坐标系的仿射变换矩阵。矩阵单位是像素。
  - [`getNodeToWorldTransformAR`](#getnodetoworldtransformar) 返回节点到世界坐标仿射变换矩阵。矩阵单位是像素。<br/>
该方法基于节点坐标。
  - [`getParentToNodeTransform`](#getparenttonodetransform) 返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。<br/>
该矩阵以像素为单位。返回的矩阵是只读的，不能更改。
  - [`getWorldToNodeTransform`](#getworldtonodetransform) 
  - [`convertToNodeSpace`](#converttonodespace) 将一个点转换到节点 (局部) 坐标系。结果以 Vec2 为单位。
  - [`convertToWorldSpace`](#converttoworldspace) 将一个点转换到世界空间坐标系。结果以 Vec2 为单位。
  - [`convertToNodeSpaceAR`](#converttonodespacear) 将一个点转换到节点 (局部) 空间坐标系。结果以 Vec2 为单位。<br/>
返回值将基于节点坐标。
  - [`convertToWorldSpaceAR`](#converttoworldspacear) 将一个点转换到世界空间坐标系。结果以 Vec2 为单位。<br/>
返回值将基于世界坐标。
  - [`convertTouchToNodeSpace`](#converttouchtonodespace) 将触摸点转换成本地坐标系中位置。
  - [`convertTouchToNodeSpaceAR`](#converttouchtonodespacear) 转换一个 cc.Touch（世界坐标）到一个局部坐标，该方法基于节点坐标。
  - [`addChild`](#addchild) 添加子节点，并且可以修改该节点的 局部 Z 顺序和标签。
  - [`cleanup`](#cleanup) 停止所有正在播放的动作和计时器。
  - [`sortAllChildren`](#sortallchildren) 根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。
  - [`getPositionX`](#getpositionx) 获取节点 X 轴坐标。
  - [`setPositionX`](#setpositionx) 设置节点 X 轴坐标。
  - [`getPositionY`](#getpositiony) 获取节点 Y 轴坐标。
  - [`setPositionY`](#setpositiony) 设置节点 Y 轴坐标。
  - [`getLocalZOrder`](#getlocalzorder) 获取节点局部 Z 轴顺序。
  - [`setLocalZOrder`](#setlocalzorder) LocalZOrder 是 “key” (关键)来分辨节点和它兄弟节点的相关性。
父节点将会通过 LocalZOrder 的值来分辨所有的子节点。
如果两个节点有同样的 LocalZOrder，那么先加入子节点数组的节点将会显示在后加入的节点的前面。
同样的，场景图使用 “In-Order（按顺序）” 遍历数算法来遍历
( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) 并且拥有小于 0 的 LocalZOrder 的值的节点是 “ left ” 子树（左子树）
所以拥有大于 0 的 LocalZOrder 的值得节点是 “ right ”子树（右子树）。
  - [`isCascadeOpacityEnabled`](#iscascadeopacityenabled) 返回节点的不透明度值是否影响其子节点。
  - [`setCascadeOpacityEnabled`](#setcascadeopacityenabled) 启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。
  - [`attr`](#attr) 属性配置函数。在 attrs 的所有属性将被设置为节点属性。
  - [`getChildByTag`](#getchildbytag) 通过标签获取节点的子节点。
  - [`getChildByUuid`](#getchildbyuuid) 通过 uuid 获取节点的子节点。
  - [`getChildByName`](#getchildbyname) 通过名称获取节点的子节点。
  - [`insertChild`](#insertchild) 插入子节点到指定位置
  - [`getSiblingIndex`](#getsiblingindex) 获取同级索引。
  - [`setSiblingIndex`](#setsiblingindex) 设置节点同级索引。
  - [`removeFromParent`](#removefromparent) 从父节点中删除该节点。如果不传入 cleanup 参数或者传入 `true`，那么这个节点上所有绑定的事件、action 都会被删除。<br/>
因此建议调用这个 API 时总是传入 `false` 参数。<br/>
如果这个节点是一个孤节点，那么什么都不会发生。
  - [`removeChild`](#removechild) 移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。<br/>
  - [`removeChildByTag`](#removechildbytag) 通过标签移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。
  - [`removeAllChildren`](#removeallchildren) 移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。
  - [`isChildOf`](#ischildof) 是否是指定节点的子节点？
  - [`getComponent`](#getcomponent) 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。
  - [`getComponents`](#getcomponents) 返回节点上指定类型的所有组件。
  - [`getComponentInChildren`](#getcomponentinchildren) 递归查找所有子节点中第一个匹配指定类型的组件。
  - [`getComponentsInChildren`](#getcomponentsinchildren) 递归查找自身或所有子节点中指定类型的组件
  - [`addComponent`](#addcomponent) 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
  - [`_addComponentAt`](#addcomponentat) This api should only used by undo system
  - [`removeComponent`](#removecomponent) 删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
如果你已经获得组件引用，你也可以直接调用 component.destroy()
  - [`_getDependComponent`](#getdependcomponent) 
  - [`destroyAllChildren`](#destroyallchildren) 销毁所有子节点，并释放所有它们对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。
  - [`once`](#once) 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`emit`](#emit) 该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。
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



##### 事件

  - [`position-changed`](#position-changed) 
  - [`size-changed`](#size-changed) 
  - [`anchor-changed`](#anchor-changed) 
  - [`child-added`](#child-added) 
  - [`child-removed`](#child-removed) 
  - [`child-reorder`](#child-reorder) 
  - [`group-changed`](#group-changed) 
  - [`touchstart`](#touchstart) 
  - [`active-in-hierarchy-changed`](#active-in-hierarchy-changed) 注意：此节点激活时，此事件仅从最顶部的节点发出。


### Details


#### 属性（properties）


##### autoReleaseAssets

> 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScene.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScene.js#L46) |



##### groupIndex

> 节点的分组索引。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>

| meta | description |
|------|-------------|
| 类型 | Integer |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L399) |



##### group

> 节点的分组。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L415) |



##### position

> 节点在父节点坐标系中的位置（x, y）。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:438](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L438) |

##### 示例

```js
cc.log("Node Position: " + node.position);
```


##### x

> 节点 X 轴坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:446](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L446) |

##### 示例

```js
node.x = 100;
cc.log("Node Position X: " + node.x);
```


##### y

> 节点 Y 轴坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:489](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L489) |

##### 示例

```js
node.y = 100;
cc.log("Node Position Y: " + node.y);
```


##### rotation

> 该节点旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:532](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L532) |

##### 示例

```js
node.rotation = 90;
cc.log("Node Rotation: " + node.rotation);
```


##### rotationX

> 该节点 X 轴旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:560](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L560) |

##### 示例

```js
node.rotationX = 45;
cc.log("Node Rotation X: " + node.rotationX);
```


##### rotationY

> 该节点 Y 轴旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:586](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L586) |

##### 示例

```js
node.rotationY = 45;
cc.log("Node Rotation Y: " + node.rotationY);
```


##### scaleX

> 节点 X 轴缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:612](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L612) |

##### 示例

```js
node.scaleX = 0.5;
cc.log("Node Scale X: " + node.scaleX);
```


##### scaleY

> 节点 Y 轴缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:638](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L638) |

##### 示例

```js
node.scaleY = 0.5;
cc.log("Node Scale Y: " + node.scaleY);
```


##### skewX

> 该节点 Y 轴倾斜角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:664](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L664) |

##### 示例

```js
node.skewX = 0;
cc.log("Node SkewX: " + node.skewX);
```


##### skewY

> 该节点 X 轴倾斜角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:683](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L683) |

##### 示例

```js
node.skewY = 0;
cc.log("Node SkewY: " + node.skewY);
```


##### opacity

> 节点透明度，默认值为 255。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:702](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L702) |

##### 示例

```js
node.opacity = 255;
```


##### cascadeOpacity

> 节点的不透明度值是否影响其子节点，默认值为 true。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:729](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L729) |

##### 示例

```js
cc.log("CascadeOpacity: " + node.cascadeOpacity);
```


##### color

> 节点颜色。默认为白色，数值为：（255，255，255）。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:755](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L755) |

##### 示例

```js
node.color = new cc.Color(255, 255, 255);
```


##### anchorX

> 节点 X 轴锚点位置。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L780) |

##### 示例

```js
node.anchorX = 0;
```


##### anchorY

> 节点 Y 轴锚点位置。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:805](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L805) |

##### 示例

```js
node.anchorY = 0;
```


##### width

> 节点宽度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:830](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L830) |

##### 示例

```js
node.width = 100;
```


##### height

> 节点高度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:869](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L869) |

##### 示例

```js
node.height = 100;
```


##### zIndex

> 该节点渲染排序的 Z 轴深度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:908](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L908) |

##### 示例

```js
node.zIndex = 1;
cc.log("Node zIndex: " + node.zIndex);
```


##### _sgNode

> Current scene graph node for this node.

| meta | description |
|------|-------------|
| 类型 | _ccsg.Node |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:942](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L942) |



##### _sizeProvider

> Current active size provider for this node.
Size provider can equals to this._sgNode.

| meta | description |
|------|-------------|
| 类型 | _ccsg.Node |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:965](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L965) |



##### scale

> 节点相对父节点的缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2629](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2629) |

##### 示例

```js
node.scale = 1;
```


##### _components

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.html" class="crosslink">Component[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:133](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L133) |



##### _prefab

> The PrefabInfo object

| meta | description |
|------|-------------|
| 类型 | PrefabInfo |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:142](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L142) |



##### _persistNode

> If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:150](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L150) |



##### name

> 该节点名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:174](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L174) |

##### 示例

```js
node.name = "New Node";
cc.log("Node Name: " + node.name);
```


##### uuid

> 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L201) |

##### 示例

```js
cc.log("Node Uuid: " + node.uuid);
```


##### children

> 节点的所有子节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L220) |

##### 示例

```js
var children = node.children;
for (var i = 0; i < children.length; ++i) {
    cc.log("Node: " + children[i]);
}
```


##### childrenCount

> 节点的子节点数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:238](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L238) |

##### 示例

```js
var count = node.childrenCount;
cc.log("Node Children Count: " + count);
```


##### active

> 当前节点的自身激活状态。<br/>
值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。<br/>
如果你想检查节点在场景中实际的激活状态可以使用 Node/activeInHierarchy:property。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L254) |

##### 示例

```js
node.active = false;
```


##### activeInHierarchy

> 表示此节点是否在场景中激活。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:288](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L288) |

##### 示例

```js
cc.log("activeInHierarchy: " + node.activeInHierarchy);
```


##### tag

> 节点标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L302) |

##### 示例

```js
node.tag = 1001;
```


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/EventTarget.html" class="crosslink">EventTarget[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:324](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L324) |



##### parent

> 该节点的父节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:342](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L342) |

##### 示例

```js
node.parent = newNode;
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


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:936](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L936) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### on

在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的 this 对象。<br/>
同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。<br/>
推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 cc.eventManager。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1169](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1169) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.<br>
                       See <a href="../classes/Node.html#event_position-changed" class="crosslink">Node Events</a> for all builtin events.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
this.node.on(cc.Node.EventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
node.on(cc.Node.EventType.TOUCH_MOVE, callback, this.node);
node.on(cc.Node.EventType.TOUCH_END, callback, this.node);
node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this.node);
node.on("anchor-changed", callback, this);
```

##### off

删除之前与同类型，回调，目标或 useCapture 注册的回调。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1254) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### 示例

```js
this.node.off(cc.Node.EventType.TOUCH_START, this.memberFunction, this);
node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
node.off("anchor-changed", callback, this);
```

##### targetOff

移除目标上的所有注册事件。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1283](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1283) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related callbacks

##### 示例

```js
node.targetOff(target);
```

##### pauseSystemEvents

暂停当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将暂停本节点和它的子树上所有节点的节点系统事件。
参考：http://cocos.com/docs/creator/scripting/internal-events.html

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1298](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1298) |

###### 参数列表
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to pause node system events on the sub node tree.

##### 示例

```js
node.pauseSystemEvents(true);
```

##### resumeSystemEvents

恢复当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将恢复本节点和它的子树上所有节点的节点系统事件。
参考：http://cocos.com/docs/creator/scripting/internal-events.html

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1314](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1314) |

###### 参数列表
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to resume node system events on the sub node tree.

##### 示例

```js
node.resumeSystemEvents(true);
```

##### runAction

执行并返回该执行的动作。该节点将会变成动作的目标。<br/>
调用 runAction 时，节点自身处于不激活状态将不会有任何效果。<br/>
注意：你不应该修改 runAction 后的动作，将无法发挥作用，如果想进行修改，请在定义 action 时加入。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1452](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1452) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 

##### 示例

```js
var action = cc.scaleTo(0.2, 1, 0.6);
node.runAction(action);
node.runAction(action).repeatForever(); // fail
node.runAction(action.repeatForever()); // right
```

##### pauseAllActions

暂停本节点上所有正在运行的动作。和 `cc.director.getActionManager().pauseTarget(node);` 等价。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1487](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1487) |


##### 示例

```js
node.pauseAllActions();
```

##### resumeAllActions

恢复运行本节点上所有暂停的动作。和 `cc.director.getActionManager().resumeTarget(node);` 等价。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1498](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1498) |


##### 示例

```js
node.resumeAllActions();
```

##### stopAllActions

停止并且移除所有正在运行的动作列表。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1509](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1509) |


##### 示例

```js
node.stopAllActions();
```

##### stopAction

停止并移除指定的动作。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1520](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1520) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> An action object to be removed.

##### 示例

```js
var action = cc.scaleTo(0.2, 1, 0.6);
node.stopAction(action);
```

##### stopActionByTag

停止并且移除指定标签的动作。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1533](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1533) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A tag that indicates the action to be removed.

##### 示例

```js
node.stopAction(1);
```

##### getActionByTag

通过标签获取指定动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1549](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1549) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
var action = node.getActionByTag(1);
```

##### getNumberOfRunningActions

获取运行着的动作加上正在调度运行的动作的总数。<br/>
例如：<br/>
- 如果你正在运行 7 个动作中的 1 个 Sequence，它将返回 1。<br/>
- 如果你正在运行 2 个动作中的 7 个 Sequence，它将返回 7。<br/>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1569](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1569) |


##### 示例

```js
var count = node.getNumberOfRunningActions();
cc.log("Running Action Count: " + count);
```

##### getPosition

获取节点在父节点坐标系中的位置（x, y）。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1614](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1614) |


##### 示例

```js
cc.log("Node Position: " + node.getPosition());
```

##### setPosition

设置节点在父节点坐标系中的位置。<br/>
可以通过两种方式设置坐标点：<br/>
1. 传入 2 个数值 x 和 y。<br/>
2. 传入 cc.v2(x, y) 类型为 cc.Vec2 的对象。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1626) |

###### 参数列表
- `newPosOrX` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> X coordinate for position or the position (x, y) of the node in coordinates
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Y coordinate for position

##### 示例

```js
node.setPosition(cc.v2(0, 0));
node.setPosition(0, 0);

```

##### getScale

获取节点的缩放。当 X 轴和 Y 轴有相同的缩放数值时。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1688](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1688) |


##### 示例

```js
cc.log("Node Scale: " + node.getScale());
```

##### setScale

设置节点的缩放比例，默认值为 1.0。这个函数可以在同一时间修改 X 和 Y 缩放。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1704) |

###### 参数列表
- `scaleX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> scaleX or scale
- `scaleY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setScale(cc.v2(1, 1));
node.setScale(1, 1);
```

##### getContentSize

获取节点自身大小，不受该节点是否被缩放或者旋转的影响。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1734](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1734) |

###### 参数列表
- `ignoreSizeProvider` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if you need to get the original size of the node

##### 示例

```js
cc.log("Content Size: " + node.getContentSize());
```

##### setContentSize

设置节点原始大小，不受该节点是否被缩放或者旋转的影响。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1757](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1757) |

###### 参数列表
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size of the node or The untransformed size's width of the node.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size's height of the node.

##### 示例

```js
node.setContentSize(cc.size(100, 100));
node.setContentSize(100, 100);
```

##### setOpacityModifyRGB

设置更改透明度时是否修改RGB值，

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1801](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1801) |

###### 参数列表
- `opacityValue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### 示例

```js
node.setOpacityModifyRGB(true);
```

##### isOpacityModifyRGB

更改透明度时是否修改RGB值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1822](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1822) |


##### 示例

```js
var hasChange = node.isOpacityModifyRGB();
```

##### getAnchorPoint

获取节点锚点，用百分比表示。<br/>
锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1884](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1884) |


##### 示例

```js
cc.log("Node AnchorPoint: " + node.getAnchorPoint());
```

##### setAnchorPoint

设置锚点的百分比。<br/>
锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br/>
锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br/>
但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br/>
默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br/>
注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1908](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1908) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The anchor point of node or The x axis anchor of node.
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y axis anchor of node.

##### 示例

```js
node.setAnchorPoint(cc.v2(1, 1));
node.setAnchorPoint(1, 1);
```

##### getAnchorPointInPoints

返回锚点的绝对像素位置。<br/>
你只能读它。如果您要修改它，使用 setAnchorPoint。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1950](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1950) |


##### 示例

```js
cc.log("AnchorPointInPoints: " + node.getAnchorPointInPoints());
```

##### getDisplayedOpacity

获取节点显示透明度，
显示透明度和透明度之间的不同之处在于当启用级连透明度时，
显示透明度是基于自身透明度和父节点透明度计算的。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1967](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1967) |


##### 示例

```js
var displayOpacity = node.getDisplayedOpacity();
```

##### getDisplayedColor

获取节点的显示颜色，
显示颜色和颜色之间的不同之处在于当启用级连颜色时，
显示颜色是基于自身颜色和父节点颜色计算的。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1997](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1997) |


##### 示例

```js
var displayColor = node.getDisplayedColor();
```

##### getNodeToParentTransformAR

返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。<br/>
这个矩阵以像素为单位。<br/>
该方法基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2015](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2015) |


##### 示例

```js
var affineTransform = node.getNodeToParentTransformAR();
```

##### getBoundingBox

返回父节坐标系下的轴向对齐的包围盒。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2042) |


##### 示例

```js
var boundingBox = node.getBoundingBox();
```

##### getBoundingBoxToWorld

返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。<br/>
该边框包含自身和已激活的子节点的世界边框。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2058](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2058) |


##### 示例

```js
var newRect = node.getBoundingBoxToWorld();
```

##### getNodeToParentTransform

返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。这个矩阵以像素为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2103](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2103) |


##### 示例

```js
var affineTransform = node.getNodeToParentTransform();
```

##### getNodeToWorldTransform

返回节点到世界坐标系的仿射变换矩阵。矩阵单位是像素。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2126](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2126) |


##### 示例

```js
var affineTransform = node.getNodeToWorldTransform();
```

##### getNodeToWorldTransformAR

返回节点到世界坐标仿射变换矩阵。矩阵单位是像素。<br/>
该方法基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2155) |


##### 示例

```js
var mat = node.getNodeToWorldTransformAR();
```

##### getParentToNodeTransform

返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。<br/>
该矩阵以像素为单位。返回的矩阵是只读的，不能更改。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2186) |


##### 示例

```js
var affineTransform = node.getParentToNodeTransform();
```

##### getWorldToNodeTransform



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2202](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2202) |


##### 示例

```js
var affineTransform = node.getWorldToNodeTransform();
```

##### convertToNodeSpace

将一个点转换到节点 (局部) 坐标系。结果以 Vec2 为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2232](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2232) |

###### 参数列表
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
```

##### convertToWorldSpace

将一个点转换到世界空间坐标系。结果以 Vec2 为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2250](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2250) |

###### 参数列表
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
```

##### convertToNodeSpaceAR

将一个点转换到节点 (局部) 空间坐标系。结果以 Vec2 为单位。<br/>
返回值将基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2269](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2269) |

###### 参数列表
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
```

##### convertToWorldSpaceAR

将一个点转换到世界空间坐标系。结果以 Vec2 为单位。<br/>
返回值将基于世界坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2296](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2296) |

###### 参数列表
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
```

##### convertTouchToNodeSpace

将触摸点转换成本地坐标系中位置。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2323) |

###### 参数列表
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### 示例

```js
var newVec2 = node.convertTouchToNodeSpace(touch);
```

##### convertTouchToNodeSpaceAR

转换一个 cc.Touch（世界坐标）到一个局部坐标，该方法基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2336) |

###### 参数列表
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### 示例

```js
var newVec2 = node.convertTouchToNodeSpaceAR(touch);
```

##### addChild

添加子节点，并且可以修改该节点的 局部 Z 顺序和标签。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2353) |

###### 参数列表
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> A child node
- `localZOrder` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z order for drawing priority. Please refer to setZOrder(int)
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)

##### 示例

```js
node.addChild(newNode, 1, 1001);
```

##### cleanup

停止所有正在播放的动作和计时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2395) |


##### 示例

```js
node.cleanup();
```

##### sortAllChildren

根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2417](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2417) |



##### getPositionX

获取节点 X 轴坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2638](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2638) |


##### 示例

```js
var posX = node.getPositionX();
```

##### setPositionX

设置节点 X 轴坐标。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2647](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2647) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setPositionX(1);
```

##### getPositionY

获取节点 Y 轴坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2656](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2656) |


##### 示例

```js
var posY = node.getPositionY();
```

##### setPositionY

设置节点 Y 轴坐标。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2665](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2665) |

###### 参数列表
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The new position in y axis

##### 示例

```js
node.setPositionY(100);
```

##### getLocalZOrder

获取节点局部 Z 轴顺序。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2674](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2674) |


##### 示例

```js
var localZorder = node.getLocalZOrder();
```

##### setLocalZOrder

LocalZOrder 是 “key” (关键)来分辨节点和它兄弟节点的相关性。
父节点将会通过 LocalZOrder 的值来分辨所有的子节点。
如果两个节点有同样的 LocalZOrder，那么先加入子节点数组的节点将会显示在后加入的节点的前面。
同样的，场景图使用 “In-Order（按顺序）” 遍历数算法来遍历
( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) 并且拥有小于 0 的 LocalZOrder 的值的节点是 “ left ” 子树（左子树）
所以拥有大于 0 的 LocalZOrder 的值得节点是 “ right ”子树（右子树）。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2683](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2683) |

###### 参数列表
- `localZOrder` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setLocalZOrder(1);
```

##### isCascadeOpacityEnabled

返回节点的不透明度值是否影响其子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2706](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2706) |


##### 示例

```js
cc.log(node.isCascadeOpacityEnabled());
```

##### setCascadeOpacityEnabled

启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2715](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2715) |

###### 参数列表
- `cascadeOpacityEnabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### 示例

```js
node.setCascadeOpacityEnabled(true);
```

##### attr

属性配置函数。在 attrs 的所有属性将被设置为节点属性。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:407](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L407) |

###### 参数列表
- `attrs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Properties to be set to node

##### 示例

```js
var attrs = { key: 0, num: 100 };
node.attr(attrs);
```

##### getChildByTag

通过标签获取节点的子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L426) |

###### 参数列表
- `aTag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> An identifier to find the child node.

##### 示例

```js
var child = node.getChildByTag(1001);
```

##### getChildByUuid

通过 uuid 获取节点的子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L447) |

###### 参数列表
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The uuid to find the child node.

##### 示例

```js
var child = node.getChildByUuid(uuid);
```

##### getChildByName

通过名称获取节点的子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:470](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L470) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A name to find the child node.

##### 示例

```js
var child = node.getChildByName("Test Node");
```

##### insertChild

插入子节点到指定位置

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:508](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L508) |

###### 参数列表
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> the child node to be inserted
- `siblingIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the sibling index to place the child in

##### 示例

```js
node.insertChild(child, 2);
```

##### getSiblingIndex

获取同级索引。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:526](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L526) |


##### 示例

```js
var index = node.getSiblingIndex();
```

##### setSiblingIndex

设置节点同级索引。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:543](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L543) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setSiblingIndex(1);
```

##### removeFromParent

从父节点中删除该节点。如果不传入 cleanup 参数或者传入 `true`，那么这个节点上所有绑定的事件、action 都会被删除。<br/>
因此建议调用这个 API 时总是传入 `false` 参数。<br/>
如果这个节点是一个孤节点，那么什么都不会发生。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:574](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L574) |

###### 参数列表
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all actions and callbacks on this node should be removed, false otherwise.

##### 示例

```js
node.removeFromParent();
node.removeFromParent(false);
```

##### removeChild

移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。<br/>

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:598](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L598) |

###### 参数列表
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> The child node which will be removed.
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### 示例

```js
node.removeChild(newNode);
node.removeChild(newNode, false);
```

##### removeChildByTag

通过标签移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L626) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> An integer number that identifies a child node
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### 示例

```js
node.removeChildByTag(1001);
node.removeChildByTag(1001, false);
```

##### removeAllChildren

移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:652](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L652) |

###### 参数列表
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions on all children nodes should be cleanup, false otherwise.

##### 示例

```js
node.removeAllChildren();
node.removeAllChildren(false);
```

##### isChildOf

是否是指定节点的子节点？

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:688](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L688) |

###### 参数列表
- `parent` <a href="../classes/Node.html" class="crosslink">Node</a> 

##### 示例

```js
node.isChildOf(newNode);
```

##### getComponent

获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:711](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L711) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:738](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L738) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:759](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L759) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L780) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### addComponent

向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:816](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L816) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The constructor or the class name of the component to add

##### 示例

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### _addComponentAt

This api should only used by undo system

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:904](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L904) |

###### 参数列表
- `comp` <a href="../classes/Component.html" class="crosslink">Component</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeComponent

删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
如果你已经获得组件引用，你也可以直接调用 component.destroy()

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:950](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L950) |
| 废弃（Deprecated） | please destroy the component to remove it. |

###### 参数列表
- `component` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="../classes/Component.html" class="crosslink">Component</a> The need remove component.

##### 示例

```js
node.removeComponent(cc.Sprite);
var Test = require("Test");
node.removeComponent(Test);
```

##### _getDependComponent



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:978](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L978) |

###### 参数列表
- `depended` <a href="../classes/Component.html" class="crosslink">Component</a> 


##### destroyAllChildren

销毁所有子节点，并释放所有它们对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:1042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L1042) |


##### 示例

```js
node.destroyAllChildren();
```

##### once

注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L351) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### 示例

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

分发事件到事件流中。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:396](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L396) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

该对象直接发送事件， 这种方法不会对事件传播到任何其他对象。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L410) |

###### 参数列表
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs


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




#### 事件

### `position-changed` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `size-changed` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `anchor-changed` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `child-added` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `child-removed` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `child-reorder` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `group-changed` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `touchstart` Event



模块: [cc](../modules/cc.md)





### 索引







### Details




### `active-in-hierarchy-changed` Event



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


注意：此节点激活时，此事件仅从最顶部的节点发出。


### 索引







### Details





