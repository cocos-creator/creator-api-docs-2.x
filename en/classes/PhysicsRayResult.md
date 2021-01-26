## `PhysicsRayResult` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Used to store physical ray detection results



### Index

##### Properties

  - [`hitPoint`](#hitpoint) `Vec3` Hit the point
  - [`distance`](#distance) `number` Distance
  - [`collider`](#collider) `Collider3D` Hit the collision box



##### Methods

  - [`_assign`](#assign) Set up ray.
  - [`clone`](#clone) Clone



### Details


#### Properties


##### hitPoint

> Hit the point

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:41](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L41) |



##### distance

> Distance

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:53](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L53) |



##### collider

> Hit the collision box

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:65](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L65) |






<!-- Method Block -->
#### Methods


##### _assign

Set up ray. This method is used internally by the engine. Do not call it from an external script

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:81](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L81) |

###### Parameters
- `hitPoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `distance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `collider` <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> 


##### clone

Clone

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/physics-ray-result.ts:97](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/physics/framework/physics-ray-result.ts#L97) |




