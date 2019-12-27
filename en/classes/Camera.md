## `Camera` Class

Extends [`Component`](Component.md)


Module: [cc](../modules/cc.md)


Camera is usefull when making reel game or other games which need scroll screen.
Using camera will be more efficient than moving node to scroll screen.
Camera



### Index

##### Properties

  - [`zoomRatio`](#zoomratio) `Number` The camera zoom ratio, only support 2D camera.
  - [`fov`](#fov) `Number` Field of view.
  - [`orthoSize`](#orthosize) `Number` The viewport size of the Camera when set to orthographic projection.
  - [`nearClip`](#nearclip) `Number` The near clipping plane.
  - [`farClip`](#farclip) `Number` The far clipping plane.
  - [`ortho`](#ortho) `Boolean` Is the camera orthographic (true) or perspective (false)?
  - [`rect`](#rect) `Rect` Four values (0 ~ 1) that indicate where on the screen this camera view will be drawn.
  - [`cullingMask`](#cullingmask) `Number` This is used to render parts of the scene selectively.
  - [`clearFlags`](#clearflags) `Camera.ClearFlags` Determining what to clear when camera rendering.
  - [`backgroundColor`](#backgroundcolor) `Color` The color with which the screen will be cleared.
  - [`depth`](#depth) `Number` Camera's depth in the camera rendering order.
  - [`targetTexture`](#targettexture) `RenderTexture` Destination render texture.
  - [`renderStages`](#renderstages) `Number` Sets the camera's render stages.
  - [`alignWithScreen`](#alignwithscreen) `Boolean` Whether auto align camera viewport to screen
  - [`main`](#main) `Camera` The first enabled camera.
  - [`cameras`](#cameras) `[Camera]` All enabled cameras.
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

  - [`findCamera`](#findcamera) Get the first camera which the node belong to.
  - [`getScreenToWorldMatrix2D`](#getscreentoworldmatrix2d) Get the screen to world matrix, only support 2D camera which alignWithScreen is true.
  - [`getWorldToScreenMatrix2D`](#getworldtoscreenmatrix2d) Get the world to camera matrix, only support 2D camera which alignWithScreen is true.
  - [`getScreenToWorldPoint`](#getscreentoworldpoint) Convert point from screen to world.
  - [`getWorldToScreenPoint`](#getworldtoscreenpoint) Convert point from world to screen.
  - [`getRay`](#getray) Get a ray from screen position
  - [`containsNode`](#containsnode) Check whether the node is in the camera.
  - [`render`](#render) Render the camera manually.
  - [`getNodeToCameraTransform`](#getnodetocameratransform) Returns the matrix that transform the node's (local) space coordinates into the camera's space coordinates.
  - [`getCameraToWorldPoint`](#getcameratoworldpoint) Conver a camera coordinates point to world coordinates.
  - [`getWorldToCameraPoint`](#getworldtocamerapoint) Conver a world coordinates point to camera coordinates.
  - [`getCameraToWorldMatrix`](#getcameratoworldmatrix) Get the camera to world matrix
  - [`getWorldToCameraMatrix`](#getworldtocameramatrix) Get the world to camera matrix
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


##### zoomRatio

> The camera zoom ratio, only support 2D camera.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:159](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L159) |



##### fov

> Field of view. The width of the Camera’s view angle, measured in degrees along the local Y axis.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:176](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L176) |



##### orthoSize

> The viewport size of the Camera when set to orthographic projection.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:194](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L194) |



##### nearClip

> The near clipping plane.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:212](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L212) |



##### farClip

> The far clipping plane.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:231](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L231) |



##### ortho

> Is the camera orthographic (true) or perspective (false)?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:250](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L250) |



##### rect

> Four values (0 ~ 1) that indicate where on the screen this camera view will be drawn.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Rect.html" class="crosslink">Rect</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:269](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L269) |



##### cullingMask

> This is used to render parts of the scene selectively.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:288](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L288) |



##### clearFlags

> Determining what to clear when camera rendering.

| meta | description |
|------|-------------|
| Type | <a href="../enums/Camera.ClearFlags.html" class="crosslink">Camera.ClearFlags</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:306](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L306) |



##### backgroundColor

> The color with which the screen will be cleared.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:326](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L326) |



##### depth

> Camera's depth in the camera rendering order.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:344](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L344) |



##### targetTexture

> Destination render texture.
Usually cameras render directly to screen, but for some effects it is useful to make a camera render into a texture.

| meta | description |
|------|-------------|
| Type | <a href="../classes/RenderTexture.html" class="crosslink">RenderTexture</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:364](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L364) |



##### renderStages

> Sets the camera's render stages.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:384](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L384) |



##### alignWithScreen

> Whether auto align camera viewport to screen

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:402](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L402) |



##### main

> The first enabled camera.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Camera.html" class="crosslink">Camera</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:424](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L424) |



##### cameras

> All enabled cameras.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Camera.html" class="crosslink">[Camera]</a> |
| Defined in | [cocos2d/core/camera/CCCamera.js:434](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L434) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:61](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L61) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:75](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L75) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:106](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L106) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:147](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L147) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:154](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L154) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:186](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L186) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:202](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L202) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L258) |

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


##### findCamera

Get the first camera which the node belong to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Camera.html" class="crosslink">Camera</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:446](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L446) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getScreenToWorldMatrix2D

Get the screen to world matrix, only support 2D camera which alignWithScreen is true.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:603](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L603) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getWorldToScreenMatrix2D

Get the world to camera matrix, only support 2D camera which alignWithScreen is true.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:618](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L618) |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getScreenToWorldPoint

Convert point from screen to world.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:650](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L650) |

###### Parameters
- `screenPosition` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getWorldToScreenPoint

Convert point from world to screen.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:673](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L673) |

###### Parameters
- `worldPosition` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getRay

Get a ray from screen position

| meta | description |
|------|-------------|
| Returns | Ray 
| Defined in | [cocos2d/core/camera/CCCamera.js:697](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L697) |

###### Parameters
- `screenPos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### containsNode

Check whether the node is in the camera.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:723](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L723) |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> the node which need to check


##### render

Render the camera manually.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/camera/CCCamera.js:736](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L736) |

###### Parameters
- `root` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getNodeToCameraTransform

Returns the matrix that transform the node's (local) space coordinates into the camera's space coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:799](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L799) |
| Deprecated | since v2.0.0 |

###### Parameters
- `node` <a href="../classes/Node.html" class="crosslink">Node</a> the node which should transform


##### getCameraToWorldPoint

Conver a camera coordinates point to world coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:820](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L820) |
| Deprecated | since v2.1.3 |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point which should transform
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point to receive the result


##### getWorldToCameraPoint

Conver a world coordinates point to camera coordinates.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:835](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L835) |
| Deprecated | since v2.1.3 |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the point to receive the result


##### getCameraToWorldMatrix

Get the camera to world matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:850](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L850) |
| Deprecated | since v2.1.3 |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### getWorldToCameraMatrix

Get the world to camera matrix

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> 
| Defined in | [cocos2d/core/camera/CCCamera.js:865](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/camera/CCCamera.js#L865) |
| Deprecated | since v2.1.3 |

###### Parameters
- `out` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> the matrix to receive the result


##### update

Update is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:223](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L223) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:234](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L234) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:244](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L244) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:255](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L255) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:268](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L268) |



##### onEnable

Called when this component becomes enabled and its node is active.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:281](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L281) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:291](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L291) |



##### onDestroy

Called when this component will be destroyed.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L301) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:311](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L311) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:316](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L316) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:321](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L321) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:331](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L331) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:349](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L349) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:373](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L373) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:391](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L391) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:409](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L409) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:429](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L429) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:442](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L442) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:536](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L536) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:573](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L573) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:590](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L590) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:606](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/components/CCComponent.js#L606) |


##### Examples

```js
this.unscheduleAllCallbacks();
```

##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L293) |


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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:460](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L460) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:485](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L485) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:495](https://github.com/cocos-creator/engine/blob/e222465ce8426e5cf32052e4f37701f3a529ed18/cocos2d/core/platform/CCObject.js#L495) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



