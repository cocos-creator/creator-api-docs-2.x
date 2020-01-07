## `Scene` 类型

继承于 [`Node`](Node.md)


模块: [cc](../modules/cc.md)


cc.Scene 是 cc.Node 的子类，仅作为一个抽象的概念。<br/>
cc.Scene 和 cc.Node 有点不同，用户不应直接修改 cc.Scene。



### 索引

##### 属性（properties）

  - [`autoReleaseAssets`](#autoreleaseassets) `Boolean` 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
  - [`groupIndex`](#groupindex) `Integer` 节点的分组索引。
  - [`group`](#group) `String` 节点的分组。
  - [`position`](#position) `Vec3` 节点在父节点坐标系中的位置（x, y）。
  - [`x`](#x) `Number` 节点 X 轴坐标。
  - [`y`](#y) `Number` 节点 Y 轴坐标。
  - [`z`](#z) `Number` 节点 Z 轴坐标。
  - [`rotation`](#rotation) `Number` 该节点旋转角度。
  - [`angle`](#angle) `Number` 该节点的旋转角度，正值为逆时针方向。
  - [`eulerAngles`](#eulerangles) `Vec3` 该节点的欧拉角度，用于 3D 节点。
  - [`rotationX`](#rotationx) `Number` 该节点 X 轴旋转角度。
  - [`rotationY`](#rotationy) `Number` 该节点 Y 轴旋转角度。
  - [`scale`](#scale) `Number` 节点相对父节点的缩放。
  - [`scaleX`](#scalex) `Number` 节点 X 轴缩放。
  - [`scaleY`](#scaley) `Number` 节点 Y 轴缩放。
  - [`scaleZ`](#scalez) `Number` 节点 Z 轴缩放。
  - [`skewX`](#skewx) `Number` 该节点 X 轴倾斜角度。
  - [`skewY`](#skewy) `Number` 该节点 Y 轴倾斜角度。
  - [`opacity`](#opacity) `Number` 节点透明度，默认值为 255。
  - [`color`](#color) `Color` 节点颜色。
  - [`anchorX`](#anchorx) `Number` 节点 X 轴锚点位置。
  - [`anchorY`](#anchory) `Number` 节点 Y 轴锚点位置。
  - [`width`](#width) `Number` 节点宽度。
  - [`height`](#height) `Number` 节点高度。
  - [`zIndex`](#zindex) `Number` zIndex 是用来对节点进行排序的关键属性，它决定一个节点在兄弟节点之间的位置。
  - [`is3DNode`](#is3dnode) `Boolean` !en
  - [`cascadeOpacity`](#cascadeopacity) `Boolean` 节点的不透明度值是否影响其子节点，默认值为 true。
  - [`_components`](#components) `Component[]` 
  - [`_prefab`](#prefab) `PrefabInfo` The PrefabInfo object
  - [`_persistNode`](#persistnode) `Boolean` If true, the node is an persist node which won't be destroyed during scene transition....
  - [`name`](#name) `String` 该节点名称。
  - [`uuid`](#uuid) `String` 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。
  - [`children`](#children) `Node[]` 节点的所有子节点。
  - [`childrenCount`](#childrencount) `Number` 节点的子节点数量。
  - [`active`](#active) `Boolean` 当前节点的自身激活状态。
  - [`activeInHierarchy`](#activeinhierarchy) `Boolean` 表示此节点是否在场景中激活。
  - [`__eventTargets`](#eventtargets) `EventTarget[]` Register all related EventTargets,...
  - [`parent`](#parent) `Node` 该节点的父节点。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`constructor`](#constructor) 
  - [`on`](#on) 在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的 this 对象。
  - [`once`](#once) 注册节点的特定事件类型回调，回调会在第一时间被触发后删除自身。
  - [`off`](#off) 删除之前与同类型，回调，目标或 useCapture 注册的回调。
  - [`targetOff`](#targetoff) 移除目标上的所有注册事件。
  - [`hasEventListener`](#haseventlistener) 检查事件目标对象是否有为特定类型的事件注册的回调。
  - [`emit`](#emit) 通过事件名发送自定义事件
  - [`dispatchEvent`](#dispatchevent) 分发事件到事件流中。
  - [`pauseSystemEvents`](#pausesystemevents) 暂停当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
  - [`resumeSystemEvents`](#resumesystemevents) 恢复当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
  - [`_getCapturingTargets`](#getcapturingtargets) Get all the targets listening to the supplied type of event in the target's capturing phase....
  - [`_getBubblingTargets`](#getbubblingtargets) Get all the targets listening to the supplied type of event in the target's bubbling phase....
  - [`runAction`](#runaction) 执行并返回该执行的动作。
  - [`pauseAllActions`](#pauseallactions) 暂停本节点上所有正在运行的动作。
  - [`resumeAllActions`](#resumeallactions) 恢复运行本节点上所有暂停的动作。
  - [`stopAllActions`](#stopallactions) 停止并且移除所有正在运行的动作列表。
  - [`stopAction`](#stopaction) 停止并移除指定的动作。
  - [`stopActionByTag`](#stopactionbytag) 停止并且移除指定标签的动作。
  - [`getActionByTag`](#getactionbytag) 通过标签获取指定动作。
  - [`getNumberOfRunningActions`](#getnumberofrunningactions) 获取运行着的动作加上正在调度运行的动作的总数。
  - [`getPosition`](#getposition) 获取节点在父节点坐标系中的位置（x, y, z）。
  - [`setPosition`](#setposition) 设置节点在父节点坐标系中的位置。
  - [`getScale`](#getscale) 获取节点的缩放，需要传一个 cc.Vec2 或者 cc.Vec3 作为参数来接收返回值。
  - [`setScale`](#setscale) 设置节点在本地坐标系中坐标轴上的缩放比例。
  - [`getRotation`](#getrotation) 获取该节点的 quaternion 旋转角度，需要传一个 cc.Quat 作为参数来接收返回值。
  - [`setRotation`](#setrotation) 设置该节点的 quaternion 旋转角度。
  - [`getContentSize`](#getcontentsize) 获取节点自身大小，不受该节点是否被缩放或者旋转的影响。
  - [`setContentSize`](#setcontentsize) 设置节点原始大小，不受该节点是否被缩放或者旋转的影响。
  - [`getAnchorPoint`](#getanchorpoint) 获取节点锚点，用百分比表示。
  - [`setAnchorPoint`](#setanchorpoint) 设置锚点的百分比。
  - [`lookAt`](#lookat) 通过观察目标来设置 rotation，一般用于 Camera Node 上
  - [`getLocalMatrix`](#getlocalmatrix) 返回局部空间坐标系的矩阵，基于父节点坐标系。
  - [`getWorldMatrix`](#getworldmatrix) 返回世界空间坐标系的矩阵。
  - [`convertToNodeSpaceAR`](#converttonodespacear) 将一个点转换到节点 (局部) 空间坐标系。
  - [`convertToWorldSpaceAR`](#converttoworldspacear) 将节点坐标系下的一个点转换到世界空间坐标系。
  - [`convertToNodeSpace`](#converttonodespace) 将一个点转换到节点 (局部) 坐标系，并加上锚点的坐标。
  - [`convertToWorldSpace`](#converttoworldspace) 将一个相对于节点左下角的坐标位置转换到世界空间坐标系。
  - [`getNodeToParentTransform`](#getnodetoparenttransform) 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。
  - [`getNodeToParentTransformAR`](#getnodetoparenttransformar) 返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。
  - [`getNodeToWorldTransform`](#getnodetoworldtransform) 返回节点到世界坐标系的仿射变换矩阵。
  - [`getNodeToWorldTransformAR`](#getnodetoworldtransformar) 返回节点到世界坐标仿射变换矩阵。
  - [`getParentToNodeTransform`](#getparenttonodetransform) 返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。
  - [`getWorldToNodeTransform`](#getworldtonodetransform) 
  - [`convertTouchToNodeSpace`](#converttouchtonodespace) 将触摸点转换成本地坐标系中位置。
  - [`convertTouchToNodeSpaceAR`](#converttouchtonodespacear) 转换一个 cc.Touch（世界坐标）到一个局部坐标，该方法基于节点坐标。
  - [`getBoundingBox`](#getboundingbox) 返回父节坐标系下的轴向对齐的包围盒。
  - [`getBoundingBoxToWorld`](#getboundingboxtoworld) 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。
  - [`addChild`](#addchild) 添加子节点，并且可以修改该节点的 局部 Z 顺序和名字。
  - [`cleanup`](#cleanup) 停止所有正在播放的动作和计时器。
  - [`sortAllChildren`](#sortallchildren) 根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。
  - [`getDisplayedOpacity`](#getdisplayedopacity) 显示透明度是基于自身透明度和父节点透明度计算的。
  - [`getDisplayedColor`](#getdisplayedcolor) 显示颜色是基于自身颜色和父节点颜色计算的。
  - [`isCascadeOpacityEnabled`](#iscascadeopacityenabled) 返回节点的不透明度值是否影响其子节点。
  - [`setCascadeOpacityEnabled`](#setcascadeopacityenabled) 启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。
  - [`setOpacityModifyRGB`](#setopacitymodifyrgb) 透明度影响颜色配置已经被废弃...
  - [`isOpacityModifyRGB`](#isopacitymodifyrgb) 获取更改透明度时是否修改RGB值。
  - [`getParent`](#getparent) 获取该节点的父节点。
  - [`setParent`](#setparent) 设置该节点的父节点。
  - [`attr`](#attr) 属性配置函数。
  - [`getChildByUuid`](#getchildbyuuid) 通过 uuid 获取节点的子节点。
  - [`getChildByName`](#getchildbyname) 通过名称获取节点的子节点。
  - [`insertChild`](#insertchild) 插入子节点到指定位置
  - [`getSiblingIndex`](#getsiblingindex) 获取同级索引。
  - [`setSiblingIndex`](#setsiblingindex) 设置节点同级索引。
  - [`walk`](#walk) 遍历该节点的子树里的所有节点并按规则执行回调函数。
  - [`removeFromParent`](#removefromparent) 从父节点中删除该节点。
  - [`removeChild`](#removechild) 移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。
  - [`removeAllChildren`](#removeallchildren) 移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。
  - [`isChildOf`](#ischildof) 是否是指定节点的子节点？
  - [`getComponent`](#getcomponent) 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。
  - [`getComponents`](#getcomponents) 返回节点上指定类型的所有组件。
  - [`getComponentInChildren`](#getcomponentinchildren) 递归查找所有子节点中第一个匹配指定类型的组件。
  - [`getComponentsInChildren`](#getcomponentsinchildren) 递归查找自身或所有子节点中指定类型的组件
  - [`addComponent`](#addcomponent) 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
  - [`_addComponentAt`](#addcomponentat) This api should only used by undo system
  - [`removeComponent`](#removecomponent) 删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
  - [`_getDependComponent`](#getdependcomponent) 
  - [`destroyAllChildren`](#destroyallchildren) 销毁所有子节点，并释放所有它们对其它对象的引用。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) Clear all references in the instance....
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object. (Editor Only)
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### 事件

  - [`position-changed`](#position-changed) 位置变动监听事件, 通过 this.node.on(cc.Node.EventType.POSITION_CHANGED, callback, this); 进行监听。
  - [`size-changed`](#size-changed) 尺寸变动监听事件，通过 this.node.on(cc.Node.EventType.SIZE_CHANGED, callback, this); 进行监听。
  - [`anchor-changed`](#anchor-changed) 锚点变动监听事件，通过 this.node.on(cc.Node.EventType.ANCHOR_CHANGED, callback, this); 进行监听。
  - [`child-added`](#child-added) 增加子节点监听事件，通过 this.node.on(cc.Node.EventType.CHILD_ADDED, callback, this); 进行监听。
  - [`child-removed`](#child-removed) 删除子节点监听事件，通过 this.node.on(cc.Node.EventType.CHILD_REMOVED, callback, this); 进行监听。
  - [`child-reorder`](#child-reorder) 子节点顺序变动监听事件，通过 this.node.on(cc.Node.EventType.CHILD_REORDER, callback, this); 进行监听。
  - [`group-changed`](#group-changed) 节点分组变动监听事件，通过 this.node.on(cc.Node.EventType.GROUP_CHANGED, callback, this); 进行监听。
  - [`active-in-hierarchy-changed`](#active-in-hierarchy-changed) 注意：此节点激活时，此事件仅从最顶部的节点发出。


### Details


#### 属性（properties）


##### autoReleaseAssets

> 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/CCScene.js:51](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCScene.js#L51) |



##### groupIndex

> 节点的分组索引。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>

| meta | description |
|------|-------------|
| 类型 | Integer |
| 定义于 | [cocos2d/core/CCNode.js:879](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L879) |



##### group

> 节点的分组。<br/>
节点的分组将关系到节点的碰撞组件可以与哪些碰撞组件相碰撞。<br/>

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/CCNode.js:905](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L905) |



##### position

> 节点在父节点坐标系中的位置（x, y）。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/CCNode.js:928](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L928) |

##### 示例

```js
cc.log("Node Position: " + node.position);
```


##### x

> 节点 X 轴坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:936](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L936) |

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
| 定义于 | [cocos2d/core/CCNode.js:979](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L979) |

##### 示例

```js
node.y = 100;
cc.log("Node Position Y: " + node.y);
```


##### z

> 节点 Z 轴坐标。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1022](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1022) |



##### rotation

> 该节点旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1051](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1051) |
| 废弃（Deprecated） | since v2.1 |

##### 示例

```js
node.rotation = 90;
cc.log("Node Rotation: " + node.rotation);
```


##### angle

> 该节点的旋转角度，正值为逆时针方向。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1076](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1076) |



##### eulerAngles

> 该节点的欧拉角度，用于 3D 节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/CCNode.js:1099](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1099) |

##### 示例

```js
node.is3DNode = true;
node.eulerAngles = cc.v3(45, 45, 45);
cc.log("Node eulerAngles (X, Y, Z): " + node.eulerAngles.toString());
```


##### rotationX

> 该节点 X 轴旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1110](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1110) |
| 废弃（Deprecated） | since v2.1 |

##### 示例

```js
node.is3DNode = true;
node.eulerAngles = cc.v3(45, 0, 0);
cc.log("Node eulerAngles X: " + node.eulerAngles.x);
```


##### rotationY

> 该节点 Y 轴旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1150](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1150) |
| 废弃（Deprecated） | since v2.1 |

##### 示例

```js
node.is3DNode = true;
node.eulerAngles = cc.v3(0, 45, 0);
cc.log("Node eulerAngles Y: " + node.eulerAngles.y);
```


##### scale

> 节点相对父节点的缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1220](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1220) |

##### 示例

```js
node.scale = 1;
```


##### scaleX

> 节点 X 轴缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1237](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1237) |

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
| 定义于 | [cocos2d/core/CCNode.js:1262](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1262) |

##### 示例

```js
node.scaleY = 0.5;
cc.log("Node Scale Y: " + node.scaleY);
```


##### scaleZ

> 节点 Z 轴缩放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1287](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1287) |



##### skewX

> 该节点 X 轴倾斜角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1310](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1310) |
| 废弃（Deprecated） | since v2.2.1 |

##### 示例

```js
node.skewX = 0;
cc.log("Node SkewX: " + node.skewX);
```


##### skewY

> 该节点 Y 轴倾斜角度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1335](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1335) |
| 废弃（Deprecated） | since v2.2.1 |

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
| 定义于 | [cocos2d/core/CCNode.js:1360](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1360) |

##### 示例

```js
node.opacity = 255;
```


##### color

> 节点颜色。默认为白色，数值为：（255，255，255）。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/CCNode.js:1385](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1385) |

##### 示例

```js
node.color = new cc.Color(255, 255, 255);
```


##### anchorX

> 节点 X 轴锚点位置。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1413](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1413) |

##### 示例

```js
node.anchorX = 0;
```


##### anchorY

> 节点 Y 轴锚点位置。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1436](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1436) |

##### 示例

```js
node.anchorY = 0;
```


##### width

> 节点宽度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1459](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1459) |

##### 示例

```js
node.width = 100;
```


##### height

> 节点高度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1489](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1489) |

##### 示例

```js
node.height = 100;
```


##### zIndex

> zIndex 是用来对节点进行排序的关键属性，它决定一个节点在兄弟节点之间的位置。<br/>
zIndex 的取值应该介于 cc.macro.MIN_ZINDEX 和 cc.macro.MAX_ZINDEX 之间
父节点主要根据节点的 zIndex 和添加次序来排序，拥有更高 zIndex 的节点将被排在后面，如果两个节点的 zIndex 一致，先添加的节点会稳定排在另一个节点之前。<br/>
节点在 children 中的顺序决定了其渲染顺序。父节点永远在所有子节点之前被渲染

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCNode.js:1519](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1519) |

##### 示例

```js
node.zIndex = 1;
cc.log("Node zIndex: " + node.zIndex);
```


##### is3DNode

> !en
Switch 2D/3D node. The 2D nodes will run faster.
!zh
切换 2D/3D 节点，2D 节点会有更高的运行效率

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/CCNode.js:1559](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1559) |



##### cascadeOpacity

> 透明度级联功能从 v2.0 开始已移除
节点的不透明度值是否影响其子节点，默认值为 true。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/CCNode.js:3858](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3858) |
| 废弃（Deprecated） | since v2.0 |



##### _components

> 

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.html" class="crosslink">Component[]</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:151](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L151) |



##### _prefab

> The PrefabInfo object

| meta | description |
|------|-------------|
| 类型 | PrefabInfo |
| 定义于 | [cocos2d/core/utils/base-node.js:160](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L160) |



##### _persistNode

> If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:168](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L168) |



##### name

> 该节点名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:192](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L192) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:217](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L217) |

##### 示例

```js
cc.log("Node Uuid: " + node.uuid);
```


##### children

> 节点的所有子节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node[]</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:232](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L232) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:250](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L250) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:266](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L266) |

##### 示例

```js
node.active = false;
```


##### activeInHierarchy

> 表示此节点是否在场景中激活。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:300](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L300) |

##### 示例

```js
cc.log("activeInHierarchy: " + node.activeInHierarchy);
```


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/EventTarget.html" class="crosslink">EventTarget[]</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:326](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L326) |



##### parent

> 该节点的父节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/utils/base-node.js:335](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L335) |

##### 示例

```js
cc.log("Node Parent: " + node.parent);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L83) |



##### isValid

> 表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。如果希望判断当前帧是否调用过 `destroy`，请使用 `cc.isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L258) |

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


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:1577](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1577) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### on

在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的 this 对象。<br/>
鼠标或触摸事件会被系统调用 dispatchEvent 方法触发，触发的过程包含三个阶段：<br/>
1. 捕获阶段：派发事件给捕获目标（通过 `_getCapturingTargets` 获取），比如，节点树中注册了捕获阶段的父节点，从根节点开始派发直到目标节点。<br/>
2. 目标阶段：派发给目标节点的监听器。<br/>
3. 冒泡阶段：派发事件给冒泡目标（通过 `_getBubblingTargets` 获取），比如，节点树中注册了冒泡阶段的父节点，从目标节点开始派发直到根节点。<br/>
同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。<br/>
推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 cc.eventManager。<br/>
你也可以注册自定义事件到节点上，并通过 emit 方法触发此类事件，对于这类事件，不会发生捕获冒泡阶段，只会直接派发给注册在该节点上的监听器<br/>
你可以通过在 emit 方法调用时在 type 之后传递额外的参数作为事件回调的参数列表

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [cocos2d/core/CCNode.js:1996](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L1996) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="../classes/Node.EventType.html" class="crosslink">Node.EventType</a> A string representing the event type to listen for.<br>See Node/EventTyupe/POSITION_CHANGED for all builtin events.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched. The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> &#124; Any event or first argument when emit
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.

##### 示例

```js
this.node.on(cc.Node.EventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(cc.Node.EventType.TOUCH_START, callback, this);
node.on(cc.Node.EventType.TOUCH_MOVE, callback, this);
node.on(cc.Node.EventType.TOUCH_END, callback, this);
node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this);
node.on(cc.Node.EventType.ANCHOR_CHANGED, callback);
node.on(cc.Node.EventType.COLOR_CHANGED, callback);
```

##### once

注册节点的特定事件类型回调，回调会在第一时间被触发后删除自身。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2075](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2075) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> &#124; Any event or first argument when emit
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### 示例

```js
node.once(cc.Node.EventType.ANCHOR_CHANGED, callback);
```

##### off

删除之前与同类型，回调，目标或 useCapture 注册的回调。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2142](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2142) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.

##### 示例

```js
this.node.off(cc.Node.EventType.TOUCH_START, this.memberFunction, this);
node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
node.off(cc.Node.EventType.ANCHOR_CHANGED, callback, this);
```

##### targetOff

移除目标上的所有注册事件。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2230](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2230) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related callbacks

##### 示例

```js
node.targetOff(target);
```

##### hasEventListener

检查事件目标对象是否有为特定类型的事件注册的回调。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCNode.js:2281](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2281) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### emit

通过事件名发送自定义事件

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2299](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2299) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument in callback
- `arg2` Any Second argument in callback
- `arg3` Any Third argument in callback
- `arg4` Any Fourth argument in callback
- `arg5` Any Fifth argument in callback

##### 示例

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

分发事件到事件流中。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2323](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2323) |

###### 参数列表
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### pauseSystemEvents

暂停当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将暂停本节点和它的子树上所有节点的节点系统事件。
参考：https://www.cocos.com/docs/creator/scripting/internal-events.html

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2337](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2337) |

###### 参数列表
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to pause node system events on the sub node tree.

##### 示例

```js
node.pauseSystemEvents(true);
```

##### resumeSystemEvents

恢复当前节点上注册的所有节点系统事件，节点系统事件包含触摸和鼠标事件。
如果传递 recursive 为 true，那么这个 API 将恢复本节点和它的子树上所有节点的节点系统事件。
参考：https://www.cocos.com/docs/creator/scripting/internal-events.html

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2353](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2353) |

###### 参数列表
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to resume node system events on the sub node tree.

##### 示例

```js
node.resumeSystemEvents(true);
```

##### _getCapturingTargets

Get all the targets listening to the supplied type of event in the target's capturing phase.
The capturing phase comprises the journey from the root to the last node BEFORE the event target's node.
The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.

Subclasses can override this method to make event propagable.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2428](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2428) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets

##### 示例

```js
----------
Subclasses can override this method to make event propagable
```js
for (var target = this._parent; target; target = target._parent) {
    if (target._capturingListeners && target._capturingListeners.hasEventListener(type)) {
        array.push(target);
    }
}

```

##### _getBubblingTargets

Get all the targets listening to the supplied type of event in the target's bubbling phase.
The bubbling phase comprises any SUBSEQUENT nodes encountered on the return trip to the root of the tree.
The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.

Subclasses can override this method to make event propagable.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2450](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2450) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets


##### runAction

执行并返回该执行的动作。该节点将会变成动作的目标。<br/>
调用 runAction 时，节点自身处于不激活状态将不会有任何效果。<br/>
注意：你不应该修改 runAction 后的动作，将无法发挥作用，如果想进行修改，请在定义 action 时加入。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> 
| 定义于 | [cocos2d/core/CCNode.js:2472](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2472) |

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
| 定义于 | [cocos2d/core/CCNode.js:2501](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2501) |


##### 示例

```js
node.pauseAllActions();
```

##### resumeAllActions

恢复运行本节点上所有暂停的动作。和 `cc.director.getActionManager().resumeTarget(node);` 等价。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2512](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2512) |


##### 示例

```js
node.resumeAllActions();
```

##### stopAllActions

停止并且移除所有正在运行的动作列表。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2523](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2523) |


##### 示例

```js
node.stopAllActions();
```

##### stopAction

停止并移除指定的动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2534](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2534) |

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
| 定义于 | [cocos2d/core/CCNode.js:2547](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2547) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A tag that indicates the action to be removed.

##### 示例

```js
node.stopActionByTag(1);
```

##### getActionByTag

通过标签获取指定动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> 
| 定义于 | [cocos2d/core/CCNode.js:2563](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2563) |

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
| 定义于 | [cocos2d/core/CCNode.js:2583](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2583) |


##### 示例

```js
var count = node.getNumberOfRunningActions();
cc.log("Running Action Count: " + count);
```

##### getPosition

获取节点在父节点坐标系中的位置（x, y, z）。
你可以传一个 cc.Vec2 或者 cc.Vec3 作为参数来接收返回值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/CCNode.js:2609](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2609) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The return value to receive position

##### 示例

```js
cc.log("Node Position: " + node.getPosition());
```

##### setPosition

设置节点在父节点坐标系中的位置。<br/>
可以通过下面的方式设置坐标点：<br/>
1. 传入 2 个数值 x, y。<br/>
2. 传入 cc.v2(x, y) 类型为 cc.Vec2 的对象。
3. 对于 3D 节点可以传入 3 个数值 x, y, z。<br/>
4. 对于 3D 节点可以传入 cc.v3(x, y, z) 类型为 cc.Vec3 的对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2627](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2627) |

###### 参数列表
- `newPosOrX` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> X coordinate for position or the position (x, y, z) of the node in coordinates
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Y coordinate for position
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z coordinate for position


##### getScale

获取节点的缩放，需要传一个 cc.Vec2 或者 cc.Vec3 作为参数来接收返回值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/CCNode.js:2684](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2684) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 

##### 示例

```js
cc.log("Node Scale: " + node.getScale(cc.v3()));
```

##### setScale

设置节点在本地坐标系中坐标轴上的缩放比例。
2D 节点可以操作两个坐标轴，而 3D 节点可以操作三个坐标轴。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2705](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2705) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> scaleX or scale object
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setScale(cc.v2(2, 2));
node.setScale(cc.v3(2, 2, 2)); // for 3D node
node.setScale(2);
```

##### getRotation

获取该节点的 quaternion 旋转角度，需要传一个 cc.Quat 作为参数来接收返回值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/CCNode.js:2748](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2748) |

###### 参数列表
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### setRotation

设置该节点的 quaternion 旋转角度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2770](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2770) |

###### 参数列表
- `quat` cc.Quat &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Quaternion object represents the rotation or the x value of quaternion
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> y value of quternion
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> z value of quternion
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> w value of quternion


##### getContentSize

获取节点自身大小，不受该节点是否被缩放或者旋转的影响。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/CCNode.js:2814](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2814) |


##### 示例

```js
cc.log("Content Size: " + node.getContentSize());
```

##### setContentSize

设置节点原始大小，不受该节点是否被缩放或者旋转的影响。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:2829](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2829) |

###### 参数列表
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size of the node or The untransformed size's width of the node.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size's height of the node.

##### 示例

```js
node.setContentSize(cc.size(100, 100));
node.setContentSize(100, 100);
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
| 定义于 | [cocos2d/core/CCNode.js:2872](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2872) |


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
| 定义于 | [cocos2d/core/CCNode.js:2896](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L2896) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The anchor point of node or The x axis anchor of node.
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y axis anchor of node.

##### 示例

```js
node.setAnchorPoint(cc.v2(1, 1));
node.setAnchorPoint(1, 1);
```

##### lookAt

通过观察目标来设置 rotation，一般用于 Camera Node 上

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3133](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3133) |

###### 参数列表
- `pos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `up` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> default is (0,1,0)


##### getLocalMatrix

返回局部空间坐标系的矩阵，基于父节点坐标系。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/CCNode.js:3200](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3200) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The matrix object to be filled with data

##### 示例

```js
let mat4 = cc.mat4();
node.getLocalMatrix(mat4);
```

##### getWorldMatrix

返回世界空间坐标系的矩阵。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| 定义于 | [cocos2d/core/CCNode.js:3216](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3216) |

###### 参数列表
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> The matrix object to be filled with data

##### 示例

```js
let mat4 = cc.mat4();
node.getWorldMatrix(mat4);
```

##### convertToNodeSpaceAR

将一个点转换到节点 (局部) 空间坐标系。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCNode.js:3232](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3232) |

###### 参数列表
- `worldPoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
var newVec3 = node.convertToNodeSpaceAR(cc.v3(100, 100, 100));
```

##### convertToWorldSpaceAR

将节点坐标系下的一个点转换到世界空间坐标系。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCNode.js:3261](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3261) |

###### 参数列表
- `nodePoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
var newVec3 = node.convertToWorldSpaceAR(cc.v3(100, 100, 100));
```

##### convertToNodeSpace

将一个点转换到节点 (局部) 坐标系，并加上锚点的坐标。<br/>
也就是说返回的坐标是相对于节点包围盒左下角的坐标。<br/>
这个 API 的设计是为了和 cocos2d-x 中行为一致，更多情况下你可能需要使用 convertToNodeSpaceAR。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCNode.js:3289](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3289) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
```

##### convertToWorldSpace

将一个相对于节点左下角的坐标位置转换到世界空间坐标系。
这个 API 的设计是为了和 cocos2d-x 中行为一致，更多情况下你可能需要使用 convertToWorldSpaceAR

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCNode.js:3313](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3313) |
| 废弃（Deprecated） | since v2.1.3 |

###### 参数列表
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### 示例

```js
var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
```

##### getNodeToParentTransform

返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。这个矩阵以像素为单位。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3334](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3334) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToParentTransform(affineTransform);
```

##### getNodeToParentTransformAR

返回这个将节点（局部）的空间坐标系转换成父节点的空间坐标系的矩阵。<br/>
这个矩阵以像素为单位。<br/>
该方法基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3362](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3362) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToParentTransformAR(affineTransform);
```

##### getNodeToWorldTransform

返回节点到世界坐标系的仿射变换矩阵。矩阵单位是像素。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3387](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3387) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToWorldTransform(affineTransform);
```

##### getNodeToWorldTransformAR

返回节点到世界坐标仿射变换矩阵。矩阵单位是像素。<br/>
该方法基于节点坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3414](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3414) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToWorldTransformAR(affineTransform);
```

##### getParentToNodeTransform

返回将父节点的坐标系转换成节点（局部）的空间坐标系的矩阵。<br/>
该矩阵以像素为单位。返回的矩阵是只读的，不能更改。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3437](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3437) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getParentToNodeTransform(affineTransform);
```

##### getWorldToNodeTransform



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/CCNode.js:3461](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3461) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### 示例

```js
let affineTransform = cc.AffineTransform.create();
node.getWorldToNodeTransform(affineTransform);
```

##### convertTouchToNodeSpace

将触摸点转换成本地坐标系中位置。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/CCNode.js:3481](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3481) |
| 废弃（Deprecated） | since v2.0 |

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
| 定义于 | [cocos2d/core/CCNode.js:3495](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3495) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### 示例

```js
var newVec2 = node.convertTouchToNodeSpaceAR(touch);
```

##### getBoundingBox

返回父节坐标系下的轴向对齐的包围盒。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/CCNode.js:3509](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3509) |


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
| 定义于 | [cocos2d/core/CCNode.js:3531](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3531) |


##### 示例

```js
var newRect = node.getBoundingBoxToWorld();
```

##### addChild

添加子节点，并且可以修改该节点的 局部 Z 顺序和名字。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3589](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3589) |

###### 参数列表
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> A child node
- `zIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z order for drawing priority. Please refer to zIndex property
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A name to identify the node easily. Please refer to name property

##### 示例

```js
node.addChild(newNode, 1, "node");
```

##### cleanup

停止所有正在播放的动作和计时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3619](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3619) |


##### 示例

```js
node.cleanup();
```

##### sortAllChildren

根据子节点的 zIndex 和 arrivalOrder 进行排序，正常情况下开发者不需要手动调用这个函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3641](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3641) |



##### getDisplayedOpacity

获取节点显示透明度，
显示透明度和透明度之间的不同之处在于当启用级连透明度时，
显示透明度是基于自身透明度和父节点透明度计算的。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/CCNode.js:3830](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3830) |
| 废弃（Deprecated） | since v2.0, please use opacity property, cascade opacity is removed |



##### getDisplayedColor

获取节点的显示颜色，
显示颜色和颜色之间的不同之处在于当启用级连颜色时，
显示颜色是基于自身颜色和父节点颜色计算的。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/CCNode.js:3844](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3844) |
| 废弃（Deprecated） | since v2.0, please use color property, cascade color is removed |



##### isCascadeOpacityEnabled

透明度级联功能从 v2.0 开始已移除
返回节点的不透明度值是否影响其子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCNode.js:3868](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3868) |
| 废弃（Deprecated） | since v2.0 |



##### setCascadeOpacityEnabled

透明度级联功能从 v2.0 开始已移除
启用或禁用级连不透明度，如果级连启用，子节点的不透明度将是父不透明度乘上它自己的不透明度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3878](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3878) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `cascadeOpacityEnabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setOpacityModifyRGB

透明度影响颜色配置已经被废弃
设置更改透明度时是否修改RGB值，

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCNode.js:3888](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3888) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `opacityValue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isOpacityModifyRGB

透明度影响颜色配置已经被废弃
获取更改透明度时是否修改RGB值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCNode.js:3899](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/CCNode.js#L3899) |
| 废弃（Deprecated） | since v2.0 |



##### getParent

获取该节点的父节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/core/utils/base-node.js:343](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L343) |


##### 示例

```js
var parent = this.node.getParent();
```

##### setParent

设置该节点的父节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:355](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L355) |

###### 参数列表
- `value` <a href="../classes/Node.html" class="crosslink">Node</a> 

##### 示例

```js
node.setParent(newNode);
```

##### attr

属性配置函数。在 attrs 的所有属性将被设置为节点属性。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:411](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L411) |

###### 参数列表
- `attrs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Properties to be set to node

##### 示例

```js
var attrs = { key: 0, num: 100 };
node.attr(attrs);
```

##### getChildByUuid

通过 uuid 获取节点的子节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/core/utils/base-node.js:430](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L430) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:453](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L453) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:491](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L491) |

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
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/base-node.js:509](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L509) |


##### 示例

```js
var index = node.getSiblingIndex();
```

##### setSiblingIndex

设置节点同级索引。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:526](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L526) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
node.setSiblingIndex(1);
```

##### walk

遍历该节点的子树里的所有节点并按规则执行回调函数。
对子树中的所有节点，包含当前节点，会执行两次回调，prefunc 会在访问它的子节点之前调用，postfunc 会在访问所有子节点之后调用。
这个函数的实现不是基于递归的，而是基于栈展开递归的方式。
请不要在 walk 过程中对任何其他的节点嵌套执行 walk。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:557](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L557) |

###### 参数列表
- `prefunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to process node when reach the node for the first time
	- `target` <a href="../classes/_BaseNode.html" class="crosslink">_BaseNode</a> The current visiting node
- `postfunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to process node when re-visit the node after walked all children in its sub tree
	- `target` <a href="../classes/_BaseNode.html" class="crosslink">_BaseNode</a> The current visiting node

##### 示例

```js
node.walk(function (target) {
    console.log('Walked through node ' + target.name + ' for the first time');
}, function (target) {
    console.log('Walked through node ' + target.name + ' after walked all children in its sub tree');
});
```

##### removeFromParent

从父节点中删除该节点。如果不传入 cleanup 参数或者传入 `true`，那么这个节点上所有绑定的事件、action 都会被删除。<br/>
因此建议调用这个 API 时总是传入 `false` 参数。<br/>
如果这个节点是一个孤节点，那么什么都不会发生。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:671](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L671) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:695](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L695) |

###### 参数列表
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> The child node which will be removed.
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### 示例

```js
node.removeChild(newNode);
node.removeChild(newNode, false);
```

##### removeAllChildren

移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
如果 cleanup 参数不传入，默认为 true 表示清理。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:723](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L723) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:754](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L754) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:777](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L777) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
// get sprite component
var sprite = node.getComponent(cc.Sprite);
// get custom test class
var test = node.getComponent("Test");
```

##### getComponents

返回节点上指定类型的所有组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| 定义于 | [cocos2d/core/utils/base-node.js:804](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L804) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:825](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L825) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:846](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L846) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:882](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L882) |

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
| 定义于 | [cocos2d/core/utils/base-node.js:971](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L971) |

###### 参数列表
- `comp` <a href="../classes/Component.html" class="crosslink">Component</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeComponent

删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
如果你已经获得组件引用，你也可以直接调用 component.destroy()

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:1019](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L1019) |
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
| 定义于 | [cocos2d/core/utils/base-node.js:1047](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L1047) |

###### 参数列表
- `depended` <a href="../classes/Component.html" class="crosslink">Component</a> 


##### destroyAllChildren

销毁所有子节点，并释放所有它们对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/base-node.js:1093](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/utils/base-node.js#L1093) |


##### 示例

```js
node.destroyAllChildren();
```

##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L293) |


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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:460](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L460) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:485](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L485) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:495](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCObject.js#L495) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### 事件

### `position-changed` Event



模块: [cc](../modules/cc.md)


位置变动监听事件, 通过 this.node.on(cc.Node.EventType.POSITION_CHANGED, callback, this); 进行监听。


### 索引







### Details




### `size-changed` Event



模块: [cc](../modules/cc.md)


尺寸变动监听事件，通过 this.node.on(cc.Node.EventType.SIZE_CHANGED, callback, this); 进行监听。


### 索引







### Details




### `anchor-changed` Event



模块: [cc](../modules/cc.md)


锚点变动监听事件，通过 this.node.on(cc.Node.EventType.ANCHOR_CHANGED, callback, this); 进行监听。


### 索引







### Details




### `child-added` Event



模块: [cc](../modules/cc.md)


增加子节点监听事件，通过 this.node.on(cc.Node.EventType.CHILD_ADDED, callback, this); 进行监听。


### 索引







### Details




### `child-removed` Event



模块: [cc](../modules/cc.md)


删除子节点监听事件，通过 this.node.on(cc.Node.EventType.CHILD_REMOVED, callback, this); 进行监听。


### 索引







### Details




### `child-reorder` Event



模块: [cc](../modules/cc.md)


子节点顺序变动监听事件，通过 this.node.on(cc.Node.EventType.CHILD_REORDER, callback, this); 进行监听。


### 索引







### Details




### `group-changed` Event



模块: [cc](../modules/cc.md)


节点分组变动监听事件，通过 this.node.on(cc.Node.EventType.GROUP_CHANGED, callback, this); 进行监听。


### 索引







### Details




### `active-in-hierarchy-changed` Event



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


注意：此节点激活时，此事件仅从最顶部的节点发出。


### 索引







### Details





