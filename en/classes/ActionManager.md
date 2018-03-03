## `ActionManager` Class



Module: [cc](../modules/cc.md)


cc.ActionManager is a class that can manage actions.<br/>
Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
which uses this class's singleton object.
But there are some cases where you might need to use this class. <br/>
Examples:<br/>
- When you want to run an action where the target is different from a CCNode.<br/>
- When you want to pause / resume the actions<br/>


### Index



##### Methods

  - [`addAction`](#addaction) Adds an action with a target.<br/>
If the target is already present, then the action will be added to the existing target.
If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
When the target is paused, the queued actions won't be 'ticked'.
  - [`removeAllActions`](#removeallactions) Removes all actions from all the targets.
  - [`removeAllActionsFromTarget`](#removeallactionsfromtarget) Removes all actions from a certain target. <br/>
All the actions that belongs to the target will be removed.
  - [`removeAction`](#removeaction) Removes an action given an action reference.
  - [`removeActionByTag`](#removeactionbytag) Removes an action given its tag and the target.
  - [`getActionByTag`](#getactionbytag) Gets an action given its tag an a target.
  - [`getNumberOfRunningActionsInTarget`](#getnumberofrunningactionsintarget) Returns the numbers of actions that are running in a certain target. <br/>
Composable actions are counted as 1 action. <br/>
Example: <br/>
- If you are running 1 Sequence of 7 actions, it will return 1. <br/>
- If you are running 7 Sequences of 2 actions, it will return 7.
  - [`pauseTarget`](#pausetarget) Pauses the target: all running actions and newly added actions will be paused.
  - [`resumeTarget`](#resumetarget) Resumes the target. All queued actions will be resumed.
  - [`pauseAllRunningActions`](#pauseallrunningactions) Pauses all running actions, returning a list of targets whose actions were paused.
  - [`resumeTargets`](#resumetargets) Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call).
  - [`pauseTargets`](#pausetargets) Pause a set of targets.
  - [`purgeSharedManager`](#purgesharedmanager) purges the shared action manager. It releases the retained instance. <br/>
because it uses this, so it can not be static.
  - [`update`](#update) The ActionManager update。



### Details




<!-- Method Block -->
#### Methods


##### addAction

Adds an action with a target.<br/>
If the target is already present, then the action will be added to the existing target.
If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
When the target is paused, the queued actions won't be 'ticked'.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L101) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### removeAllActions

Removes all actions from all the targets.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:140](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L140) |



##### removeAllActionsFromTarget

Removes all actions from a certain target. <br/>
All the actions that belongs to the target will be removed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:153](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L153) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `forceDelete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### removeAction

Removes an action given an action reference.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:174](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L174) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 


##### removeActionByTag

Removes an action given its tag and the target.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:202](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L202) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getActionByTag

Gets an action given its tag an a target.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Action.html" class="crosslink">Action</a> &#124; Null 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L229) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getNumberOfRunningActionsInTarget

Returns the numbers of actions that are running in a certain target. <br/>
Composable actions are counted as 1 action. <br/>
Example: <br/>
- If you are running 1 Sequence of 7 actions, it will return 1. <br/>
- If you are running 7 Sequences of 2 actions, it will return 7.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:256](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L256) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### pauseTarget

Pauses the target: all running actions and newly added actions will be paused.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:281](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L281) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### resumeTarget

Resumes the target. All queued actions will be resumed.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:292](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L292) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### pauseAllRunningActions

Pauses all running actions, returning a list of targets whose actions were paused.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:304](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L304) |



##### resumeTargets

Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call).

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:323](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L323) |

###### Parameters
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTargets

Pause a set of targets.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:339](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L339) |

###### Parameters
- `targetsToPause` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### purgeSharedManager

purges the shared action manager. It releases the retained instance. <br/>
because it uses this, so it can not be static.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:355](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L355) |



##### update

The ActionManager update。

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js:402](https:/github.com/cocos-creator/engine/blob/master/cocos2d/actions/CCActionManager.js#L402) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delta time in seconds



