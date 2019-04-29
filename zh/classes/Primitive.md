## `Primitive` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引



##### 方法

  - [`box`](#box) 创建长方体顶点数据
  - [`cone`](#cone) 创建圆锥体顶点数据
  - [`cylinder`](#cylinder) 创建圆柱体顶点数据
  - [`plane`](#plane) 创建平台顶点数据
  - [`quad`](#quad) 创建面片顶点数据
  - [`sphere`](#sphere) 创建球体顶点数据
  - [`torus`](#torus) 创建圆环顶点数据
  - [`capsule`](#capsule) 创建胶囊体顶点数据
  - [`polyhedron`](#polyhedron) 创建多面体顶点数据



### Details




<!-- Method Block -->
#### 方法


##### box

创建长方体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:19](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L19) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `length` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `widthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `lengthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### cone

创建圆锥体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:34](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L34) |

###### 参数列表
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### cylinder

创建圆柱体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:49](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L49) |

###### 参数列表
- `radiusTop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `radiusBottom` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### plane

创建平台顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:69](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L69) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `length` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `widthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `lengthSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### quad

创建面片顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:82](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L82) |



##### sphere

创建球体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:90](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L90) |

###### 参数列表
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `segments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### torus

创建圆环顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:101](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L101) |

###### 参数列表
- `radius` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `tube` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `radialSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `tubularSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### capsule

创建胶囊体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:115](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L115) |

###### 参数列表
- `radiusTop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `radiusBottom` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `sides` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `heightSegments` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `capped` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `arc` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### polyhedron

创建多面体顶点数据

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/3d/primitive/index.js:131](https://github.com/cocos-creator/engine/blob/9546fb0f9c421d190e0aba7645402156498449ea/cocos2d/core/3d/primitive/index.js#L131) |

###### 参数列表
- `type` <a href="../enums/Primitive.PolyhedronType.html" class="crosslink">Primitive.PolyhedronType</a> 
- `Size` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `opts` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- `sizeX` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `sizeY` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `sizeZ` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



