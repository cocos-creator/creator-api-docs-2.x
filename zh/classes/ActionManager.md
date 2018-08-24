## `ActionManager` 类型



模块: [cc](../modules/cc.md)


cc.ActionManager 是可以管理动作的单例类。<br/>
通常你并不需要直接使用这个类，99%的情况您将使用 CCNode 的接口。<br/>
但也有一些情况下，您可能需要使用这个类。 <br/>
例如：
 - 当你想要运行一个动作，但目标不是 CCNode 类型时。 <br/>
 - 当你想要暂停/恢复动作时。 <br/>


### 索引



##### 方法

  - [`addAction`](#addaction) 增加一个动作，同时还需要提供动作的目标对象，目标对象是否暂停作为参数。
  - [`removeAllActions`](#removeallactions) 移除所有对象的所有动作。
  - [`removeAllActionsFromTarget`](#removeallactionsfromtarget) 移除指定对象上的所有动作。
  - [`removeAction`](#removeaction) 移除指定的动作。
  - [`removeActionByTag`](#removeactionbytag) 删除指定对象下特定标签的一个动作，将删除首个匹配到的动作。
  - [`getActionByTag`](#getactionbytag) 通过目标对象和标签获取一个动作。
  - [`getNumberOfRunningActionsInTarget`](#getnumberofrunningactionsintarget) 返回指定对象下所有正在运行的动作数量。
  - [`pauseTarget`](#pausetarget) 暂停指定对象：所有正在运行的动作和新添加的动作都将会暂停。
  - [`resumeTarget`](#resumetarget) 让指定目标恢复运行。
  - [`pauseAllRunningActions`](#pauseallrunningactions) 暂停所有正在运行的动作，返回一个包含了那些动作被暂停了的目标对象的列表。
  - [`resumeTargets`](#resumetargets) 让一组指定对象恢复运行（用来逆转 pauseAllRunningActions 效果的便捷函数）。
  - [`pauseTargets`](#pausetargets) 暂停一组指定对象。
  - [`purgeSharedManager`](#purgesharedmanager) 清除共用的动作管理器。
  - [`update`](#update) ActionManager 主循环。



### Details




<!-- Method Block -->
#### 方法


##### addAction

增加一个动作，同时还需要提供动作的目标对象，目标对象是否暂停作为参数。<br/>
如果目标已存在，动作将会被直接添加到现有的节点中。<br/>
如果目标不存在，将为这一目标创建一个新的实例，并将动作添加进去。<br/>
当目标状态的 paused 为 true，动作将不会被执行

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:105](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L105) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `paused` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### removeAllActions

移除所有对象的所有动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:144](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L144) |



##### removeAllActionsFromTarget

移除指定对象上的所有动作。<br/>
属于该目标的所有的动作将被删除。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:157](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L157) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 
- `forceDelete` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### removeAction

移除指定的动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:178](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L178) |

###### 参数列表
- `action` <a href="../classes/Action.html" class="crosslink">Action</a> 


##### removeActionByTag

删除指定对象下特定标签的一个动作，将删除首个匹配到的动作。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:206](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L206) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getActionByTag

通过目标对象和标签获取一个动作。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Action.html" class="crosslink">Action</a> &#124; Null 
| 定义于 | [cocos2d/actions/CCActionManager.js:233](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L233) |

###### 参数列表
- `tag` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### getNumberOfRunningActionsInTarget

返回指定对象下所有正在运行的动作数量。 <br/>
组合动作被算作一个动作。<br/>
例如：<br/>
 - 如果您正在运行 7 个动作组成的序列动作（Sequence），这个函数将返回 1。<br/>
 - 如果你正在运行 2 个序列动作（Sequence）和 5 个普通动作，这个函数将返回 7。<br/>

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/actions/CCActionManager.js:260](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L260) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### pauseTarget

暂停指定对象：所有正在运行的动作和新添加的动作都将会暂停。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:285](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L285) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### resumeTarget

让指定目标恢复运行。在执行序列中所有被暂停的动作将重新恢复运行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:296](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L296) |

###### 参数列表
- `target` <a href="../classes/Node.html" class="crosslink">Node</a> 


##### pauseAllRunningActions

暂停所有正在运行的动作，返回一个包含了那些动作被暂停了的目标对象的列表。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| 定义于 | [cocos2d/actions/CCActionManager.js:308](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L308) |



##### resumeTargets

让一组指定对象恢复运行（用来逆转 pauseAllRunningActions 效果的便捷函数）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:327](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L327) |

###### 参数列表
- `targetsToResume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### pauseTargets

暂停一组指定对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:343](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L343) |

###### 参数列表
- `targetsToPause` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### purgeSharedManager

清除共用的动作管理器。它释放了持有的实例。 <br/>
因为它使用 this，因此它不能是静态的。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:359](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L359) |



##### update

ActionManager 主循环。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/actions/CCActionManager.js:406](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/actions/CCActionManager.js#L406) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delta time in seconds



