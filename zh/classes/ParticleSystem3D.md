## `ParticleSystem3D` 类型

继承于 [`RenderComponent`](RenderComponent.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


3D 粒子组件



### 索引

##### 属性（properties）

  - [`duration`](#duration) `Number` 粒子系统运行时间
  - [`capacity`](#capacity) `Number` 粒子系统能生成的最大粒子数量
  - [`loop`](#loop) `Boolean` 粒子系统是否循环播放
  - [`playOnAwake`](#playonawake) `Boolean` 粒子系统加载后是否自动开始播放
  - [`prewarm`](#prewarm) `Boolean` 选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）
  - [`simulationSpace`](#simulationspace) `Space` 选择粒子系统所在的坐标系<br>...
  - [`simulationSpeed`](#simulationspeed) `Number` 控制整个粒子系统的更新速度。
  - [`startDelay`](#startdelay) `CurveRange` 粒子系统开始运行后，延迟粒子发射的时间。
  - [`startLifetime`](#startlifetime) `CurveRange` 粒子生命周期。
  - [`startColor`](#startcolor) `GradientRange` 粒子初始颜色
  - [`scaleSpace`](#scalespace) `Space` 缩放空间
  - [`startSize`](#startsize) `CurveRange` 粒子初始大小
  - [`startSpeed`](#startspeed) `CurveRange` 粒子初始速度
  - [`startRotation`](#startrotation) `CurveRange` 粒子初始旋转角度
  - [`gravityModifier`](#gravitymodifier) `CurveRange` 粒子受重力影响的重力系数
  - [`rateOverTime`](#rateovertime) `CurveRange` 每秒发射的粒子数
  - [`rateOverDistance`](#rateoverdistance) `CurveRange` 每移动单位距离发射的粒子数
  - [`bursts`](#bursts) `[Burst]` 设定在指定时间发射指定数量的粒子的 Brust 的数量
  - [`shapeModule`](#shapemodule) `ShapeModule` 粒子发射器模块
  - [`colorOverLifetimeModule`](#coloroverlifetimemodule) `ColorOverLifetimeModule` 颜色控制模块
  - [`sizeOvertimeModule`](#sizeovertimemodule) `SizeOvertimeModule` 粒子大小模块
  - [`velocityOvertimeModule`](#velocityovertimemodule) `VelocityOvertimeModule` 粒子速度模块
  - [`forceOvertimeModule`](#forceovertimemodule) `ForceOvertimeModule` 粒子加速度模块
  - [`limitVelocityOvertimeModule`](#limitvelocityovertimemodule) `LimitVelocityOvertimeModule` 粒子限制速度模块（只支持 CPU 粒子）
  - [`rotationOvertimeModule`](#rotationovertimemodule) `RotationOvertimeModule` 粒子旋转模块
  - [`textureAnimationModule`](#textureanimationmodule) `TextureAnimationModule` 贴图动画模块
  - [`trailModule`](#trailmodule) `TrailModule` 粒子轨迹模块
  - [`renderMode`](#rendermode) `RenderMode` 设定粒子生成模式
  - [`velocityScale`](#velocityscale) `Number` 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按速度大小进行拉伸
  - [`lengthScale`](#lengthscale) `Number` 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按粒子大小进行拉伸
  - [`mesh`](#mesh) `Mesh` 粒子模型
  - [`particleMaterial`](#particlematerial) `Material` 粒子材质
  - [`trailMaterial`](#trailmaterial) `Material` 粒子轨迹材质
  - [`sharedMaterials`](#sharedmaterials) `[Material]` 渲染组件使用的材质。
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

  - [`play`](#play) 播放粒子效果
  - [`pause`](#pause) 暂停播放粒子效果
  - [`stop`](#stop) 停止播放粒子效果
  - [`clear`](#clear) 将所有粒子从粒子系统中清除
  - [`getMaterial`](#getmaterial) 根据指定索引获取材质
  - [`getMaterials`](#getmaterials) 获取所有材质。
  - [`setMaterial`](#setmaterial) 根据指定索引设置材质
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


##### duration

> 粒子系统运行时间

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:75](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L75) |



##### capacity

> 粒子系统能生成的最大粒子数量

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:85](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L85) |



##### loop

> 粒子系统是否循环播放

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:102](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L102) |



##### playOnAwake

> 粒子系统加载后是否自动开始播放

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:110](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L110) |



##### prewarm

> 选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:122](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L122) |



##### simulationSpace

> 选择粒子系统所在的坐标系<br>
世界坐标（不随其他物体位置改变而变换）<br>
局部坐标（跟随父节点位置改变而移动）<br>
自定坐标（跟随自定义节点的位置改变而移动）

| meta | description |
|------|-------------|
| 类型 | Space |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:143](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L143) |



##### simulationSpeed

> 控制整个粒子系统的更新速度。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:170](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L170) |



##### startDelay

> 粒子系统开始运行后，延迟粒子发射的时间。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:178](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L178) |



##### startLifetime

> 粒子生命周期。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:188](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L188) |



##### startColor

> 粒子初始颜色

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/GradientRange.html" class="crosslink">GradientRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:198](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L198) |



##### scaleSpace

> 缩放空间

| meta | description |
|------|-------------|
| 类型 | Space |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:208](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L208) |



##### startSize

> 粒子初始大小

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:218](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L218) |



##### startSpeed

> 粒子初始速度

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:228](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L228) |



##### startRotation

> 粒子初始旋转角度

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:239](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L239) |



##### gravityModifier

> 粒子受重力影响的重力系数

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:251](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L251) |



##### rateOverTime

> 每秒发射的粒子数

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:263](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L263) |



##### rateOverDistance

> 每移动单位距离发射的粒子数

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/CurveRange.html" class="crosslink">CurveRange</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:273](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L273) |



##### bursts

> 设定在指定时间发射指定数量的粒子的 Brust 的数量

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Burst.html" class="crosslink">[Burst]</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:283](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L283) |



##### shapeModule

> 粒子发射器模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/ShapeModule.html" class="crosslink">ShapeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:313](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L313) |



##### colorOverLifetimeModule

> 颜色控制模块

| meta | description |
|------|-------------|
| 类型 | ColorOverLifetimeModule |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:333](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L333) |



##### sizeOvertimeModule

> 粒子大小模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/SizeOvertimeModule.html" class="crosslink">SizeOvertimeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:352](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L352) |



##### velocityOvertimeModule

> 粒子速度模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/VelocityOvertimeModule.html" class="crosslink">VelocityOvertimeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:370](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L370) |



##### forceOvertimeModule

> 粒子加速度模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/ForceOvertimeModule.html" class="crosslink">ForceOvertimeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:389](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L389) |



##### limitVelocityOvertimeModule

> 粒子限制速度模块（只支持 CPU 粒子）

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/LimitVelocityOvertimeModule.html" class="crosslink">LimitVelocityOvertimeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:407](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L407) |



##### rotationOvertimeModule

> 粒子旋转模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/RotationOvertimeModule.html" class="crosslink">RotationOvertimeModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:425](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L425) |



##### textureAnimationModule

> 贴图动画模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/TextureAnimationModule.html" class="crosslink">TextureAnimationModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:443](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L443) |



##### trailModule

> 粒子轨迹模块

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/TrailModule.html" class="crosslink">TrailModule</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:462](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L462) |



##### renderMode

> 设定粒子生成模式

| meta | description |
|------|-------------|
| 类型 | RenderMode |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:482](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L482) |



##### velocityScale

> 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按速度大小进行拉伸

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:508](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L508) |



##### lengthScale

> 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按粒子大小进行拉伸

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:527](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L527) |



##### mesh

> 粒子模型

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Mesh.html" class="crosslink">Mesh</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:547](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L547) |



##### particleMaterial

> 粒子材质

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Material.html" class="crosslink">Material</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:565](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L565) |



##### trailMaterial

> 粒子轨迹材质

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Material.html" class="crosslink">Material</a> |
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:583](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L583) |



##### sharedMaterials

> 渲染组件使用的材质。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Material.html" class="crosslink">[Material]</a> |
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:63](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCRenderComponent.js#L63) |



##### __eventTargets

> 注册所有相关的 EventTargets，所有事件回调将在 `_onPreDestroy` 中删除。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:63](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L63) |



##### node

> 该组件被附加到的节点。组件总会附加到一个节点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Node.html" class="crosslink">Node</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:80](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L80) |

##### 示例

```js
cc.log(comp.node);
```


##### uuid

> 组件的 uuid，用于编辑器。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:111](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L111) |

##### 示例

```js
cc.log(comp.uuid);
```


##### _enabled

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:152](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L152) |



##### enabled

> 表示该组件自身是否启用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:159](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L159) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:191](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L191) |

##### 示例

```js
cc.log(comp.enabledInHierarchy);
```


##### _isOnLoadCalled

> 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/components/CCComponent.js:207](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L207) |

##### 示例

```js
cc.log(this._isOnLoadCalled > 0);
```


##### _name

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:76](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L76) |



##### _objFlags

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:83](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L83) |



##### name

> 该对象的名称。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| 定义于 | [cocos2d/core/platform/CCObject.js:240](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L240) |

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
| 定义于 | [cocos2d/core/platform/CCObject.js:258](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L258) |

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


##### play

播放粒子效果

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:664](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L664) |



##### pause

暂停播放粒子效果

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:688](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L688) |



##### stop

停止播放粒子效果

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:705](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L705) |



##### clear

将所有粒子从粒子系统中清除

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/3d/particle/particle-system-3d.ts:729](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/3d/particle/particle-system-3d.ts#L729) |



##### getMaterial

根据指定索引获取材质

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/MaterialVariant.html" class="crosslink">MaterialVariant</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:154](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCRenderComponent.js#L154) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### getMaterials

获取所有材质。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/MaterialVariant.html" class="crosslink">[MaterialVariant]</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:177](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCRenderComponent.js#L177) |



##### setMaterial

根据指定索引设置材质

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Material.html" class="crosslink">Material</a> 
| 定义于 | [cocos2d/core/components/CCRenderComponent.js:191](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCRenderComponent.js#L191) |

###### 参数列表
- `index` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `material` <a href="../classes/Material.html" class="crosslink">Material</a> 


##### update

如果该组件启用，则每帧调用 update。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:228](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L228) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### lateUpdate

如果该组件启用，则每帧调用 LateUpdate。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:239](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L239) |

###### 参数列表
- `dt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the delta time in seconds it took to complete the last frame


##### __preload

`__preload` is called before every onLoad.
It is used to initialize the builtin components internally,
to avoid checking whether onLoad is called before every public method calls.
This method should be removed if script priority is supported.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:250](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L250) |



##### onLoad

当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:261](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L261) |



##### start

如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:274](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L274) |



##### onEnable

当该组件被启用，并且它的节点也激活时。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:287](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L287) |



##### onDisable

当该组件被禁用或节点变为无效时调用。<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:297](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L297) |



##### onDestroy

当该组件被销毁时调用<br/>
该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:307](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L307) |



##### onFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:317](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L317) |



##### onLostFocusInEditor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:322](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L322) |



##### resetInEditor

用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:327](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L327) |



##### addComponent

向节点添加一个组件类，你还可以通过传入脚本的名称来添加组件。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Component.html" class="crosslink">Component</a> 
| 定义于 | [cocos2d/core/components/CCComponent.js:337](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L337) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:355](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L355) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:379](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L379) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:397](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L397) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:415](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L415) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:435](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L435) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:448](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L448) |



##### schedule

调度一个自定义的回调函数。<br/>
如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/components/CCComponent.js:540](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L540) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:578](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L578) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:595](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L595) |

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
| 定义于 | [cocos2d/core/components/CCComponent.js:611](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/components/CCComponent.js#L611) |


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
| 定义于 | [cocos2d/core/platform/CCObject.js:293](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L293) |


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
| 定义于 | [cocos2d/core/platform/CCObject.js:427](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L427) |



##### _onPreDestroy

在对象被销毁之前调用。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:483](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L483) |



##### _serialize

为此对象定制序列化。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">object</a> 
| 定义于 | [cocos2d/core/platform/CCObject.js:511](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L511) |

###### 参数列表
- `exporting` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### _deserialize

从自定义序列化数据初始化此对象。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/platform/CCObject.js:524](https://github.com/cocos-creator/engine/blob/ffcd52a59a8c6aae4b1d658e5006aef78c30892b/cocos2d/core/platform/CCObject.js#L524) |

###### 参数列表
- `data` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- `ctx` _Deserializer 



