## `misc` Class



Module: [cc](../modules/cc.md)


misc utilities


### Index



##### Methods

  - [`clampf`](#clampf) Clamp a value between from and to.
  - [`clamp01`](#clamp01) Clamp a value between 0 and 1.
  - [`lerp`](#lerp) Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
  - [`degreesToRadians`](#degreestoradians) converts degrees to radians
  - [`radiansToDegrees`](#radianstodegrees) converts radians to degrees



### Details




<!-- Method Block -->
#### Methods


##### clampf

Clamp a value between from and to.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:157](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L157) |

###### Parameters
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `min_inclusive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `max_inclusive` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var v1 = cc.misc.clampf(20, 0, 20); // 20;
var v2 = cc.misc.clampf(-1, 0, 20); //  0;
var v3 = cc.misc.clampf(10, 0, 20); // 10;
```

##### clamp01

Clamp a value between 0 and 1.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:183](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L183) |

###### Parameters
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var v1 = cc.misc.clamp01(20);  // 1;
var v2 = cc.misc.clamp01(-1);  // 0;
var v3 = cc.misc.clamp01(0.5); // 0.5;
```

##### lerp

Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:198](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L198) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number A
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number B
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> ratio between 0 and 1

##### Examples

```Not found for the example path: temp-src/engine/docs/utils/api/engine/docs/cocos2d/core/platform/CCMacro/lerp.js

##### degreesToRadians

converts degrees to radians

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:211](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L211) |

###### Parameters
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### radiansToDegrees

converts radians to degrees

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:221](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/misc.js#L221) |

###### Parameters
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



