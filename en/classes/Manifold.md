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
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:131](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/physics/CCPhysicsContact.js#L131) |



##### localPoint

> The local point usage depends on the manifold type:
-e_circles: the local center of circleA
-e_faceA: the center of faceA
-e_faceB: the center of faceB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:140](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/physics/CCPhysicsContact.js#L140) |



##### localNormal

> -e_circles: not used
-e_faceA: the normal on polygonA
-e_faceB: the normal on polygonB

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:154](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/physics/CCPhysicsContact.js#L154) |



##### points

> the points of contact.

| meta | description |
|------|-------------|
| Type | <a href="../classes/ManifoldPoint.html" class="crosslink">[ManifoldPoint]</a> |
| Defined in | [cocos2d/core/physics/CCPhysicsContact.js:167](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/physics/CCPhysicsContact.js#L167) |






