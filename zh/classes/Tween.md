## `Tween` 类型



模块: [cc](../modules/cc.md)


Tween 提供了一个简单灵活的方法来创建 action。相对于 Cocos 传统的 `cc.Action`，`cc.Tween` 在创建动画上要灵活非常多：
 - 支持以链式结构的方式创建一个动画序列。
 - 支持对任意对象的任意属性进行缓动，不再局限于节点上的属性，而 `cc.Action` 添加一个属性的支持时还需要添加一个新的 action 类型。
 - 支持与 `cc.Action` 混用。
 - 支持设置 <a href="../classes/Easing.html" class="crosslink">Easing</a> 或者 progress 函数。


##### 示例

```js
cc.tween(node)
  .to(1, {scale: 2, position: cc.v3(100, 100, 100)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: 3, position: cc.v3(200, 200, 200)}, {easing: 'sineOutIn'})
  .start(cc.find('Canvas/cocos'));
```

### 索引



##### 方法

  - [`constructor`](#constructor) 
  - [`stopAll`](#stopall) 停止所有缓动
  - [`stopAllByTag`](#stopallbytag) 停止所有指定标签的缓动
  - [`stopAllByTarget`](#stopallbytarget) 停止所有指定对象的缓动
  - [`then`](#then) 插入一个 action 或者 tween 到队列中
  - [`target`](#target) 设置 tween 的 target
  - [`start`](#start) 运行当前 tween
  - [`stop`](#stop) 停止当前 tween
  - [`tag`](#tag) 设置缓动的标签
  - [`clone`](#clone) 克隆当前 tween
  - [`union`](#union) 将之前所有的 action 整合为一个 action。
  - [`bezierTo`](#bezierto) 按照贝塞尔路径设置目标的 position 属性。
  - [`bezierBy`](#bezierby) 按照贝塞尔路径设置目标的 position 属性。
  - [`flipX`](#flipx) 翻转目标的 scaleX 属性
  - [`flipY`](#flipy) 翻转目标的 scaleY 属性
  - [`blink`](#blink) 通过设置目标的 opacity 属性达到闪烁效果
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



### Details




<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:184](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L184) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### stopAll

停止所有缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:189](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L189) |



##### stopAllByTag

停止所有指定标签的缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:198](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L198) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### stopAllByTarget

停止所有指定对象的缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:208](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L208) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### then

插入一个 action 或者 tween 到队列中

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:219](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L219) |

###### 参数列表
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

设置 tween 的 target

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:240](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L240) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### start

运行当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:255](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L255) |



##### stop

停止当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:288](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L288) |



##### tag

设置缓动的标签

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:305](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L305) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:319](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L319) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### union

将之前所有的 action 整合为一个 action。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:334](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L334) |



##### bezierTo

按照贝塞尔路径设置目标的 position 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:364](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L364) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `c1` cc.Vec2 
- `c2` cc.Vec2 
- `to` cc.Vec2 


##### bezierBy

按照贝塞尔路径设置目标的 position 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:387](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L387) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `c1` cc.Vec2 
- `c2` cc.Vec2 
- `to` cc.Vec2 


##### flipX

翻转目标的 scaleX 属性

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:411](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L411) |



##### flipY

翻转目标的 scaleY 属性

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:422](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L422) |



##### blink

通过设置目标的 opacity 属性达到闪烁效果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:433](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L433) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `times` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### to

添加一个对属性进行绝对值计算的 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:478](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L478) |

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
| 定义于 | [cocos2d/actions/tween.js:499](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L499) |

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
| 定义于 | [cocos2d/actions/tween.js:520](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L520) |

###### 参数列表
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### delay

添加一个延时 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:535](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L535) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

添加一个回调 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:546](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L546) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `selectTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 


##### hide

添加一个隐藏 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:558](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L558) |



##### show

添加一个显示 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:568](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L568) |



##### removeSelf

添加一个移除自己 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:578](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L578) |



##### sequence

添加一个队列 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:588](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L588) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### parallel

添加一个并行 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:600](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L600) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeat

添加一个重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:616](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L616) |

###### 参数列表
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeatForever

添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:628](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L628) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### reverseTime

添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:639](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/actions/tween.js#L639) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 



