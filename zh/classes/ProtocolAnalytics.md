## `ProtocolAnalytics` 类型

继承于 [`PluginProtocol`](PluginProtocol.md)


模块: [anysdk](../modules/anysdk.md)


统计系统协议接口


### 索引



##### 方法

  - [`startSession`](#startsession) 启动会话
  - [`stopSession`](#stopsession) 关闭会话
  - [`setSessionContinueMillis`](#setsessioncontinuemillis) 设置会话超时时间
  - [`logError`](#logerror) 捕捉异常
  - [`logEvent`](#logevent) 捕捉事件
  - [`logTimedEventBegin`](#logtimedeventbegin) 统计事件开始
  - [`logTimedEventEnd`](#logtimedeventend) 统计事件结束
  - [`setCaptureUncaughtException`](#setcaptureuncaughtexception) 设置是否开启自动异常捕捉
  - [`setAccount`](#setaccount) 统计玩家帐户信息
  - [`onChargeRequest`](#onchargerequest) 跟踪用户支付请求
  - [`onChargeSuccess`](#onchargesuccess) 追踪用户支付成功
  - [`onChargeFail`](#onchargefail) 追踪用户支付失败
  - [`onChargeOnlySuccess`](#onchargeonlysuccess) 统计玩家支付成功
  - [`onPurchase`](#onpurchase) 统计玩家消费
  - [`onUse`](#onuse) 统计玩家使用道具
  - [`onReward`](#onreward) 统计玩家获取奖励
  - [`startLevel`](#startlevel) 开始关卡
  - [`finishLevel`](#finishlevel) 结束关卡
  - [`failLevel`](#faillevel) 关卡失败
  - [`startTask`](#starttask) 开始任务
  - [`finishTask`](#finishtask) 完成任务
  - [`failTask`](#failtask) 任务失败
  - [`isFunctionSupported`](#isfunctionsupported) 判断函数是否支持
  - [`getPluginName`](#getpluginname) 获取插件名称
  - [`getPluginVersion`](#getpluginversion) 获取插件版本
  - [`getSDKVersion`](#getsdkversion) 获取 SDK 版本
  - [`callFuncWithParam`](#callfuncwithparam) 反射调用带参数的void方法
  - [`callStringFuncWithParam`](#callstringfuncwithparam) 反射调用带参数的 String 方法
  - [`callIntFuncWithParam`](#callintfuncwithparam) 反射调用带参数的 Int 方法
  - [`callBoolFuncWithParam`](#callboolfuncwithparam) 反射调用带参数的 boolean 方法
  - [`callFloatFuncWithParam`](#callfloatfuncwithparam) 反射调用带参数的 float 方法



### Details




<!-- Method Block -->
#### 方法


##### startSession

启动会话

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:791](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L791) |



##### stopSession

关闭会话

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:801](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L801) |



##### setSessionContinueMillis

设置会话超时时间

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:811](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L811) |

###### 参数列表
- `millis` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Type: long


##### logError

捕捉异常

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:822](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L822) |

###### 参数列表
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logEvent

捕捉事件

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:834](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L834) |

###### 参数列表
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments Type: map


##### logTimedEventBegin

统计事件开始

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:846](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L846) |

###### 参数列表
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logTimedEventEnd

统计事件结束

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:857](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L857) |

###### 参数列表
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setCaptureUncaughtException

设置是否开启自动异常捕捉

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:868](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L868) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### setAccount

统计玩家帐户信息

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:879](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L879) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeRequest

跟踪用户支付请求

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:890](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L890) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeSuccess

追踪用户支付成功

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:901](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L901) |

###### 参数列表
- `orderID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onChargeFail

追踪用户支付失败

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:912](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L912) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeOnlySuccess

统计玩家支付成功

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:923](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L923) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onPurchase

统计玩家消费

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:934](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L934) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onUse

统计玩家使用道具

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:945](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L945) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onReward

统计玩家获取奖励

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:956](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L956) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startLevel

开始关卡

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:967](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L967) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishLevel

结束关卡

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:978](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L978) |

###### 参数列表
- `levelID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failLevel

关卡失败

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:989](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L989) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startTask

开始任务

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1000](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1000) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishTask

完成任务

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1011](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1011) |

###### 参数列表
- `taskID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failTask

任务失败

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1022](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1022) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### isFunctionSupported

判断函数是否支持

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:327](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L327) |

###### 参数列表
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

获取插件名称

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:341](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L341) |



##### getPluginVersion

获取插件版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:353](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L353) |



##### getSDKVersion

获取 SDK 版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:365](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L365) |



##### callFuncWithParam

反射调用带参数的void方法

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:377](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L377) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

反射调用带参数的 String 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:390](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L390) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

反射调用带参数的 Int 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:405](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L405) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

反射调用带参数的 boolean 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:420](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L420) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

反射调用带参数的 float 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:435](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L435) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



