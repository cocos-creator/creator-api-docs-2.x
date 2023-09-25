## `macro` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


Predefined constants



### 索引

##### 属性（properties）

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
  - [`FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX`](#fixartifactsbystrechingtexeltmx) `Number` To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
  - [`DIRECTOR_STATS_POSITION`](#directorstatsposition) `Vec2` Position of the FPS (Default: 0,0 (bottom-left corner))...
  - [`ENABLE_STACKABLE_ACTIONS`](#enablestackableactions) `Number` <p>...
  - [`TOUCH_TIMEOUT`](#touchtimeout) `Number` 添加这个时长的原因是 X5 内核在微信浏览器中出现的一个 bug。
  - [`BATCH_VERTEX_COUNT`](#batchvertexcount) `Number` 最大可以被单次批处理渲染的顶点数量。
  - [`ENABLE_TILEDMAP_CULLING`](#enabletiledmapculling) `Boolean` 是否开启瓦片地图的自动裁减功能。
  - [`ENABLE_TRANSPARENT_CANVAS`](#enabletransparentcanvas) `Boolean` 用于设置 Canvas 背景是否支持 alpha 通道，默认为 false，这样可以有更高的性能表现。
  - [`ENABLE_WEBGL_ANTIALIAS`](#enablewebglantialias) `Boolean` 用于设置在创建 WebGL Context 时是否开启抗锯齿选项，默认值是 false。
  - [`ENABLE_CULLING`](#enableculling) `Boolean` 是否开启自动裁减功能，开启裁减功能将会把在屏幕外的物体从渲染队列中去除掉。
  - [`CLEANUP_IMAGE_CACHE`](#cleanupimagecache) `Boolean` 是否在将贴图上传至 GPU 之后删除原始图片缓存，删除之后图片将无法进行 [动态合图](https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/dynamic-atlas.html)。
  - [`SHOW_MESH_WIREFRAME`](#showmeshwireframe) `Boolean` 是否显示网格的线框。
  - [`SHOW_MESH_NORMAL`](#showmeshnormal) `Boolean` 是否显示网格的法线。
  - [`ENABLE_MULTI_TOUCH`](#enablemultitouch) `Boolean` 是否开启多点触摸
  - [`ALLOW_IMAGE_BITMAP`](#allowimagebitmap) `Boolean` https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
  - [`ENABLE_NATIVE_TTF_RENDERER`](#enablenativettfrenderer) `Boolean` 是否使用原生的文本渲染机制, 布局和编辑器有差异.
  - [`SUPPORT_TEXTURE_FORMATS`](#supporttextureformats) `String[]` 引擎默认支持的图片格式，支持的格式可能在不同的构建平台和设备类型上有所差别。





### Details


#### 属性（properties）


##### DOWNLOAD_MAX_CONCURRENT

> `cc.macro.DOWNLOAD_MAX_CONCURRENT` is deprecated now, please use <a href="../classes/Downloader.html#property_maxConcurrency" class="crosslink">maxConcurrency</a> instead

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:741](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/deprecated.js#L741) |
| 废弃（Deprecated） | cc.macro.DOWNLOAD_MAX_CONCURRENT is deprecated now, please use cc.assetManager.downloader.maxConcurrency instead |



##### RAD

> PI / 180

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:37](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L37) |



##### DEG

> One degree

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:44](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L44) |



##### REPEAT_FOREVER

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:51](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L51) |



##### FLT_EPSILON

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:57](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L57) |



##### MIN_ZINDEX

> Minimum z index value for node

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:63](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L63) |



##### MAX_ZINDEX

> Maximum z index value for node

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:70](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L70) |



##### ONE

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:78](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L78) |



##### ZERO

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:84](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L84) |



##### SRC_ALPHA

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:90](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L90) |



##### SRC_ALPHA_SATURATE

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:96](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L96) |



##### SRC_COLOR

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:102](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L102) |



##### DST_ALPHA

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:108](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L108) |



##### DST_COLOR

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:114](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L114) |



##### ONE_MINUS_SRC_ALPHA

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:120](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L120) |



##### ONE_MINUS_SRC_COLOR

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:126](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L126) |



##### ONE_MINUS_DST_ALPHA

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:132](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L132) |



##### ONE_MINUS_DST_COLOR

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:138](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L138) |



##### ONE_MINUS_CONSTANT_ALPHA

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:144](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L144) |



##### ONE_MINUS_CONSTANT_COLOR

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:150](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L150) |



##### ORIENTATION_PORTRAIT

> Oriented vertically

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:157](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L157) |



##### ORIENTATION_LANDSCAPE

> Oriented horizontally

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:164](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L164) |



##### ORIENTATION_AUTO

> Oriented automatically

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:171](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L171) |



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
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:185](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L185) |



##### DIRECTOR_STATS_POSITION

> Position of the FPS (Default: 0,0 (bottom-left corner))<br/>
To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:207](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L207) |



