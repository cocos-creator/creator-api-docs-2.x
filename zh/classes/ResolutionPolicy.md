## `ResolutionPolicy` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


<p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x</p>



### 索引

##### 属性（properties）

  - [`EXACT_FIT`](#exactfit) `Number` The entire application is visible in the specified area without trying to preserve the original aspect ratio....
  - [`NO_BORDER`](#noborder) `Number` The entire application fills the specified area, without distortion but possibly with some cropping,...
  - [`SHOW_ALL`](#showall) `Number` The entire application is visible in the specified area without distortion while maintaining the original...
  - [`FIXED_HEIGHT`](#fixedheight) `Number` The application takes the height of the design resolution size and modifies the width of the internal...
  - [`FIXED_WIDTH`](#fixedwidth) `Number` The application takes the width of the design resolution size and modifies the height of the internal...
  - [`UNKNOWN`](#unknown) `Number` Unknow policy



##### 方法

  - [`constructor`](#constructor) 
  - [`preApply`](#preapply) 策略应用前的操作
  - [`apply`](#apply) 调用策略方法
  - [`postApply`](#postapply) 策略应用之后的操作
  - [`setContainerStrategy`](#setcontainerstrategy) 设置容器的适配策略
  - [`setContentStrategy`](#setcontentstrategy) 设置内容的适配策略



### Details


#### 属性（properties）


##### EXACT_FIT

> The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
Distortion can occur, and the application may appear stretched or compressed.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1494](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1494) |



##### NO_BORDER

> The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
while maintaining the original aspect ratio of the application.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1503](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1503) |



##### SHOW_ALL

> The entire application is visible in the specified area without distortion while maintaining the original<br/>
aspect ratio of the application. Borders can appear on two sides of the application.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1512](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1512) |



##### FIXED_HEIGHT

> The application takes the height of the design resolution size and modifies the width of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1521](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1521) |



##### FIXED_WIDTH

> The application takes the width of the design resolution size and modifies the height of the internal<br/>
canvas so that it fits the aspect ratio of the device<br/>
no distortion will occur however you must make sure your application works on different<br/>
aspect ratios

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1532](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1532) |



##### UNKNOWN

> Unknow policy

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCView.js:1543](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1543) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1409](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1409) |

###### 参数列表
- `containerStg` <a href="../classes/ContainerStrategy.html" class="crosslink">ContainerStrategy</a> The container strategy
- `contentStg` <a href="../classes/ContentStrategy.html" class="crosslink">ContentStrategy</a> The content strategy


##### preApply

策略应用前的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1428](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1428) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### apply

调用策略方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:1439](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1439) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view
- `designedResolution` <a href="../classes/Size.html" class="crosslink">Size</a> The user defined design resolution


##### postApply

策略应用之后的操作

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1454](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1454) |

###### 参数列表
- `view` <a href="../classes/View.html" class="crosslink">View</a> The target view


##### setContainerStrategy

设置容器的适配策略

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1465](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1465) |

###### 参数列表
- `containerStg` <a href="../classes/ContainerStrategy.html" class="crosslink">ContainerStrategy</a> 


##### setContentStrategy

设置内容的适配策略

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:1477](https://github.com/cocos-creator/engine/blob/79b9133d6e0e44b4b8f033ba86231ae21522f2dc/cocos2d/core/platform/CCView.js#L1477) |

###### 参数列表
- `contentStg` <a href="../classes/ContentStrategy.html" class="crosslink">ContentStrategy</a> 



