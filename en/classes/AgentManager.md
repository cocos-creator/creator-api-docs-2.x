## `AgentManager` Class



Module: [anysdk](../modules/anysdk.md)


agent manager of plugin


### Index



##### Methods

  - [`init`](#init) 
  - [`loadAllPlugins`](#loadallplugins) 
  - [`unloadAllPlugins`](#unloadallplugins) 
  - [`getUserPlugin`](#getuserplugin) 
  - [`getIAPPlugins`](#getiapplugins) 
  - [`getIAPPlugin`](#getiapplugin) 
  - [`getSocialPlugin`](#getsocialplugin) 
  - [`getSharePlugin`](#getshareplugin) 
  - [`getAnalyticsPlugin`](#getanalyticsplugin) 
  - [`getAdsPlugin`](#getadsplugin) 
  - [`getPushPlugin`](#getpushplugin) 
  - [`getRECPlugin`](#getrecplugin) 
  - [`getCrashPlugin`](#getcrashplugin) 
  - [`getAdTrackingPlugin`](#getadtrackingplugin) 
  - [`getCustomPlugin`](#getcustomplugin) 
  - [`getCustomParam`](#getcustomparam) 
  - [`getChannelId`](#getchannelid) 
  - [`isAnaylticsEnabled`](#isanaylticsenabled) 
  - [`setIsAnaylticsEnabled`](#setisanaylticsenabled) 
  - [`end`](#end) 
  - [`getInstance`](#getinstance) 



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
| Defined in | [extensions/anysdk/jsb_anysdk.js:59](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L59) |

###### Parameters
- `appKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `appSecret` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `privateKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `oauthLoginServer` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### loadAllPlugins

load all plugins, the operation includes SDK`s initialization

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:77](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L77) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> The object to bind to.


##### unloadAllPlugins

unload all plugins

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:89](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L89) |



##### getUserPlugin

get user system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolUser 
| Defined in | [extensions/anysdk/jsb_anysdk.js:99](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L99) |



##### getIAPPlugins

get IAP system plugins

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [extensions/anysdk/jsb_anysdk.js:111](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L111) |



##### getIAPPlugin

get IAP system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [extensions/anysdk/jsb_anysdk.js:123](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L123) |



##### getSocialPlugin

get social system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolSocial 
| Defined in | [extensions/anysdk/jsb_anysdk.js:135](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L135) |



##### getSharePlugin

get share system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolShare 
| Defined in | [extensions/anysdk/jsb_anysdk.js:147](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L147) |



##### getAnalyticsPlugin

get analytics system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAnalytics 
| Defined in | [extensions/anysdk/jsb_anysdk.js:159](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L159) |



##### getAdsPlugin

get ads system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAds 
| Defined in | [extensions/anysdk/jsb_anysdk.js:171](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L171) |



##### getPushPlugin

get push system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolPush 
| Defined in | [extensions/anysdk/jsb_anysdk.js:183](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L183) |



##### getRECPlugin

get REC system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolREC 
| Defined in | [extensions/anysdk/jsb_anysdk.js:195](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L195) |



##### getCrashPlugin

get crash system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCrash 
| Defined in | [extensions/anysdk/jsb_anysdk.js:207](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L207) |



##### getAdTrackingPlugin

get ad track system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAdTracking 
| Defined in | [extensions/anysdk/jsb_anysdk.js:219](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L219) |



##### getCustomPlugin

get custom system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCustom 
| Defined in | [extensions/anysdk/jsb_anysdk.js:231](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L231) |



##### getCustomParam

get custom parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:243](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L243) |



##### getChannelId

get channel id

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:255](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L255) |



##### isAnaylticsEnabled

get status of analytics

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:267](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L267) |



##### setIsAnaylticsEnabled

set whether to analytics

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:279](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L279) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### end

destory instance

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:290](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L290) |



##### getInstance

get instance

| meta | description |
|------|-------------|
| Returns | anysdk.AgentManager 
| Defined in | [extensions/anysdk/jsb_anysdk.js:301](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/extensions/anysdk/jsb_anysdk.js#L301) |




