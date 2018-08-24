## `AffineTransform` Class



Module: [cc](../modules/cc.md)


AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>


### Index



##### Methods

  - [`create`](#create) Create a AffineTransform object with all contents in the matrix.
  - [`identity`](#identity) Create a identity transformation matrix: ...
  - [`clone`](#clone) Clone a AffineTransform object from the specified transform.
  - [`concat`](#concat) Concatenate a transform matrix to another
  - [`invert`](#invert) Get the invert transform of an AffineTransform object.
  - [`invert`](#invert) Get an AffineTransform object from a given matrix 4x4.
  - [`transformVec2`](#transformvec2) Apply the affine transformation on a point.
  - [`transformSize`](#transformsize) Apply the affine transformation on a size.
  - [`transformRect`](#transformrect) Apply the affine transformation on a rect.
  - [`transformObb`](#transformobb) Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.



### Details




<!-- Method Block -->
#### Methods


##### create

Create a AffineTransform object with all contents in the matrix.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:55](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L55) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `c` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### identity

Create a identity transformation matrix: <br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:72](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L72) |



##### clone

Clone a AffineTransform object from the specified transform.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:90](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L90) |

###### Parameters
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### concat

Concatenate a transform matrix to another
The results are reflected in the out affine transform
out = t1 * t2
This function is memory free, you should create the output affine transform by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L102) |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> Out object to store the concat result
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### invert

Get the invert transform of an AffineTransform object.
This function is memory free, you should create the output affine transform by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:129](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L129) |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### invert

Get an AffineTransform object from a given matrix 4x4.
This function is memory free, you should create the output affine transform by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:152](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L152) |

###### Parameters
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformVec2

Apply the affine transformation on a point.
This function is memory free, you should create the output Vec2 by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:172](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L172) |

###### Parameters
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The output point to store the result
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Point to apply transform or x.
- `transOrY` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix.


##### transformSize

Apply the affine transformation on a size.
This function is memory free, you should create the output Size by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L199) |

###### Parameters
- `out` <a href="../classes/Size.html" class="crosslink">Size</a> The output point to store the result
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformRect

Apply the affine transformation on a rect.
This function is memory free, you should create the output Rect by yourself and manage its memory.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/utils/affine-transform.js:216](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L216) |

###### Parameters
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformObb

Apply the affine transformation on a rect, and truns to an Oriented Bounding Box.
This function is memory free, you should create the output vectors by yourself and manage their memory.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/utils/affine-transform.js:253](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L253) |

###### Parameters
- `out_bl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tr` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_br` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



