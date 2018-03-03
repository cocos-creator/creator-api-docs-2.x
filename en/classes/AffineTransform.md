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
  - [`affineTransformMakeIdentity`](#affinetransformmakeidentity) Create a identity transformation matrix: <br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]
  - [`rectApplyAffineTransform`](#rectapplyaffinetransform) Apply the affine transformation on a rect.
  - [`obbApplyAffineTransform`](#obbapplyaffinetransform) Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.
  - [`affineTransformTranslate`](#affinetransformtranslate) Create a new affine transformation with a base transformation matrix and a translation based on it.
  - [`affineTransformScale`](#affinetransformscale) Create a new affine transformation with a base transformation matrix and a scale based on it.
  - [`affineTransformRotate`](#affinetransformrotate) Create a new affine transformation with a base transformation matrix and a rotation based on it.
  - [`affineTransformConcat`](#affinetransformconcat) Concatenate a transform matrix to another and return the result:<br/>
t' = t1 * t2
  - [`affineTransformConcatIn`](#affinetransformconcatin) Concatenate a transform matrix to another<br/>
The results are reflected in the first matrix.<br/>
t' = t1 * t2
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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:55](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L55) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:71](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L71) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### pointApplyAffineTransform

Apply the affine transformation on a point.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:82](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L82) |

###### Parameters
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x.
- `transOrY` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix or y.


##### sizeApplyAffineTransform

Apply the affine transformation on a size.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L124) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:136](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L136) |



##### rectApplyAffineTransform

Apply the affine transformation on a rect.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:168](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L168) |

###### Parameters
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### obbApplyAffineTransform

Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:223](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L223) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L257) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on x axis.
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The translation on y axis.


##### affineTransformScale

Create a new affine transformation with a base transformation matrix and a scale based on it.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L277) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `sx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on x axis.
- `sy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The scale on y axis.


##### affineTransformRotate

Create a new affine transformation with a base transformation matrix and a rotation based on it.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:290](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L290) |

###### Parameters
- `aTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The base affine transform object.
- `anAngle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The angle to rotate.


##### affineTransformConcat

Concatenate a transform matrix to another and return the result:<br/>
t' = t1 * t2

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:310](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L310) |

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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:331](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L331) |

###### Parameters
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### affineTransformEqualToTransform

Return true if an affine transform equals to another, false otherwise.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:355](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L355) |

###### Parameters
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

Get the invert transform of an AffineTransform object.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:367](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L367) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### affineTransformInvert

Put the invert transform of an AffineTransform object into the out AffineTransform object.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js:393](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCAffineTransform.js#L393) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



