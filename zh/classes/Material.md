## `Material` 类型

继承于 [`Asset`](Asset.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


材质资源类。



### 索引

##### 属性（properties）

  - [`_uuid`](#uuid) `String` 
  - [`loaded`](#loaded) `Boolean` 该资源是否已经成功加载。
  - [`nativeUrl`](#nativeurl) `String` 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
  - [`refCount`](#refcount) `Number` 引用的数量
  - [`_native`](#native) `String` 保存原生资源的 URL。
  - [`_nativeAsset`](#nativeasset) `Object` 此资源依赖的底层原生资源（如果有的话）。
  - [`url`](#url) `String` `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`getBuiltinMaterial`](#getbuiltinmaterial) 获取内置材质
  - [`createWithBuiltin`](#createwithbuiltin) 使用内建 Effect 创建一个材质。
  - [`create`](#create) 创建一个材质。
  - [`setProperty`](#setproperty) 设置材质的属性
  - [`getProperty`](#getproperty) 获取材质的属性。
  - [`define`](#define) 设置材质的宏定义。
  - [`getDefine`](#getdefine) 获取材质的宏定义。
  - [`setCullMode`](#setcullmode) 设置材质的裁减模式。
  - [`setDepth`](#setdepth) 设置材质的深度渲染状态。
  - [`setBlend`](#setblend) 设置材质的混合渲染状态。
  - [`setStencilEnabled`](#setstencilenabled) 设置是否开启模板测试。
  - [`setStencil`](#setstencil) 设置材质的模板测试渲染参数。
  - [`toString`](#tostring) 返回资源的 URL。
  - [`serialize`](#serialize) 应 AssetDB 要求提供这个方法。
  - [`createNode`](#createnode) 使用该资源在场景中创建一个新节点。
  - [`_setRawAsset`](#setrawasset) 为此资源设置原生文件名。
  - [`addRef`](#addref) 增加资源的引用
  - [`decRef`](#decref) 减少资源的引用并尝试进行自动释放。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) 清除实例中的所有引用。
  - [`_onPreDestroy`](#onpredestroy) 在对象被销毁之前调用。
  - [`_serialize`](#serialize) 为此对象定制序列化。
  - [`_deserialize`](#deserialize) 从自定义序列化数据初始化此对象。



### Details


#### 属性（properties）


##### _uuid

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:57](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L57) |



##### loaded

> 该资源是否已经成功加载。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:66](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L66) |



##### nativeUrl

> 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:81](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L81) |



##### refCount

> 引用的数量

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:115](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L115) |



##### _native

> 保存原生资源的 URL。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:131](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L131) |



##### _nativeAsset

> 此资源依赖的底层原生资源（如果有的话）。
此属性可用于访问与资源相关的其他详细信息或功能。
如果 `_native` 可用，则此属性将由加载器初始化。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| 定义于 | [cocos2d/core/assets/CCAsset.js:142](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L142) |



##### url

> `cc.Asset.url` is deprecated, please use <a href="../classes/Asset.html#property_nativeUrl" class="crosslink">nativeUrl</a> instead

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/asset-manager/deprecated.js:728](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/asset-manager/deprecated.js#L728) |
| 废弃（Deprecated） | cc.Asset.url is deprecated, please use cc.Asset.nativeUrl instead |



##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L240) |

##### 示例

```js
obj.name = "New Obj";
```


##### isValid

> 表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。如果希望判断当前帧是否调用过 `destroy`，请使用 `cc.isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L258) |

##### 示例

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### 方法


##### getBuiltinMaterial

获取内置材质

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Material.html" class="crosslink">Material</a> 
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:151](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L151) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 


##### createWithBuiltin

使用内建 Effect 创建一个材质。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Material.html" class="crosslink">Material</a> 
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:168](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L168) |

###### 参数列表
- `effectName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
- `techniqueIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### create

创建一个材质。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Material.html" class="crosslink">Material</a> 
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:181](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L181) |

###### 参数列表
- `effectAsset` <a href="../classes/EffectAsset.html" class="crosslink">EffectAsset</a> 
- `techniqueIndex` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setProperty

设置材质的属性

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:199](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L199) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
- `val` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `directly` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### getProperty

获取材质的属性。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:230](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L230) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### define

设置材质的宏定义。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:245](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L245) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
- `val` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `force` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### getDefine

获取材质的宏定义。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:263](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L263) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">string</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setCullMode

设置材质的裁减模式。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:278](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L278) |

###### 参数列表
- `cullMode` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setDepth

设置材质的深度渲染状态。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:289](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L289) |

###### 参数列表
- `depthTest` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
- `depthWrite` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
- `depthFunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setBlend

设置材质的混合渲染状态。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:307](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L307) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
- `blendEq` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendSrc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendDst` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendAlphaEq` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendSrcAlpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendDstAlpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `blendColor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setStencilEnabled

设置是否开启模板测试。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:335](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L335) |

###### 参数列表
- `stencilTest` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### setStencil

设置材质的模板测试渲染参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/material/CCMaterial.js:346](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/material/CCMaterial.js#L346) |

###### 参数列表
- `stencilTest` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilFunc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilRef` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilMask` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilFailOp` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilZFailOp` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilZPassOp` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `stencilWriteMask` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
- `passIdx` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 


##### toString

返回资源的 URL。

Asset 对象将会重写 Object 对象的 `toString()` 方法。
对于 Asset 对象，`toString()` 方法返回该对象的字符串表示形式。
当资源要表示为文本值时或在字符串连接时引用时，JavaScript 会自动调用 `toString()` 方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:212](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L212) |



##### serialize

应 AssetDB 要求提供这个方法。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:232](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L232) |



##### createNode

使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:246](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L246) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `error` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- `node` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the created node or null


##### _setRawAsset

为此资源设置原生文件名。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/assets/CCAsset.js:261](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L261) |

###### 参数列表
- `filename` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `inLibrary` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### addRef

增加资源的引用

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:283](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L283) |



##### decRef

减少资源的引用并尝试进行自动释放。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 
| 定义于 | [cocos2d/core/assets/CCAsset.js:301](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/assets/CCAsset.js#L301) |



##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 `cc.isValid(obj)` 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L293) |


##### 示例

```js
obj.destroy();
```

##### _destruct

清除实例中的所有引用。

注意：此方法不会清除在 `CCObject` 实例中定义的 `getter` 或 `setter`。如果需要，你可以重写 `_destruct` 方法。例如：

```js
_destruct: function () {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            switch (typeof this[key]) {
                case 'string':
                    this[key] = '';
                    break;
                case 'object':
                case 'function':
                    this[key] = null;
                    break;
        }
    }
}
```

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L511) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/platform/CCObject.js#L524) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



