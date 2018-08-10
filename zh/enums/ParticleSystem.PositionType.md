### `ParticleSystem.PositionType` 枚举



模块: [cc](../modules/cc.md)


粒子位置类型


### 索引
  - `FREE`
  - `RELATIVE`
  - `GROUPED`

### Details


##### FREE

> 自由模式，相对于世界坐标，不会随粒子节点移动而移动。（可产生火焰、蒸汽等效果）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/particle/CCParticleSystem.js:62](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/particle/CCParticleSystem.js#L62) |



##### RELATIVE

> 相对模式，粒子会随父节点移动而移动，可用于制作移动角色身上的特效等等。（该选项在 Creator 中暂时不支持）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/particle/CCParticleSystem.js:71](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/particle/CCParticleSystem.js#L71) |



##### GROUPED

> 整组模式，粒子跟随发射器移动。（不会发生拖尾）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/particle/CCParticleSystem.js:81](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/particle/CCParticleSystem.js#L81) |


