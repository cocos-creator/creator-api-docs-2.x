## `ICollisionEvent` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Collision events.



### Index

##### Properties

  - [`type`](#type) `String` Event type of collision.
  - [`selfCollider`](#selfcollider) `Collider3D` Collider of its own in collision.
  - [`otherCollider`](#othercollider) `Collider3D` Another collider in the collision.
  - [`contacts`](#contacts) `IContactEquation[]` Information about all the points of impact in the collision.





### Details


#### Properties


##### type

> Event type of collision.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-interface.ts:133](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/3d/physics/framework/physics-interface.ts#L133) |



##### selfCollider

> Collider of its own in collision.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-interface.ts:143](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/3d/physics/framework/physics-interface.ts#L143) |



##### otherCollider

> Another collider in the collision.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Collider3D.html" class="crosslink">Collider3D</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-interface.ts:153](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/3d/physics/framework/physics-interface.ts#L153) |



##### contacts

> Information about all the points of impact in the collision.

| meta | description |
|------|-------------|
| Type | <a href="../classes/IContactEquation.html" class="crosslink">IContactEquation[]</a> |
| Defined in | [cocos2d/core/3d/physics/framework/physics-interface.ts:163](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/3d/physics/framework/physics-interface.ts#L163) |






