## `Scene` Class

Extends [`Node`](Node.md)


Module: [cc](../modules/cc.md)


cc.Scene is a subclass of cc.Node that is used only as an abstract concept.<br/>
cc.Scene and cc.Node are almost identical with the difference that users can not modify cc.Scene manually.


### Index

##### Properties

  - [`autoReleaseAssets`](#autoreleaseassets) `Boolean` Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
  - [`groupIndex`](#groupindex) `Integer` Group index of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>
  - [`group`](#group) `String` Group of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>
  - [`position`](#position) `Vec2` The position (x, y) of the node in its parent's coordinates.
  - [`x`](#x) `Number` x axis position of node.
  - [`y`](#y) `Number` y axis position of node.
  - [`rotation`](#rotation) `Number` Rotation of node.
  - [`rotationX`](#rotationx) `Number` Rotation on x axis.
  - [`rotationY`](#rotationy) `Number` Rotation on y axis.
  - [`scaleX`](#scalex) `Number` Scale on x axis.
  - [`scaleY`](#scaley) `Number` Scale on y axis.
  - [`skewX`](#skewx) `Number` Skew x
  - [`skewY`](#skewy) `Number` Skew y
  - [`opacity`](#opacity) `Number` Opacity of node, default value is 255.
  - [`cascadeOpacity`](#cascadeopacity) `Boolean` Indicate whether node's opacity value affect its child nodes, default value is true.
  - [`color`](#color) `Color` Color of node, default value is white: (255, 255, 255).
  - [`anchorX`](#anchorx) `Number` Anchor point's position on x axis.
  - [`anchorY`](#anchory) `Number` Anchor point's position on y axis.
  - [`width`](#width) `Number` Width of node.
  - [`height`](#height) `Number` Height of node.
  - [`zIndex`](#zindex) `Number` Z order in depth which stands for the drawing order.
  - [`_sgNode`](#sgnode) `_ccsg.Node` Current scene graph node for this node.
  - [`_sizeProvider`](#sizeprovider) `_ccsg.Node` Current active size provider for this node.
Size provider can equals to this._sgNode.
  - [`scale`](#scale) `Number` The local scale relative to the parent.
  - [`_components`](#components) `Component[]` 
  - [`_prefab`](#prefab) `PrefabInfo` The PrefabInfo object
  - [`_persistNode`](#persistnode) `Boolean` If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.
  - [`name`](#name) `String` Name of node.
  - [`uuid`](#uuid) `String` The uuid for editor, will be stripped before building project.
  - [`children`](#children) `Node[]` All children nodes.
  - [`childrenCount`](#childrencount) `Number` All children nodes.
  - [`active`](#active) `Boolean` The local active state of this node.<br/>
Note that a Node may be inactive because a parent is not active, even if this returns true.<br/>
Use Node/activeInHierarchy:property if you want to check if the Node is actually treated as active in the scene.
  - [`activeInHierarchy`](#activeinhierarchy) `Boolean` Indicates whether this node is active in the scene.
  - [`tag`](#tag) `Number` Tag of node.
  - [`__eventTargets`](#eventtargets) `EventTarget[]` Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy
  - [`parent`](#parent) `Node` The parent of the node.
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`constructor`](#constructor) 
  - [`on`](#on) Register a callback of a specific event type on Node.<br/>
Use this method to register touch or mouse event permit propagation based on scene graph,
you can propagate the event to the parents or swallow it by calling stopPropagation on the event.<br/>
It's the recommended way to register touch/mouse event for Node,
please do not use cc.eventManager directly for Node.
  - [`off`](#off) Removes the callback previously registered with the same type, callback, target and or useCapture.
This method is merely an alias to removeEventListener.
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target.
  - [`pauseSystemEvents`](#pausesystemevents) Pause node related system events registered with the current Node. Node system events includes touch and mouse events.
If recursive is set to true, then this API will pause the node system events for the node and all nodes in its sub node tree.
Reference: http://cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/internal-events/
  - [`resumeSystemEvents`](#resumesystemevents) Resume node related system events registered with the current Node. Node system events includes touch and mouse events.
If recursive is set to true, then this API will resume the node system events for the node and all nodes in its sub node tree.
Reference: http://cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/internal-events/
  - [`runAction`](#runaction) Executes an action, and returns the action that is executed.<br/>
The node becomes the action's target. Refer to cc.Action's getTarget() <br/>
Calling runAction while the node is not active won't have any effect. <br/>
Note：You shouldn't modify the action after runAction, that won't take any effect.<br/>
if you want to modify, when you define action plus.
  - [`pauseAllActions`](#pauseallactions) Pause all actions running on the current node. Equals to `cc.director.getActionManager().pauseTarget(node)`.
  - [`resumeAllActions`](#resumeallactions) Resume all paused actions on the current node. Equals to `cc.director.getActionManager().resumeTarget(node)`.
  - [`stopAllActions`](#stopallactions) Stops and removes all actions from the running action list .
  - [`stopAction`](#stopaction) Stops and removes an action from the running action list.
  - [`stopActionByTag`](#stopactionbytag) Removes an action from the running action list by its tag.
  - [`getActionByTag`](#getactionbytag) Returns an action from the running action list by its tag.
  - [`getNumberOfRunningActions`](#getnumberofrunningactions) Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
   Composable actions are counted as 1 action. Example:<br/>
   If you are running 1 Sequence of 7 actions, it will return 1. <br/>
   If you are running 7 Sequences of 2 actions, it will return 7.</p>
  - [`getPosition`](#getposition) Returns a copy of the position (x, y) of the node in its parent's coordinates.
  - [`setPosition`](#setposition) Sets the position (x, y) of the node in its parent's coordinates.<br/>
Usually we use cc.v2(x, y) to compose cc.Vec2 object.<br/>
and Passing two numbers (x, y) is more efficient than passing cc.Vec2 object.
  - [`getScale`](#getscale) Returns the scale factor of the node.
Assertion will fail when _scaleX != _scaleY.
  - [`setScale`](#setscale) Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
  - [`getContentSize`](#getcontentsize) Returns a copy the untransformed size of the node. <br/>
The contentSize remains the same no matter the node is scaled or rotated.<br/>
All nodes has a size. Layer and Scene has the same size of the screen by default. <br/>
  - [`setContentSize`](#setcontentsize) Sets the untransformed size of the node.<br/>
The contentSize remains the same no matter the node is scaled or rotated.<br/>
All nodes has a size. Layer and Scene has the same size of the screen.
  - [`setOpacityModifyRGB`](#setopacitymodifyrgb) Set whether color should be changed with the opacity value,
useless in ccsg.Node, but this function is override in some class to have such behavior.
  - [`isOpacityModifyRGB`](#isopacitymodifyrgb) Get whether color should be changed with the opacity value.
  - [`getAnchorPoint`](#getanchorpoint) Returns a copy of the anchor point.<br/>
Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
It's like a pin in the node where it is "attached" to its parent. <br/>
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
The default anchor point is (0.5,0.5), so it starts at the center of the node.
  - [`setAnchorPoint`](#setanchorpoint) Sets the anchor point in percent. <br/>
anchor point is the point around which all transformations and positioning manipulations take place. <br/>
It's like a pin in the node where it is "attached" to its parent. <br/>
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.<br/>
But you can use values higher than (1,1) and lower than (0,0) too.<br/>
The default anchor point is (0.5,0.5), so it starts at the center of the node.
  - [`getAnchorPointInPoints`](#getanchorpointinpoints) Returns a copy of the anchor point in absolute pixels.  <br/>
you can only read it. If you wish to modify it, use setAnchorPoint.
  - [`getDisplayedOpacity`](#getdisplayedopacity) Returns the displayed opacity of Node,
the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.
  - [`getDisplayedColor`](#getdisplayedcolor) Returns the displayed color of Node,
the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.
  - [`getNodeToParentTransformAR`](#getnodetoparenttransformar) Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).
  - [`getBoundingBox`](#getboundingbox) Returns a "local" axis aligned bounding box of the node. <br/>
The returned box is relative only to its parent.
  - [`getBoundingBoxToWorld`](#getboundingboxtoworld) Returns a "world" axis aligned bounding box of the node.<br/>
The bounding box contains self and active children's world bounding box.
  - [`getNodeToParentTransform`](#getnodetoparenttransform) Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.
  - [`getNodeToWorldTransform`](#getnodetoworldtransform) Returns the world affine transform matrix. The matrix is in Pixels.
  - [`getNodeToWorldTransformAR`](#getnodetoworldtransformar) Returns the world affine transform matrix. The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).
  - [`getParentToNodeTransform`](#getparenttonodetransform) Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
The matrix is in Pixels. The returned transform is readonly and cannot be changed.
  - [`getWorldToNodeTransform`](#getworldtonodetransform) Returns the inverse world affine transform matrix. The matrix is in Pixels.
返回世界坐标系到节点坐标系的逆矩阵。
  - [`convertToNodeSpace`](#converttonodespace) Converts a Point to node (local) space coordinates. The result is in Vec2.
  - [`convertToWorldSpace`](#converttoworldspace) Converts a Point to world space coordinates. The result is in Points.
  - [`convertToNodeSpaceAR`](#converttonodespacear) Converts a Point to node (local) space coordinates. The result is in Points.<br/>
treating the returned/received node point as anchor relative.
  - [`convertToWorldSpaceAR`](#converttoworldspacear) Converts a local Point to world space coordinates.The result is in Points.<br/>
treating the returned/received node point as anchor relative.
  - [`convertTouchToNodeSpace`](#converttouchtonodespace) convenience methods which take a cc.Touch instead of cc.Vec2.
  - [`convertTouchToNodeSpaceAR`](#converttouchtonodespacear) converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
  - [`addChild`](#addchild) Adds a child to the node with z order and tag.
  - [`cleanup`](#cleanup) Stops all running actions and schedulers.
  - [`sortAllChildren`](#sortallchildren) Sorts the children array depends on children's zIndex and arrivalOrder,
normally you won't need to invoke this function.
  - [`getPositionX`](#getpositionx) Returns the x axis position of the node in cocos2d coordinates.
  - [`setPositionX`](#setpositionx) Sets the x axis position of the node in cocos2d coordinates.
  - [`getPositionY`](#getpositiony) Returns the y axis position of the node in cocos2d coordinates.
  - [`setPositionY`](#setpositiony) Sets the y axis position of the node in cocos2d coordinates.
  - [`getLocalZOrder`](#getlocalzorder) Returns the local Z order of this node.
  - [`setLocalZOrder`](#setlocalzorder) LocalZOrder is the 'key' used to sort the node relative to its siblings.                                        <br/>
                                                                                                                <br/>
The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
will be in front of the other node in the array.                                                                <br/>
Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) <br/>
And Nodes that have LocalZOder values smaller than 0 are the "left" subtree <br/>
While Nodes with LocalZOder greater than 0 are the "right" subtree.
  - [`isCascadeOpacityEnabled`](#iscascadeopacityenabled) Returns whether node's opacity value affect its child nodes.
  - [`setCascadeOpacityEnabled`](#setcascadeopacityenabled) Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.
  - [`attr`](#attr) Properties configuration function </br>
All properties in attrs will be set to the node, </br>
when the setter of the node is available, </br>
the property will be set via setter function.</br>
  - [`getChildByTag`](#getchildbytag) Returns a child from the container given its tag.
  - [`getChildByUuid`](#getchildbyuuid) Returns a child from the container given its uuid.
  - [`getChildByName`](#getchildbyname) Returns a child from the container given its name.
  - [`insertChild`](#insertchild) Inserts a child to the node at a specified index.
  - [`getSiblingIndex`](#getsiblingindex) Get the sibling index.
  - [`setSiblingIndex`](#setsiblingindex) Set the sibling index of this node.
  - [`removeFromParent`](#removefromparent) Remove itself from its parent node. If cleanup is `true`, then also remove all events and actions. <br/>
If the cleanup parameter is not passed, it will force a cleanup, so it is recommended that you always pass in the `false` parameter when calling this API.<br/>
If the node orphan, then nothing happens.
  - [`removeChild`](#removechild) Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
If the cleanup parameter is not passed, it will force a cleanup. <br/>
"remove" logic MUST only be on this method  <br/>
If a class wants to extend the 'removeChild' behavior it only needs <br/>
to override this method.
  - [`removeChildByTag`](#removechildbytag) Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
If the cleanup parameter is not passed, it will force a cleanup. <br/>
  - [`removeAllChildren`](#removeallchildren) Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
If the cleanup parameter is not passed, it will force a cleanup.
  - [`isChildOf`](#ischildof) Is this node a child of the given node?
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.
  - [`getComponents`](#getcomponents) Returns all components of supplied type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns all components of supplied type in self or any of its children.
  - [`addComponent`](#addcomponent) Adds a component class to the node. You can also add component to node by passing in the name of the script.
  - [`_addComponentAt`](#addcomponentat) This api should only used by undo system
  - [`removeComponent`](#removecomponent) Removes a component identified by the given name or removes the component object given.
You can also use component.destroy() if you already have the reference.
  - [`_getDependComponent`](#getdependcomponent) 
  - [`destroyAllChildren`](#destroyallchildren) Destroy all children from the node, and release all their own references to other objects.<br/>
Actual destruct operation will delayed until before rendering.
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.
  - [`dispatchEvent`](#dispatchevent) Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.
  - [`emit`](#emit) Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.
  - [`destroy`](#destroy) Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
<br/>
After destroy, this CCObject is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.
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



##### Events

  - [`position-changed`](#position-changed) 
  - [`size-changed`](#size-changed) 
  - [`anchor-changed`](#anchor-changed) 
  - [`child-added`](#child-added) 
  - [`child-removed`](#child-removed) 
  - [`child-reorder`](#child-reorder) 
  - [`group-changed`](#group-changed) 
  - [`touchstart`](#touchstart) 
  - [`active-in-hierarchy-changed`](#active-in-hierarchy-changed) Note: This event is only emitted from the top most node whose active value did changed,
not including its child nodes.


### Details


#### Properties


##### autoReleaseAssets

> Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScene.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScene.js#L46) |



##### groupIndex

> Group index of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>

| meta | description |
|------|-------------|
| Type | Integer |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:399](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L399) |



##### group

> Group of node.<br/>
Which Group this node belongs to will resolve that this node's collision components can collide with which other collision componentns.<br/>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L415) |



##### position

> The position (x, y) of the node in its parent's coordinates.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:438](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L438) |

##### Examples

```js
cc.log("Node Position: " + node.position);
```


##### x

> x axis position of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:446](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L446) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:489](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L489) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:532](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L532) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:560](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L560) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:586](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L586) |

##### Examples

```js
node.rotationY = 45;
cc.log("Node Rotation Y: " + node.rotationY);
```


##### scaleX

> Scale on x axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:612](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L612) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:638](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L638) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:664](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L664) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:683](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L683) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:702](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L702) |

##### Examples

```js
node.opacity = 255;
```


##### cascadeOpacity

> Indicate whether node's opacity value affect its child nodes, default value is true.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:729](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L729) |

##### Examples

```js
cc.log("CascadeOpacity: " + node.cascadeOpacity);
```


##### color

> Color of node, default value is white: (255, 255, 255).

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:755](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L755) |

##### Examples

```js
node.color = new cc.Color(255, 255, 255);
```


##### anchorX

> Anchor point's position on x axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L780) |

##### Examples

```js
node.anchorX = 0;
```


##### anchorY

> Anchor point's position on y axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:805](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L805) |

##### Examples

```js
node.anchorY = 0;
```


##### width

> Width of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:830](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L830) |

##### Examples

```js
node.width = 100;
```


##### height

> Height of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:869](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L869) |

##### Examples

```js
node.height = 100;
```


##### zIndex

> Z order in depth which stands for the drawing order.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:908](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L908) |

##### Examples

```js
node.zIndex = 1;
cc.log("Node zIndex: " + node.zIndex);
```


##### _sgNode

> Current scene graph node for this node.

| meta | description |
|------|-------------|
| Type | _ccsg.Node |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:942](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L942) |



##### _sizeProvider

> Current active size provider for this node.
Size provider can equals to this._sgNode.

| meta | description |
|------|-------------|
| Type | _ccsg.Node |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:965](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L965) |



##### scale

> The local scale relative to the parent.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2629](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2629) |

##### Examples

```js
node.scale = 1;
```


##### _components

> 

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.html" class="crosslink">Component[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:133](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L133) |



##### _prefab

> The PrefabInfo object

| meta | description |
|------|-------------|
| Type | PrefabInfo |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:142](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L142) |



##### _persistNode

> If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:150](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L150) |



##### name

> Name of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:174](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L174) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:201](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L201) |

##### Examples

```js
cc.log("Node Uuid: " + node.uuid);
```


##### children

> All children nodes.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L220) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:238](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L238) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L254) |

##### Examples

```js
node.active = false;
```


##### activeInHierarchy

> Indicates whether this node is active in the scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:288](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L288) |

##### Examples

```js
cc.log("activeInHierarchy: " + node.activeInHierarchy);
```


##### tag

> Tag of node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L302) |

##### Examples

```js
node.tag = 1001;
```


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| Type | <a href="../classes/EventTarget.html" class="crosslink">EventTarget[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:324](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L324) |



##### parent

> The parent of the node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:342](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L342) |

##### Examples

```js
node.parent = newNode;
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L50) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L57) |



##### isValid

> Indicates whether the object is not yet destroyed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:225](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L225) |

##### Examples

```js
cc.log(obj.isValid);
```





<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:936](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L936) |

###### Parameters
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### on

Register a callback of a specific event type on Node.<br/>
Use this method to register touch or mouse event permit propagation based on scene graph,
you can propagate the event to the parents or swallow it by calling stopPropagation on the event.<br/>
It's the recommended way to register touch/mouse event for Node,
please do not use cc.eventManager directly for Node.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1169](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1169) |

###### Parameters
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

##### Examples

```js
this.node.on(cc.Node.EventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(cc.Node.EventType.TOUCH_START, callback, this.node);
node.on(cc.Node.EventType.TOUCH_MOVE, callback, this.node);
node.on(cc.Node.EventType.TOUCH_END, callback, this.node);
node.on(cc.Node.EventType.TOUCH_CANCEL, callback, this.node);
node.on("anchor-changed", callback, this);
```

##### off

Removes the callback previously registered with the same type, callback, target and or useCapture.
This method is merely an alias to removeEventListener.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1254](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1254) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.

##### Examples

```js
this.node.off(cc.Node.EventType.TOUCH_START, this.memberFunction, this);
node.off(cc.Node.EventType.TOUCH_START, callback, this.node);
node.off("anchor-changed", callback, this);
```

##### targetOff

Removes all callbacks previously registered with the same target.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1283](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1283) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related callbacks

##### Examples

```js
node.targetOff(target);
```

##### pauseSystemEvents

Pause node related system events registered with the current Node. Node system events includes touch and mouse events.
If recursive is set to true, then this API will pause the node system events for the node and all nodes in its sub node tree.
Reference: http://cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/internal-events/

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1298](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1298) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1314](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1314) |

###### Parameters
- `recursive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether to resume node system events on the sub node tree.

##### Examples

```js
node.resumeSystemEvents(true);
```

##### runAction

Executes an action, and returns the action that is executed.<br/>
The node becomes the action's target. Refer to cc.Action's getTarget() <br/>
Calling runAction while the node is not active won't have any effect. <br/>
Note：You shouldn't modify the action after runAction, that won't take any effect.<br/>
if you want to modify, when you define action plus.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Action.html" class="crosslink">Action</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1452](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1452) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1487](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1487) |


##### Examples

```js
node.pauseAllActions();
```

##### resumeAllActions

Resume all paused actions on the current node. Equals to `cc.director.getActionManager().resumeTarget(node)`.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1498](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1498) |


##### Examples

```js
node.resumeAllActions();
```

##### stopAllActions

Stops and removes all actions from the running action list .

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1509](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1509) |


##### Examples

```js
node.stopAllActions();
```

##### stopAction

Stops and removes an action from the running action list.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1520](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1520) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1533](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1533) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1549](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1549) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1569](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1569) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1614](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1614) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1626) |

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
Assertion will fail when _scaleX != _scaleY.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1688](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1688) |


##### Examples

```js
cc.log("Node Scale: " + node.getScale());
```

##### setScale

Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1704) |

###### Parameters
- `scaleX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> scaleX or scale
- `scaleY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setScale(cc.v2(1, 1));
node.setScale(1, 1);
```

##### getContentSize

Returns a copy the untransformed size of the node. <br/>
The contentSize remains the same no matter the node is scaled or rotated.<br/>
All nodes has a size. Layer and Scene has the same size of the screen by default. <br/>

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1734](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1734) |

###### Parameters
- `ignoreSizeProvider` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if you need to get the original size of the node

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1757](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1757) |

###### Parameters
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size of the node or The untransformed size's width of the node.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size's height of the node.

##### Examples

```js
node.setContentSize(cc.size(100, 100));
node.setContentSize(100, 100);
```

##### setOpacityModifyRGB

Set whether color should be changed with the opacity value,
useless in ccsg.Node, but this function is override in some class to have such behavior.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1801](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1801) |

###### Parameters
- `opacityValue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### Examples

```js
node.setOpacityModifyRGB(true);
```

##### isOpacityModifyRGB

Get whether color should be changed with the opacity value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1822](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1822) |


##### Examples

```js
var hasChange = node.isOpacityModifyRGB();
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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1884](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1884) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1908](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1908) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The anchor point of node or The x axis anchor of node.
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y axis anchor of node.

##### Examples

```js
node.setAnchorPoint(cc.v2(1, 1));
node.setAnchorPoint(1, 1);
```

##### getAnchorPointInPoints

Returns a copy of the anchor point in absolute pixels.  <br/>
you can only read it. If you wish to modify it, use setAnchorPoint.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1950](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1950) |


##### Examples

```js
cc.log("AnchorPointInPoints: " + node.getAnchorPointInPoints());
```

##### getDisplayedOpacity

Returns the displayed opacity of Node,
the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1967](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1967) |


##### Examples

```js
var displayOpacity = node.getDisplayedOpacity();
```

##### getDisplayedColor

Returns the displayed color of Node,
the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:1997](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L1997) |


##### Examples

```js
var displayColor = node.getDisplayedColor();
```

##### getNodeToParentTransformAR

Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2015](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2015) |


##### Examples

```js
var affineTransform = node.getNodeToParentTransformAR();
```

##### getBoundingBox

Returns a "local" axis aligned bounding box of the node. <br/>
The returned box is relative only to its parent.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2042) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2058](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2058) |


##### Examples

```js
var newRect = node.getBoundingBoxToWorld();
```

##### getNodeToParentTransform

Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
The matrix is in Pixels.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2103](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2103) |


##### Examples

```js
var affineTransform = node.getNodeToParentTransform();
```

##### getNodeToWorldTransform

Returns the world affine transform matrix. The matrix is in Pixels.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2126](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2126) |


##### Examples

```js
var affineTransform = node.getNodeToWorldTransform();
```

##### getNodeToWorldTransformAR

Returns the world affine transform matrix. The matrix is in Pixels.<br/>
This method is AR (Anchor Relative).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2155](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2155) |


##### Examples

```js
var mat = node.getNodeToWorldTransformAR();
```

##### getParentToNodeTransform

Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
The matrix is in Pixels. The returned transform is readonly and cannot be changed.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2186](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2186) |


##### Examples

```js
var affineTransform = node.getParentToNodeTransform();
```

##### getWorldToNodeTransform

Returns the inverse world affine transform matrix. The matrix is in Pixels.
返回世界坐标系到节点坐标系的逆矩阵。

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2202](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2202) |


##### Examples

```js
var affineTransform = node.getWorldToNodeTransform();
```

##### convertToNodeSpace

Converts a Point to node (local) space coordinates. The result is in Vec2.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2232](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2232) |

###### Parameters
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToNodeSpace(cc.v2(100, 100));
```

##### convertToWorldSpace

Converts a Point to world space coordinates. The result is in Points.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2250](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2250) |

###### Parameters
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToWorldSpace(cc.v2(100, 100));
```

##### convertToNodeSpaceAR

Converts a Point to node (local) space coordinates. The result is in Points.<br/>
treating the returned/received node point as anchor relative.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2269](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2269) |

###### Parameters
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToNodeSpaceAR(cc.v2(100, 100));
```

##### convertToWorldSpaceAR

Converts a local Point to world space coordinates.The result is in Points.<br/>
treating the returned/received node point as anchor relative.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2296](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2296) |

###### Parameters
- `nodePoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
var newVec2 = node.convertToWorldSpaceAR(cc.v2(100, 100));
```

##### convertTouchToNodeSpace

convenience methods which take a cc.Touch instead of cc.Vec2.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2323) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2336](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2336) |

###### Parameters
- `touch` <a href="../classes/Touch.html" class="crosslink">Touch</a> The touch object

##### Examples

```js
var newVec2 = node.convertTouchToNodeSpaceAR(touch);
```

##### addChild

Adds a child to the node with z order and tag.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2353) |

###### Parameters
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> A child node
- `localZOrder` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Z order for drawing priority. Please refer to setZOrder(int)
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string)

##### Examples

```js
node.addChild(newNode, 1, 1001);
```

##### cleanup

Stops all running actions and schedulers.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2395) |


##### Examples

```js
node.cleanup();
```

##### sortAllChildren

Sorts the children array depends on children's zIndex and arrivalOrder,
normally you won't need to invoke this function.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2417](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2417) |



##### getPositionX

Returns the x axis position of the node in cocos2d coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2638](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2638) |


##### Examples

```js
var posX = node.getPositionX();
```

##### setPositionX

Sets the x axis position of the node in cocos2d coordinates.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2647](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2647) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setPositionX(1);
```

##### getPositionY

Returns the y axis position of the node in cocos2d coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2656](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2656) |


##### Examples

```js
var posY = node.getPositionY();
```

##### setPositionY

Sets the y axis position of the node in cocos2d coordinates.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2665](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2665) |

###### Parameters
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The new position in y axis

##### Examples

```js
node.setPositionY(100);
```

##### getLocalZOrder

Returns the local Z order of this node.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2674](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2674) |


##### Examples

```js
var localZorder = node.getLocalZOrder();
```

##### setLocalZOrder

LocalZOrder is the 'key' used to sort the node relative to its siblings.                                        <br/>
                                                                                                                <br/>
The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
will be in front of the other node in the array.                                                                <br/>
Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order ) <br/>
And Nodes that have LocalZOder values smaller than 0 are the "left" subtree <br/>
While Nodes with LocalZOder greater than 0 are the "right" subtree.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2683](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2683) |

###### Parameters
- `localZOrder` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setLocalZOrder(1);
```

##### isCascadeOpacityEnabled

Returns whether node's opacity value affect its child nodes.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2706](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2706) |


##### Examples

```js
cc.log(node.isCascadeOpacityEnabled());
```

##### setCascadeOpacityEnabled

Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js:2715](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCNode.js#L2715) |

###### Parameters
- `cascadeOpacityEnabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### Examples

```js
node.setCascadeOpacityEnabled(true);
```

##### attr

Properties configuration function </br>
All properties in attrs will be set to the node, </br>
when the setter of the node is available, </br>
the property will be set via setter function.</br>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:407](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L407) |

###### Parameters
- `attrs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Properties to be set to node

##### Examples

```js
var attrs = { key: 0, num: 100 };
node.attr(attrs);
```

##### getChildByTag

Returns a child from the container given its tag.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L426) |

###### Parameters
- `aTag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> An identifier to find the child node.

##### Examples

```js
var child = node.getChildByTag(1001);
```

##### getChildByUuid

Returns a child from the container given its uuid.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L447) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:470](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L470) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:508](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L508) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:526](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L526) |


##### Examples

```js
var index = node.getSiblingIndex();
```

##### setSiblingIndex

Set the sibling index of this node.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:543](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L543) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
node.setSiblingIndex(1);
```

##### removeFromParent

Remove itself from its parent node. If cleanup is `true`, then also remove all events and actions. <br/>
If the cleanup parameter is not passed, it will force a cleanup, so it is recommended that you always pass in the `false` parameter when calling this API.<br/>
If the node orphan, then nothing happens.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:574](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L574) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:598](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L598) |

###### Parameters
- `child` <a href="../classes/Node.html" class="crosslink">Node</a> The child node which will be removed.
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### Examples

```js
node.removeChild(newNode);
node.removeChild(newNode, false);
```

##### removeChildByTag

Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
If the cleanup parameter is not passed, it will force a cleanup. <br/>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L626) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> An integer number that identifies a child node
- `cleanup` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> true if all running actions and callbacks on the child node will be cleanup, false otherwise.

##### Examples

```js
node.removeChildByTag(1001);
node.removeChildByTag(1001, false);
```

##### removeAllChildren

Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
If the cleanup parameter is not passed, it will force a cleanup.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:652](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L652) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:688](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L688) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:711](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L711) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:738](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L738) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:759](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L759) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L780) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:816](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L816) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:904](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L904) |

###### Parameters
- `comp` <a href="../classes/Component.html" class="crosslink">Component</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeComponent

Removes a component identified by the given name or removes the component object given.
You can also use component.destroy() if you already have the reference.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:950](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L950) |
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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:978](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L978) |

###### Parameters
- `depended` <a href="../classes/Component.html" class="crosslink">Component</a> 


##### destroyAllChildren

Destroy all children from the node, and release all their own references to other objects.<br/>
Actual destruct operation will delayed until before rendering.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js:1042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/utils/base-node.js#L1042) |


##### Examples

```js
node.destroyAllChildren();
```

##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:351](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L351) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `event` <a href="../classes/Event.html" class="crosslink">Event</a> event
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null
- `useCapture` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.

##### Examples

```js
node.once(cc.Node.EventType.TOUCH_END, function (event) {
    cc.log("this is callback");
}, node);
```

##### dispatchEvent

Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:396](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L396) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### emit

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js:410](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event/event-target.js#L410) |

###### Parameters
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- `detail` Any whatever argument the message needs


##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
<br/>
After destroy, this CCObject is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:246](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L246) |


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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:379](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L379) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:412](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L412) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L437) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:447](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L447) |

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




### `touchstart` Event



Module: [cc](../modules/cc.md)





### Index







### Details




### `active-in-hierarchy-changed` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Note: This event is only emitted from the top most node whose active value did changed,
not including its child nodes.


### Index







### Details





