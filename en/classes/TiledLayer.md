## `TiledLayer` Class

Extends [`_SGComponent`](_SGComponent.md)


Module: [cc](../modules/cc.md)


Render the TMX layer.


### Index

##### Properties

  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,...
  - [`node`](#node) `Node` The node this component is attached to.
  - [`uuid`](#uuid) `String` The uuid for editor.
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` indicates whether this component is enabled or not.
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` indicates whether this component is enabled and its node is also active in the hierarchy.
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` Returns a value which used to indicate the onLoad get called or not.
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`getLayerName`](#getlayername) Gets the layer name.
  - [`SetLayerName`](#setlayername) Set the layer name.
  - [`getProperty`](#getproperty) Return the value for the specific property name.
  - [`getPositionAt`](#getpositionat) Returns the position in pixels of a given tile coordinate.
  - [`removeTileAt`](#removetileat) Removes a tile at given tile coordinate.
  - [`setTileGID`](#settilegid) The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor .
  - [`getTileGIDAt`](#gettilegidat) Returns the tile gid at a given tile coordinate.
  - [`getTileAt`](#gettileat) Returns the tile (_ccsg.Sprite) at a given a tile coordinate.
  - [`releaseMap`](#releasemap) Dealloc the map that contains the tile position from memory.
  - [`setContentSize`](#setcontentsize) Sets the untransformed size of the _ccsg.TMXLayer.
  - [`getTexture`](#gettexture) Return texture of cc.SpriteBatchNode.
  - [`setTexture`](#settexture) Set the texture of cc.SpriteBatchNode.
  - [`setTileOpacity`](#settileopacity) Set the opacity of all tiles
  - [`getLayerSize`](#getlayersize) Gets layer size.
  - [`setLayerSize`](#setlayersize) Set layer size.
  - [`getMapTileSize`](#getmaptilesize) Size of the map's tile (could be different from the tile's size).
  - [`setMapTileSize`](#setmaptilesize) Set the map tile size.
  - [`getTiles`](#gettiles) Pointer to the map of tiles.
  - [`setTiles`](#settiles) Pointer to the map of tiles.
  - [`getTileSet`](#gettileset) Tile set information for the layer.
  - [`setTileSet`](#settileset) Tile set information for the layer.
  - [`getLayerOrientation`](#getlayerorientation) Layer orientation, which is the same as the map orientation.
  - [`setLayerOrientation`](#setlayerorientation) Layer orientation, which is the same as the map orientation.
  - [`getProperties`](#getproperties) properties from the layer.
  - [`setProperties`](#setproperties) properties from the layer.
  - [`_createSgNode`](#createsgnode) Create and returns your new scene graph node (SGNode) to add to scene graph.
  - [`_initSgNode`](#initsgnode) 
  - [`_removeSgNode`](#removesgnode) 
  - [`update`](#update) Update is called every frame, if the Component is enabled.
  - [`lateUpdate`](#lateupdate) LateUpdate is called every frame, if the Component is enabled.
  - [`__preload`](#preload) `__preload` is called before every onLoad.
  - [`onLoad`](#onload) When attaching to an active node or its node first activated.
  - [`start`](#start) Called before all scripts' update if the Component is enabled the first time.
  - [`onEnable`](#onenable) Called when this component becomes enabled and its node is active.
  - [`onDisable`](#ondisable) Called when this component becomes disabled or its node becomes inactive.
  - [`onDestroy`](#ondestroy) Called when this component will be destroyed.
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
  - [`addComponent`](#addcomponent) Adds a component class to the node.
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't....
  - [`getComponents`](#getcomponents) Returns all components of supplied Type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns the components of supplied type in self or any of its children using depth first search.
  - [`_getLocalBounds`](#getlocalbounds) If the component's bounding box is different from the node's, you can implement this method to supply
  - [`onRestore`](#onrestore) for undo/redo operation.
  - [`schedule`](#schedule) Schedules a custom selector....
  - [`scheduleOnce`](#scheduleonce) Schedules a callback function that runs only once, with a delay of 0 or larger.
  - [`unschedule`](#unschedule) Unschedules a custom callback function.
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function....
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in _onPreDestroy

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:62](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L62) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L76) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:112](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L112) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:160](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L160) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:167](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L167) |

##### Examples

```js
comp.enabled = true;
cc.log(comp.enabled);
```


##### enabledInHierarchy

> indicates whether this component is enabled and its node is also active in the hierarchy.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:198](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L198) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:214](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L214) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:243](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L243) |

##### Examples

```js
obj.name = "New Obj";
```


##### isValid

> Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `cc.isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:261](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L261) |

##### Examples

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### Methods


##### getLayerName

Gets the layer name.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:95](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L95) |


##### Examples

```js
var layerName = tiledLayer.getLayerName();
cc.log(layerName);
```

##### SetLayerName

