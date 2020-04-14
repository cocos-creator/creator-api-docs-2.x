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

  - [`subSelf`](#subself) 向量减法。
  - [`sub`](#sub) 向量减法，并返回新结果。
  - [`mulSelf`](#mulself) 缩放当前向量。
  - [`mul`](#mul) 缩放向量，并返回新结果。
  - [`divSelf`](#divself) 向量除法。
  - [`div`](#div) 向量除法，并返回新的结果。
  - [`scaleSelf`](#scaleself) 分量相乘。
  - [`scale`](#scale) 分量相乘，并返回新的结果。
  - [`negSelf`](#negself) 向量取反。
  - [`neg`](#neg) 返回取反后的新向量。
  - [`clone`](#clone) 获得指定向量的拷贝
  - [`copy`](#copy) 复制目标向量
  - [`set`](#set) 设置向量值
  - [`add`](#add) 逐元素向量加法
  - [`subtract`](#subtract) 逐元素向量减法
  - [`multiply`](#multiply) 逐元素向量乘法
  - [`divide`](#divide) 逐元素向量除法
  - [`ceil`](#ceil) 逐元素向量向上取整
  - [`floor`](#floor) 逐元素向量向下取整
  - [`min`](#min) 逐元素向量最小值
  - [`max`](#max) 逐元素向量最大值
  - [`round`](#round) 逐元素向量四舍五入取整
  - [`multiplyScalar`](#multiplyscalar) 向量标量乘法
  - [`scaleAndAdd`](#scaleandadd) 逐元素向量乘加: A + B * scale
  - [`distance`](#distance) 求两向量的欧氏距离
  - [`squaredDistance`](#squareddistance) 求两向量的欧氏距离平方
  - [`len`](#len) 求向量长度
  - [`lengthSqr`](#lengthsqr) 求向量长度平方
  - [`negate`](#negate) 逐元素向量取负
  - [`inverse`](#inverse) 逐元素向量取倒数，接近 0 时返回 Infinity
  - [`inverseSafe`](#inversesafe) 逐元素向量取倒数，接近 0 时返回 0
  - [`normalize`](#normalize) 归一化向量
  - [`dot`](#dot) 向量点积（数量积）
  - [`lerp`](#lerp) 逐元素向量线性插值： A + t * (B - A)
  - [`random`](#random) 生成一个在单位球体上均匀分布的随机向量
  - [`transformMat4`](#transformmat4) 向量矩阵乘法
  - [`transformQuat`](#transformquat) 向量四元数乘法
  - [`strictEquals`](#strictequals) 向量等价判断
  - [`equals`](#equals) 排除浮点数误差的向量近似等价判断
  - [`toArray`](#toarray) 向量转数组
  - [`fromArray`](#fromarray) 数组转向量
  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec4:method
  - [`clone`](#clone) 克隆一个 Vec4 值
  - [`set`](#set) 用另一个向量设置当前的向量对象值。
  - [`equals`](#equals) 当前的向量是否与指定的向量相等。
  - [`equals4f`](#equals4f) 判断当前向量是否在误差范围内与指定分量的向量相等。
  - [`strictEquals`](#strictequals) 判断当前向量是否与指定向量相等。
  - [`strictEquals4f`](#strictequals4f) 判断当前向量是否与指定分量的向量相等。
  - [`lerp`](#lerp) 根据指定的插值比率，从当前向量到目标向量之间做插值。
  - [`toString`](#tostring) 返回当前向量的字符串表示。
  - [`clampf`](#clampf) 设置当前向量的值，使其各个分量都处于指定的范围内。
  - [`addSelf`](#addself) 向量加法。
  - [`add`](#add) 向量加法，并返回新结果。
  - [`subtract`](#subtract) 向量减法，并返回新结果。
  - [`multiplyScalar`](#multiplyscalar) 缩放当前向量。
  - [`multiply`](#multiply) 分量相乘。
  - [`divide`](#divide) 向量除法。
  - [`negate`](#negate) 向量取反
  - [`dot`](#dot) 当前向量与指定向量进行点乘。
  - [`cross`](#cross) 当前向量与指定向量进行叉乘。
  - [`len`](#len) 返回该向量的长度。
  - [`lengthSqr`](#lengthsqr) 返回该向量的长度平方。
  - [`normalizeSelf`](#normalizeself) 向量归一化，让这个向量的长度为 1。
  - [`normalize`](#normalize) 返回归一化后的向量。
  - [`transformMat4`](#transformmat4) Transforms the vec4 with a mat4. 4th vector component is implicitly '1'
  - [`maxAxis`](#maxaxis) Returns the maximum value in x, y, z, w.



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:728](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L728) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:733](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L733) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:738](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L738) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:743](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L743) |






<!-- Method Block -->
#### 方法


##### subSelf

向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:57](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L57) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### sub

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:66](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L66) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### mulSelf

缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:77](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L77) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

缩放向量，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:86](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L86) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### divSelf

向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:97](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L97) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

向量除法，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:106](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L106) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### scaleSelf

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:117](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L117) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### scale

分量相乘，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:126](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L126) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### negSelf

向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:137](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L137) |



##### neg

返回取反后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:145](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L145) |

###### 参数列表
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### clone

获得指定向量的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:165](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L165) |



##### copy

复制目标向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:177](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L177) |



##### set

设置向量值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:193](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L193) |



##### add

逐元素向量加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:209](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L209) |



##### subtract

逐元素向量减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:225](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L225) |



##### multiply

逐元素向量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:241](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L241) |



##### divide

逐元素向量除法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:257](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L257) |



##### ceil

逐元素向量向上取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:273](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L273) |



##### floor

逐元素向量向下取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:289](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L289) |



##### min

逐元素向量最小值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:305](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L305) |



##### max

逐元素向量最大值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:321](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L321) |



##### round

逐元素向量四舍五入取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:337](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L337) |



##### multiplyScalar

向量标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:353](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L353) |



##### scaleAndAdd

逐元素向量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:369](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L369) |



##### distance

求两向量的欧氏距离

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:385](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L385) |



##### squaredDistance

求两向量的欧氏距离平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:401](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L401) |



##### len

求向量长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:417](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L417) |



##### lengthSqr

求向量长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:433](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L433) |



##### negate

逐元素向量取负

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:449](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L449) |



##### inverse

逐元素向量取倒数，接近 0 时返回 Infinity

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:465](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L465) |



##### inverseSafe

逐元素向量取倒数，接近 0 时返回 0

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:481](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L481) |



##### normalize

归一化向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:522](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L522) |



##### dot

向量点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:546](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L546) |



##### lerp

逐元素向量线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:558](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L558) |



##### random

生成一个在单位球体上均匀分布的随机向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:574](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L574) |

###### 参数列表
- `scale` Unknown 生成的向量长度


##### transformMat4

向量矩阵乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:597](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L597) |



##### transformQuat

向量四元数乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:637](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L637) |



##### strictEquals

向量等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:667](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L667) |



##### equals

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:679](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L679) |



##### toArray

向量转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:694](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L694) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### fromArray

数组转向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:711](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L711) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor

构造函数，可查看 Cc/vec4:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:748](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L748) |

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
| 定义于 | [cocos2d/core/value-types/vec4.ts:775](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L775) |



##### set

用另一个向量设置当前的向量对象值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:785](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L785) |

###### 参数列表
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:811](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L811) |

###### 参数列表
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### equals4f

判断当前向量是否在误差范围内与指定分量的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:826](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L826) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 x 分量。
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 y 分量。
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 z 分量。
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 w 分量。
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 允许的误差，应为非负数。


##### strictEquals

判断当前向量是否与指定向量相等。两向量的各分量都分别相等时返回 `true`；否则返回 `false`。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:844](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L844) |

###### 参数列表
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 相比较的向量。


##### strictEquals4f

判断当前向量是否与指定分量的向量相等。两向量的各分量都分别相等时返回 `true`；否则返回 `false`。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:855](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L855) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 x 分量。
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 y 分量。
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 z 分量。
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 指定向量的 w 分量。


##### lerp

根据指定的插值比率，从当前向量到目标向量之间做插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:869](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L869) |

###### 参数列表
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 目标向量。
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 插值比率，范围为 [0,1]。


##### toString

返回当前向量的字符串表示。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:889](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L889) |



##### clampf

设置当前向量的值，使其各个分量都处于指定的范围内。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:899](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L899) |

###### 参数列表
- `minInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最小值。
- `maxInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最大值。


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:915](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L915) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:931](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L931) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subtract

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:948](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L948) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### multiplyScalar

缩放当前向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:965](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L965) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:981](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L981) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### divide

向量除法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:997](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L997) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

向量取反

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1013](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1013) |



##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1028](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1028) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1039](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1039) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### len

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1058](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1058) |


##### 示例

```js
var v = cc.v4(10, 10);
v.len(); // return 14.142135623730951;
```

##### lengthSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1075](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1075) |



##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1089](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1089) |



##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1101](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1101) |

###### 参数列表
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1131](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1131) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### maxAxis

Returns the maximum value in x, y, z, w.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1152](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/vec4.ts#L1152) |




