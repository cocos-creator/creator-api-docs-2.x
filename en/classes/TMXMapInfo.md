## `TMXMapInfo` Class



Module: [cc](../modules/cc.md)


<p>cc.TMXMapInfo contains the information about the map like: <br/>
- Map orientation (hexagonal, isometric or orthogonal)<br/>
- Tile size<br/>
- Map size</p>

<p>And it also contains: <br/>
- Layers (an array of TMXLayerInfo objects)<br/>
- Tilesets (an array of TMXTilesetInfo objects) <br/>
- ObjectGroups (an array of TMXObjectGroupInfo objects) </p>

<p>This information is obtained from the TMX file. </p>



### Index

##### Properties

  - [`properties`](#properties) `Array` Properties of the map info.
  - [`orientation`](#orientation) `Number` Map orientation.
  - [`parentElement`](#parentelement) `Object` Parent element.
  - [`parentGID`](#parentgid) `Number` Parent GID.
  - [`layerAttrs`](#layerattrs) `Object` Layer attributes.
  - [`storingCharacters`](#storingcharacters) `Boolean` Is reading storing characters stream.
  - [`currentString`](#currentstring) `String` Current string stored from characters stream.
  - [`mapWidth`](#mapwidth) `Number` Width of the map
  - [`mapHeight`](#mapheight) `Number` Height of the map
  - [`tileWidth`](#tilewidth) `Number` Width of a tile
  - [`tileHeight`](#tileheight) `Number` Height of a tile
  - [`ATTRIB_NONE`](#attribnone) `Number` 
  - [`ATTRIB_BASE64`](#attribbase64) `Number` 
  - [`ATTRIB_GZIP`](#attribgzip) `Number` 
  - [`ATTRIB_ZLIB`](#attribzlib) `Number` 





### Details


#### Properties


##### properties

> Properties of the map info.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:334](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L334) |



##### orientation

> Map orientation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:339](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L339) |



##### parentElement

> Parent element.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:344](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L344) |



##### parentGID

> Parent GID.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:349](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L349) |



##### layerAttrs

> Layer attributes.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:354](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L354) |



##### storingCharacters

> Is reading storing characters stream.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:359](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L359) |



##### currentString

> Current string stored from characters stream.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:364](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L364) |



##### mapWidth

> Width of the map

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:369](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L369) |



##### mapHeight

> Height of the map

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:374](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L374) |



##### tileWidth

> Width of a tile

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:379](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L379) |



##### tileHeight

> Height of a tile

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:384](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L384) |



##### ATTRIB_NONE

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:1264](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L1264) |



##### ATTRIB_BASE64

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:1272](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L1272) |



##### ATTRIB_GZIP

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:1280](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L1280) |



##### ATTRIB_ZLIB

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/tilemap/CCTMXXMLParser.js:1288](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/tilemap/CCTMXXMLParser.js#L1288) |






