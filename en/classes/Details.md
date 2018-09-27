## `Details` Class



Module: [_decorator](../modules/_decorator.md)
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
| Defined in | [cocos2d/core/platform/deserialize.js:45](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/deserialize.js#L45) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [cocos2d/core/platform/deserialize.js:50](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/deserialize.js#L50) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/core/platform/deserialize.js:55](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/deserialize.js#L55) |






<!-- Method Block -->
#### Methods


##### reset



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/deserialize.js:64](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/deserialize.js#L64) |



##### push



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/deserialize.js:98](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/deserialize.js#L98) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



