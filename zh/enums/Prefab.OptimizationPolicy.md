### `Prefab.OptimizationPolicy` 枚举



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


Prefab 创建实例所用的优化策略，配合 Prefab.optimizationPolicy 使用。

添加于 1.10.0

### 索引
  - `AUTO`
  - `SINGLE_INSTANCE`
  - `MULTI_INSTANCE`

### Details


##### AUTO

> 根据创建次数自动调整优化策略。初次创建实例时，行为等同 SINGLE_INSTANCE，多次创建后将自动采用 MULTI_INSTANCE。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCPrefab.js:41](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L41) |



##### SINGLE_INSTANCE

> 优化单次创建性能。<br>
该选项会跳过针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般只会创建一个实例时，请选择此项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCPrefab.js:50](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L50) |



##### MULTI_INSTANCE

> 优化多次创建性能。<br>
该选项会启用针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般会创建多个实例时，请选择此项。如果该 prefab 在场景中的节点启用了自动关联，并且在场景中有多份实例，也建议选择此项。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCPrefab.js:61](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/assets/CCPrefab.js#L61) |


