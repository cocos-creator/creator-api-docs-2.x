## `dragonBones.AttachUtil` Class



Module: [dragonBones](../modules/dragonBones.md)


Attach node tool



### Index



##### Methods

  - [`getAttachedRootNode`](#getattachedrootnode) Gets attached root node.
  - [`getAttachedNodes`](#getattachednodes) Gets attached node which you want.
  - [`destroyAttachedNodes`](#destroyattachednodes) Destroy attached node which you want.
  - [`generateAttachedNodes`](#generateattachednodes) Traverse all bones to generate the minimum node tree containing the given bone names, NOTE that make sure the skeleton has initialized before calling this interface.
  - [`destroyAllAttachedNodes`](#destroyallattachednodes) Destroy all attached node.
  - [`generateAllAttachedNodes`](#generateallattachednodes) Traverse all bones to generate a tree containing all bones nodes, NOTE that make sure the skeleton has initialized before calling this interface.



### Details




<!-- Method Block -->
#### Methods


##### getAttachedRootNode

Gets attached root node.

| meta | description |
|------|-------------|
| Returns | cc.Node 
| Defined in | [extensions/dragonbones/AttachUtil.js:120](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L120) |



##### getAttachedNodes

Gets attached node which you want.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| Defined in | [extensions/dragonbones/AttachUtil.js:130](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L130) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAttachedNodes

Destroy attached node which you want.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/AttachUtil.js:177](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L177) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### generateAttachedNodes

Traverse all bones to generate the minimum node tree containing the given bone names, NOTE that make sure the skeleton has initialized before calling this interface.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| Defined in | [extensions/dragonbones/AttachUtil.js:212](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L212) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAllAttachedNodes

Destroy all attached node.

| meta | description |
|------|-------------|
| Defined in | [extensions/dragonbones/AttachUtil.js:286](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L286) |



##### generateAllAttachedNodes

Traverse all bones to generate a tree containing all bones nodes, NOTE that make sure the skeleton has initialized before calling this interface.

| meta | description |
|------|-------------|
| Returns | cc.Node 
| Defined in | [extensions/dragonbones/AttachUtil.js:305](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/extensions/dragonbones/AttachUtil.js#L305) |




