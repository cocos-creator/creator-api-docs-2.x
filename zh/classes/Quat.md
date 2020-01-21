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
  - [`clone`](#clone) 获得指定四元数的拷贝
  - [`copy`](#copy) 复制目标四元数
  - [`set`](#set) 设置四元数值
  - [`identity`](#identity) 将目标赋值为单位四元数
  - [`rotationTo`](#rotationto) 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
  - [`getAxisAngle`](#getaxisangle) 获取四元数的旋转轴和旋转弧度
  - [`multiply`](#multiply) 四元数乘法
  - [`multiplyScalar`](#multiplyscalar) 四元数标量乘法
  - [`scaleAndAdd`](#scaleandadd) 四元数乘加：A + B * scale
  - [`rotateX`](#rotatex) 绕 X 轴旋转指定四元数
  - [`rotateY`](#rotatey) 绕 Y 轴旋转指定四元数
  - [`rotateZ`](#rotatez) 绕 Z 轴旋转指定四元数
  - [`rotateAround`](#rotatearound) 绕世界空间下指定轴旋转四元数
  - [`rotateAroundLocal`](#rotatearoundlocal) 绕本地空间下指定轴旋转四元数
  - [`calculateW`](#calculatew) 根据 xyz 分量计算 w 分量，默认已归一化
  - [`dot`](#dot) 四元数点积（数量积）
  - [`lerp`](#lerp) 逐元素线性插值： A + t * (B - A)
  - [`sqlerp`](#sqlerp) 带两个控制点的四元数球面插值
  - [`invert`](#invert) 四元数求逆
  - [`conjugate`](#conjugate) 求共轭四元数，对单位四元数与求逆等价，但更高效
  - [`len`](#len) 求四元数长度
  - [`lengthSqr`](#lengthsqr) 求四元数长度平方
  - [`normalize`](#normalize) 归一化四元数
  - [`fromAxes`](#fromaxes) 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
  - [`fromViewUp`](#fromviewup) 根据视口的前方向和上方向计算四元数
  - [`fromAxisAngle`](#fromaxisangle) 根据旋转轴和旋转弧度计算四元数
  - [``](#) Set a quaternion from the given euler angle 0, 0, z.
  - [`fromMat3`](#frommat3) 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息
  - [`fromEuler`](#fromeuler) 根据欧拉角信息计算四元数，旋转顺序为 YZX
  - [`toAxisX`](#toaxisx) 返回定义此四元数的坐标系 X 轴向量
  - [`toAxisY`](#toaxisy) 返回定义此四元数的坐标系 Y 轴向量
  - [`toAxisZ`](#toaxisz) 返回定义此四元数的坐标系 Z 轴向量
  - [`toEuler`](#toeuler) 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX
  - [`strictEquals`](#strictequals) 四元数等价判断
  - [`equals`](#equals) 排除浮点数误差的四元数近似等价判断
  - [`toArray`](#toarray) 四元数转数组
  - [`fromArray`](#fromarray) 数组转四元数
  - [`clone`](#clone) 克隆一个四元数并返回
  - [`set`](#set) 用另一个四元数的值设置到当前对象上。
  - [`equals`](#equals) 当前的四元数是否与指定的四元数相等。
  - [`toEuler`](#toeuler) 转换四元数到欧拉角
  - [`fromEuler`](#fromeuler) 转换欧拉角到四元数
  - [`lerp`](#lerp) 计算四元数的插值结果
  - [`multiply`](#multiply) 计算四元数乘积的结果
  - [`rotateAround`](#rotatearound) 围绕世界空间轴按给定弧度旋转四元数
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:837](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L837) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:841](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L841) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:845](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L845) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:849](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L849) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:49](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L49) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

获得指定四元数的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:72](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L72) |



##### copy

复制目标四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:84](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L84) |



##### set

设置四元数值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:100](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L100) |



##### identity

将目标赋值为单位四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:116](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L116) |



##### rotationTo

设置四元数为两向量间的最短路径旋转，默认两向量都已归一化

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:132](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L132) |



##### getAxisAngle

获取四元数的旋转轴和旋转弧度

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/value-types/quat.ts:166](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L166) |

###### 参数列表
- `outAxis` Unknown 旋转轴输出
- `q` Unknown 源四元数


##### multiply

四元数乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:193](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L193) |



##### multiplyScalar

四元数标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:213](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L213) |



##### scaleAndAdd

四元数乘加：A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:229](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L229) |



##### rotateX

绕 X 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:245](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L245) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateY

绕 Y 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:267](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L267) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateZ

绕 Z 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:289](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L289) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateAround

绕世界空间下指定轴旋转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:311](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L311) |

###### 参数列表
- `axis` Unknown 旋转轴，默认已归一化
- `rad` Unknown 旋转弧度


##### rotateAroundLocal

绕本地空间下指定轴旋转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:331](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L331) |

###### 参数列表
- `axis` Unknown 旋转轴
- `rad` Unknown 旋转弧度


##### calculateW

根据 xyz 分量计算 w 分量，默认已归一化

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:347](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L347) |



##### dot

四元数点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:364](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L364) |



##### lerp

逐元素线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:376](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L376) |



##### sqlerp

带两个控制点的四元数球面插值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:437](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L437) |



##### invert

四元数求逆

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:452](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L452) |



##### conjugate

求共轭四元数，对单位四元数与求逆等价，但更高效

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:473](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L473) |



##### len

求四元数长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:489](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L489) |



##### lengthSqr

求四元数长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:501](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L501) |



##### normalize

归一化四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:513](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L513) |



##### fromAxes

根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:533](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L533) |



##### fromViewUp

根据视口的前方向和上方向计算四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:550](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L550) |

###### 参数列表
- `view` Unknown 视口面向的前方向，必须归一化
- `up` Unknown 视口的上方向，必须归一化，默认为 (0, 1, 0)


##### fromAxisAngle

根据旋转轴和旋转弧度计算四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:565](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L565) |



##### 

Set a quaternion from the given euler angle 0, 0, z.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:583](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L583) |

###### 参数列表
- `out` Quat Quaternion to store result.
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Angle to rotate around Z axis in degrees.


##### fromMat3

根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:598](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L598) |



##### fromEuler

根据欧拉角信息计算四元数，旋转顺序为 YZX

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:650](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L650) |



##### toAxisX

返回定义此四元数的坐标系 X 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:678](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L678) |



##### toAxisY

返回定义此四元数的坐标系 Y 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:696](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L696) |



##### toAxisZ

返回定义此四元数的坐标系 Z 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:715](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L715) |



##### toEuler

根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:734](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L734) |

###### 参数列表
- `outerZ` Unknown z 取值范围区间改为 [-180, -90] U [90, 180]


##### strictEquals

四元数等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:774](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L774) |



##### equals

排除浮点数误差的四元数近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:786](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L786) |



##### toArray

四元数转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:802](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L802) |

###### 参数列表
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

数组转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:819](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L819) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### clone

克隆一个四元数并返回

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:871](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L871) |



##### set

用另一个四元数的值设置到当前对象上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:881](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L881) |

###### 参数列表
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的四元数是否与指定的四元数相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:897](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L897) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

转换四元数到欧拉角

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:908](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L908) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

转换欧拉角到四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:919](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L919) |

###### 参数列表
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

计算四元数的插值结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:930](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L930) |

###### 参数列表
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### multiply

计算四元数乘积的结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:945](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L945) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

围绕世界空间轴按给定弧度旋转四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:956](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/quat.ts#L956) |

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
| 定义于 | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/value-types/value-type.ts#L92) |




