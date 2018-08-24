## `Manifold` Class



Module: [cc](../modules/cc.md)





### Index

##### Properties

  - [`type`](#type) `Number` Manifold type :  0: e_circles, 1: e_faceA, 2: e_faceB
  - [`localPoint`](#localpoint) `Vec2` -e_circles: the local center of circleA
  - [`localNormal`](#localnormal) `Vec2` -e_circles: not used
  - [`points`](#points) `[ManifoldPoint]` the points of contact.





### Details


#### Properties


##### type

> Manifold type :  0: e_circles, 1: e_faceA, 2: e_faceB

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:125](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L125) |



##### localPoint

> The local point usage depends on the manifold type:
-e_circles: the local center of circleA
-e_faceA: the center of faceA
-e_faceB: the center of faceB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:134](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L134) |



##### localNormal

> -e_circles: not used
-e_faceA: the normal on polygonA
-e_faceB: the normal on polygonB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:148](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L148) |



##### points

> the points of contact.

| meta | description |
|------|-------------|
| Type | <a href="../classes/ManifoldPoint.html" class="crosslink">[ManifoldPoint]</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:161](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/physics/CCPhysicsContact.js#L161) |






