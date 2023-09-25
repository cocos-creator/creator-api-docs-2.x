## `PhysicsContact` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


物理接触会在开始和结束碰撞之间生成，并作为参数传入到碰撞回调函数中。
注意：传入的物理接触会被系统进行重用，所以不要在使用中缓存里面的任何信息。



### 索引

##### 属性（properties）

  - [`colliderA`](#collidera) `Collider` 发生碰撞的碰撞体之一
  - [`colliderB`](#colliderb) `Collider` 发生碰撞的碰撞体之一
  - [`disabled`](#disabled) `Boolean` 如果 disabled 被设置为 true，那么直到接触结束此接触都将被忽略。
  - [`disabledOnce`](#disabledonce) `Boolean` 在当前时间步或子步中忽略此接触。



##### 方法

  - [`getWorldManifold`](#getworldmanifold) 获取世界坐标系下的碰撞信息。
  - [`getManifold`](#getmanifold) 获取本地（局部）坐标系下的碰撞信息。
  - [`getImpulse`](#getimpulse) 获取冲量信息...
  - [`isTouching`](#istouching) 返回碰撞体是否已经接触到。
  - [`setTangentSpeed`](#settangentspeed) 为传送带设置期望的切线速度
  - [`getTangentSpeed`](#gettangentspeed) 获取切线速度
  - [`setFriction`](#setfriction) 覆盖默认的摩擦力系数。
  - [`getFriction`](#getfriction) 获取当前摩擦力系数
  - [`resetFriction`](#resetfriction) 重置摩擦力系数到默认值
  - [`setRestitution`](#setrestitution) 覆盖默认的恢复系数。
  - [`getRestitution`](#getrestitution) 获取当前恢复系数
  - [`resetRestitution`](#resetrestitution) 重置恢复系数到默认值



### Details


#### 属性（properties）


##### colliderA

> 发生碰撞的碰撞体之一

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:423](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L423) |



##### colliderB

> 发生碰撞的碰撞体之一

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Collider.html" class="crosslink">Collider</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:430](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L430) |



##### disabled

> 如果 disabled 被设置为 true，那么直到接触结束此接触都将被忽略。
如果只是希望在当前时间步或子步中忽略此接触，请使用 disabledOnce 。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:437](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L437) |



##### disabledOnce

> 在当前时间步或子步中忽略此接触。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:446](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L446) |






<!-- Method Block -->
#### 方法


##### getWorldManifold

获取世界坐标系下的碰撞信息。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/WorldManifold.html" class="crosslink">WorldManifold</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:236](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L236) |



##### getManifold

获取本地（局部）坐标系下的碰撞信息。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Manifold.html" class="crosslink">Manifold</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:276](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L276) |



##### getImpulse

获取冲量信息
注意：这个信息只有在 onPostSolve 回调中才能获取到

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/PhysicsImpulse.html" class="crosslink">PhysicsImpulse</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:318](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L318) |



##### isTouching

返回碰撞体是否已经接触到。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:457](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L457) |



##### setTangentSpeed

为传送带设置期望的切线速度

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:469](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L469) |

###### 参数列表
- `tangentSpeed` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getTangentSpeed

获取切线速度

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:480](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L480) |



##### setFriction

覆盖默认的摩擦力系数。你可以在 onPreSolve 回调中调用此函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:493](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L493) |

###### 参数列表
- `friction` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getFriction

获取当前摩擦力系数

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:504](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L504) |



##### resetFriction

重置摩擦力系数到默认值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:515](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L515) |



##### setRestitution

覆盖默认的恢复系数。你可以在 onPreSolve 回调中调用此函数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:525](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L525) |

###### 参数列表
- `restitution` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getRestitution

获取当前恢复系数

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:536](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L536) |



##### resetRestitution

重置恢复系数到默认值

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/physics/CCPhysicsContact.js:547](https://github.com/cocos-creator/engine/blob/a2f4b48f64e8117cf0d5a93229bfe31932c42384/cocos2d/core/physics/CCPhysicsContact.js#L547) |




