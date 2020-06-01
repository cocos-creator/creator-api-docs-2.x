## `ValueType` 类型


定义于: [https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts:32](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L32)

模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


所有值类型的基类。



### 索引



##### 方法

  - [`clone`](#clone) 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。
  - [`equals`](#equals) 当前对象是否等于指定对象。
  - [`lerp`](#lerp) 线性插值。
  - [`set`](#set) 从其它对象把所有属性复制到当前对象。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details




<!-- Method Block -->
#### 方法


##### clone

克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:39](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L39) |



##### equals

当前对象是否等于指定对象。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:51](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L51) |

###### 参数列表
- `other` <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L63) |

###### 参数列表
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### set

从其它对象把所有属性复制到当前对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/value-type.ts:80](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L80) |

###### 参数列表
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/value-types/value-type.ts#L92) |




