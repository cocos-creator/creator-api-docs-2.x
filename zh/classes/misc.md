## `misc` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


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
| 定义于 | [cocos2d/core/utils/misc.js:148](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/utils/misc.js#L148) |

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
| 定义于 | [cocos2d/core/utils/misc.js:174](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/utils/misc.js#L174) |

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
| 定义于 | [cocos2d/core/utils/misc.js:189](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/utils/misc.js#L189) |

###### 参数列表
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number A
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number B
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> ratio between 0 and 1

##### 示例

```js
----
lerp
cc.misc.lerp(2,10,0.5)//returns 6
cc.misc.lerp(2,10,0.2)//returns 3.6

```

##### degreesToRadians

converts degrees to radians

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:202](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/utils/misc.js#L202) |

###### 参数列表
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### radiansToDegrees

converts radians to degrees

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/utils/misc.js:212](https://github.com/cocos-creator/engine/blob/33d0b730a5a6ed8ad09bd24f16c009cf509ff90b/cocos2d/core/utils/misc.js#L212) |

###### 参数列表
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



