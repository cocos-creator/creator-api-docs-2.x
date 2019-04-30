## `screen` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
It's invalid on safari, QQbrowser and android browser



### 索引



##### 方法

  - [`init`](#init) initialize
  - [`fullScreen`](#fullscreen) return true if it's full now.
  - [`requestFullScreen`](#requestfullscreen) change the screen to full mode.
  - [`exitFullScreen`](#exitfullscreen) exit the full mode.
  - [`autoFullScreen`](#autofullscreen) Automatically request full screen with a touch/click event



### Details




<!-- Method Block -->
#### 方法


##### init

initialize

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCScreen.js:88](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/CCScreen.js#L88) |



##### fullScreen

return true if it's full now.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCScreen.js:113](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/CCScreen.js#L113) |



##### requestFullScreen

change the screen to full mode.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCScreen.js:128](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/CCScreen.js#L128) |

###### 参数列表
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### exitFullScreen

exit the full mode.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCScreen.js:163](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/CCScreen.js#L163) |



##### autoFullScreen

Automatically request full screen with a touch/click event

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCScreen.js:181](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/CCScreen.js#L181) |

###### 参数列表
- `element` Element 
- `onFullScreenChange` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 



