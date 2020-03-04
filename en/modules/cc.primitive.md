
## `cc.primitive` Module






A basic module for creating vertex data for 3D objects. You can access this module by `cc.primitive`.





### Index



##### Methods

  - [`box`](#box) Create box vertex data
  - [`cone`](#cone) Create cone vertex data
  - [`cylinder`](#cylinder) Create cylinder vertex data
  - [`plane`](#plane) Create plane vertex data
  - [`quad`](#quad) Create quad vertex data
  - [`sphere`](#sphere) Create sphere vertex data
  - [`torus`](#torus) Create torus vertex data
  - [`capsule`](#capsule) Create capsule vertex data
  - [`polyhedron`](#polyhedron) Create polyhedron vertex data



### Details




<!-- Method Block -->
#### Methods


##### box

Create box vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:25](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L25) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `length` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `widthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `lengthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### cone

Create cone vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:40](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L40) |

###### Parameters
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### cylinder

Create cylinder vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:55](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L55) |

###### Parameters
- `radiusTop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `radiusBottom` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### plane

Create plane vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:71](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L71) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `length` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `widthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `lengthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### quad

Create quad vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:84](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L84) |



##### sphere

Create sphere vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:92](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L92) |

###### Parameters
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `segments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### torus

Create torus vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:103](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L103) |

###### Parameters
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tube` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `tubularSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### capsule

Create capsule vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:117](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L117) |

###### Parameters
- `radiusTop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `radiusBottom` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `sides` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### polyhedron

Create polyhedron vertex data

| meta | description |
|------|-------------|
| Returns | <a href="../classes/primitive.VertexData.html" class="crosslink">primitive.VertexData</a> 
| Defined in | [cocos2d/core/3d/primitive/index.ts:133](https://github.com/cocos-creator/engine/blob/9b7a7dc11ce49f0fdca3c34df5ab59604060c0a4/cocos2d/core/3d/primitive/index.ts#L133) |

###### Parameters
- `type` <a href="../enums/primitive.PolyhedronType.html" class="crosslink">primitive.PolyhedronType</a> 
- `Size` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `sizeX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `sizeY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `sizeZ` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



