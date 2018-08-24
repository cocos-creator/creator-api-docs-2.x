## `EditBox` 类型

继承于 [`_RendererUnderSG`](_RendererUnderSG.md)


模块: [cc](../modules/cc.md)


EditBox 组件，用于获取用户的输入文本。


### 索引

##### 属性（properties）

  - [`string`](#string) `String` 输入框的初始输入内容，如果为空则会显示占位符的文本。
  - [`backgroundImage`](#backgroundimage) `SpriteFrame` 输入框的背景图片
  - [`returnType`](#returntype) `EditBox.KeyboardReturnType` 指定移动设备上面回车按钮的样式。
  - [`inputFlag`](#inputflag) `EditBox.InputFlag` 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。
  - [`inputMode`](#inputmode) `EditBox.InputMode` 指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。
  - [`fontSize`](#fontsize) `Number` 输入框文本的字体大小
  - [`lineHeight`](#lineheight) `Number` 输入框文本的行高。
  - [`fontColor`](#fontcolor) `Color` 输入框文本的颜色。
  - [`placeholder`](#placeholder) `String` 输入框占位符的文本内容。
  - [`placeholderFontSize`](#placeholderfontsize) `Number` 输入框占位符的字体大小。
  - [`placeholderFontColor`](#placeholderfontcolor) `Color` 输入框占位符的字体颜色。
  - [`maxLength`](#maxlength) `Number` 输入框最大允许输入的字符个数。
  - [`stayOnTop`](#stayontop) `Boolean` 
  - [`tabIndex`](#tabindex) `Number` 修改 DOM 输入元素的 tabIndex，这个属性只有在 Web 上面修改有意义。
  - [`editingDidBegan`](#editingdidbegan) `Component.EventHandler[]` 开始编辑文本输入框触发的事件回调。
  - [`textChanged`](#textchanged) `Component.EventHandler[]` 编辑文本输入框时触发的事件回调。
  - [`editingDidEnded`](#editingdidended) `Component.EventHandler[]` 结束编辑文本输入框时触发的事件回调。
  - [`editingReturn`](#editingreturn) `Component.EventHandler[]` 当用户按下回车按键时的事件回调，目前不支持 windows 平台
  - [`_sgNode`](#sgnode) `_ccsg.Node` Reference to the instance of _ccsg.Node
  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,...
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

  - [`setFocus`](#setfocus) 让当前 EditBox 获得焦点，只有在 stayOnTop 为 true 的时候设置有效...
  - [`isFocused`](#isfocused) 判断 EditBox 是否获得了焦点...
  - [`destroy`](#destroy) 如果你不再使用 EditBox，并且组件未添加到场景中，那么你必须手动对组件或所在节点调用 destroy。
  - [`_createSgNode`](#createsgnode) Create and returns your new scene graph node (SGNode) to add to scene graph....
  - [`_initSgNode`](#initsgnode) 
  - [`_removeSgNode`](#removesgnode) 
  - [`update`](#update) 如果该组件启用，则每帧调用 update。
  - [`lateUpdate`](#lateupdate) 如果该组件启用，则每帧调用 LateUpdate。
  - [`__preload`](#preload) `__preload` is called before every onLoad....
  - [`onLoad`](#onload) 当附加到一个激活的节点上或者其节点第一次激活时候调用。
  - [`start`](#start) 如果该组件第一次启用，则在所有组件的 update 之前调用。
  - [`onEnable`](#onenable) 当该组件被启用，并且它的节点也激活时。
  - [`onDisable`](#ondisable) 当该组件被禁用或节点变为无效时调用。
  - [`onDestroy`](#ondestroy) 当该组件被销毁时调用
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
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。
  - [`_destruct`](#destruct) Clear all references in the instance....
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object. (Editor Only)
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### 事件

  - [`editing-did-began`](#editing-did-began) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`editing-did-ended`](#editing-did-ended) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`text-changed`](#text-changed) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`editing-return`](#editing-return) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### Details


#### 属性（properties）


##### string

> 输入框的初始输入内容，如果为空则会显示占位符的文本。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:179](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L179) |



##### backgroundImage

> 输入框的背景图片

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:194](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L194) |



##### returnType

> 指定移动设备上面回车按钮的样式。
注意：这个选项对 web 平台与 desktop 平台无效。

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/EditBox.KeyboardReturnType.html" class="crosslink">EditBox.KeyboardReturnType</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:216](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L216) |



##### inputFlag

> 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/EditBox.InputFlag.html" class="crosslink">EditBox.InputFlag</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:236](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L236) |



##### inputMode

> 指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/EditBox.InputMode.html" class="crosslink">EditBox.InputMode</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:250](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L250) |



##### fontSize

> 输入框文本的字体大小

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:268](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L268) |



##### lineHeight

> 输入框文本的行高。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:281](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L281) |



##### fontColor

> 输入框文本的颜色。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:294](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L294) |



##### placeholder

> 输入框占位符的文本内容。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:307](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L307) |



##### placeholderFontSize

> 输入框占位符的字体大小。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:320](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L320) |



##### placeholderFontColor

> 输入框占位符的字体颜色。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:333](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L333) |



##### maxLength

> 输入框最大允许输入的字符个数。
- 如果值为小于 0 的值，则不会限制输入字符个数。
- 如果值为 0，则不允许用户进行任何输入。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:346](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L346) |



##### stayOnTop

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:363](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L363) |



##### tabIndex

> 修改 DOM 输入元素的 tabIndex，这个属性只有在 Web 上面修改有意义。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:383](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L383) |



##### editingDidBegan

> 开始编辑文本输入框触发的事件回调。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:399](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L399) |



##### textChanged

> 编辑文本输入框时触发的事件回调。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:409](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L409) |



##### editingDidEnded

> 结束编辑文本输入框时触发的事件回调。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:419](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L419) |



##### editingReturn

> 当用户按下回车按键时的事件回调，目前不支持 windows 平台

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| 定义于 | [cocos2d/core/components/CCEditBox.js:429](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L429) |



##### _sgNode

> Reference to the instance of _ccsg.Node
If it is possible to return null from your overloaded _createSgNode,
then you should always check for null before using this property and reimplement `__preload`.

| meta | description |
|------|-------------|
| 类型 | _ccsg.Node |
| 定义于 | [cocos2d/core/components/CCRendererUnderSG.js:42](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCRendererUnderSG.js#L42) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:62](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L62) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L76) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:112](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L112) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:160](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L160) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:167](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L167) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:198](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L198) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:214](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L214) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:243](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L243) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:261](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L261) |

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


##### setFocus

让当前 EditBox 获得焦点，只有在 stayOnTop 为 true 的时候设置有效
Note: only available on Web at the moment.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCEditBox.js:559](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L559) |



##### isFocused

判断 EditBox 是否获得了焦点
Note: only available on Web at the moment.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCEditBox.js:571](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L571) |



##### destroy

如果你不再使用 EditBox，并且组件未添加到场景中，那么你必须手动对组件或所在节点调用 destroy。
这样才能移除网页上的 DOM 节点，避免 Web 平台内存泄露。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/components/CCEditBox.js:639](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCEditBox.js#L639) |


##### 示例

```js
editbox.node.parent = null;  // or  editbox.node.removeFromParent(false);
// when you don't need editbox anymore
editbox.node.destroy();
```

##### _createSgNode

Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.

| meta | description |
|------|-------------|
| 返回 | _ccsg.Node 
| 定义于 | [cocos2d/core/components/CCSGComponent.js:66](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L66) |



##### _initSgNode



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCSGComponent.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L76) |



##### _removeSgNode



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCSGComponent.js:82](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L82) |



##### update

如果该组件启用，则每帧调用 update。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:235](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L235) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:244](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L244) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:252](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L252) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:263](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L263) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:274](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L274) |



##### onEnable

当该组件被启用，并且它的节点也激活时。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:285](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L285) |



##### onDisable

当该组件被禁用或节点变为无效时调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:293](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L293) |



##### onDestroy

当该组件被销毁时调用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L301) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:309](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L309) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:314](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L314) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:319](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L319) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:329](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L329) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:347](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L347) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:371](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L371) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:389](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L389) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:407](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L407) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:427](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L427) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:440](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L440) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:542](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L542) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:579](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L579) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:596](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L596) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:612](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L612) |


##### 示例

```js
this.unscheduleAllCallbacks();
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
| 定义于 | [cocos2d/core/platform/CCObject.js:428](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L428) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:461](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L461) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:486](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L486) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:496](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L496) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### 事件

### `editing-did-began` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `editing-did-ended` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `text-changed` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `editing-return` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details





