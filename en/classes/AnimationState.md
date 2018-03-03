## `AnimationState` Class

Extends [`Playable`](Playable.md)


Module: [cc](../modules/cc.md)


The AnimationState gives full control over animation playback process.
In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.


### Index

##### Properties

  - [`animator`](#animator) `AnimationAnimator` 
  - [`curves`](#curves) `Object[]` The curves list.
  - [`delay`](#delay) `Number` The start delay which represents the number of seconds from an animation's start time to the start of
the active interval.
  - [`repeatCount`](#repeatcount) `Number` The animation's iteration count property.

A real number greater than or equal to zero (including positive infinity) representing the number of times
to repeat the animation node.

Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
calculations.
  - [`duration`](#duration) `Number` The iteration duration of this animation in seconds. (length)
  - [`speed`](#speed) `Number` The animation's playback speed. 1 is normal playback speed.
  - [`wrapMode`](#wrapmode) `WrapMode` Wrapping mode of the playing animation.
Notice : dynamic change wrapMode will reset time and repeatCount property
  - [`time`](#time) `Number` The current time of this animation in seconds.
  - [`clip`](#clip) `AnimationClip` The clip that is being played by this animation state.
  - [`name`](#name) `String` The name of the playing animation.
  - [`isPlaying`](#isplaying) `Boolean` Is playing or paused in play mode?
  - [`isPaused`](#ispaused) `Boolean` Is currently paused? This can be true even if in edit mode(isPlaying == false).



##### Methods

  - [`constructor`](#constructor) 
  - [`onPlay`](#onplay) 
  - [`onPause`](#onpause) 
  - [`onResume`](#onresume) 
  - [`onStop`](#onstop) 
  - [`onError`](#onerror) 
  - [`play`](#play) Play this animation.
  - [`stop`](#stop) Stop this animation.
  - [`pause`](#pause) Pause this animation.
  - [`resume`](#resume) Resume this animation.
  - [`step`](#step) Perform a single frame step.



### Details


#### Properties


##### animator

> 

| meta | description |
|------|-------------|
| Type | AnimationAnimator |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:47](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L47) |



##### curves

> The curves list.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:53](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L53) |



##### delay

> The start delay which represents the number of seconds from an animation's start time to the start of
the active interval.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:63](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L63) |



##### repeatCount

> The animation's iteration count property.

A real number greater than or equal to zero (including positive infinity) representing the number of times
to repeat the animation node.

Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
calculations.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:74](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L74) |



##### duration

> The iteration duration of this animation in seconds. (length)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:91](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L91) |



##### speed

> The animation's playback speed. 1 is normal playback speed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L101) |



##### wrapMode

> Wrapping mode of the playing animation.
Notice : dynamic change wrapMode will reset time and repeatCount property

| meta | description |
|------|-------------|
| Type | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L110) |



##### time

> The current time of this animation in seconds.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L124) |



##### clip

> The clip that is being played by this animation state.

| meta | description |
|------|-------------|
| Type | <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:374](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L374) |



##### name

> The name of the playing animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:385](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L385) |



##### isPlaying

> Is playing or paused in play mode?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:18](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L18) |



##### isPaused

> Is currently paused? This can be true even if in edit mode(isPlaying == false).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:30](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L30) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js:25](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/animation-state.js#L25) |

###### Parameters
- `clip` <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onPlay



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:45](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L45) |



##### onPause



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L50) |



##### onResume



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L55) |



##### onStop



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L60) |



##### onError



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L65) |

###### Parameters
- `errorCode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

Play this animation.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:74](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L74) |



##### stop

Stop this animation.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:95](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L95) |



##### pause

Pause this animation.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:110](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L110) |



##### resume

Resume this animation.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:122](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L122) |



##### step

Perform a single frame step.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js:134](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/playable.js#L134) |




