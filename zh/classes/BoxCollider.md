## `BoxCollider` 类型

继承于 [`Collider`](Collider.md)


模块: [cc](../modules/cc.md)


包围盒碰撞组件


### 索引

##### 属性（properties）

  - [`offset`](#offset) `Vec2` 位置偏移量
  - [`size`](#size) `Size` 包围盒大小
  - [`tag`](#tag) `Integer` 标签。当一个节点上有多个碰撞组件时，在发生碰撞后，可以使用此标签来判断是节点上的哪个碰撞组件被碰撞了。
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


##### offset

> 位置偏移量

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js:40](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js#L40) |



##### size

> 包围盒大小

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js:57](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCBoxCollider.js#L57) |



##### tag

> 标签。当一个节点上有多个碰撞组件时，在发生碰撞后，可以使用此标签来判断是节点上的哪个碰撞组件被碰撞了。

| meta | description |
|------|-------------|
| 类型 | Integer |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCCollider.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/collider/CCCollider.js#L46) |



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



