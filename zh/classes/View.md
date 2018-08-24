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

  - [`setTargetDensityDPI`](#settargetdensitydpi) 设置目标内容的每英寸像素点密度。
  - [`getTargetDensityDPI`](#gettargetdensitydpi) 获取目标内容的每英寸像素点密度。
  - [`resizeWithBrowserSize`](#resizewithbrowsersize) 设置当发现浏览器的尺寸改变时，是否自动调整 canvas 尺寸大小。
  - [`setResizeCallback`](#setresizecallback) 仅在 Web 平台下有效。
  - [`setOrientation`](#setorientation) 设置游戏屏幕朝向，它能够是横版，竖版或自动。
  - [`adjustViewportMeta`](#adjustviewportmeta) 设置引擎是否调整 viewport meta 来配合屏幕适配。
  - [`enableRetina`](#enableretina) 它仅会在你调用 setDesignResolutionPolicy 方法时有影响。
  - [`isRetinaEnabled`](#isretinaenabled) 检查是否对 Retina 显示设备进行优化。
  - [`enableAntiAlias`](#enableantialias) 控制抗锯齿是否开启
  - [`isAntiAliasEnabled`](#isantialiasenabled) 返回当前是否抗锯齿
  - [`enableAutoFullScreen`](#enableautofullscreen) 启动时，移动端游戏会在移动端自动尝试进入全屏模式。
  - [`isAutoFullScreenEnabled`](#isautofullscreenenabled) 检查自动进入全屏模式是否启动。
  - [`getCanvasSize`](#getcanvassize) 返回视图中 canvas 的尺寸。
  - [`getFrameSize`](#getframesize) 返回视图中边框尺寸。
  - [`setFrameSize`](#setframesize) 在 native 平台下，设置视图框架尺寸。
  - [`getVisibleSize`](#getvisiblesize) 返回视图窗口可见区域尺寸。
  - [`getVisibleSizeInPixel`](#getvisiblesizeinpixel) 返回视图窗口可见区域像素尺寸。
  - [`getVisibleOrigin`](#getvisibleorigin) 返回视图窗口可见区域原点。
  - [`getVisibleOriginInPixel`](#getvisibleorigininpixel) 返回视图窗口可见区域像素原点。
  - [`getResolutionPolicy`](#getresolutionpolicy) 返回当前分辨率方案
  - [`setResolutionPolicy`](#setresolutionpolicy) 设置当前分辨率模式
  - [`setDesignResolutionSize`](#setdesignresolutionsize) 通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配。
  - [`getDesignResolutionSize`](#getdesignresolutionsize) 返回视图的设计分辨率。
  - [`setRealPixelResolution`](#setrealpixelresolution) 设置容器（container）需要的像素分辨率并且适配相应分辨率的游戏内容。
  - [`setViewportInPoints`](#setviewportinpoints) 用设计分辨率下的点尺寸来设置视窗。
  - [`setScissorInPoints`](#setscissorinpoints) 用设计分辨率下的点的尺寸来设置 scissor 剪裁区域。
  - [`isScissorEnabled`](#isscissorenabled) 检查 scissor 是否生效。
  - [`getScissorRect`](#getscissorrect) 返回当前的 scissor 剪裁区域。
  - [`getViewportRect`](#getviewportrect) 返回视窗剪裁区域。
  - [`getScaleX`](#getscalex) 返回横轴的缩放比，这个缩放比是将画布像素分辨率放到设计分辨率的比例。
  - [`getScaleY`](#getscaley) 返回纵轴的缩放比，这个缩放比是将画布像素分辨率缩放到设计分辨率的比例。
  - [`getDevicePixelRatio`](#getdevicepixelratio) 返回设备或浏览器像素比例。
  - [`convertToLocationInView`](#converttolocationinview) 将屏幕坐标转换为游戏视图下的坐标。



##### 事件

  - [`design-resolution-changed`](#design-resolution-changed) 当设计分辨率改变时发送。
  - [`canvas-resize`](#canvas-resize) 当画布大小改变时发送。


### Details




<!-- Method Block -->
#### 方法


##### setTargetDensityDPI

设置目标内容的每英寸像素点密度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:237](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L237) |
| 废弃（Deprecated） | since v2.0 |

###### 参数列表
- `densityDPI` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTargetDensityDPI

获取目标内容的每英寸像素点密度。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:252](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L252) |
| 废弃（Deprecated） | since v2.0 |



##### resizeWithBrowserSize

设置当发现浏览器的尺寸改变时，是否自动调整 canvas 尺寸大小。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:261](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L261) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether enable automatic resize with browser's resize event


##### setResizeCallback

设置 cc.view 调整视窗尺寸行为的回调函数，
这个回调函数会在应用适配模式之前被调用，
因此你可以在这个回调函数内添加任意附加改变，
仅在 Web 平台下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:288](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L288) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; Null The callback function


##### setOrientation

设置游戏屏幕朝向，它能够是横版，竖版或自动。
当设置为横版或竖版，并且屏幕的宽高比例不匹配时，
cc.view 会自动用 CSS 旋转游戏场景的 canvas，
这个方法不会对 native 部分产生任何影响，对于 native 而言，你需要在应用设置中的设置排版。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:307](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L307) |

###### 参数列表
- `orientation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Possible values: cc.macro.ORIENTATION_LANDSCAPE | cc.macro.ORIENTATION_PORTRAIT | cc.macro.ORIENTATION_AUTO


##### adjustViewportMeta

设置引擎是否调整 viewport meta 来配合屏幕适配。
默认设置为启动，我们强烈建议你不要将它设置为关闭。
即使当它启动时，你仍然能够设置你的 viewport meta，它不会被覆盖。
仅在 Web 模式下有效

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:413](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L413) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable automatic modification to "viewport" meta


##### enableRetina

对于 Apple 这种支持 Retina 显示的设备上默认进行优化而其他类型设备默认不进行优化，
它仅会在你调用 setDesignResolutionPolicy 方法时有影响。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:430](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L430) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable retina display


##### isRetinaEnabled

检查是否对 Retina 显示设备进行优化。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:445](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L445) |



##### enableAntiAlias

控制抗锯齿是否开启

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:458](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L458) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or not anti-alias


##### isAntiAliasEnabled

返回当前是否抗锯齿

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:492](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L492) |



##### enableAutoFullScreen

启动时，移动端游戏会在移动端自动尝试进入全屏模式。
你能够传入 true 为参数去启动它，用 false 参数来关闭它。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:501](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L501) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable auto full screen on mobile devices


##### isAutoFullScreenEnabled

检查自动进入全屏模式是否启动。
仅在 Web 模式下有效。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:525](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L525) |



##### getCanvasSize

返回视图中 canvas 的尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 Web 平台下，它返回 canvas 元素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:562](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L562) |



##### getFrameSize

返回视图中边框尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 web 平台下，它返回 canvas 元素的外层 DOM 元素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:577](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L577) |



##### setFrameSize

在 native 平台下，设置视图框架尺寸。
在 web 平台下，设置 canvas 外层 DOM 元素尺寸。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:592](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L592) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getVisibleSize

返回视图窗口可见区域尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:610](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L610) |



##### getVisibleSizeInPixel

返回视图窗口可见区域像素尺寸。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:621](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L621) |



##### getVisibleOrigin

返回视图窗口可见区域原点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:633](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L633) |



##### getVisibleOriginInPixel

返回视图窗口可见区域像素原点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:644](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L644) |



##### getResolutionPolicy

返回当前分辨率方案

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:656](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L656) |



##### setResolutionPolicy

设置当前分辨率模式

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:668](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L668) |

###### 参数列表
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setDesignResolutionSize

通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:697](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L697) |

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
| 定义于 | [cocos2d/core/platform/CCView.js:777](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L777) |



##### setRealPixelResolution

设置容器（container）需要的像素分辨率并且适配相应分辨率的游戏内容。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:790](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L790) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### setViewportInPoints

用设计分辨率下的点尺寸来设置视窗。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCView.js:823](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L823) |
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
| 定义于 | [cocos2d/core/platform/CCView.js:842](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L842) |
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
| 定义于 | [cocos2d/core/platform/CCView.js:875](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L875) |
| 废弃（Deprecated） | since v2.0 |



##### getScissorRect

返回当前的 scissor 剪裁区域。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:887](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L887) |
| 废弃（Deprecated） | since v2.0 |



##### getViewportRect

返回视窗剪裁区域。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:910](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L910) |



##### getScaleX

返回横轴的缩放比，这个缩放比是将画布像素分辨率放到设计分辨率的比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:921](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L921) |



##### getScaleY

返回纵轴的缩放比，这个缩放比是将画布像素分辨率缩放到设计分辨率的比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:932](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L932) |



##### getDevicePixelRatio

返回设备或浏览器像素比例。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:943](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L943) |



##### convertToLocationInView

将屏幕坐标转换为游戏视图下的坐标。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/platform/CCView.js:954](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/platform/CCView.js#L954) |

###### 参数列表
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The X axis translation
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The Y axis translation
- `relatedPos` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The related position object including "left", "top", "width", "height" informations




#### 事件

### `design-resolution-changed` Event



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


!en
Emit when design resolution changed.
!zh
当设计分辨率改变时发送。


### 索引







### Details




### `canvas-resize` Event



模块: [_decorator](../modules/_decorator.md)
父模块: [cc](../modules/cc.md)


!en
Emit when canvas resize.
!zh
当画布大小改变时发送。


### 索引







### Details





