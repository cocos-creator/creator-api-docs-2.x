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
| 定义于 | [cocos2d/core/value-types/vec4.ts:651](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L651) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:656](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L656) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:661](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L661) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec4.ts:666](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L666) |






<!-- Method Block -->
#### 方法


##### clone

获得指定向量的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:88](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L88) |



##### copy

复制目标向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:100](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L100) |



##### set

设置向量值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:116](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L116) |



##### add

逐元素向量加法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:132](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L132) |



##### subtract

逐元素向量减法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:148](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L148) |



##### multiply

逐元素向量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:164](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L164) |



##### divide

逐元素向量除法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:180](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L180) |



##### ceil

逐元素向量向上取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:196](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L196) |



##### floor

逐元素向量向下取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:212](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L212) |



##### min

逐元素向量最小值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:228](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L228) |



##### max

逐元素向量最大值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:244](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L244) |



##### round

逐元素向量四舍五入取整

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:260](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L260) |



##### multiplyScalar

向量标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:276](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L276) |



##### scaleAndAdd

逐元素向量乘加: A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:292](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L292) |



##### distance

求两向量的欧氏距离

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:308](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L308) |



##### squaredDistance

求两向量的欧氏距离平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:324](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L324) |



##### len

求向量长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:340](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L340) |



##### lengthSqr

求向量长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:356](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L356) |



##### negate

逐元素向量取负

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:372](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L372) |



##### inverse

逐元素向量取倒数，接近 0 时返回 Infinity

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:388](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L388) |



##### inverseSafe

逐元素向量取倒数，接近 0 时返回 0

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:404](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L404) |



##### normalize

归一化向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:445](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L445) |



##### dot

向量点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:469](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L469) |



##### lerp

逐元素向量线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:481](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L481) |



##### random

生成一个在单位球体上均匀分布的随机向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:497](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L497) |

###### 参数列表
- `scale` Unknown 生成的向量长度


##### transformMat4

向量矩阵乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:520](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L520) |



##### transformQuat

向量四元数乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:560](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L560) |



##### strictEquals

向量等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:590](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L590) |



##### equals

排除浮点数误差的向量近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:602](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L602) |



##### toArray

向量转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:617](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L617) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### fromArray

数组转向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:634](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L634) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor

构造函数，可查看 Cc/vec4:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec4.ts:671](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L671) |

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
| 定义于 | [cocos2d/core/value-types/vec4.ts:698](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L698) |



##### set

用另一个向量设置当前的向量对象值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:708](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L708) |

###### 参数列表
- `newValue` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:734](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L734) |

###### 参数列表
- `other` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### equals4f

判断当前向量是否在误差范围内与指定分量的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:749](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L749) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 x 分量。
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 y 分量。
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 z 分量。
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 相比较的向量的 w 分量。
- `epsilon` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 允许的误差，应为非负数。


##### strictEquals

判断当前向量是否与指定向量相等。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/value-types/vec4.ts:767](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L767) |

###### 参数列表
- `other` Unknown 相比较的向量。


##### strictEquals4f

判断当前向量是否与指定分量的向量相等。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/value-types/vec4.ts:778](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L778) |

###### 参数列表
- `x` Unknown 指定向量的 x 分量。
- `y` Unknown 指定向量的 y 分量。
- `z` Unknown 指定向量的 z 分量。
- `w` Unknown 指定向量的 w 分量。


##### lerp

根据指定的插值比率，从当前向量到目标向量之间做插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:792](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L792) |

###### 参数列表
- `to` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 目标向量。
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 插值比率，范围为 [0,1]。


##### toString

返回当前向量的字符串表示。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:812](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L812) |



##### clampf

设置当前向量的值，使其各个分量都处于指定的范围内。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:822](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L822) |

###### 参数列表
- `minInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最小值。
- `maxInclusive` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 每个分量都代表了对应分量允许的最大值。


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:838](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L838) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:854](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L854) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### subtract

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:871](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L871) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### multiplyScalar

缩放当前向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:888](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L888) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### multiply

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:904](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L904) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### divide

向量除法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:920](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L920) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### negate

向量取反

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:936](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L936) |



##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:951](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L951) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:962](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L962) |

###### 参数列表
- `vector` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 


##### len

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:981](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L981) |


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
| 定义于 | [cocos2d/core/value-types/vec4.ts:998](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L998) |



##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1012](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L1012) |



##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1024](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L1024) |

###### 参数列表
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> optional, the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### transformMat4

Transforms the vec4 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec4.html" class="crosslink">Vec4</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1054](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L1054) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec4.html" class="crosslink">Vec4</a> the receiving vector, you can pass the same vec4 to save result to itself, if not provided, a new vec4 will be created


##### maxAxis

Returns the maximum value in x, y, z, w.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec4.ts:1075](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/value-types/vec4.ts#L1075) |




