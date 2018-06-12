## `OriginalContainer` 类型

继承于 [`ContainerStrategy`](ContainerStrategy.md)


模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)





### 索引



##### 方法

  - [`preApply`](#preapply) 
  - [`apply`](#apply) 
  - [`postApply`](#postapply) 



### Details




<!-- Method Block -->
#### 方法


##### preApply

在应用策略之前的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1021](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L1021) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

策略应用方法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1031](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L1031) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

策略调用之后的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1042](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L1042) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



