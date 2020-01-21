### `textureAnimationModule.Animation` Enum



Module: [cc.primitive](../modules/cc.primitive.md)
Parent Module: [cc](../modules/cc.md)


贴图动画的播放方式


### Index
  - `enable`
  - `mode`
  - `numTilesX`
  - `numTilesY`
  - `animation`
  - `randomRow`
  - `rowIndex`
  - `frameOverTime`
  - `startFrame`
  - `cycleCount`

### Details


##### enable

> The enable of TextureAnimationModule.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:50](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L50) |



##### mode

> Set the type of particle map animation (only supports Grid mode for the time being)

| meta | description |
|------|-------------|
| Type | Mode |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:68](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L68) |



##### numTilesX

> Animation frames in X direction.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:87](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L87) |



##### numTilesY

> Animation frames in Y direction.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:95](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L95) |



##### animation

> The way of the animation plays.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Animation.html" class="crosslink">Animation</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:103](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L103) |



##### randomRow

> Randomly select a line from the animated map to generate the animation. <br>
This option only takes effect when the animation playback mode is SingleRow.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:113](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L113) |



##### rowIndex

> Select specific lines from the animation map to generate the animation. <br>
This option is only available when the animation playback mode is SingleRow and randomRow is disabled.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:123](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L123) |



##### frameOverTime

> Frame and time curve of animation playback in one cycle.

| meta | description |
|------|-------------|
| Type | CurveRange |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:133](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L133) |



##### startFrame

> Play from which frames, the time is the life cycle of the entire particle system.

| meta | description |
|------|-------------|
| Type | CurveRange |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:143](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L143) |



##### cycleCount

> Number of playback loops in a life cycle.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/animator/texture-animation.ts:153](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/3d/particle/animator/texture-animation.ts#L153) |


