## `View` Class

Extends [`EventTarget`](EventTarget.md)


Module: [cc](../modules/cc.md)
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

  - [`setTargetDensityDPI`](#settargetdensitydpi) Sets view's target-densitydpi for android mobile browser.
  - [`getTargetDensityDPI`](#gettargetdensitydpi) Returns the current target-densitydpi value of cc.view.
  - [`resizeWithBrowserSize`](#resizewithbrowsersize) Sets whether resize canvas automatically when browser's size changed....
  - [`setResizeCallback`](#setresizecallback) Sets the callback function for cc.view's resize action,...
  - [`setOrientation`](#setorientation) Sets the orientation of the game, it can be landscape, portrait or auto.
  - [`adjustViewportMeta`](#adjustviewportmeta) Sets whether the engine modify the "viewport" meta in your web page....
  - [`enableRetina`](#enableretina) Retina support is enabled by default for Apple device but disabled for other devices,...
  - [`isRetinaEnabled`](#isretinaenabled) Check whether retina display is enabled....
  - [`enableAntiAlias`](#enableantialias) Whether to Enable on anti-alias
  - [`isAntiAliasEnabled`](#isantialiasenabled) Returns whether the current enable on anti-alias
  - [`enableAutoFullScreen`](#enableautofullscreen) If enabled, the application will try automatically to enter full screen mode on mobile devices...
  - [`isAutoFullScreenEnabled`](#isautofullscreenenabled) Check whether auto full screen is enabled....
  - [`getCanvasSize`](#getcanvassize) Returns the canvas size of the view....
  - [`getFrameSize`](#getframesize) Returns the frame size of the view....
  - [`setFrameSize`](#setframesize) On native, it sets the frame size of view....
  - [`getVisibleSize`](#getvisiblesize) Returns the visible area size of the view port.
  - [`getVisibleSizeInPixel`](#getvisiblesizeinpixel) Returns the visible area size of the view port.
  - [`getVisibleOrigin`](#getvisibleorigin) Returns the visible origin of the view port.
  - [`getVisibleOriginInPixel`](#getvisibleorigininpixel) Returns the visible origin of the view port.
  - [`getResolutionPolicy`](#getresolutionpolicy) Returns the current resolution policy
  - [`setResolutionPolicy`](#setresolutionpolicy) Sets the current resolution policy
  - [`setDesignResolutionSize`](#setdesignresolutionsize) Sets the resolution policy with designed view size in points....
  - [`getDesignResolutionSize`](#getdesignresolutionsize) Returns the designed size for the view.
  - [`setRealPixelResolution`](#setrealpixelresolution) Sets the container to desired pixel resolution and fit the game content to it.
  - [`setViewportInPoints`](#setviewportinpoints) Sets view port rectangle with points.
  - [`setScissorInPoints`](#setscissorinpoints) Sets Scissor rectangle with points.
  - [`isScissorEnabled`](#isscissorenabled) Returns whether GL_SCISSOR_TEST is enable
  - [`getScissorRect`](#getscissorrect) Returns the current scissor rectangle
  - [`getViewportRect`](#getviewportrect) Returns the view port rectangle.
  - [`getScaleX`](#getscalex) Returns scale factor of the horizontal direction (X axis).
  - [`getScaleY`](#getscaley) Returns scale factor of the vertical direction (Y axis).
  - [`getDevicePixelRatio`](#getdevicepixelratio) Returns device pixel ratio for retina display.
  - [`convertToLocationInView`](#converttolocationinview) Returns the real location in view for a translation based on a related position
  - [`hasEventListener`](#haseventlistener) Checks whether the EventTarget object has any callback registered for a specific type of event.
  - [`on`](#on) Register an callback of a specific event type on the EventTarget.
  - [`off`](#off) Removes the listeners previously registered with the same type, callback, target and or useCapture,...
  - [`targetOff`](#targetoff) Removes all callbacks previously registered with the same target (passed as parameter).
  - [`once`](#once) Register an callback of a specific event type on the EventTarget,...
  - [`dispatchEvent`](#dispatchevent) Send an event with the event object.
  - [`removeAll`](#removeall) Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
  - [`emit`](#emit) Trigger an event directly with the event name and necessary arguments.



##### Events

  - [`design-resolution-changed`](#design-resolution-changed) Emit when design resolution changed.
  - [`canvas-resize`](#canvas-resize) Emit when canvas resize.


### Details




<!-- Method Block -->
#### Methods


##### setTargetDensityDPI

Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
  1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
  2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
  3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
  4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
  5. Custom value, e.g: "480"                                                         <br/>

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:233](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L233) |
| Deprecated | since v2.0 |

###### Parameters
- `densityDPI` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getTargetDensityDPI

Returns the current target-densitydpi value of cc.view.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/platform/CCView.js:248](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L248) |
| Deprecated | since v2.0 |



##### resizeWithBrowserSize

Sets whether resize canvas automatically when browser's size changed.<br/>
Useful only on web.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:257](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L257) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether enable automatic resize with browser's resize event


##### setResizeCallback

Sets the callback function for cc.view's resize action,<br/>
this callback will be invoked before applying resolution policy, <br/>
so you can do any additional modifications within the callback.<br/>
Useful only on web.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:284](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L284) |

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
| Defined in | [cocos2d/core/platform/CCView.js:304](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L304) |

###### Parameters
- `orientation` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Possible values: cc.macro.ORIENTATION_LANDSCAPE | cc.macro.ORIENTATION_PORTRAIT | cc.macro.ORIENTATION_AUTO


##### adjustViewportMeta

Sets whether the engine modify the "viewport" meta in your web page.<br/>
It's enabled by default, we strongly suggest you not to disable it.<br/>
And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:402](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L402) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable automatic modification to "viewport" meta


##### enableRetina

Retina support is enabled by default for Apple device but disabled for other devices,<br/>
it takes effect only when you called setDesignResolutionPolicy<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:419](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L419) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable retina display


##### isRetinaEnabled

Check whether retina display is enabled.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCView.js:438](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L438) |



##### enableAntiAlias

Whether to Enable on anti-alias

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:454](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L454) |
| Deprecated | cc.view.enableAntiAlias is deprecated, please use cc.Texture2D.setFilters instead |
| Available since | v2.3.0 |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or not anti-alias


##### isAntiAliasEnabled

Returns whether the current enable on anti-alias

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCView.js:489](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L489) |



##### enableAutoFullScreen

If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
You can pass true as parameter to enable it and disable it by passing false.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:498](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L498) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Enable or disable auto full screen on mobile devices


##### isAutoFullScreenEnabled

Check whether auto full screen is enabled.<br/>
Only useful on web

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCView.js:522](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L522) |



##### getCanvasSize

Returns the canvas size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas element.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/platform/CCView.js:559](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L559) |



##### getFrameSize

Returns the frame size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas's outer DOM element.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/platform/CCView.js:574](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L574) |



##### setFrameSize

On native, it sets the frame size of view.<br/>
On web, it sets the size of the canvas's outer DOM element.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:589](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L589) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getVisibleSize

Returns the visible area size of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/platform/CCView.js:607](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L607) |



##### getVisibleSizeInPixel

Returns the visible area size of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/platform/CCView.js:618](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L618) |



##### getVisibleOrigin

Returns the visible origin of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/platform/CCView.js:630](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L630) |



##### getVisibleOriginInPixel

Returns the visible origin of the view port.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/platform/CCView.js:641](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L641) |



##### getResolutionPolicy

Returns the current resolution policy

| meta | description |
|------|-------------|
| Returns | <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> 
| Defined in | [cocos2d/core/platform/CCView.js:653](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L653) |



##### setResolutionPolicy

Sets the current resolution policy

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:665](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L665) |

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
| Defined in | [cocos2d/core/platform/CCView.js:694](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L694) |

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
| Defined in | [cocos2d/core/platform/CCView.js:775](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L775) |



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
| Defined in | [cocos2d/core/platform/CCView.js:788](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L788) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution width.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Design resolution height.
- `resolutionPolicy` <a href="../classes/ResolutionPolicy.html" class="crosslink">ResolutionPolicy</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The resolution policy desired


##### setViewportInPoints

Sets view port rectangle with points.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:821](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L821) |
| Deprecated | since v2.0 |

###### Parameters
- `x` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `w` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> width
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> height


##### setScissorInPoints

Sets Scissor rectangle with points.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCView.js:840](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L840) |
| Deprecated | since v2.0 |

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
| Defined in | [cocos2d/core/platform/CCView.js:873](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L873) |
| Deprecated | since v2.0 |



##### getScissorRect

Returns the current scissor rectangle

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/platform/CCView.js:885](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L885) |
| Deprecated | since v2.0 |



##### getViewportRect

Returns the view port rectangle.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/platform/CCView.js:908](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L908) |



##### getScaleX

Returns scale factor of the horizontal direction (X axis).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCView.js:919](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L919) |



##### getScaleY

Returns scale factor of the vertical direction (Y axis).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCView.js:930](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L930) |



##### getDevicePixelRatio

Returns device pixel ratio for retina display.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCView.js:941](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L941) |



##### convertToLocationInView

Returns the real location in view for a translation based on a related position

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/core/platform/CCView.js:952](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/CCView.js#L952) |

###### Parameters
- `tx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The X axis translation
- `ty` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The Y axis translation
- `relatedPos` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The related position object including "left", "top", "width", "height" informations


##### hasEventListener

Checks whether the EventTarget object has any callback registered for a specific type of event.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event/event-target.js:69](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L69) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type of event.


##### on

Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [cocos2d/core/event/event-target.js:77](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L77) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, node);
```

##### off

Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:119](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L119) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, if it's not given, only callback without target will be removed

##### Examples

```js
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    cc.log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');
```

##### targetOff

Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:163](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L163) |

###### Parameters
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target to be searched for all related listeners


##### once

Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:182](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L182) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- `arg1` Any arg1
	- `arg2` Any arg2
	- `arg3` Any arg3
	- `arg4` Any arg4
	- `arg5` Any arg5
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The target (this object) to invoke the callback, can be null

##### Examples

```js
eventTarget.once('fire', function () {
    cc.log("this is the callback and will be invoked only once");
}, node);
```

##### dispatchEvent

Send an event with the event object.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event/event-target.js:208](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/event/event-target.js#L208) |

###### Parameters
- `event` <a href="../classes/Event.html" class="crosslink">Event</a>  


##### removeAll

Removes all callbacks registered in a certain event type or all callbacks registered with a certain target

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:235](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/callbacks-invoker.js#L235) |

###### Parameters
- `keyOrTarget` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The event key to be removed or the target to be removed


##### emit

Trigger an event directly with the event name and necessary arguments.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/callbacks-invoker.js:309](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/core/platform/callbacks-invoker.js#L309) |

###### Parameters
- `key` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> event type
- `arg1` Any First argument
- `arg2` Any Second argument
- `arg3` Any Third argument
- `arg4` Any Fourth argument
- `arg5` Any Fifth argument

##### Examples

```js
eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);
```



#### Events

### `design-resolution-changed` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Emit when design resolution changed.


### Index







### Details




### `canvas-resize` Event



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Emit when canvas resize.


### Index







### Details





