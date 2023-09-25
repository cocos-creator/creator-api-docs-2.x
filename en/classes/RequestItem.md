## `RequestItem` Class



Module: [cc.AssetManager](../modules/cc.AssetManager.md)


A collection of information about a request



### Index

##### Properties

  - [`uuid`](#uuid) `String` The uuid of request
  - [`url`](#url) `String` The final url of request
  - [`ext`](#ext) `String` The extension name of asset
  - [`content`](#content) `*` The content of asset
  - [`file`](#file) `*` The file of asset
  - [`info`](#info) `Object` The information of asset
  - [`isNative`](#isnative) `Boolean` Whether or not it is native asset
  - [`options`](#options) `Object` Custom options
  - [`id`](#id) `String` The id of request, combined from uuid and isNative



##### Methods

  - [`constructor`](#constructor) Create a request item
  - [`recycle`](#recycle) Recycle this for reuse
  - [`create`](#create) Create a new request item from pool



### Details


#### Properties


##### uuid

> The uuid of request

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:49](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L49) |



##### url

> The final url of request

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:61](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L61) |



##### ext

> The extension name of asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:73](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L73) |



##### content

> The content of asset

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/request-item.js:85](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L85) |



##### file

> The file of asset

| meta | description |
|------|-------------|
| Type |  |
| Defined in | [cocos2d/core/asset-manager/request-item.js:97](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L97) |



##### info

> The information of asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:109](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L109) |



##### isNative

> Whether or not it is native asset

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:123](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L123) |



##### options

> Custom options

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:135](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L135) |



##### id

> The id of request, combined from uuid and isNative

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/asset-manager/request-item.js:164](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L164) |






<!-- Method Block -->
#### Methods


##### constructor

Create a request item

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/request-item.js:150](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L150) |



##### recycle

Recycle this for reuse

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/asset-manager/request-item.js:181](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L181) |



##### create

Create a new request item from pool

| meta | description |
|------|-------------|
| Returns | <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> 
| Defined in | [cocos2d/core/asset-manager/request-item.js:209](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/asset-manager/request-item.js#L209) |




