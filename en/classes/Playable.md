## `Playable` Class



Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`isPlaying`](#isplaying) `Boolean` 
  - [`isPaused`](#ispaused) `Boolean` 



##### Methods

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


#### Properties


##### isPlaying

> Is playing or paused in play mode?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/animation/playable.js:43](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L43) |



##### isPaused

> Is currently paused? This can be true even if in edit mode(isPlaying == false).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/animation/playable.js:55](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L55) |






<!-- Method Block -->
#### Methods


##### onPlay



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:70](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L70) |



##### onPause



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:75](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L75) |



##### onResume



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:80](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L80) |



##### onStop



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:85](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L85) |



##### onError



| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:90](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L90) |

###### Parameters
- `errorCode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### play

Play this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:99](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L99) |



##### stop

Stop this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:120](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L120) |



##### pause

Pause this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:135](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L135) |



##### resume

Resume this animation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:147](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L147) |



##### step

Perform a single frame step.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/animation/playable.js:159](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/animation/playable.js#L159) |




