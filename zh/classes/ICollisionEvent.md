## `ICollisionEvent` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


碰撞事件。



### 索引

##### 属性（properties）

  - [`type`](#type) `String` 碰撞的事件类型。
  - [`selfCollider`](#selfcollider) `Collider3D` 碰撞中的自己的碰撞器。
  - [`otherCollider`](#othercollider) `Collider3D` 碰撞中的另一个碰撞器。
  - [`contacts`](#contacts) `IContactEquation[]` 碰撞中的所有碰撞点的信息。





### Details


#### 属性（properties）


##### type

> 碰撞的事件类型。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-interface.ts:133](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/physics/framework/physics-interface.ts#L133) |



##### selfCollider

> 碰撞中的自己的碰撞器。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-interface.ts:143](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/physics/framework/physics-interface.ts#L143) |



##### otherCollider

> 碰撞中的另一个碰撞器。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-interface.ts:153](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/physics/framework/physics-interface.ts#L153) |



##### contacts

> 碰撞中的所有碰撞点的信息。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/IContactEquation.html" class="crosslink">IContactEquation[]</a> |
| 定义于 | [cocos2d/core/3d/physics/framework/physics-interface.ts:163](https://github.com/cocos-creator/engine/blob/f120e67a8e229233f15e46cc51536723de44fd94/cocos2d/core/3d/physics/framework/physics-interface.ts#L163) |






