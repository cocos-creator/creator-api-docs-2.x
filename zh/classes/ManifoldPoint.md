## `ManifoldPoint` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


ManifoldPoint 是接触信息中的接触点信息。它拥有关于几何和接触点的详细信息。
注意：信息中的冲量用于系统内部缓存，提供的接触力可能不是很准确，特别是高速移动中的碰撞信息。


### 索引

##### 属性（properties）

  - [`localPoint`](#localpoint) `Vec2` 本地坐标点的用途取决于 manifold 的类型...
  - [`normalImpulse`](#normalimpulse) `Number` 法线冲量。
  - [`tangentImpulse`](#tangentimpulse) `Number` 切线冲量。





### Details


#### 属性（properties）


##### localPoint

> 本地坐标点的用途取决于 manifold 的类型
- e_circles: circleB 的本地中心点
- e_faceA: circleB 的本地中心点 或者是 polygonB 的截取点
- e_faceB: polygonB 的截取点

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:84](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L84) |



##### normalImpulse

> 法线冲量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:97](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L97) |



##### tangentImpulse

> 切线冲量。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:104](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L104) |






