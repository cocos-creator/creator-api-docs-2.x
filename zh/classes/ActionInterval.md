## `ActionInterval` 类型

继承于 [`FiniteTimeAction`](FiniteTimeAction.md)


模块: [cc](../modules/cc.md)


时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。


### 索引



##### 方法

  - [`easing`](#easing) 缓动运动。
  - [`repeat`](#repeat) 重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。
  - [`repeatForever`](#repeatforever) 永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。
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


##### easing

缓动运动。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| 定义于 | [cocos2d/actions/CCActionInterval.js:125](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCActionInterval.js#L125) |

###### 参数列表
- `easeObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### 示例

```js
action.easing(cc.easeIn(3.0));
```

##### repeat

重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| 定义于 | [cocos2d/actions/CCActionInterval.js:253](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCActionInterval.js#L253) |

###### 参数列表
- `times` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### repeatForever

永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| 定义于 | [cocos2d/actions/CCActionInterval.js:273](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCActionInterval.js#L273) |



##### getDuration

获取动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCAction.js:201](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L201) |



##### setDuration

设置动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:211](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L211) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### reverse

返回一个新的动作，执行与原动作完全相反的动作。

| meta | description |
|------|-------------|
| 返回 | Null 
| 定义于 | [cocos2d/actions/CCAction.js:221](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L221) |



##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/FiniteTimeAction.html" class="crosslink">FiniteTimeAction</a> 
| 定义于 | [cocos2d/actions/CCAction.js:237](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L237) |



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/actions/CCAction.js:66](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L66) |



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:98](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L98) |



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:108](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L108) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/actions/CCAction.js:118](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L118) |



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCAction.js:135](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L135) |



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCAction.js:145](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/actions/CCAction.js#L145) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



