## `ICollisionDetect` 类型



模块: [cc.primitive](../modules/cc.primitive.md)
父模块: [cc](../modules/cc.md)


Collision detect



### 索引



##### 方法

  - [`raycastClosest`](#raycastclosest) Ray cast, and return information of the closest hit.
  - [`raycast`](#raycast) Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.



### Details




<!-- Method Block -->
#### 方法


##### raycastClosest

Ray cast, and return information of the closest hit.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/3d/physics/spec/i-physics-world.ts:59](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/spec/i-physics-world.ts#L59) |

###### 参数列表
- `worldRay` Ray 
- `options` <a href="../classes/IRaycastOptions.html" class="crosslink">IRaycastOptions</a> 
- `out` <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult</a> 


##### raycast

Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/3d/physics/spec/i-physics-world.ts:69](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/spec/i-physics-world.ts#L69) |

###### 参数列表
- `worldRay` Ray 
- `options` <a href="../classes/IRaycastOptions.html" class="crosslink">IRaycastOptions</a> 
- `pool` RecyclePool 
- `resultes` <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult[]</a> 



