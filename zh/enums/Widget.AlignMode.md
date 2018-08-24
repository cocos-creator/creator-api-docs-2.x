### `Widget.AlignMode` 枚举



模块: [cc](../modules/cc.md)


Widget 的对齐模式，表示 Widget 应该何时刷新。


### 索引
  - `ONCE`
  - `ON_WINDOW_RESIZE`
  - `ALWAYS`

### Details


##### ONCE

> 仅在 Widget 第一次激活时对齐一次，便于脚本或动画继续控制当前节点。
开启后会在 onEnable 时所在的那一帧结束前对齐一次，然后立刻禁用该 Widget。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCWidget.js:37](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L37) |



##### ON_WINDOW_RESIZE

> 一开始会像 ONCE 一样对齐一次，之后每当窗口大小改变时还会重新对齐。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCWidget.js:48](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L48) |



##### ALWAYS

> 始终保持对齐。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCWidget.js:53](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/CCWidget.js#L53) |


