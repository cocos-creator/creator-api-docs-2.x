## `geomUtils.intersect` Class



Module: [cc](../modules/cc.md)






### Index



##### Methods

  - [`ray_cast`](#raycast) Check whether ray intersect with nodes
  - [`ray_plane`](#rayplane) ray-plane intersect
  - [`line_plane`](#lineplane) line-plane intersect
  - [`ray_triangle`](#raytriangle) ray-triangle intersect
  - [`line_triangle`](#linetriangle) line-triangle intersect
  - [`line_quad`](#linequad) line-quad intersect
  - [`ray_sphere`](#raysphere) ray-sphere intersect
  - [`ray_aabb`](#rayaabb) ray-aabb intersect
  - [`ray_obb`](#rayobb) ray-obb intersect
  - [`aabb_aabb`](#aabbaabb) aabb-aabb intersect
  - [`aabb_obb`](#aabbobb) aabb-obb intersect
  - [`aabb_plane`](#aabbplane) aabb-plane intersect
  - [`aabb_frustum`](#aabbfrustum) aabb-frustum intersect, faster but has false positive corner cases
  - [`aabb_frustum_accurate`](#aabbfrustumaccurate) aabb-frustum intersect, handles most of the false positives correctly
  - [`obb_point`](#obbpoint) obb-point intersect
  - [`obb_plane`](#obbplane) obb-plane intersect
  - [`obb_frustum`](#obbfrustum) obb-frustum intersect, faster but has false positive corner cases
  - [`obb_frustum_accurate`](#obbfrustumaccurate) obb-frustum intersect, handles most of the false positives correctly
  - [`obb_obb`](#obbobb) obb-obb intersect
  - [`sphere_plane`](#sphereplane) phere-plane intersect, not necessarily faster than obb-plane...
  - [`sphere_frustum`](#spherefrustum) sphere-frustum intersect, faster but has false positive corner cases
  - [`sphere_frustum_accurate`](#spherefrustumaccurate) sphere-frustum intersect, handles the false positives correctly
  - [`sphere_sphere`](#spheresphere) sphere-sphere intersect
  - [`sphere_aabb`](#sphereaabb) sphere-aabb intersect
  - [`sphere_obb`](#sphereobb) sphere-obb intersect
  - [`resolve`](#resolve) The intersection detection of g1 and g2 can fill in the shape in the basic geometry.



### Details




<!-- Method Block -->
#### Methods


##### ray_cast

Check whether ray intersect with nodes

| meta | description |
|------|-------------|
| Returns |  
| Defined in | [cocos2d/core/geom-utils/intersect.ts:88](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L88) |

###### Parameters
- `root` <a href="../classes/Node.html" class="crosslink">Node</a> If root is null, then traversal nodes from scene node
- `worldRay` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `handler` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
- `filter` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### ray_plane

ray-plane intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:201](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L201) |

###### Parameters
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### line_plane

line-plane intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:223](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L223) |

###### Parameters
- `line` <a href="../classes/geomUtils.Line.html" class="crosslink">geomUtils.Line</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### ray_triangle

ray-triangle intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:244](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L244) |

###### Parameters
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `triangle` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
- `doubleSided` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 


##### line_triangle

line-triangle intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:287](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L287) |

###### Parameters
- `line` <a href="../classes/geomUtils.Line.html" class="crosslink">geomUtils.Line</a> 
- `triangle` <a href="../classes/geomUtils.Triangle.html" class="crosslink">geomUtils.Triangle</a> 
- `outPt` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, The intersection point


##### line_quad

line-quad intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:352](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L352) |

###### Parameters
- `p` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> A point on a line segment
- `q` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Another point on the line segment
- `a` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point a
- `b` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point b
- `c` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point c
- `d` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Quadrilateral point d
- `outPt` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> optional, The intersection point


##### ray_sphere

ray-sphere intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:445](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L445) |

###### Parameters
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 


##### ray_aabb

ray-aabb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:476](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L476) |

###### Parameters
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box


##### ray_obb

ray-obb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:509](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L509) |

###### Parameters
- `ray` <a href="../classes/geomUtils.Ray.html" class="crosslink">geomUtils.Ray</a> 
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box


##### aabb_aabb

aabb-aabb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:589](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L589) |

###### Parameters
- `aabb1` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Axis alignment surrounds box 1
- `aabb2` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Axis alignment surrounds box 2


##### aabb_obb

aabb-obb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:678](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L678) |

###### Parameters
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box


##### aabb_plane

aabb-plane intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:733](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L733) |

###### Parameters
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### aabb_frustum

aabb-frustum intersect, faster but has false positive corner cases<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:752](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L752) |

###### Parameters
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### aabb_frustum_accurate

aabb-frustum intersect, handles most of the false positives correctly<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:772](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L772) |

###### Parameters
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> Align the axis around the box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_point

obb-point intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:824](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L824) |

###### Parameters
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `point` geomUtils.Vec3 


##### obb_plane

obb-plane intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:843](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L843) |

###### Parameters
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### obb_frustum

obb-frustum intersect, faster but has false positive corner cases<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:870](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L870) |

###### Parameters
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_frustum_accurate

obb-frustum intersect, handles most of the false positives correctly<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:890](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L890) |

###### Parameters
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### obb_obb

obb-obb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:949](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L949) |

###### Parameters
- `obb1` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box1
- `obb2` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> Direction box2


##### sphere_plane

phere-plane intersect, not necessarily faster than obb-plane<br/>
due to the length calculation of the plane normal to factor out<br/>
the unnomalized plane distance<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1004](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1004) |

###### Parameters
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `plane` <a href="../classes/geomUtils.Plane.html" class="crosslink">geomUtils.Plane</a> 


##### sphere_frustum

sphere-frustum intersect, faster but has false positive corner cases<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1023](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1023) |

###### Parameters
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### sphere_frustum_accurate

sphere-frustum intersect, handles the false positives correctly<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1043](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1043) |

###### Parameters
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `frustum` <a href="../classes/geomUtils.Frustum.html" class="crosslink">geomUtils.Frustum</a> 


##### sphere_sphere

sphere-sphere intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1076](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1076) |

###### Parameters
- `sphere0` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `sphere1` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 


##### sphere_aabb

sphere-aabb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1090](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1090) |

###### Parameters
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `aabb` <a href="../classes/geomUtils.Aabb.html" class="crosslink">geomUtils.Aabb</a> 


##### sphere_obb

sphere-obb intersect<br/>

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> 
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1107](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1107) |

###### Parameters
- `sphere` <a href="../classes/geomUtils.Sphere.html" class="crosslink">geomUtils.Sphere</a> 
- `obb` <a href="../classes/geomUtils.Obb.html" class="crosslink">geomUtils.Obb</a> 


##### resolve

The intersection detection of g1 and g2 can fill in the shape in the basic geometry.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/geom-utils/intersect.ts:1159](https://github.com/cocos-creator/engine/blob/793ed1e41a1e981ef927cb5ecccb6f051f942b50/cocos2d/core/geom-utils/intersect.ts#L1159) |

###### Parameters
- `g1` Unknown Geometry 1
- `g2` Unknown Geometry 2
- `outPt` Unknown optional, Intersection point. (note: only partial shape detection with this return value)



