## `ContentStrategy` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


<p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game</p>



### Index



##### Methods

  - [`preApply`](#preapply) Manipulation before applying the strategy
  - [`apply`](#apply) Function to apply this strategy
  - [`postApply`](#postapply) Manipulation after applying the strategy



### Details




<!-- Method Block -->
#### Methods


##### preApply

Manipulation before applying the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1144](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/platform/CCView.js#L1144) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this strategy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/CCView.js:1154](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/platform/CCView.js#L1154) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

Manipulation after applying the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1168](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/platform/CCView.js#L1168) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



