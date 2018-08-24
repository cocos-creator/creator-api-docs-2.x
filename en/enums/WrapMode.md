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
| Defined in | [cocos2d/animation/types.js:45](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L45) |



##### Normal

> All iterations are played as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:52](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L52) |



##### Reverse

> All iterations are played in the reverse direction from the way they are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:59](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L59) |



##### Loop

> When time reaches the end of the animation, time will continue at the beginning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:66](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L66) |



##### LoopReverse

> All iterations are played in the reverse direction from the way they are specified.
And when time reaches the start of the animation, time will continue at the ending.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:73](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L73) |



##### PingPong

> Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:81](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L81) |



##### PingPongReverse

> Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/animation/types.js#L89) |


