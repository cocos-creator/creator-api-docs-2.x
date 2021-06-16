## `geomUtils.intersect` 类型



模块: [cc](../modules/cc.md)






### 索引



##### 方法

  - [`ray_cast`](#raycast) 检测射线是否与物体有交集
  - [`ray_plane`](#rayplane) 射线与平面的相交性检测。
  - [`line_plane`](#lineplane) 线段与平面的相交性检测。
  - [`ray_triangle`](#raytriangle) 射线与三角形的相交性检测。
  - [`line_triangle`](#linetriangle) 线段与三角形的相交性检测。
  - [`line_quad`](#linequad) 线段与四边形的相交性检测。
  - [`ray_sphere`](#raysphere) 射线和球的相交性检测。
  - [`ray_aabb`](#rayaabb) 射线和轴对齐包围盒的相交性检测。
  - [`ray_obb`](#rayobb) 射线和方向包围盒的相交性检测。
  - [`aabb_aabb`](#aabbaabb) 轴对齐包围盒和轴对齐包围盒的相交性检测。
  - [`aabb_obb`](#aabbobb) 轴对齐包围盒和方向包围盒的相交性检测。
  - [`aabb_plane`](#aabbplane) 轴对齐包围盒和平面的相交性检测。
  - [`aabb_frustum`](#aabbfrustum) 轴对齐包围盒和锥台相交性检测，速度快，但有错误情况。
  - [`aabb_frustum_accurate`](#aabbfrustumaccurate) 轴对齐包围盒和锥台相交性检测，正确处理大多数错误情况。
  - [`obb_point`](#obbpoint) 方向包围盒和点的相交性检测。
  - [`obb_plane`](#obbplane) 方向包围盒和平面的相交性检测。
  - [`obb_frustum`](#obbfrustum) 方向包围盒和锥台相交性检测，速度快，但有错误情况。
  - [`obb_frustum_accurate`](#obbfrustumaccurate) 方向包围盒和锥台相交性检测，正确处理大多数错误情况。
  - [`obb_obb`](#obbobb) 方向包围盒和方向包围盒的相交性检测。
  - [`sphere_plane`](#sphereplane) 球与平面的相交性检测。
  - [`sphere_frustum`](#spherefrustum) 球和锥台的相交性检测，速度快，但有错误情况。
  - [`sphere_frustum_accurate`](#spherefrustumaccurate) 球和锥台的相交性检测，正确处理大多数错误情况。
  - [`sphere_sphere`](#spheresphere) 球和球的相交性检测。
  - [`sphere_aabb`](#sphereaabb) 球和轴对齐包围盒的相交性检测。
  - [`sphere_obb`](#sphereobb) 球和方向包围盒的相交性检测。
  - [`resolve`](#resolve) g1 和 g2 的相交性检测，可填入基础几何中的形状。



### Details




<!-- Method Block -->
#### 方法


##### ray_cast

检测射线是否与物体有交集

| meta | description |
|------|-------------|
| 返回 |  
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:88](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L88) |

###### 参数列表
- `root` <a href="../classes/Node.html" class="crosslink">Node</a> If root is null, then traversal nodes from scene node
- `worldRay` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `filter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### ray_plane

射线与平面的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:201](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L201) |

###### 参数列表
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### line_plane

线段与平面的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:223](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L223) |

###### 参数列表
- `line` <a href="../classes/geomUtils.Line.html" class="crosslink">geomUtils.Line</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### ray_triangle

射线与三角形的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:244](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L244) |

###### 参数列表
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `triangle` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
- `doubleSided` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### line_triangle

线段与三角形的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:287](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L287) |

###### 参数列表
- `line` <a href="../classes/geomUtils.Line.html" class="crosslink">geomUtils.Line</a> 
- `triangle` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
- `outPt` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, The intersection point


##### line_quad

线段与四边形的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:352](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L352) |

###### 参数列表
- `p` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> A point on a line segment
- `q` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Another point on the line segment
- `a` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point a
- `b` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point b
- `c` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point c
- `d` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point d
- `outPt` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, The intersection point


##### ray_sphere

射线和球的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:445](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L445) |

###### 参数列表
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 


##### ray_aabb

射线和轴对齐包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:476](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L476) |

###### 参数列表
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box


##### ray_obb

射线和方向包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:509](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L509) |

###### 参数列表
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box


##### aabb_aabb

轴对齐包围盒和轴对齐包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:589](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L589) |

###### 参数列表
- `aabb1` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Axis alignment surrounds box 1
- `aabb2` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Axis alignment surrounds box 2


##### aabb_obb

轴对齐包围盒和方向包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:678](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L678) |

###### 参数列表
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box


##### aabb_plane

轴对齐包围盒和平面的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:733](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L733) |

###### 参数列表
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### aabb_frustum

轴对齐包围盒和锥台相交性检测，速度快，但有错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:752](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L752) |

###### 参数列表
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### aabb_frustum_accurate

轴对齐包围盒和锥台相交性检测，正确处理大多数错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:772](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L772) |

###### 参数列表
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_point

方向包围盒和点的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:824](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L824) |

###### 参数列表
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `point` geomUtils.Vec3 


##### obb_plane

方向包围盒和平面的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:843](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L843) |

###### 参数列表
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### obb_frustum

方向包围盒和锥台相交性检测，速度快，但有错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:870](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L870) |

###### 参数列表
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_frustum_accurate

方向包围盒和锥台相交性检测，正确处理大多数错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:890](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L890) |

###### 参数列表
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_obb

方向包围盒和方向包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:949](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L949) |

###### 参数列表
- `obb1` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box1
- `obb2` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box2


##### sphere_plane

球与平面的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1004](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1004) |

###### 参数列表
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### sphere_frustum

球和锥台的相交性检测，速度快，但有错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1023](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1023) |

###### 参数列表
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### sphere_frustum_accurate

球和锥台的相交性检测，正确处理大多数错误情况。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1043](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1043) |

###### 参数列表
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### sphere_sphere

球和球的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1076](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1076) |

###### 参数列表
- `sphere0` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `sphere1` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 


##### sphere_aabb

球和轴对齐包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1090](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1090) |

###### 参数列表
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 


##### sphere_obb

球和方向包围盒的相交性检测。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1107](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1107) |

###### 参数列表
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> 


##### resolve

g1 和 g2 的相交性检测，可填入基础几何中的形状。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/geom-utils/intersect.ts:1159](https://github.com/cocos-creator/engine/blob/e361a2e93351aacda485d2038abd4eba2998a298/cocos2d/core/geom-utils/intersect.ts#L1159) |

###### 参数列表
- `g1` Unknown Geometry 1
- `g2` Unknown Geometry 2
- `outPt` Unknown optional, Intersection point. (note: only partial shape detection with this return value)



