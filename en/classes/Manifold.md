## `Manifold` Class



Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`type`](#type) `Number` Manifold type :  0: e_circles, 1: e_faceA, 2: e_faceB
  - [`localPoint`](#localpoint) `Vec2` The local point usage depends on the manifold type:
-e_circles: the local center of circleA
-e_faceA: the center of faceA
-e_faceB: the center of faceB
  - [`localNormal`](#localnormal) `Vec2` -e_circles: not used
-e_faceA: the normal on polygonA
-e_faceB: the normal on polygonB
  - [`points`](#points) `[ManifoldPoint]` the points of contact.





### Details


#### Properties


##### type

> Manifold type :  0: e_circles, 1: e_faceA, 2: e_faceB

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:106](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L106) |



##### localPoint

> The local point usage depends on the manifold type:
-e_circles: the local center of circleA
-e_faceA: the center of faceA
-e_faceB: the center of faceB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:115](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L115) |



##### localNormal

> -e_circles: not used
-e_faceA: the normal on polygonA
-e_faceB: the normal on polygonB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:129](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L129) |



##### points

> the points of contact.

| meta | description |
|------|-------------|
| Type | <a href="../classes/ManifoldPoint.html" class="crosslink">[ManifoldPoint]</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js:142](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/physics/CCPhysicsContact.js#L142) |






