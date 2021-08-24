## `TextureAnimationModule` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


The texture animation module of 3d particle.



### Index

##### Properties

  - [`enable`](#enable) `Boolean` The enable of TextureAnimationModule.
  - [`mode`](#mode) `Mode` Set the type of particle map animation (only supports Grid mode for the time being)
  - [`numTilesX`](#numtilesx) `Number` Animation frames in X direction.
  - [`numTilesY`](#numtilesy) `Number` Animation frames in Y direction.
  - [`animation`](#animation) `Animation` The way of the animation plays.
  - [`randomRow`](#randomrow) `Boolean` Randomly select a line from the animated map to generate the animation.
  - [`rowIndex`](#rowindex) `Number` Select specific lines from the animation map to generate the animation.
  - [`frameOverTime`](#frameovertime) `CurveRange` Frame and time curve of animation playback in one cycle.
  - [`startFrame`](#startframe) `CurveRange` Play from which frames, the time is the life cycle of the entire particle system.
  - [`cycleCount`](#cyclecount) `Number` Number of playback loops in a life cycle.





### Details


#### Properties


##### enable

> The enable of TextureAnimationModule.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:55](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L55) |



##### mode

> Set the type of particle map animation (only supports Grid mode for the time being)

| meta | description |
|------|-------------|
| Type | Mode |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:73](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L73) |



##### numTilesX

> Animation frames in X direction.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:93](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L93) |



##### numTilesY

> Animation frames in Y direction.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:112](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L112) |



##### animation

> The way of the animation plays.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Animation.html" class="crosslink">Animation</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:128](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L128) |



##### randomRow

> Randomly select a line from the animated map to generate the animation. <br>
This option only takes effect when the animation playback mode is SingleRow.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:138](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L138) |



##### rowIndex

> Select specific lines from the animation map to generate the animation. <br>
This option is only available when the animation playback mode is SingleRow and randomRow is disabled.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:148](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L148) |



##### frameOverTime

> Frame and time curve of animation playback in one cycle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:158](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L158) |



##### startFrame

> Play from which frames, the time is the life cycle of the entire particle system.

| meta | description |
|------|-------------|
| Type | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:168](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L168) |



##### cycleCount

> Number of playback loops in a life cycle.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:178](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/animator/texture-animation.ts#L178) |






