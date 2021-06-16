
## `cc.geomUtils` Module






Some helpful utilities





### Index



##### Methods

  - [`point_plane`](#pointplane) the distance between a point and a plane
  - [`pt_point_plane`](#ptpointplane) the closest point on plane to a given point
  - [`pt_point_aabb`](#ptpointaabb) the closest point on aabb to a given point
  - [`pt_point_obb`](#ptpointobb) the closest point on obb to a given point



### Details




<!-- Method Block -->
#### Methods


##### point_plane

the distance between a point and a plane

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/geom-utils/distance.ts:47](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/distance.ts#L47) |

###### Parameters
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `plane` Plane 


##### pt_point_plane

the closest point on plane to a given point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/geom-utils/distance.ts:61](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/distance.ts#L61) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point
- `plane` Plane 


##### pt_point_aabb

the closest point on aabb to a given point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/geom-utils/distance.ts:77](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/distance.ts#L77) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point.
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point.
- `aabb` Aabb Align the axis around the box.


##### pt_point_obb

the closest point on obb to a given point

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
| Defined in | [cocos2d/core/geom-utils/distance.ts:103](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/distance.ts#L103) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Closest point
- `point` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Given point
- `obb` Obb Direction box



