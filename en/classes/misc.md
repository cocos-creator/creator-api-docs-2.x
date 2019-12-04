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
| Defined in | [cocos2d/core/utils/misc.js:148](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/utils/misc.js#L148) |

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
| Defined in | [cocos2d/core/utils/misc.js:174](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/utils/misc.js#L174) |

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
| Defined in | [cocos2d/core/utils/misc.js:189](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/utils/misc.js#L189) |

###### Parameters
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number A
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> number B
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> ratio between 0 and 1

##### Examples

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
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:202](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/utils/misc.js#L202) |

###### Parameters
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### radiansToDegrees

converts radians to degrees

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/utils/misc.js:212](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/utils/misc.js#L212) |

###### Parameters
- `angle` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



