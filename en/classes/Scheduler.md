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

  - [`enableForTarget`](#enablefortarget) !en This method should be called for any target which needs to schedule tasks, and this method should be called before any scheduler API usage.
  - [`setTimeScale`](#settimescale) Default is 1.0.
  - [`getTimeScale`](#gettimescale) Returns time scale of scheduler.
  - [`update`](#update) 'update' the scheduler.
  - [`schedule`](#schedule) <p>...
  - [`scheduleUpdate`](#scheduleupdate) Schedules the update callback for a given target,...
  - [`unschedule`](#unschedule) Unschedules a callback for a callback and a given target.
  - [`unscheduleUpdate`](#unscheduleupdate) Unschedules the update callback for a given target.
  - [`unscheduleAllForTarget`](#unscheduleallfortarget) Unschedules all scheduled callbacks for a given target.
  - [`unscheduleAll`](#unscheduleall) Unschedules all scheduled callbacks from all targets including the system callbacks....
  - [`unscheduleAllWithMinPriority`](#unscheduleallwithminpriority) Unschedules all callbacks from all targets with a minimum priority....
  - [`isScheduled`](#isscheduled) Checks whether a callback for a given target is scheduled.
  - [`pauseAllTargets`](#pausealltargets) Pause all selectors from all targets....
  - [`pauseAllTargetsWithMinPriority`](#pausealltargetswithminpriority) Pause all selectors from all targets with a minimum priority.
  - [`resumeTargets`](#resumetargets) Resume selectors on a set of targets....
  - [`pauseTarget`](#pausetarget) Pauses the target....
  - [`resumeTarget`](#resumetarget) Resumes the target....
  - [`isTargetPaused`](#istargetpaused) Returns whether or not the target is paused.



### Details


#### Properties


##### PRIORITY_SYSTEM

> Priority level reserved for system services.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCScheduler.js:1092](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L1092) |



##### PRIORITY_NON_SYSTEM

> Minimum priority level for user scheduling.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/CCScheduler.js:1101](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L1101) |






<!-- Method Block -->
#### Methods


##### enableForTarget

!en This method should be called for any target which needs to schedule tasks, and this method should be called before any scheduler API usage.
This method will add a `_id` property if it doesn't exist.
!zh 任何需要用 Scheduler 管理任务的对象主体都应该调用这个方法，并且应该在调用任何 Scheduler API 之前调用这个方法。
这个方法会给对象添加一个 `_id` 属性，如果这个属性不存在的话。

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:351](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L351) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### setTimeScale

Modifies the time of all scheduled callbacks.<br/>
You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
To create a 'fast forward' effect, use values higher than 1.0.<br/>
Note：It will affect EVERY scheduled selector / action.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:370](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L370) |

###### Parameters
- `timeScale` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTimeScale

Returns time scale of scheduler.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/CCScheduler.js:390](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L390) |



##### update

'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:400](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L400) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delta time


##### schedule

<p>
  The scheduled method will be called every 'interval' seconds.<br/>
  If paused is YES, then it won't be called until it is resumed.<br/>
  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
  repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
  delay is the amount of time the action will wait before it'll start<br/>
</p>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:486](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L486) |

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
During every frame after schedule started, the "update" function of target will be invoked.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:579](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L579) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `priority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### unschedule

Unschedules a callback for a callback and a given target.
If you want to unschedule the "update", use `unscheduleUpdate()`

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:641](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L641) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be unscheduled
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target bound to the callback.


##### unscheduleUpdate

Unschedules the update callback for a given target.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:698](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L698) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAllForTarget

Unschedules all scheduled callbacks for a given target.
This also includes the "update" callback.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:728](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L728) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be unscheduled.


##### unscheduleAll

Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
You should NEVER call this method, unless you know what you are doing.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:776](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L776) |



##### unscheduleAllWithMinPriority

Unschedules all callbacks from all targets with a minimum priority.<br/>
You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:789](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L789) |

###### Parameters
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The minimum priority of selector to be unscheduled. Which means, all selectors which
       priority is higher than minPriority will be unscheduled.


##### isScheduled

Checks whether a callback for a given target is scheduled.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCScheduler.js:843](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L843) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to check.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target of the callback.


##### pauseAllTargets

Pause all selectors from all targets.<br/>
You should NEVER call this method, unless you know what you are doing.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:889](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L889) |



##### pauseAllTargetsWithMinPriority

Pause all selectors from all targets with a minimum priority. <br/>
You should only call this with kCCPriorityNonSystemMin or higher.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:902](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L902) |

###### Parameters
- `minPriority` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### resumeTargets

Resume selectors on a set of targets.<br/>
This can be useful for undoing a call to pauseAllCallbacks.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:962](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L962) |

###### Parameters
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTarget

Pauses the target.<br/>
All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
If the target is not present, nothing happens.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:981](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L981) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### resumeTarget

Resumes the target.<br/>
The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
If the target is not present, nothing happens.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/CCScheduler.js:1020](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L1020) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### isTargetPaused

Returns whether or not the target is paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/CCScheduler.js:1059](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/CCScheduler.js#L1059) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



