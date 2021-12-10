## `DynamicAtlasManager` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


管理动态图集。动态图集用于在运行时对贴图进行合并，详见 [动态合图](https://docs.cocos.com/creator/manual/zh/advanced-topics/dynamic-atlas.html)。



### 索引

##### 属性（properties）

  - [`enabled`](#enabled) `Boolean` 开启或者关闭动态图集，详见 [动态合图](https://docs.cocos.com/creator/manual/zh/advanced-topics/dynamic-atlas.html)。
  - [`maxAtlasCount`](#maxatlascount) `Number` 可以创建的最大图集数量。
  - [`atlasCount`](#atlascount) `Number` 获取当前已经创建的图集数量。
  - [`textureBleeding`](#texturebleeding) `Boolean` 是否开启 textureBleeding
  - [`textureSize`](#texturesize) `Number` 创建的图集的宽高
  - [`maxFrameSize`](#maxframesize) `Number` 可以添加进图集的图片的最大尺寸。
  - [`minFrameSize`](#minframesize) `Number` 可以添加进图集的图片的最小尺寸。



##### 方法

  - [`insertSpriteFrame`](#insertspriteframe) 添加碎图进入动态图集。
  - [`reset`](#reset) 重置所有动态图集，已有的动态图集会被销毁。
  - [`showDebug`](#showdebug) 在当前场景中显示所有动态图集，可以用来查看当前的合图状态。



### Details


#### 属性（properties）


##### enabled

> 开启或者关闭动态图集，详见 [动态合图](https://docs.cocos.com/creator/manual/zh/advanced-topics/dynamic-atlas.html)。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:39](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L39) |



##### maxAtlasCount

> 可以创建的最大图集数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:62](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L62) |



##### atlasCount

> 获取当前已经创建的图集数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:75](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L75) |



##### textureBleeding

> 是否开启 textureBleeding

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:85](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L85) |



##### textureSize

> 创建的图集的宽高

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:99](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L99) |



##### maxFrameSize

> 可以添加进图集的图片的最大尺寸。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:112](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L112) |



##### minFrameSize

> 可以添加进图集的图片的最小尺寸。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:125](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L125) |






<!-- Method Block -->
#### 方法


##### insertSpriteFrame

添加碎图进入动态图集。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:133](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L133) |

###### 参数列表
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

重置所有动态图集，已有的动态图集会被销毁。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:159](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L159) |



##### showDebug

在当前场景中显示所有动态图集，可以用来查看当前的合图状态。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node</a> 
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:193](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L193) |

###### 参数列表
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



