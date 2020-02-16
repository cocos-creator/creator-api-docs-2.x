## `ContentStrategy` Class



Module: [_decorator](../modules/_decorator.md)
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
| Defined in | [cocos2d/core/platform/CCView.js:1146](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/platform/CCView.js#L1146) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this strategy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/platform/CCView.js:1156](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/platform/CCView.js#L1156) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> 
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> 


##### postApply

Manipulation after applying the strategy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:1170](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/platform/CCView.js#L1170) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view



