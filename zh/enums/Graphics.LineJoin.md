### `Graphics.LineJoin` 枚举



模块: [cc](../modules/cc.md)


线段拐角属性


### 索引
  - `BEVEL`
  - `ROUND`
  - `MITER`

### Details


##### BEVEL

> 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js:65](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js#L65) |



##### ROUND

> 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js:72](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js#L72) |



##### MITER

> 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js:79](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/graphics/types.js#L79) |


