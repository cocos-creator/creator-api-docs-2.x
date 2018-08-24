## `AgentManager` 类型



模块: [anysdk](../modules/anysdk.md)


插件管理类


### 索引



##### 方法

  - [`init`](#init) appKey、appSecret、privateKey是通过 AnySDK 客户端工具创建游戏后生成的。
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
| 定义于 | [extensions/anysdk/jsb_anysdk.js:59](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L59) |

###### 参数列表
- `appKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `appSecret` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `privateKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `oauthLoginServer` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### loadAllPlugins

加载所有插件，该操作包含了 SDKs 初始化

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:77](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L77) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> The object to bind to.


##### unloadAllPlugins

卸载插件

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L89) |



##### getUserPlugin

获取用户系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolUser 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:99](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L99) |



##### getIAPPlugins

获取支付系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolIAP 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:111](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L111) |



##### getIAPPlugin

获取支付系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolIAP 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L123) |



##### getSocialPlugin

获取社交系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolSocial 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:135](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L135) |



##### getSharePlugin

获取分享系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolShare 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:147](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L147) |



##### getAnalyticsPlugin

获取统计系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAnalytics 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:159](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L159) |



##### getAdsPlugin

获取广告系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAds 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:171](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L171) |



##### getPushPlugin

获取推送系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolPush 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:183](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L183) |



##### getRECPlugin

获取录屏系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolREC 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:195](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L195) |



##### getCrashPlugin

获取崩溃分析系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolCrash 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:207](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L207) |



##### getAdTrackingPlugin

获取广告追踪系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolAdTracking 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:219](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L219) |



##### getCustomPlugin

获取自定义系统插件

| meta | description |
|------|-------------|
| 返回 | anysdk.ProtocolCustom 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:231](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L231) |



##### getCustomParam

获取自定义参数

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:243](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L243) |



##### getChannelId

获取渠道唯一表示符

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:255](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L255) |



##### isAnaylticsEnabled

获取统计状态

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:267](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L267) |



##### setIsAnaylticsEnabled

设置是否统计

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:279](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L279) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### end

销毁单例

| meta | description |
|------|-------------|
| 定义于 | [extensions/anysdk/jsb_anysdk.js:290](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L290) |



##### getInstance

获取单例

| meta | description |
|------|-------------|
| 返回 | anysdk.AgentManager 
| 定义于 | [extensions/anysdk/jsb_anysdk.js:301](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L301) |




