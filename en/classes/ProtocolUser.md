## `ProtocolUser` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)


user protocol


### Index



##### Methods

  - [`login`](#login) 
  - [`isLogined`](#islogined) 
  - [`getUserID`](#getuserid) 
  - [`getPluginId`](#getpluginid) 
  - [`setListener`](#setlistener) 
  - [`getListener`](#getlistener) 
  - [`logout`](#logout) 
  - [`showToolBar`](#showtoolbar) 
  - [`hideToolBar`](#hidetoolbar) 
  - [`enterPlatform`](#enterplatform) 
  - [`exit`](#exit) 
  - [`pause`](#pause) 
  - [`realNameRegister`](#realnameregister) 
  - [`antiAddictionQuery`](#antiaddictionquery) 
  - [`submitLoginGameRole`](#submitlogingamerole) 
  - [`getUserInfo`](#getuserinfo) 
  - [`getAvailableLoginType`](#getavailablelogintype) 
  - [`setLoginType`](#setlogintype) 
  - [`sendToDesktop`](#sendtodesktop) 
  - [`openBBS`](#openbbs) 
  - [`isFunctionSupported`](#isfunctionsupported) 
  - [`getPluginName`](#getpluginname) 
  - [`getPluginVersion`](#getpluginversion) 
  - [`getSDKVersion`](#getsdkversion) 
  - [`callFuncWithParam`](#callfuncwithparam) 
  - [`callStringFuncWithParam`](#callstringfuncwithparam) 
  - [`callIntFuncWithParam`](#callintfuncwithparam) 
  - [`callBoolFuncWithParam`](#callboolfuncwithparam) 
  - [`callFloatFuncWithParam`](#callfloatfuncwithparam) 



### Details




<!-- Method Block -->
#### Methods


##### login

login interface

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:463](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L463) |

###### Parameters
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments


##### isLogined

get status of login

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:474](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L474) |



##### getUserID

get user ID

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:487](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L487) |



##### getPluginId

get plugin ID

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:500](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L500) |



##### setListener

set listener

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:512](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L512) |

###### Parameters
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getListener

get listener

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:524](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L524) |



##### logout

logout
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:536](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L536) |



##### showToolBar

show toolbar
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:547](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L547) |

###### Parameters
- `place` anysdk.ToolBarPlace 


##### hideToolBar

hide toolbar
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:559](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L559) |



##### enterPlatform

enter platform
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:570](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L570) |



##### exit

show exit page
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:581](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L581) |



##### pause

show pause page
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:592](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L592) |



##### realNameRegister

Real-name registration
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:603](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L603) |



##### antiAddictionQuery

Anti-addiction query
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:614](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L614) |



##### submitLoginGameRole

submit game role information
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:625](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L625) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getUserInfo

get user information
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:636](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L636) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getAvailableLoginType

set login type
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:648](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L648) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### setLoginType

set login type
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:660](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L660) |

###### Parameters
- `loginType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### sendToDesktop

send to desktop
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:673](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L673) |



##### openBBS

open bbs
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:684](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L684) |



##### isFunctionSupported

Check whether the function is supported

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:328](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L328) |

###### Parameters
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

get plugin name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:342](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L342) |



##### getPluginVersion

get plugin version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:354](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L354) |



##### getSDKVersion

get SDK version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:366](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L366) |



##### callFuncWithParam

void methods for reflections with parameter

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:378](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L378) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

String methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:391](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L391) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

int methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:406](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L406) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

boolean methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:421](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L421) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

float methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:436](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L436) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



