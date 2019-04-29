## `ActionInterval` Class

Extends [`FiniteTimeAction`](FiniteTimeAction.md)


Module: [cc](../modules/cc.md)


<p> An interval action is an action that takes place within a certain period of time. <br/>
It has an start time, and a finish time. The finish time is the parameter<br/>
duration plus the start time.</p>

<p>These CCActionInterval actions have some interesting properties, like:<br/>
- They can run normally (default)  <br/>
- They can run reversed with the reverse method   <br/>
- They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>

<p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
then running it again in Reverse mode. </p>


### Index



##### Methods

  - [`easing`](#easing) Implementation of ease motion.
  - [`repeat`](#repeat) Repeats an action a number of times.
  - [`repeatForever`](#repeatforever) Repeats an action for ever.
  - [`getDuration`](#getduration) get duration of the action.
  - [`setDuration`](#setduration) set duration of the action.
  - [`reverse`](#reverse) Returns a reversed action.
  - [`clone`](#clone) to copy object with deep copy.
  - [`isDone`](#isdone) return true if the action has finished.
  - [`getTarget`](#gettarget) get the target.
  - [`setTarget`](#settarget) The action will modify the target properties.
  - [`getOriginalTarget`](#getoriginaltarget) get the original target.
  - [`getTag`](#gettag) get tag number.
  - [`setTag`](#settag) set tag number.



### Details




<!-- Method Block -->
#### Methods


##### easing

Implementation of ease motion.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| Defined in | [cocos2d/actions/CCActionInterval.js:125](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCActionInterval.js#L125) |

###### Parameters
- `easeObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

##### Examples

```js
action.easing(cc.easeIn(3.0));
```

##### repeat

Repeats an action a number of times.
To repeat an action forever use the CCRepeatForever action.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| Defined in | [cocos2d/actions/CCActionInterval.js:253](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCActionInterval.js#L253) |

###### Parameters
- `times` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### repeatForever

Repeats an action for ever.  <br/>
To repeat the an action for a limited number of times use the Repeat action. <br/>

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ActionInterval.html" class="crosslink">ActionInterval</a> 
| Defined in | [cocos2d/actions/CCActionInterval.js:273](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCActionInterval.js#L273) |



##### getDuration

get duration of the action. (seconds).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/actions/CCAction.js:201](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L201) |



##### setDuration

set duration of the action. (seconds).

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/CCAction.js:211](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L211) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### reverse

Returns a reversed action. <br />
For example: <br />
- The action will be x coordinates of 0 move to 100. <br />
- The reversed action will be x of 100 move to 0.
- Will be rewritten

| meta | description |
|------|-------------|
| Returns | Null 
| Defined in | [cocos2d/actions/CCAction.js:221](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L221) |



##### clone

to copy object with deep copy.
returns a clone of action.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/FiniteTimeAction.html" class="crosslink">FiniteTimeAction</a> 
| Defined in | [cocos2d/actions/CCAction.js:237](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L237) |



##### isDone

return true if the action has finished.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/actions/CCAction.js:66](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L66) |



##### getTarget

get the target.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/actions/CCAction.js:98](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L98) |



##### setTarget

The action will modify the target properties.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/CCAction.js:108](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L108) |

###### Parameters
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getOriginalTarget

get the original target.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/actions/CCAction.js:118](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L118) |



##### getTag

get tag number.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/actions/CCAction.js:135](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L135) |



##### setTag

set tag number.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/CCAction.js:145](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/actions/CCAction.js#L145) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



