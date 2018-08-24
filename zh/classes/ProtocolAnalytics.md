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
| 定义于 | [extensions/anysdk/jsb_anysdk.js:792](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L792) |



##### stopSession

关闭会话

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:802](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L802) |



##### setSessionContinueMillis

设置会话超时时间

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:812](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L812) |

###### 参数列表
- `millis` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Type: long


##### logError

捕捉异常

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:823](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L823) |

###### 参数列表
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `message` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logEvent

捕捉事件

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:835](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L835) |

###### 参数列表
- `errorId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments Type: map


##### logTimedEventBegin

统计事件开始

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:847](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L847) |

###### 参数列表
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### logTimedEventEnd

统计事件结束

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:858](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L858) |

###### 参数列表
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### setCaptureUncaughtException

设置是否开启自动异常捕捉

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:869](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L869) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### setAccount

统计玩家帐户信息

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:880](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L880) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeRequest

跟踪用户支付请求

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:891](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L891) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeSuccess

追踪用户支付成功

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:902](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L902) |

###### 参数列表
- `orderID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onChargeFail

追踪用户支付失败

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:913](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L913) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onChargeOnlySuccess

统计玩家支付成功

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:924](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L924) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onPurchase

统计玩家消费

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:935](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L935) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onUse

统计玩家使用道具

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:946](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L946) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onReward

统计玩家获取奖励

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:957](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L957) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startLevel

开始关卡

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:968](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L968) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishLevel

结束关卡

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:979](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L979) |

###### 参数列表
- `levelID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failLevel

关卡失败

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:990](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L990) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### startTask

开始任务

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:1001](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1001) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### finishTask

完成任务

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:1012](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1012) |

###### 参数列表
- `taskID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### failTask

任务失败

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:1023](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L1023) |

###### 参数列表
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### isFunctionSupported

判断函数是否支持

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:328](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L328) |

###### 参数列表
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

获取插件名称

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:342](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L342) |



##### getPluginVersion

获取插件版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:354](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L354) |



##### getSDKVersion

获取 SDK 版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:366](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L366) |



##### callFuncWithParam

反射调用带参数的void方法

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:378](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L378) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

反射调用带参数的 String 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:391](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L391) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

反射调用带参数的 Int 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:406](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L406) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

反射调用带参数的 boolean 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:421](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L421) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

反射调用带参数的 float 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:436](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L436) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



