## `inputManager` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)




<p>
 This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
</p>

### Index



##### Methods

  - [`handleTouchesBegin`](#handletouchesbegin) 
  - [`handleTouchesMove`](#handletouchesmove) 
  - [`handleTouchesEnd`](#handletouchesend) 
  - [`handleTouchesCancel`](#handletouchescancel) 
  - [`getSetOfTouchesEndOrCancel`](#getsetoftouchesendorcancel) 
  - [`getHTMLElementPosition`](#gethtmlelementposition) 
  - [`getPreTouch`](#getpretouch) 
  - [`setPreTouch`](#setpretouch) 
  - [`getTouchByXY`](#gettouchbyxy) 
  - [`getTouchByXY`](#gettouchbyxy) 
  - [`getPointByEvent`](#getpointbyevent) 
  - [`getTouchesByEvent`](#gettouchesbyevent) 
  - [`registerSystemEvent`](#registersystemevent) 
  - [`update`](#update) 



### Details




<!-- Method Block -->
#### Methods


##### handleTouchesBegin



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:98](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L98) |

###### Parameters
- touches <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### handleTouchesMove



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:133](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L133) |

###### Parameters
- touches <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### handleTouchesEnd



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:165](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L165) |

###### Parameters
- touches <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### handleTouchesCancel



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L179) |

###### Parameters
- touches <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### getSetOfTouchesEndOrCancel



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:193](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L193) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

###### Parameters
- touches <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### getHTMLElementPosition



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:219](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L219) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- element <a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a> 


##### getPreTouch



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:255](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L255) |
| Return 		 | <a href="../classes/Touch.html" class="crosslink">Touch</a> 

###### Parameters
- touch <a href="../classes/Touch.html" class="crosslink">Touch</a> 


##### setPreTouch



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:275](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L275) |

###### Parameters
- touch <a href="../classes/Touch.html" class="crosslink">Touch</a> 


##### getTouchByXY



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:300](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L300) |
| Return 		 | <a href="../classes/Touch.html" class="crosslink">Touch</a> 

###### Parameters
- tx <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- ty <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- pos <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getTouchByXY



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:317](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L317) |
| Return 		 | <a href="../classes/Event.EventMouse.html" class="crosslink">Event.EventMouse</a> 

###### Parameters
- location <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- pos <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- eventType <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getPointByEvent



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:335](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L335) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- event <a href="../classes/Touch.html" class="crosslink">Touch</a> 
- pos <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### getTouchesByEvent



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:350](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L350) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

###### Parameters
- event <a href="../classes/Touch.html" class="crosslink">Touch</a> 
- pos <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### registerSystemEvent



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L388) |

###### Parameters
- element <a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a> 


##### update



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js:596](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCInputManager.js#L596) |

###### Parameters
- dt <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



