## `View` 类型



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


cc.view is the singleton object which represents the game window.<br/>
It's main task include: <br/>
 - Apply the design resolution policy<br/>
 - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
 - Manage the game view port which can be different with the window<br/>
 - Manage the content scale and translation<br/>
<br/>
Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
the standard way to use it is by calling:<br/>
 - cc.view.methodName(); <br/>


### 索引



##### 方法

  - [`setTargetDensityDPI`](#settargetdensitydpi) 
  - [`getTargetDensityDPI`](#gettargetdensitydpi) 
  - [`resizeWithBrowserSize`](#resizewithbrowsersize) 
  - [`setResizeCallback`](#setresizecallback) 
  - [`setOrientation`](#setorientation) 
  - [`adjustViewportMeta`](#adjustviewportmeta) 
  - [`enableRetina`](#enableretina) 
  - [`isRetinaEnabled`](#isretinaenabled) 
  - [`enableAntiAlias`](#enableantialias) 
  - [`isAntiAliasEnabled`](#isantialiasenabled) 
  - [`enableAutoFullScreen`](#enableautofullscreen) 
  - [`isAutoFullScreenEnabled`](#isautofullscreenenabled) 
  - [`getCanvasSize`](#getcanvassize) 
  - [`getFrameSize`](#getframesize) 
  - [`setFrameSize`](#setframesize) 
  - [`getVisibleSize`](#getvisiblesize) 
  - [`getVisibleSizeInPixel`](#getvisiblesizeinpixel) 
  - [`getVisibleOrigin`](#getvisibleorigin) 
  - [`getVisibleOriginInPixel`](#getvisibleorigininpixel) 
  - [`getResolutionPolicy`](#getresolutionpolicy) 
  - [`setResolutionPolicy`](#setresolutionpolicy) 
  - [`setDesignResolutionSize`](#setdesignresolutionsize) 
  - [`getDesignResolutionSize`](#getdesignresolutionsize) 
  - [`setRealPixelResolution`](#setrealpixelresolution) 
  - [`setViewportInPoints`](#setviewportinpoints) 
  - [`setScissorInPoints`](#setscissorinpoints) 
  - [`isScissorEnabled`](#isscissorenabled) 
  - [`getScissorRect`](#getscissorrect) 
  - [`getViewportRect`](#getviewportrect) 
  - [`getScaleX`](#getscalex) 
  - [`getScaleY`](#getscaley) 
  - [`getDevicePixelRatio`](#getdevicepixelratio) 
  - [`convertToLocationInView`](#converttolocationinview) 
  - [`_getInstance`](#getinstance) 



### Details




<!-- Method Block -->
#### 方法


##### setTargetDensityDPI

设置目标内容的每英寸像素点密度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:230](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L230) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `densityDPI` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTargetDensityDPI

获取目标内容的每英寸像素点密度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:245](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L245) |
| 废弃（Deprecated） | since v2.0 |



##### resizeWithBrowserSize

设置当发现浏览器的尺寸改变时，是否自动调整 canvas 尺寸大小。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:254](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L254) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether enable automatic resize with browser's resize event


##### setResizeCallback

设置 cc.view 调整视窗尺寸行为的回调函数，
这个回调函数会在应用适配模式之前被调用，
因此你可以在这个回调函数内添加任意附加改变，
仅在 Web 平台下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:281](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L281) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; Null The callback function


##### setOrientation

设置游戏屏幕朝向，它能够是横版，竖版或自动。
当设置为横版或竖版，并且屏幕的宽高比例不匹配时，
cc.view 会自动用 CSS 旋转游戏场景的 canvas，
这个方法不会对 native 部分产生任何影响，对于 native 而言，你需要在应用设置中的设置排版。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:300](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L300) |

###### 参数列表
- `orientation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Possible values: cc.macro.ORIENTATION_LANDSCAPE | cc.macro.ORIENTATION_PORTRAIT | cc.macro.ORIENTATION_AUTO


##### adjustViewportMeta

设置引擎是否调整 viewport meta 来配合屏幕适配。
默认设置为启动，我们强烈建议你不要将它设置为关闭。
即使当它启动时，你仍然能够设置你的 viewport meta，它不会被覆盖。
仅在 Web 模式下有效

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:410](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L410) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable automatic modification to "viewport" meta


##### enableRetina

对于 Apple 这种支持 Retina 显示的设备上默认进行优化而其他类型设备默认不进行优化，
它仅会在你调用 setDesignResolutionPolicy 方法时有影响。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:427](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L427) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable retina display


##### isRetinaEnabled

检查是否对 Retina 显示设备进行优化。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:442](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L442) |



##### enableAntiAlias

控制抗锯齿是否开启

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:455](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L455) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or not anti-alias


##### isAntiAliasEnabled

返回当前是否抗锯齿

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:489](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L489) |



##### enableAutoFullScreen

启动时，移动端游戏会在移动端自动尝试进入全屏模式。
你能够传入 true 为参数去启动它，用 false 参数来关闭它。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:498](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L498) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable auto full screen on mobile devices


##### isAutoFullScreenEnabled

检查自动进入全屏模式是否启动。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:522](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L522) |



##### getCanvasSize

返回视图中 canvas 的尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 Web 平台下，它返回 canvas 元素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:559](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L559) |



##### getFrameSize

返回视图中边框尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 web 平台下，它返回 canvas 元素的外层 DOM 元素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:574](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L574) |



##### setFrameSize

在 native 平台下，设置视图框架尺寸。
在 web 平台下，设置 canvas 外层 DOM 元素尺寸。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:589](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L589) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getVisibleSize

返回视图窗口可见区域尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:608](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L608) |



##### getVisibleSizeInPixel

返回视图窗口可见区域像素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:619](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L619) |



##### getVisibleOrigin

返回视图窗口可见区域原点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:631](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L631) |



##### getVisibleOriginInPixel

返回视图窗口可见区域像素原点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:642](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L642) |



##### getResolutionPolicy

返回当前分辨率方案

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:654](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L654) |



##### setResolutionPolicy

设置当前分辨率模式

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:666](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L666) |

###### 参数列表
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setDesignResolutionSize

通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:695](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L695) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### getDesignResolutionSize

返回视图的设计分辨率。
默认下分辨率尺寸同 `getFrameSize` 方法相同

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:779](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L779) |



##### setRealPixelResolution

设置容器（container）需要的像素分辨率并且适配相应分辨率的游戏内容。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:792](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L792) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### setViewportInPoints

用设计分辨率下的点尺寸来设置视窗。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:825](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L825) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> width
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> height


##### setScissorInPoints

用设计分辨率下的点的尺寸来设置 scissor 剪裁区域。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:844](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L844) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### isScissorEnabled

检查 scissor 是否生效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:877](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L877) |
| 废弃（Deprecated） | since v2.0 |



##### getScissorRect

返回当前的 scissor 剪裁区域。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:889](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L889) |
| 废弃（Deprecated） | since v2.0 |



##### getViewportRect

返回视窗剪裁区域。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:912](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L912) |



##### getScaleX

返回横轴的缩放比，这个缩放比是将画布像素分辨率放到设计分辨率的比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:923](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L923) |



##### getScaleY

返回纵轴的缩放比，这个缩放比是将画布像素分辨率缩放到设计分辨率的比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:934](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L934) |



##### getDevicePixelRatio

返回设备或浏览器像素比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:945](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L945) |



##### convertToLocationInView

将屏幕坐标转换为游戏视图下的坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:956](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L956) |

###### 参数列表
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The X axis translation
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The Y axis translation
- `relatedPos` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The related position object including "left", "top", "width", "height" informations


##### _getInstance



| meta | description |
|------|-------------|
| 返回 | <a href="../classes/View.html" class="crosslink">View</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:1000](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/platform/CCView.js#L1000) |




