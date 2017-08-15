## `Action` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:34](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L34)

Module: [cc](../modules/cc.md)




Base class cc.Action for action classes.

### Index

##### Properties

  - [`TAG_INVALID`](#taginvalid) `Number` Default Action tag.



##### Methods

  - [`clone`](#clone) to copy object with deep copy.
returns a clone of action.
  - [`isDone`](#isdone) return true if the action has finished.
  - [`getTarget`](#gettarget) get the target.
  - [`setTarget`](#settarget) The action will modify the target properties.
  - [`getOriginalTarget`](#getoriginaltarget) get the original target.
  - [`getTag`](#gettag) get tag number.
  - [`setTag`](#settag) set tag number.



### Details


#### Properties


##### TAG_INVALID

> Default Action tag.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:167](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L167) |






<!-- Method Block -->
#### Methods


##### clone

to copy object with deep copy.
returns a clone of action.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:49](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L49) |
| Return 		 | <a href="../classes/Action.html" class="crosslink">Action</a> 



##### isDone

return true if the action has finished.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:65](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L65) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getTarget

get the target.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:97](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L97) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### setTarget

The action will modify the target properties.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:107](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L107) |

###### Parameters
- target <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

get the original target.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:117](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L117) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### getTag

get tag number.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:134](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L134) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setTag

set tag number.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:144](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L144) |

###### Parameters
- tag <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



