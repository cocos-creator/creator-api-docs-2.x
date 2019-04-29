## `pool` Class



Module: [cc](../modules/cc.md)

deprecated: !#en Please use cc.NodePool instead !#zh 请使用 cc.NodePool 代替

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
| Defined in | [extensions/ccpool/CCPool.js:61](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/extensions/ccpool/CCPool.js#L61) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The need put in pool object.

##### Examples

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
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [extensions/ccpool/CCPool.js:81](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/extensions/ccpool/CCPool.js#L81) |

###### Parameters
- `objClass` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The check object class.


##### removeObject

Remove the obj if you want to delete it.

| meta | description |
|------|-------------|
| Defined in | [extensions/ccpool/CCPool.js:97](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/extensions/ccpool/CCPool.js#L97) |



##### getFromPool

Get the obj from pool.

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [extensions/ccpool/CCPool.js:116](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/extensions/ccpool/CCPool.js#L116) |



##### drainAllPools

Remove all objs in pool and reset the pool.

| meta | description |
|------|-------------|
| Defined in | [extensions/ccpool/CCPool.js:138](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/extensions/ccpool/CCPool.js#L138) |




o used to initialize the object


##### _get

Get an object from pool, if no available object in the pool, null will be returned.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; Null 
| Defined in | [cocos2d/core/platform/js.js:907](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/js.js#L907) |



##### put

Put an object into the pool.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:925](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/js.js#L925) |



##### resize

Resize the pool.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/js.js:941](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/platform/js.js#L941) |




