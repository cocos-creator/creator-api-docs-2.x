### `WrapMode` Enum



Module: [cc](../modules/cc.md)


Specifies how time is treated when it is outside of the keyframe range of an Animation.


### Index
  - `Default`
  - `Normal`
  - `Reverse`
  - `Loop`
  - `LoopReverse`
  - `PingPong`
  - `PingPongReverse`

### Details


##### Default

> Reads the default wrap mode set higher up.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:22](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L22) |



##### Normal

> All iterations are played as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:29](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L29) |



##### Reverse

> All iterations are played in the reverse direction from the way they are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:36](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L36) |



##### Loop

> When time reaches the end of the animation, time will continue at the beginning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L43) |



##### LoopReverse

> All iterations are played in the reverse direction from the way they are specified.
And when time reaches the start of the animation, time will continue at the ending.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L50) |



##### PingPong

> Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:58](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L58) |



##### PingPongReverse

> Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/animation/types.js#L66) |


