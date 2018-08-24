## `Playable` Class



Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`isPlaying`](#isplaying) `Boolean` Is playing or paused in play mode?
  - [`isPaused`](#ispaused) `Boolean` Is currently paused? This can be true even if in edit mode(isPlaying == false).



##### Methods

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




