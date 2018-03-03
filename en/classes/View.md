## `View` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


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


### Index



##### Methods

  - [`setTargetDensityDPI`](#settargetdensitydpi) <p>
Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
  1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
  2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
  3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
  4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
  5. Custom value, e.g: "480"                                                         <br/>
</p>
  - [`getTargetDensityDPI`](#gettargetdensitydpi) Returns the current target-densitydpi value of cc.view.
  - [`resizeWithBrowserSize`](#resizewithbrowsersize) Sets whether resize canvas automatically when browser's size changed.<br/>
Useful only on web.
  - [`setResizeCallback`](#setresizecallback) Sets the callback function for cc.view's resize action,<br/>
this callback will be invoked before applying resolution policy, <br/>
so you can do any additional modifications within the callback.<br/>
Useful only on web.
  - [`setOrientation`](#setorientation) Sets the orientation of the game, it can be landscape, portrait or auto.
When set it to landscape or portrait, and screen w/h ratio doesn't fit,
cc.view will automatically rotate the game canvas using CSS.
Note that this function doesn't have any effect in native,
in native, you need to set the application orientation in native project settings
  - [`adjustViewPort`](#adjustviewport) Sets whether the engine modify the "viewport" meta in your web page.<br/>
It's enabled by default, we strongly suggest you not to disable it.<br/>
And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
Only useful on web
  - [`enableRetina`](#enableretina) Retina support is enabled by default for Apple device but disabled for other devices,<br/>
it takes effect only when you called setDesignResolutionPolicy<br/>
Only useful on web
  - [`isRetinaEnabled`](#isretinaenabled) Check whether retina display is enabled.<br/>
Only useful on web
  - [`enableAntiAlias`](#enableantialias) Whether to Enable on anti-alias
  - [`isAntiAliasEnabled`](#isantialiasenabled) Returns whether the current enable on anti-alias
  - [`enableAutoFullScreen`](#enableautofullscreen) If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
You can pass true as parameter to enable it and disable it by passing false.<br/>
Only useful on web
  - [`isAutoFullScreenEnabled`](#isautofullscreenenabled) Check whether auto full screen is enabled.<br/>
Only useful on web
  - [`isViewReady`](#isviewready) Get whether render system is ready(no matter opengl or canvas),<br/>
this name is for the compatibility with cocos2d-x, subclass must implement this method.
  - [`setContentTranslateLeftTop`](#setcontenttranslatelefttop) Sets the resolution translate on View.
  - [`getContentTranslateLeftTop`](#getcontenttranslatelefttop) Returns the resolution translate on View
  - [`getFrameSize`](#getframesize) Returns the frame size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas's outer DOM element.
  - [`setFrameSize`](#setframesize) On native, it sets the frame size of view.<br/>
On web, it sets the size of the canvas's outer DOM element.
  - [`getVisibleSize`](#getvisiblesize) Returns the visible area size of the view port.
  - [`getVisibleSizeInPixel`](#getvisiblesizeinpixel) Returns the visible area size of the view port.
  - [`getVisibleOrigin`](#getvisibleorigin) Returns the visible origin of the view port.
  - [`getVisibleOriginInPixel`](#getvisibleorigininpixel) Returns the visible origin of the view port.
  - [`canSetContentScaleFactor`](#cansetcontentscalefactor) Returns whether developer can set content's scale factor.
  - [`getResolutionPolicy`](#getresolutionpolicy) Returns the current resolution policy
  - [`setResolutionPolicy`](#setresolutionpolicy) Sets the current resolution policy
  - [`setDesignResolutionSize`](#setdesignresolutionsize) Sets the resolution policy with designed view size in points.<br/>
The resolution policy include: <br/>
[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
[cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>
  - [`getDesignResolutionSize`](#getdesignresolutionsize) Returns the designed size for the view.
Default resolution size is the same as 'getFrameSize'.
  - [`setRealPixelResolution`](#setrealpixelresolution) Sets the container to desired pixel resolution and fit the game content to it.
This function is very useful for adaptation in mobile browsers.
In some HD android devices, the resolution is very high, but its browser performance may not be very good.
In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
But this API can be helpful to set a desired pixel resolution which is in between.
This API will do the following:
    1. Set viewport's width to the desired width in pixel
    2. Set body width to the exact pixel resolution
    3. The resolution policy will be reset with designed view size in points.
  - [`setViewPortInPoints`](#setviewportinpoints) Sets view port rectangle with points.
  - [`setScissorInPoints`](#setscissorinpoints) Sets Scissor rectangle with points.
  - [`isScissorEnabled`](#isscissorenabled) Returns whether GL_SCISSOR_TEST is enable
  - [`getScissorRect`](#getscissorrect) Returns the current scissor rectangle
  - [`setViewName`](#setviewname) Sets the name of the view
  - [`getViewName`](#getviewname) Returns the name of the view
  - [`getViewPortRect`](#getviewportrect) Returns the view port rectangle.
  - [`getScaleX`](#getscalex) Returns scale factor of the horizontal direction (X axis).
  - [`getScaleY`](#getscaley) Returns scale factor of the vertical direction (Y axis).
  - [`getDevicePixelRatio`](#getdevicepixelratio) Returns device pixel ratio for retina display.
  - [`convertToLocationInView`](#converttolocationinview) Returns the real location in view for a translation based on a related position
  - [`_getInstance`](#getinstance) 



### Details




<!-- Method Block -->
#### Methods


##### setTargetDensityDPI

<p>
Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
  1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
  2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
  3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
  4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
  5. Custom value, e.g: "480"                                                         <br/>
</p>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:239](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L239) |

###### Parameters
- `densityDPI` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTargetDensityDPI

Returns the current target-densitydpi value of cc.view.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L257) |



##### resizeWithBrowserSize

Sets whether resize canvas automatically when browser's size changed.<br/>
Useful only on web.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:266](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L266) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether enable automatic resize with browser's resize event


##### setResizeCallback

Sets the callback function for cc.view's resize action,<br/>
this callback will be invoked before applying resolution policy, <br/>
so you can do any additional modifications within the callback.<br/>
Useful only on web.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:290](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L290) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; Null The callback function


##### setOrientation

Sets the orientation of the game, it can be landscape, portrait or auto.
When set it to landscape or portrait, and screen w/h ratio doesn't fit,
cc.view will automatically rotate the game canvas using CSS.
Note that this function doesn't have any effect in native,
in native, you need to set the application orientation in native project settings

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:304](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L304) |

###### Parameters
- `orientation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Possible values: cc.macro.ORIENTATION_LANDSCAPE | cc.macro.ORIENTATION_PORTRAIT | cc.macro.ORIENTATION_AUTO


##### adjustViewPort

Sets whether the engine modify the "viewport" meta in your web page.<br/>
It's enabled by default, we strongly suggest you not to disable it.<br/>
And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:419](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L419) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable automatic modification to "viewport" meta


##### enableRetina

Retina support is enabled by default for Apple device but disabled for other devices,<br/>
it takes effect only when you called setDesignResolutionPolicy<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:431](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L431) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable retina display


##### isRetinaEnabled

Check whether retina display is enabled.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:442](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L442) |



##### enableAntiAlias

Whether to Enable on anti-alias

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:452](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L452) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or not anti-alias


##### isAntiAliasEnabled

Returns whether the current enable on anti-alias

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:492](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L492) |



##### enableAutoFullScreen

If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
You can pass true as parameter to enable it and disable it by passing false.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:501](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L501) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable auto full screen on mobile devices


##### isAutoFullScreenEnabled

Check whether auto full screen is enabled.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:522](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L522) |



##### isViewReady

Get whether render system is ready(no matter opengl or canvas),<br/>
this name is for the compatibility with cocos2d-x, subclass must implement this method.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:532](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L532) |



##### setContentTranslateLeftTop

Sets the resolution translate on View.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:552](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L552) |

###### Parameters
- `offsetLeft` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `offsetTop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getContentTranslateLeftTop

Returns the resolution translate on View

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:562](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L562) |



##### getFrameSize

Returns the frame size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas's outer DOM element.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:605](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L605) |



##### setFrameSize

On native, it sets the frame size of view.<br/>
On web, it sets the size of the canvas's outer DOM element.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:616](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L616) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getVisibleSize

Returns the visible area size of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:632](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L632) |



##### getVisibleSizeInPixel

Returns the visible area size of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:641](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L641) |



##### getVisibleOrigin

Returns the visible origin of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:651](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L651) |



##### getVisibleOriginInPixel

Returns the visible origin of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:660](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L660) |



##### canSetContentScaleFactor

Returns whether developer can set content's scale factor.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:670](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L670) |



##### getResolutionPolicy

Returns the current resolution policy

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:679](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L679) |



##### setResolutionPolicy

Sets the current resolution policy

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:689](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L689) |

###### Parameters
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### setDesignResolutionSize

Sets the resolution policy with designed view size in points.<br/>
The resolution policy include: <br/>
[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
[cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:716](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L716) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### getDesignResolutionSize

Returns the designed size for the view.
Default resolution size is the same as 'getFrameSize'.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:806](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L806) |



##### setRealPixelResolution

Sets the container to desired pixel resolution and fit the game content to it.
This function is very useful for adaptation in mobile browsers.
In some HD android devices, the resolution is very high, but its browser performance may not be very good.
In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
But this API can be helpful to set a desired pixel resolution which is in between.
This API will do the following:
    1. Set viewport's width to the desired width in pixel
    2. Set body width to the exact pixel resolution
    3. The resolution policy will be reset with designed view size in points.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:816](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L816) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### setViewPortInPoints

Sets view port rectangle with points.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:847](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L847) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> width
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> height


##### setScissorInPoints

Sets Scissor rectangle with points.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:863](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L863) |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### isScissorEnabled

Returns whether GL_SCISSOR_TEST is enable

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:892](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L892) |



##### getScissorRect

Returns the current scissor rectangle

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:901](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L901) |



##### setViewName

Sets the name of the view

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:921](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L921) |

###### Parameters
- `viewName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getViewName

Returns the name of the view

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:932](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L932) |



##### getViewPortRect

Returns the view port rectangle.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:941](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L941) |



##### getScaleX

Returns scale factor of the horizontal direction (X axis).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:950](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L950) |



##### getScaleY

Returns scale factor of the vertical direction (Y axis).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:959](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L959) |



##### getDevicePixelRatio

Returns device pixel ratio for retina display.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:968](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L968) |



##### convertToLocationInView

Returns the real location in view for a translation based on a related position

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:977](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L977) |

###### Parameters
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The X axis translation
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The Y axis translation
- `relatedPos` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The related position object including "left", "top", "width", "height" informations


##### _getInstance



| meta | description |
|------|-------------|
| Returns | <a href="../classes/View.html" class="crosslink">View</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js:1019](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCView.js#L1019) |




