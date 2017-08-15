## `AnimationNode` Class

Extends [`AnimationNodeBase`](AnimationNodeBase.md)


Module: [cc](../modules/cc.md)




动画曲线的集合，根据当前时间计算出每条曲线的状态。

### Index

##### Properties

  - [`curves`](#curves) `Object[]` 曲线列表。
  - [`delay`](#delay) `Number` 延迟多少秒播放。
  - [`repeatCount`](#repeatcount) `Number` 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）
  - [`duration`](#duration) `Number` 单次动画的持续时间，秒。
  - [`speed`](#speed) `Number` 播放速率。
  - [`wrapMode`](#wrapmode) `WrapMode` 动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount
  - [`time`](#time) `Number` 动画当前的时间，秒。
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


##### curves

> 曲线列表。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:145](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L145) |



##### delay

> 延迟多少秒播放。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:155](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L155) |



##### repeatCount

> 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:166](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L166) |



##### duration

> 单次动画的持续时间，秒。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:183](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L183) |



##### speed

> 播放速率。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:193](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L193) |



##### wrapMode

> 动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount

| meta | description |
|------|-------------|
| Type | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:202](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L202) |



##### time

> 动画当前的时间，秒。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:250](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L250) |



##### isPlaying

> 当前是否正在播放。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:18](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L18) |



##### isPaused

> 当前是否正在暂停

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:30](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L30) |






<!-- Method Block -->
#### Methods


##### update



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js:114](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/types.js#L114) |

###### Parameters
- deltaTime <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### onPlay



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:45](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L45) |



##### onPause



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:50](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L50) |



##### onResume



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:55](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L55) |



##### onStop



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:60](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L60) |



##### onError



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:65](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L65) |

###### Parameters
- errorCode <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

播放动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:74](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L74) |



##### stop

停止动画播放。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:95](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L95) |



##### pause

暂停动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:110](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L110) |



##### resume

重新播放动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:122](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L122) |



##### step

执行一帧动画。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js:134](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/animation/playable.js#L134) |




