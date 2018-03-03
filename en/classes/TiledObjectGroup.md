## `TiledObjectGroup` Class

Extends [`_SGComponent`](_SGComponent.md)


Module: [cc](../modules/cc.md)


Renders the TMX object group.


### Index

##### Properties

  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy
  - [`node`](#node) `Node` The node this component is attached to. A component is always attached to a node.
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

  - [`getPositionOffset`](#getpositionoffset) Offset position of child objects.
  - [`setPositionOffset`](#setpositionoffset) Offset position of child objects.
  - [`getProperties`](#getproperties) List of properties stored in a dictionary.
  - [`setProperties`](#setproperties) Set the properties of the object group.
  - [`getGroupName`](#getgroupname) Gets the Group name.
  - [`setGroupName`](#setgroupname) Set the Group name.
  - [`getObject`](#getobject) Return the object for the specific object name. <br />
It will return the 1st object found on the array for the given name.
  - [`getObjects`](#getobjects) Gets the objects.
  - [`_createSgNode`](#createsgnode) Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.
  - [`_initSgNode`](#initsgnode) 
  - [`_removeSgNode`](#removesgnode) 
  - [`update`](#update) Update is called every frame, if the Component is enabled.
  - [`lateUpdate`](#lateupdate) LateUpdate is called every frame, if the Component is enabled.
  - [`__preload`](#preload) `__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.
  - [`onLoad`](#onload) When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.
  - [`start`](#start) Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.
  - [`onEnable`](#onenable) Called when this component becomes enabled and its node is active.
  - [`onDisable`](#ondisable) Called when this component becomes disabled or its node becomes inactive.
  - [`onDestroy`](#ondestroy) Called when this component will be destroyed.
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.
  - [`addComponent`](#addcomponent) Adds a component class to the node. You can also add component to node by passing in the name of the script.
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.
  - [`getComponents`](#getcomponents) Returns all components of supplied Type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns the components of supplied type in self or any of its children using depth first search.
  - [`_getLocalBounds`](#getlocalbounds) If the component's bounding box is different from the node's, you can implement this method to supply
a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.
  - [`onRestore`](#onrestore) onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
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
  - [`schedule`](#schedule) Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
  - [`scheduleOnce`](#scheduleonce) Schedules a callback function that runs only once, with a delay of 0 or larger.
  - [`unschedule`](#unschedule) Unschedules a custom callback function.
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
Actions are not affected by this method.
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



### Details


#### Properties


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:61](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L61) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L75) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L111) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:159](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L159) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L166) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:197](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L197) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:213](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L213) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
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



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js:208](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCObject.js#L208) |

##### Examples

```js
obj.name = "New Obj";
```


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


##### getPositionOffset

Offset position of child objects.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:92](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L92) |


##### Examples

```js
var offset = tMXObjectGroup.getPositionOffset();
```

##### setPositionOffset

Offset position of child objects.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:108](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L108) |

###### Parameters
- `offset` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

##### Examples

```js
tMXObjectGroup.setPositionOffset(cc.v2(5, 5));
```

##### getProperties

List of properties stored in a dictionary.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L122) |


##### Examples

```js
var offset = tMXObjectGroup.getProperties();
```

##### setProperties

Set the properties of the object group.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:137](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L137) |

###### Parameters
- `Var` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Examples

```js
tMXObjectGroup.setProperties(obj);
```

##### getGroupName

Gets the Group name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L151) |


##### Examples

```js
var groupName = tMXObjectGroup.getGroupName;
```

##### setGroupName

Set the Group name.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:166](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L166) |

###### Parameters
- `groupName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
tMXObjectGroup.setGroupName("New Group");
```

##### getObject

Return the object for the specific object name. <br />
It will return the 1st object found on the array for the given name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; Null 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:192](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L192) |

###### Parameters
- `objectName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var object = tMXObjectGroup.getObject("Group");
```

##### getObjects

Gets the objects.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js:211](https:/github.com/cocos-creator/engine/blob/master/cocos2d/tilemap/CCTiledObjectGroup.js#L211) |


##### Examples

```js
var objects = tMXObjectGroup.getObjects();
```

##### _createSgNode

Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.

| meta | description |
|------|-------------|
| Returns | _ccsg.Node 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L65) |



##### _initSgNode



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:75](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L75) |



##### _removeSgNode



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js:81](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCSGComponent.js#L81) |



##### update

Update is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:234](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L234) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L243) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:251](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L251) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:262](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L262) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:273](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L273) |



##### onEnable

Called when this component becomes enabled and its node is active.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:284](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L284) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:292](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L292) |



##### onDestroy

Called when this component will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:300](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L300) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:308](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L308) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L313) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:318](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L318) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:328](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L328) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:346](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L346) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L370) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L388) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:406](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L406) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L426) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:439](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L439) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:541](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L541) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:578](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L578) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:595](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L595) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js:611](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCComponent.js#L611) |


##### Examples

```js
this.unscheduleAllCallbacks();
```

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



