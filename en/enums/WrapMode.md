### `WrapMode` Enum



Module: [cc](../modules/cc.md)




Specifies how time is treated when it is outside of the keyframe range of an Animation.

### Index

##### Properties

  - `Default`
  - `Normal`
  - `Reverse`
  - `Loop`
  - `LoopReverse`
  - `PingPong`
  - `PingPongReverse`

### Details

#### Properties


##### Default

> Reads the default wrap mode set higher up.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:23](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L23) |



##### Normal

> All iterations are played as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:30](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L30) |



##### Reverse

> All iterations are played in the reverse direction from the way they are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:37](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L37) |



##### Loop

> When time reaches the end of the animation, time will continue at the beginning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:44](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L44) |



##### LoopReverse

> All iterations are played in the reverse direction from the way they are specified.
And when time reaches the start of the animation, time will continue at the ending.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:51](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L51) |



##### PingPong

> Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:59](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L59) |



##### PingPongReverse

> Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L67) |