Set the layer name.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:111](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L111) |

###### Parameters
- `layerName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
tiledLayer.setLayerName("New Layer");
```

##### getProperty

Return the value for the specific property name.

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:125](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L125) |

###### Parameters
- `propertyName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var property = tiledLayer.getProperty("info");
cc.log(property);
```

##### getPositionAt

Returns the position in pixels of a given tile coordinate.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:143](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L143) |

###### Parameters
- `pos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> position or x
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var pos = tiledLayer.getPositionAt(cc.v2(0, 0));
cc.log("Pos: " + pos);
var pos = tiledLayer.getPositionAt(0, 0);
cc.log("Pos: " + pos);
```

##### removeTileAt

Removes a tile at given tile coordinate.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:166](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L166) |

###### Parameters
- `pos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> position or x
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
tiledLayer.removeTileAt(cc.v2(0, 0));
tiledLayer.removeTileAt(0, 0);
```

##### setTileGID

Sets the tile gid (gid = tile global id) at a given tile coordinate.<br />
The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.<br />
If a tile is already placed at that position, then it will be removed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:184](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L184) |

###### Parameters
- `gid` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `posOrX` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> position or x
- `flagsOrY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> flags or y
- `flags` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
tiledLayer.setTileGID(1001, 10, 10, 1)
```

##### getTileGIDAt

Returns the tile gid at a given tile coordinate. <br />
if it returns 0, it means that the tile is empty. <br />
This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())<br />

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:233](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L233) |

###### Parameters
- `pos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var tileGid = tiledLayer.getTileGIDAt(0, 0);
```

##### getTileAt

Returns the tile (_ccsg.Sprite) at a given a tile coordinate. <br/>
The returned _ccsg.Sprite will be already added to the _ccsg.TMXLayer. Don't add it again.<br/>
The _ccsg.Sprite can be treated like any other _ccsg.Sprite: rotated, scaled, translated, opacity, color, etc. <br/>
You can remove either by calling: <br/>
- layer.removeChild(sprite, cleanup); <br/>
- or layer.removeTileAt(ccp(x,y));

| meta | description |
|------|-------------|
| Returns | _ccsg.Sprite 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:258](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L258) |

###### Parameters
- `pos` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> or x
- `y` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var title = tiledLayer.getTileAt(100, 100);
cc.log(title);
```

##### releaseMap

Dealloc the map that contains the tile position from memory. <br />
Unless you want to know at runtime the tiles positions, you can safely call this method. <br />
If you are going to call layer.getTileGIDAt() then, don't release the map.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:289](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L289) |


##### Examples

```js
tiledLayer.releaseMap();
```

##### setContentSize

Sets the untransformed size of the _ccsg.TMXLayer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:308](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L308) |

###### Parameters
- `size` <a href="../classes/Size.html" class="crosslink">Size</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size of the _ccsg.TMXLayer or The untransformed size's width of the TMXLayer.
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The untransformed size's height of the _ccsg.TMXLayer.

##### Examples

```js
tiledLayer.setContentSize(100, 100);
```

##### getTexture

Return texture of cc.SpriteBatchNode.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:325](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L325) |


##### Examples

```js
var texture = tiledLayer.getTexture();
cc.log("Texture: " + texture);
```

##### setTexture

Set the texture of cc.SpriteBatchNode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:341](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L341) |

###### Parameters
- `texture` <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 

##### Examples

```js
tiledLayer.setTexture(texture);
```

##### setTileOpacity

Set the opacity of all tiles

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:355](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L355) |

###### Parameters
- `opacity` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
tiledLayer.setTileOpacity(128);
```

##### getLayerSize

Gets layer size.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:373](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L373) |


##### Examples

```js
var size = tiledLayer.getLayerSize();
cc.log("layer size: " + size);
```

##### setLayerSize

Set layer size.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:389](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L389) |

###### Parameters
- `layerSize` <a href="../classes/Size.html" class="crosslink">Size</a> 

##### Examples

```js
tiledLayer.setLayerSize(new cc.size(5, 5));
```

##### getMapTileSize

Size of the map's tile (could be different from the tile's size).

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:403](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L403) |


##### Examples

```js
var mapTileSize = tiledLayer.getMapTileSize();
cc.log("MapTile size: " + mapTileSize);
```

##### setMapTileSize

Set the map tile size.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:419](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L419) |

###### Parameters
- `tileSize` <a href="../classes/Size.html" class="crosslink">Size</a> 

##### Examples

```js
tiledLayer.setMapTileSize(new cc.size(10, 10));
```

##### getTiles

Pointer to the map of tiles.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:433](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L433) |


##### Examples

```js
var tiles = tiledLayer.getTiles();
```

##### setTiles

Pointer to the map of tiles.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:448](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L448) |

###### Parameters
- `tiles` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

```js
tiledLayer.setTiles(tiles);
```

##### getTileSet

