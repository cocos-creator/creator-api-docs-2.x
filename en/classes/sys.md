## `sys` Class



Module: [_decorator](../modules/_decorator.md)
Parent Module: [cc](../modules/cc.md)


System variables



### Index

##### Properties

  - [`LANGUAGE_ENGLISH`](#languageenglish) `String` English language code
  - [`LANGUAGE_CHINESE`](#languagechinese) `String` Chinese language code
  - [`LANGUAGE_FRENCH`](#languagefrench) `String` French language code
  - [`LANGUAGE_ITALIAN`](#languageitalian) `String` Italian language code
  - [`LANGUAGE_GERMAN`](#languagegerman) `String` German language code
  - [`LANGUAGE_SPANISH`](#languagespanish) `String` Spanish language code
  - [`LANGUAGE_DUTCH`](#languagedutch) `String` Spanish language code
  - [`LANGUAGE_RUSSIAN`](#languagerussian) `String` Russian language code
  - [`LANGUAGE_KOREAN`](#languagekorean) `String` Korean language code
  - [`LANGUAGE_JAPANESE`](#languagejapanese) `String` Japanese language code
  - [`LANGUAGE_HUNGARIAN`](#languagehungarian) `String` Hungarian language code
  - [`LANGUAGE_PORTUGUESE`](#languageportuguese) `String` Portuguese language code
  - [`LANGUAGE_ARABIC`](#languagearabic) `String` Arabic language code
  - [`LANGUAGE_NORWEGIAN`](#languagenorwegian) `String` Norwegian language code
  - [`LANGUAGE_POLISH`](#languagepolish) `String` Polish language code
  - [`LANGUAGE_TURKISH`](#languageturkish) `String` Turkish language code
  - [`LANGUAGE_UKRAINIAN`](#languageukrainian) `String` Ukrainian language code
  - [`LANGUAGE_ROMANIAN`](#languageromanian) `String` Romanian language code
  - [`LANGUAGE_BULGARIAN`](#languagebulgarian) `String` Bulgarian language code
  - [`LANGUAGE_UNKNOWN`](#languageunknown) `String` Unknown language code
  - [`OS_IOS`](#osios) `String` 
  - [`OS_ANDROID`](#osandroid) `String` 
  - [`OS_WINDOWS`](#oswindows) `String` 
  - [`OS_MARMALADE`](#osmarmalade) `String` 
  - [`OS_LINUX`](#oslinux) `String` 
  - [`OS_BADA`](#osbada) `String` 
  - [`OS_BLACKBERRY`](#osblackberry) `String` 
  - [`OS_OSX`](#ososx) `String` 
  - [`OS_WP8`](#oswp8) `String` 
  - [`OS_WINRT`](#oswinrt) `String` 
  - [`OS_UNKNOWN`](#osunknown) `String` 
  - [`UNKNOWN`](#unknown) `Number` 
  - [`WIN32`](#win32) `Number` 
  - [`LINUX`](#linux) `Number` 
  - [`MACOS`](#macos) `Number` 
  - [`ANDROID`](#android) `Number` 
  - [`IPHONE`](#iphone) `Number` 
  - [`IPAD`](#ipad) `Number` 
  - [`BLACKBERRY`](#blackberry) `Number` 
  - [`NACL`](#nacl) `Number` 
  - [`EMSCRIPTEN`](#emscripten) `Number` 
  - [`TIZEN`](#tizen) `Number` 
  - [`WINRT`](#winrt) `Number` 
  - [`WP8`](#wp8) `Number` 
  - [`MOBILE_BROWSER`](#mobilebrowser) `Number` 
  - [`DESKTOP_BROWSER`](#desktopbrowser) `Number` 
  - [`EDITOR_PAGE`](#editorpage) `Number` Indicates whether executes in editor's window process (Electron's renderer context)
  - [`EDITOR_CORE`](#editorcore) `Number` Indicates whether executes in editor's main process (Electron's browser context)
  - [`WECHAT_GAME`](#wechatgame) `Number` 
  - [`QQ_PLAY`](#qqplay) `Number` 
  - [`FB_PLAYABLE_ADS`](#fbplayableads) `Number` 
  - [`BAIDU_GAME`](#baidugame) `Number` 
  - [`VIVO_GAME`](#vivogame) `Number` 
  - [`OPPO_GAME`](#oppogame) `Number` 
  - [`HUAWEI_GAME`](#huaweigame) `Number` 
  - [`XIAOMI_GAME`](#xiaomigame) `Number` 
  - [`JKW_GAME`](#jkwgame) `Number` 
  - [`ALIPAY_GAME`](#alipaygame) `Number` 
  - [`WECHAT_GAME_SUB`](#wechatgamesub) `Number` 
  - [`BAIDU_GAME_SUB`](#baidugamesub) `Number` 
  - [`BROWSER_TYPE_WECHAT`](#browsertypewechat) `String` BROWSER_TYPE_WECHAT
  - [`BROWSER_TYPE_WECHAT_GAME`](#browsertypewechatgame) `String` BROWSER_TYPE_WECHAT_GAME
  - [`BROWSER_TYPE_WECHAT_GAME_SUB`](#browsertypewechatgamesub) `String` BROWSER_TYPE_WECHAT_GAME_SUB
  - [`BROWSER_TYPE_BAIDU_GAME`](#browsertypebaidugame) `String` BROWSER_TYPE_BAIDU_GAME
  - [`BROWSER_TYPE_BAIDU_GAME_SUB`](#browsertypebaidugamesub) `String` BROWSER_TYPE_BAIDU_GAME_SUB
  - [`BROWSER_TYPE_XIAOMI_GAME`](#browsertypexiaomigame) `String` BROWSER_TYPE_XIAOMI_GAME
  - [`BROWSER_TYPE_ALIPAY_GAME`](#browsertypealipaygame) `String` BROWSER_TYPE_ALIPAY_GAME
  - [`BROWSER_TYPE_QQ_PLAY`](#browsertypeqqplay) `String` BROWSER_TYPE_QQ_PLAY
  - [`BROWSER_TYPE_ANDROID`](#browsertypeandroid) `String` 
  - [`BROWSER_TYPE_IE`](#browsertypeie) `String` 
  - [`BROWSER_TYPE_EDGE`](#browsertypeedge) `String` 
  - [`BROWSER_TYPE_QQ`](#browsertypeqq) `String` 
  - [`BROWSER_TYPE_MOBILE_QQ`](#browsertypemobileqq) `String` 
  - [`BROWSER_TYPE_UC`](#browsertypeuc) `String` 
  - [`BROWSER_TYPE_UCBS`](#browsertypeucbs) `String` uc third party integration.
  - [`BROWSER_TYPE_360`](#browsertype360) `String` 
  - [`BROWSER_TYPE_BAIDU_APP`](#browsertypebaiduapp) `String` 
  - [`BROWSER_TYPE_BAIDU`](#browsertypebaidu) `String` 
  - [`BROWSER_TYPE_MAXTHON`](#browsertypemaxthon) `String` 
  - [`BROWSER_TYPE_OPERA`](#browsertypeopera) `String` 
  - [`BROWSER_TYPE_OUPENG`](#browsertypeoupeng) `String` 
  - [`BROWSER_TYPE_MIUI`](#browsertypemiui) `String` 
  - [`BROWSER_TYPE_FIREFOX`](#browsertypefirefox) `String` 
  - [`BROWSER_TYPE_SAFARI`](#browsertypesafari) `String` 
  - [`BROWSER_TYPE_CHROME`](#browsertypechrome) `String` 
  - [`BROWSER_TYPE_LIEBAO`](#browsertypeliebao) `String` 
  - [`BROWSER_TYPE_QZONE`](#browsertypeqzone) `String` 
  - [`BROWSER_TYPE_SOUGOU`](#browsertypesougou) `String` 
  - [`BROWSER_TYPE_UNKNOWN`](#browsertypeunknown) `String` 
  - [`isNative`](#isnative) `Boolean` Is native ? This is set to be true in jsb auto.
  - [`isBrowser`](#isbrowser) `Boolean` Is web browser ?
  - [`isMobile`](#ismobile) `Boolean` Indicate whether system is mobile system
  - [`platform`](#platform) `Number` Indicate the running platform
  - [`languageCode`](#languagecode) `String` Get current language iso 639-1 code.
  - [`language`](#language) `String` Indicate the current language of the running system
  - [`os`](#os) `String` Indicate the running os name
  - [`osVersion`](#osversion) `String` Indicate the running os version
  - [`osMainVersion`](#osmainversion) `Number` Indicate the running os main version
  - [`browserType`](#browsertype) `String` Indicate the running browser type
  - [`browserVersion`](#browserversion) `String` Indicate the running browser version
  - [`windowPixelResolution`](#windowpixelresolution) `Size` Indicate the real pixel resolution of the whole game window
  - [`localStorage`](#localstorage) `Object` cc.sys.localStorage is a local storage component.
  - [`capabilities`](#capabilities) `Object` The capabilities of the current platform



##### Methods

  - [`glExtension`](#glextension) Is webgl extension support?
  - [`getMaxJointMatrixSize`](#getmaxjointmatrixsize) Get max joint matrix size for skinned mesh renderer.
  - [`getNetworkType`](#getnetworktype) Get the network type of current device, return cc.sys.NetworkType.LAN if failure.
  - [`getBatteryLevel`](#getbatterylevel) Get the battery level of current device, return 1.0 if failure.
  - [`garbageCollect`](#garbagecollect) Forces the garbage collection, only available in JSB
  - [`restartVM`](#restartvm) Restart the JS VM, only available in JSB
  - [`getSafeAreaRect`](#getsafearearect) Return the safe area rect.
  - [`isObjectValid`](#isobjectvalid) In web engine, it will return true if the object exist
  - [`dump`](#dump) Dump system informations
  - [`openURL`](#openurl) Open a url in browser
  - [`now`](#now) Get the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.



### Details


#### Properties


##### LANGUAGE_ENGLISH

> English language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:51](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L51) |



##### LANGUAGE_CHINESE

> Chinese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:58](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L58) |



##### LANGUAGE_FRENCH

> French language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:65](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L65) |



##### LANGUAGE_ITALIAN

> Italian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:72](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L72) |



##### LANGUAGE_GERMAN

> German language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:79](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L79) |



##### LANGUAGE_SPANISH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:86](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L86) |



##### LANGUAGE_DUTCH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:93](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L93) |



##### LANGUAGE_RUSSIAN

> Russian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:100](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L100) |



##### LANGUAGE_KOREAN

> Korean language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:107](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L107) |



##### LANGUAGE_JAPANESE

> Japanese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:114](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L114) |



##### LANGUAGE_HUNGARIAN

> Hungarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:121](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L121) |



##### LANGUAGE_PORTUGUESE

> Portuguese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:128](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L128) |



##### LANGUAGE_ARABIC

> Arabic language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:135](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L135) |



##### LANGUAGE_NORWEGIAN

> Norwegian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:142](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L142) |



##### LANGUAGE_POLISH

> Polish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:149](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L149) |



##### LANGUAGE_TURKISH

> Turkish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:156](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L156) |



##### LANGUAGE_UKRAINIAN

> Ukrainian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:163](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L163) |



##### LANGUAGE_ROMANIAN

> Romanian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:170](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L170) |



##### LANGUAGE_BULGARIAN

> Bulgarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:177](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L177) |



##### LANGUAGE_UNKNOWN

> Unknown language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:184](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L184) |



##### OS_IOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:191](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L191) |



##### OS_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:196](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L196) |



##### OS_WINDOWS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:201](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L201) |



##### OS_MARMALADE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:206](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L206) |



##### OS_LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:211](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L211) |



##### OS_BADA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:216](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L216) |



##### OS_BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:221](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L221) |



##### OS_OSX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:226](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L226) |



##### OS_WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:231](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L231) |



##### OS_WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:236](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L236) |



##### OS_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:241](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L241) |



##### UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:247](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L247) |



##### WIN32

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:253](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L253) |



##### LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:259](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L259) |



##### MACOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:265](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L265) |



##### ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:271](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L271) |



##### IPHONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:277](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L277) |



##### IPAD

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:283](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L283) |



##### BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:289](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L289) |



##### NACL

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:295](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L295) |



##### EMSCRIPTEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:301](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L301) |



##### TIZEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:307](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L307) |



##### WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:313](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L313) |



##### WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:319](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L319) |



##### MOBILE_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:325](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L325) |



##### DESKTOP_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:331](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L331) |



##### EDITOR_PAGE

> Indicates whether executes in editor's window process (Electron's renderer context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:338](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L338) |



##### EDITOR_CORE

> Indicates whether executes in editor's main process (Electron's browser context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:345](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L345) |



##### WECHAT_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:352](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L352) |



##### QQ_PLAY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:358](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L358) |



##### FB_PLAYABLE_ADS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:364](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L364) |



##### BAIDU_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:370](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L370) |



##### VIVO_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:376](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L376) |



##### OPPO_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:382](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L382) |



##### HUAWEI_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:388](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L388) |



##### XIAOMI_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:394](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L394) |



##### JKW_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:400](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L400) |



##### ALIPAY_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:406](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L406) |



##### WECHAT_GAME_SUB

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:412](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L412) |



##### BAIDU_GAME_SUB

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:418](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L418) |



##### BROWSER_TYPE_WECHAT

> BROWSER_TYPE_WECHAT

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:424](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L424) |



##### BROWSER_TYPE_WECHAT_GAME

> BROWSER_TYPE_WECHAT_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:431](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L431) |



##### BROWSER_TYPE_WECHAT_GAME_SUB

> BROWSER_TYPE_WECHAT_GAME_SUB

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:438](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L438) |



##### BROWSER_TYPE_BAIDU_GAME

> BROWSER_TYPE_BAIDU_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:445](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L445) |



##### BROWSER_TYPE_BAIDU_GAME_SUB

> BROWSER_TYPE_BAIDU_GAME_SUB

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:452](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L452) |



##### BROWSER_TYPE_XIAOMI_GAME

> BROWSER_TYPE_XIAOMI_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:459](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L459) |



##### BROWSER_TYPE_ALIPAY_GAME

> BROWSER_TYPE_ALIPAY_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:466](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L466) |



##### BROWSER_TYPE_QQ_PLAY

> BROWSER_TYPE_QQ_PLAY

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:473](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L473) |



##### BROWSER_TYPE_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:480](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L480) |



##### BROWSER_TYPE_IE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:487](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L487) |



##### BROWSER_TYPE_EDGE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:494](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L494) |



##### BROWSER_TYPE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:501](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L501) |



##### BROWSER_TYPE_MOBILE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:508](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L508) |



##### BROWSER_TYPE_UC

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:515](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L515) |



##### BROWSER_TYPE_UCBS

> uc third party integration.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:522](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L522) |



##### BROWSER_TYPE_360

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:529](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L529) |



##### BROWSER_TYPE_BAIDU_APP

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:536](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L536) |



##### BROWSER_TYPE_BAIDU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:543](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L543) |



##### BROWSER_TYPE_MAXTHON

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:550](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L550) |



##### BROWSER_TYPE_OPERA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:557](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L557) |



##### BROWSER_TYPE_OUPENG

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:564](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L564) |



##### BROWSER_TYPE_MIUI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:571](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L571) |



##### BROWSER_TYPE_FIREFOX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:578](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L578) |



##### BROWSER_TYPE_SAFARI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:585](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L585) |



##### BROWSER_TYPE_CHROME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:592](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L592) |



##### BROWSER_TYPE_LIEBAO

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:599](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L599) |



##### BROWSER_TYPE_QZONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:606](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L606) |



##### BROWSER_TYPE_SOUGOU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:613](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L613) |



##### BROWSER_TYPE_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:620](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L620) |



##### isNative

> Is native ? This is set to be true in jsb auto.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:628](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L628) |



##### isBrowser

> Is web browser ?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:635](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L635) |



##### isMobile

> Indicate whether system is mobile system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:776](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L776) |



##### platform

> Indicate the running platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:782](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L782) |



##### languageCode

> Get current language iso 639-1 code.
Examples of valid language codes include "zh-tw", "en", "en-us", "fr", "fr-fr", "es-es", etc.
The actual value totally depends on results provided by destination platform.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:797](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L797) |



##### language

> Indicate the current language of the running system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:807](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L807) |



##### os

> Indicate the running os name

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:846](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L846) |



##### osVersion

> Indicate the running os version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:851](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L851) |



##### osMainVersion

> Indicate the running os main version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:856](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L856) |



##### browserType

> Indicate the running browser type

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:862](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L862) |



##### browserVersion

> Indicate the running browser version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:893](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L893) |



##### windowPixelResolution

> Indicate the real pixel resolution of the whole game window

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:911](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L911) |



##### localStorage

> cc.sys.localStorage is a local storage component.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:944](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L944) |



##### capabilities

> The capabilities of the current platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:975](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L975) |






<!-- Method Block -->
#### Methods


##### glExtension

Is webgl extension support?

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:641](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L641) |

###### Parameters
- `name` Unknown 


##### getMaxJointMatrixSize

Get max joint matrix size for skinned mesh renderer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:650](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L650) |



##### getNetworkType

Get the network type of current device, return cc.sys.NetworkType.LAN if failure.

| meta | description |
|------|-------------|
| Returns | NetworkType 
| Defined in | [cocos2d/core/platform/CCSys.js:1125](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1125) |



##### getBatteryLevel

Get the battery level of current device, return 1.0 if failure.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1139](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1139) |



##### garbageCollect

Forces the garbage collection, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1153](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1153) |



##### restartVM

Restart the JS VM, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1161](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1161) |



##### getSafeAreaRect

Return the safe area rect. <br/>
only available on the iOS native platform, otherwise it will return a rect with design resolution size.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Rect.html" class="crosslink">Rect</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1169](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1169) |



##### isObjectValid

Check whether an object is valid,
In web engine, it will return true if the object exist
In native engine, it will return true if the JS object and the correspond native object are both valid

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1183](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1183) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### dump

Dump system informations

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1198](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1198) |



##### openURL

Open a url in browser

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1217](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1217) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### now

Get the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1231](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/platform/CCSys.js#L1231) |




