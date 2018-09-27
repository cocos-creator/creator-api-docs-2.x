## `AffineTransform` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
Please do not use its constructor directly, use cc.affineTransformMake alias function instead.


### Index



##### Methods

  - [`affineTransformMake`](#affinetransformmake) Create a cc.AffineTransform object with all contents in the matrix.
  - [`affineTransformClone`](#affinetransformclone) Clone a cc.AffineTransform object from the specified transform.
  - [`pointApplyAffineTransform`](#pointapplyaffinetransform) Apply the affine transformation on a point.
  - [`sizeApplyAffineTransform`](#sizeapplyaffinetransform) Apply the affine transformation on a size.
  - [`affineTransformMakeIdentity`](#affinetransformmakeidentity) Create a identity transformation matrix: ...
  - [`rectApplyAffineTransform`](#rectapplyaffinetransform) Apply the affine transformation on a rect.
  - [`obbApplyAffineTransform`](#obbapplyaffinetransform) Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.
  - [`affineTransformTranslate`](#affinetransformtranslate) Create a new affine transformation with a base transformation matrix and a translation based on it.
  - [`affineTransformScale`](#affinetransformscale) Create a new affine transformation with a base transformation matrix and a scale based on it.
  - [`affineTransformRotate`](#affinetransformrotate) Create a new affine transformation with a base transformation matrix and a rotation based on it.
  - [`affineTransformConcat`](#affinetransformconcat) Concatenate a transform matrix to another and return the result:...
  - [`affineTransformConcatIn`](#affinetransformconcatin) Concatenate a transform matrix to another...
  - [`affineTransformEqualToTransform`](#affinetransformequaltotransform) Return true if an affine transform equals to another, false otherwise.
  - [`affineTransformInvert`](#affinetransforminvert) Get the invert transform of an AffineTransform object.
  - [`affineTransformInvert`](#affinetransforminvert) Put the invert transform of an AffineTransform object into the out AffineTransform object.



### Details




<!-- Method Block -->
#### Methods


##### affineTransformMake

Create a cc.AffineTransform object with all contents in the matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:56](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L56) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `c` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### affineTransformClone

Clone a cc.AffineTransform object from the specified transform.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:72](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L72) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### pointApplyAffineTransform

Apply the affine transformation on a point.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:83](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L83) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x.
- `transOrY` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix or y.


##### sizeApplyAffineTransform

Apply the affine transformation on a size.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:125](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L125) |

###### Parameters
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformMakeIdentity

Create a identity transformation matrix: <br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:137](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L137) |



##### rectApplyAffineTransform

Apply the affine transformation on a rect.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:169](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L169) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### obbApplyAffineTransform

Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:224](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L224) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `out_bl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tr` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_br` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 


##### affineTransformTranslate

Create a new affine transformation with a base transformation matrix and a translation based on it.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:258](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L258) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on x axis.
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on y axis.


##### affineTransformScale

Create a new affine transformation with a base transformation matrix and a scale based on it.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:278](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L278) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `sx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on x axis.
- `sy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on y axis.


##### affineTransformRotate

Create a new affine transformation with a base transformation matrix and a rotation based on it.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:291](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L291) |

###### Parameters
- `aTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `anAngle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The angle to rotate.


##### affineTransformConcat

Concatenate a transform matrix to another and return the result:<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:311](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L311) |

###### Parameters
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformConcatIn

Concatenate a transform matrix to another<br/>
The results are reflected in the first matrix.<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:332](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L332) |

###### Parameters
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformEqualToTransform

Return true if an affine transform equals to another, false otherwise.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:356](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L356) |

###### Parameters
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

Get the invert transform of an AffineTransform object.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:368](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L368) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

Put the invert transform of an AffineTransform object into the out AffineTransform object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/CCAffineTransform.js:394](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/value-types/CCAffineTransform.js#L394) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



