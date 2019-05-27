## `DynamicAtlasManager` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Manager the dynamic atlas.



### Index

##### Properties

  - [`enabled`](#enabled) `Boolean` Enabled or Disabled dynamic atlas.
  - [`maxAtlasCount`](#maxatlascount) `Number` The maximum number of atlas that can be created.
  - [`textureSize`](#texturesize) `Number` The size of the atlas that was created
  - [`maxFrameSize`](#maxframesize) `Number` The maximum size of the picture that can be added to the atlas.



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
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:40](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L40) |



##### maxAtlasCount

> The maximum number of atlas that can be created.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:63](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L63) |



##### textureSize

> The size of the atlas that was created

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:76](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L76) |



##### maxFrameSize

> The maximum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:89](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L89) |






<!-- Method Block -->
#### Methods


##### insertSpriteFrame

Append a sprite frame into the dynamic atlas.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:102](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L102) |

###### Parameters
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

Resets all dynamic atlas, and the existing ones will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:135](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L135) |



##### showDebug

Displays all the dynamic atlas in the current scene, which you can use to view the current atlas state.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:148](https://github.com/cocos-creator/engine/blob/8bf4522a6d43b53258219983aabd728909ce24ca/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L148) |

###### Parameters
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



