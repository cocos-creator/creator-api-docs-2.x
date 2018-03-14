### `RayCastType` 枚举



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


射线检测类型


### 索引
  - `Closest`
  - `Any`
  - `AllClosest`
  - `All`

### Details


##### Closest

> 检测射线路径上最近的碰撞体

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js:59](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js#L59) |



##### Any

> 检测射线路径上任意的碰撞体。
一旦检测到任何碰撞体，将立刻结束检测其他的碰撞体。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js#L67) |



##### AllClosest

> 检测射线路径上所有的碰撞体。
同一个碰撞体上有可能会返回多个碰撞点(因为一个碰撞体可能由多个夹具组成，每一个夹具会返回一个碰撞点，碰撞点有可能在碰撞体内部)，AllClosest 删选同一个碰撞体上最近的哪一个碰撞点。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js:77](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js#L77) |



##### All

> 检测射线路径上所有的碰撞体。
同一个碰撞体上有可能会返回多个碰撞点，All 将返回所有这些碰撞点。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js:89](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsTypes.js#L89) |


