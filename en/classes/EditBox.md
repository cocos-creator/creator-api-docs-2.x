## `EditBox` Class

Extends [`Component`](Component.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


cc.EditBox is a component for inputing text, you can use it to gather small amounts of text from users.



### Index

##### Properties

  - [`string`](#string) `String` Input string of EditBox.
  - [`textLabel`](#textlabel) `Label` The Label component attached to the node for EditBox's input text label
  - [`placeholderLabel`](#placeholderlabel) `Label` The Label component attached to the node for EditBox's placeholder text label
  - [`background`](#background) `Sprite` The Sprite component attached to the node for EditBox's background
  - [`backgroundImage`](#backgroundimage) `SpriteFrame` The background image of EditBox.
  - [`returnType`](#returntype) `EditBox.KeyboardReturnType` The return key type of EditBox.
  - [`inputFlag`](#inputflag) `EditBox.InputFlag` Set the input flags that are to be applied to the EditBox.
  - [`inputMode`](#inputmode) `EditBox.InputMode` Set the input mode of the edit box.
  - [`fontSize`](#fontsize) `Number` Font size of the input text.
  - [`lineHeight`](#lineheight) `Number` Change the lineHeight of displayed text.
  - [`fontColor`](#fontcolor) `Color` Font color of the input text.
  - [`placeholder`](#placeholder) `String` The display text of placeholder.
  - [`placeholderFontSize`](#placeholderfontsize) `Number` The font size of placeholder.
  - [`placeholderFontColor`](#placeholderfontcolor) `Color` The font color of placeholder.
  - [`maxLength`](#maxlength) `Number` The maximize input length of EditBox.
  - [`stayOnTop`](#stayontop) `Boolean` The input is always visible and be on top of the game view (only useful on Web), this property will be removed on v2.1
  - [`tabIndex`](#tabindex) `Number` Set the tabIndex of the DOM input element (only useful on Web).
  - [`editingDidBegan`](#editingdidbegan) `Component.EventHandler[]` The event handler to be called when EditBox began to edit text.
  - [`textChanged`](#textchanged) `Component.EventHandler[]` The event handler to be called when EditBox text changes.
  - [`editingDidEnded`](#editingdidended) `Component.EventHandler[]` The event handler to be called when EditBox edit ends.
  - [`editingReturn`](#editingreturn) `Component.EventHandler[]` The event handler to be called when return key is pressed.
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

  - [`setFocus`](#setfocus) Let the EditBox get focus, this method will be removed on v2.1
  - [`focus`](#focus) Let the EditBox get focus
  - [`blur`](#blur) Let the EditBox lose focus
  - [`isFocused`](#isfocused) Determine whether EditBox is getting focus or not.
  - [`destroy`](#destroy) call the destroy method on this component or the associated node explicitly.
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
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### Events

  - [`editing-did-began`](#editing-did-began) Note: This event is emitted from the node to which the component belongs.
  - [`editing-did-ended`](#editing-did-ended) Note: This event is emitted from the node to which the component belongs.
  - [`text-changed`](#text-changed) Note: This event is emitted from the node to which the component belongs.
  - [`editing-return`](#editing-return) Note: This event is emitted from the node to which the component belongs.


### Details


#### Properties


##### string

> Input string of EditBox.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:66](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L66) |



##### textLabel

> The Label component attached to the node for EditBox's input text label

| meta | description |
|------|-------------|
| Type | <a href="../classes/Label.html" class="crosslink">Label</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:87](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L87) |



##### placeholderLabel

> The Label component attached to the node for EditBox's placeholder text label

| meta | description |
|------|-------------|
| Type | <a href="../classes/Label.html" class="crosslink">Label</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:104](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L104) |



##### background

> The Sprite component attached to the node for EditBox's background

| meta | description |
|------|-------------|
| Type | <a href="../classes/Sprite.html" class="crosslink">Sprite</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:121](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L121) |



##### backgroundImage

> The background image of EditBox. This property will be removed in the future, use editBox.background instead please.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:143](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L143) |
| Deprecated | since v2.1 |



##### returnType

> The return key type of EditBox.
Note: it is meaningless for web platforms and desktop platforms.

| meta | description |
|------|-------------|
| Type | <a href="../enums/EditBox.KeyboardReturnType.html" class="crosslink">EditBox.KeyboardReturnType</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:165](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L165) |



##### inputFlag

> Set the input flags that are to be applied to the EditBox.

| meta | description |
|------|-------------|
| Type | <a href="../enums/EditBox.InputFlag.html" class="crosslink">EditBox.InputFlag</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:188](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L188) |



##### inputMode

> Set the input mode of the edit box.
If you pass ANY, it will create a multiline EditBox.

| meta | description |
|------|-------------|
| Type | <a href="../enums/EditBox.InputMode.html" class="crosslink">EditBox.InputMode</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:202](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L202) |



##### fontSize

> Font size of the input text. This property will be removed in the future, use editBox.textLabel.fontSize instead please.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:223](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L223) |
| Deprecated | since v2.1 |



##### lineHeight

> Change the lineHeight of displayed text. This property will be removed in the future, use editBox.textLabel.lineHeight instead.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:251](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L251) |
| Deprecated | since v2.1 |



##### fontColor

> Font color of the input text. This property will be removed in the future, use editBox.textLabel.node.color instead.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:279](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L279) |
| Deprecated | since v2.1 |



##### placeholder

> The display text of placeholder.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:305](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L305) |



##### placeholderFontSize

> The font size of placeholder. This property will be removed in the future, use editBox.placeholderLabel.fontSize instead.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:331](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L331) |
| Deprecated | since v2.1 |



##### placeholderFontColor

> The font color of placeholder. This property will be removed in the future, use editBox.placeholderLabel.node.color instead.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:359](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L359) |
| Deprecated | since v2.1 |



##### maxLength

> The maximize input length of EditBox.
- If pass a value less than 0, it won't limit the input number of characters.
- If pass 0, it doesn't allow input any characters.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:385](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L385) |



##### stayOnTop

> The input is always visible and be on top of the game view (only useful on Web), this property will be removed on v2.1
!zh 输入框总是可见，并且永远在游戏视图的上面（这个属性只有在 Web 上面修改有意义），该属性会在 v2.1 中移除
Note: only available on Web at the moment.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:405](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L405) |
| Deprecated | since 2.0.8 |



##### tabIndex

> Set the tabIndex of the DOM input element (only useful on Web).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:421](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L421) |



##### editingDidBegan

> The event handler to be called when EditBox began to edit text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:441](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L441) |



##### textChanged

> The event handler to be called when EditBox text changes.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:451](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L451) |



##### editingDidEnded

> The event handler to be called when EditBox edit ends.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:461](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L461) |



##### editingReturn

> The event handler to be called when return key is pressed. Windows is not supported.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:471](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L471) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in `_onPreDestroy`.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L63) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L80) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L111) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L159) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L191) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:207](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L207) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L240) |

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
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L258) |

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


##### setFocus

Let the EditBox get focus, this method will be removed on v2.1

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:792](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L792) |
| Deprecated | since 2.0.8 |



##### focus

Let the EditBox get focus

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:805](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L805) |



##### blur

Let the EditBox lose focus

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:816](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L816) |



