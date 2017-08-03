### `ParticleSystem.PositionType` Enum



Module: [cc](../modules/cc.md)




Enum for particles movement type.

### Index

##### Properties

  - `FREE`
  - `RELATIVE`
  - `GROUPED`

### Details

#### Properties


##### FREE

> Living particles are attached to the world and are unaffected by emitter repositioning.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js:64](https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js#L64) |



##### RELATIVE

> Living particles are attached to the world but will follow the emitter repositioning.<br/>
Use case: Attach an emitter to an sprite, and you want that the emitter follows the sprite.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js:73](https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js#L73) |



##### GROUPED

> Living particles are attached to the emitter and are translated along with it.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js:83](https:/github.com/cocos-creator/engine/blob/master/cocos2d/particle/CCParticleSystem.js#L83) |


