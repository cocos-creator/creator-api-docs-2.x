### `ParticleSystem.PositionType` Enum



Module: [cc](../modules/cc.md)


Enum for particles movement type.


### Index
  - `FREE`
  - `RELATIVE`
  - `GROUPED`

### Details


##### FREE

> Living particles are attached to the world and are unaffected by emitter repositioning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/particle/CCParticleSystem.js:94](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/particle/CCParticleSystem.js#L94) |



##### RELATIVE

> Living particles are attached to the world but will follow the emitter repositioning.<br/>
Use case: Attach an emitter to an sprite, and you want that the emitter follows the sprite.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/particle/CCParticleSystem.js:103](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/particle/CCParticleSystem.js#L103) |



##### GROUPED

> Living particles are attached to the emitter and are translated along with it.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/particle/CCParticleSystem.js:113](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/particle/CCParticleSystem.js#L113) |


