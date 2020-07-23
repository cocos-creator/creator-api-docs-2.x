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
  - [`mul`](#mul) 计算四元数乘积的结果
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
| 定义于 | [cocos2d/core/value-types/quat.ts:847](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L847) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:851](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L851) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:855](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L855) |



##### w

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/quat.ts:859](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L859) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 <a href="../modules/cc.html#method_quat" class="crosslink">cc.quat</a>

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:48](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L48) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

计算四元数乘积的结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:65](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L65) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### clone

获得指定四元数的拷贝

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:79](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L79) |



##### copy

复制目标四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:91](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L91) |



##### set

设置四元数值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:107](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L107) |



##### identity

将目标赋值为单位四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:123](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L123) |



##### rotationTo

设置四元数为两向量间的最短路径旋转，默认两向量都已归一化

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:139](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L139) |



##### getAxisAngle

获取四元数的旋转轴和旋转弧度

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:173](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L173) |

###### 参数列表
- `outAxis` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 旋转轴输出
- `q` <a href="../classes/Quat.html" class="crosslink">Quat</a> 源四元数


##### multiply

四元数乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:200](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L200) |



##### multiplyScalar

四元数标量乘法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:220](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L220) |



##### scaleAndAdd

四元数乘加：A + B * scale

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:236](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L236) |



##### rotateX

绕 X 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:252](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L252) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateY

绕 Y 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:274](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L274) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateZ

绕 Z 轴旋转指定四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:296](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L296) |

###### 参数列表
- `rad` Unknown 旋转弧度


##### rotateAround

绕世界空间下指定轴旋转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:318](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L318) |

###### 参数列表
- `axis` Unknown 旋转轴，默认已归一化
- `rad` Unknown 旋转弧度


##### rotateAroundLocal

绕本地空间下指定轴旋转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:338](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L338) |

###### 参数列表
- `axis` Unknown 旋转轴
- `rad` Unknown 旋转弧度


##### calculateW

根据 xyz 分量计算 w 分量，默认已归一化

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:354](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L354) |



##### dot

四元数点积（数量积）

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:371](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L371) |



##### lerp

逐元素线性插值： A + t * (B - A)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:383](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L383) |



##### sqlerp

带两个控制点的四元数球面插值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:446](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L446) |



##### invert

四元数求逆

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:461](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L461) |



##### conjugate

求共轭四元数，对单位四元数与求逆等价，但更高效

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:482](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L482) |



##### len

求四元数长度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:498](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L498) |



##### lengthSqr

求四元数长度平方

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:510](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L510) |



##### normalize

归一化四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:522](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L522) |



##### fromAxes

根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:542](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L542) |



##### fromViewUp

根据视口的前方向和上方向计算四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:559](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L559) |

###### 参数列表
- `view` Unknown 视口面向的前方向，必须归一化
- `up` Unknown 视口的上方向，必须归一化，默认为 (0, 1, 0)


##### fromAxisAngle

根据旋转轴和旋转弧度计算四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:574](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L574) |



##### 

Set a quaternion from the given euler angle 0, 0, z.

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:592](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L592) |

###### 参数列表
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> Quaternion to store result.
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> Angle to rotate around Z axis in degrees.


##### fromMat3

根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:608](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L608) |



##### fromEuler

根据欧拉角信息计算四元数，旋转顺序为 YZX

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:660](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L660) |



##### toAxisX

返回定义此四元数的坐标系 X 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:688](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L688) |



##### toAxisY

返回定义此四元数的坐标系 Y 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:706](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L706) |



##### toAxisZ

返回定义此四元数的坐标系 Z 轴向量

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:725](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L725) |



##### toEuler

根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:744](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L744) |

###### 参数列表
- `outerZ` Unknown z 取值范围区间改为 [-180, -90] U [90, 180]


##### strictEquals

四元数等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:784](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L784) |



##### equals

排除浮点数误差的四元数近似等价判断

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:796](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L796) |



##### toArray

四元数转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:812](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L812) |

###### 参数列表
- `ofs` Unknown 数组内的起始偏移量


##### fromArray

数组转四元数

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/quat.ts:829](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L829) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### clone

克隆一个四元数并返回

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:881](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L881) |



##### set

用另一个四元数的值设置到当前对象上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:891](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L891) |

###### 参数列表
- `newValue` <a href="../classes/Quat.html" class="crosslink">Quat</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的四元数是否与指定的四元数相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:907](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L907) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### toEuler

转换四元数到欧拉角

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:918](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L918) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fromEuler

转换欧拉角到四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:929](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L929) |

###### 参数列表
- `euler` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### lerp

计算四元数的插值结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:940](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L940) |

###### 参数列表
- `to` <a href="../classes/Quat.html" class="crosslink">Quat</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `out` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### multiply

计算四元数乘积的结果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:955](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L955) |

###### 参数列表
- `other` <a href="../classes/Quat.html" class="crosslink">Quat</a> 


##### rotateAround

围绕世界空间轴按给定弧度旋转四元数

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Quat.html" class="crosslink">Quat</a> 
| 定义于 | [cocos2d/core/value-types/quat.ts:966](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/quat.ts#L966) |

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
| 定义于 | [cocos2d/core/value-types/value-type.ts:92](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/value-types/value-type.ts#L92) |




