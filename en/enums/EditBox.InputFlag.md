### `EditBox.InputFlag` Enum



Module: [cc](../modules/cc.md)


Enum for the EditBox's input flags


### Index
  - `PASSWORD`
  - `SENSITIVE`
  - `INITIAL_CAPS_WORD`
  - `INITIAL_CAPS_SENTENCE`
  - `INITIAL_CAPS_ALL_CHARACTERS`

### Details


##### PASSWORD

> Indicates that the text entered is confidential data that should be
obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:116](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L116) |



##### SENSITIVE

> Indicates that the text entered is sensitive data that the
implementation must never store into a dictionary or table for use
in predictive, auto-completing, or other accelerated input schemes.
A credit card number is an example of sensitive data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:124](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L124) |



##### INITIAL_CAPS_WORD

> This flag is a hint to the implementation that during text editing,
the initial letter of each word should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:135](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L135) |



##### INITIAL_CAPS_SENTENCE

> This flag is a hint to the implementation that during text editing,
the initial letter of each sentence should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:143](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L143) |



##### INITIAL_CAPS_ALL_CHARACTERS

> Capitalize all characters automatically.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/components/CCEditBox.js#L151) |


