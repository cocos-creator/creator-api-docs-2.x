## `ColliderInfo` 类型



模块: [cc](../modules/cc.md)


碰撞体信息。



### 索引

##### 属性（properties）

  - [`preAabb`](#preaabb) `Rect` 碰撞体上一帧的 aabb 信息
  - [`aabb`](#aabb) `Rect` 碰撞体当前帧的 aabb 信息
  - [`matrix`](#matrix) `Mat4` 碰撞体的矩阵信息
  - [`radius`](#radius) `Number` 碰撞体的半径（只对 CircleCollider 有效）
  - [`position`](#position) `Vec2` 碰撞体的位置（只对 CircleCollider 有效）
  - [`points`](#points) `Vec2[]` 碰撞体的顶点信息（只对 BoxCollider 和 PolygonCollider 有效）





### Details


#### 属性（properties）


##### preAabb

> 碰撞体上一帧的 aabb 信息

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Rect.html" class="crosslink">Rect</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:71](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L71) |



##### aabb

> 碰撞体当前帧的 aabb 信息

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Rect.html" class="crosslink">Rect</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:78](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L78) |



##### matrix

> 碰撞体的矩阵信息

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Mat4.html" class="crosslink">Mat4</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:85](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L85) |



##### radius

> 碰撞体的半径（只对 CircleCollider 有效）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:92](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L92) |



##### position

> 碰撞体的位置（只对 CircleCollider 有效）

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:99](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L99) |



##### points

> 碰撞体的顶点信息（只对 BoxCollider 和 PolygonCollider 有效）

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2[]</a> |
| 定义于 | [cocos2d/core/collider/CCCollisionManager.js:106](https://github.com/cocos-creator/engine/blob/f495398f4307775f0f733162e3d128d81e063063/cocos2d/core/collider/CCCollisionManager.js#L106) |






