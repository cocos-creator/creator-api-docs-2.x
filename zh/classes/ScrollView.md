## `ScrollView` 类型

继承于 [`Component`](Component.md)


模块: [cc](../modules/cc.md)


滚动视图组件


### 索引

##### 属性（properties）

  - [`content`](#content) `Node` 可滚动展示内容的节点。
  - [`horizontal`](#horizontal) `Boolean` 是否开启水平滚动。
  - [`vertical`](#vertical) `Boolean` 是否开启垂直滚动。
  - [`inertia`](#inertia) `Boolean` 是否开启滚动惯性。
  - [`brake`](#brake) `Number` 开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。
  - [`elastic`](#elastic) `Boolean` 是否允许滚动内容超过边界，并在停止触摸后回弹。
  - [`bounceDuration`](#bounceduration) `Number` 回弹持续的时间，0 表示将立即反弹。
  - [`horizontalScrollBar`](#horizontalscrollbar) `Scrollbar` 水平滚动的 ScrollBar。
  - [`verticalScrollBar`](#verticalscrollbar) `Scrollbar` 垂直滚动的 ScrollBar。
  - [`scrollEvents`](#scrollevents) `Component.EventHandler[]` 滚动视图的事件回调函数
  - [`cancelInnerEvents`](#cancelinnerevents) `Boolean` 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。
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

  - [`scrollToBottom`](#scrolltobottom) 视图内容将在规定时间内滚动到视图底部。
  - [`scrollToTop`](#scrolltotop) 视图内容将在规定时间内滚动到视图顶部。
  - [`scrollToLeft`](#scrolltoleft) 视图内容将在规定时间内滚动到视图左边。
  - [`scrollToRight`](#scrolltoright) 视图内容将在规定时间内滚动到视图右边。
  - [`scrollToTopLeft`](#scrolltotopleft) 视图内容将在规定时间内滚动到视图左上角。
  - [`scrollToTopRight`](#scrolltotopright) 视图内容将在规定时间内滚动到视图右上角。
  - [`scrollToBottomLeft`](#scrolltobottomleft) 视图内容将在规定时间内滚动到视图左下角。
  - [`scrollToBottomRight`](#scrolltobottomright) 视图内容将在规定时间内滚动到视图右下角。
  - [`scrollToOffset`](#scrolltooffset) 视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond参数不传，则立即滚动到指定偏移位置。
  - [`getScrollOffset`](#getscrolloffset) 获取滚动视图相对于左上角原点的当前滚动偏移
  - [`getMaxScrollOffset`](#getmaxscrolloffset) 获取滚动视图最大可以滚动的偏移量
  - [`scrollToPercentHorizontal`](#scrolltopercenthorizontal) 视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。
  - [`scrollTo`](#scrollto) 视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。
  - [`scrollToPercentVertical`](#scrolltopercentvertical) 视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。
  - [`stopAutoScroll`](#stopautoscroll) 停止自动滚动, 调用此 API 可以让 Scrollview 立即停止滚动
  - [`setContentPosition`](#setcontentposition) 设置当前视图内容的坐标点。
  - [`getContentPosition`](#getcontentposition) 获取当前视图内容的坐标点。
  - [`isScrolling`](#isscrolling) 用户是否在拖拽当前滚动视图
  - [`isAutoScrolling`](#isautoscrolling) 当前滚动视图是否在惯性滚动
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
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) Clear all references in the instance....
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object. (Editor Only)
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



##### 事件

  - [`scroll-to-top`](#scroll-to-top) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scroll-to-bottom`](#scroll-to-bottom) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scroll-to-left`](#scroll-to-left) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scroll-to-right`](#scroll-to-right) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scrolling`](#scrolling) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`bounce-bottom`](#bounce-bottom) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`bounce-top`](#bounce-top) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`bounce-left`](#bounce-left) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`bounce-right`](#bounce-right) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scroll-ended`](#scroll-ended) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`touch-up`](#touch-up) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
  - [`scroll-began`](#scroll-began) 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### Details


#### 属性（properties）


##### content

> 可滚动展示内容的节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:202](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L202) |



##### horizontal

> 是否开启水平滚动。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:213](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L213) |



##### vertical

> 是否开启垂直滚动。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:224](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L224) |



##### inertia

> 是否开启滚动惯性。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:235](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L235) |



##### brake

> 开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:245](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L245) |



##### elastic

> 是否允许滚动内容超过边界，并在停止触摸后回弹。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:260](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L260) |



##### bounceDuration

> 回弹持续的时间，0 表示将立即反弹。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:271](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L271) |



##### horizontalScrollBar

> 水平滚动的 ScrollBar。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Scrollbar.html" class="crosslink">Scrollbar</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:282](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L282) |



##### verticalScrollBar

> 垂直滚动的 ScrollBar。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Scrollbar.html" class="crosslink">Scrollbar</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:300](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L300) |



##### scrollEvents

> 滚动视图的事件回调函数

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:318](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L318) |



##### cancelInnerEvents

> 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。
注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCScrollView.js:329](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L329) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:61](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L61) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:75](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L75) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:106](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L106) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:147](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L147) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:154](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L154) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:185](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L185) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:201](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L201) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:243](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L243) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:261](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L261) |

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


##### scrollToBottom

视图内容将在规定时间内滚动到视图底部。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:347](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L347) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the bottom of the view.
scrollView.scrollToBottom(0.1);
```

##### scrollToTop

视图内容将在规定时间内滚动到视图顶部。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:372](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L372) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the top of the view.
scrollView.scrollToTop(0.1);
```

##### scrollToLeft

视图内容将在规定时间内滚动到视图左边。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:397](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L397) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the left of the view.
scrollView.scrollToLeft(0.1);
```

##### scrollToRight

视图内容将在规定时间内滚动到视图右边。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:422](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L422) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the right of the view.
scrollView.scrollToRight(0.1);
```

##### scrollToTopLeft

视图内容将在规定时间内滚动到视图左上角。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:447](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L447) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the upper left corner of the view.
scrollView.scrollToTopLeft(0.1);
```

##### scrollToTopRight

视图内容将在规定时间内滚动到视图右上角。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:472](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L472) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the top right corner of the view.
scrollView.scrollToTopRight(0.1);
```

##### scrollToBottomLeft

视图内容将在规定时间内滚动到视图左下角。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:497](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L497) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the lower left corner of the view.
scrollView.scrollToBottomLeft(0.1);
```

##### scrollToBottomRight

视图内容将在规定时间内滚动到视图右下角。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:522](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L522) |

###### 参数列表
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to the lower right corner of the view.
scrollView.scrollToBottomRight(0.1);
```

##### scrollToOffset

视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond参数不传，则立即滚动到指定偏移位置。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:548](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L548) |

###### 参数列表
- `offset` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> A Vec2, the value of which each axis between 0 and maxScrollOffset
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the specific offset of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to middle position in 0.1 second in x-axis
let maxScrollOffset = this.getMaxScrollOffset();
scrollView.scrollToOffset(cc.v2(maxScrollOffset.x / 2, 0), 0.1);
```

##### getScrollOffset

获取滚动视图相对于左上角原点的当前滚动偏移

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/components/CCScrollView.js:582](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L582) |



##### getMaxScrollOffset

获取滚动视图最大可以滚动的偏移量

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/components/CCScrollView.js:595](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L595) |



##### scrollToPercentHorizontal

视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:612](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L612) |

###### 参数列表
- `percent` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A value between 0 and 1.
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the horizontal percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Scroll to middle position.
scrollView.scrollToBottomRight(0.5, 0.1);
```

##### scrollTo

视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:638](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L638) |

###### 参数列表
- `anchor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> A point which will be clamp between cc.v2(0,0) and cc.v2(1,1).
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### 示例

```js
// Vertical scroll to the bottom of the view.
scrollView.scrollTo(cc.v2(0, 1), 0.1);

// Horizontal scroll to view right.
scrollView.scrollTo(cc.v2(1, 0), 0.1);
```

##### scrollToPercentVertical

视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:667](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L667) |

###### 参数列表
- `percent` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A value between 0 and 1.
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the vertical percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.
// Scroll to middle position.
scrollView.scrollToPercentVertical(0.5, 0.1);


##### stopAutoScroll

停止自动滚动, 调用此 API 可以让 Scrollview 立即停止滚动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:692](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L692) |



##### setContentPosition

设置当前视图内容的坐标点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCScrollView.js:702](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L702) |

###### 参数列表
- `position` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The position in content's parent space.


##### getContentPosition

获取当前视图内容的坐标点。

| meta | description |
|------|-------------|
| 返回 | Position 
| 定义于 | [cocos2d/core/components/CCScrollView.js:717](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L717) |



##### isScrolling

用户是否在拖拽当前滚动视图

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/components/CCScrollView.js:727](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L727) |



##### isAutoScrolling

当前滚动视图是否在惯性滚动

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/components/CCScrollView.js:737](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCScrollView.js#L737) |



##### update

如果该组件启用，则每帧调用 update。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:222](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L222) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:233](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L233) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:243](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L243) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:254](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L254) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:267](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L267) |



##### onEnable

当该组件被启用，并且它的节点也激活时。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:280](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L280) |



##### onDisable

当该组件被禁用或节点变为无效时调用。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:290](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L290) |



##### onDestroy

当该组件被销毁时调用<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:300](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L300) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:310](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L310) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:315](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L315) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:320](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L320) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:330](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L330) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:348](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L348) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:372](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L372) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:390](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L390) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:408](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L408) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:428](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L428) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:441](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L441) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:535](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L535) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:572](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L572) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:589](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L589) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:605](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCComponent.js#L605) |


##### 示例

```js
this.unscheduleAllCallbacks();
```

##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:296](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L296) |


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
| 定义于 | [cocos2d/core/platform/CCObject.js:430](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L430) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:463](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L463) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:488](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L488) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:498](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCObject.js#L498) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 




#### 事件

### `scroll-to-top` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scroll-to-bottom` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scroll-to-left` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scroll-to-right` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scrolling` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `bounce-bottom` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `bounce-top` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `bounce-left` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `bounce-right` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scroll-ended` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `touch-up` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details




### `scroll-began` Event



模块: [cc](../modules/cc.md)


注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。


### 索引







### Details





