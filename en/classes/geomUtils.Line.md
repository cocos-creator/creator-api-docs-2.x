## `geomUtils.Line` Class



Module: [cc](../modules/cc.md)


line



### Index

##### Properties

  - [`s`](#s) `Vec3` Start points.
  - [`e`](#e) `Vec3` End points.



##### Methods

  - [`create`](#create) create a new line
  - [`clone`](#clone) Creates a new line initialized with values from an existing line
  - [`copy`](#copy) Copy the values from one line to another
  - [`fromPoints`](#frompoints) create a line from two points
  - [`set`](#set) Set the components of a Vec3 to the given values
  - [`len`](#len) Calculate the length of the line.
  - [`length`](#length) Calculate the length of the line.



### Details


#### Properties


##### s

> Start points.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/line.ts:147](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L147) |



##### e

> End points.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/geom-utils/line.ts:156](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L156) |






<!-- Method Block -->
#### Methods


##### create

create a new line

| meta | description |
|------|-------------|
| Returns | Line 
| Defined in | [cocos2d/core/geom-utils/line.ts:40](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L40) |

###### Parameters
- `sx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the starting point.
- `sy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the starting point.
- `sz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the starting point.
- `ex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the end point.
- `ey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the end point.
- `ez` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the end point.


##### clone

Creates a new line initialized with values from an existing line

| meta | description |
|------|-------------|
| Returns | Line 
| Defined in | [cocos2d/core/geom-utils/line.ts:58](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L58) |

###### Parameters
- `a` Line The source of cloning.


##### copy

Copy the values from one line to another

| meta | description |
|------|-------------|
| Returns | Line 
| Defined in | [cocos2d/core/geom-utils/line.ts:74](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L74) |

###### Parameters
- `out` Line The object that accepts the action.
- `a` Line The source of the copy.


##### fromPoints

create a line from two points

| meta | description |
|------|-------------|
| Returns | Line 
| Defined in | [cocos2d/core/geom-utils/line.ts:91](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L91) |

###### Parameters
- `out` Line The object that accepts the action.
- `start` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The starting point.
- `end` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> At the end.


##### set

Set the components of a Vec3 to the given values

| meta | description |
|------|-------------|
| Returns | Line 
| Defined in | [cocos2d/core/geom-utils/line.ts:108](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L108) |

###### Parameters
- `out` Line The object that accepts the action.
- `sx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the starting point.
- `sy` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the starting point.
- `sz` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the starting point.
- `ex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The x part of the end point.
- `ey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The y part of the end point.
- `ez` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The z part of the end point.


##### len

Calculate the length of the line.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/geom-utils/line.ts:134](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L134) |

###### Parameters
- `a` Line The line to calculate.


##### length

Calculate the length of the line.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/geom-utils/line.ts:184](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/geom-utils/line.ts#L184) |




