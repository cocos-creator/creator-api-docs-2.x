## `ValueType` Class


Defined in: [https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js:32](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js#L32)

Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


The base class of all value types.


### Index



##### Methods

  - [`clone`](#clone) This method returns an exact copy of current value.
  - [`equals`](#equals) Compares this object with the other one.
  - [`lerp`](#lerp) Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
  - [`toString`](#tostring) TODO



### Details




<!-- Method Block -->
#### Methods


##### clone

This method returns an exact copy of current value.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/CCValueType.js:44](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js#L44) |



##### equals

Compares this object with the other one.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/CCValueType.js:55](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js#L55) |

###### Parameters
- `other` <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| Defined in | [cocos2d/core/value-types/CCValueType.js:67](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js#L67) |

###### Parameters
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| Defined in | [cocos2d/core/value-types/CCValueType.js:85](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/value-types/CCValueType.js#L85) |




