## `pool` 类型



模块: [cc](../modules/cc.md)

废弃: !#en Please use cc.NodePool instead !#zh 请使用 cc.NodePool 代替

首先请注意，在 Creator 中我们强烈不建议使用 cc.pool 来管理 cc.Node 节点对象，请使用 <a href="../classes/NodePool.html" class="crosslink">cc.NodePool</a> 代替
因为 cc.pool 是面向类来设计的，而 cc.Node 中使用 Component 来进行组合，它的类永远都一样，实际却千差万别。

cc.pool 是一个单例对象，用作为对象缓存池。<br/>
它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁<br/>


### 索引



##### 方法

  - [`putInPool`](#putinpool) 加入对象到对象池中。
  - [`hasObject`](#hasobject) 检查对象池中是否有指定对象的存在。
  - [`removeObject`](#removeobject) 移除在对象池中指定的对象。
  - [`getFromPool`](#getfrompool) 获取对象池中的指定对象。
  - [`drainAllPools`](#drainallpools) 移除对象池中的所有对象，并且重置对象池。



### Details




<!-- Method Block -->
#### 方法


##### putInPool

加入对象到对象池中。

| meta | description |
|------|-------------|
| 定义于 | [extensions/ccpool/CCPool.js:61](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/extensions/ccpool/CCPool.js#L61) |

###### 参数列表
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The need put in pool object.

##### 示例

```js
---------------------------------
var sp = new _ccsg.Sprite("a.png");
this.addChild(sp);
cc.pool.putInPool(sp);
cc.pool.getFromPool(_ccsg.Sprite, "a.png");

```

##### hasObject

检查对象池中是否有指定对象的存在。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [extensions/ccpool/CCPool.js:81](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/extensions/ccpool/CCPool.js#L81) |

###### 参数列表
- `objClass` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The check object class.


##### removeObject

移除在对象池中指定的对象。

| meta | description |
|------|-------------|
| 定义于 | [extensions/ccpool/CCPool.js:97](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/extensions/ccpool/CCPool.js#L97) |



##### getFromPool

获取对象池中的指定对象。

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [extensions/ccpool/CCPool.js:116](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/extensions/ccpool/CCPool.js#L116) |



##### drainAllPools

移除对象池中的所有对象，并且重置对象池。

| meta | description |
|------|-------------|
| 定义于 | [extensions/ccpool/CCPool.js:138](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/extensions/ccpool/CCPool.js#L138) |




iption |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; Null 
| 定义于 | [cocos2d/core/platform/js.js:907](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/js.js#L907) |



##### put

向对象池返还一个不再需要的对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/js.js:925](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/js.js#L925) |



##### resize

设置对象池容量。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/js.js:941](https://github.com/cocos-creator/engine/blob/d6ec4c03aa86f40af14d21ef9f059fed5e540c58/cocos2d/core/platform/js.js#L941) |




