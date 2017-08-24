## `ActionInterval` Class

Extends [`FiniteTimeAction`](FiniteTimeAction.md)


Module: [cc](../modules/cc.md)




时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。

### Index



##### Methods

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
#### Methods


##### easing

缓动运动。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js#L124) |
| Return 		 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 

###### Parameters
- easeObj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Example

```js
action.easing(cc.easeIn(3.0));
```

##### repeat

重复动作可以按一定次数重复一个动作，使用 RepeatForever 动作来永远重复一个动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js:252](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js#L252) |
| Return 		 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 

###### Parameters
- times Unknown 


##### repeatForever

永远地重复一个动作，有限次数内重复一个动作请使用 Repeat 动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js:272](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionInterval.js#L272) |
| Return 		 | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 



##### getDuration

获取动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:200](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L200) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setDuration

设置动作以秒为单位的持续时间。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:210](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L210) |

###### Parameters
- duration <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### reverse

返回一个新的动作，执行与原动作完全相反的动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L220) |
| Return 		 | Null 



##### clone

返回一个克隆的动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:236](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L236) |
| Return 		 | <a href="../classes/FiniteTimeAction.html" class="crosslink">FiniteTimeAction</a> 



##### isDone

如果动作已完成就返回 true。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L65) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getTarget

获取当前目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:97](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L97) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### setTarget

设置目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:107](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L107) |

###### Parameters
- target <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

获取原始目标节点。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:117](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L117) |
| Return 		 | <a href="../classes/Node.html" class="crosslink">Node</a> 



##### getTag

获取用于识别动作的标签。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:134](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L134) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### setTag

设置标签，用于识别动作。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js:144](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCAction.js#L144) |

###### Parameters
- tag <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



