## `ResolutionPolicy` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


<p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x</p>


### Index

##### Properties

  - [`EXACT_FIT`](#exactfit) `Number` The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
Distortion can occur, and the application may appear stretched or compressed.
  - [`NO_BORDER`](#noborder) `Number` The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
while maintaining the original aspect ratio of the application.
  - [`SHOW_ALL`](#showall) `Number` The entire application is visible in the specified area without distortion while maintaining the original<br/>
aspect ratio of the application. Borders can appear on two sides of the application.
  - [`FIXED_HEIGHT`](#fixedheight) `Number` The application takes the height of the design resolution size and modifies the width of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios
  - [`FIXED_WIDTH`](#fixedwidth) `Number` The application takes the width of the design resolution size and modifies the height of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios
  - [`UNKNOWN`](#unknown) `Number` Unknow policy



##### Methods

  - [`constructor`](#constructor) 
  - [`preApply`](#preapply) Manipulation before applying the resolution policy
  - [`apply`](#apply) Function to apply this resolution policy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables
  - [`postApply`](#postapply) Manipulation after appyling the strategy
  - [`setContainerStrategy`](#setcontainerstrategy) Setup the container's scale strategy
  - [`setContentStrategy`](#setcontentstrategy) Setup the content's scale strategy



### Details


#### Properties


##### EXACT_FIT

> The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
Distortion can occur, and the application may appear stretched or compressed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1441](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1441) |



##### NO_BORDER

> The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
while maintaining the original aspect ratio of the application.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1450](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1450) |



##### SHOW_ALL

> The entire application is visible in the specified area without distortion while maintaining the original<br/>
aspect ratio of the application. Borders can appear on two sides of the application.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1459](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1459) |



##### FIXED_HEIGHT

> The application takes the height of the design resolution size and modifies the width of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1468](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1468) |



##### FIXED_WIDTH

> The application takes the width of the design resolution size and modifies the height of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1479](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1479) |



##### UNKNOWN

> Unknow policy

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1490](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1490) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1363](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1363) |

###### Parameters
- `containerStg` <a href="../classes/ContainerStrategy.html" class="crosslink">ContainerStrategy</a> The container strategy
- `contentStg` <a href="../classes/ContentStrategy.html" class="crosslink">ContentStrategy</a> The content strategy


##### preApply

Manipulation before applying the resolution policy

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1382](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1382) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

Function to apply this resolution policy
The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
The target view can then apply these value to itself, it's preferred not to modify directly its private variables

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1392](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1392) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> The user defined design resolution


##### postApply

Manipulation after appyling the strategy

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1406](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1406) |

###### Parameters
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### setContainerStrategy

Setup the container's scale strategy

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1416](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1416) |

###### Parameters
- `containerStg` <a href="../classes/ContainerStrategy.html" class="crosslink">ContainerStrategy</a> 


##### setContentStrategy

Setup the content's scale strategy

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1426](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1426) |

###### Parameters
- `contentStg` <a href="../classes/ContentStrategy.html" class="crosslink">ContentStrategy</a> 



