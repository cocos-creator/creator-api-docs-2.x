## `AgentManager` Class



Module: [anysdk](../modules/anysdk.md)


agent manager of plugin


### Index



##### Methods

  - [`init`](#init) AppKey appSecret and privateKey are the only three parameters generated
after the packing tool client finishes creating the game.
The oauthLoginServer parameter is the API address provided by the game service
to login verification
  - [`loadAllPlugins`](#loadallplugins) load all plugins, the operation includes SDK`s initialization
  - [`unloadAllPlugins`](#unloadallplugins) unload all plugins
  - [`getUserPlugin`](#getuserplugin) get user system plugin
  - [`getIAPPlugins`](#getiapplugins) get IAP system plugins
  - [`getIAPPlugin`](#getiapplugin) get IAP system plugin
  - [`getSocialPlugin`](#getsocialplugin) get social system plugin
  - [`getSharePlugin`](#getshareplugin) get share system plugin
  - [`getAnalyticsPlugin`](#getanalyticsplugin) get analytics system plugin
  - [`getAdsPlugin`](#getadsplugin) get ads system plugin
  - [`getPushPlugin`](#getpushplugin) get push system plugin
  - [`getRECPlugin`](#getrecplugin) get REC system plugin
  - [`getCrashPlugin`](#getcrashplugin) get crash system plugin
  - [`getAdTrackingPlugin`](#getadtrackingplugin) get ad track system plugin
  - [`getCustomPlugin`](#getcustomplugin) get custom system plugin
  - [`getCustomParam`](#getcustomparam) get custom parameter
  - [`getChannelId`](#getchannelid) get channel id
  - [`isAnaylticsEnabled`](#isanaylticsenabled) get status of analytics
  - [`setIsAnaylticsEnabled`](#setisanaylticsenabled) set whether to analytics
  - [`end`](#end) destory instance
  - [`getInstance`](#getinstance) get instance



### Details




<!-- Method Block -->
#### Methods


##### init

AppKey appSecret and privateKey are the only three parameters generated
after the packing tool client finishes creating the game.
The oauthLoginServer parameter is the API address provided by the game service
to login verification

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:58](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L58) |

###### Parameters
- `appKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `appSecret` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `privateKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `oauthLoginServer` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### loadAllPlugins

load all plugins, the operation includes SDK`s initialization

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:76](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L76) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> The object to bind to.


##### unloadAllPlugins

unload all plugins

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:88](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L88) |



##### getUserPlugin

get user system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolUser 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:98](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L98) |



##### getIAPPlugins

get IAP system plugins

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:110](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L110) |



##### getIAPPlugin

get IAP system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:122](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L122) |



##### getSocialPlugin

get social system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolSocial 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:134](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L134) |



##### getSharePlugin

get share system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolShare 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:146](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L146) |



##### getAnalyticsPlugin

get analytics system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAnalytics 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:158](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L158) |



##### getAdsPlugin

get ads system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAds 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:170](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L170) |



##### getPushPlugin

get push system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolPush 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:182](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L182) |



##### getRECPlugin

get REC system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolREC 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:194](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L194) |



##### getCrashPlugin

get crash system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCrash 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:206](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L206) |



##### getAdTrackingPlugin

get ad track system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAdTracking 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:218](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L218) |



##### getCustomPlugin

get custom system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCustom 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:230](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L230) |



##### getCustomParam

get custom parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:242](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L242) |



##### getChannelId

get channel id

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:254](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L254) |



##### isAnaylticsEnabled

get status of analytics

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:266](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L266) |



##### setIsAnaylticsEnabled

set whether to analytics

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:278](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L278) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### end

destory instance

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:289](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L289) |



##### getInstance

get instance

| meta | description |
|------|-------------|
| Returns | anysdk.AgentManager 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js:300](https:/github.com/cocos-creator/engine/blob/master/extensions/anysdk/jsb_anysdk.js#L300) |




