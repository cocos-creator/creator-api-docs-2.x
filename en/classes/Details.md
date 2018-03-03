## `Details` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


Contains information collected during deserialization


### Index

##### Properties

  - [`uuidList`](#uuidlist) `String[]` list of the depends assets' uuid
  - [`uuidObjList`](#uuidobjlist) `Object[]` the obj list whose field needs to load asset by uuid
  - [`uuidPropList`](#uuidproplist) `String[]` the corresponding field name which referenced to the asset
  - [`rawProp`](#rawprop) `String` the corresponding field name which referenced to the raw object



##### Methods

  - [`reset`](#reset) 
  - [`getUuidOf`](#getuuidof) 
  - [`push`](#push) 



### Details


#### Properties


##### uuidList

> list of the depends assets' uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:50](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L50) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L55) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L60) |



##### rawProp

> the corresponding field name which referenced to the raw object

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L66) |






<!-- Method Block -->
#### Methods


##### reset



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L72) |



##### getUuidOf



| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:93](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L93) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### push



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L107) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `propName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `uuid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



