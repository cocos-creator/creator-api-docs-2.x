## `ProtocolAdTracking` 类型

继承于 [`PluginProtocol`](PluginProtocol.md)


模块: [anysdk](../modules/anysdk.md)


广告追踪系统协议接口


### 索引



##### 方法

  - [`onPay`](#onpay) 统计用户注册信息
  - [`onLogin`](#onlogin) 统计用户注册信息
  - [`onRegister`](#onregister) 统计用户注册信息
  - [`trackEvent`](#trackevent) 统计自定义事件
  - [`onCreateRole`](#oncreaterole) 统计创建角色事件，调用前需要判断属性是否存在
  - [`onLevelUp`](#onlevelup) 统计角色升级事件，调用前需要判断属性是否存在
  - [`onStartToPay`](#onstarttopay) 统计开始充值事件，调用前需要判断属性是否存在
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


##### onPay

统计用户注册信息

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1660](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1660) |

###### 参数列表
- `productInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLogin

统计用户注册信息

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1671](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1671) |

###### 参数列表
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onRegister

统计用户注册信息

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1682](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1682) |

###### 参数列表
- `userId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### trackEvent

统计自定义事件

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1693](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1693) |

###### 参数列表
- `eventId` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `paramMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onCreateRole

统计创建角色事件，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1705](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1705) |

###### 参数列表
- `userInfo` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onLevelUp

统计角色升级事件，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1716](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1716) |

###### 参数列表
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


##### onStartToPay

统计开始充值事件，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:1728](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L1728) |

###### 参数列表
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Type: map


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



