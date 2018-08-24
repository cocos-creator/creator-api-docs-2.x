### `RayCastType` Enum



Module: [cc](../modules/cc.md)


Enum for RayCastType.


### Index
  - `Closest`
  - `Any`
  - `AllClosest`
  - `All`

### Details


##### Closest

> Detects closest collider on the raycast path.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsTypes.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsTypes.js#L84) |



##### Any

> Detects any collider on the raycast path.
Once detects a collider, will stop the searching process.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsTypes.js:92](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsTypes.js#L92) |



##### AllClosest

> Detects all colliders on the raycast path.
One collider may return several collision points(because one collider may have several fixtures,
one fixture will return one point, the point may inside collider), AllClosest will return the closest one.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsTypes.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsTypes.js#L102) |



##### All

> Detects all colliders on the raycast path.
One collider may return several collision points, All will return all these points.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsTypes.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsTypes.js#L114) |


