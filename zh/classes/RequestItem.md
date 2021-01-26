## `RequestItem` 类型



模块: [cc.AssetManager](../modules/cc.AssetManager.md)


请求的相关信息集合



### 索引

##### 属性（properties）

  - [`uuid`](#uuid) `String` 请求资源的uuid
  - [`url`](#url) `String` 请求的最终url
  - [`ext`](#ext) `String` 资源的扩展名
  - [`content`](#content) `*` 资源的内容
  - [`file`](#file) `*` 资源的文件
  - [`info`](#info) `Object` 资源的相关信息
  - [`isNative`](#isnative) `Boolean` 资源是否是原生资源
  - [`options`](#options) `Object` 自定义参数
  - [`id`](#id) `String` 请求的 id, 由 uuid 和 isNative 组合而成



##### 方法

  - [`constructor`](#constructor) 创建一个 request item
  - [`recycle`](#recycle) 回收 requestItem 用于复用
  - [`create`](#create) 从对象池中创建 requestItem



### Details


#### 属性（properties）


##### uuid

> 请求资源的uuid

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:49](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L49) |



##### url

> 请求的最终url

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:61](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L61) |



##### ext

> 资源的扩展名

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:73](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L73) |



##### content

> 资源的内容

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:85](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L85) |



##### file

> 资源的文件

| meta | description |
|------|-------------|
| 类型 |  |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:97](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L97) |



##### info

> 资源的相关信息

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:109](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L109) |



##### isNative

> 资源是否是原生资源

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:123](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L123) |



##### options

> 自定义参数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:135](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L135) |



##### id

> 请求的 id, 由 uuid 和 isNative 组合而成

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/request-item.js:164](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L164) |






<!-- Method Block -->
#### 方法


##### constructor

创建一个 request item

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/request-item.js:150](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L150) |



##### recycle

回收 requestItem 用于复用

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/asset-manager/request-item.js:181](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L181) |



##### create

从对象池中创建 requestItem

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/RequestItem.html" class="crosslink">RequestItem</a> 
| 定义于 | [cocos2d/core/asset-manager/request-item.js:209](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/asset-manager/request-item.js#L209) |




