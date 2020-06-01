## `ContainerStrategy` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


<p>cc.game.containerStrategy class is the root strategy class of container's scale strategy,
it controls the behavior of how to scale the cc.game.container and cc.game.canvas object</p>



### 索引



##### 方法

  - [`preApply`](#preapply) 在应用策略之前的操作
  - [`apply`](#apply) 策略应用方法
  - [`postApply`](#postapply) 策略调用之后的操作



### Details




<!-- Method Block -->
#### 方法


##### preApply

在应用策略之前的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1031](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCView.js#L1031) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

策略应用方法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1041](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCView.js#L1041) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

策略调用之后的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1052](https://github.com/cocos-creator/engine/blob/ed2b039b9aa8396d7da1c8c1149f41269733e8fd/cocos2d/core/platform/CCView.js#L1052) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



