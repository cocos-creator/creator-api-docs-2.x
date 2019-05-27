## `DynamicAtlasManager` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


管理动态图集。



### 索引

##### 属性（properties）

  - [`enabled`](#enabled) `Boolean` 开启或者关闭动态图集。
  - [`maxAtlasCount`](#maxatlascount) `Number` 可以创建的最大图集数量。
  - [`textureSize`](#texturesize) `Number` 创建的图集的宽高
  - [`maxFrameSize`](#maxframesize) `Number` 可以添加进图集的图片的最大尺寸。



##### 方法

  - [`insertSpriteFrame`](#insertspriteframe) 添加碎图进入动态图集。
  - [`reset`](#reset) 重置所有动态图集，已有的动态图集会被销毁。
  - [`showDebug`](#showdebug) 在当前场景中显示所有动态图集，可以用来查看当前的合图状态。



### Details


#### 属性（properties）


##### enabled

> 开启或者关闭动态图集。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:40](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L40) |



##### maxAtlasCount

> 可以创建的最大图集数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:63](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L63) |



##### textureSize

> 创建的图集的宽高

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:76](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L76) |



##### maxFrameSize

> 可以添加进图集的图片的最大尺寸。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:89](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L89) |






<!-- Method Block -->
#### 方法


##### insertSpriteFrame

添加碎图进入动态图集。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:102](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L102) |

###### 参数列表
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

重置所有动态图集，已有的动态图集会被销毁。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:135](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L135) |



##### showDebug

在当前场景中显示所有动态图集，可以用来查看当前的合图状态。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:148](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L148) |

###### 参数列表
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



