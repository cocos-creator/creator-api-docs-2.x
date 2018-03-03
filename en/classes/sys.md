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

  - [`garbageCollect`](#garbagecollect) Forces the garbage collection, only available in JSB
  - [`dumpRoot`](#dumproot) Dumps rooted objects, only available in JSB
  - [`restartVM`](#restartvm) Restart the JS VM, only available in JSB
  - [`cleanScript`](#cleanscript) Clean a script in the JS VM, only available in JSB
  - [`isObjectValid`](#isobjectvalid) Check whether an object is valid,
In web engine, it will return true if the object exist
In native engine, it will return true if the JS object and the correspond native object are both valid
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
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:39](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L39) |



##### LANGUAGE_CHINESE

> Chinese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:46](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L46) |



##### LANGUAGE_FRENCH

> French language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:53](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L53) |



##### LANGUAGE_ITALIAN

> Italian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:60](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L60) |



##### LANGUAGE_GERMAN

> German language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:67](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L67) |



##### LANGUAGE_SPANISH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:74](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L74) |



##### LANGUAGE_DUTCH

> Spanish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:81](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L81) |



##### LANGUAGE_RUSSIAN

> Russian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:88](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L88) |



##### LANGUAGE_KOREAN

> Korean language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:95](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L95) |



##### LANGUAGE_JAPANESE

> Japanese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:102](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L102) |



##### LANGUAGE_HUNGARIAN

> Hungarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:109](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L109) |



##### LANGUAGE_PORTUGUESE

> Portuguese language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:116](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L116) |



##### LANGUAGE_ARABIC

> Arabic language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:123](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L123) |



##### LANGUAGE_NORWEGIAN

> Norwegian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:130](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L130) |



##### LANGUAGE_POLISH

> Polish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:137](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L137) |



##### LANGUAGE_TURKISH

> Turkish language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:144](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L144) |



##### LANGUAGE_UKRAINIAN

> Ukrainian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:151](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L151) |



##### LANGUAGE_ROMANIAN

> Romanian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:158](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L158) |



##### LANGUAGE_BULGARIAN

> Bulgarian language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:165](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L165) |



##### LANGUAGE_UNKNOWN

> Unknown language code

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:172](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L172) |



##### OS_IOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L179) |



##### OS_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:184](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L184) |



##### OS_WINDOWS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:189](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L189) |



##### OS_MARMALADE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:194](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L194) |



##### OS_LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:199](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L199) |



##### OS_BADA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:204](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L204) |



##### OS_BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:209](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L209) |



##### OS_OSX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:214](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L214) |



##### OS_WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:219](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L219) |



##### OS_WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:224](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L224) |



##### OS_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:229](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L229) |



##### UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:235](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L235) |



##### WIN32

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:241](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L241) |



##### LINUX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:247](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L247) |



##### MACOS

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:253](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L253) |



##### ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:259](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L259) |



##### IPHONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:265](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L265) |



##### IPAD

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:271](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L271) |



##### BLACKBERRY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:277](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L277) |



##### NACL

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:283](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L283) |



##### EMSCRIPTEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:289](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L289) |



##### TIZEN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:295](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L295) |



##### WINRT

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:301](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L301) |



##### WP8

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:307](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L307) |



##### MOBILE_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:313](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L313) |



##### DESKTOP_BROWSER

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:319](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L319) |



##### EDITOR_PAGE

> Indicates whether executes in editor's window process (Electron's renderer context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:326](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L326) |



##### EDITOR_CORE

> Indicates whether executes in editor's main process (Electron's browser context)

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:333](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L333) |



##### WECHAT_GAME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:340](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L340) |



##### QQ_PLAY

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:346](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L346) |



##### BROWSER_TYPE_WECHAT

> BROWSER_TYPE_WECHAT

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:353](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L353) |



##### BROWSER_TYPE_WECHAT_GAME

> BROWSER_TYPE_WECHAT_GAME

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:360](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L360) |



##### BROWSER_TYPE_QQ_PLAY

> BROWSER_TYPE_QQ_PLAY

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:367](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L367) |



##### BROWSER_TYPE_ANDROID

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:374](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L374) |



##### BROWSER_TYPE_IE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:381](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L381) |



##### BROWSER_TYPE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:388](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L388) |



##### BROWSER_TYPE_MOBILE_QQ

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:395](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L395) |



##### BROWSER_TYPE_UC

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:402](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L402) |



##### BROWSER_TYPE_360

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:409](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L409) |



##### BROWSER_TYPE_BAIDU_APP

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:416](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L416) |



##### BROWSER_TYPE_BAIDU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:423](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L423) |



##### BROWSER_TYPE_MAXTHON

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:430](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L430) |



##### BROWSER_TYPE_OPERA

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L437) |



##### BROWSER_TYPE_OUPENG

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:444](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L444) |



##### BROWSER_TYPE_MIUI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:451](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L451) |



##### BROWSER_TYPE_FIREFOX

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:458](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L458) |



##### BROWSER_TYPE_SAFARI

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:465](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L465) |



##### BROWSER_TYPE_CHROME

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:472](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L472) |



##### BROWSER_TYPE_LIEBAO

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:479](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L479) |



##### BROWSER_TYPE_QZONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:486](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L486) |



##### BROWSER_TYPE_SOUGOU

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:493](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L493) |



##### BROWSER_TYPE_UNKNOWN

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:500](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L500) |



##### isNative

> Is native ? This is set to be true in jsb auto.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:509](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L509) |



##### isBrowser

> Is web browser ?

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:515](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L515) |



##### isMobile

> Indicate whether system is mobile system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:639](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L639) |



##### platform

> Indicate the running platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:645](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L645) |



##### language

> Indicate the current language of the running system

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:656](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L656) |



##### os

> Indicate the running os name

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:690](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L690) |



##### osVersion

> Indicate the running os version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:695](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L695) |



##### osMainVersion

> Indicate the running os main version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:700](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L700) |



##### browserType

> Indicate the running browser type

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:706](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L706) |



##### browserVersion

> Indicate the running browser version

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:740](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L740) |



##### windowPixelResolution

> Indicate the real pixel resolution of the whole game window

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:758](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L758) |



##### localStorage

> cc.sys.localStorage is a local storage component.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:806](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L806) |



##### capabilities

> The capabilities of the current platform

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:874](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L874) |






<!-- Method Block -->
#### Methods


##### garbageCollect

Forces the garbage collection, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:981](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L981) |



##### dumpRoot

Dumps rooted objects, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:989](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L989) |



##### restartVM

Restart the JS VM, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:997](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L997) |



##### cleanScript

Clean a script in the JS VM, only available in JSB

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:1005](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L1005) |

###### Parameters
- `jsfile` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### isObjectValid

Check whether an object is valid,
In web engine, it will return true if the object exist
In native engine, it will return true if the JS object and the correspond native object are both valid

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:1014](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L1014) |

###### Parameters
- `obj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### dump

Dump system informations

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:1027](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L1027) |



##### openURL

Open a url in browser

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:1046](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L1046) |

###### Parameters
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### now

Get the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js:1055](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCSys.js#L1055) |




