## `RigidBody` 类型

继承于 [`Component`](Component.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)






### 索引

##### 属性（properties）

  - [`enabledContactListener`](#enabledcontactlistener) `Boolean` 是否启用接触接听器。
  - [`bullet`](#bullet) `Boolean` - 所有刚体都被禁止从 运动刚体 和 静态刚体 中穿过。
  - [`type`](#type) `RigidBodyType` 刚体类型： Static, Kinematic, Dynamic or Animated.
  - [`allowSleep`](#allowsleep) `Boolean` 如果此刚体永远都不应该进入睡眠，那么设置这个属性为 false。
  - [`gravityScale`](#gravityscale) `Number` 缩放应用在此刚体上的重力值
  - [`linearDamping`](#lineardamping) `Number` Linear damping 用于衰减刚体的线性速度。
  - [`angularDamping`](#angulardamping) `Number` Angular damping 用于衰减刚体的角速度。
  - [`linearVelocity`](#linearvelocity) `Vec2` 刚体在世界坐标下的线性速度
  - [`angularVelocity`](#angularvelocity) `Number` 刚体的角速度
  - [`fixedRotation`](#fixedrotation) `Boolean` 是否禁止此刚体进行旋转
  - [`awake`](#awake) `Boolean` 设置刚体的睡眠状态。
  - [`awakeOnLoad`](#awakeonload) `Boolean` 是否在初始化时唤醒此刚体
  - [`active`](#active) `Boolean` 设置刚体的激活状态。
  - [`__eventTargets`](#eventtargets) `Array` 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。
  - [`node`](#node) `Node` 该组件被附加到的节点。
  - [`uuid`](#uuid) `String` 组件的 uuid，用于编辑器。
  - [`_enabled`](#enabled) `Boolean` 
  - [`enabled`](#enabled) `Boolean` 表示该组件自身是否启用。
  - [`enabledInHierarchy`](#enabledinhierarchy) `Boolean` 表示该组件是否被启用并且所在的节点也处于激活状态。
  - [`_isOnLoadCalled`](#isonloadcalled) `Number` 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
  - [`_name`](#name) `String` 
  - [`_objFlags`](#objflags) `Number` 
  - [`name`](#name) `String` 该对象的名称。
  - [`isValid`](#isvalid) `Boolean` 表示该对象是否可用（被 destroy 后将不可用）。



##### 方法

  - [`onBeginContact`](#onbegincontact) 碰撞回调。
  - [`onEndContact`](#onendcontact) 碰撞回调。
  - [`onPreSolve`](#onpresolve) 碰撞回调。
  - [`onPostSolve`](#onpostsolve) 碰撞回调。
  - [`getLocalPoint`](#getlocalpoint) 将一个给定的世界坐标系下的点转换为刚体本地坐标系下的点
  - [`getWorldPoint`](#getworldpoint) 将一个给定的刚体本地坐标系下的点转换为世界坐标系下的点
  - [`getWorldVector`](#getworldvector) 将一个给定的刚体本地坐标系下的向量转换为世界坐标系下的向量
  - [`getLocalVector`](#getlocalvector) 将一个给定的世界坐标系下的向量转换为刚体本地坐标系下的向量
  - [`getWorldPosition`](#getworldposition) 获取刚体世界坐标系下的原点值
  - [`getWorldRotation`](#getworldrotation) 获取刚体世界坐标系下的旋转值。
  - [`getLocalCenter`](#getlocalcenter) 获取刚体本地坐标系下的质心
  - [`getWorldCenter`](#getworldcenter) 获取刚体世界坐标系下的质心
  - [`getLinearVelocityFromWorldPoint`](#getlinearvelocityfromworldpoint) 获取刚体上指定点的线性速度
  - [`getMass`](#getmass) 获取刚体的质量。
  - [`getInertia`](#getinertia) 获取刚体本地坐标系下原点的旋转惯性
  - [`getJointList`](#getjointlist) 获取链接到此刚体的所有关节
  - [`applyForce`](#applyforce) 施加一个力到刚体上的一个点。
  - [`applyForceToCenter`](#applyforcetocenter) 施加一个力到刚体上的质心上。
  - [`applyTorque`](#applytorque) 施加一个扭矩力，将影响刚体的角速度
  - [`applyLinearImpulse`](#applylinearimpulse) 施加冲量到刚体上的一个点，将立即改变刚体的线性速度。
  - [`applyAngularImpulse`](#applyangularimpulse) 施加一个角速度冲量。
  - [`syncPosition`](#syncposition) 同步节点的世界坐标到 box2d 刚体的坐标上。
  - [`syncRotation`](#syncrotation) 同步节点的世界旋转角度值到 box2d 刚体的旋转值上。
  - [`update`](#update) 如果该组件启用，则每帧调用 update。
  - [`lateUpdate`](#lateupdate) 如果该组件启用，则每帧调用 LateUpdate。
  - [`__preload`](#preload) `__preload` is called before every onLoad....
  - [`onLoad`](#onload) 当附加到一个激活的节点上或者其节点第一次激活时候调用。
  - [`start`](#start) 如果该组件第一次启用，则在所有组件的 update 之前调用。
  - [`onEnable`](#onenable) 当该组件被启用，并且它的节点也激活时。
  - [`onDisable`](#ondisable) 当该组件被禁用或节点变为无效时调用。
  - [`onDestroy`](#ondestroy) 该方法为生命周期方法，父类未必会有实现。
  - [`onFocusInEditor`](#onfocusineditor) 
  - [`onLostFocusInEditor`](#onlostfocusineditor) 
  - [`resetInEditor`](#resetineditor) 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。
  - [`addComponent`](#addcomponent) 向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。
  - [`getComponent`](#getcomponent) 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。
  - [`getComponents`](#getcomponents) 返回节点上指定类型的所有组件。
  - [`getComponentInChildren`](#getcomponentinchildren) 递归查找所有子节点中第一个匹配指定类型的组件。
  - [`getComponentsInChildren`](#getcomponentsinchildren) 递归查找自身或所有子节点中指定类型的组件
  - [`_getLocalBounds`](#getlocalbounds) 以便编辑器的场景视图可以正确地执行点选测试。
  - [`onRestore`](#onrestore) onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。
  - [`schedule`](#schedule) 调度一个自定义的回调函数。
  - [`scheduleOnce`](#scheduleonce) 调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
  - [`unschedule`](#unschedule) 取消调度一个自定义的回调函数。
  - [`unscheduleAllCallbacks`](#unscheduleallcallbacks) 取消调度所有已调度的回调函数：定制的回调函数以及 `update` 回调函数。
  - [`destroy`](#destroy) 销毁该对象，并释放所有它对其它对象的引用。
  - [`_destruct`](#destruct) 清除实例中的所有引用。
  - [`_onPreDestroy`](#onpredestroy) 在对象被销毁之前调用。
  - [`_serialize`](#serialize) 为此对象定制序列化。
  - [`_deserialize`](#deserialize) 从自定义序列化数据初始化此对象。



### Details


#### 属性（properties）


##### enabledContactListener

> 是否启用接触接听器。
当 collider 产生碰撞时，只有开启了接触接听器才会调用相应的回调函数

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:78](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L78) |



##### bullet

> 这个刚体是否是一个快速移动的刚体，并且需要禁止穿过其他快速移动的刚体？
需要注意的是 :
 - 所有刚体都被禁止从 运动刚体 和 静态刚体 中穿过。此选项只关注于 动态刚体。
 - 应该尽量少的使用此选项，因为它会增加程序处理时间。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:152](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L152) |



##### type

> 刚体类型： Static, Kinematic, Dynamic or Animated.

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/RigidBodyType.html" class="crosslink">RigidBodyType</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:172](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L172) |



##### allowSleep

> 如果此刚体永远都不应该进入睡眠，那么设置这个属性为 false。
需要注意这将使 CPU 占用率提高。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:200](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L200) |



##### gravityScale

> 缩放应用在此刚体上的重力值

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:227](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L227) |



##### linearDamping

> Linear damping 用于衰减刚体的线性速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:248](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L248) |



##### angularDamping

> Angular damping 用于衰减刚体的角速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:271](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L271) |



##### linearVelocity

> 刚体在世界坐标下的线性速度

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:294](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L294) |



##### angularVelocity

> 刚体的角速度

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:325](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L325) |



##### fixedRotation

> 是否禁止此刚体进行旋转

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:349](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L349) |



##### awake

> 设置刚体的睡眠状态。 睡眠的刚体具有非常低的 CPU 成本。（当刚体被碰撞到时，如果刚体处于睡眠状态，它会立即被唤醒）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:370](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L370) |



##### awakeOnLoad

> 是否在初始化时唤醒此刚体

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:391](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L391) |



##### active

> 设置刚体的激活状态。一个非激活状态下的刚体是不会被模拟和碰撞的，不管它是否处于睡眠状态下。
如果刚体处于激活状态下，所有夹具会被添加到 粗测阶段（broad-phase）。
如果刚体处于非激活状态下，所有夹具会被从 粗测阶段（broad-phase）中移除。
在非激活状态下的夹具不会参与到碰撞，射线，或者查找中
链接到非激活状态下刚体的关节也是非激活的。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:405](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L405) |



##### __eventTargets

> 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L63) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L80) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L111) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L159) |

##### 示例

```js
comp.enabled = true;
cc.log(comp.enabled);
```


##### enabledInHierarchy

> 表示该组件是否被启用并且所在的节点也处于激活状态。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L191) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:211](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L211) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L240) |

##### 示例

```js
obj.name = "New Obj";
```


##### isValid

> 表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。如果希望判断当前帧是否调用过 `destroy`，请使用 `cc.isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L258) |

##### 示例

```js
var node = new cc.Node();
cc.log(node.isValid);    // true
node.destroy();
cc.log(node.isValid);    // true, still valid in this frame
// after a frame...
cc.log(node.isValid);    // false, destroyed in the end of last frame
```





<!-- Method Block -->
#### 方法


##### onBeginContact

碰撞回调。
如果你的脚本中实现了这个函数，那么它将会在两个碰撞体开始接触时被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:93](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L93) |

###### 参数列表
- `contact` <a href="../classes/PhysicsContact.html" class="crosslink">PhysicsContact</a> contact information
- `selfCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to this rigidbody
- `otherCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to another rigidbody


##### onEndContact

碰撞回调。
如果你的脚本中实现了这个函数，那么它将会在两个碰撞体停止接触时被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:105](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L105) |

###### 参数列表
- `contact` <a href="../classes/PhysicsContact.html" class="crosslink">PhysicsContact</a> contact information
- `selfCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to this rigidbody
- `otherCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to another rigidbody


##### onPreSolve

碰撞回调。
如果你的脚本中实现了这个函数，那么它将会在接触更新时被调用。
你可以在接触被处理前根据他包含的信息作出相应的处理，比如将这个接触禁用掉。
注意：回调只会为醒着的刚体调用。
注意：接触点为零的时候也有可能被调用。
注意：感知体(sensor)的回调不会被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:117](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L117) |

###### 参数列表
- `contact` <a href="../classes/PhysicsContact.html" class="crosslink">PhysicsContact</a> contact information
- `selfCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to this rigidbody
- `otherCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to another rigidbody


##### onPostSolve

碰撞回调。
如果你的脚本中实现了这个函数，那么它将会在接触更新完后被调用。
你可以在这个回调中从接触信息中获取到冲量信息。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:137](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L137) |

###### 参数列表
- `contact` <a href="../classes/PhysicsContact.html" class="crosslink">PhysicsContact</a> contact information
- `selfCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to this rigidbody
- `otherCollider` <a href="../classes/PhysicsCollider.html" class="crosslink">PhysicsCollider</a> the collider belong to another rigidbody


##### getLocalPoint

将一个给定的世界坐标系下的点转换为刚体本地坐标系下的点

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:438](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L438) |

###### 参数列表
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> a point in world coordinates.
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving point


##### getWorldPoint

将一个给定的刚体本地坐标系下的点转换为世界坐标系下的点

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:459](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L459) |

###### 参数列表
- `localPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> a point in local coordinates.
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving point


##### getWorldVector

将一个给定的刚体本地坐标系下的向量转换为世界坐标系下的向量

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:480](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L480) |

###### 参数列表
- `localVector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> a vector in world coordinates.
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### getLocalVector

将一个给定的世界坐标系下的向量转换为刚体本地坐标系下的向量

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:501](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L501) |

###### 参数列表
- `worldVector` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> a vector in world coordinates.
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### getWorldPosition

获取刚体世界坐标系下的原点值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:522](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L522) |

###### 参数列表
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving point


##### getWorldRotation

获取刚体世界坐标系下的旋转值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:541](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L541) |



##### getLocalCenter

获取刚体本地坐标系下的质心

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:556](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L556) |



##### getWorldCenter

获取刚体世界坐标系下的质心

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:574](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L574) |



##### getLinearVelocityFromWorldPoint

获取刚体上指定点的线性速度

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:592](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L592) |

###### 参数列表
- `worldPoint` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> a point in world coordinates.
- `out` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving point


##### getMass

获取刚体的质量。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:613](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L613) |



##### getInertia

获取刚体本地坐标系下原点的旋转惯性

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:625](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L625) |



##### getJointList

获取链接到此刚体的所有关节

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Joint.html" class="crosslink">[Joint]</a> 
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:637](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L637) |



##### applyForce

施加一个力到刚体上的一个点。如果力没有施加到刚体的质心上，还会产生一个扭矩并且影响到角速度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:672](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L672) |

###### 参数列表
- `force` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world force vector.
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world position.
- `wake` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> also wake up the body.


##### applyForceToCenter

施加一个力到刚体上的质心上。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:692](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L692) |

###### 参数列表
- `force` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world force vector.
- `wake` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> also wake up the body.


##### applyTorque

施加一个扭矩力，将影响刚体的角速度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:708](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L708) |

###### 参数列表
- `torque` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> about the z-axis (out of the screen), usually in N-m.
- `wake` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> also wake up the body


##### applyLinearImpulse

施加冲量到刚体上的一个点，将立即改变刚体的线性速度。
如果冲量施加到的点不是刚体的质心，那么将产生一个扭矩并影响刚体的角速度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:723](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L723) |

###### 参数列表
- `impulse` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world impulse vector, usually in N-seconds or kg-m/s.
- `point` <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world position
- `wake` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> alse wake up the body


##### applyAngularImpulse

施加一个角速度冲量。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:744](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L744) |

###### 参数列表
- `impulse` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the angular impulse in units of kg*m*m/s
- `wake` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> also wake up the body


##### syncPosition

同步节点的世界坐标到 box2d 刚体的坐标上。
如果 enableAnimated 是 true，并且刚体的类型是 Animated ，那么将设置刚体的线性速度来代替直接设置刚体的位置。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:759](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L759) |

###### 参数列表
- `enableAnimated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### syncRotation

同步节点的世界旋转角度值到 box2d 刚体的旋转值上。
如果 enableAnimated 是 true，并且刚体的类型是 Animated ，那么将设置刚体的角速度来代替直接设置刚体的角度。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCRigidBody.js:801](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCRigidBody.js#L801) |

###### 参数列表
- `enableAnimated` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### update

如果该组件启用，则每帧调用 update。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:232](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L232) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:243](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L243) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:254](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L254) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:265](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L265) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:278](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L278) |



##### onEnable

当该组件被启用，并且它的节点也激活时。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:291](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L291) |



##### onDisable

当该组件被禁用或节点变为无效时调用。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:301](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L301) |



##### onDestroy

当该组件被销毁时调用<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:311](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L311) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:321](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L321) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:326](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L326) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:331](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L331) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:341](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L341) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the constructor or the class name of the component to add

##### 示例

```js
var sprite = node.addComponent(cc.Sprite);
var test = node.addComponent("Test");
```

##### getComponent

获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:359](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L359) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
// get sprite component.
var sprite = node.getComponent(cc.Sprite);
// get custom test calss.
var test = node.getComponent("Test");
```

##### getComponents

返回节点上指定类型的所有组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:383](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L383) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprites = node.getComponents(cc.Sprite);
var tests = node.getComponents("Test");
```

##### getComponentInChildren

递归查找所有子节点中第一个匹配指定类型的组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:401](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L401) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprite = node.getComponentInChildren(cc.Sprite);
var Test = node.getComponentInChildren("Test");
```

##### getComponentsInChildren

递归查找自身或所有子节点中指定类型的组件

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component[]</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:419](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L419) |

###### 参数列表
- `typeOrClassName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var sprites = node.getComponentsInChildren(cc.Sprite);
var tests = node.getComponentsInChildren("Test");
```

##### _getLocalBounds

如果组件的包围盒与节点不同，您可以实现该方法以提供自定义的轴向对齐的包围盒（AABB），
以便编辑器的场景视图可以正确地执行点选测试。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:439](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L439) |

###### 参数列表
- `out_rect` <a href="../classes/Rect.html" class="crosslink">Rect</a> the Rect to receive the bounding box


##### onRestore

onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
<br/>
如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
<br/>
编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。然而，在极端的情况下，它可能无法良好运作。<br/>
那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
<br/>
同样的，编辑可能无法在极端情况下正确地重置您的组件。如果你需要支持组件重置菜单，则需要在该方法中手工同步组件属性到“内部状态”。一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。这意味着仅仅指定了默认值的属性将被编辑器重置。
<br/>
此方法仅在编辑器下会被调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:452](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L452) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:544](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L544) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> The callback function
- `interval` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Tick interval in seconds. 0 means tick every frame.
- `repeat` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The selector will be executed (repeat + 1) times, you can use cc.macro.REPEAT_FOREVER for tick infinitely.
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### 示例

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.schedule(timeCallback, 1);
```

##### scheduleOnce

调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:582](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L582) |

###### 参数列表
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector
- `delay` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The amount of time that the first tick will wait before execution. Unit: s

##### 示例

```js
var timeCallback = function (dt) {
  cc.log("time: " + dt);
}
this.scheduleOnce(timeCallback, 2);
```

##### unschedule

取消调度一个自定义的回调函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:599](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L599) |

###### 参数列表
- `callback_fn` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">function</a> A function wrapped as a selector

##### 示例

```js
this.unschedule(_callback);
```

##### unscheduleAllCallbacks

取消调度所有已调度的回调函数：定制的回调函数以及 `update` 回调函数。动作不受此方法影响。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:615](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/components/CCComponent.js#L615) |


##### 示例

```js
this.unscheduleAllCallbacks();
```

##### destroy

销毁该对象，并释放所有它对其它对象的引用。<br/>
实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
您可以在访问对象之前使用 `cc.isValid(obj)` 来检查对象是否已被销毁。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L293) |


##### 示例

```js
obj.destroy();
```

##### _destruct

清除实例中的所有引用。

注意：此方法不会清除在 `CCObject` 实例中定义的 `getter` 或 `setter`。如果需要，你可以重写 `_destruct` 方法。例如：

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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L511) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/platform/CCObject.js#L524) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



