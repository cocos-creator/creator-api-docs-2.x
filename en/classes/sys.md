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
  - [`BROWSER_TYPE_WECHAT`](#browsertypewechat) `String` BROWSER_TYPE_WECHAT
  - [`BROWSER_TYPE_WECHAT_GAME`](#browsertypewechatgame) `String` BROWSER_TYPE_WECHAT_GAME
  - [`BROWSER_TYPE_QQ_PLAY`](#browsertypeqqplay) `String` BROWSER_TYPE_QQ_PLAY
  - [`BROWSER_TYPE_ANDROID`](#browsertypeandroid) `String` 
  - [`BROWSER_TYPE_IE`](#browsertypeie) `String` 
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

  - [`getBatteryLevel`](#getbatterylevel) Get the battery level of current device, return 1.0 if failure.
  - [`getNetworkType`](#getnetworktype) Get the network type of current device, return cc.sys.NetworkType.LAN if failure.
  - [`garbageCollect`](#garbagecollect) Forces the garbage collection, only available in JSB
  - [`dumpRoot`](#dumproot) Dumps rooted objects, only available in JSB
  - [`restartVM`](#restartvm) Restart the JS VM, only available in JSB
  - [`cleanScript`](#cleanscript) Clean a script in the JS VM, only available in JSB
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
| Defined in | [cocos2d/core/platform/CCSys.js:41](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L41) |



##### LANGUAGE_CHINESE

> Chinese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:48](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L48) |



##### LANGUAGE_FRENCH

> French language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:55](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L55) |



##### LANGUAGE_ITALIAN

> Italian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:62](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L62) |



##### LANGUAGE_GERMAN

> German language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:69](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L69) |



##### LANGUAGE_SPANISH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:76](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L76) |



##### LANGUAGE_DUTCH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:83](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L83) |



##### LANGUAGE_RUSSIAN

> Russian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:90](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L90) |



##### LANGUAGE_KOREAN

> Korean language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:97](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L97) |



##### LANGUAGE_JAPANESE

> Japanese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:104](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L104) |



##### LANGUAGE_HUNGARIAN

> Hungarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:111](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L111) |



##### LANGUAGE_PORTUGUESE

> Portuguese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:118](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L118) |



##### LANGUAGE_ARABIC

> Arabic language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:125](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L125) |



##### LANGUAGE_NORWEGIAN

> Norwegian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:132](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L132) |



##### LANGUAGE_POLISH

> Polish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:139](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L139) |



##### LANGUAGE_TURKISH

> Turkish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:146](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L146) |



##### LANGUAGE_UKRAINIAN

> Ukrainian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:153](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L153) |



##### LANGUAGE_ROMANIAN

> Romanian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:160](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L160) |



##### LANGUAGE_BULGARIAN

> Bulgarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:167](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L167) |



##### LANGUAGE_UNKNOWN

> Unknown language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:174](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L174) |



##### OS_IOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:181](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L181) |



##### OS_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:186](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L186) |



##### OS_WINDOWS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:191](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L191) |



##### OS_MARMALADE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:196](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L196) |



##### OS_LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:201](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L201) |



##### OS_BADA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:206](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L206) |



##### OS_BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:211](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L211) |



##### OS_OSX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:216](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L216) |



##### OS_WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:221](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L221) |



##### OS_WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:226](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L226) |



##### OS_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:231](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L231) |



##### UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:237](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L237) |



##### WIN32

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:243](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L243) |



##### LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:249](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L249) |



##### MACOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:255](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L255) |



##### ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:261](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L261) |



##### IPHONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:267](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L267) |



##### IPAD

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:273](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L273) |



##### BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:279](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L279) |



##### NACL

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:285](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L285) |



##### EMSCRIPTEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:291](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L291) |



##### TIZEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:297](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L297) |



##### WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:303](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L303) |



##### WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:309](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L309) |



##### MOBILE_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:315](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L315) |



##### DESKTOP_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:321](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L321) |



##### EDITOR_PAGE

> Indicates whether executes in editor's window process (Electron's renderer context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:328](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L328) |



