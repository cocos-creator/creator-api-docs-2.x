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

### Details


##### PASSWORD

> Indicates that the text entered is confidential data that should be
obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCEditBox.js:117](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/components/CCEditBox.js#L117) |



##### SENSITIVE

> Indicates that the text entered is sensitive data that the
implementation must never store into a dictionary or table for use
in predictive, auto-completing, or other accelerated input schemes.
A credit card number is an example of sensitive data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCEditBox.js:125](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/components/CCEditBox.js#L125) |



##### INITIAL_CAPS_WORD

> This flag is a hint to the implementation that during text editing,
the initial letter of each word should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCEditBox.js:136](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/components/CCEditBox.js#L136) |



##### INITIAL_CAPS_SENTENCE

> This flag is a hint to the implementation that during text editing,
the initial letter of each sentence should be capitalized.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCEditBox.js:144](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/components/CCEditBox.js#L144) |



##### INITIAL_CAPS_ALL_CHARACTERS

> Capitalize all characters automatically.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCEditBox.js:152](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/components/CCEditBox.js#L152) |


