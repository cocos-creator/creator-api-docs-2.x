## `Tween` Class



Module: [cc](../modules/cc.md)


Tween provide a simple and flexible way to create action.
Tween's api is more flexible than cc.Action:
 - Support creating an action sequence in chained api,
 - Support animate any objects' any properties, not limited to node's properties.
   By contrast, cc.Action needs to create a new action class to support new node property.
 - Support working with cc.Action,
 - Support easing and progress function,


##### Examples

```js
cc.tween(node)
  .to(1, {scale: 2, position: cc.v3(100, 100, 100)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: 3, position: cc.v3(200, 200, 200)}, {easing: 'sineOutIn'})
  .run(cc.find('Canvas/cocos'));
```

### Index



##### Methods

  - [`then`](#then) Insert an action or tween to this sequence
  - [`target`](#target) Set tween target
  - [`start`](#start) Start this tween
  - [`stop`](#stop) Stop this tween
  - [`clone`](#clone) Clone a tween
  - [`to`](#to) Add an action which calculate with absolute value
  - [`by`](#by) Add an action which calculate with relative value
  - [`delay`](#delay) Add an delay action
  - [`call`](#call) Add an callback action
  - [`hide`](#hide) Add an hide action
  - [`show`](#show) Add an show action
  - [`removeSelf`](#removeself) Add an removeSelf action
  - [`sequence`](#sequence) Add an sequence action
  - [`repeat`](#repeat) Add an repeat action.
  - [`repeatForever`](#repeatforever) Add an repeat forever action
  - [`reverseTime`](#reversetime) Add an reverse time action.
  - [`tween`](#tween) 



### Details




<!-- Method Block -->
#### Methods


##### then

Insert an action or tween to this sequence

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:136](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L136) |

###### Parameters
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

Set tween target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:157](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L157) |



##### start

Start this tween

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:169](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L169) |



##### stop

Stop this tween

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:188](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L188) |



##### clone

Clone a tween

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:204](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L204) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### to

Add an action which calculate with absolute value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:238](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L238) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### by

Add an action which calculate with relative value

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:256](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L256) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### delay

Add an delay action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:274](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L274) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

Add an callback action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:283](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L283) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### hide

Add an hide action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:292](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L292) |



##### show

Add an show action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:300](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L300) |



##### removeSelf

Add an removeSelf action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:308](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L308) |



##### sequence

Add an sequence action

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:316](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L316) |

###### Parameters
- `actions` <a href="../classes/Action.html" class="crosslink">[Action]</a> 


##### repeat

Add an repeat action.
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:329](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L329) |

###### Parameters
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### repeatForever

Add an repeat forever action
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:339](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L339) |



##### reverseTime

Add an reverse time action.
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:348](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L348) |



##### tween



| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:391](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/actions/tween.js#L391) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the target to animate



