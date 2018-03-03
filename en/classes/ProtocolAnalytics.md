## `ProtocolAnalytics` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)


analytics protocol


### Index



##### Methods

  - [`startSession`](#startsession) Start a new session.
  - [`stopSession`](#stopsession) Stop a session.
  - [`setSessionContinueMillis`](#setsessioncontinuemillis) Set the timeout for expiring a session.
  - [`logError`](#logerror) log an error
  - [`logEvent`](#logevent) log an event.
  - [`logTimedEventBegin`](#logtimedeventbegin) Track an event begin.
  - [`logTimedEventEnd`](#logtimedeventend) Track an event end.
  - [`setCaptureUncaughtException`](#setcaptureuncaughtexception) set Whether to catch uncaught exceptions to server.
  - [`setAccount`](#setaccount) analytics account information
  - [`onChargeRequest`](#onchargerequest) track user to request payment
  - [`onChargeSuccess`](#onchargesuccess) track Successful payment
  - [`onChargeFail`](#onchargefail) track failed payment
  - [`onChargeOnlySuccess`](#onchargeonlysuccess) track Successful payment
  - [`onPurchase`](#onpurchase) track user purchase
  - [`onUse`](#onuse) track user to use goods
  - [`onReward`](#onreward) track user to reward goods
  - [`startLevel`](#startlevel) start level
  - [`finishLevel`](#finishlevel) finish level
  - [`failLevel`](#faillevel) failed level
  - [`startTask`](#starttask) start task
  - [`finishTask`](#finishtask) finish task
  - [`failTask`](#failtask) failed task
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


##### startSession

Start a new session.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:791](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L791) |



##### stopSession

Stop a session.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:801](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L801) |



##### setSessionContinueMillis

Set the timeout for expiring a session.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:811](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L811) |

###### Parameters
- `millis` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Type: long


##### logError

log an error

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:822](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L822) |

###### Parameters
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logEvent

log an event.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:834](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L834) |

###### Parameters
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments Type: map


##### logTimedEventBegin

Track an event begin.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:846](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L846) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logTimedEventEnd

Track an event end.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:857](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L857) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setCaptureUncaughtException

set Whether to catch uncaught exceptions to server.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:868](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L868) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### setAccount

analytics account information

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:879](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L879) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeRequest

track user to request payment

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:890](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L890) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeSuccess

track Successful payment

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:901](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L901) |

###### Parameters
- `orderID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onChargeFail

track failed payment

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:912](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L912) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeOnlySuccess

track Successful payment

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:923](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L923) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onPurchase

track user purchase

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:934](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L934) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onUse

track user to use goods

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:945](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L945) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onReward

track user to reward goods

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:956](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L956) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startLevel

start level

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:967](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L967) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishLevel

finish level

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:978](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L978) |

###### Parameters
- `levelID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failLevel

failed level

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:989](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L989) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startTask

start task

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1000](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1000) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishTask

finish task

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1011](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1011) |

###### Parameters
- `taskID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failTask

failed task

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1022](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1022) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


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



