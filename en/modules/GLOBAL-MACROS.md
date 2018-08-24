
## `GLOBAL-MACROS` Module






Here are some of the macro used to determine the execution environment, these macros are global variables, can be accessed directly.<br>
When the project is built, these macros will be preprocessed and discard unreachable code based on the built platform, for example:

    if (CC_DEBUG) {
        cc.log('debug');
    }
    else {
        cc.log('release');
    }

After build will become:

    cc.log('release');

<br>
To determine whether the script is running on the specified platform, you can use the following expression:

    {
        "editor":  CC_EDITOR,
        "editor or preview":  CC_DEV,
        "editor or preview or build in debug mode":  CC_DEBUG,
        "web preview":  CC_PREVIEW && !CC_JSB,
        "simulator preview":  CC_PREVIEW && CC_JSB,
        "build in debug mode":  CC_BUILD && CC_DEBUG,
        "build in release mode":  CC_BUILD && !CC_DEBUG,
    }





### Index

##### Properties

  - [`CC_EDITOR`](#cceditor) `Boolean` Running in the editor.
  - [`CC_PREVIEW`](#ccpreview) `Boolean` Preview in browser or simulator.
  - [`CC_DEV`](#ccdev) `Boolean` Running in the editor or preview.
  - [`CC_DEBUG`](#ccdebug) `Boolean` Running in the editor or preview, or build in debug mode.
  - [`CC_BUILD`](#ccbuild) `Boolean` Running in published project.
  - [`CC_JSB`](#ccjsb) `Boolean` Running in native platform (mobile app, desktop app, or simulator).
  - [`CC_TEST`](#cctest) `Boolean` Running in the engine's unit test.
  - [`CC_WECHATGAME`](#ccwechatgame) `Boolean` Running in the Wechat's mini game.
  - [`CC_QQPLAY`](#ccqqplay) `Boolean` Running in the bricks.
  - [`CC_RUNTIME`](#ccruntime) `Boolean` Running in runtime environments.





### Details


#### Properties


##### CC_EDITOR

> Running in the editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:90](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L90) |



##### CC_PREVIEW

> Preview in browser or simulator.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:93](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L93) |



##### CC_DEV

> Running in the editor or preview.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:96](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L96) |



##### CC_DEBUG

> Running in the editor or preview, or build in debug mode.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:99](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L99) |



##### CC_BUILD

> Running in published project.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:102](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L102) |



##### CC_JSB

> Running in native platform (mobile app, desktop app, or simulator).

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:105](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L105) |



##### CC_TEST

> Running in the engine's unit test.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:108](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L108) |



##### CC_WECHATGAME

> Running in the Wechat's mini game.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:111](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L111) |



##### CC_QQPLAY

> Running in the bricks.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L114) |



##### CC_RUNTIME

> Running in runtime environments.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [predefine.js:117](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/predefine.js#L117) |






