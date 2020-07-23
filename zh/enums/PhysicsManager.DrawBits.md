### `PhysicsManager.DrawBits` 枚举



模块: [cc](../modules/cc.md)


指定物理系统需要绘制哪些调试信息。<br>
example:<br>
```js
cc.director.getPhysicsManager().debugDrawFlags =
 // cc.PhysicsManager.DrawBits.e_aabbBit |
 // cc.PhysicsManager.DrawBits.e_pairBit |
 // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
 cc.PhysicsManager.DrawBits.e_jointBit |
 cc.PhysicsManager.DrawBits.e_shapeBit;
```


### 索引
  - `e_aabbBit`
  - `e_jointBit`
  - `e_shapeBit`

### Details


##### e_aabbBit

> 绘制包围盒

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:664](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/physics/CCPhysicsManager.js#L664) |



##### e_jointBit

> 绘制关节链接信息

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:672](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/physics/CCPhysicsManager.js#L672) |



##### e_shapeBit

> 绘制形状

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsManager.js:680](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/physics/CCPhysicsManager.js#L680) |


