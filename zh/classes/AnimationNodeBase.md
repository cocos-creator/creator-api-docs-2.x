## `AnimationNodeBase` Class

Extends [`Playable`](Playable.md)


Module: [cc](../modules/cc.md)




所有播放动画的抽象接口。

### Index

##### Properties

  - [`isPlaying`](#isplaying) `Boolean` 当前是否正在播放。
  - [`isPaused`](#ispaused) `Boolean` 当前是否正在暂停



##### Methods

  - [`update`](#update) 
  - [`onPlay`](#onplay) 
  - [`onPause`](#onpause) 
  - [`onResume`](#onresume) 
  - [`onStop`](#onstop) 
  - [`onError`](#onerror) 
  - [`play`](#play) 播放动画。
  - [`stop`](#stop) 停止动画播放。
  - [`pause`](#pause) 暂停动画。
  - [`resume`](#resume) 重新播放动画。
  - [`step`](#step) 执行一帧动画。



### Details


#### Properties


##### isPlaying

> 当前是否正在播放。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:18](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L18) |



##### isPaused

> 当前是否正在暂停

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:30](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L30) |






<!-- Method Block -->
#### Methods


##### update



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:114](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L114) |

###### Parameters
- deltaTime <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### onPlay



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:45](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L45) |



##### onPause



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L50) |



##### onResume



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L55) |



##### onStop



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L60) |



##### onError



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L65) |

###### Parameters
- errorCode <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

播放动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:74](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L74) |



##### stop

停止动画播放。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:95](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L95) |



##### pause

暂停动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L110) |



##### resume

重新播放动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L122) |



##### step

执行一帧动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:134](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L134) |




