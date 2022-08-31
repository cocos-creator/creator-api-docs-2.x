## `TextureAnimationModule` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


3D 粒子的贴图动画模块



### 索引

##### 属性（properties）

  - [`enable`](#enable) `Boolean` 是否启用
  - [`mode`](#mode) `Mode` 设定粒子贴图动画的类型（暂只支持 Grid 模式。
  - [`numTilesX`](#numtilesx) `Number` X 方向动画帧数。
  - [`numTilesY`](#numtilesy) `Number` Y 方向动画帧数。
  - [`animation`](#animation) `Animation` 动画播放方式。
  - [`randomRow`](#randomrow) `Boolean` 随机从动画贴图中选择一行以生成动画。
  - [`rowIndex`](#rowindex) `Number` 从动画贴图中选择特定行以生成动画。
  - [`frameOverTime`](#frameovertime) `CurveRange` 一个周期内动画播放的帧与时间变化曲线。
  - [`startFrame`](#startframe) `CurveRange` 从第几帧开始播放，时间为整个粒子系统的生命周期。
  - [`cycleCount`](#cyclecount) `Number` 一个生命周期内播放循环的次数。





### Details


#### 属性（properties）


##### enable

> 是否启用

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:55](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L55) |



##### mode

> 设定粒子贴图动画的类型（暂只支持 Grid 模式。

| meta | description |
|------|-------------|
| 类型 | Mode |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:73](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L73) |



##### numTilesX

> X 方向动画帧数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:93](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L93) |



##### numTilesY

> Y 方向动画帧数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:112](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L112) |



##### animation

> 动画播放方式。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Animation.html" class="crosslink">Animation</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:128](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L128) |



##### randomRow

> 随机从动画贴图中选择一行以生成动画。<br>
此选项仅在动画播放方式为 SingleRow 时生效。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:138](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L138) |



##### rowIndex

> 从动画贴图中选择特定行以生成动画。<br>
此选项仅在动画播放方式为 SingleRow 时且禁用 randomRow 时可用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:148](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L148) |



##### frameOverTime

> 一个周期内动画播放的帧与时间变化曲线。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:158](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L158) |



##### startFrame

> 从第几帧开始播放，时间为整个粒子系统的生命周期。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:168](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L168) |



##### cycleCount

> 一个生命周期内播放循环的次数。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/animator/texture-animation.ts:178](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/core/3d/particle/animator/texture-animation.ts#L178) |






