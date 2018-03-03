## `AgentManager` 类型



模块: [anysdk](../modules/anysdk.md)


插件管理类


### 索引



##### 方法

  - [`init`](#init) appKey、appSecret、privateKey是通过 AnySDK 客户端工具创建游戏后生成的。
oauthLoginServer参数是游戏服务提供的用来做登陆验证转发的接口地址。
  - [`loadAllPlugins`](#loadallplugins) 加载所有插件，该操作包含了 SDKs 初始化
  - [`unloadAllPlugins`](#unloadallplugins) 卸载插件
  - [`getUserPlugin`](#getuserplugin) 获取用户系统插件
  - [`getIAPPlugins`](#getiapplugins) 获取支付系统插件
  - [`getIAPPlugin`](#getiapplugin) 获取支付系统插件
  - [`getSocialPlugin`](#getsocialplugin) 获取社交系统插件
  - [`getSharePlugin`](#getshareplugin) 获取分享系统插件
  - [`getAnalyticsPlugin`](#getanalyticsplugin) 获取统计系统插件
  - [`getAdsPlugin`](#getadsplugin) 获取广告系统插件
  - [`getPushPlugin`](#getpushplugin) 获取推送系统插件
  - [`getRECPlugin`](#getrecplugin) 获取录屏系统插件
  - [`getCrashPlugin`](#getcrashplugin) 获取崩溃分析系统插件
  - [`getAdTrackingPlugin`](#getadtrackingplugin) 获取广告追踪系统插件
  - [`getCustomPlugin`](#getcustomplugin) 获取自定义系统插件
  - [`getCustomParam`](#getcustomparam) 获取自定义参数
  - [`getChannelId`](#getchannelid) 获取渠道唯一表示符
  - [`isAnaylticsEnabled`](#isanaylticsenabled) 获取统计状态
  - [`setIsAnaylticsEnabled`](#setisanaylticsenabled) 设置是否统计
  - [`end`](#end) 销毁单例
  - [`getInstance`](#getinstance) 获取单例



### Details




<!-- Method Block -->
#### 方法


##### init

appKey、appSecret、privateKey是通过 AnySDK 客户端工具创建游戏后生成的。
oauthLoginServer参数是游戏服务提供的用来做登陆验证转发的接口地址。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:58](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L58) |

###### 参数列表
- `appKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `appSecret` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `privateKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `oauthLoginServer` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### loadAllPlugins

加载所有插件，该操作包含了 SDKs 初始化

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:76](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L76) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> The object to bind to.


##### unloadAllPlugins

卸载插件

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:88](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L88) |



##### getUserPlugin

获取用户系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolUser 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:98](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L98) |



##### getIAPPlugins

获取支付系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolIAP 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:110](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L110) |



##### getIAPPlugin

获取支付系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolIAP 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:122](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L122) |



##### getSocialPlugin

获取社交系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolSocial 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:134](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L134) |



##### getSharePlugin

获取分享系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolShare 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:146](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L146) |



##### getAnalyticsPlugin

获取统计系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAnalytics 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:158](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L158) |



##### getAdsPlugin

获取广告系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAds 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:170](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L170) |



##### getPushPlugin

获取推送系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolPush 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:182](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L182) |



##### getRECPlugin

获取录屏系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolREC 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:194](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L194) |



##### getCrashPlugin

获取崩溃分析系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolCrash 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:206](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L206) |



##### getAdTrackingPlugin

获取广告追踪系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAdTracking 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:218](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L218) |



##### getCustomPlugin

获取自定义系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolCustom 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:230](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L230) |



##### getCustomParam

获取自定义参数

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:242](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L242) |



##### getChannelId

获取渠道唯一表示符

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:254](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L254) |



##### isAnaylticsEnabled

获取统计状态

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:266](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L266) |



##### setIsAnaylticsEnabled

设置是否统计

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:278](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L278) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### end

销毁单例

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:289](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L289) |



##### getInstance

获取单例

| meta | description |
|------|-------------|
| 返回 | anysdk.AgentManager 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:300](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L300) |




