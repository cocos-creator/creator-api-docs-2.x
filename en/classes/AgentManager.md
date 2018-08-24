## `AgentManager` Class



Module: [anysdk](../modules/anysdk.md)


agent manager of plugin


### Index



##### Methods

  - [`init`](#init) after the packing tool client finishes creating the game.
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
| Defined in | [extensions/anysdk/jsb_anysdk.js:59](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L59) |

###### Parameters
- `appKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `appSecret` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `privateKey` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `oauthLoginServer` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### loadAllPlugins

load all plugins, the operation includes SDK`s initialization

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:77](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L77) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `target` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> The object to bind to.


##### unloadAllPlugins

unload all plugins

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L89) |



##### getUserPlugin

get user system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolUser 
| Defined in | [extensions/anysdk/jsb_anysdk.js:99](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L99) |



##### getIAPPlugins

get IAP system plugins

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [extensions/anysdk/jsb_anysdk.js:111](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L111) |



##### getIAPPlugin

get IAP system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolIAP 
| Defined in | [extensions/anysdk/jsb_anysdk.js:123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L123) |



##### getSocialPlugin

get social system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolSocial 
| Defined in | [extensions/anysdk/jsb_anysdk.js:135](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L135) |



##### getSharePlugin

get share system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolShare 
| Defined in | [extensions/anysdk/jsb_anysdk.js:147](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L147) |



##### getAnalyticsPlugin

get analytics system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAnalytics 
| Defined in | [extensions/anysdk/jsb_anysdk.js:159](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L159) |



##### getAdsPlugin

get ads system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAds 
| Defined in | [extensions/anysdk/jsb_anysdk.js:171](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L171) |



##### getPushPlugin

get push system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolPush 
| Defined in | [extensions/anysdk/jsb_anysdk.js:183](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L183) |



##### getRECPlugin

get REC system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolREC 
| Defined in | [extensions/anysdk/jsb_anysdk.js:195](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L195) |



##### getCrashPlugin

get crash system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCrash 
| Defined in | [extensions/anysdk/jsb_anysdk.js:207](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L207) |



##### getAdTrackingPlugin

get ad track system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolAdTracking 
| Defined in | [extensions/anysdk/jsb_anysdk.js:219](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L219) |



##### getCustomPlugin

get custom system plugin

| meta | description |
|------|-------------|
| Returns | anysdk.ProtocolCustom 
| Defined in | [extensions/anysdk/jsb_anysdk.js:231](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L231) |



##### getCustomParam

get custom parameter

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:243](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L243) |



##### getChannelId

get channel id

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:255](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L255) |



##### isAnaylticsEnabled

get status of analytics

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [extensions/anysdk/jsb_anysdk.js:267](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L267) |



##### setIsAnaylticsEnabled

set whether to analytics

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:279](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L279) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### end

destory instance

| meta | description |
|------|-------------|
| Defined in | [extensions/anysdk/jsb_anysdk.js:290](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L290) |



##### getInstance

get instance

| meta | description |
|------|-------------|
| Returns | anysdk.AgentManager 
| Defined in | [extensions/anysdk/jsb_anysdk.js:301](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L301) |




