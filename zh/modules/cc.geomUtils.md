
## `cc.geomUtils` 模块






Some helpful utilities





### 索引



##### 方法

  - [`point_plane`](#pointplane) 计算点和平面之间的距离。
  - [`pt_point_plane`](#ptpointplane) 计算平面上最接近给定点的点。
  - [`pt_point_aabb`](#ptpointaabb) 计算 aabb 上最接近给定点的点。
  - [`pt_point_obb`](#ptpointobb) 计算 obb 上最接近给定点的点。



### Details




<!-- Method Block -->
#### 方法


##### point_plane

计算点和平面之间的距离。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/geom-utils/distance.ts:47](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/distance.ts#L47) |

###### 参数列表
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `plane` Plane 


##### pt_point_plane

计算平面上最接近给定点的点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/geom-utils/distance.ts:61](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/distance.ts#L61) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point
- `plane` Plane 


##### pt_point_aabb

计算 aabb 上最接近给定点的点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/geom-utils/distance.ts:77](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/distance.ts#L77) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point.
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point.
- `aabb` Aabb Align the axis around the box.


##### pt_point_obb

计算 obb 上最接近给定点的点。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| 定义于 | [cocos2d/core/geom-utils/distance.ts:103](https://github.com/cocos-creator/engine/blob/26031bddd1aecdbf9bbdebe19ecaa672b1c35061/cocos2d/core/geom-utils/distance.ts#L103) |

###### 参数列表
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point
- `obb` Obb Direction box



