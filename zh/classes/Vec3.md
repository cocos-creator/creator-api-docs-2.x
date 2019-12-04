## `Vec3` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)


表示 3D 向量和坐标



### 索引

##### 属性（properties）

  - [`x`](#x) `Number` 
  - [`y`](#y) `Number` 
  - [`z`](#z) `Number` 
  - [`ONE`](#one) `Vec3` 新 Vec3 对象。
  - [`ZERO`](#zero) `Vec3` 返回 x = 0，y = 0，z = 0 的 Vec3 对象。
  - [`UP`](#up) `Vec3` 返回 x = 0, y = 1, z = 0 的 Vec3 对象。
  - [`RIGHT`](#right) `Vec3` 返回 x = 1，y = 0，z = 0 的 Vec3 对象。
  - [`FRONT`](#front) `Vec3` 返回 x = 0，y = 0，z = 1 的 Vec3 对象。



##### 方法

  - [`constructor`](#constructor) 构造函数，可查看 Cc/vec3:method
  - [`clone`](#clone) 克隆一个 Vec3 值
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
  - [`transformMat4`](#transformmat4) Transforms the vec3 with a mat4. 4th vector component is implicitly '1'
  - [`angle`](#angle) 夹角的弧度。
  - [`project`](#project) 返回当前向量在指定 vector 向量上的投影向量。
  - [`signAngle`](#signangle) 带方向的夹角的弧度。
  - [`rotate`](#rotate) 返回旋转给定弧度后的新向量。
  - [`rotateSelf`](#rotateself) 按指定弧度旋转向量。



### Details


#### 属性（properties）


##### x

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:70](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L70) |



##### y

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:73](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L73) |



##### z

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:76](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L76) |



##### ONE

> 新 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:533](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L533) |



##### ZERO

> 返回 x = 0，y = 0，z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:544](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L544) |



##### UP

> 返回 x = 0, y = 1, z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:555](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L555) |



##### RIGHT

> 返回 x = 1，y = 0，z = 0 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:566](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L566) |



##### FRONT

> 返回 x = 0，y = 0，z = 1 的 Vec3 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/value-types/vec3.js:577](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L577) |






<!-- Method Block -->
#### 方法


##### constructor

构造函数，可查看 Cc/vec3:method

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/vec3.js:46](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L46) |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `z` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆一个 Vec3 值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:83](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L83) |



##### set

用另一个向量设置当前的向量对象值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:93](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L93) |

###### 参数列表
- `newValue` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> !#en new value to set. !#zh 要设置的新值


##### equals

当前的向量是否与指定的向量相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:108](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L108) |

###### 参数列表
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### fuzzyEquals

近似判断两个点是否相等。<br/>
判断 2 个向量是否在指定数值的范围之内，如果在则返回 true，反之则返回 false。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:120](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L120) |

###### 参数列表
- `other` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `variance` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:140](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L140) |



##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:154](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L154) |

###### 参数列表
- `to` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### clampf

返回指定限制区域后的向量。<br/>
向量大于 max_inclusive 则返回 max_inclusive。<br/>
向量小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:169](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L169) |

###### 参数列表
- `min_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `max_inclusive` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### addSelf

向量加法。如果你想保存结果到另一个向量，使用 add() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:188](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L188) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### add

向量加法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:203](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L203) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### subSelf

向量减法。如果你想保存结果到另一个向量，可使用 sub() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:219](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L219) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### sub

向量减法，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:234](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L234) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### mulSelf

缩放当前向量。如果你想结果保存到另一个向量，可使用 mul() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:250](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L250) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### mul

缩放向量，并返回新结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:265](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L265) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### scaleSelf

分量相乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:281](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L281) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### scale

分量相乘，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:296](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L296) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### divSelf

向量除法。如果你想结果保存到另一个向量，可使用 div() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:312](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L312) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### div

向量除法，并返回新的结果。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:327](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L327) |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### negSelf

向量取反。如果你想结果保存到另一个向量，可使用 neg() 代替。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:343](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L343) |



##### neg

返回取反后的新向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:357](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L357) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### dot

当前向量与指定向量进行点乘。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:372](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L372) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### cross

当前向量与指定向量进行叉乘。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:383](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L383) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### mag

返回该向量的长度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:397](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L397) |


##### 示例

```js
var v = cc.v2(10, 10);
v.mag(); // return 14.142135623730951;
```

##### magSqr

返回该向量的长度平方。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:410](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L410) |



##### normalizeSelf

向量归一化，让这个向量的长度为 1。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:420](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L420) |



##### normalize

返回归一化后的向量。<br/>
<br/>
注意，当前向量不变，并返回一个新的归一化向量。如果你想来归一化当前向量，可使用 normalizeSelf 函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:432](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L432) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### transformMat4

Transforms the vec3 with a mat4. 4th vector component is implicitly '1'

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:451](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L451) |

###### 参数列表
- `m` <a href="../classes/Mat4.html" class="crosslink">Mat4</a> matrix to transform with
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> the receiving vector, you can pass the same vec3 to save result to itself, if not provided, a new vec3 will be created


##### angle

夹角的弧度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:463](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L463) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### project

返回当前向量在指定 vector 向量上的投影向量。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:472](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L472) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 

##### 示例

```js
var v1 = cc.v3(20, 20, 20);
var v2 = cc.v3(5, 5, 5);
v1.project(v2); // Vec3 {x: 20, y: 20, z: 20};
```

##### signAngle

带方向的夹角的弧度。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:487](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L487) |

###### 参数列表
- `vector` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> &#124; <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### rotate

返回旋转给定弧度后的新向量。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:503](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L503) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, the receiving vector, you can pass the same vec2 to save result to itself, if not provided, a new vec2 will be created


##### rotateSelf

按指定弧度旋转向量。该方法仅用做兼容 2D 计算。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/value-types/vec3.js:516](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/value-types/vec3.js#L516) |

###### 参数列表
- `radians` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 



