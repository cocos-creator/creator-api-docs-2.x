## `Action` Class


Defined in: [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:34](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L34)

Module: [cc](../modules/cc.md)




Action 类是所有动作类型的基类。

### Index

##### Properties

  - [`TAG_INVALID`](#taginvalid) `Number` 默认动作标签。



##### Methods

  - [`clone`](#clone) 返回一个克隆的动作。
  - [`isDone`](#isdone) 如果动作已完成就返回 true。
  - [`getTarget`](#gettarget) 获取当前目标节点。
  - [`setTarget`](#settarget) 设置目标节点。
  - [`getOriginalTarget`](#getoriginaltarget) 获取原始目标节点。
  - [`getTag`](#gettag) 获取用于识别动作的标签。
  - [`setTag`](#settag) 设置标签，用于识别动作。



### Details


#### Properties


##### TAG_INVALID

> 默认动作标签。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:167](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L167) |






<!-- Method Block -->
#### Methods


##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:49](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L49) |
| Return 		 | <a href="../classes/Action.html" class="crosslink">Action</a> 



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:65](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L65) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:97](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L97) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:107](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L107) |

###### Parameters
- target <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:117](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L117) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:134](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L134) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js:144](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/actions/CCAction.js#L144) |

###### Parameters
- tag <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



