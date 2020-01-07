## `Physics3DManager` Class



Module: [cc.primitive](../modules/cc.primitive.md)
Parent Module: [cc](../modules/cc.md)


Physical systems manager.



### Index

##### Properties

  - [`enabled`](#enabled) `boolean` Gets or sets whether to enable physical systems, which are not enabled by default.
  - [`allowSleep`](#allowsleep) `boolean` Gets or sets whether the physical system allows automatic sleep, which defaults to true.
  - [`maxSubStep`](#maxsubstep) `number` Gets or sets the maximum number of child steps per frame simulated.
  - [`deltaTime`](#deltatime) `number` Gets or sets the fixed time consumed by each simulation step.
  - [`useFixedTime`](#usefixedtime) `boolean` Gets or sets whether to use a fixed time step.
  - [`gravity`](#gravity) `Vec3` Gets or sets the gravity value of the physical world, by default (0, -10, 0)
  - [`defaultMaterial`](#defaultmaterial) `PhysicsMaterial | null` Gets the global default physical material.



##### Methods

  - [`update`](#update) A physical system simulation is performed once and will now be performed automatically once per frame.
  - [`raycast`](#raycast) Detect all collision boxes and return all detected results, or null if none is detected.
  - [`raycastClosest`](#raycastclosest) Detect all collision boxes and return the detection result with the shortest ray distance.



### Details


#### Properties


##### enabled

> Gets or sets whether to enable physical systems, which are not enabled by default.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:46](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L46) |



##### allowSleep

> Gets or sets whether the physical system allows automatic sleep, which defaults to true.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:60](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L60) |



##### maxSubStep

> Gets or sets the maximum number of child steps per frame simulated.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:77](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L77) |



##### deltaTime

> Gets or sets the fixed time consumed by each simulation step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:91](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L91) |



##### useFixedTime

> Gets or sets whether to use a fixed time step.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:105](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L105) |



##### gravity

> Gets or sets the gravity value of the physical world, by default (0, -10, 0)

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:119](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L119) |



##### defaultMaterial

> Gets the global default physical material. Note that builtin is null

| meta | description |
|------|-------------|
| Type | <a href="../classes/PhysicsMaterial.html" class="crosslink">PhysicsMaterial</a> &#124; Null |
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:136](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L136) |






<!-- Method Block -->
#### Methods


##### update

A physical system simulation is performed once and will now be performed automatically once per frame.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:196](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L196) |

###### Parameters
- `deltaTime` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> The time difference from the last execution is currently elapsed per frame


##### raycast

Detect all collision boxes and return all detected results, or null if none is detected. Note that the return value is taken from the object pool, so do not save the result reference or modify the result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult[]</a> &#124; Null 
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:223](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L223) |

###### Parameters
- `worldRay` Ray A ray in world space
- `groupIndexOrName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Collision group index or group name
- `maxDistance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Maximum detection distance
- `queryTrigger` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Detect trigger or not


##### raycastClosest

Detect all collision boxes and return the detection result with the shortest ray distance. If not, return null value. Note that the return value is taken from the object pool, so do not save the result reference or modify the result.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/PhysicsRayResult.html" class="crosslink">PhysicsRayResult</a> &#124; Null 
| Defined in | [cocos2d/core/3d/physics/framework/physics-manager.ts:250](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/3d/physics/framework/physics-manager.ts#L250) |

###### Parameters
- `worldRay` Ray A ray in world space
- `groupIndexOrName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> Collision group index or group name
- `maxDistance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Maximum detection distance
- `queryTrigger` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> Detect trigger or not



