## `ProtocolUser` 类型

继承于 [`PluginProtocol`](PluginProtocol.md)


模块: [anysdk](../modules/anysdk.md)


用户系统协议接口


### 索引



##### 方法

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
#### 方法


##### login

登录接口

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:463](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L463) |

###### 参数列表
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> optional arguments


##### isLogined

获取登录状态

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:474](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L474) |



##### getUserID

获取用户唯一标示符

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:487](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L487) |



##### getPluginId

获取插件ID

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:500](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L500) |



##### setListener

设置用户系统的监听

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:512](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L512) |

###### 参数列表
- `listener` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getListener

获取用户系统的监听

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:524](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L524) |



##### logout

登出，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:536](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L536) |



##### showToolBar

显示悬浮窗，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:547](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L547) |

###### 参数列表
- `place` anysdk.ToolBarPlace 


##### hideToolBar

隐藏悬浮窗，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:559](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L559) |



##### enterPlatform

显示平台中心，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:570](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L570) |



##### exit

显示退出界面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:581](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L581) |



##### pause

显示暂停界面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:592](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L592) |



##### realNameRegister

实名注册，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:603](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L603) |



##### antiAddictionQuery

防沉迷查询，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:614](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L614) |



##### submitLoginGameRole

提交角色信息，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:625](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L625) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getUserInfo

获取用户信息，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:636](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L636) |

###### 参数列表
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### getAvailableLoginType

设置登录类型，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:648](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L648) |

###### 参数列表
- `info` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### setLoginType

设置登录类型，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:660](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L660) |

###### 参数列表
- `loginType` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### sendToDesktop

发送到桌面，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:673](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L673) |



##### openBBS

打开论坛，调用前需要判断属性是否存在

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:684](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L684) |



##### isFunctionSupported

判断函数是否支持

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:328](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L328) |

###### 参数列表
- `functionName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### getPluginName

获取插件名称

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:342](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L342) |



##### getPluginVersion

获取插件版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:354](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L354) |



##### getSDKVersion

获取 SDK 版本

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:366](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L366) |



##### callFuncWithParam

反射调用带参数的void方法

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:378](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L378) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callStringFuncWithParam

反射调用带参数的 String 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:391](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L391) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callIntFuncWithParam

反射调用带参数的 Int 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:406](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L406) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callBoolFuncWithParam

反射调用带参数的 boolean 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:421](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L421) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments


##### callFloatFuncWithParam

反射调用带参数的 float 方法

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:436](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L436) |

###### 参数列表
- `funName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `args` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> &#124; anysdk.PluginParam optional arguments



