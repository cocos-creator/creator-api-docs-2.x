## `ProtocolAdTracking` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)


ad tracking protocol


### Index



##### Methods

  - [`onPay`](#onpay) 
  - [`onLogin`](#onlogin) 
  - [`onRegister`](#onregister) 
  - [`trackEvent`](#trackevent) 
  - [`onCreateRole`](#oncreaterole) 
  - [`onLevelUp`](#onlevelup) 
  - [`onStartToPay`](#onstarttopay) 
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


##### onPay

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1661](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1661) |

###### Parameters
- `productInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLogin

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1672](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1672) |

###### Parameters
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onRegister

Call this method if you want to track register events as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1683](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1683) |

###### Parameters
- `userId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### trackEvent

Call this method if you want to track custom events with parameters as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1694](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1694) |

###### Parameters
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onCreateRole

Call this method with parameters if you want to create role as happening during a section.

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1706](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1706) |

###### Parameters
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLevelUp

Call this method if you want to track levelup events with parameters as happening during a section.
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1717](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1717) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onStartToPay

Invoke this method with parameters if you want to start to pay as happening during a section.
Before to invoke, you need to verdict whether this properties existed

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:1729](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L1729) |

###### Parameters
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


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



