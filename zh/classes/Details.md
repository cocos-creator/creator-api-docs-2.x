## `Details` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


包含反序列化时的一些信息


### 索引

##### 属性（properties）

  - [`uuidList`](#uuidlist) `String[]` list of the depends assets' uuid
  - [`uuidObjList`](#uuidobjlist) `Object[]` the obj list whose field needs to load asset by uuid
  - [`uuidPropList`](#uuidproplist) `String[]` the corresponding field name which referenced to the asset
  - [`rawProp`](#rawprop) `String` the corresponding field name which referenced to the raw object



##### 方法

  - [`reset`](#reset) 
  - [`getUuidOf`](#getuuidof) 
  - [`push`](#push) 



### Details


#### 属性（properties）


##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L50) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L55) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L60) |



##### rawProp

> the corresponding field name which referenced to the raw object

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L66) |






<!-- Method Block -->
#### 方法


##### reset



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L72) |



##### getUuidOf



| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:93](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L93) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### push



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L107) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



