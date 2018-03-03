## `ProtocolAdTracking` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)


ad tracking protocol


### Index



##### Methods

  - [`onPay`](#onpay) Call this method if you want to track register events as happening during a section.
  - [`onLogin`](#onlogin) Call this method if you want to track register events as happening during a section.
  - [`onRegister`](#onregister) Call this method if you want to track register events as happening during a section.
  - [`trackEvent`](#trackevent) Call this method if you want to track custom events with parameters as happening during a section.
  - [`onCreateRole`](#oncreaterole) Call this method with parameters if you want to create role as happening during a section.
  - [`onLevelUp`](#onlevelup) Call this method if you want to track levelup events with parameters as happening during a section.
Before to invoke, you need to verdict whether this properties existed
  - [`onStartToPay`](#onstarttopay) Invoke this method with parameters if you want to start to pay as happening during a section.
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


##### onPay

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1660](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1660) |

###### Parameters
- `productInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLogin

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1671](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1671) |

###### Parameters
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onRegister

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1682](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1682) |

###### Parameters
- `userId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### trackEvent

Call this method if you want to track custom events with parameters as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1693](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1693) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onCreateRole

Call this method with parameters if you want to create role as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1705](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1705) |

###### Parameters
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLevelUp

Call this method if you want to track levelup events with parameters as happening during a section.
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1716](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1716) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onStartToPay

Invoke this method with parameters if you want to start to pay as happening during a section.
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1728](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1728) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


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



