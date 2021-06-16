## `Details` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


包含反序列化时的一些信息



### 索引

##### 属性（properties）

  - [`uuidObjList`](#uuidobjlist) `Object[]` the obj list whose field needs to load asset by uuid
  - [`uuidPropList`](#uuidproplist) `(String|Number)[]` the corresponding field name which referenced to the asset
  - [`uuidList`](#uuidlist) `String[]` list of the depends assets' uuid
  - [`uuidList`](#uuidlist) `String[]` list of the depends assets' uuid
  - [`uuidObjList`](#uuidobjlist) `Object[]` the obj list whose field needs to load asset by uuid
  - [`uuidPropList`](#uuidproplist) `String[]` the corresponding field name which referenced to the asset



##### 方法

  - [`init`](#init) 
  - [`reset`](#reset) 
  - [`push`](#push) 
  - [`reset`](#reset) 
  - [`push`](#push) 



### Details


#### 属性（properties）


##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:496](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L496) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| 类型 | (String &#124; Number) |
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:501](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L501) |



##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:506](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L506) |



##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize-editor.js:46](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-editor.js#L46) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize-editor.js:51](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-editor.js#L51) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/deserialize-editor.js:56](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-editor.js#L56) |






<!-- Method Block -->
#### 方法


##### init



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:516](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L516) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### reset



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:526](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L526) |



##### push



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize-compiled.ts:535](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-compiled.ts#L535) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### reset



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize-editor.js:62](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-editor.js#L62) |



##### push



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/deserialize-editor.js:94](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/deserialize-editor.js#L94) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



