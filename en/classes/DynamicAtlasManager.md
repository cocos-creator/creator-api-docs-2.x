## `DynamicAtlasManager` Class



Module: [cc.primitive](../modules/cc.primitive.md)
Parent Module: [cc](../modules/cc.md)


Manager the dynamic atlas.



### Index

##### Properties

  - [`enabled`](#enabled) `Boolean` Enabled or Disabled dynamic atlas.
  - [`maxAtlasCount`](#maxatlascount) `Number` The maximum number of atlas that can be created.
  - [`textureBleeding`](#texturebleeding) `Boolean` Is enable textureBleeding.
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
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:41](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L41) |



##### maxAtlasCount

> The maximum number of atlas that can be created.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:64](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L64) |



##### textureBleeding

> Is enable textureBleeding.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:77](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L77) |



##### textureSize

> The size of the atlas that was created

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:91](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L91) |



##### maxFrameSize

> The maximum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:104](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L104) |



##### minFrameSize

> The minimum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:117](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L117) |






<!-- Method Block -->
#### Methods


##### insertSpriteFrame

Append a sprite frame into the dynamic atlas.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:130](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L130) |

###### Parameters
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

Resets all dynamic atlas, and the existing ones will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:156](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L156) |



##### showDebug

Displays all the dynamic atlas in the current scene, which you can use to view the current atlas state.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:180](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L180) |

###### Parameters
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



