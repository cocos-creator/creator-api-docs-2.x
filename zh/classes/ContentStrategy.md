## `ContentStrategy` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


<p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game</p>



### 索引



##### 方法

  - [`preApply`](#preapply) 策略应用前的操作
  - [`apply`](#apply) 调用策略方法
  - [`postApply`](#postapply) 策略调用之后的操作



### Details




<!-- Method Block -->
#### 方法


##### preApply

策略应用前的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1147](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCView.js#L1147) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

调用策略方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:1157](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCView.js#L1157) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

策略调用之后的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1171](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/platform/CCView.js#L1171) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



