### `EditBox.InputFlag` 枚举



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


定义了一些用于设置文本显示和文本格式化的标志位。


### 索引
  - `PASSWORD`
  - `SENSITIVE`
  - `INITIAL_CAPS_WORD`
  - `INITIAL_CAPS_SENTENCE`
  - `INITIAL_CAPS_ALL_CHARACTERS`
  - `DEFAULT`

### Details


##### PASSWORD

> 表明输入的文本是保密的数据，任何时候都应该隐藏起来，它隐含了 EDIT_BOX_INPUT_FLAG_SENSITIVE。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L134) |



##### SENSITIVE

> 表明输入的文本是敏感数据，它禁止存储到字典或表里面，也不能用来自动补全和提示用户输入。
一个信用卡号码就是一个敏感数据的例子。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:143](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L143) |



##### INITIAL_CAPS_WORD

> 这个标志用来指定在文本编辑的时候，是否把每一个单词的首字母大写。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:155](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L155) |



##### INITIAL_CAPS_SENTENCE

> 这个标志用来指定在文本编辑是否每个句子的首字母大写。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:164](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L164) |



##### INITIAL_CAPS_ALL_CHARACTERS

> 自动把输入的所有字符大写。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:173](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L173) |



##### DEFAULT

> Don't do anything with the input text.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/editbox/types.js:179](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L179) |


