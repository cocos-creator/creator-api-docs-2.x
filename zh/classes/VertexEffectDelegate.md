## `VertexEffectDelegate` 类型



模块: [sp](../modules/sp.md)


Spine 顶点动画代理



### 索引



##### 方法

  - [`clear`](#clear) 清空顶点效果
  - [`initJitter`](#initjitter) 设置顶点抖动效果
  - [`initSwirlWithPow`](#initswirlwithpow) 设置顶点漩涡效果
  - [`initSwirlWithPowOut`](#initswirlwithpowout) 设置顶点漩涡效果
  - [`getJitterVertexEffect`](#getjittervertexeffect) 获取顶点抖动效果
  - [`getSwirlVertexEffect`](#getswirlvertexeffect) 获取顶点漩涡效果
  - [`getVertexEffect`](#getvertexeffect) 获取顶点效果
  - [`getEffectType`](#geteffecttype) 获取效果类型



### Details




<!-- Method Block -->
#### 方法


##### clear

清空顶点效果

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/vertex-effect-delegate.js:49](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L49) |



##### initJitter

设置顶点抖动效果

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/vertex-effect-delegate.js:60](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L60) |

###### 参数列表
- `jitterX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `jitterY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### initSwirlWithPow

设置顶点漩涡效果

| meta | description |
|------|-------------|
| 返回 | sp.spine.JitterEffect 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:73](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L73) |

###### 参数列表
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `power` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### initSwirlWithPowOut

设置顶点漩涡效果

| meta | description |
|------|-------------|
| 返回 | sp.spine.SwirlEffect 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:87](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L87) |

###### 参数列表
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `power` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getJitterVertexEffect

获取顶点抖动效果

| meta | description |
|------|-------------|
| 返回 | sp.spine.JitterEffect 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:101](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L101) |



##### getSwirlVertexEffect

获取顶点漩涡效果

| meta | description |
|------|-------------|
| 返回 | sp.spine.SwirlEffect 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:111](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L111) |



##### getVertexEffect

获取顶点效果

| meta | description |
|------|-------------|
| 返回 | sp.spine.JitterEffect &#124; sp.spine.SwirlEffect 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:121](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L121) |



##### getEffectType

获取效果类型

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/spine/vertex-effect-delegate.js:131](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/vertex-effect-delegate.js#L131) |




