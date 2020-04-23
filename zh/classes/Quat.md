## `Quat` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


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
  - [`toEuler`](#toeuler) 转换四元数到欧拉角
  - [`fromEuler`](#fromeuler) 转换欧拉角到四元数
  - [`lerp`](#lerp) 计算四元数的插值结果
  - [`lerp`](#lerp) 计算四元数乘积的结果
  - [`rotateAround`](#rotatearound) 围绕世界空间轴按给定弧度旋转四元数
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:69](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L69) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:72](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L72) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:75](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L75) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.js:78](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L78) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.js:42](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L42) |

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
| 定义于 | [cocos2d/core/value-types/quat.js:85](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L85) |



##### set

用另一个四元数的值设置到当前对象上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:95](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L95) |

###### 参数列表
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的四元数是否与指定的四元数相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:111](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L111) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

转换四元数到欧拉角

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:122](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L122) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

转换欧拉角到四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:134](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L134) |

###### 参数列表
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

计算四元数的插值结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:146](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L146) |

###### 参数列表
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### lerp

计算四元数乘积的结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:161](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L161) |

###### 参数列表
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

围绕世界空间轴按给定弧度旋转四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.js:180](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/quat.js#L180) |

###### 参数列表
- `rot` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to rotate
- `axis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The axis around which to rotate in world space
- `rad` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Angle (in radians) to rotate
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to store result


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/value-type.js:97](https://github.com/cocos-creator/engine/blob/9fcea4ca5a6c5c1d8ce45ebc6ba7ad7d1b723f25/cocos2d/core/value-types/value-type.js#L97) |




