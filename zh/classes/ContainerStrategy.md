## `ContainerStrategy` 类型



模块: [_decorator](../modules/_decorator.md)
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
| 定义于 | [cocos2d/core/platform/CCView.js:996](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/platform/CCView.js#L996) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

策略应用方法

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1006](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/platform/CCView.js#L1006) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

策略调用之后的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1017](https://github.com/cocos-creator/engine/blob/94144e364133d0ac0b7b75fc548bfd85ef398b59/cocos2d/core/platform/CCView.js#L1017) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