Tile set information for the layer.

| meta | description |
|------|-------------|
| Returns | TMXTilesetInfo 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:462](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L462) |


##### Examples

```js
var tileset = tiledLayer.getTileSet();
```

##### setTileSet

Tile set information for the layer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:477](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L477) |

###### Parameters
- `tileset` TMXTilesetInfo 

##### Examples

```js
tiledLayer.setTileSet(tileset);
```

##### getLayerOrientation

Layer orientation, which is the same as the map orientation.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:491](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L491) |


##### Examples

```js
var orientation = tiledLayer.getLayerOrientation();
cc.log("Layer Orientation: " + orientation);
```

##### setLayerOrientation

Layer orientation, which is the same as the map orientation.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:507](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L507) |

###### Parameters
- `orientation` <a href="../enums/TiledMap.Orientation.html" class="crosslink">TiledMap.Orientation</a> 

##### Examples

```js
tiledLayer.setLayerOrientation(TiledMap.Orientation.ORTHO);
```

##### getProperties

properties from the layer. They can be added using Tiled.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:521](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L521) |


##### Examples

```js
var properties = tiledLayer.getProperties();
cc.log("Properties: " + properties);
```

##### setProperties

properties from the layer. They can be added using Tiled.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/tilemap/CCTiledLayer.js:537](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/tilemap/CCTiledLayer.js#L537) |

###### Parameters
- `properties` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

##### Examples

```js
tiledLayer.setLayerOrientation(properties);
```

##### _createSgNode

Create and returns your new scene graph node (SGNode) to add to scene graph.
You should call the setContentSize of the SGNode if its size should be the same with the node's.

| meta | description |
|------|-------------|
| Returns | _ccsg.Node 
| Defined in | [cocos2d/core/components/CCSGComponent.js:66](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L66) |



##### _initSgNode



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCSGComponent.js:76](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L76) |



##### _removeSgNode



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCSGComponent.js:82](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCSGComponent.js#L82) |



##### update

Update is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:235](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L235) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:244](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L244) |



##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:252](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L252) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:263](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L263) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:274](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L274) |



##### onEnable

Called when this component becomes enabled and its node is active.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:285](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L285) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:293](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L293) |



##### onDestroy

Called when this component will be destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L301) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:309](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L309) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:314](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L314) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:319](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L319) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:329](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L329) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the constructor or the class name of the component to add

##### Examples

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### getComponent

Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:347](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L347) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
// get sprite component.
var sprite = node.getComponent(cc.Sprite);
// get custom test calss.
var test = node.getComponent("Test");
```

##### getComponents

Returns all components of supplied Type in the node.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:371](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L371) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponents(cc.Sprite);
var tests = node.getComponents("Test");
```

##### getComponentInChildren

Returns the component of supplied type in any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:389](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L389) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

Returns the components of supplied type in self or any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:407](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L407) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### _getLocalBounds

If the component's bounding box is different from the node's, you can implement this method to supply
a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:427](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L427) |

###### Parameters
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
an undo operation on this component.<br/>
<br/>
If the component contains the "internal state", short for "temporary member variables which not included<br/>
in its CCClass properties", then you may need to implement this function.<br/>
<br/>
The editor will call the getset accessors of your component to record/restore the component's state<br/>
for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement<br/>
this function to manually synchronize your component's "internal states" with its public properties.<br/>
Once you implement this function, all the getset accessors of your component will not be called when<br/>
the user performs an undo/redo operation. Which means that only the properties with default value<br/>
will be recorded or restored by editor.<br/>
<br/>
Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need<br/>
to support the reset menu, you should manually synchronize your component's "internal states" with its<br/>
properties in this function. Once you implement this function, all the getset accessors of your component<br/>
will not be called during reset operation. Which means that only the properties with default value<br/>
will be reset by editor.

This function is only called in editor mode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:440](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L440) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:542](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L542) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.schedule(timeCallback, 1);
```

##### scheduleOnce

Schedules a callback function that runs only once, with a delay of 0 or larger.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:579](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L579) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution.

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.scheduleOnce(timeCallback, 2);
```

##### unschedule

Unschedules a custom callback function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:596](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L596) |

###### Parameters
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### Examples

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
Actions are not affected by this method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:612](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/components/CCComponent.js#L612) |


##### Examples

```js
this.unscheduleAllCallbacks();
```

##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable any more.
You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:296](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L296) |


##### Examples

```js
obj.destroy();
```

##### _destruct

Clear all references in the instance.

NOTE: this method will not clear the getter or setter functions which defined in the instance of CCObject.
      You can override the _destruct method if you need, for example:
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

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:428](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L428) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:461](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L461) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:486](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L486) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:496](https://github.com/cocos-creator/engine/blob/79542d65dc19c8718cb54c9afa022e8f91855f48/cocos2d/core/platform/CCObject.js#L496) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



