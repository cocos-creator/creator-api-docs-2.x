### `Widget.AlignMode` Enum



Module: [cc](../modules/cc.md)


Enum for Widget's alignment mode, indicating when the widget should refresh.


### Index
  - `ONCE`
  - `ON_WINDOW_RESIZE`
  - `ALWAYS`

### Details


##### ONCE

> Only align once when the Widget is enabled for the first time.
This will allow the script or animation to continue controlling the current node.
It will only be aligned once before the end of frame when onEnable is called,
then immediately disables the Widget.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCWidget.js:37](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L37) |



##### ON_WINDOW_RESIZE

> Align first from the beginning as ONCE, and then realign it every time the window is resized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCWidget.js:48](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L48) |



##### ALWAYS

> Keep aligning all the way.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCWidget.js:53](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L53) |


