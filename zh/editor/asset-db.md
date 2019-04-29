## Modules

<dl>
<dt><a href="#module_AssetDB">AssetDB</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#_checkIfMountValid">_checkIfMountValid(assetdb, fspath)</a></dt>
<dd><p>check and remove unused meta file</p>
</dd>
<dt><a href="#_deleteImportedAssets">_deleteImportedAssets()</a></dt>
<dd></dd>
<dt><a href="#_removeUnusedMeta">_removeUnusedMeta(assetdb, metapath)</a></dt>
<dd><p>check and remove unused meta file</p>
</dd>
<dt><a href="#_backupUnusedMeta">_backupUnusedMeta(assetdb, metapath, force)</a> ⇒ <code>string</code></dt>
<dd><p>check and backup unused meta file</p>
</dd>
<dt><a href="#_backupAsset">_backupAsset(assetdb, filePath)</a></dt>
<dd><p>check and backup asset file</p>
</dd>
<dt><a href="#_removeUnusedImportFiles">_removeUnusedImportFiles()</a></dt>
<dd><p>_removeUnusedImportFiles</p>
</dd>
<dt><a href="#_removeUnusedMtimeInfo">_removeUnusedMtimeInfo()</a></dt>
<dd><p>_removeUnusedMtimeInfo</p>
</dd>
<dt><a href="#_scan">_scan(assetdb, fspath, opts, cb)</a></dt>
<dd><p>task scan</p>
</dd>
<dt><a href="#_checkIfReimport">_checkIfReimport(assetdb, fspath, cb)</a></dt>
<dd><p>check if reimport</p>
</dd>
<dt><a href="#_initMetas">_initMetas(assetdb, fspath, cb)</a></dt>
<dd><p>precache uuid from meta files, if meta file not exists, create it</p>
</dd>
<dt><a href="#_importAsset">_importAsset(assetdb, fspath, cb)</a></dt>
<dd><p>precache uuid from meta files, if meta file not exists, create it</p>
</dd>
<dt><a href="#_postImportAsset">_postImportAsset(assetdb, assetInfo, cb)</a></dt>
<dd><p>Post manipulations of meta files, it may used to create reference between imported assets.</p>
</dd>
<dt><a href="#_fillInResults">_fillInResults(assetdb, path, meta, results)</a></dt>
<dd><p>Construct results for given meta and fill into the results array</p>
</dd>
<dt><a href="#_refresh">_refresh()</a></dt>
<dd><p>task refresh</p>
</dd>
<dt><a href="#_preProcessMoveInput">_preProcessMoveInput()</a></dt>
<dd><p>callback&#39;s parameters: srcPath, destPath, srcpaths, destPaths</p>
</dd>
<dt><a href="#_copyFiles">_copyFiles()</a></dt>
<dd></dd>
<dt><a href="#_generateSubMetaDiff">_generateSubMetaDiff()</a></dt>
<dd><p>For save / saveMeta tasks to generate sub meta diff informations</p>
</dd>
<dt><a href="#_deleteAsset">_deleteAsset()</a></dt>
<dd><p>Delete one asset by fspath</p>
</dd>
</dl>

<a name="module_AssetDB"></a>

## AssetDB
**Process**: core  

