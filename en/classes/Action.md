## `Action` Class


Defined in: [https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js:35](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L35)

Module: [cc](../modules/cc.md)


Base class cc.Action for action classes.


### Index

##### Properties

  - [`TAG_INVALID`](#taginvalid) `Number` Default Action tag.



##### Methods

  - [`clone`](#clone) to copy object with deep copy.
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
| Defined in | [cocos2d/actions/CCAction.js:168](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L168) |






<!-- Method Block -->
#### Methods


##### clone

to copy object with deep copy.
returns a clone of action.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Action.html" class="crosslink">Action</a> 
| Defined in | [cocos2d/actions/CCAction.js:50](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L50) |



##### isDone

return true if the action has finished.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/actions/CCAction.js:66](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L66) |



##### getTarget

get the target.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/actions/CCAction.js:98](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L98) |



##### setTarget

The action will modify the target properties.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/CCAction.js:108](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L108) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

get the original target.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/actions/CCAction.js:118](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L118) |



##### getTag

get tag number.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/actions/CCAction.js:135](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L135) |



##### setTag

set tag number.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/CCAction.js:145](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L145) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



