## `pool` Class



Module: [cc](../modules/cc.md)


Deprecated: !#en Please use cc.NodePool instead !#zh 请使用 cc.NodePool 代替


首先请注意，在 Creator 中我们强烈不建议使用 cc.pool 来管理 cc.Node 节点对象，请使用 <a href="../classes/NodePool.html" class="crosslink">cc.NodePool</a> 代替
因为 cc.pool 是面向类来设计的，而 cc.Node 中使用 Component 来进行组合，它的类永远都一样，实际却千差万别。

cc.pool 是一个单例对象，用作为对象缓存池。<br/>
它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁<br/>

### Index



##### Methods

  - [`putInPool`](#putinpool) 加入对象到对象池中。
  - [`hasObject`](#hasobject) 检查对象池中是否有指定对象的存在。
  - [`removeObject`](#removeobject) 移除在对象池中指定的对象。
  - [`getFromPool`](#getfrompool) 获取对象池中的指定对象。
  - [`drainAllPools`](#drainallpools) 移除对象池中的所有对象，并且重置对象池。



### Details




<!-- Method Block -->
#### Methods


##### putInPool

加入对象到对象池中。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:60](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L60) |

###### Parameters
- obj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The need put in pool object.

##### Example

```Not found for the example path: utils/api/engine/docs/extensions/ccpool/putInPool.js

##### hasObject

检查对象池中是否有指定对象的存在。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:82](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L82) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- objClass <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The check object class.


##### removeObject

移除在对象池中指定的对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:98](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L98) |



##### getFromPool

获取对象池中的指定对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:119](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L119) |
| Return 		 | Any 



##### drainAllPools

移除对象池中的所有对象，并且重置对象池。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:143](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L143) |




�池中的对象，如果对象池没有可用对象，则返回空。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:885](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L885) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | Null 



##### put

向对象池返还一个不再需要的对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:903](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L903) |



##### resize

设置对象池容量。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:919](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L919) |




