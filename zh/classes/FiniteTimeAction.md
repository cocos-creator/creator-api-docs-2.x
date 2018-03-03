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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L200) |



##### setDuration

设置动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:210](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L210) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### reverse

返回一个新的动作，执行与原动作完全相反的动作。

| meta | description |
|------|-------------|
| 返回 | Null 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L220) |



##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/FiniteTimeAction.html" class="crosslink">FiniteTimeAction</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:236](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L236) |



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L65) |



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:97](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L97) |



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L107) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:117](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L117) |



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:134](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L134) |



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:144](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L144) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



