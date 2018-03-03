## `PageView` Class

Extends [`ScrollView`](ScrollView.md)


Module: [cc](../modules/cc.md)


The PageView control


### Index

##### Properties

  - [`sizeMode`](#sizemode) `PageView.SizeMode` Specify the size type of each page in PageView.
  - [`direction`](#direction) `PageView.Direction` The page view direction
  - [`scrollThreshold`](#scrollthreshold) `Number` The scroll threshold value, when drag exceeds this value,
release the next page will automatically scroll, less than the restore
  - [`autoPageTurningThreshold`](#autopageturningthreshold) `Number` Auto page turning velocity threshold. When users swipe the PageView quickly,
it will calculate a velocity based on the scroll distance and time,
if the calculated velocity is larger than the threshold, then it will trigger page turning.
  - [`pageTurningEventTiming`](#pageturningeventtiming) `Number` Change the PageTurning event timing of PageView.
  - [`indicator`](#indicator) `PageViewIndicator` The Page View Indicator
  - [`pageTurningSpeed`](#pageturningspeed) `Number` The time required to turn over a page. unit: second
  - [`pageEvents`](#pageevents) `Component.EventHandler[]` PageView events callback
  - [`content`](#content) `Node` This is a reference to the UI element to be scrolled.
  - [`horizontal`](#horizontal) `Boolean` Enable horizontal scroll.
  - [`vertical`](#vertical) `Boolean` Enable vertical scroll.
  - [`inertia`](#inertia) `Boolean` When inertia is set, the content will continue to move when touch ended.
  - [`brake`](#brake) `Number` It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
A value of 0 will never stop the movement until it reaches to the boundary of scrollview.
  - [`elastic`](#elastic) `Boolean` When elastic is set, the content will be bounce back when move out of boundary.
  - [`bounceDuration`](#bounceduration) `Number` The elapse time of bouncing back. A value of 0 will bounce back immediately.
  - [`horizontalScrollBar`](#horizontalscrollbar) `Scrollbar` The horizontal scrollbar reference.
  - [`verticalScrollBar`](#verticalscrollbar) `Scrollbar` The vertical scrollbar reference.
  - [`scrollEvents`](#scrollevents) `Component.EventHandler[]` Scrollview events callback
  - [`cancelInnerEvents`](#cancelinnerevents) `Boolean` If cancelInnerEvents is set to true, the scroll behavior will cancel touch events on inner content nodes
It's set to true by default.
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

  - [`getCurrentPageIndex`](#getcurrentpageindex) Returns current page index
  - [`setCurrentPageIndex`](#setcurrentpageindex) Set current page index
  - [`getPages`](#getpages) Returns all pages of pageview
  - [`addPage`](#addpage) At the end of the current page view to insert a new view
  - [`insertPage`](#insertpage) Inserts a page in the specified location
  - [`removePage`](#removepage) Removes a page from PageView.
  - [`removePageAtIndex`](#removepageatindex) Removes a page at index of PageView.
  - [`removeAllPages`](#removeallpages) Removes all pages from PageView
  - [`scrollToPage`](#scrolltopage) Scroll PageView to index.
  - [`scrollToBottom`](#scrolltobottom) Scroll the content to the bottom boundary of ScrollView.
  - [`scrollToTop`](#scrolltotop) Scroll the content to the top boundary of ScrollView.
  - [`scrollToLeft`](#scrolltoleft) Scroll the content to the left boundary of ScrollView.
  - [`scrollToRight`](#scrolltoright) Scroll the content to the right boundary of ScrollView.
  - [`scrollToTopLeft`](#scrolltotopleft) Scroll the content to the top left boundary of ScrollView.
  - [`scrollToTopRight`](#scrolltotopright) Scroll the content to the top right boundary of ScrollView.
  - [`scrollToBottomLeft`](#scrolltobottomleft) Scroll the content to the bottom left boundary of ScrollView.
  - [`scrollToBottomRight`](#scrolltobottomright) Scroll the content to the bottom right boundary of ScrollView.
  - [`scrollToOffset`](#scrolltooffset) Scroll with an offset related to the ScrollView's top left origin, if timeInSecond is omitted, then it will jump to the
      specific offset immediately.
  - [`getScrollOffset`](#getscrolloffset) Get the positive offset value corresponds to the content's top left boundary.
  - [`getMaxScrollOffset`](#getmaxscrolloffset) Get the maximize available  scroll offset
  - [`scrollToPercentHorizontal`](#scrolltopercenthorizontal) Scroll the content to the horizontal percent position of ScrollView.
  - [`scrollTo`](#scrollto) Scroll the content to the percent position of ScrollView in any direction.
  - [`scrollToPercentVertical`](#scrolltopercentvertical) Scroll the content to the vertical percent position of ScrollView.
  - [`stopAutoScroll`](#stopautoscroll) Stop auto scroll immediately
  - [`setContentPosition`](#setcontentposition) Modify the content position.
  - [`getContentPosition`](#getcontentposition) Query the content's position in its parent space.
  - [`isScrolling`](#isscrolling) Query whether the user is currently dragging the ScrollView to scroll it
  - [`isAutoScrolling`](#isautoscrolling) Query whether the ScrollView is currently scrolling because of a bounceback or inertia slowdown.
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



##### Events

  - [`page-turning`](#page-turning) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-to-top`](#scroll-to-top) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-to-bottom`](#scroll-to-bottom) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-to-left`](#scroll-to-left) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-to-right`](#scroll-to-right) Note: This event is emitted from the node to which the component belongs.
  - [`scrolling`](#scrolling) Note: This event is emitted from the node to which the component belongs.
  - [`bounce-bottom`](#bounce-bottom) Note: This event is emitted from the node to which the component belongs.
  - [`bounce-top`](#bounce-top) Note: This event is emitted from the node to which the component belongs.
  - [`bounce-left`](#bounce-left) Note: This event is emitted from the node to which the component belongs.
  - [`bounce-right`](#bounce-right) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-ended`](#scroll-ended) Note: This event is emitted from the node to which the component belongs.
  - [`touch-up`](#touch-up) Note: This event is emitted from the node to which the component belongs.
  - [`scroll-began`](#scroll-began) Note: This event is emitted from the node to which the component belongs.


### Details


#### Properties


##### sizeMode

> Specify the size type of each page in PageView.

| meta | description |
|------|-------------|
| Type | <a href="../enums/PageView.SizeMode.html" class="crosslink">PageView.SizeMode</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:111](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L111) |



##### direction

> The page view direction

| meta | description |
|------|-------------|
| Type | <a href="../enums/PageView.Direction.html" class="crosslink">PageView.Direction</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L125) |



##### scrollThreshold

> The scroll threshold value, when drag exceeds this value,
release the next page will automatically scroll, less than the restore

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:139](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L139) |



##### autoPageTurningThreshold

> Auto page turning velocity threshold. When users swipe the PageView quickly,
it will calculate a velocity based on the scroll distance and time,
if the calculated velocity is larger than the threshold, then it will trigger page turning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:154](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L154) |



##### pageTurningEventTiming

> Change the PageTurning event timing of PageView.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:171](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L171) |



##### indicator

> The Page View Indicator

| meta | description |
|------|-------------|
| Type | <a href="../classes/PageViewIndicator.html" class="crosslink">PageViewIndicator</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:183](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L183) |



##### pageTurningSpeed

> The time required to turn over a page. unit: second

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:199](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L199) |



##### pageEvents

> PageView events callback

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:210](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L210) |



##### content

> This is a reference to the UI element to be scrolled.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L200) |



##### horizontal

> Enable horizontal scroll.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:211](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L211) |



##### vertical

> Enable vertical scroll.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:222](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L222) |



##### inertia

> When inertia is set, the content will continue to move when touch ended.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:233](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L233) |



##### brake

> It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
A value of 0 will never stop the movement until it reaches to the boundary of scrollview.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:243](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L243) |



##### elastic

> When elastic is set, the content will be bounce back when move out of boundary.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:258](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L258) |



##### bounceDuration

> The elapse time of bouncing back. A value of 0 will bounce back immediately.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:269](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L269) |



##### horizontalScrollBar

> The horizontal scrollbar reference.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Scrollbar.html" class="crosslink">Scrollbar</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:280](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L280) |



##### verticalScrollBar

> The vertical scrollbar reference.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Scrollbar.html" class="crosslink">Scrollbar</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:298](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L298) |



##### scrollEvents

> Scrollview events callback

| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.EventHandler.html" class="crosslink">Component.EventHandler[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:316](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L316) |



##### cancelInnerEvents

> If cancelInnerEvents is set to true, the scroll behavior will cancel touch events on inner content nodes
It's set to true by default.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:327](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L327) |



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


##### getCurrentPageIndex

Returns current page index

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L257) |



##### setCurrentPageIndex

Set current page index

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:267](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L267) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getPages

Returns all pages of pageview

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L277) |



##### addPage

At the end of the current page view to insert a new view

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L287) |

###### Parameters
- `page` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### insertPage

Inserts a page in the specified location

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:301](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L301) |

###### Parameters
- `page` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removePage

Removes a page from PageView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:321](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L321) |

###### Parameters
- `page` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### removePageAtIndex

Removes a page at index of PageView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:337](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L337) |

###### Parameters
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeAllPages

Removes all pages from PageView

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L353) |



##### scrollToPage

Scroll PageView to index.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js:367](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCPageView.js#L367) |

###### Parameters
- `idx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> index of page.
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> scrolling time


##### scrollToBottom

Scroll the content to the bottom boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:345](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L345) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the bottom of the view.
scrollView.scrollToBottom(0.1);
```

##### scrollToTop

Scroll the content to the top boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:370](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L370) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the top of the view.
scrollView.scrollToTop(0.1);
```

##### scrollToLeft

Scroll the content to the left boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L395) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the left of the view.
scrollView.scrollToLeft(0.1);
```

##### scrollToRight

Scroll the content to the right boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:420](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L420) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the right of the view.
scrollView.scrollToRight(0.1);
```

##### scrollToTopLeft

Scroll the content to the top left boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:445](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L445) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the upper left corner of the view.
scrollView.scrollToTopLeft(0.1);
```

##### scrollToTopRight

Scroll the content to the top right boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:470](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L470) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the top right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the top right corner of the view.
scrollView.scrollToTopRight(0.1);
```

##### scrollToBottomLeft

Scroll the content to the bottom left boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:495](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L495) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom left boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the lower left corner of the view.
scrollView.scrollToBottomLeft(0.1);
```

##### scrollToBottomRight

Scroll the content to the bottom right boundary of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:520](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L520) |

###### Parameters
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the bottom right boundary immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to the lower right corner of the view.
scrollView.scrollToBottomRight(0.1);
```

##### scrollToOffset

Scroll with an offset related to the ScrollView's top left origin, if timeInSecond is omitted, then it will jump to the
      specific offset immediately.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:546](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L546) |

###### Parameters
- `offset` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> A Vec2, the value of which each axis between 0 and maxScrollOffset
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the specific offset of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to middle position in 0.1 second in x-axis
var maxScrollOffset = this.getMaxScrollOffset();
scrollView.scrollToOffset(cc.p(maxScrollOffset.x / 2, 0), 0.1);
```

##### getScrollOffset

Get the positive offset value corresponds to the content's top left boundary.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:580](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L580) |



##### getMaxScrollOffset

Get the maximize available  scroll offset

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:593](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L593) |



##### scrollToPercentHorizontal

Scroll the content to the horizontal percent position of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:610](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L610) |

###### Parameters
- `percent` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A value between 0 and 1.
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the horizontal percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Scroll to middle position.
scrollView.scrollToBottomRight(0.5, 0.1);
```

##### scrollTo

Scroll the content to the percent position of ScrollView in any direction.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:636](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L636) |

###### Parameters
- `anchor` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> A point which will be clamp between cc.p(0,0) and cc.p(1,1).
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.

##### Examples

```js
// Vertical scroll to the bottom of the view.
scrollView.scrollTo(cc.p(0, 1), 0.1);

// Horizontal scroll to view right.
scrollView.scrollTo(cc.p(1, 0), 0.1);
```

##### scrollToPercentVertical

Scroll the content to the vertical percent position of ScrollView.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:665](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L665) |

###### Parameters
- `percent` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> A value between 0 and 1.
- `timeInSecond` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Scroll time in second, if you don't pass timeInSecond,
the content will jump to the vertical percent position of ScrollView immediately.
- `attenuated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the scroll acceleration attenuated, default is true.
// Scroll to middle position.
scrollView.scrollToPercentVertical(0.5, 0.1);


##### stopAutoScroll

Stop auto scroll immediately

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:690](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L690) |



##### setContentPosition

Modify the content position.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:700](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L700) |

###### Parameters
- `position` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The position in content's parent space.


##### getContentPosition

Query the content's position in its parent space.

| meta | description |
|------|-------------|
| Returns | Position 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:715](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L715) |



##### isScrolling

Query whether the user is currently dragging the ScrollView to scroll it

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:725](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L725) |



##### isAutoScrolling

Query whether the ScrollView is currently scrolling because of a bounceback or inertia slowdown.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js:735](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCScrollView.js#L735) |



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




#### Events

### `page-turning` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-to-top` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-to-bottom` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-to-left` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-to-right` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scrolling` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `bounce-bottom` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `bounce-top` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `bounce-left` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `bounce-right` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-ended` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `touch-up` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details




### `scroll-began` Event



Module: [cc](../modules/cc.md)


Note: This event is emitted from the node to which the component belongs.


### Index







### Details





