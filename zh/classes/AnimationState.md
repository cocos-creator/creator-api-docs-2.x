## `AnimationState` 类型

继承于 [`Playable`](Playable.md)


模块: [cc](../modules/cc.md)


AnimationState 完全控制动画播放过程。<br/>
大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。


### 索引

##### 属性（properties）

  - [`animator`](#animator) `AnimationAnimator` 
  - [`curves`](#curves) `Object[]` 
  - [`delay`](#delay) `Number` 
  - [`repeatCount`](#repeatcount) `Number` 
  - [`duration`](#duration) `Number` 
  - [`speed`](#speed) `Number` 
  - [`wrapMode`](#wrapmode) `WrapMode` 
  - [`time`](#time) `Number` 
  - [`clip`](#clip) `AnimationClip` 
  - [`name`](#name) `String` 
  - [`isPlaying`](#isplaying) `Boolean` 
  - [`isPaused`](#ispaused) `Boolean` 



##### 方法

  - [`constructor`](#constructor) 
  - [`onPlay`](#onplay) 
  - [`onPause`](#onpause) 
  - [`onResume`](#onresume) 
  - [`onStop`](#onstop) 
  - [`onError`](#onerror) 
  - [`play`](#play) 
  - [`stop`](#stop) 
  - [`pause`](#pause) 
  - [`resume`](#resume) 
  - [`step`](#step) 



### Details


#### 属性（properties）


##### animator

> 

| meta | description |
|------|-------------|
| 类型 | AnimationAnimator |
| 定义于 | [cocos2d/animation/animation-state.js:73](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L73) |



##### curves

> 曲线列表。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [cocos2d/animation/animation-state.js:79](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L79) |



##### delay

> 延迟多少秒播放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/animation/animation-state.js:89](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L89) |



##### repeatCount

> 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/animation/animation-state.js:100](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L100) |



##### duration

> 单次动画的持续时间，秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/animation/animation-state.js:117](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L117) |



##### speed

> 播放速率。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/animation/animation-state.js:127](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L127) |



##### wrapMode

> 动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| 定义于 | [cocos2d/animation/animation-state.js:136](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L136) |



##### time

> 动画当前的时间，秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/animation/animation-state.js:150](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L150) |



##### clip

> 此动画状态正在播放的剪辑。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> |
| 定义于 | [cocos2d/animation/animation-state.js:441](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L441) |



##### name

> 动画的名字

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/animation/animation-state.js:452](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L452) |



##### isPlaying

> 当前是否正在播放。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/animation/playable.js:43](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L43) |



##### isPaused

> 当前是否正在暂停

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/animation/playable.js:55](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L55) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/animation-state.js:50](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/animation-state.js#L50) |

###### 参数列表
- `clip` <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onPlay



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:70](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L70) |



##### onPause



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:75](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L75) |



##### onResume



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:80](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L80) |



##### onStop



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:85](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L85) |



##### onError



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:90](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L90) |

###### 参数列表
- `errorCode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

播放动画。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:99](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L99) |



##### stop

停止动画播放。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:120](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L120) |



##### pause

暂停动画。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:135](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L135) |



##### resume

重新播放动画。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:147](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L147) |



##### step

执行一帧动画。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/animation/playable.js:159](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L159) |




