### `textureAnimationModule.Animation` 枚举



模块: [cc.primitive](../modules/cc.primitive.md)
父模块: [cc](../modules/cc.md)


贴图动画的播放方式


### 索引
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

> 是否启用

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:50](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L50) |



##### mode

> 设定粒子贴图动画的类型（暂只支持 Grid 模式。

| meta | description |
|------|-------------|
| 类型 | Mode |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:68](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L68) |



##### numTilesX

> X 方向动画帧数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:87](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L87) |



##### numTilesY

> Y 方向动画帧数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:95](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L95) |



##### animation

> 动画播放方式。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Animation.html" class="crosslink">Animation</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:103](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L103) |



##### randomRow

> 随机从动画贴图中选择一行以生成动画。<br>
此选项仅在动画播放方式为 SingleRow 时生效。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:113](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L113) |



##### rowIndex

> 从动画贴图中选择特定行以生成动画。<br>
此选项仅在动画播放方式为 SingleRow 时且禁用 randomRow 时可用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:123](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L123) |



##### frameOverTime

> 一个周期内动画播放的帧与时间变化曲线。

| meta | description |
|------|-------------|
| 类型 | CurveRange |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:133](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L133) |



##### startFrame

> 从第几帧开始播放，时间为整个粒子系统的生命周期。

| meta | description |
|------|-------------|
| 类型 | CurveRange |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:143](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L143) |



##### cycleCount

> 一个生命周期内播放循环的次数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:153](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/particle/animator/texture-animation.ts#L153) |


