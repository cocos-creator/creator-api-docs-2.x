## `ContainerStrategy` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


<p>cc.game.containerStrategy class is the root strategy class of container's scale strategy,
it controls the behavior of how to scale the cc.game.container and cc.game.canvas object</p>



### Index



##### Methods

  - [`preApply`](#preapply) Manipulation before appling the strategy
  - [`apply`](#apply) Function to apply this strategy
  - [`postApply`](#postapply) Manipulation after applying the strategy



### Details




<!-- Method Block -->
#### Methods


##### preApply

Manipulation before appling the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:996](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/platform/CCView.js#L996) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1006](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/platform/CCView.js#L1006) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

Manipulation after applying the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1017](https://github.com/cocos-creator/engine/blob/98967f5e8c458e65203b56f900ee34c8ea836e72/cocos2d/core/platform/CCView.js#L1017) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



