## `FiniteTimeAction` 类型

继承于 [`Action`](Action.md)


模块: [cc](../modules/cc.md)


有限时间动作，这种动作拥有时长 duration 属性。


### 索引



##### 方法

  - [`getDuration`](#getduration) 获取动作以秒为单位的持续时间。
  - [`setDuration`](#setduration) 设置动作以秒为单位的持续时间。
  - [`reverse`](#reverse) 返回一个新的动作，执行与原动作完全相反的动作。
  - [`clone`](#clone) 返回一个克隆的动作。
  - [`isDone`](#isdone) 如果动作已完成就返回 true。
  - [`getTarget`](#gettarget) 获取当前目标节点。
  - [`setTarget`](#settarget) 设置目标节点。
  - [`getOriginalTarget`](#getoriginaltarget) 获取原始目标节点。
  - [`getTag`](#gettag) 获取用于识别动作的标签。
  - [`setTag`](#settag) 设置标签，用于识别动作。



### Details




<!-- Method Block -->
#### 方法


##### getDuration

获取动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCAction.js:205](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L205) |



##### setDuration

设置动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:215](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L215) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### reverse

返回一个新的动作，执行与原动作完全相反的动作。

| meta | description |
|------|-------------|
| 返回 | Null 
| 定义于 | [cocos2d/actions/CCAction.js:225](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L225) |



##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/FiniteTimeAction.html" class="crosslink">FiniteTimeAction</a> 
| 定义于 | [cocos2d/actions/CCAction.js:241](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L241) |



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/actions/CCAction.js:70](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L70) |



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L102) |



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:112](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L112) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:122](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L122) |



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCAction.js:139](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L139) |



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:149](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCAction.js#L149) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



