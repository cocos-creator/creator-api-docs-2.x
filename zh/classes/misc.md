## `misc` 类型



模块: [cc](../modules/cc.md)


misc utilities


### 索引



##### 方法

  - [`clampf`](#clampf) 限定浮点数的最大最小值。
  - [`clamp01`](#clamp01) 限定浮点数的取值范围为 0 ~ 1 之间。
  - [`lerp`](#lerp) Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
  - [`degreesToRadians`](#degreestoradians) converts degrees to radians
  - [`radiansToDegrees`](#radianstodegrees) converts radians to degrees



### Details




<!-- Method Block -->
#### 方法


##### clampf

限定浮点数的最大最小值。<br/>
数值大于 max_inclusive 则返回 max_inclusive。<br/>
数值小于 min_inclusive 则返回 min_inclusive。<br/>
否则返回自身。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:157](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L157) |

###### 参数列表
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `min_inclusive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `max_inclusive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
var v1 = cc.misc.clampf(20, 0, 20); // 20;
var v2 = cc.misc.clampf(-1, 0, 20); //  0;
var v3 = cc.misc.clampf(10, 0, 20); // 10;
```

##### clamp01

限定浮点数的取值范围为 0 ~ 1 之间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:183](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L183) |

###### 参数列表
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
var v1 = cc.misc.clamp01(20);  // 1;
var v2 = cc.misc.clamp01(-1);  // 0;
var v3 = cc.misc.clamp01(0.5); // 0.5;
```

##### lerp

Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:198](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L198) |

###### 参数列表
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number A
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number B
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> ratio between 0 and 1

##### 示例

```Not found for the example path: temp-src/engine/docs/utils/api/engine/docs/cocos2d/core/platform/CCMacro/lerp.js

##### degreesToRadians

converts degrees to radians

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:211](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L211) |

###### 参数列表
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### radiansToDegrees

converts radians to degrees

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:221](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L221) |

###### 参数列表
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



