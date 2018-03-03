## `Scheduler` Class



Module: [cc](../modules/cc.md)


Scheduler is responsible of triggering the scheduled callbacks.<br/>
You should not use NSTimer. Instead use this class.<br/>
<br/>
There are 2 different types of callbacks (selectors):<br/>
    - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
    - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
<br/>
The 'custom selectors' should be avoided when possible. It is faster,
and consumes less memory to use the 'update callback'. *


### Index

##### Properties

  - [`PRIORITY_SYSTEM`](#prioritysystem) `Number` Priority level reserved for system services.
  - [`PRIORITY_NON_SYSTEM`](#prioritynonsystem) `Number` Minimum priority level for user scheduling.



##### Methods

  - [`setTimeScale`](#settimescale) Modifies the time of all scheduled callbacks.<br/>
You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
To create a 'fast forward' effect, use values higher than 1.0.<br/>
Note：It will affect EVERY scheduled selector / action.
  - [`getTimeScale`](#gettimescale) Returns time scale of scheduler.
  - [`update`](#update) 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
  - [`scheduleCallbackForTarget`](#schedulecallbackfortarget) <p>
  The scheduled method will be called every 'interval' seconds.</br>
  If paused is YES, then it won't be called until it is resumed.<br/>
  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
  repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
  delay is the amount of time the action will wait before it'll start<br/>
</p>
  - [`schedule`](#schedule) The schedule
  - [`scheduleUpdate`](#scheduleupdate) Schedules the update callback for a given target,
the callback will be invoked every frame after schedule started.
  - [`unschedule`](#unschedule) Unschedules a callback for a callback and a given target.
If you want to unschedule the "update", use `unscheduleUpdate()`
  - [`unscheduleUpdate`](#unscheduleupdate) Unschedules the update callback for a given target.
  - [`unscheduleAllForTarget`](#unscheduleallfortarget) Unschedules all scheduled callbacks for a given target.
This also includes the "update" callback.
  - [`unscheduleAll`](#unscheduleall) Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
You should NEVER call this method, unless you know what you are doing.
  - [`unscheduleAllWithMinPriority`](#unscheduleallwithminpriority) Unschedules all callbacks from all targets with a minimum priority.<br/>
You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.
  - [`isScheduled`](#isscheduled) Checks whether a callback for a given target is scheduled.
  - [`pauseAllTargets`](#pausealltargets) Pause all selectors from all targets.<br/>
You should NEVER call this method, unless you know what you are doing.
  - [`pauseAllTargetsWithMinPriority`](#pausealltargetswithminpriority) Pause all selectors from all targets with a minimum priority. <br/>
You should only call this with kCCPriorityNonSystemMin or higher.
  - [`resumeTargets`](#resumetargets) Resume selectors on a set of targets.<br/>
This can be useful for undoing a call to pauseAllCallbacks.
  - [`pauseTarget`](#pausetarget) Pauses the target.<br/>
All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
If the target is not present, nothing happens.
  - [`resumeTarget`](#resumetarget) Resumes the target.<br/>
The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
If the target is not present, nothing happens.
  - [`isTargetPaused`](#istargetpaused) Returns whether or not the target is paused.
  - [`scheduleUpdateForTarget`](#scheduleupdatefortarget) Schedules the 'update' callback_fn for a given target with a given priority.<br/>
The 'update' callback_fn will be called every frame.<br/>
The lower the priority, the earlier it is called.
  - [`unscheduleCallbackForTarget`](#unschedulecallbackfortarget) Unschedule a callback function for a given target.<br/>
If you want to unschedule the "update", use unscheduleUpdateForTarget.
  - [`unscheduleUpdateForTarget`](#unscheduleupdatefortarget) Unschedules the update callback function for a given target.
  - [`unscheduleAllCallbacksForTarget`](#unscheduleallcallbacksfortarget) Unschedules all function callbacks for a given target.<br/>
This also includes the "update" callback function.
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) Unschedules all function callbacks from all targets. <br/>
You should NEVER call this method, unless you know what you are doing.
  - [`unscheduleAllCallbacksWithMinPriority`](#unscheduleallcallbackswithminpriority) Unschedules all function callbacks from all targets with a minimum priority.<br/>
You should only call this with kCCPriorityNonSystemMin or higher.



### Details


#### Properties


##### PRIORITY_SYSTEM

> Priority level reserved for system services.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1140](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1140) |



##### PRIORITY_NON_SYSTEM

> Minimum priority level for user scheduling.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1149](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1149) |






<!-- Method Block -->
#### Methods


##### setTimeScale

Modifies the time of all scheduled callbacks.<br/>
You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
To create a 'fast forward' effect, use values higher than 1.0.<br/>
Note：It will affect EVERY scheduled selector / action.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:362](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L362) |

###### Parameters
- `timeScale` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTimeScale

Returns time scale of scheduler.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:382](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L382) |



##### update

'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:392](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L392) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delta time


##### scheduleCallbackForTarget

<p>
  The scheduled method will be called every 'interval' seconds.</br>
  If paused is YES, then it won't be called until it is resumed.<br/>
  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
  repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
  delay is the amount of time the action will wait before it'll start<br/>
</p>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:482](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L482) |
| Deprecated | since v3.4 please use .schedule |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### Examples

```js
//register a schedule to scheduler
var scheduler = cc.director.getScheduler();
scheduler.scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning);

```

##### schedule

The schedule

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:520](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L520) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### Examples

```js
//register a schedule to scheduler
cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);

```

##### scheduleUpdate

Schedules the update callback for a given target,
the callback will be invoked every frame after schedule started.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:588](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L588) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
- `updateFunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### unschedule

Unschedules a callback for a callback and a given target.
If you want to unschedule the "update", use `unscheduleUpdate()`

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:646](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L646) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be unscheduled
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target bound to the callback.


##### unscheduleUpdate

Unschedules the update callback for a given target.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:695](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L695) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAllForTarget

Unschedules all scheduled callbacks for a given target.
This also includes the "update" callback.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:717](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L717) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAll

Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
You should NEVER call this method, unless you know what you are doing.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:757](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L757) |



##### unscheduleAllWithMinPriority

Unschedules all callbacks from all targets with a minimum priority.<br/>
You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:770](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L770) |

###### Parameters
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The minimum priority of selector to be unscheduled. Which means, all selectors which
       priority is higher than minPriority will be unscheduled.


##### isScheduled

Checks whether a callback for a given target is scheduled.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:824](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L824) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to check.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target of the callback.


##### pauseAllTargets

Pause all selectors from all targets.<br/>
You should NEVER call this method, unless you know what you are doing.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:862](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L862) |



##### pauseAllTargetsWithMinPriority

Pause all selectors from all targets with a minimum priority. <br/>
You should only call this with kCCPriorityNonSystemMin or higher.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:875](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L875) |

###### Parameters
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### resumeTargets

Resume selectors on a set of targets.<br/>
This can be useful for undoing a call to pauseAllCallbacks.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:935](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L935) |

###### Parameters
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTarget

Pauses the target.<br/>
All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
If the target is not present, nothing happens.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:954](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L954) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### resumeTarget

Resumes the target.<br/>
The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
If the target is not present, nothing happens.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:985](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L985) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### isTargetPaused

Returns whether or not the target is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1018](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1018) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### scheduleUpdateForTarget

Schedules the 'update' callback_fn for a given target with a given priority.<br/>
The 'update' callback_fn will be called every frame.<br/>
The lower the priority, the earlier it is called.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1042](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1042) |
| Deprecated | since v3.4 please use .scheduleUpdate |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

##### Examples

```js
//register this object to scheduler
var scheduler = cc.director.getScheduler();
scheduler.scheduleUpdateForTarget(this, priority, !this._isRunning );

```

##### unscheduleCallbackForTarget

Unschedule a callback function for a given target.<br/>
If you want to unschedule the "update", use unscheduleUpdateForTarget.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1063](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1063) |
| Deprecated | since v3.4 please use .unschedule |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback[Function] or key[String]

##### Examples

```js
//unschedule a callback of target
var scheduler = cc.director.getScheduler();
scheduler.unscheduleCallbackForTarget(this, callback);

```

##### unscheduleUpdateForTarget

Unschedules the update callback function for a given target.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1081](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1081) |
| Deprecated | since v3.4 please use .unschedule |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Examples

```js
//unschedules the "update" method.
var scheduler = cc.director.getScheduler();
scheduler.unscheduleUpdateForTarget(this);

```

##### unscheduleAllCallbacksForTarget

Unschedules all function callbacks for a given target.<br/>
This also includes the "update" callback function.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1094](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1094) |
| Deprecated | since v3.4 please use unscheduleAllForTarget |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### unscheduleAllCallbacks

Unschedules all function callbacks from all targets. <br/>
You should NEVER call this method, unless you know what you are doing.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1108](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1108) |
| Deprecated | since v3.4 please use .unscheduleAllWithMinPriority |



##### unscheduleAllCallbacksWithMinPriority

Unschedules all function callbacks from all targets with a minimum priority.<br/>
You should only call this with kCCPriorityNonSystemMin or higher.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js:1123](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/CCScheduler.js#L1123) |
| Deprecated | since v3.4 please use .unscheduleAllWithMinPriority |

###### Parameters
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



