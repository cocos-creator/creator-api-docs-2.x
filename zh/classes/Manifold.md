## `Manifold` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)





### 索引

##### 属性（properties）

  - [`type`](#type) `Number` Manifold 类型 :  0: e_circles, 1: e_faceA, 2: e_faceB
  - [`localPoint`](#localpoint) `Vec2` 用途取决于 manifold 类型
-e_circles: circleA 的本地中心点
-e_faceA: faceA 的本地中心点
-e_faceB: faceB 的本地中心点
  - [`localNormal`](#localnormal) `Vec2` -e_circles: 没被使用到
-e_faceA: polygonA 的法向量
-e_faceB: polygonB 的法向量
  - [`points`](#points) `[ManifoldPoint]` 接触点信息。





### Details


#### 属性（properties）


##### type

> Manifold 类型 :  0: e_circles, 1: e_faceA, 2: e_faceB

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:106](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L106) |



##### localPoint

> 用途取决于 manifold 类型
-e_circles: circleA 的本地中心点
-e_faceA: faceA 的本地中心点
-e_faceB: faceB 的本地中心点

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:115](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L115) |



##### localNormal

> -e_circles: 没被使用到
-e_faceA: polygonA 的法向量
-e_faceB: polygonB 的法向量

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:129](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L129) |



##### points

> 接触点信息。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/ManifoldPoint.html" class="crosslink">[ManifoldPoint]</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:142](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L142) |






