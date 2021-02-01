## `sp.AttachUtil` 类型



模块: [sp](../modules/sp.md)


挂点工具类



### 索引



##### 方法

  - [`getAttachedRootNode`](#getattachedrootnode) 获取挂接节点树的根节点
  - [`getAttachedNodes`](#getattachednodes) 获得对应的挂点
  - [`destroyAttachedNodes`](#destroyattachednodes) 销毁对应的挂点
  - [`generateAttachedNodes`](#generateattachednodes) 遍历所有插槽，生成包含所有给定插槽名称的最小节点树，注意，调用该接口前请确保骨骼动画已经初始化好。
  - [`destroyAllAttachedNodes`](#destroyallattachednodes) 销毁所有挂点
  - [`generateAllAttachedNodes`](#generateallattachednodes) 遍历所有插槽，生成包含所有插槽的节点树，注意，调用该接口前请确保骨骼动画已经初始化好。



### Details




<!-- Method Block -->
#### 方法


##### getAttachedRootNode

获取挂接节点树的根节点

| meta | description |
|------|-------------|
| 返回 | cc.Node 
| 定义于 | [extensions/spine/AttachUtil.js:121](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L121) |



##### getAttachedNodes

获得对应的挂点

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| 定义于 | [extensions/spine/AttachUtil.js:131](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L131) |

###### 参数列表
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAttachedNodes

销毁对应的挂点

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/AttachUtil.js:178](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L178) |

###### 参数列表
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### generateAttachedNodes

遍历所有插槽，生成包含所有给定插槽名称的最小节点树，注意，调用该接口前请确保骨骼动画已经初始化好。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Node.html" class="crosslink">Node[]</a> 
| 定义于 | [extensions/spine/AttachUtil.js:213](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L213) |

###### 参数列表
- `boneName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### destroyAllAttachedNodes

销毁所有挂点

| meta | description |
|------|-------------|
| 定义于 | [extensions/spine/AttachUtil.js:260](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L260) |



##### generateAllAttachedNodes

遍历所有插槽，生成包含所有插槽的节点树，注意，调用该接口前请确保骨骼动画已经初始化好。

| meta | description |
|------|-------------|
| 返回 | cc.Node 
| 定义于 | [extensions/spine/AttachUtil.js:279](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/extensions/spine/AttachUtil.js#L279) |




