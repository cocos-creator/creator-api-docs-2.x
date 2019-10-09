## `Vec4` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


表示 3D 向量和坐标



### 索引

##### 属性（properties）

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`w`](#w) `Number` 



##### 方法

  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec4:method
  - [`clone`](#clone) 克隆一个 Vec4 值
  - [`set`](#set) 用另一个向量设置当前的向量对象值。
  - [`equals`](#equals) 当前的向量是否与指定的向量相等。
  - [`fuzzyEquals`](#fuzzyequals) 近似判断两个点是否相等。
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`lerp`](#lerp) 线性插值。
  - [`clampf`](#clampf) 返回指定限制区域后的向量。
  - [`addSelf`](#addself) 向量加法。
  - [`add`](#add) 向量加法，并返回新结果。
  - [`subSelf`](#subself) 向量减法。
  - [`sub`](#sub) 向量减法，并返回新结果。
  - [`mulSelf`](#mulself) 缩放当前向量。
  - [`mul`](#mul) 缩放向量，并返回新结果。
  - [`scaleSelf`](#scaleself) 分量相乘。
  - [`scale`](#scale) 分量相乘，并返回新的结果。
  - [`divSelf`](#divself) 向量除法。
  - [`div`](#div) 向量除法，并返回新的结果。
  - [`negSelf`](#negself) 向量取反。
  - [`neg`](#neg) 返回取反后的新向量。
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`mag`](#mag) 返回该向量的长度。
  - [`magSqr`](#magsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。
  - [`transformMat4`](#transformmat4) Transforms the vec4 with a mat4. 4th vector component is implicitly '1'



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.js:63](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L63) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.js:67](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L67) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.js:71](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L71) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.js:75](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L75) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 Cc/vec4:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.js:43](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L43) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec4 值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:81](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L81) |



##### set

用另一个向量设置当前的向量对象值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:91](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L91) |

###### 参数列表
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:107](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L107) |

###### 参数列表
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### fuzzyEquals

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:119](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L119) |

###### 参数列表
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:141](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L141) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:155](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L155) |

###### 参数列表
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### clampf

返回指定限制区域后的向量。<br/>
向量大于 max_inclusive 则返回 max_inclusive。<br/>
向量小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:170](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L170) |

###### 参数列表
- `min_inclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `max_inclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:190](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L190) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:206](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L206) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subSelf

向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:223](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L223) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### sub

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:239](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L239) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### mulSelf

缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:256](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L256) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

缩放向量，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:272](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L272) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### scaleSelf

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:289](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L289) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### scale

分量相乘，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:305](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L305) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### divSelf

向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:322](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L322) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

向量除法，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:338](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L338) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### negSelf

向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:355](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L355) |



##### neg

返回取反后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:370](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L370) |

###### 参数列表
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:386](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L386) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:397](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L397) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### mag

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:411](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L411) |


##### 示例

```js
var v = cc.v4(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:428](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L428) |



##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:442](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L442) |



##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:454](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L454) |

###### 参数列表
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.js:473](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/value-types/vec4.js#L473) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created



