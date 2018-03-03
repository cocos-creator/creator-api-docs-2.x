## `ProtocolUser` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)


user protocol


### Index



##### Methods

  - [`login`](#login) login interface
  - [`isLogined`](#islogined) get status of login
  - [`getUserID`](#getuserid) get user ID
  - [`getPluginId`](#getpluginid) get plugin ID
  - [`setListener`](#setlistener) set listener
  - [`getListener`](#getlistener) get listener
  - [`logout`](#logout) logout
Before to invoke, you need to verdict whether this properties existed
  - [`showToolBar`](#showtoolbar) show toolbar
Before to invoke, you need to verdict whether this properties existed
  - [`hideToolBar`](#hidetoolbar) hide toolbar
Before to invoke, you need to verdict whether this properties existed
  - [`enterPlatform`](#enterplatform) enter platform
Before to invoke, you need to verdict whether this properties existed
  - [`exit`](#exit) show exit page
Before to invoke, you need to verdict whether this properties existed
  - [`pause`](#pause) show pause page
Before to invoke, you need to verdict whether this properties existed
  - [`realNameRegister`](#realnameregister) Real-name registration
Before to invoke, you need to verdict whether this properties existed
  - [`antiAddictionQuery`](#antiaddictionquery) Anti-addiction query
Before to invoke, you need to verdict whether this properties existed
  - [`submitLoginGameRole`](#submitlogingamerole) submit game role information
Before to invoke, you need to verdict whether this properties existed
  - [`getUserInfo`](#getuserinfo) get user information
Before to invoke, you need to verdict whether this properties existed
  - [`getAvailableLoginType`](#getavailablelogintype) set login type
Before to invoke, you need to verdict whether this properties existed
  - [`setLoginType`](#setlogintype) set login type
Before to invoke, you need to verdict whether this properties existed
  - [`sendToDesktop`](#sendtodesktop) send to desktop
Before to invoke, you need to verdict whether this properties existed
  - [`openBBS`](#openbbs) open bbs
Before to invoke, you need to verdict whether this properties existed
  - [`isFunctionSupported`](#isfunctionsupported) Check whether the function is supported
  - [`getPluginName`](#getpluginname) get plugin name
  - [`getPluginVersion`](#getpluginversion) get plugin version
  - [`getSDKVersion`](#getsdkversion) get SDK version
  - [`callFuncWithParam`](#callfuncwithparam) void methods for reflections with parameter
  - [`callStringFuncWithParam`](#callstringfuncwithparam) String methods for reflections with parameter
  - [`callIntFuncWithParam`](#callintfuncwithparam) int methods for reflections with parameter
  - [`callBoolFuncWithParam`](#callboolfuncwithparam) boolean methods for reflections with parameter
  - [`callFloatFuncWithParam`](#callfloatfuncwithparam) float methods for reflections with parameter



### Details




<!-- Method Block -->
#### Methods


##### login

login interface

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:462](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L462) |

###### Parameters
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments


##### isLogined

get status of login

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:473](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L473) |



##### getUserID

get user ID

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:486](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L486) |



##### getPluginId

get plugin ID

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:499](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L499) |



##### setListener

set listener

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:511](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L511) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getListener

get listener

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:523](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L523) |



##### logout

logout
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:535](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L535) |



##### showToolBar

show toolbar
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:546](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L546) |

###### Parameters
- `place` anysdk.ToolBarPlace 


##### hideToolBar

hide toolbar
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:558](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L558) |



##### enterPlatform

enter platform
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:569](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L569) |



##### exit

show exit page
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:580](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L580) |



##### pause

show pause page
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:591](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L591) |



##### realNameRegister

Real-name registration
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:602](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L602) |



##### antiAddictionQuery

Anti-addiction query
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:613](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L613) |



##### submitLoginGameRole

submit game role information
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:624](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L624) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getUserInfo

get user information
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:635](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L635) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getAvailableLoginType

set login type
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:647](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L647) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### setLoginType

set login type
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:659](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L659) |

###### Parameters
- `loginType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### sendToDesktop

send to desktop
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:672](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L672) |



##### openBBS

open bbs
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:683](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L683) |



##### isFunctionSupported

Check whether the function is supported

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:327](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L327) |

###### Parameters
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

get plugin name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:341](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L341) |



##### getPluginVersion

get plugin version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:353](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L353) |



##### getSDKVersion

get SDK version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:365](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L365) |



##### callFuncWithParam

void methods for reflections with parameter

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:377](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L377) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

String methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:390](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L390) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

int methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:405](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L405) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

boolean methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:420](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L420) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

float methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:435](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L435) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



