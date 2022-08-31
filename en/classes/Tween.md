## `Tween` Class



Module: [cc](../modules/cc.md)


Tween provide a simple and flexible way to create action. Tween's api is more flexible than `cc.Action`:
 - Support creating an action sequence in chained api.
 - Support animate any objects' any properties, not limited to node's properties. By contrast, `cc.Action` needs to create a new action class to support new node property.
 - Support working with `cc.Action`.
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
  - [`repeatForever`](#repeatforever) Add an repeat forever action.
  - [`reverseTime`](#reversetime) Add an reverse time action.



### Details




<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:184](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L184) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### stopAll

Stop all tweens

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:189](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L189) |



##### stopAllByTag

Stop all tweens by tag

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:198](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L198) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### stopAllByTarget

Stop all tweens by target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/actions/tween.js:208](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L208) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### then

Insert an action or tween to this sequence

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:219](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L219) |

###### Parameters
- `other` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### target

Set tween target

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:240](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L240) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### start

Start this tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:255](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L255) |



##### stop

Stop this tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:288](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L288) |



##### tag

Sets tween tag

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:306](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L306) |

###### Parameters
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### clone

Clone a tween

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:320](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L320) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### union

Integrate all previous actions to an action.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:335](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L335) |



##### bezierTo

Sets target's position property according to the bezier curve.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:365](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L365) |

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
| Defined in | [cocos2d/actions/tween.js:388](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L388) |

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
| Defined in | [cocos2d/actions/tween.js:412](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L412) |



##### flipY

Flips target's scaleY

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:423](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L423) |



##### blink

Blinks target by set target's opacity property

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:434](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L434) |

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
| Defined in | [cocos2d/actions/tween.js:479](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L479) |

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
| Defined in | [cocos2d/actions/tween.js:500](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L500) |

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
| Defined in | [cocos2d/actions/tween.js:521](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L521) |

###### Parameters
- `props` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### delay

Add an delay action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:536](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L536) |

###### Parameters
- `duration` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### call

Add an callback action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:547](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L547) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `selectTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 


##### hide

Add an hide action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:559](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L559) |



##### show

Add an show action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:569](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L569) |



##### removeSelf

Add an removeSelf action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:579](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L579) |



##### sequence

Add an sequence action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:589](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L589) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### parallel

Add an parallel action

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:601](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L601) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 
- `actions` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeat

Add an repeat action. This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:617](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L617) |

###### Parameters
- `repeatTimes` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### repeatForever

Add an repeat forever action. This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:629](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L629) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 


##### reverseTime

Add an reverse time action. This action will integrate before actions to a sequence action as their parameters.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Tween.html" class="crosslink">Tween</a> 
| Defined in | [cocos2d/actions/tween.js:640](https://github.com/cocos-creator/engine/blob/ca662e1d8c009e4c070be6fb12c55967f9cdd6f6/cocos2d/actions/tween.js#L640) |

###### Parameters
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> &#124; <a href="../classes/Tween.html" class="crosslink">Tween</a> 



