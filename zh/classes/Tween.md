## `Tween` 类型



模块: [cc](../modules/cc.md)


Tween 提供了一个简单灵活的方法来创建 action。
相对于 Cocos 传统的 cc.Action，cc.Tween 在创建动画上要灵活非常多：
 - 支持以链式结构的方式创建一个动画序列。
 - 支持对任意对象的任意属性进行缓动，不再局限于节点上的属性，而 cc.Action 添加一个属性的支持时还需要添加一个新的 action 类型。
 - 支持与 cc.Action 混用
 - 支持设置 easing 或者 progress 函数


### 索引



##### 方法

  - [`then`](#then) 插入一个 action 或者 tween 到队列中
  - [`target`](#target) 设置 tween 的 target
  - [`start`](#start) 运行当前 tween
  - [`stop`](#stop) 停止当前 tween
  - [`clone`](#clone) 克隆当前 tween
  - [`to`](#to) 添加一个对属性进行绝对值计算的 action
  - [`by`](#by) 添加一个对属性进行相对值计算的 action
  - [`delay`](#delay) 添加一个延时 action
  - [`call`](#call) 添加一个回调 action
  - [`hide`](#hide) 添加一个隐藏 action
  - [`show`](#show) 添加一个显示 action
  - [`removeSelf`](#removeself) 添加一个移除自己 action
  - [`sequence`](#sequence) 添加一个队列 action
  - [`repeat`](#repeat) 添加一个重复 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。
  - [`repeatForever`](#repeatforever) 添加一个永久重复 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。
  - [`reverseTime`](#reversetime) 添加一个倒置时间 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。
  - [`tween`](#tween) 



### Details




<!-- Method Block -->
#### 方法


##### then

插入一个 action 或者 tween 到队列中

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:136](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L136) |

###### 参数列表
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

设置 tween 的 target

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:157](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L157) |



##### start

运行当前 tween

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:169](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L169) |



##### stop

停止当前 tween

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:188](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L188) |



##### clone

克隆当前 tween

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:204](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L204) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### to

添加一个对属性进行绝对值计算的 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:238](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L238) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### by

添加一个对属性进行相对值计算的 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:256](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L256) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### delay

添加一个延时 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:274](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L274) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

添加一个回调 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:283](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L283) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### hide

添加一个隐藏 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:292](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L292) |



##### show

添加一个显示 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:300](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L300) |



##### removeSelf

添加一个移除自己 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:308](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L308) |



##### sequence

添加一个队列 action

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:316](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L316) |

###### 参数列表
- `actions` <a href="../classes/Action.html" class="crosslink">[Action]</a> 


##### repeat

添加一个重复 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:329](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L329) |

###### 参数列表
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### repeatForever

添加一个永久重复 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:339](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L339) |



##### reverseTime

添加一个倒置时间 action，这个 action 会将之前的 action 整合成一个 sequence action 作为他的参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:348](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L348) |



##### tween



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:391](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L391) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the target to animate



