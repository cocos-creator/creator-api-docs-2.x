## `ProtocolUser` Class

Extends [`PluginProtocol`](PluginProtocol.md)


Module: [anysdk](../modules/anysdk.md)




用户系统协议接口

### Index



##### Methods

  - [`login`](#login) 登录接口
  - [`isLogined`](#islogined) 获取登录状态
  - [`getUserID`](#getuserid) 获取用户唯一标示符
  - [`getPluginId`](#getpluginid) 获取插件ID
  - [`setListener`](#setlistener) 设置用户系统的监听
  - [`getListener`](#getlistener) 获取用户系统的监听
  - [`logout`](#logout) 登出，调用前需要判断属性是否存在
  - [`showToolBar`](#showtoolbar) 显示悬浮窗，调用前需要判断属性是否存在
  - [`hideToolBar`](#hidetoolbar) 隐藏悬浮窗，调用前需要判断属性是否存在
  - [`enterPlatform`](#enterplatform) 显示平台中心，调用前需要判断属性是否存在
  - [`exit`](#exit) 显示退出界面，调用前需要判断属性是否存在
  - [`pause`](#pause) 显示暂停界面，调用前需要判断属性是否存在
  - [`realNameRegister`](#realnameregister) 实名注册，调用前需要判断属性是否存在
  - [`antiAddictionQuery`](#antiaddictionquery) 防沉迷查询，调用前需要判断属性是否存在
  - [`submitLoginGameRole`](#submitlogingamerole) 提交角色信息，调用前需要判断属性是否存在
  - [`getUserInfo`](#getuserinfo) 获取用户信息，调用前需要判断属性是否存在
  - [`getAvailableLoginType`](#getavailablelogintype) 设置登录类型，调用前需要判断属性是否存在
  - [`setLoginType`](#setlogintype) 设置登录类型，调用前需要判断属性是否存在
  - [`sendToDesktop`](#sendtodesktop) 发送到桌面，调用前需要判断属性是否存在
  - [`openBBS`](#openbbs) 打开论坛，调用前需要判断属性是否存在
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
#### Methods


##### login

登录接口

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:462](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L462) |

###### Parameters
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments


##### isLogined

获取登录状态

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:473](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L473) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 



##### getUserID

获取用户唯一标示符

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:486](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L486) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### getPluginId

获取插件ID

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:499](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L499) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### setListener

设置用户系统的监听

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:511](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L511) |

###### Parameters
- listener <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getListener

获取用户系统的监听

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:523](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L523) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 



##### logout

登出，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:535](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L535) |



##### showToolBar

显示悬浮窗，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:546](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L546) |

###### Parameters
- place anysdk.ToolBarPlace 


##### hideToolBar

隐藏悬浮窗，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:558](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L558) |



##### enterPlatform

显示平台中心，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:569](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L569) |



##### exit

显示退出界面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:580](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L580) |



##### pause

显示暂停界面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:591](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L591) |



##### realNameRegister

实名注册，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:602](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L602) |



##### antiAddictionQuery

防沉迷查询，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:613](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L613) |



##### submitLoginGameRole

提交角色信息，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:624](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L624) |

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getUserInfo

获取用户信息，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:635](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L635) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getAvailableLoginType

设置登录类型，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:647](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L647) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### setLoginType

设置登录类型，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:659](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L659) |

###### Parameters
- loginType <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### sendToDesktop

发送到桌面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:672](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L672) |



##### openBBS

打开论坛，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:683](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L683) |



##### isFunctionSupported

判断函数是否支持

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:327](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L327) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 

###### Parameters
- functionName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

获取插件名称

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:341](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L341) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### getPluginVersion

获取插件版本

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:353](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L353) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### getSDKVersion

获取 SDK 版本

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:365](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L365) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### callFuncWithParam

反射调用带参数的void方法

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:377](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L377) |

###### Parameters
- funName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | anysdk.PluginParam optional arguments


##### callStringFuncWithParam

反射调用带参数的 String 方法

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:390](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L390) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- funName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | anysdk.PluginParam optional arguments


##### callIntFuncWithParam

反射调用带参数的 Int 方法

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:405](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L405) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- funName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

反射调用带参数的 boolean 方法

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:420](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L420) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 

###### Parameters
- funName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

反射调用带参数的 float 方法

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:435](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L435) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- funName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- args <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | anysdk.PluginParam optional arguments



