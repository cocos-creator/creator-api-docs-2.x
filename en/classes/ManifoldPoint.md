## `ManifoldPoint` Class



Module: [cc](../modules/cc.md)


A manifold point is a contact point belonging to a contact manifold.
It holds details related to the geometry and dynamics of the contact points.
Note: the impulses are used for internal caching and may not
provide reliable contact forces, especially for high speed collisions.


### Index

##### Properties

  - [`localPoint`](#localpoint) `Vec2` 
  - [`normalImpulse`](#normalimpulse) `Number` 
  - [`tangentImpulse`](#tangentimpulse) `Number` 





### Details


#### Properties


##### localPoint

> The local point usage depends on the manifold type:
-e_circles: the local center of circleB
-e_faceA: the local center of circleB or the clip point of polygonB
-e_faceB: the clip point of polygonA

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:84](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L84) |



##### normalImpulse

> Normal impulse.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:97](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L97) |



##### tangentImpulse

> Tangent impulse.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:104](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/core/physics/CCPhysicsContact.js#L104) |






