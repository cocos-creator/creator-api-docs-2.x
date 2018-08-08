## `Scheduler` 类型



模块: [cc](../modules/cc.md)


Scheduler 是负责触发回调函数的类。<br/>
通常情况下，建议使用 cc.director.getScheduler() 来获取系统定时器。<br/>
有两种不同类型的定时器：<br/>
    - update 定时器：每一帧都会触发。您可以自定义优先级。<br/>
    - 自定义定时器：自定义定时器可以每一帧或者自定义的时间间隔触发。<br/>
如果希望每帧都触发，应该使用 update 定时器，使用 update 定时器更快，而且消耗更少的内存。


### 索引

##### 属性（properties）

  - [`PRIORITY_SYSTEM`](#prioritysystem) `Number` 系统服务的优先级。
  - [`PRIORITY_NON_SYSTEM`](#prioritynonsystem) `Number` 用户调度最低优先级。



##### 方法

  - [`setTimeScale`](#settimescale) 设置时间间隔的缩放比例。
  - [`getTimeScale`](#gettimescale) 获取时间间隔的缩放比例。
  - [`update`](#update) update 调度函数。
  - [`scheduleCallbackForTarget`](#schedulecallbackfortarget) 指定回调函数，调用对象等信息来添加一个新的定时器。
  - [`schedule`](#schedule) 定时器
  - [`scheduleUpdate`](#scheduleupdate) 使用指定的优先级为指定的对象设置 update 定时器。
  - [`unschedule`](#unschedule) 根据指定的回调函数和调用对象。
  - [`unscheduleUpdate`](#unscheduleupdate) 取消指定对象的 update 定时器。
  - [`unscheduleAllForTarget`](#unscheduleallfortarget) 取消指定对象的所有定时器，包括 update 定时器。
  - [`unscheduleAll`](#unscheduleall) 取消所有对象的所有定时器，包括系统定时器。
  - [`unscheduleAllWithMinPriority`](#unscheduleallwithminpriority) 取消所有优先级的值大于指定优先级的定时器。
  - [`isScheduled`](#isscheduled) 检查指定的回调函数和回调对象组合是否存在定时器。
  - [`pauseAllTargets`](#pausealltargets) 暂停所有对象的所有定时器。
  - [`pauseAllTargetsWithMinPriority`](#pausealltargetswithminpriority) 暂停所有优先级的值大于指定优先级的定时器。
  - [`resumeTargets`](#resumetargets) 恢复指定数组中所有对象的定时器。
  - [`pauseTarget`](#pausetarget) 暂停指定对象的定时器。
  - [`resumeTarget`](#resumetarget) 恢复指定对象的所有定时器。
  - [`isTargetPaused`](#istargetpaused) 返回指定对象的定时器是否暂停了。
  - [`scheduleUpdateForTarget`](#scheduleupdatefortarget) 为指定对象设置 update 定时器。
  - [`unscheduleCallbackForTarget`](#unschedulecallbackfortarget) 根据指定的回调函数和调用对象对象取消相应的定时器。
  - [`unscheduleUpdateForTarget`](#unscheduleupdatefortarget) 取消指定对象的所有定时器。
  - [`unscheduleAllCallbacksForTarget`](#unscheduleallcallbacksfortarget) 取消指定对象的所有定时器，包括 update 定时器。
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消所有对象的所有定时器。
  - [`unscheduleAllCallbacksWithMinPriority`](#unscheduleallcallbackswithminpriority) 取消所有优先级的值大于指定优先级的所有对象的所有定时器。



### Details


#### 属性（properties）


##### PRIORITY_SYSTEM

> 系统服务的优先级。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCScheduler.js:1141](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1141) |



##### PRIORITY_NON_SYSTEM

> 用户调度最低优先级。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/CCScheduler.js:1150](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1150) |






<!-- Method Block -->
#### 方法


##### setTimeScale

设置时间间隔的缩放比例。<br/>
您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br/>
默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br/>
要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br/>
注意：它影响该 Scheduler 下管理的所有定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:363](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L363) |

###### 参数列表
- `timeScale` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTimeScale

获取时间间隔的缩放比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/CCScheduler.js:383](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L383) |



##### update

update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:393](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L393) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delta time


##### scheduleCallbackForTarget

指定回调函数，调用对象等信息来添加一个新的定时器。</br>
当时间间隔达到指定值时，设置的回调函数将会被调用。</br>
如果 paused 值为 true，那么直到 resume 被调用才开始计时。</br>
如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
建议使用 scheduleUpdateForTarget 代替。</br>
如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
repeat 值可以让定时器触发 repeat + 1 次，使用 cc.macro.REPEAT_FOREVER
可以让定时器一直循环触发。<br/>
delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:483](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L483) |
| 废弃（Deprecated） | since v3.4 please use .schedule |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### 示例

```js
//register a schedule to scheduler
var scheduler = cc.director.getScheduler();
scheduler.scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning);

```

##### schedule

定时器

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:521](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L521) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### 示例

```js
//register a schedule to scheduler
cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);

```

##### scheduleUpdate

使用指定的优先级为指定的对象设置 update 定时器。
update 定时器每一帧都会被触发。优先级的值越低，定时器被触发的越早。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:589](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L589) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `updateFunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### unschedule

根据指定的回调函数和调用对象。
如果需要取消 update 定时器，请使用 unscheduleUpdate()。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:647](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L647) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be unscheduled
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target bound to the callback.


##### unscheduleUpdate

取消指定对象的 update 定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:696](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L696) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAllForTarget

取消指定对象的所有定时器，包括 update 定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:718](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L718) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAll

取消所有对象的所有定时器，包括系统定时器。<br/>
不用调用此函数，除非你确定你在做什么。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:758](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L758) |



##### unscheduleAllWithMinPriority

取消所有优先级的值大于指定优先级的定时器。<br/>
你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:771](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L771) |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The minimum priority of selector to be unscheduled. Which means, all selectors which
       priority is higher than minPriority will be unscheduled.


##### isScheduled

检查指定的回调函数和回调对象组合是否存在定时器。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCScheduler.js:825](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L825) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to check.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target of the callback.


##### pauseAllTargets

暂停所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:863](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L863) |



##### pauseAllTargetsWithMinPriority

暂停所有优先级的值大于指定优先级的定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:876](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L876) |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### resumeTargets

恢复指定数组中所有对象的定时器。<br/>
这个函数是 pauseAllCallbacks 的逆操作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:936](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L936) |

###### 参数列表
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTarget

暂停指定对象的定时器。<br/>
指定对象的所有定时器都会被暂停。<br/>
如果指定的对象没有定时器，什么也不会发生。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:955](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L955) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### resumeTarget

恢复指定对象的所有定时器。<br/>
指定对象的所有定时器将继续工作。<br/>
如果指定的对象没有定时器，什么也不会发生。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:986](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L986) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### isTargetPaused

返回指定对象的定时器是否暂停了。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/CCScheduler.js:1019](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1019) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### scheduleUpdateForTarget

为指定对象设置 update 定时器。<br/>
update 定时器每一帧都会被调用。<br/>
优先级的值越低，越早被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1043](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1043) |
| 废弃（Deprecated） | since v3.4 please use .scheduleUpdate |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### 示例

```js
//register this object to scheduler
var scheduler = cc.director.getScheduler();
scheduler.scheduleUpdateForTarget(this, priority, !this._isRunning );

```

##### unscheduleCallbackForTarget

根据指定的回调函数和调用对象对象取消相应的定时器。<br/>
如果需要取消 update 定时器，请使用 unscheduleUpdateForTarget()。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1064](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1064) |
| 废弃（Deprecated） | since v3.4 please use .unschedule |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback[Function] or key[String]

##### 示例

```js
//unschedule a callback of target
var scheduler = cc.director.getScheduler();
scheduler.unscheduleCallbackForTarget(this, callback);

```

##### unscheduleUpdateForTarget

取消指定对象的所有定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1082](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1082) |
| 废弃（Deprecated） | since v3.4 please use .unschedule |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### 示例

```js
//unschedules the "update" method.
var scheduler = cc.director.getScheduler();
scheduler.unscheduleUpdateForTarget(this);

```

##### unscheduleAllCallbacksForTarget

取消指定对象的所有定时器，包括 update 定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1095](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1095) |
| 废弃（Deprecated） | since v3.4 please use unscheduleAllForTarget |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### unscheduleAllCallbacks

取消所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1109](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1109) |
| 废弃（Deprecated） | since v3.4 please use .unscheduleAllWithMinPriority |



##### unscheduleAllCallbacksWithMinPriority

取消所有优先级的值大于指定优先级的所有对象的所有定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/CCScheduler.js:1124](https://github.com/cocos-creator/engine/blob/dcd3357d61e518886ccbf8b2026bed4edc6c615d/cocos2d/core/CCScheduler.js#L1124) |
| 废弃（Deprecated） | since v3.4 please use .unscheduleAllWithMinPriority |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



