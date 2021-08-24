## `TrailModule` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


3D 粒子拖尾模块



### 索引

##### 属性（properties）

  - [`enable`](#enable) `Boolean` 是否启用
  - [`mode`](#mode) `TrailMode` 设定粒子生成轨迹的方式。
  - [`lifeTime`](#lifetime) `CurveRange` 轨迹存在的生命周期。
  - [`minParticleDistance`](#minparticledistance) `Number` 每个轨迹粒子之间的最小间距。
  - [`space`](#space) `Space` 轨迹设定时的坐标系。
  - [`existWithParticles`](#existwithparticles) `Boolean` 粒子本身是否存在。
  - [`textureMode`](#texturemode) `TextureMode` 设定纹理填充方式。
  - [`widthFromParticle`](#widthfromparticle) `Boolean` 是否使用粒子的宽度。
  - [`widthRatio`](#widthratio) `CurveRange` 控制轨迹长度的曲线。
  - [`colorFromParticle`](#colorfromparticle) `Boolean` 是否使用粒子的颜色。
  - [`colorOverTrail`](#colorovertrail) `GradientRange` 轨迹的颜色。
  - [`colorOvertime`](#colorovertime) `GradientRange` 轨迹随时间变化的颜色。





### Details


#### 属性（properties）


##### enable

> 是否启用

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:137](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L137) |



##### mode

> 设定粒子生成轨迹的方式。

| meta | description |
|------|-------------|
| 类型 | TrailMode |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:161](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L161) |



##### lifeTime

> 轨迹存在的生命周期。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:171](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L171) |



##### minParticleDistance

> 每个轨迹粒子之间的最小间距。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:184](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L184) |



##### space

> 轨迹设定时的坐标系。

| meta | description |
|------|-------------|
| 类型 | Space |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:202](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L202) |



##### existWithParticles

> 粒子本身是否存在。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:221](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L221) |



##### textureMode

> 设定纹理填充方式。

| meta | description |
|------|-------------|
| 类型 | TextureMode |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:229](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L229) |



##### widthFromParticle

> 是否使用粒子的宽度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:239](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L239) |



##### widthRatio

> 控制轨迹长度的曲线。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:248](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L248) |



##### colorFromParticle

> 是否使用粒子的颜色。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:258](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L258) |



##### colorOverTrail

> 轨迹的颜色。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/GradientRange.html" class="crosslink">GradientRange</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:266](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L266) |



##### colorOvertime

> 轨迹随时间变化的颜色。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/GradientRange.html" class="crosslink">GradientRange</a> |
| 定义于 | [cocos2d/core/3d/particle/renderer/trail.ts:276](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/particle/renderer/trail.ts#L276) |






