## `RigidBody3D` Class

Extends [`Component`](Component.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


RigidBody is the basic object that make up the physical world, and it can make a node physically affected and react.



### Index

##### Properties

  - [`allowSleep`](#allowsleep) `boolean` Whether sleep is allowed.
  - [`mass`](#mass) `number` The mass of the rigidbody.
  - [`linearDamping`](#lineardamping) `number` Used to reduce the linear rate of rigidbody.
  - [`angularDamping`](#angulardamping) `number` Used to reduce the rotation rate of rigidbody.
  - [`isKinematic`](#iskinematic) `boolean` If enabled, the developer controls the displacement and rotation of the rigidbody, not the physics engine.
  - [`useGravity`](#usegravity) `boolean` If enabled, the rigidbody is affected by gravity.
  - [`fixedRotation`](#fixedrotation) `boolean` If enabled, the rigidbody will be fixed without rotation during a collision.
  - [`linearFactor`](#linearfactor) `Vec3` It can affect the linear velocity change of the rigidbody in each axis.
  - [`angularFactor`](#angularfactor) `Vec3` It can affect the rotation speed change of the rigidbody in each axis.
  - [`isAwake`](#isawake) `boolean` The rigidbody is awake.
  - [`isSleepy`](#issleepy) `boolean` The rigidbody can enter hibernation.
  - [`isSleeping`](#issleeping) `boolean` The rigidbody is sleeping.
  - [`rigidBody`](#rigidbody) `IRigidBody` Get the rigidbody object inside the physics engine.
  - [`__eventTargets`](#eventtargets) `Array` Register all related EventTargets,...
  - [`node`](#node) `Node` The node this component is attached to.
  - [`uuid`](#uuid) `String` The uuid for editor.
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` indicates whether this component is enabled or not.
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` indicates whether this component is enabled and its node is also active in the hierarchy.
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` Returns a value which used to indicate the onLoad get called or not.
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` The name of the object.
  - [`isValid`](#isvalid) `Boolean` Indicates whether the object is not yet destroyed.



##### Methods

  - [`applyForce`](#applyforce) A force is applied to a rigid body at a point in world space.
  - [`applyLocalForce`](#applylocalforce) Apply a force on the rigid body at a point in local space.
  - [`applyImpulse`](#applyimpulse) Apply an impulse to a rigid body at a point in world space.
  - [`applyLocalImpulse`](#applylocalimpulse) Apply an impulse to the rigid body at a point in local space.
  - [`applyTorque`](#applytorque) Apply a torque to the rigid body.
  - [`applyLocalTorque`](#applylocaltorque) Apply a local torque to the rigid body.
  - [`wakeUp`](#wakeup) Awaken the rigid body.
  - [`sleep`](#sleep) Dormant rigid body.
  - [`getLinearVelocity`](#getlinearvelocity) Get linear velocity.
  - [`setLinearVelocity`](#setlinearvelocity) Set linear speed.
  - [`getAngularVelocity`](#getangularvelocity) Gets the rotation speed.
  - [`setAngularVelocity`](#setangularvelocity) Set rotation speed.
  - [`update`](#update) This is a lifecycle method.
  - [`lateUpdate`](#lateupdate) This is a lifecycle method.
  - [`__preload`](#preload) `__preload` is called before every onLoad.
  - [`onLoad`](#onload) When attaching to an active node or its node first activated.
  - [`start`](#start) Called before all scripts' update if the Component is enabled the first time.
  - [`onEnable`](#onenable) This is a lifecycle method.
  - [`onDisable`](#ondisable) This is a lifecycle method.
  - [`onDestroy`](#ondestroy) This is a lifecycle method.
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
  - [`addComponent`](#addcomponent) Adds a component class to the node.
  - [`getComponent`](#getcomponent) Returns the component of supplied type if the node has one attached, null if it doesn't....
  - [`getComponents`](#getcomponents) Returns all components of supplied Type in the node.
  - [`getComponentInChildren`](#getcomponentinchildren) Returns the component of supplied type in any of its children using depth first search.
  - [`getComponentsInChildren`](#getcomponentsinchildren) Returns the components of supplied type in self or any of its children using depth first search.
  - [`_getLocalBounds`](#getlocalbounds) If the component's bounding box is different from the node's, you can implement this method to supply
  - [`onRestore`](#onrestore) for undo/redo operation.
  - [`schedule`](#schedule) Schedules a custom selector....
  - [`scheduleOnce`](#scheduleonce) Schedules a callback function that runs only once, with a delay of 0 or larger.
  - [`unschedule`](#unschedule) Unschedules a custom callback function.
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function....
  - [`destroy`](#destroy) Actual object destruction will delayed until before rendering.
  - [`_destruct`](#destruct) Clear all references in the instance.
  - [`_onPreDestroy`](#onpredestroy) Called before the object being destroyed.
  - [`_serialize`](#serialize) The customized serialization for this object.
  - [`_deserialize`](#deserialize) Init this object from the custom serialized data.



### Details


#### Properties


##### allowSleep

> Whether sleep is allowed.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:61](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L61) |



##### mass

> The mass of the rigidbody.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:79](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L79) |



##### linearDamping

> Used to reduce the linear rate of rigidbody. The larger the value, the slower the rigidbody moves.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:100](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L100) |



##### angularDamping

> Used to reduce the rotation rate of rigidbody. The larger the value, the slower the rigidbody rotates.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:121](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L121) |



##### isKinematic

> If enabled, the developer controls the displacement and rotation of the rigidbody, not the physics engine.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:142](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L142) |



##### useGravity

> If enabled, the rigidbody is affected by gravity.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:163](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L163) |



##### fixedRotation

> If enabled, the rigidbody will be fixed without rotation during a collision.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:184](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L184) |



##### linearFactor

> It can affect the linear velocity change of the rigidbody in each axis. The larger the value, the faster the rigidbody moves.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:205](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L205) |



##### angularFactor

> It can affect the rotation speed change of the rigidbody in each axis. The larger the value, the faster the rigidbody rotates.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:226](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L226) |



##### isAwake

> The rigidbody is awake.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:247](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L247) |



##### isSleepy

> The rigidbody can enter hibernation.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:262](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L262) |



##### isSleeping

> The rigidbody is sleeping.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">boolean</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:277](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L277) |



##### rigidBody

> Get the rigidbody object inside the physics engine.

| meta | description |
|------|-------------|
| Type | <a href="../classes/IRigidBody.html" class="crosslink">IRigidBody</a> |
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:292](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L292) |



##### __eventTargets

> Register all related EventTargets,
all event callbacks will be removed in `_onPreDestroy`.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L63) |



##### node

> The node this component is attached to. A component is always attached to a node.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Node.html" class="crosslink">Node</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L80) |

##### Examples

```js
cc.log(comp.node);
```


##### uuid

> The uuid for editor.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L111) |

##### Examples

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L159) |

##### Examples

```js
comp.enabled = true;
cc.log(comp.enabled);
```


##### enabledInHierarchy

> indicates whether this component is enabled and its node is also active in the hierarchy.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L191) |

##### Examples

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> Returns a value which used to indicate the onLoad get called or not.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/components/CCComponent.js:211](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L211) |

##### Examples

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L83) |



##### name

> The name of the object.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L240) |

##### Examples

```js
obj.name = "New Obj";
```


##### isValid

> Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `cc.isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined in | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L258) |

##### Examples

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### Methods


##### applyForce

A force is applied to a rigid body at a point in world space.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:376](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L376) |

###### Parameters
- `force` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `relativePoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The point of action, relative to the center of the rigid body.


##### applyLocalForce

Apply a force on the rigid body at a point in local space.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:391](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L391) |

###### Parameters
- `force` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `localPoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Point of application


##### applyImpulse

Apply an impulse to a rigid body at a point in world space.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:406](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L406) |

###### Parameters
- `impulse` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `relativePoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> The point of action, relative to the center of the rigid body.


##### applyLocalImpulse

Apply an impulse to the rigid body at a point in local space.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:421](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L421) |

###### Parameters
- `impulse` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 
- `localPoint` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> Point of application


##### applyTorque

Apply a torque to the rigid body.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:436](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L436) |

###### Parameters
- `torque` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### applyLocalTorque

Apply a local torque to the rigid body.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:450](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L450) |

###### Parameters
- `torque` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### wakeUp

Awaken the rigid body.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:464](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L464) |



##### sleep

Dormant rigid body.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:477](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L477) |



##### getLinearVelocity

Get linear velocity.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:490](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L490) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### setLinearVelocity

Set linear speed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:504](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L504) |

###### Parameters
- `value` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### getAngularVelocity

Gets the rotation speed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:518](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L518) |

###### Parameters
- `out` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### setAngularVelocity

Set rotation speed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/3d/physics/framework/components/rigid-body-component.ts:532](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/3d/physics/framework/components/rigid-body-component.ts#L532) |

###### Parameters
- `value` <a href="../classes/Vec3.html" class="crosslink">Vec3</a> 


##### update

Update is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:232](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L232) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

LateUpdate is called every frame, if the Component is enabled.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:243](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L243) |

###### Parameters
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:254](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L254) |



##### onLoad

When attaching to an active node or its node first activated.
onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:265](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L265) |



##### start

Called before all scripts' update if the Component is enabled the first time.
Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:278](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L278) |



##### onEnable

Called when this component becomes enabled and its node is active.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:291](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L291) |



##### onDisable

Called when this component becomes disabled or its node becomes inactive.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L301) |



##### onDestroy

Called when this component will be destroyed.<br/>
This is a lifecycle method. It may not be implemented in the super class. You can only call its super class method inside it. It should not be called manually elsewhere.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:311](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L311) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:321](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L321) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:326](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L326) |



##### resetInEditor

Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used. This function is only called in editor.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:331](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L331) |



##### addComponent

Adds a component class to the node. You can also add component to node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:341](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L341) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the constructor or the class name of the component to add

##### Examples

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### getComponent

Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:359](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L359) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
// get sprite component.
var sprite = node.getComponent(cc.Sprite);
// get custom test calss.
var test = node.getComponent("Test");
```

##### getComponents

Returns all components of supplied Type in the node.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:383](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L383) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponents(cc.Sprite);
var tests = node.getComponents("Test");
```

##### getComponentInChildren

Returns the component of supplied type in any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:401](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L401) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

Returns the components of supplied type in self or any of its children using depth first search.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| Defined in | [cocos2d/core/components/CCComponent.js:419](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L419) |

###### Parameters
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### _getLocalBounds

If the component's bounding box is different from the node's, you can implement this method to supply
a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:439](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L439) |

###### Parameters
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
an undo operation on this component.<br/>
<br/>
If the component contains the "internal state", short for "temporary member variables which not included<br/>
in its CCClass properties", then you may need to implement this function.<br/>
<br/>
The editor will call the getset accessors of your component to record/restore the component's state<br/>
for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement<br/>
this function to manually synchronize your component's "internal states" with its public properties.<br/>
Once you implement this function, all the getset accessors of your component will not be called when<br/>
the user performs an undo/redo operation. Which means that only the properties with default value<br/>
will be recorded or restored by editor.<br/>
<br/>
Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need<br/>
to support the reset menu, you should manually synchronize your component's "internal states" with its<br/>
properties in this function. Once you implement this function, all the getset accessors of your component<br/>
will not be called during reset operation. Which means that only the properties with default value<br/>
will be reset by editor.

This function is only called in editor mode.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:452](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L452) |



##### schedule

Schedules a custom selector.<br/>
If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:544](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L544) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.schedule(timeCallback, 1);
```

##### scheduleOnce

Schedules a callback function that runs only once, with a delay of 0 or larger.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:582](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L582) |

###### Parameters
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### Examples

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.scheduleOnce(timeCallback, 2);
```

##### unschedule

Unschedules a custom callback function.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:599](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L599) |

###### Parameters
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### Examples

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
Actions are not affected by this method.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/components/CCComponent.js:615](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L615) |


##### Examples

```js
this.unscheduleAllCallbacks();
```

##### destroy

Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable anymore.
You can use `cc.isValid(obj)` to check whether the object is destroyed before accessing it.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L293) |


##### Examples

```js
obj.destroy();
```

##### _destruct

Clear all references in the instance.

NOTE: this method will not clear the `getter` or `setter` functions which defined in the instance of `CCObject`.
You can override the `_destruct` method if you need, for example:
```js
_destruct: function () {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            switch (typeof this[key]) {
                case 'string':
                    this[key] = '';
                    break;
                case 'object':
                case 'function':
                    this[key] = null;
                    break;
        }
    }
}
```

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| Defined in | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L511) |

###### Parameters
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L524) |

###### Parameters
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



