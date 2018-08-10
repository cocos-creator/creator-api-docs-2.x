## `AffineTransform` 类型



模块: [cc](../modules/cc.md)


cc.AffineTransform 类代表一个仿射变换矩阵。它基本上是由平移旋转，缩放转变所组成。<br/>
请不要直接使用它的构造，请使用 cc.affineTransformMake 函数代替。


### 索引



##### 方法

  - [`affineTransformMake`](#affinetransformmake) 用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。
  - [`affineTransformClone`](#affinetransformclone) 克隆指定的 cc.AffineTransform 对象。
  - [`pointApplyAffineTransform`](#pointapplyaffinetransform) 对一个点应用矩阵变换。
  - [`sizeApplyAffineTransform`](#sizeapplyaffinetransform) 应用 Size 到仿射变换矩阵上。
  - [`affineTransformMakeIdentity`](#affinetransformmakeidentity) 单位矩阵：...
  - [`rectApplyAffineTransform`](#rectapplyaffinetransform) 应用 Rect 到仿射变换矩阵上。
  - [`obbApplyAffineTransform`](#obbapplyaffinetransform) 应用 Rect 到仿射变换矩阵上, 并转换为有向包围盒
  - [`affineTransformTranslate`](#affinetransformtranslate) 基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。
  - [`affineTransformScale`](#affinetransformscale) 创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。
  - [`affineTransformRotate`](#affinetransformrotate) 创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。
  - [`affineTransformConcat`](#affinetransformconcat) 拼接两个矩阵，并返回结果：...
  - [`affineTransformConcatIn`](#affinetransformconcatin) 拼接两个矩阵，将结果保存到第一个矩阵。
  - [`affineTransformEqualToTransform`](#affinetransformequaltotransform) 判断两个矩阵是否相等。
  - [`affineTransformInvert`](#affinetransforminvert) 求逆矩阵。
  - [`affineTransformInvert`](#affinetransforminvert) 求逆矩阵并存入用户传入的矩阵对象参数。



### Details




<!-- Method Block -->
#### 方法


##### affineTransformMake

用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:56](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L56) |

###### 参数列表
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `c` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### affineTransformClone

克隆指定的 cc.AffineTransform 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:72](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L72) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### pointApplyAffineTransform

对一个点应用矩阵变换。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:83](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L83) |

###### 参数列表
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x.
- `transOrY` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix or y.


##### sizeApplyAffineTransform

应用 Size 到仿射变换矩阵上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:125](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L125) |

###### 参数列表
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformMakeIdentity

单位矩阵：<br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:137](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L137) |



##### rectApplyAffineTransform

应用 Rect 到仿射变换矩阵上。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:169](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L169) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### obbApplyAffineTransform

应用 Rect 到仿射变换矩阵上, 并转换为有向包围盒

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:224](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L224) |

###### 参数列表
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `out_bl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tr` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_br` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### affineTransformTranslate

基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:258](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L258) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on x axis.
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on y axis.


##### affineTransformScale

创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:278](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L278) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `sx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on x axis.
- `sy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on y axis.


##### affineTransformRotate

创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:291](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L291) |

###### 参数列表
- `aTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `anAngle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The angle to rotate.


##### affineTransformConcat

拼接两个矩阵，并返回结果：<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:311](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L311) |

###### 参数列表
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformConcatIn

拼接两个矩阵，将结果保存到第一个矩阵。<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:332](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L332) |

###### 参数列表
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformEqualToTransform

判断两个矩阵是否相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:356](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L356) |

###### 参数列表
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

求逆矩阵。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:368](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L368) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

求逆矩阵并存入用户传入的矩阵对象参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/CCAffineTransform.js:394](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCAffineTransform.js#L394) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



