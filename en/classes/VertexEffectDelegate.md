## `VertexEffectDelegate` Class



Module: [sp](../modules/sp.md)


The delegate of spine vertex effect



### Index



##### Methods

  - [`clear`](#clear) Clears vertex effect.
  - [`initJitter`](#initjitter) Inits delegate with jitter effect
  - [`initSwirlWithPow`](#initswirlwithpow) Inits delegate with swirl effect
  - [`initSwirlWithPowOut`](#initswirlwithpowout) Inits delegate with swirl effect
  - [`getJitterVertexEffect`](#getjittervertexeffect) Gets jitter vertex effect
  - [`getSwirlVertexEffect`](#getswirlvertexeffect) Gets swirl vertex effect
  - [`getVertexEffect`](#getvertexeffect) Gets vertex effect
  - [`getEffectType`](#geteffecttype) Gets effect type



### Details




<!-- Method Block -->
#### Methods


##### clear

Clears vertex effect.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/vertex-effect-delegate.js:49](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L49) |



##### initJitter

Inits delegate with jitter effect

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/vertex-effect-delegate.js:60](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L60) |

###### Parameters
- `jitterX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `jitterY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### initSwirlWithPow

Inits delegate with swirl effect

| meta | description |
|------|-------------|
| Returns | sp.spine.JitterEffect 
| Defined in | [extensions/spine/vertex-effect-delegate.js:73](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L73) |

###### Parameters
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `power` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### initSwirlWithPowOut

Inits delegate with swirl effect

| meta | description |
|------|-------------|
| Returns | sp.spine.SwirlEffect 
| Defined in | [extensions/spine/vertex-effect-delegate.js:87](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L87) |

###### Parameters
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `power` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getJitterVertexEffect

Gets jitter vertex effect

| meta | description |
|------|-------------|
| Returns | sp.spine.JitterEffect 
| Defined in | [extensions/spine/vertex-effect-delegate.js:101](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L101) |



##### getSwirlVertexEffect

Gets swirl vertex effect

| meta | description |
|------|-------------|
| Returns | sp.spine.SwirlEffect 
| Defined in | [extensions/spine/vertex-effect-delegate.js:111](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L111) |



##### getVertexEffect

Gets vertex effect

| meta | description |
|------|-------------|
| Returns | sp.spine.JitterEffect &#124; sp.spine.SwirlEffect 
| Defined in | [extensions/spine/vertex-effect-delegate.js:121](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L121) |



##### getEffectType

Gets effect type

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/spine/vertex-effect-delegate.js:131](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/extensions/spine/vertex-effect-delegate.js#L131) |




