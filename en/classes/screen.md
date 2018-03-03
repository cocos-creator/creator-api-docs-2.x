## `screen` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
It's invalid on safari, QQbrowser and android browser


### Index



##### Methods

  - [`init`](#init) initialize
  - [`fullScreen`](#fullscreen) return true if it's full now.
  - [`requestFullScreen`](#requestfullscreen) change the screen to full mode.
  - [`exitFullScreen`](#exitfullscreen) exit the full mode.
  - [`autoFullScreen`](#autofullscreen) Automatically request full screen with a touch/click event



### Details




<!-- Method Block -->
#### Methods


##### init

initialize

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js:80](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js#L80) |



##### fullScreen

return true if it's full now.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js#L101) |



##### requestFullScreen

change the screen to full mode.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js:114](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js#L114) |

###### Parameters
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### exitFullScreen

exit the full mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js:139](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js#L139) |



##### autoFullScreen

Automatically request full screen with a touch/click event

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js:148](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCScreen.js#L148) |

###### Parameters
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 



