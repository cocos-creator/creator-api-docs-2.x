## `array` 类型



模块: [js](../modules/js.md)
父模块: [js](../modules/js.md)





### 索引



##### 方法

  - [`removeAt`](#removeat) Removes the array item at the specified index.
  - [`fastRemoveAt`](#fastremoveat) Removes the array item at the specified index.
It's faster but the order of the array will be changed.
  - [`remove`](#remove) Removes the first occurrence of a specific object from the array.
  - [`fastRemove`](#fastremove) Removes the first occurrence of a specific object from the array.
It's faster but the order of the array will be changed.
  - [`verifyType`](#verifytype) Verify array's Type
  - [`removeArray`](#removearray) Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.
  - [`appendObjectsAt`](#appendobjectsat) Inserts some objects at index
  - [`indexOf`](#indexof) Exact same function as Array.prototype.indexOf.<br>
HACK: ugliy hack for Baidu mobile browser compatibility, stupid Baidu guys modify Array.prototype.indexOf for all pages loaded, their version changes strict comparison to non-strict comparison, it also ignores the second parameter of the original API, and this will cause event handler enter infinite loop.<br>
Baidu developers, if you ever see this documentation, here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf, Seriously!
  - [`contains`](#contains) Determines whether the array contains a specific value.
  - [`copy`](#copy) Copy an array's item to a new array (its performance is better than Array.slice)



### Details




<!-- Method Block -->
#### 方法


##### removeAt

Removes the array item at the specified index.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:654](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L654) |

###### 参数列表
- `array` Any 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### fastRemoveAt

Removes the array item at the specified index.
It's faster but the order of the array will be changed.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:664](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L664) |

###### 参数列表
- `array` Any 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### remove

Removes the first occurrence of a specific object from the array.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:680](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L680) |

###### 参数列表
- `array` Any 
- `value` Any 


##### fastRemove

Removes the first occurrence of a specific object from the array.
It's faster but the order of the array will be changed.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:698](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L698) |

###### 参数列表
- `array` Any 
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### verifyType

Verify array's Type

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:713](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L713) |

###### 参数列表
- `array` <a href="../classes/array.html" class="crosslink">array</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### removeArray

Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:732](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L732) |

###### 参数列表
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> Source Array
- `minusArr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> minus Array


##### appendObjectsAt

Inserts some objects at index

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:744](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L744) |

###### 参数列表
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `addObjs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### indexOf

Exact same function as Array.prototype.indexOf.<br>
HACK: ugliy hack for Baidu mobile browser compatibility, stupid Baidu guys modify Array.prototype.indexOf for all pages loaded, their version changes strict comparison to non-strict comparison, it also ignores the second parameter of the original API, and this will cause event handler enter infinite loop.<br>
Baidu developers, if you ever see this documentation, here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf, Seriously!

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:757](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L757) |

###### 参数列表
- `searchElement` Any Element to locate in the array.
- `fromIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to start the search at


##### contains

Determines whether the array contains a specific value.

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:769](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L769) |

###### 参数列表
- `array` Any 
- `value` Any 


##### copy

Copy an array's item to a new array (its performance is better than Array.slice)

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:780](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L780) |

###### 参数列表
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 