##### ENABLE_STACKABLE_ACTIONS

> <p>
   If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.                  <br/>
   If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.        <br/>
   If disabled, only the last run action will take effect.
</p>

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:214](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L214) |



##### TOUCH_TIMEOUT

> 用于甄别一个触点对象是否已经失效并且可以被移除的延时时长
添加这个时长的原因是 X5 内核在微信浏览器中出现的一个 bug。
在这个环境下，如果用户将一个触点从底向上移出页面区域，将不会触发任何 touch cancel 或 touch end 事件，而这个触点会被永远当作停留在页面上的有效触点。
重复这样操作几次之后，屏幕上的触点数量将达到我们的事件系统所支持的最高触点数量，之后所有的触摸事件都将被忽略。
所以这个新的机制可以在触点在一定时间内没有任何更新的情况下视为失效触点并从事件系统中移除。
当然，这也可能移除一个真实的触点，如果用户的触点真的在一定时间段内完全没有移动（这在当前手机屏幕的灵敏度下会很难）。
你可以修改这个值来获得你需要的效果，默认值是 5000 毫秒。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:224](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L224) |



##### BATCH_VERTEX_COUNT

> 最大可以被单次批处理渲染的顶点数量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:246](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L246) |



##### ENABLE_TILEDMAP_CULLING

> 是否开启瓦片地图的自动裁减功能。瓦片地图如果设置了 skew, rotation 或者采用了摄像机的话，需要手动关闭，否则渲染会出错。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:255](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L255) |



##### ENABLE_TRANSPARENT_CANVAS

> 用于设置 Canvas 背景是否支持 alpha 通道，默认为 false，这样可以有更高的性能表现。
如果你希望 Canvas 背景是透明的，并显示背后的其他 DOM 元素，你可以在 `cc.game.run` 之前将这个值设为 true。
仅支持 Web

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:265](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L265) |



##### ENABLE_WEBGL_ANTIALIAS

> 用于设置在创建 WebGL Context 时是否开启抗锯齿选项，默认值是 false。
将这个选项设置为 true 会让你的游戏画面稍稍平滑一些，比如旋转硬边贴图时的锯齿。是否开启这个选项很大程度上取决于你的游戏和面向的平台。
在大多数拥有 retina 级别屏幕的设备上用户往往无法区分这个选项带来的变化；如果你的游戏选择像素艺术风格，你也多半不会想开启这个选项。
同时，在少部分使用软件级别抗锯齿算法的设备或浏览器上，这个选项会对性能产生比较大的影响。
你可以在 `cc.game.run` 之前设置这个值，否则它不会生效。
仅支持 Web

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:280](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L280) |



##### ENABLE_CULLING

> 是否开启自动裁减功能，开启裁减功能将会把在屏幕外的物体从渲染队列中去除掉。
这个功能在 v2.0 的新渲染器中被移除了，因为它在大多数游戏中所带来的损耗要高于性能的提升，目前我们没有计划重新支持自动裁剪。
如果游戏中的动态物体比较多的话，建议将此选项关闭。
如果游戏中的静态物体比较多的话，建议将此选项打开。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:302](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L302) |
| 废弃（Deprecated） | since v2.0 |



##### CLEANUP_IMAGE_CACHE

> 是否在将贴图上传至 GPU 之后删除原始图片缓存，删除之后图片将无法进行 [动态合图](https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/dynamic-atlas.html)。
在 Web 平台，你通常不需要开启这个选项，因为在 Web 平台 Image 对象所占用的内存很小。
但是在微信小游戏平台的当前版本，Image 对象会缓存解码后的图片数据，它所占用的内存空间很大。
所以我们在微信平台默认开启了这个选项，这样我们就可以在上传 GL 贴图之后立即释放 Image 对象的内存，避免过高的内存占用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:320](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L320) |



##### SHOW_MESH_WIREFRAME

> 是否显示网格的线框。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:336](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L336) |



##### SHOW_MESH_NORMAL

> 是否显示网格的法线。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:346](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L346) |



##### ENABLE_MULTI_TOUCH

> 是否开启多点触摸

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:356](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L356) |



##### ALLOW_IMAGE_BITMAP

> References:
https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
是否优先使用 image bitmap，启用之后，内存占用会变高

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:366](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L366) |



##### ENABLE_NATIVE_TTF_RENDERER

> 是否使用原生的文本渲染机制, 布局和编辑器有差异.

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:382](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L382) |



##### SUPPORT_TEXTURE_FORMATS

> 引擎默认支持的图片格式，支持的格式可能在不同的构建平台和设备类型上有所差别。
目前所有平台和设备支持的格式有 ['.astc', '.webp', '.jpg', '.jpeg', '.bmp', '.png']. 另外 Ios 手机平台还额外支持了 PVR 格式。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> |
| 定义于 | [cocos2d/core/platform/CCMacro.js:406](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCMacro.js#L406) |






