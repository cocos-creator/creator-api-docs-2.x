## `Details` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)




包含反序列化时的一些信息

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:49](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L49) |



##### uuidObjList

> the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:54](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L54) |



##### uuidPropList

> the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:59](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L59) |



##### rawProp

> the corresponding field name which referenced to the raw object

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L65) |






<!-- Method Block -->
#### Methods


##### reset



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:71](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L71) |



##### getUuidOf



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:92](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L92) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- obj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- propName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### push



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js:106](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/deserialize.js#L106) |

###### Parameters
- obj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- propName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



