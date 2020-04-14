## `Tween` Class



Module: [cc](../modules/cc.md)


Tween provide a simple and flexible way to create action.
Tween's api is more flexible than cc.Action:
 - Support creating an action sequence in chained api,
 - Support animate any objects' any properties, not limited to node's properties.
   By contrast, cc.Action needs to create a new action class to support new node property.
 - Support working with cc.Action,
 - Support easing and progress function.


##### Examples

```js
cc.tween(node)
  .to(1, {scale: 2, position: cc.v3(100, 100, 100)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: 3, position: cc.v3(200, 200, 200)}, {easing: 'sineOutIn'})
  .start(cc.find('Canvas/cocos'));
```

### Index



##### Methods

  - [`constructor`](#constructor) 
  - [`stopAll`](#stopall) Stop all tweens
  - [`stopAllByTag`](#stopallbytag) Stop all tweens by tag
  - [`stopAllByTarget`](#stopallbytarget) Stop all tweens by target
  - [`then`](#then) Insert an action or tween to this sequence
  - [`target`](#target) Set tween target
  - [`start`](#start) Start this tween
  - [`stop`](#stop) Stop this tween
  - [`tag`](#tag) Sets tween tag
  - [`clone`](#clone) Clone a tween
  - [`union`](#union) Integrate all previous actions to an action.
  - [`bezierTo`](#bezierto) Sets target's position property according to the bezier curve.
  - [`bezierBy`](#bezierby) Sets target's position property according to the bezier curve.
  - [`flipX`](#flipx) Flips target's scaleX
  - [`flipY`](#flipy) Flips target's scaleY
  - [`blink`](#blink) Blinks target by set target's opacity property
  - [`to`](#to) Add an action which calculate with absolute value
  - [`by`](#by) Add an action which calculate with relative value
  - [`set`](#set) Directly set target properties
  - [`delay`](#delay) Add an delay action
  - [`call`](#call) Add an callback action
  - [`hide`](#hide) Add an hide action
  - [`show`](#show) Add an show action
  - [`removeSelf`](#removeself) Add an removeSelf action
  - [`sequence`](#sequence) Add an sequence action
  - [`parallel`](#parallel) Add an parallel action
  - [`repeat`](#repeat) Add an repeat action.
  - [`repeatForever`](#repeatforever) Add an repeat forever action
  - [`reverseTime`](#reversetime) Add an reverse time action.



### Details




<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:181](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L181) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### stopAll

Stop all tweens

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:186](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L186) |



##### stopAllByTag

Stop all tweens by tag

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:195](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L195) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### stopAllByTarget

Stop all tweens by target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:205](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L205) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### then

Insert an action or tween to this sequence

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:216](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L216) |

###### Parameters
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

Set tween target

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:236](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L236) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### start

Start this tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:250](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L250) |



##### stop

Stop this tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:282](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L282) |



##### tag

Sets tween tag

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:298](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L298) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

Clone a tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:311](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L311) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### union

Integrate all previous actions to an action.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:325](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L325) |



##### bezierTo

Sets target's position property according to the bezier curve.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:354](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L354) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `c1` cc.Vec2 
- `c2` cc.Vec2 
- `to` cc.Vec2 


##### bezierBy

Sets target's position property according to the bezier curve.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:376](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L376) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `c1` cc.Vec2 
- `c2` cc.Vec2 
- `to` cc.Vec2 


##### flipX

Flips target's scaleX

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:399](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L399) |



##### flipY

Flips target's scaleY

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:408](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L408) |



##### blink

Blinks target by set target's opacity property

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:418](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L418) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `times` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### to

Add an action which calculate with absolute value

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:462](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L462) |

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
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:483](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L483) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> {scale: 2, position: cc.v3(100, 100, 100)}
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `progress` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `easing` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### set

Directly set target properties

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:504](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L504) |

###### Parameters
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### delay

Add an delay action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:519](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L519) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

Add an callback action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:529](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L529) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### hide

Add an hide action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:539](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L539) |



##### show

Add an show action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:548](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L548) |



##### removeSelf

Add an removeSelf action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:557](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L557) |



##### sequence

Add an sequence action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:566](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L566) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### parallel

Add an parallel action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:577](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L577) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeat

Add an repeat action.
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:592](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L592) |

###### Parameters
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeatForever

Add an repeat forever action
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:604](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L604) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### reverseTime

Add an reverse time action.
This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:618](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/actions/tween.js#L618) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 



