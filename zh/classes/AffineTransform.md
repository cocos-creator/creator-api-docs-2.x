## `AffineTransform` 类型



模块: [cc](../modules/cc.md)


AffineTransform 类代表一个仿射变换矩阵。它基本上是由平移旋转，缩放转变所组成。<br/>


### 索引



##### 方法

  - [`create`](#create) 用在矩阵中的所有内容创建一个 AffineTransform 对象。
  - [`identity`](#identity) 单位矩阵：...
  - [`clone`](#clone) 克隆指定的 AffineTransform 对象。
  - [`concat`](#concat) 拼接两个矩阵，将结果保存到 out 矩阵。
  - [`invert`](#invert) 求逆矩阵。
  - [`invert`](#invert) 从一个 4x4 Matrix 获取 AffineTransform 对象。
  - [`transformVec2`](#transformvec2) 对一个点应用矩阵变换。
  - [`transformSize`](#transformsize) 应用仿射变换矩阵到 Size 上。
  - [`transformRect`](#transformrect) 应用仿射变换矩阵到 Rect 上。
  - [`transformObb`](#transformobb) 应用仿射变换矩阵到 Rect 上, 并转换为有向包围盒。



### Details




<!-- Method Block -->
#### 方法


##### create

用在矩阵中的所有内容创建一个 AffineTransform 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:55](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L55) |

###### 参数列表
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `c` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `d` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### identity

单位矩阵：<br/>
[ 1, 0, 0, <br/>
  0, 1, 0 ]

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:72](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L72) |



##### clone

克隆指定的 AffineTransform 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:90](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L90) |

###### 参数列表
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### concat

拼接两个矩阵，将结果保存到 out 矩阵。这个函数不创建任何内存，你需要先创建 AffineTransform 对象用来存储结果，并作为第一个参数传入函数。
out = t1 * t2

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L102) |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> Out object to store the concat result
- `t1` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The first transform object.
- `t2` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> The transform object to concatenate.


##### invert

求逆矩阵。这个函数不创建任何内存，你需要先创建 AffineTransform 对象用来存储结果，并作为第一个参数传入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:129](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L129) |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### invert

从一个 4x4 Matrix 获取 AffineTransform 对象。这个函数不创建任何内存，你需要先创建 AffineTransform 对象用来存储结果，并作为第一个参数传入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:152](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L152) |

###### 参数列表
- `out` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformVec2

对一个点应用矩阵变换。这个函数不创建任何内存，你需要先创建一个 Vec2 对象用来存储结果，并作为第一个参数传入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:172](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L172) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> The output point to store the result
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Point to apply transform or x.
- `transOrY` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> transform matrix or y.
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> transform matrix.


##### transformSize

应用仿射变换矩阵到 Size 上。这个函数不创建任何内存，你需要先创建一个 Size 对象用来存储结果，并作为第一个参数传入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:199](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L199) |

###### 参数列表
- `out` <a href="../classes/Size.html" class="crosslink">Size</a> The output point to store the result
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> 
- `t` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformRect

应用仿射变换矩阵到 Rect 上。这个函数不创建任何内存，你需要先创建一个 Rect 对象用来存储结果，并作为第一个参数传入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/utils/affine-transform.js:216](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L216) |

###### 参数列表
- `out` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 


##### transformObb

应用仿射变换矩阵到 Rect 上, 并转换为有向包围盒。这个函数不创建任何内存，你需要先创建包围盒的四个 Vector 对象用来存储结果，并作为前四个参数传入函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/utils/affine-transform.js:253](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/affine-transform.js#L253) |

###### 参数列表
- `out_bl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tl` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_tr` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `out_br` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
- `rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `anAffineTransform` <a href="../classes/AffineTransform.html" class="crosslink">AffineTransform</a> 



