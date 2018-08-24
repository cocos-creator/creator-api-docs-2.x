## `visibleRect` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
it should represent the same rect as cc.view.getViewportRect()


### Index

##### Properties

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



##### Methods

  - [`init`](#init) initialize



### Details


#### Properties


##### topLeft

> Top left coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:94](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L94) |



##### topRight

> Top right coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:99](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L99) |



##### top

> Top center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:104](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L104) |



##### bottomLeft

> Bottom left coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:109](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L109) |



##### bottomRight

> Bottom right coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L114) |



##### bottom

> Bottom center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:119](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L119) |



##### center

> Center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:124](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L124) |



##### left

> Left center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:129](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L129) |



##### right

> Right center coordinate of the screen related to the game scene.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L134) |



##### width

> Width of the screen.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:139](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L139) |



##### height

> Height of the screen.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:144](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L144) |






<!-- Method Block -->
#### Methods


##### init

initialize

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCVisibleRect.js:50](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCVisibleRect.js#L50) |

###### Parameters
- `visibleRect` <a href="../classes/Rect.html" class="crosslink">Rect</a> 



