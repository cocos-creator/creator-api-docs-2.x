
## `GLOBAL-MACROS` 模块






这里是一些用来判断执行环境的宏，这些宏都是全局变量，直接访问即可。<br>
在项目构建时，这些宏将会被预处理并根据构建的平台剔除不需要的代码，例如

    if (CC_DEBUG) {
        cc.log('debug');
    }
    else {
        cc.log('release');
    }

在构建后会只剩下

    cc.log('release');

（好棒棒）<br>
<br>
如需判断脚本是否运行于指定平台，可以用如下表达式：

    {
        "编辑器":  CC_EDITOR,
        "编辑器 或 预览":  CC_DEV,
        "编辑器 或 预览 或 构建调试":  CC_DEBUG,
        "网页预览":  CC_PREVIEW && !CC_JSB,
        "模拟器预览":  CC_PREVIEW && CC_JSB,
        "构建调试":  CC_BUILD && CC_DEBUG,
        "构建发行":  CC_BUILD && !CC_DEBUG,
    }





### 索引

##### 属性（properties）

  - [`CC_EDITOR`](#cceditor) `Boolean` Running in the editor.
  - [`CC_PREVIEW`](#ccpreview) `Boolean` Preview in browser or simulator.
  - [`CC_DEV`](#ccdev) `Boolean` Running in the editor or preview.
  - [`CC_DEBUG`](#ccdebug) `Boolean` Running in the editor or preview, or build in debug mode.
  - [`CC_BUILD`](#ccbuild) `Boolean` Running in published project.
  - [`CC_JSB`](#ccjsb) `Boolean` Running in native platform (mobile app, desktop app, or simulator).
  - [`CC_TEST`](#cctest) `Boolean` Running in the engine's unit test.
  - [`CC_WECHATGAME`](#ccwechatgame) `Boolean` Running in the Wechat's mini game.
  - [`CC_QQPLAY`](#ccqqplay) `Boolean` Running in the bricks.





### Details


#### 属性（properties）


##### CC_EDITOR

> Running in the editor.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:91](https:/github.com/cocos-creator/engine/blob/master/index.js#L91) |



##### CC_PREVIEW

> Preview in browser or simulator.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:94](https:/github.com/cocos-creator/engine/blob/master/index.js#L94) |



##### CC_DEV

> Running in the editor or preview.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:97](https:/github.com/cocos-creator/engine/blob/master/index.js#L97) |



##### CC_DEBUG

> Running in the editor or preview, or build in debug mode.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:100](https:/github.com/cocos-creator/engine/blob/master/index.js#L100) |



##### CC_BUILD

> Running in published project.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:103](https:/github.com/cocos-creator/engine/blob/master/index.js#L103) |



##### CC_JSB

> Running in native platform (mobile app, desktop app, or simulator).

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:106](https:/github.com/cocos-creator/engine/blob/master/index.js#L106) |



##### CC_TEST

> Running in the engine's unit test.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:109](https:/github.com/cocos-creator/engine/blob/master/index.js#L109) |



##### CC_WECHATGAME

> Running in the Wechat's mini game.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:112](https:/github.com/cocos-creator/engine/blob/master/index.js#L112) |



##### CC_QQPLAY

> Running in the bricks.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/index.js:115](https:/github.com/cocos-creator/engine/blob/master/index.js#L115) |






