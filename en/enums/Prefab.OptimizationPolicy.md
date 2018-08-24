### `Prefab.OptimizationPolicy` Enum



Module: [cc](../modules/cc.md)


An enumeration used with the Prefab.optimizationPolicy
to specify how to optimize the instantiate operation.

Available since 1.10.0

### Index
  - `AUTO`
  - `SINGLE_INSTANCE`
  - `MULTI_INSTANCE`

### Details


##### AUTO

> The optimization policy is automatically chosen based on the number of instantiations.
When you first create an instance, the behavior is the same as SINGLE_INSTANCE. MULTI_INSTANCE will be automatically used after multiple creation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCPrefab.js:41](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L41) |



##### SINGLE_INSTANCE

> Optimize for single instance creation.<br>
This option skips code generation for this prefab.
When this prefab will usually create only one instances, please select this option.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCPrefab.js:50](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L50) |



##### MULTI_INSTANCE

> Optimize for creating instances multiple times.<br>
This option enables code generation for this prefab.
When this prefab will usually create multiple instances, please select this option.
It is also recommended to select this option if the prefab instance in the scene has Auto Sync enabled and there are multiple instances in the scene.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/assets/CCPrefab.js:61](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L61) |


