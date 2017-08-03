### `EditBox.InputFlag` Enum



Module: [cc](../modules/cc.md)




定义了一些用于设置文本显示和文本格式化的标志位。

### Index

##### Properties

  - `PASSWORD`
  - `SENSITIVE`
  - `INITIAL_CAPS_WORD`
  - `INITIAL_CAPS_SENTENCE`
  - `INITIAL_CAPS_ALL_CHARACTERS`

### Details

#### Properties


##### PASSWORD

> 表明输入的文本是保密的数据，任何时候都应该隐藏起来，它隐含了 EDIT_BOX_INPUT_FLAG_SENSITIVE。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:116](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L116) |



##### SENSITIVE

> 表明输入的文本是敏感数据，它禁止存储到字典或表里面，也不能用来自动补全和提示用户输入。
一个信用卡号码就是一个敏感数据的例子。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L124) |



##### INITIAL_CAPS_WORD

> 这个标志用来指定在文本编辑的时候，是否把每一个单词的首字母大写。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:135](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L135) |



##### INITIAL_CAPS_SENTENCE

> 这个标志用来指定在文本编辑是否每个句子的首字母大写。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:143](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L143) |



##### INITIAL_CAPS_ALL_CHARACTERS

> 自动把输入的所有字符大写。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L151) |


