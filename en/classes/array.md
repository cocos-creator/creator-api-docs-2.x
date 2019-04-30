## `array` Class



Module: [js](../modules/js.md)
Parent Module: [js](../modules/js.md)






### Index



##### Methods

  - [`removeAt`](#removeat) Removes the array item at the specified index.
  - [`fastRemoveAt`](#fastremoveat) Removes the array item at the specified index.
  - [`remove`](#remove) Removes the first occurrence of a specific object from the array.
  - [`fastRemove`](#fastremove) Removes the first occurrence of a specific object from the array.
  - [`verifyType`](#verifytype) Verify array's Type
  - [`removeArray`](#removearray) Removes from array all values in minusArr.
  - [`appendObjectsAt`](#appendobjectsat) Inserts some objects at index
  - [`indexOf`](#indexof) Exact same function as Array.prototype.indexOf.<br>...
  - [`contains`](#contains) Determines whether the array contains a specific value.
  - [`copy`](#copy) Copy an array's item to a new array (its performance is better than Array.slice)



### Details




<!-- Method Block -->
#### Methods


##### removeAt

Removes the array item at the specified index.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:700](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L700) |

###### Parameters
- `array` Any 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### fastRemoveAt

Removes the array item at the specified index.
It's faster but the order of the array will be changed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:710](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L710) |

###### Parameters
- `array` Any 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### remove

Removes the first occurrence of a specific object from the array.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:726](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L726) |

###### Parameters
- `array` Any 
- `value` Any 


##### fastRemove

Removes the first occurrence of a specific object from the array.
It's faster but the order of the array will be changed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:744](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L744) |

###### Parameters
- `array` Any 
- `value` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### verifyType

Verify array's Type

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:759](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L759) |

###### Parameters
- `array` <a href="../classes/array.html" class="crosslink">array</a> 
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### removeArray

Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:778](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L778) |

###### Parameters
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> Source Array
- `minusArr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> minus Array


##### appendObjectsAt

Inserts some objects at index

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/core/platform/js.js:790](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L790) |

###### Parameters
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `addObjs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### indexOf

Exact same function as Array.prototype.indexOf.<br>
HACK: ugliy hack for Baidu mobile browser compatibility, stupid Baidu guys modify Array.prototype.indexOf for all pages loaded, their version changes strict comparison to non-strict comparison, it also ignores the second parameter of the original API, and this will cause event handler enter infinite loop.<br>
Baidu developers, if you ever see this documentation, here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf, Seriously!

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/js.js:803](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L803) |

###### Parameters
- `searchElement` Any Element to locate in the array.
- `fromIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The index to start the search at


##### contains

Determines whether the array contains a specific value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/js.js:815](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L815) |

###### Parameters
- `array` Any 
- `value` Any 


##### copy

Copy an array's item to a new array (its performance is better than Array.slice)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/core/platform/js.js:826](https://github.com/cocos-creator/engine/blob/75ac6640e7f40c3c34c913047be42ae5f8a96d74/cocos2d/core/platform/js.js#L826) |

###### Parameters
- `array` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 



