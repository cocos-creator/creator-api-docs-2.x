### `PhysicsManager.DrawBits` Enum



Module: [cc](../modules/cc.md)


The draw bits for drawing physics debug information.<br>
example:<br>
```js
cc.director.getPhysicsManager().debugDrawFlags =
 // cc.PhysicsManager.DrawBits.e_aabbBit |
 // cc.PhysicsManager.DrawBits.e_pairBit |
 // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
 cc.PhysicsManager.DrawBits.e_jointBit |
 cc.PhysicsManager.DrawBits.e_shapeBit;
```


### Index
  - `e_aabbBit`
  - `e_jointBit`
  - `e_shapeBit`

### Details


##### e_aabbBit

> Draw bounding boxes

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:664](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/physics/CCPhysicsManager.js#L664) |



##### e_jointBit

> Draw joint connections

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:672](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/physics/CCPhysicsManager.js#L672) |



##### e_shapeBit

> Draw shapes

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsManager.js:680](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/physics/CCPhysicsManager.js#L680) |


