## `pool` Class



Module: [cc](../modules/cc.md)


Deprecated: !#en Please use cc.NodePool instead !#zh 请使用 cc.NodePool 代替


Attention: In creator, it's strongly not recommended to use cc.pool to manager cc.Node.
 We provided <a href="../classes/NodePool.html" class="crosslink">cc.NodePool</a> instead.

 cc.pool is a singleton object serves as an object cache pool.<br/>
 It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>

### Index



##### Methods

  - [`putInPool`](#putinpool) Put the obj in pool.
  - [`hasObject`](#hasobject) Check if this kind of obj has already in pool.
  - [`removeObject`](#removeobject) Remove the obj if you want to delete it.
  - [`getFromPool`](#getfrompool) Get the obj from pool.
  - [`drainAllPools`](#drainallpools) Remove all objs in pool and reset the pool.



### Details




<!-- Method Block -->
#### Methods


##### putInPool

Put the obj in pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:60](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L60) |

###### Parameters
- obj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The need put in pool object.

##### Example

```js
---------------------------------
var sp = new _ccsg.Sprite("a.png");
this.addChild(sp);
cc.pool.putInPool(sp);
cc.pool.getFromPool(_ccsg.Sprite, "a.png");

```

##### hasObject

Check if this kind of obj has already in pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:82](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L82) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- objClass <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The check object class.


##### removeObject

Remove the obj if you want to delete it.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:98](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L98) |



##### getFromPool

Get the obj from pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:119](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L119) |
| Return 		 | Any 



##### drainAllPools

Remove all objs in pool and reset the pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js:143](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCPool.js#L143) |




core/platform/js.js#L884) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- params Any parameters to used to initialize the object


##### _get

Get an object from pool, if no available object in the pool, null will be returned.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:904](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L904) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; Null 



##### put

Put an object into the pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:922](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L922) |



##### resize

Resize the pool.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js:938](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/js.js#L938) |