* [AssetDB](#module_AssetDB)
    * _static_
        * [.init([cb])](#module_AssetDB.init)
        * [.refresh(url, [cb])](#module_AssetDB.refresh)
        * [.deepQuery([cb])](#module_AssetDB.deepQuery)
        * [.queryAssets(pattern, assetTypes, [cb])](#module_AssetDB.queryAssets)
        * [.queryMetas(pattern, type, [cb])](#module_AssetDB.queryMetas)
        * [.move(srcUrl, destUrl, [cb])](#module_AssetDB.move)
        * [.delete(urls, [cb])](#module_AssetDB.delete)
        * [.create(url, data, [cb])](#module_AssetDB.create)
        * [.saveExists(url, data, [cb])](#module_AssetDB.saveExists)
        * [.import(rawfiles, url, [cb])](#module_AssetDB.import)
        * [.saveMeta(uuid, jsonString, [cb])](#module_AssetDB.saveMeta)
        * [.exchangeUuid(urlA, urlB, [cb])](#module_AssetDB.exchangeUuid)
        * [.clearImports(url, [cb])](#module_AssetDB.clearImports)
        * [.register(extname, folder, metaCtor)](#module_AssetDB.register)
        * [.unregister(metaCtor)](#module_AssetDB.unregister)
        * [.getRelativePath(fspath)](#module_AssetDB.getRelativePath) ⇒ <code>string</code>
        * [.getAssetBackupPath(filePath)](#module_AssetDB.getAssetBackupPath)
        * [.setEventCallback(cb)](#module_AssetDB.setEventCallback)
    * _inner_
        * [~urlToUuid(url)](#module_AssetDB..urlToUuid) ⇒ <code>string</code>
        * [~fspathToUuid(fspath)](#module_AssetDB..fspathToUuid) ⇒ <code>string</code>
        * [~uuidToFspath(uuid)](#module_AssetDB..uuidToFspath) ⇒ <code>string</code>
        * [~uuidToUrl(uuid)](#module_AssetDB..uuidToUrl) ⇒ <code>string</code>
        * [~fspathToUrl(fspath)](#module_AssetDB..fspathToUrl) ⇒ <code>string</code>
        * [~urlToFspath(url)](#module_AssetDB..urlToFspath) ⇒ <code>string</code>
        * [~exists(url)](#module_AssetDB..exists) ⇒ <code>string</code>
        * [~existsByUuid(uuid)](#module_AssetDB..existsByUuid) ⇒ <code>string</code>
        * [~existsByPath(fspath)](#module_AssetDB..existsByPath) ⇒ <code>string</code>
        * [~isSubAsset(url)](#module_AssetDB..isSubAsset) ⇒ <code>boolean</code>
        * [~isSubAssetByUuid(uuid)](#module_AssetDB..isSubAssetByUuid) ⇒ <code>boolean</code>
        * [~isSubAssetByPath(fspath)](#module_AssetDB..isSubAssetByPath) ⇒ <code>boolean</code>
        * [~containsSubAssets(url)](#module_AssetDB..containsSubAssets) ⇒ <code>boolean</code>
        * [~containsSubAssetsByUuid(uuid)](#module_AssetDB..containsSubAssetsByUuid) ⇒ <code>boolean</code>
        * [~containsSubAssetsByPath(path)](#module_AssetDB..containsSubAssetsByPath) ⇒ <code>boolean</code>
        * [~assetInfo(url)](#module_AssetDB..assetInfo) ⇒ <code>object</code>
        * [~assetInfoByUuid(uuid)](#module_AssetDB..assetInfoByUuid) ⇒ <code>object</code>
        * [~assetInfoByPath(fspath)](#module_AssetDB..assetInfoByPath) ⇒ <code>object</code>
        * [~subAssetInfos(url)](#module_AssetDB..subAssetInfos) ⇒ <code>array</code>
        * [~subAssetInfosByUuid(uuid)](#module_AssetDB..subAssetInfosByUuid) ⇒ <code>array</code>
        * [~subAssetInfosByPath(fspath)](#module_AssetDB..subAssetInfosByPath) ⇒ <code>array</code>
        * [~loadMeta(url)](#module_AssetDB..loadMeta) ⇒ <code>object</code>
        * [~loadMetaByUuid(uuid)](#module_AssetDB..loadMetaByUuid) ⇒ <code>object</code>
        * [~loadMetaByPath(fspath)](#module_AssetDB..loadMetaByPath) ⇒ <code>object</code>
        * [~isMount(url)](#module_AssetDB..isMount) ⇒ <code>boolean</code>
        * [~isMountByPath(fspath)](#module_AssetDB..isMountByPath) ⇒ <code>boolean</code>
        * [~isMountByUuid(uuid)](#module_AssetDB..isMountByUuid) ⇒ <code>boolean</code>
        * [~mountInfo(url)](#module_AssetDB..mountInfo) ⇒ <code>object</code>
        * [~mountInfoByUuid(uuid)](#module_AssetDB..mountInfoByUuid) ⇒ <code>object</code>
        * [~mountInfoByPath(fspath)](#module_AssetDB..mountInfoByPath) ⇒ <code>object</code>
        * [~mount(path, mountPath, opts, [cb])](#module_AssetDB..mount)
        * [~attachMountPath(mountPath, [cb])](#module_AssetDB..attachMountPath)
        * [~unattachMountPath(mountPath, [cb])](#module_AssetDB..unattachMountPath)
        * [~unmount(mountPath, [cb])](#module_AssetDB..unmount)

<a name="module_AssetDB.init"></a>

### AssetDB.init([cb])
Init assetdb, it will scan the mounted directories, and import unimported assets.

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.init(function (err, results) {
  // assets that imported during init
  results.forEach(function ( result ) {
    // result.uuid
    // result.parentUuid
    // result.url
    // result.path
    // result.type
  });
});
```
<a name="module_AssetDB.refresh"></a>

### AssetDB.refresh(url, [cb])
Refresh the assets in url, and return the results

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.refresh('db://assets/foo/bar/', function (err, results) {
  // assets that imported during init
  results.forEach(function ( result ) {
    if ( result.command === 'delete' ) {
      // result.uuid
      // result.url
      // result.path
      // result.type
    } else if ( result.command === 'change' || result.command === 'create' ) {
      // result.uuid
      // result.parentUuid
      // result.url
      // result.path
      // result.type
    } else if ( result.command === 'uuid-change' ) {
      // result.oldUuid
      // result.uuid
      // result.parentUuid
      // result.url
      // result.path
      // result.type
    }
  });
});
```
<a name="module_AssetDB.deepQuery"></a>

### AssetDB.deepQuery([cb])
deepQuery

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.deepQuery(function ( err, results ) {
  results.forEach(function ( result ) {
    // result.name
    // result.extname
    // result.uuid
    // result.type
    // result.isSubAsset
    // result.children - the array of children result
  });
});
```
<a name="module_AssetDB.queryAssets"></a>

### AssetDB.queryAssets(pattern, assetTypes, [cb])
queryAssets

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | The url pattern |
| assetTypes | <code>string</code> \| <code>array</code> | The asset type(s) |
| [cb] | <code>function</code> | The callback function |

**Example**  
```js
Editor.assetdb.queryAssets( 'db://assets/**\/*', 'texture', function ( err, results ) {
  results.forEach(function ( result ) {
    // result.url
    // result.path
    // result.uuid
    // result.type
    // result.isSubAsset
  });
});
```
<a name="module_AssetDB.queryMetas"></a>

### AssetDB.queryMetas(pattern, type, [cb])
queryMetas

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | The url pattern |
| type | <code>string</code> | The asset type |
| [cb] | <code>function</code> | The callback function |

**Example**  
```js
Editor.assetdb.queryAssets( 'db://assets/**\/*', 'texture', function ( err, results ) {
  results.forEach(function ( meta ) {
    // the meta instance
  });
});
```
<a name="module_AssetDB.move"></a>

### AssetDB.move(srcUrl, destUrl, [cb])
move

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| srcUrl | <code>string</code> | 
| destUrl | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.move( 'db://assets/foo/foobar.png', 'db://assets/bar/foobar.png', function ( err, results ) {
  results.forEach(function ( result ) {
    // result.srcPath
    // result.destPath
    // result.uuid
    // result.parentUuid
  });
});
```
<a name="module_AssetDB.delete"></a>

### AssetDB.delete(urls, [cb])
delete

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| urls | <code>array</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.delete( [ 'db://assets/foo/bar.png', 'db://assets/foo/bar.plist' ], function ( err, results ) {
  results.forEach(function ( result ) {
    // result.srcPath
    // result.destPath
    // result.uuid
    // result.parentUuid
  });
});
```
<a name="module_AssetDB.create"></a>

### AssetDB.create(url, data, [cb])
Create asset at url with data

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| data | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.create( 'db://assets/foo/bar.js', data, function ( err, results ) {
  results.forEach(function ( result ) {
    // result.uuid
    // result.parentUuid
    // result.url
    // result.path
    // result.type
  });
});
```
<a name="module_AssetDB.saveExists"></a>

### AssetDB.saveExists(url, data, [cb])
Save data to the exists asset at url

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| data | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.saveExists( 'db://assets/foo/bar.js', data, function ( err, meta ) {
  // do something
});
```
<a name="module_AssetDB.import"></a>

### AssetDB.import(rawfiles, url, [cb])
Import raw files to url

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| rawfiles | <code>array</code> | 
| url | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.import( ['/User/user/foo.js', '/User/user/bar.js'], 'db://assets/foobar', function ( err, results ) {
  results.forEach(function ( result ) {
    // result.uuid
    // result.parentUuid
    // result.url
    // result.path
    // result.type
  });
});
```
<a name="module_AssetDB.saveMeta"></a>

### AssetDB.saveMeta(uuid, jsonString, [cb])
Overwrite the meta by loading it through uuid

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 
| jsonString | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.saveMeta( uuid, jsonString, function ( err, meta ) {
  // do something
});
```
<a name="module_AssetDB.exchangeUuid"></a>

### AssetDB.exchangeUuid(urlA, urlB, [cb])
Exchange uuid for two assets

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| urlA | <code>string</code> | 
| urlB | <code>string</code> | 
| [cb] | <code>function</code> | 

<a name="module_AssetDB.clearImports"></a>

### AssetDB.clearImports(url, [cb])
Clear imports

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| [cb] | <code>function</code> | 

**Example**  
```js
Editor.assetdb.clearImports( 'db://assets/foo/bar.js', function ( err, results ) {
  results.forEach(function ( result ) {
    // result.uuid
    // result.url
    // result.path
    // result.type
  });
});
```
<a name="module_AssetDB.register"></a>

### AssetDB.register(extname, folder, metaCtor)
Register meta type

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| extname | <code>string</code> |  |
| folder | <code>boolean</code> | Whether it's a folder type |
| metaCtor | <code>object</code> |  |

**Example**  
```js
Editor.assetdb.register( '.png', false, PngMeta );
```
<a name="module_AssetDB.unregister"></a>

### AssetDB.unregister(metaCtor)
Unregister meta type

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| metaCtor | <code>object</code> | 

**Example**  
```js
Editor.assetdb.unregister( PngMeta );
```
<a name="module_AssetDB.getRelativePath"></a>

### AssetDB.getRelativePath(fspath) ⇒ <code>string</code>
Get the relative path from mount path to the asset by fspath

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>string</code> - the relative path from mount path to the asset  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB.getAssetBackupPath"></a>

### AssetDB.getAssetBackupPath(filePath)
get the backup file path of asset file

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | asset file path |

<a name="module_AssetDB.setEventCallback"></a>

### AssetDB.setEventCallback(cb)
set the event callback for assets events

**Kind**: static method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>object</code> | The callback for assets events. |

**Example**  
```js
Editor.assetdb.setEventCallback((event, params) => {
   // do something for the event
})
```
<a name="module_AssetDB..urlToUuid"></a>

### AssetDB~urlToUuid(url) ⇒ <code>string</code>
Return uuid by url. if uuid not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..fspathToUuid"></a>

### AssetDB~fspathToUuid(fspath) ⇒ <code>string</code>
Return uuid by file path. if uuid not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..uuidToFspath"></a>

### AssetDB~uuidToFspath(uuid) ⇒ <code>string</code>
Return file path by uuid. if file path not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..uuidToUrl"></a>

### AssetDB~uuidToUrl(uuid) ⇒ <code>string</code>
Return url by uuid. if url not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..fspathToUrl"></a>

### AssetDB~fspathToUrl(fspath) ⇒ <code>string</code>
Return url by file path. if file path not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..urlToFspath"></a>

### AssetDB~urlToFspath(url) ⇒ <code>string</code>
Return file path by url. if url not found, it will return null.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..exists"></a>

### AssetDB~exists(url) ⇒ <code>string</code>
Check existance by url.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..existsByUuid"></a>

### AssetDB~existsByUuid(uuid) ⇒ <code>string</code>
Check existance by uuid.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..existsByPath"></a>

### AssetDB~existsByPath(fspath) ⇒ <code>string</code>
Check existance by path.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..isSubAsset"></a>

### AssetDB~isSubAsset(url) ⇒ <code>boolean</code>
Check whether asset for a given url is a sub asset.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..isSubAssetByUuid"></a>

### AssetDB~isSubAssetByUuid(uuid) ⇒ <code>boolean</code>
Check whether asset for a given uuid is a sub asset.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..isSubAssetByPath"></a>

### AssetDB~isSubAssetByPath(fspath) ⇒ <code>boolean</code>
Check whether asset for a given path is a sub asset.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..containsSubAssets"></a>

### AssetDB~containsSubAssets(url) ⇒ <code>boolean</code>
Check whether asset contains sub assets for a given url.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..containsSubAssetsByUuid"></a>

### AssetDB~containsSubAssetsByUuid(uuid) ⇒ <code>boolean</code>
Check whether asset contains sub assets for a given uuid.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..containsSubAssetsByPath"></a>

### AssetDB~containsSubAssetsByPath(path) ⇒ <code>boolean</code>
Check whether asset contains sub assets for a given path.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_AssetDB..assetInfo"></a>

### AssetDB~assetInfo(url) ⇒ <code>object</code>
Return asset info by a given url.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { uuid, path, url, type, isSubAsset }  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..assetInfoByUuid"></a>

### AssetDB~assetInfoByUuid(uuid) ⇒ <code>object</code>
Return asset info by a given uuid.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { uuid, path, url, type, isSubAsset }  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..assetInfoByPath"></a>

### AssetDB~assetInfoByPath(fspath) ⇒ <code>object</code>
Return asset info by a given file path.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { uuid, path, url, type, isSubAsset }  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..subAssetInfos"></a>

### AssetDB~subAssetInfos(url) ⇒ <code>array</code>
Return all sub assets info by url if the url contains sub assets.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>array</code> - - [{ uuid, path, url, type, isSubAsset }]  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..subAssetInfosByUuid"></a>

### AssetDB~subAssetInfosByUuid(uuid) ⇒ <code>array</code>
Return all sub assets info by uuid if the uuid contains sub assets.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>array</code> - - [{ uuid, path, url, type, isSubAsset }]  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..subAssetInfosByPath"></a>

### AssetDB~subAssetInfosByPath(fspath) ⇒ <code>array</code>
Return all sub assets info by path if the path contains sub assets.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>array</code> - - [{ uuid, path, url, type, isSubAsset }]  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..loadMeta"></a>

### AssetDB~loadMeta(url) ⇒ <code>object</code>
Return meta instance by a given url.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..loadMetaByUuid"></a>

### AssetDB~loadMetaByUuid(uuid) ⇒ <code>object</code>
Return meta instance by a given uuid.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..loadMetaByPath"></a>

### AssetDB~loadMetaByPath(fspath) ⇒ <code>object</code>
Return meta instance by a given path.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..isMount"></a>

### AssetDB~isMount(url) ⇒ <code>boolean</code>
Return whether a given url is reference to a mount

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..isMountByPath"></a>

### AssetDB~isMountByPath(fspath) ⇒ <code>boolean</code>
Return whether a given path is reference to a mount

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..isMountByUuid"></a>

### AssetDB~isMountByUuid(uuid) ⇒ <code>boolean</code>
Return whether a given uuid is reference to a mount

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..mountInfo"></a>

### AssetDB~mountInfo(url) ⇒ <code>object</code>
Return mount info by url

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { path, name, type }  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_AssetDB..mountInfoByUuid"></a>

### AssetDB~mountInfoByUuid(uuid) ⇒ <code>object</code>
Return mount info by uuid

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { path, name, type }  

| Param | Type |
| --- | --- |
| uuid | <code>string</code> | 

<a name="module_AssetDB..mountInfoByPath"></a>

### AssetDB~mountInfoByPath(fspath) ⇒ <code>object</code>
Return mount info by path

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  
**Returns**: <code>object</code> - - { path, name, type }  

| Param | Type |
| --- | --- |
| fspath | <code>string</code> | 

<a name="module_AssetDB..mount"></a>

### AssetDB~mount(path, mountPath, opts, [cb])
mount a directory to assetdb, and give it a name. if you don't provide a name, it will mount to root.

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | file system path |
| mountPath | <code>string</code> | the mount path (relative path) |
| opts | <code>object</code> | options |
| opts.hide | <code>object</code> | if the mount hide in assets browser |
| opts.virtual | <code>object</code> | if this is a virtual mount point |
| opts.icon | <code>object</code> | icon for the mount |
| [cb] | <code>function</code> | a callback function |

**Example**  
```js
Editor.assetdb.mount('path/to/mount', 'assets', function (err) {
  // mounted, do something ...
});
```
<a name="module_AssetDB..attachMountPath"></a>

### AssetDB~attachMountPath(mountPath, [cb])
attach the specified mount path

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| mountPath | <code>string</code> | the mount path (relative path) |
| [cb] | <code>function</code> | a callback function |

**Example**  
```js
Editor.assetdb.attachMountPath('assets', function (err, results) {
  // mount path attached, do something ...
  // results are the assets created
});
```
<a name="module_AssetDB..unattachMountPath"></a>

### AssetDB~unattachMountPath(mountPath, [cb])
unattach the specified mount path

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| mountPath | <code>string</code> | the mount path (relative path) |
| [cb] | <code>function</code> | a callback function |

**Example**  
```js
Editor.assetdb.unattachMountPath('assets', function (err, results) {
  // mount path unattached, do something ...
  // results are the assets deleted
});
```
<a name="module_AssetDB..unmount"></a>

### AssetDB~unmount(mountPath, [cb])
Unmount by name

**Kind**: inner method of [<code>AssetDB</code>](#module_AssetDB)  

| Param | Type | Description |
| --- | --- | --- |
| mountPath | <code>string</code> | the mount path |
| [cb] | <code>function</code> |  |

**Example**  
```js
Editor.assetdb.unmount('assets', function (err) {
  // unmounted, do something ...
});
```
<a name="_checkIfMountValid"></a>

## _checkIfMountValid(assetdb, fspath)
check and remove unused meta file

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| fspath | <code>string</code> | meta file path |

<a name="_deleteImportedAssets"></a>

## _deleteImportedAssets()
**Kind**: global function  
<a name="_removeUnusedMeta"></a>

## _removeUnusedMeta(assetdb, metapath)
check and remove unused meta file

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| metapath | <code>string</code> | meta file path |

<a name="_backupUnusedMeta"></a>

## _backupUnusedMeta(assetdb, metapath, force) ⇒ <code>string</code>
check and backup unused meta file

**Kind**: global function  
**Returns**: <code>string</code> - The relative path of the meta file. If not backed up, return null  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| metapath | <code>string</code> | meta file path |
| force | <code>boolean</code> | skip the check process and force do backup, default is false |

<a name="_backupAsset"></a>

## _backupAsset(assetdb, filePath)
check and backup asset file

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| filePath | <code>string</code> | asset file path |

<a name="_removeUnusedImportFiles"></a>

## _removeUnusedImportFiles()
_removeUnusedImportFiles

**Kind**: global function  
<a name="_removeUnusedMtimeInfo"></a>

## _removeUnusedMtimeInfo()
_removeUnusedMtimeInfo

**Kind**: global function  
<a name="_scan"></a>

## _scan(assetdb, fspath, opts, cb)
task scan

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| fspath | <code>string</code> | file system path |
| opts | <code>object</code> | options |
| opts.remove-unused-meta | <code>object</code> | indicate if remove unused meta file |
| opts.filter-meta | <code>object</code> | if results need filter .meta file |
| cb | <code>function</code> |  |

<a name="_checkIfReimport"></a>

## _checkIfReimport(assetdb, fspath, cb)
check if reimport

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| fspath | <code>string</code> | file system path |
| cb | <code>function</code> |  |

<a name="_initMetas"></a>

## _initMetas(assetdb, fspath, cb)
precache uuid from meta files, if meta file not exists, create it

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| fspath | <code>string</code> | file system path |
| cb | <code>function</code> |  |

<a name="_importAsset"></a>

## _importAsset(assetdb, fspath, cb)
precache uuid from meta files, if meta file not exists, create it

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| fspath | <code>string</code> | file system path |
| cb | <code>function</code> |  |

<a name="_postImportAsset"></a>

## _postImportAsset(assetdb, assetInfo, cb)
Post manipulations of meta files, it may used to create reference between imported assets.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| assetInfo | <code>object</code> | Asset info object including file system path and other informations. |
| cb | <code>function</code> |  |

<a name="_fillInResults"></a>

## _fillInResults(assetdb, path, meta, results)
Construct results for given meta and fill into the results array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetdb | <code>object</code> | asset database |
| path | <code>string</code> | file system path for asset |
| meta | <code>AssetMeta</code> | Meta object |
| results | <code>Array</code> | The results array to fill |

<a name="_refresh"></a>

## _refresh()
task refresh

**Kind**: global function  
<a name="_preProcessMoveInput"></a>

## _preProcessMoveInput()
callback's parameters: srcPath, destPath, srcpaths, destPaths

**Kind**: global function  
<a name="_copyFiles"></a>

## _copyFiles()
**Kind**: global function  
<a name="_generateSubMetaDiff"></a>

## _generateSubMetaDiff()
For save / saveMeta tasks to generate sub meta diff informations

**Kind**: global function  
<a name="_deleteAsset"></a>

## _deleteAsset()
Delete one asset by fspath

**Kind**: global function  
