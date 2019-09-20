## `DynamicAtlasManager` Class



Module: [primitive](../modules/primitive.md)
Parent Module: [cc](../modules/cc.md)


Manager the dynamic atlas.



### Index

##### Properties

  - [`enabled`](#enabled) `Boolean` Enabled or Disabled dynamic atlas.
  - [`maxAtlasCount`](#maxatlascount) `Number` The maximum number of atlas that can be created.
  - [`textureSize`](#texturesize) `Number` The size of the atlas that was created
  - [`maxFrameSize`](#maxframesize) `Number` The maximum size of the picture that can be added to the atlas.
  - [`minFrameSize`](#minframesize) `Number` The minimum size of the picture that can be added to the atlas.



##### Methods

  - [`insertSpriteFrame`](#insertspriteframe) Append a sprite frame into the dynamic atlas.
  - [`reset`](#reset) Resets all dynamic atlas, and the existing ones will be destroyed.
  - [`showDebug`](#showdebug) Displays all the dynamic atlas in the current scene, which you can use to view the current atlas state.



### Details


#### Properties


##### enabled

> Enabled or Disabled dynamic atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:41](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L41) |



##### maxAtlasCount

> The maximum number of atlas that can be created.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:64](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L64) |



##### textureSize

> The size of the atlas that was created

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:77](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L77) |



##### maxFrameSize

> The maximum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:90](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L90) |



##### minFrameSize

> The minimum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:103](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L103) |






<!-- Method Block -->
#### Methods


##### insertSpriteFrame

Append a sprite frame into the dynamic atlas.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:116](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L116) |

###### Parameters
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

Resets all dynamic atlas, and the existing ones will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:142](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L142) |



##### showDebug

Displays all the dynamic atlas in the current scene, which you can use to view the current atlas state.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:166](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L166) |

###### Parameters
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



