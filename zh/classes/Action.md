## `Action` 类型


定义于: [https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js:35](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L35)

模块: [cc](../modules/cc.md)


Action 类是所有动作类型的基类。


### 索引

##### 属性（properties）

  - [`TAG_INVALID`](#taginvalid) `Number` 默认动作标签。



##### 方法

  - [`clone`](#clone) 返回一个克隆的动作。
  - [`isDone`](#isdone) 如果动作已完成就返回 true。
  - [`getTarget`](#gettarget) 获取当前目标节点。
  - [`setTarget`](#settarget) 设置目标节点。
  - [`getOriginalTarget`](#getoriginaltarget) 获取原始目标节点。
  - [`getTag`](#gettag) 获取用于识别动作的标签。
  - [`setTag`](#settag) 设置标签，用于识别动作。



### Details


#### 属性（properties）


##### TAG_INVALID

> 默认动作标签。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/actions/CCAction.js:168](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L168) |






<!-- Method Block -->
#### 方法


##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> 
| 定义于 | [cocos2d/actions/CCAction.js:50](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L50) |



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/actions/CCAction.js:66](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L66) |



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:98](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L98) |



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:108](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L108) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:118](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L118) |



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCAction.js:135](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L135) |



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:145](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/actions/CCAction.js#L145) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



