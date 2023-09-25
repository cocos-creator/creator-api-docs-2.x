## `Mat3` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


Mathematical 3x3 matrix.

NOTE: we use column-major matrix for all matrix calculation.

This may lead to some confusion when referencing OpenGL documentation,
however, which represents out all matricies in column-major format.
This means that while in code a matrix may be typed out as:

[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 x, y, z, 0]

The same matrix in the [OpenGL documentation](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glTranslate.xml)
is written as:

 1 0 0 x
 0 1 0 y
 0 0 1 z
 0 0 0 0

Please rest assured, however, that they are the same thing!
This is not unique to glMatrix, either, as OpenGL developers have long been confused by the
apparent lack of consistency between the memory layout and the documentation.



### 索引

##### 属性（properties）

  - [`IDENTITY`](#identity) `Mat3` Identity  of Mat3
  - [`m`](#m) `Float64Array | Float32Array` 矩阵数据



##### 方法

  - [`toArray`](#toarray) 矩阵转数组
  - [`fromArray`](#fromarray) 数组转矩阵
  - [`constructor`](#constructor) 
  - [`clone`](#clone) 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。
  - [`equals`](#equals) 当前对象是否等于指定对象。
  - [`lerp`](#lerp) 线性插值。
  - [`set`](#set) 从其它对象把所有属性复制到当前对象。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### 属性（properties）


##### IDENTITY

> Identity  of Mat3

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Mat3.html" class="crosslink">Mat3</a> |
| 定义于 | [cocos2d/core/value-types/mat3.ts:43](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/mat3.ts#L43) |



##### m

> 矩阵数据

| meta | description |
|------|-------------|
| 类型 | Float64Array &#124; Float32Array |
| 定义于 | [cocos2d/core/value-types/mat3.ts:836](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/mat3.ts#L836) |






<!-- Method Block -->
#### 方法


##### toArray

矩阵转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat3.ts:802](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/mat3.ts#L802) |

###### 参数列表
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

数组转矩阵

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat3.ts:819](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/mat3.ts#L819) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/mat3.ts:844](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/mat3.ts#L844) |



##### clone

克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:39](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/value-type.ts#L39) |



##### equals

当前对象是否等于指定对象。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:51](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/value-type.ts#L51) |

###### 参数列表
- `other` <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### lerp

线性插值。<br/>
当 ratio = 0 时返回自身，ratio = 1 时返回目标，ratio = 0.5 返回自身和目标的平均值。。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:63](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/value-type.ts#L63) |

###### 参数列表
- `to` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient


##### set

从其它对象把所有属性复制到当前对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/value-type.ts:80](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/value-type.ts#L80) |

###### 参数列表
- `source` <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the source to copy


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/value-types/value-type.ts#L92) |




