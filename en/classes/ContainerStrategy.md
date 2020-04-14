## `ContainerStrategy` Class



Module: [cc](../modules/cc.md)
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
| Defined in | [cocos2d/core/platform/CCView.js:1042](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCView.js#L1042) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1052](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCView.js#L1052) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

Manipulation after applying the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1063](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/platform/CCView.js#L1063) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



