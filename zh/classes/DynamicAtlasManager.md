## `DynamicAtlasManager` 类型



模块: [cc.primitive](../modules/cc.primitive.md)
父模块: [cc](../modules/cc.md)


管理动态图集。



### 索引

##### 属性（properties）

  - [`enabled`](#enabled) `Boolean` 开启或者关闭动态图集。
  - [`maxAtlasCount`](#maxatlascount) `Number` 可以创建的最大图集数量。
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

> 开启或者关闭动态图集。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:41](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L41) |



##### maxAtlasCount

> 可以创建的最大图集数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:64](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L64) |



##### textureBleeding

> 是否开启 textureBleeding

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:77](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L77) |



##### textureSize

> 创建的图集的宽高

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:91](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L91) |



##### maxFrameSize

> 可以添加进图集的图片的最大尺寸。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:104](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L104) |



##### minFrameSize

> 可以添加进图集的图片的最小尺寸。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:117](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L117) |






<!-- Method Block -->
#### 方法


##### insertSpriteFrame

添加碎图进入动态图集。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:130](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L130) |

###### 参数列表
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

重置所有动态图集，已有的动态图集会被销毁。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:156](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L156) |



##### showDebug

在当前场景中显示所有动态图集，可以用来查看当前的合图状态。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:180](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L180) |

###### 参数列表
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



