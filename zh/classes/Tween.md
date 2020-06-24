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
| 定义于 | [cocos2d/actions/tween.js:182](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L182) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### stopAll

停止所有缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:187](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L187) |



##### stopAllByTag

停止所有指定标签的缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:196](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L196) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### stopAllByTarget

停止所有指定对象的缓动

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/tween.js:206](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L206) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### then

插入一个 action 或者 tween 到队列中

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:217](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L217) |

###### 参数列表
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

设置 tween 的 target

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:238](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L238) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### start

运行当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:253](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L253) |



##### stop

停止当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:286](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L286) |



##### tag

设置缓动的标签

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:303](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L303) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

克隆当前 tween

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:317](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L317) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### union

将之前所有的 action 整合为一个 action。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:332](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L332) |



##### bezierTo

按照贝塞尔路径设置目标的 position 属性。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:362](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L362) |

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
| 定义于 | [cocos2d/actions/tween.js:385](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L385) |

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
| 定义于 | [cocos2d/actions/tween.js:409](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L409) |



##### flipY

翻转目标的 scaleY 属性

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:420](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L420) |



##### blink

通过设置目标的 opacity 属性达到闪烁效果

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:431](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L431) |

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
| 定义于 | [cocos2d/actions/tween.js:476](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L476) |

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
| 定义于 | [cocos2d/actions/tween.js:497](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L497) |

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
| 定义于 | [cocos2d/actions/tween.js:518](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L518) |

###### 参数列表
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### delay

添加一个延时 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:533](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L533) |

###### 参数列表
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

添加一个回调 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:544](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L544) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### hide

添加一个隐藏 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:555](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L555) |



##### show

添加一个显示 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:565](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L565) |



##### removeSelf

添加一个移除自己 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:575](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L575) |



##### sequence

添加一个队列 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:585](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L585) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### parallel

添加一个并行 action

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:597](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L597) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeat

添加一个重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:613](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L613) |

###### 参数列表
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeatForever

添加一个永久重复 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:626](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L626) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### reverseTime

添加一个倒置时间 action，这个 action 会将前一个动作作为他的参数。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| 定义于 | [cocos2d/actions/tween.js:641](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/actions/tween.js#L641) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 



