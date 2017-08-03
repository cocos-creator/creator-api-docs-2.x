## `ValueType` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:31](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L31)

Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




The base class of all value types.

### Index



##### Methods

  - [`clone`](#clone) This method returns an exact copy of current value.
  - [`equals`](#equals) Compares this object with the other one.
  - [`lerp`](#lerp) Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.
  - [`toString`](#tostring) TODO



### Details




<!-- Method Block -->
#### Methods


##### clone

This method returns an exact copy of current value.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L43) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 



##### equals

Compares this object with the other one.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:54](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L54) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L66) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 

###### Parameters
- to <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### toString

TODO

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:84](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L84) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 




