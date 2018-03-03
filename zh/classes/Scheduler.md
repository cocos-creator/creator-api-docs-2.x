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

  - [`setTimeScale`](#settimescale) 设置时间间隔的缩放比例。<br/>
您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br/>
默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br/>
要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br/>
注意：它影响该 Scheduler 下管理的所有定时器。
  - [`getTimeScale`](#gettimescale) 获取时间间隔的缩放比例。
  - [`update`](#update) update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)
  - [`scheduleCallbackForTarget`](#schedulecallbackfortarget) 指定回调函数，调用对象等信息来添加一个新的定时器。</br>
当时间间隔达到指定值时，设置的回调函数将会被调用。</br>
如果 paused 值为 true，那么直到 resume 被调用才开始计时。</br>
如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
建议使用 scheduleUpdateForTarget 代替。</br>
如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
repeat 值可以让定时器触发 repeat + 1 次，使用 cc.macro.REPEAT_FOREVER
可以让定时器一直循环触发。<br/>
delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。
  - [`schedule`](#schedule) 定时器
  - [`scheduleUpdate`](#scheduleupdate) 使用指定的优先级为指定的对象设置 update 定时器。
update 定时器每一帧都会被触发。优先级的值越低，定时器被触发的越早。
  - [`unschedule`](#unschedule) 根据指定的回调函数和调用对象。
如果需要取消 update 定时器，请使用 unscheduleUpdate()。
  - [`unscheduleUpdate`](#unscheduleupdate) 取消指定对象的 update 定时器。
  - [`unscheduleAllForTarget`](#unscheduleallfortarget) 取消指定对象的所有定时器，包括 update 定时器。
  - [`unscheduleAll`](#unscheduleall) 取消所有对象的所有定时器，包括系统定时器。<br/>
不用调用此函数，除非你确定你在做什么。
  - [`unscheduleAllWithMinPriority`](#unscheduleallwithminpriority) 取消所有优先级的值大于指定优先级的定时器。<br/>
你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
  - [`isScheduled`](#isscheduled) 检查指定的回调函数和回调对象组合是否存在定时器。
  - [`pauseAllTargets`](#pausealltargets) 暂停所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。
  - [`pauseAllTargetsWithMinPriority`](#pausealltargetswithminpriority) 暂停所有优先级的值大于指定优先级的定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。
  - [`resumeTargets`](#resumetargets) 恢复指定数组中所有对象的定时器。<br/>
这个函数是 pauseAllCallbacks 的逆操作。
  - [`pauseTarget`](#pausetarget) 暂停指定对象的定时器。<br/>
指定对象的所有定时器都会被暂停。<br/>
如果指定的对象没有定时器，什么也不会发生。
  - [`resumeTarget`](#resumetarget) 恢复指定对象的所有定时器。<br/>
指定对象的所有定时器将继续工作。<br/>
如果指定的对象没有定时器，什么也不会发生。
  - [`isTargetPaused`](#istargetpaused) 返回指定对象的定时器是否暂停了。
  - [`scheduleUpdateForTarget`](#scheduleupdatefortarget) 为指定对象设置 update 定时器。<br/>
update 定时器每一帧都会被调用。<br/>
优先级的值越低，越早被调用。
  - [`unscheduleCallbackForTarget`](#unschedulecallbackfortarget) 根据指定的回调函数和调用对象对象取消相应的定时器。<br/>
如果需要取消 update 定时器，请使用 unscheduleUpdateForTarget()。
  - [`unscheduleUpdateForTarget`](#unscheduleupdatefortarget) 取消指定对象的所有定时器。
  - [`unscheduleAllCallbacksForTarget`](#unscheduleallcallbacksfortarget) 取消指定对象的所有定时器，包括 update 定时器。
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。
  - [`unscheduleAllCallbacksWithMinPriority`](#unscheduleallcallbackswithminpriority) 取消所有优先级的值大于指定优先级的所有对象的所有定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。



### Details


#### 属性（properties）


##### PRIORITY_SYSTEM

> 系统服务的优先级。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1140](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1140) |



##### PRIORITY_NON_SYSTEM

> 用户调度最低优先级。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1149](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1149) |






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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:362](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L362) |

###### 参数列表
- `timeScale` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTimeScale

获取时间间隔的缩放比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:382](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L382) |



##### update

update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:392](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L392) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:482](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L482) |
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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:520](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L520) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:588](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L588) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:646](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L646) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be unscheduled
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target bound to the callback.


##### unscheduleUpdate

取消指定对象的 update 定时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:695](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L695) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAllForTarget

取消指定对象的所有定时器，包括 update 定时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:717](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L717) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAll

取消所有对象的所有定时器，包括系统定时器。<br/>
不用调用此函数，除非你确定你在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:757](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L757) |



##### unscheduleAllWithMinPriority

取消所有优先级的值大于指定优先级的定时器。<br/>
你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:770](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L770) |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The minimum priority of selector to be unscheduled. Which means, all selectors which
       priority is higher than minPriority will be unscheduled.


##### isScheduled

检查指定的回调函数和回调对象组合是否存在定时器。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:824](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L824) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to check.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target of the callback.


##### pauseAllTargets

暂停所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:862](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L862) |



##### pauseAllTargetsWithMinPriority

暂停所有优先级的值大于指定优先级的定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:875](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L875) |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### resumeTargets

恢复指定数组中所有对象的定时器。<br/>
这个函数是 pauseAllCallbacks 的逆操作。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:935](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L935) |

###### 参数列表
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTarget

暂停指定对象的定时器。<br/>
指定对象的所有定时器都会被暂停。<br/>
如果指定的对象没有定时器，什么也不会发生。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:954](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L954) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### resumeTarget

恢复指定对象的所有定时器。<br/>
指定对象的所有定时器将继续工作。<br/>
如果指定的对象没有定时器，什么也不会发生。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:985](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L985) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### isTargetPaused

返回指定对象的定时器是否暂停了。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1018](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1018) |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### scheduleUpdateForTarget

为指定对象设置 update 定时器。<br/>
update 定时器每一帧都会被调用。<br/>
优先级的值越低，越早被调用。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1042) |
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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1063](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1063) |
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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1081](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1081) |
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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1094](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1094) |
| 废弃（Deprecated） | since v3.4 please use unscheduleAllForTarget |

###### 参数列表
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### unscheduleAllCallbacks

取消所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1108](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1108) |
| 废弃（Deprecated） | since v3.4 please use .unscheduleAllWithMinPriority |



##### unscheduleAllCallbacksWithMinPriority

取消所有优先级的值大于指定优先级的所有对象的所有定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1123](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1123) |
| 废弃（Deprecated） | since v3.4 please use .unscheduleAllWithMinPriority |

###### 参数列表
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



