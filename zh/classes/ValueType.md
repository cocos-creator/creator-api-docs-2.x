## `ValueType` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:31](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L31)

Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




所有值类型的基类。

### Index



##### Methods

  - [`clone`](#clone) 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。
  - [`equals`](#equals) 当前对象是否等于指定对象。
  - [`lerp`](#lerp) 线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details




<!-- Method Block -->
#### Methods


##### clone

克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:43](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L43) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 



##### equals

当前对象是否等于指定对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:54](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L54) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L66) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 

###### Parameters
- to <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js:84](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCValueType.js#L84) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 




