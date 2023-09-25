## `visibleRect` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
it should represent the same rect as cc.view.getViewportRect()



### 索引

##### 属性（properties）

  - [`topLeft`](#topleft) `Vec2` Top left coordinate of the screen related to the game scene.
  - [`topRight`](#topright) `Vec2` Top right coordinate of the screen related to the game scene.
  - [`top`](#top) `Vec2` Top center coordinate of the screen related to the game scene.
  - [`bottomLeft`](#bottomleft) `Vec2` Bottom left coordinate of the screen related to the game scene.
  - [`bottomRight`](#bottomright) `Vec2` Bottom right coordinate of the screen related to the game scene.
  - [`bottom`](#bottom) `Vec2` Bottom center coordinate of the screen related to the game scene.
  - [`center`](#center) `Vec2` Center coordinate of the screen related to the game scene.
  - [`left`](#left) `Vec2` Left center coordinate of the screen related to the game scene.
  - [`right`](#right) `Vec2` Right center coordinate of the screen related to the game scene.
  - [`width`](#width) `Number` Width of the screen.
  - [`height`](#height) `Number` Height of the screen.



##### 方法

  - [`init`](#init) initialize



### Details


#### 属性（properties）


##### topLeft

> Top left coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:95](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L95) |



##### topRight

> Top right coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:101](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L101) |



##### top

> Top center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:107](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L107) |



##### bottomLeft

> Bottom left coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:113](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L113) |



##### bottomRight

> Bottom right coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:119](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L119) |



##### bottom

> Bottom center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:125](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L125) |



##### center

> Center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:131](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L131) |



##### left

> Left center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:137](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L137) |



##### right

> Right center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:143](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L143) |



##### width

> Width of the screen.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:149](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L149) |



##### height

> Height of the screen.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:155](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L155) |






<!-- Method Block -->
#### 方法


##### init

initialize

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCVisibleRect.js:50](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCVisibleRect.js#L50) |

###### 参数列表
- `visibleRect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 