##### isFocused

Determine whether EditBox is getting focus or not.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:827](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L827) |



##### destroy

if you don't need the EditBox and it isn't in any running Scene, you should
call the destroy method on this component or the associated node explicitly.
Otherwise, the created DOM element won't be removed from web page.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/components/editbox/CCEditBox.js:895](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/editbox/CCEditBox.js#L895) |


##### Examples

```js
editbox.node.parent = null;  // or  editbox.node.removeFromParent(false);
// when you don't need editbox anymore
editbox.node.destroy();
```

##### update

Update is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:228](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L228) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:239](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L239) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:250](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L250) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:261](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L261) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:274](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L274) |



##### onEnable

Called when this component becomes enabled and its node is active.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:287](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L287) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:297](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L297) |



##### onDestroy

Called when this component will be destroyed.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:307](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L307) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:317](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L317) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:322](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L322) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:327](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L327) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:337](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L337) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:355](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L355) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:379](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L379) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:397](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L397) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:415](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L415) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:435](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L435) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:448](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L448) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:540](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L540) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:578](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L578) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:595](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L595) |

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
| Defined in | [cocos2d/core/components/CCComponent.js:611](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/components/CCComponent.js#L611) |


##### Examples

```js
this.unscheduleAllCallbacks();
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
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L511) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/platform/CCObject.js#L524) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### Events

### `editing-did-began` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `editing-did-ended` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `text-changed` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `editing-return` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details





