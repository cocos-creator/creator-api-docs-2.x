## `macro` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Predefined constants



### Index

##### Properties

  - [`DOWNLOAD_MAX_CONCURRENT`](#downloadmaxconcurrent) `Number` `cc.macro.DOWNLOAD_MAX_CONCURRENT` is deprecated now, please use <a href="../classes/Downloader.html#property_maxConcurrency" class="crosslink">maxConcurrency</a> instead
  - [`RAD`](#rad) `Number` PI / 180
  - [`DEG`](#deg) `Number` One degree
  - [`REPEAT_FOREVER`](#repeatforever) `Number` 
  - [`FLT_EPSILON`](#fltepsilon) `Number` 
  - [`MIN_ZINDEX`](#minzindex) `Number` Minimum z index value for node
  - [`MAX_ZINDEX`](#maxzindex) `Number` Maximum z index value for node
  - [`ONE`](#one) `Number` 
  - [`ZERO`](#zero) `Number` 
  - [`SRC_ALPHA`](#srcalpha) `Number` 
  - [`SRC_ALPHA_SATURATE`](#srcalphasaturate) `Number` 
  - [`SRC_COLOR`](#srccolor) `Number` 
  - [`DST_ALPHA`](#dstalpha) `Number` 
  - [`DST_COLOR`](#dstcolor) `Number` 
  - [`ONE_MINUS_SRC_ALPHA`](#oneminussrcalpha) `Number` 
  - [`ONE_MINUS_SRC_COLOR`](#oneminussrccolor) `Number` 
  - [`ONE_MINUS_DST_ALPHA`](#oneminusdstalpha) `Number` 
  - [`ONE_MINUS_DST_COLOR`](#oneminusdstcolor) `Number` 
  - [`ONE_MINUS_CONSTANT_ALPHA`](#oneminusconstantalpha) `Number` 
  - [`ONE_MINUS_CONSTANT_COLOR`](#oneminusconstantcolor) `Number` 
  - [`ORIENTATION_PORTRAIT`](#orientationportrait) `Number` Oriented vertically
  - [`ORIENTATION_LANDSCAPE`](#orientationlandscape) `Number` Oriented horizontally
  - [`ORIENTATION_AUTO`](#orientationauto) `Number` Oriented automatically
  - [`FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX`](#fixartifactsbystrechingtexeltmx) `Number` The same for bottom and top.
  - [`DIRECTOR_STATS_POSITION`](#directorstatsposition) `Vec2` Position of the FPS (Default: 0,0 (bottom-left corner))...
  - [`ENABLE_STACKABLE_ACTIONS`](#enablestackableactions) `Number` If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.
  - [`TOUCH_TIMEOUT`](#touchtimeout) `Number` The timeout to determine whether a touch is no longer active and should be removed.
  - [`BATCH_VERTEX_COUNT`](#batchvertexcount) `Number` The maximum vertex count for a single batched draw call.
  - [`ENABLE_TILEDMAP_CULLING`](#enabletiledmapculling) `Boolean` Whether or not enabled tiled map auto culling.
  - [`ENABLE_TRANSPARENT_CANVAS`](#enabletransparentcanvas) `Boolean` Boolean that indicates if the canvas contains an alpha channel, default sets to false for better performance.
  - [`ENABLE_WEBGL_ANTIALIAS`](#enablewebglantialias) `Boolean` Boolean that indicates if the WebGL context is created with `antialias` option turned on, default value is false.
  - [`ENABLE_CULLING`](#enableculling) `Boolean` Whether or not enable auto culling.
  - [`CLEANUP_IMAGE_CACHE`](#cleanupimagecache) `Boolean` Whether to clear the original image cache after uploaded a texture to GPU.
  - [`SHOW_MESH_WIREFRAME`](#showmeshwireframe) `Boolean` Whether or not show mesh wire frame.
  - [`SHOW_MESH_NORMAL`](#showmeshnormal) `Boolean` Whether or not show mesh normal.
  - [`ENABLE_MULTI_TOUCH`](#enablemultitouch) `Boolean` Whether to enable multi-touch.
  - [`ALLOW_IMAGE_BITMAP`](#allowimagebitmap) `Boolean` Whether to use image bitmap first.
  - [`ENABLE_NATIVE_TTF_RENDERER`](#enablenativettfrenderer) `Boolean` Whether to use native TTF renderer which is faster but layout slightly different.
  - [`SUPPORT_TEXTURE_FORMATS`](#supporttextureformats) `String[]` The image format supported by the engine defaults, and the supported formats may differ in different build platforms and device types.





### Details


#### Properties


##### DOWNLOAD_MAX_CONCURRENT

> `cc.macro.DOWNLOAD_MAX_CONCURRENT` is deprecated now, please use <a href="../classes/Downloader.html#property_maxConcurrency" class="crosslink">maxConcurrency</a> instead

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/asset-manager/deprecated.js:741](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/asset-manager/deprecated.js#L741) |
| Deprecated | cc.macro.DOWNLOAD_MAX_CONCURRENT is deprecated now, please use cc.assetManager.downloader.maxConcurrency instead |



##### RAD

> PI / 180

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:37](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L37) |



##### DEG

> One degree

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:44](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L44) |



##### REPEAT_FOREVER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:51](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L51) |



##### FLT_EPSILON

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:57](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L57) |



##### MIN_ZINDEX

> Minimum z index value for node

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:63](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L63) |



##### MAX_ZINDEX

> Maximum z index value for node

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:70](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L70) |



##### ONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:78](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L78) |



##### ZERO

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:84](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L84) |



##### SRC_ALPHA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:90](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L90) |



##### SRC_ALPHA_SATURATE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:96](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L96) |



##### SRC_COLOR

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:102](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L102) |



##### DST_ALPHA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:108](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L108) |



##### DST_COLOR

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:114](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L114) |



##### ONE_MINUS_SRC_ALPHA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:120](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L120) |



##### ONE_MINUS_SRC_COLOR

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:126](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L126) |



##### ONE_MINUS_DST_ALPHA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:132](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L132) |



##### ONE_MINUS_DST_COLOR

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:138](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L138) |



##### ONE_MINUS_CONSTANT_ALPHA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:144](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L144) |



##### ONE_MINUS_CONSTANT_COLOR

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:150](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L150) |



##### ORIENTATION_PORTRAIT

> Oriented vertically

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:157](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L157) |



##### ORIENTATION_LANDSCAPE

> Oriented horizontally

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:164](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L164) |



##### ORIENTATION_AUTO

> Oriented automatically

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:171](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L171) |



##### FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX

> <p>
  If enabled, the texture coordinates will be calculated by using this formula: <br/>
     - texCoord.left = (rect.x*2+1) / (texture.wide*2);                  <br/>
     - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2); <br/>
                                                                                <br/>
 The same for bottom and top.                                                   <br/>
                                                                                <br/>
 This formula prevents artifacts by using 99% of the texture.                   <br/>
 The "correct" way to prevent artifacts is by expand the texture's border with the same color by 1 pixel<br/>
                                                                                 <br/>
 Affected component:                                                                 <br/>
     - cc.TMXLayer                                                       <br/>
                                                                                 <br/>
 Enabled by default. To disabled set it to 0. <br/>
 To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
</p>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:185](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L185) |



##### DIRECTOR_STATS_POSITION

> Position of the FPS (Default: 0,0 (bottom-left corner))<br/>
To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:207](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L207) |



##### ENABLE_STACKABLE_ACTIONS

> <p>
   If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.                  <br/>
   If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.        <br/>
   If disabled, only the last run action will take effect.
</p>

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:214](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L214) |



##### TOUCH_TIMEOUT

> The timeout to determine whether a touch is no longer active and should be removed.
The reason to add this timeout is due to an issue in X5 browser core,
when X5 is presented in wechat on Android, if a touch is glissed from the bottom up, and leave the page area,
no touch cancel event is triggered, and the touch will be considered active forever.
After multiple times of this action, our maximum touches number will be reached and all new touches will be ignored.
So this new mechanism can remove the touch that should be inactive if it's not updated during the last 5000 milliseconds.
Though it might remove a real touch if it's just not moving for the last 5 seconds which is not easy with the sensibility of mobile touch screen.
You can modify this value to have a better behavior if you find it's not enough.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:224](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L224) |



##### BATCH_VERTEX_COUNT

> The maximum vertex count for a single batched draw call.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:246](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L246) |



##### ENABLE_TILEDMAP_CULLING

> Whether or not enabled tiled map auto culling. If you set the TiledMap skew or rotation, then need to manually disable this, otherwise, the rendering will be wrong.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:255](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L255) |



##### ENABLE_TRANSPARENT_CANVAS

> Boolean that indicates if the canvas contains an alpha channel, default sets to false for better performance.
Though if you want to make your canvas background transparent and show other dom elements at the background,
you can set it to true before `cc.game.run`.
Web only.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:265](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L265) |



##### ENABLE_WEBGL_ANTIALIAS

> Boolean that indicates if the WebGL context is created with `antialias` option turned on, default value is false.
Set it to true could make your game graphics slightly smoother, like texture hard edges when rotated.
Whether to use this really depend on your game design and targeted platform,
device with retina display usually have good detail on graphics with or without this option,
you probably don't want antialias if your game style is pixel art based.
Also, it could have great performance impact with some browser / device using software MSAA.
You can set it to true before `cc.game.run`.
Web only.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:280](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L280) |



##### ENABLE_CULLING

> Whether or not enable auto culling.
This feature have been removed in v2.0 new renderer due to overall performance consumption.
We have no plan currently to re-enable auto culling.
If your game have more dynamic objects, we suggest to disable auto culling.
If your game have more static objects, we suggest to enable auto culling.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:302](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L302) |
| Deprecated | since v2.0 |



##### CLEANUP_IMAGE_CACHE

> Whether to clear the original image cache after uploaded a texture to GPU. If cleared, [Dynamic Atlas](https://docs.cocos.com/creator/manual/en/advanced-topics/dynamic-atlas.html) will not be supported.
Normally you don't need to enable this option on the web platform, because Image object doesn't consume too much memory.
But on WeChat Game platform, the current version cache decoded data in Image object, which has high memory usage.
So we enabled this option by default on WeChat, so that we can release Image cache immediately after uploaded to GPU.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:320](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L320) |



##### SHOW_MESH_WIREFRAME

> Whether or not show mesh wire frame.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:336](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L336) |



##### SHOW_MESH_NORMAL

> Whether or not show mesh normal.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:346](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L346) |



##### ENABLE_MULTI_TOUCH

> Whether to enable multi-touch.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:356](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L356) |



##### ALLOW_IMAGE_BITMAP

> References:
https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
Whether to use image bitmap first. If enabled, memory usage will increase.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:366](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L366) |



##### ENABLE_NATIVE_TTF_RENDERER

> Whether to use native TTF renderer which is faster but layout slightly different.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:382](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L382) |



##### SUPPORT_TEXTURE_FORMATS

> The image format supported by the engine defaults, and the supported formats may differ in different build platforms and device types.
Currently all platform and device support ['.webp', '.jpg', '.jpeg', '.bmp', '.png'], The iOS mobile platform also supports the PVR format。

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| Defined in | [cocos2d/core/platform/CCMacro.js:406](https://github.com/cocos-creator/engine/blob/76f37f407b386c997979b56dd0d3e99ac2c02cc4/cocos2d/core/platform/CCMacro.js#L406) |






