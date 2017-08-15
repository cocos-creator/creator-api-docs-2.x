## `Touch` Class



Module: [cc](../modules/cc.md)




The touch event class

### Index



##### Methods

  - [`getLocation`](#getlocation) Returns the current touch location in OpenGL coordinates.、
  - [`getLocationX`](#getlocationx) Returns X axis location value.
  - [`getLocationY`](#getlocationy) Returns Y axis location value.
  - [`getPreviousLocation`](#getpreviouslocation) Returns the previous touch location in OpenGL coordinates.
  - [`getStartLocation`](#getstartlocation) Returns the start touch location in OpenGL coordinates.
  - [`getDelta`](#getdelta) Returns the delta distance from the previous touche to the current one in screen coordinates.
  - [`getLocationInView`](#getlocationinview) Returns the current touch location in screen coordinates.
  - [`getPreviousLocationInView`](#getpreviouslocationinview) Returns the previous touch location in screen coordinates.
  - [`getStartLocationInView`](#getstartlocationinview) Returns the start touch location in screen coordinates.
  - [`getID`](#getid) Returns the id of cc.Touch.
  - [`setTouchInfo`](#settouchinfo) Sets information to touch.



### Details




<!-- Method Block -->
#### Methods


##### getLocation

Returns the current touch location in OpenGL coordinates.、

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:45](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L45) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getLocationX

Returns X axis location value.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:57](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L57) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getLocationY

Returns Y axis location value.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:67](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L67) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getPreviousLocation

Returns the previous touch location in OpenGL coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:77](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L77) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getStartLocation

Returns the start touch location in OpenGL coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:89](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L89) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getDelta

Returns the delta distance from the previous touche to the current one in screen coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:101](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L101) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getLocationInView

Returns the current touch location in screen coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:111](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L111) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getPreviousLocationInView

Returns the previous touch location in screen coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:121](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L121) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getStartLocationInView

Returns the start touch location in screen coordinates.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:131](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L131) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### getID

Returns the id of cc.Touch.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:141](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L141) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setTouchInfo

Sets information to touch.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js:151](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCTouch.js#L151) |

###### Parameters
- id <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



