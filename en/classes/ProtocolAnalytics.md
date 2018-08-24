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
| Defined in | [extensions/anysdk/jsb_anysdk.js:792](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L792) |



##### stopSession

Stop a session.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:802](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L802) |



##### setSessionContinueMillis

Set the timeout for expiring a session.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:812](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L812) |

###### Parameters
- `millis` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Type: long


##### logError

log an error

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:823](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L823) |

###### Parameters
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logEvent

log an event.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:835](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L835) |

###### Parameters
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments Type: map


##### logTimedEventBegin

Track an event begin.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:847](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L847) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logTimedEventEnd

Track an event end.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:858](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L858) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setCaptureUncaughtException

set Whether to catch uncaught exceptions to server.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:869](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L869) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### setAccount

analytics account information

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:880](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L880) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeRequest

track user to request payment

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:891](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L891) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeSuccess

track Successful payment

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:902](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L902) |

###### Parameters
- `orderID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onChargeFail

track failed payment

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:913](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L913) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeOnlySuccess

track Successful payment

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:924](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L924) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onPurchase

track user purchase

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:935](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L935) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onUse

track user to use goods

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:946](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L946) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onReward

track user to reward goods

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:957](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L957) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startLevel

start level

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:968](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L968) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishLevel

finish level

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:979](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L979) |

###### Parameters
- `levelID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failLevel

failed level

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:990](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L990) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startTask

start task

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1001](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1001) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishTask

finish task

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1012](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1012) |

###### Parameters
- `taskID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failTask

failed task

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1023](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1023) |

###### Parameters
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### isFunctionSupported

Check whether the function is supported

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:328](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L328) |

###### Parameters
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

get plugin name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:342](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L342) |



##### getPluginVersion

get plugin version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:354](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L354) |



##### getSDKVersion

get SDK version

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:366](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L366) |



##### callFuncWithParam

void methods for reflections with parameter

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:378](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L378) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

String methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:391](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L391) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

int methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:406](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L406) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

boolean methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:421](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L421) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

float methods for reflections with parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:436](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L436) |

###### Parameters
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



