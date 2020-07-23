## `ShapeModule` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


The shape module of 3d particle.



### Index

##### Properties

  - [`enable`](#enable) `Boolean` The enable of shapeModule.
  - [`shapeType`](#shapetype) `ShapeType` Particle emitter type.
  - [`emitFrom`](#emitfrom) `EmitLocation` The emission site of the particle.
  - [`radius`](#radius) `Number` Particle emitter radius.
  - [`radiusThickness`](#radiusthickness) `Number` Particle emitter emission position (not valid for Box type emitters)：<bg>...
  - [`angle`](#angle) `Number` The angle between the axis of the cone and the generatrix<bg>...
  - [`arc`](#arc) `Number` Particle emitters emit in a fan-shaped range.
  - [`arcMode`](#arcmode) `ArcMode` How particles are emitted in the sector range.
  - [`arcSpread`](#arcspread) `Number` Controls the discrete intervals around the arcs where particles might be generated.
  - [`arcSpeed`](#arcspeed) `CurveRange` The speed at which particles are emitted around the circumference.
  - [`length`](#length) `Number` Axis length from top of cone to bottom of cone <bg>.
  - [`boxThickness`](#boxthickness) `Vec3` Particle emitter emission location (for box-type particle emitters).
  - [`position`](#position) `Vec3` Particle Emitter Position
  - [`rotation`](#rotation) `Vec3` Particle emitter rotation angle.
  - [`scale`](#scale) `Vec3` Particle emitter scaling
  - [`alignToDirection`](#aligntodirection) `Boolean` The direction of particle movement is determined based on the initial direction of the particles.
  - [`randomDirectionAmount`](#randomdirectionamount) `Number` Set particle generation direction randomly.
  - [`sphericalDirectionAmount`](#sphericaldirectionamount) `Number` Interpolation between the current emission direction and the direction from the current position to the center of the node.





### Details


#### Properties


##### enable

> The enable of shapeModule.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:23](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L23) |



##### shapeType

> Particle emitter type.

| meta | description |
|------|-------------|
| Type | ShapeType |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:34](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L34) |



##### emitFrom

> The emission site of the particle.

| meta | description |
|------|-------------|
| Type | EmitLocation |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:68](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L68) |



##### radius

> Particle emitter radius.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:78](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L78) |



##### radiusThickness

> Particle emitter emission position (not valid for Box type emitters)：<bg>
- 0 means emitted from the surface;
- 1 means launch from the center;
- 0 ~ 1 indicates emission from the center to the surface.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:86](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L86) |



##### angle

> The angle between the axis of the cone and the generatrix<bg>
Determines the opening and closing of the cone launcher

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:103](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L103) |



##### arc

> Particle emitters emit in a fan-shaped range.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:122](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L122) |



##### arcMode

> How particles are emitted in the sector range.

| meta | description |
|------|-------------|
| Type | ArcMode |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:136](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L136) |



##### arcSpread

> Controls the discrete intervals around the arcs where particles might be generated.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:146](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L146) |



##### arcSpeed

> The speed at which particles are emitted around the circumference.

| meta | description |
|------|-------------|
| Type | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:154](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L154) |



##### length

> Axis length from top of cone to bottom of cone <bg>.
Determines the height of the cone emitter.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:164](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L164) |



##### boxThickness

> Particle emitter emission location (for box-type particle emitters).

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:174](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L174) |



##### position

> Particle Emitter Position

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:185](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L185) |



##### rotation

> Particle emitter rotation angle.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:202](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L202) |



##### scale

> Particle emitter scaling

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:219](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L219) |



##### alignToDirection

> The direction of particle movement is determined based on the initial direction of the particles.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:233](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L233) |



##### randomDirectionAmount

> Set particle generation direction randomly.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:241](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L241) |



##### sphericalDirectionAmount

> Interpolation between the current emission direction and the direction from the current position to the center of the node.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/3d/particle/emitter/shape-module.ts:249](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/3d/particle/emitter/shape-module.ts#L249) |






