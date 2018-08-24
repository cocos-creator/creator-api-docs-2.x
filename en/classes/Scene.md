## `Scene` Class

Extends [`Node`](Node.md)


Module: [cc](../modules/cc.md)


cc.Scene is a subclass of cc.Node that is used only as an abstract concept.<br/>
cc.Scene and cc.Node are almost identical with the difference that users can not modify cc.Scene manually.


### Index

##### Properties

  - [`autoReleaseAssets`](#autoreleaseassets) `Boolean` Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
  - [`groupIndex`](#groupindex) `Integer` Group index of node....
  - [`group`](#group) `String` Group of node....
  - [`position`](#position) `Vec2` The position (x, y) of the node in its parent's coordinates.
  - [`x`](#x) `Number` x axis position of node.
  - [`y`](#y) `Number` y axis position of node.
  - [`rotation`](#rotation) `Number` Rotation of node.
  - [`rotationX`](#rotationx) `Number` Rotation on x axis.
  - [`rotationY`](#rotationy) `Number` Rotation on y axis.
  - [`scale`](#scale) `Number` The local scale relative to the parent.
  - [`scaleX`](#scalex) `Number` Scale on x axis.
  - [`scaleY`](#scaley) `Number` Scale on y axis.
  - [`skewX`](#skewx) `Number` Skew x
  - [`skewY`](#skewy) `Number` Skew y
  - [`opacity`](#opacity) `Number` Opacity of node, default value is 255.
  - [`color`](#color) `Color` Color of node, default value is white: (255, 255, 255).
  - [`anchorX`](#anchorx) `Number` Anchor point's position on x axis.
  - [`anchorY`](#anchory) `Number` Anchor point's position on y axis.
  - [`width`](#width) `Number` Width of node.
  - [`height`](#height) `Number` Height of node.
  - [`zIndex`](#zindex) `Number` Node's order in children list will affect its rendering order.
  - [`cascadeOpacity`](#cascadeopacity) `Boolean` Cascade opacity is removed from v2.0
  - [`_level`](#level) `Number` 
  - [`_components`](#components) `Component[]` 
  - [`_prefab`](#prefab) `PrefabInfo` The PrefabInfo object
  - [`_persistNode`](#persistnode) `Boolean` If true, the node is an persist node which won't be destroyed during scene transition.
  - [`name`](#name) `String` Name of node.
  - [`uuid`](#uuid) `String` The uuid for editor, will be stripped before building project.
  - [`children`](#children) `Node[]` All children nodes.
  - [`childrenCount`](#childrencount) `Number` All children nodes.
  - [`active`](#active) `Boolean` The local active state of this node....
  - [`activeInHierarchy`](#activeinhierarchy) `Boolean` Indicates whether this node is active in the scene.
  - [`__eventTargets`](#eventtargets) `EventTarget[]` Register all related EventTargets,...
  - [`parent`](#parent) `Node` The parent of the node.
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`constructor`](#constructor) 
  - [`on`](#on) 1.
  - [`once`](#once) Register an callback of a specific event type on the Node,...
  - [`off`](#off) Removes the callback previously registered with the same type, callback, target and or useCapture.
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target.
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
  - [`pauseSystemEvents`](#pausesystemevents) Pause node related system events registered with the current Node.
  - [`resumeSystemEvents`](#resumesystemevents) Resume node related system events registered with the current Node.
  - [`_getCapturingTargets`](#getcapturingtargets) Get all the targets listening to the supplied type of event in the target's capturing phase.
  - [`_getBubblingTargets`](#getbubblingtargets) Get all the targets listening to the supplied type of event in the target's bubbling phase.
  - [`runAction`](#runaction) The node becomes the action's target.
  - [`pauseAllActions`](#pauseallactions) Pause all actions running on the current node.
  - [`resumeAllActions`](#resumeallactions) Resume all paused actions on the current node.
  - [`stopAllActions`](#stopallactions) Stops and removes all actions from the running action list .
  - [`stopAction`](#stopaction) Stops and removes an action from the running action list.
  - [`stopActionByTag`](#stopactionbytag) Removes an action from the running action list by its tag.
  - [`getActionByTag`](#getactionbytag) Returns an action from the running action list by its tag.
  - [`getNumberOfRunningActions`](#getnumberofrunningactions) Composable actions are counted as 1 action.
  - [`getPosition`](#getposition) Returns a copy of the position (x, y) of the node in its parent's coordinates.
  - [`setPosition`](#setposition) Sets the position (x, y) of the node in its parent's coordinates....
  - [`getScale`](#getscale) Returns the scale factor of the node.
  - [`setScale`](#setscale) Sets the scale factor of the node.
  - [`setRotation`](#setrotation) Set rotation of node (along z axi).
  - [`getRotation`](#getrotation) Get rotation of node (along z axi).
  - [`getContentSize`](#getcontentsize) Returns a copy the untransformed size of the node.
  - [`setContentSize`](#setcontentsize) All nodes has a size.
  - [`getAnchorPoint`](#getanchorpoint) It's like a pin in the node where it is "attached" to its parent.
  - [`setAnchorPoint`](#setanchorpoint) Sets the anchor point in percent.
  - [`lookAt`](#lookat) Set rotation by lookAt target point, normally used by Camera Node
  - [`getLocalMatrix`](#getlocalmatrix) Get the local transform matrix (4x4), based on parent node coordinates
  - [`getWorldMatrix`](#getworldmatrix) Get the world transform matrix (4x4)
  - [`convertToNodeSpace`](#converttonodespace) Converts a Point to node (local) space coordinates then add the anchor point position.
  - [`convertToWorldSpace`](#converttoworldspace) Converts a Point related to the left bottom corner of the node's bounding box to world space coordinates.
  - [`convertToNodeSpaceAR`](#converttonodespacear) Converts a Point to node (local) space coordinates in which the anchor point is the origin position.
  - [`convertToWorldSpaceAR`](#converttoworldspacear) Converts a Point in node coordinates to world space coordinates.
  - [`getNodeToParentTransform`](#getnodetoparenttransform) Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates....
  - [`getNodeToParentTransformAR`](#getnodetoparenttransformar) Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates....
  - [`getNodeToWorldTransform`](#getnodetoworldtransform) Returns the world affine transform matrix.
  - [`getNodeToWorldTransformAR`](#getnodetoworldtransformar) Returns the world affine transform matrix.
  - [`getParentToNodeTransform`](#getparenttonodetransform) The matrix is in Pixels.
  - [`getWorldToNodeTransform`](#getworldtonodetransform) Returns the inverse world affine transform matrix.
  - [`convertTouchToNodeSpace`](#converttouchtonodespace) convenience methods which take a cc.Touch instead of cc.Vec2.
  - [`convertTouchToNodeSpaceAR`](#converttouchtonodespacear) converts a cc.Touch (world coordinates) into a local coordinate.
  - [`getBoundingBox`](#getboundingbox) Returns a "local" axis aligned bounding box of the node.
  - [`getBoundingBoxToWorld`](#getboundingboxtoworld) Returns a "world" axis aligned bounding box of the node....
  - [`addChild`](#addchild) Adds a child to the node with z order and name.
  - [`cleanup`](#cleanup) Stops all running actions and schedulers.
  - [`sortAllChildren`](#sortallchildren) Sorts the children array depends on children's zIndex and arrivalOrder,...
  - [`getDisplayedOpacity`](#getdisplayedopacity) Returns the displayed opacity of Node,...
  - [`getDisplayedColor`](#getdisplayedcolor) Returns the displayed color of Node,...
  - [`isCascadeOpacityEnabled`](#iscascadeopacityenabled) Cascade opacity is removed from v2.0
  - [`setCascadeOpacityEnabled`](#setcascadeopacityenabled) Cascade opacity is removed from v2.0
  - [`setOpacityModifyRGB`](#setopacitymodifyrgb) Opacity modify RGB have been removed since v2.0
  - [`isOpacityModifyRGB`](#isopacitymodifyrgb) Opacity modify RGB have been removed since v2.0
  - [`attr`](#attr) Properties configuration function ...
  - [`getChildByUuid`](#getchildbyuuid) Returns a child from the container given its uuid.
  - [`getChildByName`](#getchildbyname) Returns a child from the container given its name.
  - [`insertChild`](#insertchild) Inserts a child to the node at a specified index.
  - [`getSiblingIndex`](#getsiblingindex) Get the sibling index.
  - [`setSiblingIndex`](#setsiblingindex) Set the sibling index of this node.
  - [`walk`](#walk) Walk though the sub children tree of the current node.
  - [`removeFromParent`](#removefromparent) Remove itself from its parent node.
  - [`removeChild`](#removechild) Removes a child from the container.
  - [`removeAllChildren`](#removeallchildren) Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
  - [`isChildOf`](#ischildof) Is this node a child of the given node?
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't....
  - [`getComponents`](#getcomponents) Returns all components of supplied type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns all components of supplied type in self or any of its children.
  - [`addComponent`](#addcomponent) Adds a component class to the node.
  - [`_addComponentAt`](#addcomponentat) This api should only used by undo system
  - [`removeComponent`](#removecomponent) Removes a component identified by the given name or removes the component object given.
  - [`_getDependComponent`](#getdependcomponent) 
  - [`destroyAllChildren`](#destroyallchildren) Destroy all children from the node, and release all their own references to other objects....
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### Events

  - [`position-changed`](#position-changed) 
  - [`size-changed`](#size-changed) 
  - [`anchor-changed`](#anchor-changed) 
  - [`child-added`](#child-added) 
  - [`child-removed`](#child-removed) 
  - [`child-reorder`](#child-reorder) 
  - [`group-changed`](#group-changed) 
  - [`active-in-hierarchy-changed`](#active-in-hierarchy-changed) Note: This event is only emitted from the top most node whose active value did changed,...


### Details


#### Properties


##### autoReleaseAssets

> Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/CCScene.js:47](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScene.js#L47) |



##### groupIndex

> Group index of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>

| meta | description |
|------|-------------|
| Type | Integer |
| Defined in | [cocos2d/core/CCNode.js:553](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L553) |



##### group

> Group of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/CCNode.js:569](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L569) |



##### position

> The position (x, y) of the node in its parent's coordinates.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/CCNode.js:592](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L592) |

##### Examples

```js
cc.log("Node Position: " + node.position);
```


##### x

> x axis position of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:600](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L600) |

##### Examples

```js
node.x = 100;
cc.log("Node Position X: " + node.x);
```


##### y

> y axis position of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:643](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L643) |

##### Examples

```js
node.y = 100;
cc.log("Node Position Y: " + node.y);
```


##### rotation

> Rotation of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:709](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L709) |

##### Examples

```js
node.rotation = 90;
cc.log("Node Rotation: " + node.rotation);
```


##### rotationX

> Rotation on x axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:737](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L737) |

##### Examples

```js
node.rotationX = 45;
cc.log("Node Rotation X: " + node.rotationX);
```


##### rotationY

> Rotation on y axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:770](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L770) |

##### Examples

```js
node.rotationY = 45;
cc.log("Node Rotation Y: " + node.rotationY);
```


##### scale

> The local scale relative to the parent.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:803](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L803) |

##### Examples

```js
node.scale = 1;
```


##### scaleX

> Scale on x axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:812](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L812) |

##### Examples

```js
node.scaleX = 0.5;
cc.log("Node Scale X: " + node.scaleX);
```


##### scaleY

> Scale on y axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:838](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L838) |

##### Examples

```js
node.scaleY = 0.5;
cc.log("Node Scale Y: " + node.scaleY);
```


##### skewX

> Skew x

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:864](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L864) |

##### Examples

```js
node.skewX = 0;
cc.log("Node SkewX: " + node.skewX);
```


##### skewY

> Skew y

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:884](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L884) |

##### Examples

```js
node.skewY = 0;
cc.log("Node SkewY: " + node.skewY);
```


##### opacity

> Opacity of node, default value is 255.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:904](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L904) |

##### Examples

```js
node.opacity = 255;
```


##### color

> Color of node, default value is white: (255, 255, 255).

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/CCNode.js:925](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L925) |

##### Examples

```js
node.color = new cc.Color(255, 255, 255);
```


##### anchorX

> Anchor point's position on x axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:951](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L951) |

##### Examples

```js
node.anchorX = 0;
```


##### anchorY

> Anchor point's position on y axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:974](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L974) |

##### Examples

```js
node.anchorY = 0;
```


##### width

> Width of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:997](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L997) |

##### Examples

```js
node.width = 100;
```


##### height

> Height of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:1027](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1027) |

##### Examples

```js
node.height = 100;
```


##### zIndex

> zIndex is the 'key' used to sort the node relative to its siblings.<br/>
The value of zIndex should be in the range between cc.macro.MIN_ZINDEX and cc.macro.MAX_ZINDEX.<br/>
The Node's parent will sort all its children based on the zIndex value and the arrival order.<br/>
Nodes with greater zIndex will be sorted after nodes with smaller zIndex.<br/>
If two nodes have the same zIndex, then the node that was added first to the children's array will be in front of the other node in the array.<br/>
Node's order in children list will affect its rendering order. Parent is always rendering before all children.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCNode.js:1057](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1057) |

##### Examples

```js
node.zIndex = 1;
cc.log("Node zIndex: " + node.zIndex);
```


##### cascadeOpacity

> Cascade opacity is removed from v2.0
Indicate whether node's opacity value affect its child nodes, default value is true.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/CCNode.js:3087](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3087) |
| Deprecated | since v2.0 |



##### _level

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/utils/base-node.js:151](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L151) |



##### _components

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.html" class="crosslink">Component[]</a> |
| Defined in | [cocos2d/core/utils/base-node.js:159](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L159) |



##### _prefab

> The PrefabInfo object

| meta | description |
|------|-------------|
| Type | PrefabInfo |
| Defined in | [cocos2d/core/utils/base-node.js:168](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L168) |



##### _persistNode

> If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/utils/base-node.js:176](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L176) |



##### name

> Name of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/utils/base-node.js:200](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L200) |

##### Examples

```js
node.name = "New Node";
cc.log("Node Name: " + node.name);
```


##### uuid

> The uuid for editor, will be stripped before building project.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/utils/base-node.js:222](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L222) |

##### Examples

```js
cc.log("Node Uuid: " + node.uuid);
```


##### children

> All children nodes.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node[]</a> |
| Defined in | [cocos2d/core/utils/base-node.js:237](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L237) |

##### Examples

```js
var children = node.children;
for (var i = 0; i < children.length; ++i) {
    cc.log("Node: " + children[i]);
}
```


##### childrenCount

> All children nodes.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/utils/base-node.js:255](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L255) |

##### Examples

```js
var count = node.childrenCount;
cc.log("Node Children Count: " + count);
```


##### active

> The local active state of this node.<br/>
Note that a Node may be inactive because a parent is not active, even if this returns true.<br/>
Use Node/activeInHierarchy:property if you want to check if the Node is actually treated as active in the scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/utils/base-node.js:271](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L271) |

##### Examples

```js
node.active = false;
```


##### activeInHierarchy

> Indicates whether this node is active in the scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/utils/base-node.js:305](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L305) |

##### Examples

```js
cc.log("activeInHierarchy: " + node.activeInHierarchy);
```


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| Type | <a href="../classes/EventTarget.html" class="crosslink">EventTarget[]</a> |
| Defined in | [cocos2d/core/utils/base-node.js:331](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L331) |



##### parent

> The parent of the node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/utils/base-node.js:343](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L343) |

##### Examples

```js
node.parent = newNode;
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L83) |



##### isValid

> Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `cc.isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:261](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L261) |

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


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1100](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1100) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### on

Register a callback of a specific event type on Node.<br/>
Use this method to register touch or mouse event permit propagation based on scene graph,<br/>
These kinds of event are triggered with dispatchEvent, the dispatch process has three steps:<br/>
1. Capturing phase: dispatch in capture targets (`_getCapturingTargets`), e.g. parents in node tree, from root to the real target<br/>
2. At target phase: dispatch to the listeners of the real target<br/>
3. Bubbling phase: dispatch in bubble targets (`_getBubblingTargets`), e.g. parents in node tree, from the real target to root<br/>
In any moment of the dispatching process, it can be stopped via `event.stopPropagation()` or `event.stopPropagationImmidiate()`.<br/>
It's the recommended way to register touch/mouse event for Node,<br/>
please do not use cc.eventManager directly for Node.<br/>
You can also register custom event and use `emit` to trigger custom event on Node.<br/>
For such events, there won't be capturing and bubbling phase, your event will be dispatched directly to its listeners registered on the same node.<br/>
You can also pass event callback parameters with `emit` by passing parameters after `type`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/CCNode.js:1398](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1398) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="../classes/Node.EventType.html" class="crosslink">Node.EventType</a> A string representing the event type to listen for.<br>See Node/EventTyupe/POSITION_CHANGED for all builtin events.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched. The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> &#124; Any event or first argument when emit
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.

##### Examples

```js
this.node.on(cc.Node.EventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(cc.Node.EventType.TOUCH_START, callback, this);
node.on(cc.Node.EventType.TOUCH_MOVE, callback, this);
node.on(cc.Node.EventType.TOUCH_END, callback, this);
node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this);
node.on(cc.Node.EventType.ANCHOR_CHANGED, callback);
```

##### once

Register an callback of a specific event type on the Node,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1473](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1473) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> &#124; Any event or first argument when emit
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
node.once(cc.Node.EventType.ANCHOR_CHANGED, callback);
```

##### off

Removes the callback previously registered with the same type, callback, target and or useCapture.
This method is merely an alias to removeEventListener.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1550](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1550) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.

##### Examples

```js
this.node.off(cc.Node.EventType.TOUCH_START, this.memberFunction, this);
node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
node.off(cc.Node.EventType.ANCHOR_CHANGED, callback, this);
```

##### targetOff

Removes all callbacks previously registered with the same target.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1635](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1635) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related callbacks

##### Examples

```js
node.targetOff(target);
```

##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCNode.js:1679](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1679) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1697](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1697) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument in callback
- `arg2` Any Second argument in callback
- `arg3` Any Third argument in callback
- `arg4` Any Fourth argument in callback
- `arg5` Any Fifth argument in callback

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```

##### dispatchEvent

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1721](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1721) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### pauseSystemEvents

Pause node related system events registered with the current Node. Node system events includes touch and mouse events.
If recursive is set to true, then this API will pause the node system events for the node and all nodes in its sub node tree.
Reference: http://cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/internal-events/

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1735](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1735) |

###### Parameters
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to pause node system events on the sub node tree.

##### Examples

```js
node.pauseSystemEvents(true);
```

##### resumeSystemEvents

Resume node related system events registered with the current Node. Node system events includes touch and mouse events.
If recursive is set to true, then this API will resume the node system events for the node and all nodes in its sub node tree.
Reference: http://cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/internal-events/

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1751](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1751) |

###### Parameters
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to resume node system events on the sub node tree.

##### Examples

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
| Defined in | [cocos2d/core/CCNode.js:1813](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1813) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets

##### Examples

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
| Defined in | [cocos2d/core/CCNode.js:1835](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1835) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets


##### runAction

Executes an action, and returns the action that is executed.<br/>
The node becomes the action's target. Refer to cc.Action's getTarget() <br/>
Calling runAction while the node is not active won't have any effect. <br/>
Note：You shouldn't modify the action after runAction, that won't take any effect.<br/>
if you want to modify, when you define action plus.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Action.html" class="crosslink">Action</a> 
| Defined in | [cocos2d/core/CCNode.js:1857](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1857) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 

##### Examples

```js
var action = cc.scaleTo(0.2, 1, 0.6);
node.runAction(action);
node.runAction(action).repeatForever(); // fail
node.runAction(action.repeatForever()); // right
```

##### pauseAllActions

Pause all actions running on the current node. Equals to `cc.director.getActionManager().pauseTarget(node)`.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1886](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1886) |


##### Examples

```js
node.pauseAllActions();
```

##### resumeAllActions

Resume all paused actions on the current node. Equals to `cc.director.getActionManager().resumeTarget(node)`.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1897](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1897) |


##### Examples

```js
node.resumeAllActions();
```

##### stopAllActions

Stops and removes all actions from the running action list .

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1908](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1908) |


##### Examples

```js
node.stopAllActions();
```

##### stopAction

Stops and removes an action from the running action list.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1919](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1919) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> An action object to be removed.

##### Examples

```js
var action = cc.scaleTo(0.2, 1, 0.6);
node.stopAction(action);
```

##### stopActionByTag

Removes an action from the running action list by its tag.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:1932](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1932) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A tag that indicates the action to be removed.

##### Examples

```js
node.stopAction(1);
```

##### getActionByTag

Returns an action from the running action list by its tag.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Action.html" class="crosslink">Action</a> 
| Defined in | [cocos2d/core/CCNode.js:1948](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1948) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var action = node.getActionByTag(1);
```

##### getNumberOfRunningActions

Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
   Composable actions are counted as 1 action. Example:<br/>
   If you are running 1 Sequence of 7 actions, it will return 1. <br/>
   If you are running 7 Sequences of 2 actions, it will return 7.</p>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCNode.js:1968](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1968) |


##### Examples

```js
var count = node.getNumberOfRunningActions();
cc.log("Running Action Count: " + count);
```

##### getPosition

Returns a copy of the position (x, y) of the node in its parent's coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:1994](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L1994) |


##### Examples

```js
cc.log("Node Position: " + node.getPosition());
```

##### setPosition

Sets the position (x, y) of the node in its parent's coordinates.<br/>
Usually we use cc.v2(x, y) to compose cc.Vec2 object.<br/>
and Passing two numbers (x, y) is more efficient than passing cc.Vec2 object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2006](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2006) |

###### Parameters
- `newPosOrX` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> X coordinate for position or the position (x, y) of the node in coordinates
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Y coordinate for position

##### Examples

```js
node.setPosition(cc.v2(0, 0));
node.setPosition(0, 0);

```

##### getScale

Returns the scale factor of the node.
Assertion will fail when scale x != scale y.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCNode.js:2066](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2066) |


##### Examples

```js
cc.log("Node Scale: " + node.getScale());
```

##### setScale

Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2082](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2082) |

###### Parameters
- `scaleX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> scaleX or scale
- `scaleY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setScale(cc.v2(1, 1));
node.setScale(1);
```

##### setRotation

Set rotation of node (along z axi).

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2112) |

###### Parameters
- `rotation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Degree rotation value


##### getRotation

Get rotation of node (along z axi).

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2119](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2119) |

###### Parameters
- `rotation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Degree rotation value


##### getContentSize

Returns a copy the untransformed size of the node. <br/>
The contentSize remains the same no matter the node is scaled or rotated.<br/>
All nodes has a size. Layer and Scene has the same size of the screen by default. <br/>

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/CCNode.js:2126](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2126) |


##### Examples

```js
cc.log("Content Size: " + node.getContentSize());
```

##### setContentSize

Sets the untransformed size of the node.<br/>
The contentSize remains the same no matter the node is scaled or rotated.<br/>
All nodes has a size. Layer and Scene has the same size of the screen.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2141](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2141) |

###### Parameters
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size of the node or The untransformed size's width of the node.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size's height of the node.

##### Examples

```js
node.setContentSize(cc.size(100, 100));
node.setContentSize(100, 100);
```

##### getAnchorPoint

Returns a copy of the anchor point.<br/>
Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
It's like a pin in the node where it is "attached" to its parent. <br/>
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
The default anchor point is (0.5,0.5), so it starts at the center of the node.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2184](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2184) |


##### Examples

```js
cc.log("Node AnchorPoint: " + node.getAnchorPoint());
```

##### setAnchorPoint

Sets the anchor point in percent. <br/>
anchor point is the point around which all transformations and positioning manipulations take place. <br/>
It's like a pin in the node where it is "attached" to its parent. <br/>
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.<br/>
But you can use values higher than (1,1) and lower than (0,0) too.<br/>
The default anchor point is (0.5,0.5), so it starts at the center of the node.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2208](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2208) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The anchor point of node or The x axis anchor of node.
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y axis anchor of node.

##### Examples

```js
node.setAnchorPoint(cc.v2(1, 1));
node.setAnchorPoint(1, 1);
```

##### lookAt

Set rotation by lookAt target point, normally used by Camera Node

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2383](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2383) |

###### Parameters
- `pos` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `up` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> default is (0,1,0)


##### getLocalMatrix

Get the local transform matrix (4x4), based on parent node coordinates

| meta | description |
|------|-------------|
| Returns | vmath.Mat4 
| Defined in | [cocos2d/core/CCNode.js:2526](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2526) |

###### Parameters
- `out` vmath.Mat4 The matrix object to be filled with data

##### Examples

```js
let mat4 = vmath.mat4.create();
node.getLocalMatrix(mat4);
```

##### getWorldMatrix

Get the world transform matrix (4x4)

| meta | description |
|------|-------------|
| Returns | vmath.Mat4 
| Defined in | [cocos2d/core/CCNode.js:2542](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2542) |

###### Parameters
- `out` vmath.Mat4 The matrix object to be filled with data

##### Examples

```js
let mat4 = vmath.mat4.create();
node.getWorldMatrix(mat4);
```

##### convertToNodeSpace

Converts a Point to node (local) space coordinates then add the anchor point position.
So the return position will be related to the left bottom corner of the node's bounding box.
This equals to the API behavior of cocos2d-x, you probably want to use convertToNodeSpaceAR instead

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2558](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2558) |

###### Parameters
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
```

##### convertToWorldSpace

Converts a Point related to the left bottom corner of the node's bounding box to world space coordinates.
This equals to the API behavior of cocos2d-x, you probably want to use convertToWorldSpaceAR instead

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2581](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2581) |

###### Parameters
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
```

##### convertToNodeSpaceAR

Converts a Point to node (local) space coordinates in which the anchor point is the origin position.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2601](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2601) |

###### Parameters
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
```

##### convertToWorldSpaceAR

Converts a Point in node coordinates to world space coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2619](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2619) |

###### Parameters
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
```

##### getNodeToParentTransform

Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2637](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2637) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToParentTransform(affineTransform);
```

##### getNodeToParentTransformAR

Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2665](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2665) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToParentTransformAR(affineTransform);
```

##### getNodeToWorldTransform

Returns the world affine transform matrix. The matrix is in Pixels.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2690](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2690) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToWorldTransform(affineTransform);
```

##### getNodeToWorldTransformAR

Returns the world affine transform matrix. The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2717](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2717) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getNodeToWorldTransformAR(affineTransform);
```

##### getParentToNodeTransform

Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
The matrix is in Pixels. The returned transform is readonly and cannot be changed.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2740](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2740) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getParentToNodeTransform(affineTransform);
```

##### getWorldToNodeTransform

Returns the inverse world affine transform matrix. The matrix is in Pixels.
返回世界坐标系到节点坐标系的逆矩阵。

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/CCNode.js:2764](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2764) |
| Deprecated | since v2.0 |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The affine transform object to be filled with data

##### Examples

```js
let affineTransform = cc.AffineTransform.create();
node.getWorldToNodeTransform(affineTransform);
```

##### convertTouchToNodeSpace

convenience methods which take a cc.Touch instead of cc.Vec2.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2784](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2784) |
| Deprecated | since v2.0 |

###### Parameters
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### Examples

```js
var newVec2 = node.convertTouchToNodeSpace(touch);
```

##### convertTouchToNodeSpaceAR

converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/CCNode.js:2798](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2798) |
| Deprecated | since v2.0 |

###### Parameters
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### Examples

```js
var newVec2 = node.convertTouchToNodeSpaceAR(touch);
```

##### getBoundingBox

Returns a "local" axis aligned bounding box of the node. <br/>
The returned box is relative only to its parent.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/CCNode.js:2812](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2812) |


##### Examples

```js
var boundingBox = node.getBoundingBox();
```

##### getBoundingBoxToWorld

Returns a "world" axis aligned bounding box of the node.<br/>
The bounding box contains self and active children's world bounding box.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/CCNode.js:2834](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2834) |


##### Examples

```js
var newRect = node.getBoundingBoxToWorld();
```

##### addChild

Adds a child to the node with z order and name.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2890](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2890) |

###### Parameters
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> A child node
- `zIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z order for drawing priority. Please refer to zIndex property
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A name to identify the node easily. Please refer to name property

##### Examples

```js
node.addChild(newNode, 1, "node");
```

##### cleanup

Stops all running actions and schedulers.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2920](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2920) |


##### Examples

```js
node.cleanup();
```

##### sortAllChildren

Sorts the children array depends on children's zIndex and arrivalOrder,
normally you won't need to invoke this function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:2942](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L2942) |



##### getDisplayedOpacity

Returns the displayed opacity of Node,
the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/CCNode.js:3059](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3059) |
| Deprecated | since v2.0, please use opacity property, cascade opacity is removed |



##### getDisplayedColor

Returns the displayed color of Node,
the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/CCNode.js:3073](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3073) |
| Deprecated | since v2.0, please use color property, cascade color is removed |



##### isCascadeOpacityEnabled

Cascade opacity is removed from v2.0
Returns whether node's opacity value affect its child nodes.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCNode.js:3097](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3097) |
| Deprecated | since v2.0 |



##### setCascadeOpacityEnabled

Cascade opacity is removed from v2.0
Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:3107](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3107) |
| Deprecated | since v2.0 |

###### Parameters
- `cascadeOpacityEnabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### setOpacityModifyRGB

Opacity modify RGB have been removed since v2.0
Set whether color should be changed with the opacity value,
useless in ccsg.Node, but this function is override in some class to have such behavior.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCNode.js:3117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3117) |
| Deprecated | since v2.0 |

###### Parameters
- `opacityValue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isOpacityModifyRGB

Opacity modify RGB have been removed since v2.0
Get whether color should be changed with the opacity value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCNode.js:3128](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCNode.js#L3128) |
| Deprecated | since v2.0 |



##### attr

Properties configuration function <br/>
All properties in attrs will be set to the node, <br/>
when the setter of the node is available, <br/>
the property will be set via setter function.<br/>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:405](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L405) |

###### Parameters
- `attrs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Properties to be set to node

##### Examples

```js
var attrs = { key: 0, num: 100 };
node.attr(attrs);
```

##### getChildByUuid

Returns a child from the container given its uuid.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/core/utils/base-node.js:424](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L424) |

###### Parameters
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The uuid to find the child node.

##### Examples

```js
var child = node.getChildByUuid(uuid);
```

##### getChildByName

Returns a child from the container given its name.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/core/utils/base-node.js:447](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L447) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A name to find the child node.

##### Examples

```js
var child = node.getChildByName("Test Node");
```

##### insertChild

Inserts a child to the node at a specified index.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:485](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L485) |

###### Parameters
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> the child node to be inserted
- `siblingIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the sibling index to place the child in

##### Examples

```js
node.insertChild(child, 2);
```

##### getSiblingIndex

Get the sibling index.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/utils/base-node.js:503](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L503) |


##### Examples

```js
var index = node.getSiblingIndex();
```

##### setSiblingIndex

Set the sibling index of this node.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:520](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L520) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setSiblingIndex(1);
```

##### walk

Walk though the sub children tree of the current node.
Each node, including the current node, in the sub tree will be visited two times, before all children and after all children.
This function call is not recursive, it's based on stack.
Please don't walk any other node inside the walk process.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:551](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L551) |

###### Parameters
- `prefunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to process node when reach the node for the first time
	- `target` <a href="../classes/_BaseNode.html" class="crosslink">_BaseNode</a> The current visiting node
- `postfunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to process node when re-visit the node after walked all children in its sub tree
	- `target` <a href="../classes/_BaseNode.html" class="crosslink">_BaseNode</a> The current visiting node

##### Examples

```js
node.walk(function (target) {
    console.log('Walked through node ' + target.name + ' for the first time');
}, function (target) {
    console.log('Walked through node ' + target.name + ' after walked all children in its sub tree');
});
```

##### removeFromParent

Remove itself from its parent node. If cleanup is `true`, then also remove all events and actions. <br/>
If the cleanup parameter is not passed, it will force a cleanup, so it is recommended that you always pass in the `false` parameter when calling this API.<br/>
If the node orphan, then nothing happens.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:665](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L665) |

###### Parameters
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all actions and callbacks on this node should be removed, false otherwise.

##### Examples

```js
node.removeFromParent();
node.removeFromParent(false);
```

##### removeChild

Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
If the cleanup parameter is not passed, it will force a cleanup. <br/>
"remove" logic MUST only be on this method  <br/>
If a class wants to extend the 'removeChild' behavior it only needs <br/>
to override this method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:689](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L689) |

###### Parameters
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> The child node which will be removed.
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### Examples

```js
node.removeChild(newNode);
node.removeChild(newNode, false);
```

##### removeAllChildren

Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
If the cleanup parameter is not passed, it will force a cleanup.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:717](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L717) |

###### Parameters
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions on all children nodes should be cleanup, false otherwise.

##### Examples

```js
node.removeAllChildren();
node.removeAllChildren(false);
```

##### isChildOf

Is this node a child of the given node?

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/utils/base-node.js:748](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L748) |

###### Parameters
- `parent` <a href="../classes/Node.html" class="crosslink">Node</a> 

##### Examples

```js
node.isChildOf(newNode);
```

##### getComponent

Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/utils/base-node.js:771](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L771) |

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

Returns all components of supplied type in the node.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/utils/base-node.js:798](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L798) |

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
| Defined in | [cocos2d/core/utils/base-node.js:819](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L819) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

Returns all components of supplied type in self or any of its children.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/utils/base-node.js:840](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L840) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/utils/base-node.js:876](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L876) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The constructor or the class name of the component to add

##### Examples

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### _addComponentAt

This api should only used by undo system

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:965](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L965) |

###### Parameters
- `comp` <a href="../classes/Component.html" class="crosslink">Component</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeComponent

Removes a component identified by the given name or removes the component object given.
You can also use component.destroy() if you already have the reference.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:1013](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L1013) |
| Deprecated | please destroy the component to remove it. |

###### Parameters
- `component` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="../classes/Component.html" class="crosslink">Component</a> The need remove component.

##### Examples

```js
node.removeComponent(cc.Sprite);
var Test = require("Test");
node.removeComponent(Test);
```

##### _getDependComponent



| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/utils/base-node.js:1041](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L1041) |

###### Parameters
- `depended` <a href="../classes/Component.html" class="crosslink">Component</a> 


##### destroyAllChildren

Destroy all children from the node, and release all their own references to other objects.<br/>
Actual destruct operation will delayed until before rendering.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/base-node.js:1108](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/base-node.js#L1108) |


##### Examples

```js
node.destroyAllChildren();
```

##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:296](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L296) |


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
| Defined in | [cocos2d/core/platform/CCObject.js:430](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L430) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:463](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L463) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:488](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L488) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:498](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L498) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### Events

### `position-changed` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `size-changed` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `anchor-changed` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `child-added` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `child-removed` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `child-reorder` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `group-changed` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `active-in-hierarchy-changed` Event



Module: [cc](../modules/cc.md)


Note: This event is only emitted from the top most node whose active value did changed,
not including its child nodes.


### Index







### Details





