## `Easing` 类型



模块: [cc](../modules/cc.md)


缓动函数类，为 <a href="../classes/Tween.html" class="crosslink">Tween</a> 提供缓动效果函数。<br>
函数效果演示： https://easings.net/



### 索引



##### 方法

  - [`quadIn`](#quadin) 平方曲线缓入函数。
  - [`quadOut`](#quadout) 平方曲线缓出函数。
  - [`quadInOut`](#quadinout) 平方曲线缓入缓出函数。
  - [`cubicIn`](#cubicin) 立方曲线缓入函数。
  - [`cubicOut`](#cubicout) 立方曲线缓出函数。
  - [`cubicInOut`](#cubicinout) 立方曲线缓入缓出函数。
  - [`quartIn`](#quartin) 四次方曲线缓入函数。
  - [`quartOut`](#quartout) 四次方曲线缓出函数。
  - [`quartInOut`](#quartinout) 四次方曲线缓入缓出函数。
  - [`quintIn`](#quintin) 五次方曲线缓入函数。
  - [`quintOut`](#quintout) 五次方曲线缓出函数。
  - [`quintInOut`](#quintinout) 五次方曲线缓入缓出函数。
  - [`sineIn`](#sinein) 正弦曲线缓入函数。
  - [`sineOut`](#sineout) 正弦曲线缓出函数。
  - [`sineInOut`](#sineinout) 正弦曲线缓入缓出函数。
  - [`expoIn`](#expoin) 指数曲线缓入函数。
  - [`expoOut`](#expoout) 指数曲线缓出函数。
  - [`expoInOut`](#expoinout) 指数曲线缓入和缓出函数。
  - [`circIn`](#circin) 循环公式缓入函数。
  - [`circOut`](#circout) 循环公式缓出函数。
  - [`circInOut`](#circinout) 指数曲线缓入缓出函数。
  - [`elasticIn`](#elasticin) 弹簧回震效果的缓入函数。
  - [`elasticOut`](#elasticout) 弹簧回震效果的缓出函数。
  - [`elasticInOut`](#elasticinout) 弹簧回震效果的缓入缓出函数。
  - [`backIn`](#backin) 回退效果的缓入函数。
  - [`backOut`](#backout) 回退效果的缓出函数。
  - [`backInOut`](#backinout) 回退效果的缓入缓出函数。
  - [`bounceIn`](#bouncein) 弹跳效果的缓入函数。
  - [`bounceOut`](#bounceout) 弹跳效果的缓出函数。
  - [`bounceInOut`](#bounceinout) 弹跳效果的缓入缓出函数。
  - [`smooth`](#smooth) 平滑效果函数。
  - [`fade`](#fade) 渐褪效果函数。



### Details




<!-- Method Block -->
#### 方法


##### quadIn

平方曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:52](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L52) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quadOut

平方曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:60](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L60) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quadInOut

平方曲线缓入缓出函数。运动由慢到快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:68](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L68) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### cubicIn

立方曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:87](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L87) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### cubicOut

立方曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:95](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L95) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### cubicInOut

立方曲线缓入缓出函数。运动由慢到快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:103](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L103) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quartIn

四次方曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:122](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L122) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quartOut

四次方曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:130](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L130) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quartInOut

四次方曲线缓入缓出函数。运动由慢到快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:138](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L138) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quintIn

五次方曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:157](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L157) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quintOut

五次方曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:165](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L165) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### quintInOut

五次方曲线缓入缓出函数。运动由慢到快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:173](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L173) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### sineIn

正弦曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:192](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L192) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### sineOut

正弦曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:200](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L200) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### sineInOut

正弦曲线缓入缓出函数。运动由慢到快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:208](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L208) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### expoIn

指数曲线缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:222](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L222) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### expoOut

指数曲线缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:230](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L230) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### expoInOut

指数曲线缓入和缓出函数。运动由慢到很快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:238](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L238) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time, then back to slow.


##### circIn

循环公式缓入函数。运动由慢到快。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:263](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L263) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### circOut

循环公式缓出函数。运动由快到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:271](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L271) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### circInOut

指数曲线缓入缓出函数。运动由慢到很快再到慢。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:279](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L279) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time, then back to slow.


##### elasticIn

弹簧回震效果的缓入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:299](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L299) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### elasticOut

弹簧回震效果的缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:323](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L323) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### elasticInOut

弹簧回震效果的缓入缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:347](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L347) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### backIn

回退效果的缓入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:381](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L381) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### backOut

回退效果的缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:392](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L392) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### backInOut

回退效果的缓入缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:403](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L403) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### bounceIn

弹跳效果的缓入函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:423](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L423) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### bounceOut

弹跳效果的缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:433](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L433) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### bounceInOut

弹跳效果的缓入缓出函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:454](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L454) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### smooth

平滑效果函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:468](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L468) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.


##### fade

渐褪效果函数。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/animation/easing.js:486](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/animation/easing.js#L486) |

###### 参数列表
- `t` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The current time as a percentage of the total time.



