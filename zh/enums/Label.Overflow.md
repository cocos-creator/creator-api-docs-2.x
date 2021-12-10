### `Label.Overflow` 枚举



模块: [cc](../modules/cc.md)


Overflow 类型


### 索引
  - `NONE`
  - `CLAMP`
  - `SHRINK`
  - `RESIZE_HEIGHT`

### Details


##### NONE

> 不做任何限制。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:86](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/components/CCLabel.js#L86) |



##### CLAMP

> CLAMP 模式中，当文本内容超出边界框时，多余的会被截断。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:91](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/components/CCLabel.js#L91) |



##### SHRINK

> SHRINK 模式，字体大小会动态变化，以适应内容大小。这个模式在文本刷新的时候可能会占用较多 CPU 资源。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:96](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/components/CCLabel.js#L96) |



##### RESIZE_HEIGHT

> 在 RESIZE_HEIGHT 模式下，只能更改文本的宽度，高度是自动改变的。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:101](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/components/CCLabel.js#L101) |


