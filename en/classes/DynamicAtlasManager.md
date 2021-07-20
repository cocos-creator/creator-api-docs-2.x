## `DynamicAtlasManager` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Manage Dynamic Atlas Manager. Dynamic Atlas Manager is used for merging textures at runtime, see [Dynamic Atlas](https://docs.cocos.com/creator/manual/en/advanced-topics/dynamic-atlas.html) for details.



### Index

##### Properties

  - [`enabled`](#enabled) `Boolean` Enable or disable the dynamic atlas, see [Dynamic Atlas](https://docs.cocos.com/creator/manual/en/advanced-topics/dynamic-atlas.html) for details.
  - [`maxAtlasCount`](#maxatlascount) `Number` The maximum number of atlas that can be created.
  - [`atlasCount`](#atlascount) `Number` Get the current created atlas count.
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

> Enable or disable the dynamic atlas, see [Dynamic Atlas](https://docs.cocos.com/creator/manual/en/advanced-topics/dynamic-atlas.html) for details.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:39](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L39) |



##### maxAtlasCount

> The maximum number of atlas that can be created.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:62](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L62) |



##### atlasCount

> Get the current created atlas count.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:75](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L75) |



##### textureBleeding

> Is enable textureBleeding.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:85](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L85) |



##### textureSize

> The size of the atlas that was created

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:99](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L99) |



##### maxFrameSize

> The maximum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:112](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L112) |



##### minFrameSize

> The minimum size of the picture that can be added to the atlas.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:125](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L125) |






<!-- Method Block -->
#### Methods


##### insertSpriteFrame

Append a sprite frame into the dynamic atlas.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:133](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L133) |

###### Parameters
- `spriteFrame` <a href="../classes/SpriteFrame.html" class="crosslink">SpriteFrame</a> 


##### reset

Resets all dynamic atlas, and the existing ones will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:159](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L159) |



##### showDebug

Displays all the dynamic atlas in the current scene, which you can use to view the current atlas state.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> 
| Defined in | [cocos2d/core/renderer/utils/dynamic-atlas/manager.js:193](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/renderer/utils/dynamic-atlas/manager.js#L193) |

###### Parameters
- `show` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



