## `Quat` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)


表示 2D 向量和坐标


### 索引

##### 属性（properties）

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`w`](#w) `Number` 



##### 方法

  - [`constructor`](#constructor) 构造函数，可查看 <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>
  - [`clone`](#clone) 克隆一个四元数并返回
  - [`set`](#set) 用另一个四元数的值设置到当前对象上。
  - [`equals`](#equals) 当前的四元数是否与指定的四元数相等。
  - [`quat`](#quat) 通过该简便的函数进行创建 <a href="../classes/Quat.html" class="crosslink">cc.Quat</a> 对象。
  - [`lerp`](#lerp) 线性插值。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:68](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L68) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:71](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L71) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:74](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L74) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:77](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L77) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.js:41](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L41) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个四元数并返回

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L84) |



##### set

用另一个四元数的值设置到当前对象上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:94](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L94) |

###### 参数列表
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的四元数是否与指定的四元数相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:110](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L110) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### quat

通过该简便的函数进行创建 <a href="../classes/Quat.html" class="crosslink">cc.Quat</a> 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:141](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/quat.js#L141) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/value-type.js#L67) |

###### 参数列表
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/value-type.js:97](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/value-type.js#L97) |




