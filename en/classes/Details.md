## `Details` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Contains information collected during deserialization



### Index

##### Properties

  - [`uuidList`](#uuidlist) `String[]` list of the depends assets' uuid
  - [`uuidObjList`](#uuidobjlist) `Object[]` the obj list whose field needs to load asset by uuid
  - [`uuidPropList`](#uuidproplist) `String[]` the corresponding field name which referenced to the asset



##### Methods

  - [`reset`](#reset) 
  - [`push`](#push) 



### Details


#### Properties


##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/core/platform/deserialize.js:44](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/deserialize.js#L44) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [cocos2d/core/platform/deserialize.js:49](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/deserialize.js#L49) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/core/platform/deserialize.js:54](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/deserialize.js#L54) |






<!-- Method Block -->
#### Methods


##### reset



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/deserialize.js:60](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/deserialize.js#L60) |



##### push



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/deserialize.js:92](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/deserialize.js#L92) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



