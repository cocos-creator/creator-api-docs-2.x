## `ContentStrategy` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


<p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game</p>


### 索引



##### 方法

  - [`preApply`](#preapply) Manipulation before applying the strategy
  - [`apply`](#apply) Function to apply this strategy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables
  - [`postApply`](#postapply) Manipulation after applying the strategy



### Details




<!-- Method Block -->
#### 方法


##### preApply

Manipulation before applying the strategy

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1137](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1137) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this strategy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1145](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1145) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

Manipulation after applying the strategy

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1158](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1158) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



