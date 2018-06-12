## `Details` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


包含反序列化时的一些信息


### 索引

##### 属性（properties）

  - [`uuidList`](#uuidlist) `String[]` 
  - [`uuidObjList`](#uuidobjlist) `Object[]` 
  - [`uuidPropList`](#uuidproplist) `String[]` 



##### 方法

  - [`reset`](#reset) 
  - [`push`](#push) 



### Details


#### 属性（properties）


##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize.js:45](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/deserialize.js#L45) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize.js:50](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/deserialize.js#L50) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize.js:55](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/deserialize.js#L55) |






<!-- Method Block -->
#### 方法


##### reset



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize.js:64](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/deserialize.js#L64) |



##### push



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize.js:98](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/deserialize.js#L98) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



