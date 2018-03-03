## `NodePool` Class



Module: [cc](../modules/cc.md)


cc.NodePool is the cache pool designed for node type.<br/>
 It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>

It's recommended to create cc.NodePool instances by node type, the type corresponds to node type in game design, not the class,
for example, a prefab is a specific node type. <br/>
When you create a node pool, you can pass a Component which contains `unuse`, `reuse` functions to control the content of node.<br/>

Some common use case is :<br/>
     1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
     2. Blocks in candy crash (massive creation and recreation)<br/>
     etc...


### Index

##### Properties

  - [`poolHandlerComp`](#poolhandlercomp) `Function|String` The pool handler component, it could be the class name or the constructor.



##### Methods

  - [`constructor`](#constructor) Constructor for creating a pool for a specific node template (usually a prefab). You can pass a component (type or name) argument for handling event for reusing and recycling node.
  - [`size`](#size) The current available size in the pool
  - [`clear`](#clear) Destroy all cached nodes in the pool
  - [`put`](#put) Put a new Node into the pool.
It will automatically remove the node from its parent without cleanup.
It will also invoke unuse method of the poolHandlerComp if exist.
  - [`get`](#get) Get a obj from pool, if no available object in pool, null will be returned.
This function will invoke the reuse function of poolHandlerComp if exist.



### Details


#### Properties


##### poolHandlerComp

> The pool handler component, it could be the class name or the constructor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:75](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L75) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor for creating a pool for a specific node template (usually a prefab). You can pass a component (type or name) argument for handling event for reusing and recycling node.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:56](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L56) |

###### Parameters
- `poolHandlerComp` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> !#en The constructor or the class name of the component to control the unuse/reuse logic. !#zh 处理节点回收和复用事件逻辑的组件类型或名称。

##### Examples

```js
properties: {
   template: cc.Prefab
 },
 onLoad () {
// MyTemplateHandler is a component with 'unuse' and 'reuse' to handle events when node is reused or recycled.
   this.myPool = new cc.NodePool('MyTemplateHandler');
 }
```

##### size

The current available size in the pool

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:87](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L87) |



##### clear

Destroy all cached nodes in the pool

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:97](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L97) |



##### put

Put a new Node into the pool.
It will automatically remove the node from its parent without cleanup.
It will also invoke unuse method of the poolHandlerComp if exist.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:110](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L110) |

###### Parameters
- `obj` <a href="../classes/Node.html" class="crosslink">Node</a> 

##### Examples

```js
let myNode = cc.instantiate(this.template);
  this.myPool.put(myNode);
```

##### get

Get a obj from pool, if no available object in pool, null will be returned.
This function will invoke the reuse function of poolHandlerComp if exist.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Node.html" class="crosslink">Node</a> &#124; Null 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js:138](https:/github.com/cocos-creator/engine/blob/master/extensions/ccpool/CCNodePool.js#L138) |

###### Parameters
- `params` Any !#en Params to pass to 'reuse' method in poolHandlerComp !#zh 向 poolHandlerComp 中的 'reuse' 函数传递的参数

##### Examples

```js
let newNode = this.myPool.get();
```


