## `AnimationState` 类型

继承于 [`Playable`](Playable.md)


模块: [cc](../modules/cc.md)


AnimationState 完全控制动画播放过程。<br/>
大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。


### 索引

##### 属性（properties）

  - [`animator`](#animator) `AnimationAnimator` 
  - [`curves`](#curves) `Object[]` 曲线列表。
  - [`delay`](#delay) `Number` 延迟多少秒播放。
  - [`repeatCount`](#repeatcount) `Number` 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）
  - [`duration`](#duration) `Number` 单次动画的持续时间，秒。
  - [`speed`](#speed) `Number` 播放速率。
  - [`wrapMode`](#wrapmode) `WrapMode` 动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount
  - [`time`](#time) `Number` 动画当前的时间，秒。
  - [`clip`](#clip) `AnimationClip` 此动画状态正在播放的剪辑。
  - [`name`](#name) `String` 动画的名字
  - [`isPlaying`](#isplaying) `Boolean` 当前是否正在播放。
  - [`isPaused`](#ispaused) `Boolean` 当前是否正在暂停



##### 方法

  - [`constructor`](#constructor) 
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


#### 属性（properties）


##### animator

> 

| meta | description |
|------|-------------|
| 类型 | AnimationAnimator |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:49](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L49) |



##### curves

> 曲线列表。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L55) |



##### delay

> 延迟多少秒播放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L65) |



##### repeatCount

> 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:76](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L76) |



##### duration

> 单次动画的持续时间，秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:93](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L93) |



##### speed

> 播放速率。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:103](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L103) |



##### wrapMode

> 动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:112](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L112) |



##### time

> 动画当前的时间，秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:126](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L126) |



##### clip

> 此动画状态正在播放的剪辑。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:377](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L377) |



##### name

> 动画的名字

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L388) |



##### isPlaying

> 当前是否正在播放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:18](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L18) |



##### isPaused

> 当前是否正在暂停

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:30](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L30) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:25](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L25) |

###### 参数列表
- `clip` <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onPlay



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:45](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L45) |



##### onPause



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L50) |



##### onResume



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L55) |



##### onStop



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L60) |



##### onError



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L65) |

###### 参数列表
- `errorCode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

播放动画。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:74](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L74) |



##### stop

停止动画播放。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:95](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L95) |



##### pause

暂停动画。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L110) |



##### resume

重新播放动画。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L122) |



##### step

执行一帧动画。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:134](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L134) |




