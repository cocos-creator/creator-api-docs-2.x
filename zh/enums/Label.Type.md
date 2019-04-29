### `Label.Type` 枚举



模块: [cc](../modules/cc.md)


Type 类型


### 索引
  - `TTF`
  - `BMFont`
  - `SystemFont`
  - `NONE`
  - `BITMAP`
  - `CHAR`

### Details


##### TTF

> TTF字体

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:118](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L118) |



##### BMFont

> 位图字体

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:123](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L123) |



##### SystemFont

> 系统字体

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:128](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L128) |



##### NONE

> 不做任何缓存。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:134](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L134) |



##### BITMAP

> BITMAP 模式，将 label 缓存成静态图像并加入到动态图集，以便进行批次合并，可与使用碎图的 Sprite 进行合批（注：动态图集在 Chrome 以及微信小游戏暂时关闭，该功能无效）。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:139](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L139) |



##### CHAR

> CHAR 模式，将文本拆分为字符，并将字符缓存到一张单独的大小为 2048*2048 的图集中进行重复使用，不再使用动态图集（注：当图集满时将不再进行缓存，暂时不支持 SHRINK 自适应文本尺寸（后续完善））。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCLabel.js:144](https://github.com/cocos-creator/engine/blob/18c4ff6051c255c06377a9b26bc00d4567180ae4/cocos2d/core/components/CCLabel.js#L144) |


