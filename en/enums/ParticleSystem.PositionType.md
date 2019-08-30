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
| Defined in | [cocos2d/particle/CCParticleSystem.js:90](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/particle/CCParticleSystem.js#L90) |



##### RELATIVE

> Living particles are attached to the world but will follow the emitter repositioning.<br/>
Use case: Attach an emitter to an sprite, and you want that the emitter follows the sprite.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/particle/CCParticleSystem.js:99](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/particle/CCParticleSystem.js#L99) |



##### GROUPED

> Living particles are attached to the emitter and are translated along with it.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/particle/CCParticleSystem.js:109](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/particle/CCParticleSystem.js#L109) |


