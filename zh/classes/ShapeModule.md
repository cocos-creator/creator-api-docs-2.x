## `ShapeModule` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


3D 粒子的发射形状模块



### 索引

##### 属性（properties）

  - [`enable`](#enable) `Boolean` 是否启用
  - [`shapeType`](#shapetype) `ShapeType` 粒子发射器类型。
  - [`emitFrom`](#emitfrom) `EmitLocation` 粒子从发射器哪个部位发射。
  - [`radius`](#radius) `Number` 粒子发射器半径。
  - [`radiusThickness`](#radiusthickness) `Number` - 0 ~ 1 之间表示在中心到表面之间发射。
  - [`angle`](#angle) `Number` 圆锥的轴与母线的夹角<bg>。
  - [`arc`](#arc) `Number` 粒子发射器在一个扇形范围内发射。
  - [`arcMode`](#arcmode) `ArcMode` 粒子在扇形范围内的发射方式。
  - [`arcSpread`](#arcspread) `Number` 控制可能产生粒子的弧周围的离散间隔。
  - [`arcSpeed`](#arcspeed) `CurveRange` 粒子沿圆周发射的速度。
  - [`length`](#length) `Number` 圆锥顶部截面距离底部的轴长<bg>。
  - [`boxThickness`](#boxthickness) `Vec3` 粒子发射器发射位置（针对 Box 类型的粒子发射器。
  - [`position`](#position) `Vec3` 粒子发射器位置。
  - [`rotation`](#rotation) `Vec3` 粒子发射器旋转角度。
  - [`scale`](#scale) `Vec3` 粒子发射器缩放比例。
  - [`alignToDirection`](#aligntodirection) `Boolean` 根据粒子的初始方向决定粒子的移动方向。
  - [`randomDirectionAmount`](#randomdirectionamount) `Number` 粒子生成方向随机设定。
  - [`sphericalDirectionAmount`](#sphericaldirectionamount) `Number` 表示当前发射方向与当前位置到结点中心连线方向的插值。





### Details


#### 属性（properties）


##### enable

> 是否启用

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:23](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L23) |



##### shapeType

> 粒子发射器类型。

| meta | description |
|------|-------------|
| 类型 | ShapeType |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:34](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L34) |



##### emitFrom

> 粒子从发射器哪个部位发射。

| meta | description |
|------|-------------|
| 类型 | EmitLocation |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:68](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L68) |



##### radius

> 粒子发射器半径。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:78](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L78) |



##### radiusThickness

> 粒子发射器发射位置（对 Box 类型的发射器无效）：<bg>
- 0 表示从表面发射；
- 1 表示从中心发射；
- 0 ~ 1 之间表示在中心到表面之间发射。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:86](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L86) |



##### angle

> 圆锥的轴与母线的夹角<bg>。
决定圆锥发射器的开合程度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:103](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L103) |



##### arc

> 粒子发射器在一个扇形范围内发射。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:122](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L122) |



##### arcMode

> 粒子在扇形范围内的发射方式。

| meta | description |
|------|-------------|
| 类型 | ArcMode |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:136](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L136) |



##### arcSpread

> 控制可能产生粒子的弧周围的离散间隔。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:146](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L146) |



##### arcSpeed

> 粒子沿圆周发射的速度。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:154](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L154) |



##### length

> 圆锥顶部截面距离底部的轴长<bg>。
决定圆锥发射器的高度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:164](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L164) |



##### boxThickness

> 粒子发射器发射位置（针对 Box 类型的粒子发射器。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:174](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L174) |



##### position

> 粒子发射器位置。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:185](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L185) |



##### rotation

> 粒子发射器旋转角度。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:202](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L202) |



##### scale

> 粒子发射器缩放比例。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:219](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L219) |



##### alignToDirection

> 根据粒子的初始方向决定粒子的移动方向。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:233](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L233) |



##### randomDirectionAmount

> 粒子生成方向随机设定。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:241](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L241) |



##### sphericalDirectionAmount

> 表示当前发射方向与当前位置到结点中心连线方向的插值。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/emitter/shape-module.ts:249](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/3d/particle/emitter/shape-module.ts#L249) |






