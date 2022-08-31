## `screen` Class



Module: [cc](../modules/cc.md)
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
| Defined in | [cocos2d/core/platform/CCScreen.js:90](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/platform/CCScreen.js#L90) |



##### fullScreen

return true if it's full now.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCScreen.js:115](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/platform/CCScreen.js#L115) |



##### requestFullScreen

change the screen to full mode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCScreen.js:130](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/platform/CCScreen.js#L130) |

###### Parameters
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `onFullScreenError` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### exitFullScreen

exit the full mode.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCScreen.js:181](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/platform/CCScreen.js#L181) |



##### autoFullScreen

Automatically request full screen with a touch/click event

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCScreen.js:199](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/platform/CCScreen.js#L199) |

###### Parameters
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 



