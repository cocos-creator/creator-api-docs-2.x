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
  - [`repeatCount`](#repeatcount) `Number` The animation's iteration count property.
  - [`duration`](#duration) `Number` The iteration duration of this animation in seconds.
  - [`speed`](#speed) `Number` The animation's playback speed.
  - [`wrapMode`](#wrapmode) `WrapMode` Wrapping mode of the playing animation.
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
| Defined in | [cocos2d/animation/animation-state.js:73](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L73) |



##### curves

> The curves list.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [cocos2d/animation/animation-state.js:79](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L79) |



##### delay

> The start delay which represents the number of seconds from an animation's start time to the start of
the active interval.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-state.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L89) |



##### repeatCount

> The animation's iteration count property.

A real number greater than or equal to zero (including positive infinity) representing the number of times
to repeat the animation node.

Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
calculations.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-state.js:100](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L100) |



##### duration

> The iteration duration of this animation in seconds. (length)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-state.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L117) |



##### speed

> The animation's playback speed. 1 is normal playback speed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-state.js:127](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L127) |



##### wrapMode

> Wrapping mode of the playing animation.
Notice : dynamic change wrapMode will reset time and repeatCount property

| meta | description |
|------|-------------|
| Type | <a href="../enums/WrapMode.html" class="crosslink">WrapMode</a> |
| Defined in | [cocos2d/animation/animation-state.js:136](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L136) |



##### time

> The current time of this animation in seconds.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/animation-state.js:150](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L150) |



##### clip

> The clip that is being played by this animation state.

| meta | description |
|------|-------------|
| Type | <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> |
| Defined in | [cocos2d/animation/animation-state.js:441](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L441) |



##### name

> The name of the playing animation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/animation/animation-state.js:452](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L452) |



##### isPlaying

> Is playing or paused in play mode?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/animation/playable.js:44](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L44) |



##### isPaused

> Is currently paused? This can be true even if in edit mode(isPlaying == false).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/animation/playable.js:56](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L56) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/animation-state.js:50](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/animation-state.js#L50) |

###### Parameters
- `clip` <a href="../classes/AnimationClip.html" class="crosslink">AnimationClip</a> 
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onPlay



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:71](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L71) |



##### onPause



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:76](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L76) |



##### onResume



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:81](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L81) |



##### onStop



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:86](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L86) |



##### onError



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:91](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L91) |

###### Parameters
- `errorCode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

Play this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:100](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L100) |



##### stop

Stop this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:121](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L121) |



##### pause

Pause this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:136](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L136) |



##### resume

Resume this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:148](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L148) |



##### step

Perform a single frame step.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:160](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/playable.js#L160) |




