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
| Defined in | [cocos2d/animation/types.js:47](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L47) |



##### Normal

> All iterations are played as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:54](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L54) |



##### Reverse

> All iterations are played in the reverse direction from the way they are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:61](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L61) |



##### Loop

> When time reaches the end of the animation, time will continue at the beginning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:68](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L68) |



##### LoopReverse

> All iterations are played in the reverse direction from the way they are specified.
And when time reaches the start of the animation, time will continue at the ending.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:75](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L75) |



##### PingPong

> Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
are specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:83](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L83) |



##### PingPongReverse

> Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
as specified.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/animation/types.js:91](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/animation/types.js#L91) |


