## `AffineTransform` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




cc.AffineTransform 类代表一个仿射变换矩阵。它基本上是由平移旋转，缩放转变所组成。<br/>
请不要直接使用它的构造，请使用 cc.affineTransformMake 函数代替。

### Index



##### Methods

  - [`affineTransformMake`](#affinetransformmake) 用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。
  - [`affineTransformClone`](#affinetransformclone) 克隆指定的 cc.AffineTransform 对象。
  - [`pointApplyAffineTransform`](#pointapplyaffinetransform) 对一个点应用矩阵变换。
  - [`sizeApplyAffineTransform`](#sizeapplyaffinetransform) 应用 Size 到仿射变换矩阵上。
  - [`affineTransformMakeIdentity`](#affinetransformmakeidentity) 单位矩阵：<br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]
  - [`rectApplyAffineTransform`](#rectapplyaffinetransform) 应用 Rect 到仿射变换矩阵上。
  - [`obbApplyAffineTransform`](#obbapplyaffinetransform) 应用 Rect 到仿射变换矩阵上, 并转换为有向包围盒
  - [`affineTransformTranslate`](#affinetransformtranslate) 基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。
  - [`affineTransformScale`](#affinetransformscale) 创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。
  - [`affineTransformRotate`](#affinetransformrotate) 创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。
  - [`affineTransformConcat`](#affinetransformconcat) 拼接两个矩阵，并返回结果：<br/>
t' = t1 * t2
  - [`affineTransformConcatIn`](#affinetransformconcatin) 拼接两个矩阵，将结果保存到第一个矩阵。<br/>
t' = t1 * t2
  - [`affineTransformEqualToTransform`](#affinetransformequaltotransform) 判断两个矩阵是否相等。
  - [`affineTransformInvert`](#affinetransforminvert) 求逆矩阵。
  - [`affineTransformInvert`](#affinetransforminvert) 求逆矩阵并存入用户传入的矩阵对象参数。



### Details




<!-- Method Block -->
#### Methods


##### affineTransformMake

用在矩阵中的所有内容创建一个 cc.AffineTransform 对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L55) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- c <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- d <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- tx <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- ty <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### affineTransformClone

克隆指定的 cc.AffineTransform 对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:71](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L71) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### pointApplyAffineTransform

对一个点应用矩阵变换。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:82](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L82) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- point <a href="../classes/Vec2.html" class="crosslink">Vec2</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x.
- transOrY <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix or y.


##### sizeApplyAffineTransform

应用 Size 到仿射变换矩阵上。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L124) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 

###### Parameters
- size <a href="../classes/Size.html" class="crosslink">Size</a> 
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformMakeIdentity

单位矩阵：<br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L136) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



##### rectApplyAffineTransform

应用 Rect 到仿射变换矩阵上。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:168](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L168) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- rect <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- anAffineTransform <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### obbApplyAffineTransform

应用 Rect 到仿射变换矩阵上, 并转换为有向包围盒

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:223](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L223) |

###### Parameters
- rect <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- anAffineTransform <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- out_bl <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out_tl <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out_tr <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- out_br <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### affineTransformTranslate

基于一个基础矩阵加上一个平移操作来创建一个新的矩阵。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L257) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- tx <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on x axis.
- ty <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on y axis.


##### affineTransformScale

创建一个基础变换矩阵，并在此基础上进行了 Scale 仿射变换。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L277) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- sx <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on x axis.
- sy <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on y axis.


##### affineTransformRotate

创建一个基础变换矩阵，并在此基础上进行了 Rotation 仿射变换。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:290](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L290) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- aTransform <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- anAngle <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The angle to rotate.


##### affineTransformConcat

拼接两个矩阵，并返回结果：<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:310](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L310) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t1 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- t2 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformConcatIn

拼接两个矩阵，将结果保存到第一个矩阵。<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:331](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L331) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t1 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- t2 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformEqualToTransform

判断两个矩阵是否相等。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:355](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L355) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- t1 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- t2 <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

求逆矩阵。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:367](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L367) |
| Return 		 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 

###### Parameters
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

求逆矩阵并存入用户传入的矩阵对象参数。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:380](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L380) |

###### Parameters
- t <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- out <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