##### EDITOR_CORE

> Indicates whether executes in editor's main process (Electron's browser context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:335](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L335) |



##### WECHAT_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:342](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L342) |



##### QQ_PLAY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:348](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L348) |



##### BROWSER_TYPE_WECHAT

> BROWSER_TYPE_WECHAT

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:355](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L355) |



##### BROWSER_TYPE_WECHAT_GAME

> BROWSER_TYPE_WECHAT_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:362](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L362) |



##### BROWSER_TYPE_QQ_PLAY

> BROWSER_TYPE_QQ_PLAY

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:371](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L371) |



##### BROWSER_TYPE_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:378](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L378) |



##### BROWSER_TYPE_IE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:385](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L385) |



##### BROWSER_TYPE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:392](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L392) |



##### BROWSER_TYPE_MOBILE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:399](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L399) |



##### BROWSER_TYPE_UC

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:406](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L406) |



##### BROWSER_TYPE_UCBS

> uc third party integration.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:413](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L413) |



##### BROWSER_TYPE_360

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:420](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L420) |



##### BROWSER_TYPE_BAIDU_APP

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:427](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L427) |



##### BROWSER_TYPE_BAIDU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:434](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L434) |



##### BROWSER_TYPE_MAXTHON

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:441](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L441) |



##### BROWSER_TYPE_OPERA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:448](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L448) |



##### BROWSER_TYPE_OUPENG

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:455](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L455) |



##### BROWSER_TYPE_MIUI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:462](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L462) |



##### BROWSER_TYPE_FIREFOX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:469](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L469) |



##### BROWSER_TYPE_SAFARI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:476](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L476) |



##### BROWSER_TYPE_CHROME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:483](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L483) |



##### BROWSER_TYPE_LIEBAO

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:490](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L490) |



##### BROWSER_TYPE_QZONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:497](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L497) |



##### BROWSER_TYPE_SOUGOU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:504](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L504) |



##### BROWSER_TYPE_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:511](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L511) |



##### isNative

> Is native ? This is set to be true in jsb auto.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:590](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L590) |



##### isBrowser

> Is web browser ?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:596](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L596) |



##### isMobile

> Indicate whether system is mobile system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:747](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L747) |



##### platform

> Indicate the running platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:753](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L753) |



##### language

> Indicate the current language of the running system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:764](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L764) |



##### os

> Indicate the running os name

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:797](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L797) |



##### osVersion

> Indicate the running os version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:802](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L802) |



##### osMainVersion

> Indicate the running os main version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:807](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L807) |



##### browserType

> Indicate the running browser type

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:813](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L813) |



##### browserVersion

> Indicate the running browser version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:851](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L851) |



##### windowPixelResolution

> Indicate the real pixel resolution of the whole game window

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:869](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L869) |



##### localStorage

> cc.sys.localStorage is a local storage component.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:917](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L917) |



##### capabilities

> The capabilities of the current platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/platform/CCSys.js:986](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L986) |






<!-- Method Block -->
#### Methods


##### getBatteryLevel

Get the battery level of current device, return 1.0 if failure.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:561](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L561) |



##### getNetworkType

Get the network type of current device, return cc.sys.NetworkType.LAN if failure.

| meta | description |
|------|-------------|
| Returns | <a href="../enums/NetworkType.html" class="crosslink">NetworkType</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:575](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L575) |



##### garbageCollect

Forces the garbage collection, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1093](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1093) |



##### dumpRoot

Dumps rooted objects, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1101](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1101) |



##### restartVM

Restart the JS VM, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1109](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1109) |



##### cleanScript

Clean a script in the JS VM, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1117](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1117) |

###### Parameters
- `jsfile` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### isObjectValid

Check whether an object is valid,
In web engine, it will return true if the object exist
In native engine, it will return true if the JS object and the correspond native object are both valid

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1126](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1126) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### dump

Dump system informations

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1139](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1139) |



##### openURL

Open a url in browser

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCSys.js:1158](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1158) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### now

Get the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/platform/CCSys.js:1167](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/platform/CCSys.js#L1167) |




