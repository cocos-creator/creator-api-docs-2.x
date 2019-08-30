## `Tween` 类型



模块: [cc](../modules/cc.md)


Tween 提供了一个简单灵活的方法来创建 action。
相对于 Cocos 传统的 cc.Action，cc.Tween 在创建动画上要灵活非常多：
 - 支持以链式结构的方式创建一个动画序列。
 - 支持对任意对象的任意属性进行缓动，不再局限于节点上的属性，而 cc.Action 添加一个属性的支持时还需要添加一个新的 action 类型。
 - 支持与 cc.Action 混用
 - 支持设置 <a href="../classes/Easing.html" class="crosslink">Easing</a> 或者 progress 函数


##### 示例

```js
cc.tween(node)
  .to(1, {scale: 2, position: cc.v3(100, 100, 100)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: 3, position: cc.v3(200, 200, 200)}, {easing: 'sineOutIn'})
  .run(cc.find('Canvas/cocos'));
```

### 索引



##### 方法

  - [`then`](#then) 插入一个 action 或者 tween 到队列中
  - [`target`](#target) 设置 tween 的 target
  - [`start`](#start) 运行当前 tween
  - [`stop`](#stop) 停止当前 tween
  - [`clone`](#clone) 克隆当前 tween
  - [`to`](#to) 添加一个对属性进行绝对值计算的 action
  - [`by`](#by) 添加一个对属性进行相对值计算的 action
  - [`set`](#set) 直接设置 target 的属性
  - [`delay`](#delay) 添加一个延时 action
  - [`call`](#call) 添加一个回调 action
  - [`hide`](#hide) 添加一个隐藏 action
  - [`show`](#show) 添加一个显示 action
  - [`removeSelf`](#removeself) 添加一个移除自己 action
  - [`sequence`](#sequence) 添加一个队列 action
  - [`parallel`](#parallel) 添加一个并行 action
  - [`repeat`](#repeat) 添加一个重复 action，这个 action 会将前一个动作作为他的参数。
  - [`repeatForever`](#repeatforever) 添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。
  - [`reverseTime`](#reversetime) 添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。
  - [`tween`](#tween) 



### Details




<!-- Method Block -->
#### 方法


##### then

插入一个 action 或者 tween 到队列中

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:177](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L177) |

###### 参数列表
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

设置 tween 的 target

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:197](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L197) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### start

运行当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:211](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L211) |



##### stop

停止当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:232](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L232) |



##### clone

克隆当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:249](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L249) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### to

添加一个对属性进行绝对值计算的 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:307](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L307) |

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
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:326](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L326) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### set

直接设置 target 的属性

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:345](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L345) |

###### 参数列表
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### delay

添加一个延时 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:358](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L358) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

添加一个回调 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:368](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L368) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### hide

添加一个隐藏 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:378](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L378) |



##### show

添加一个显示 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:387](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L387) |



##### removeSelf

添加一个移除自己 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:396](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L396) |



##### sequence

添加一个队列 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:405](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L405) |

###### 参数列表
- `actions` <a href="../classes/Action.html" class="crosslink">[Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween]</a> 


##### parallel

添加一个并行 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:415](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L415) |

###### 参数列表
- `actions` <a href="../classes/Action.html" class="crosslink">[Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween]</a> 


##### repeat

添加一个重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:429](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L429) |

###### 参数列表
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeatForever

添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:441](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L441) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### reverseTime

添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:452](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L452) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### tween



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:506](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/actions/tween.js#L506) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the target to animate



