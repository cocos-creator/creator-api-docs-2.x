## `sp.AttachUtil` Class



Module: [sp](../modules/sp.md)


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
| Defined in | [extensions/spine/AttachUtil.js:121](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L121) |



##### getAttachedNodes

Gets attached node which you want.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| Defined in | [extensions/spine/AttachUtil.js:131](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L131) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAttachedNodes

Destroy attached node which you want.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/AttachUtil.js:178](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L178) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### generateAttachedNodes

Traverse all bones to generate the minimum node tree containing the given bone names, NOTE that make sure the skeleton has initialized before calling this interface.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| Defined in | [extensions/spine/AttachUtil.js:213](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L213) |

###### Parameters
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAllAttachedNodes

Destroy all attached node.

| meta | description |
|------|-------------|
| Defined in | [extensions/spine/AttachUtil.js:260](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L260) |



##### generateAllAttachedNodes

Traverse all bones to generate a tree containing all bones nodes, NOTE that make sure the skeleton has initialized before calling this interface.

| meta | description |
|------|-------------|
| Returns | cc.Node 
| Defined in | [extensions/spine/AttachUtil.js:279](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/extensions/spine/AttachUtil.js#L279) |




