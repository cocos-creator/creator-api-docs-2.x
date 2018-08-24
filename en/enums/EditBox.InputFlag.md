### `EditBox.InputFlag` Enum



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Enum for the EditBox's input flags


### Index
  - `PASSWORD`
  - `SENSITIVE`
  - `INITIAL_CAPS_WORD`
  - `INITIAL_CAPS_SENTENCE`
  - `INITIAL_CAPS_ALL_CHARACTERS`
  - `DEFAULT`

### Details


##### PASSWORD

> Indicates that the text entered is confidential data that should be
obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L134) |



##### SENSITIVE

> Indicates that the text entered is sensitive data that the
implementation must never store into a dictionary or table for use
in predictive, auto-completing, or other accelerated input schemes.
A credit card number is an example of sensitive data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:143](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L143) |



##### INITIAL_CAPS_WORD

> This flag is a hint to the implementation that during text editing,
the initial letter of each word should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:155](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L155) |



##### INITIAL_CAPS_SENTENCE

> This flag is a hint to the implementation that during text editing,
the initial letter of each sentence should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:164](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L164) |



##### INITIAL_CAPS_ALL_CHARACTERS

> Capitalize all characters automatically.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:173](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L173) |



##### DEFAULT

> Don't do anything with the input text.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/editbox/types.js:179](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/components/editbox/types.js#L179) |


