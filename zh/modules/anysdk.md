
## `anysdk` 模块






AnySDK 为 CP 提供一套第三方 SDK 接入解决方案，整个接入过程，不改变任何 SDK 的功能、特性、参数等，对于最终玩家而言是完全透明无感知的。
目的是让 CP 商能有更多时间更专注于游戏本身的品质，所有 SDK 的接入工作统统交给我们吧。第三方 SDK 包括了渠道SDK、用户系统、支付系统、广告系统、统计系统、分享系统等等。


### 类型

  - [AgentManager](../classes/AgentManager.md)
  - [PluginParam](../classes/PluginParam.md)
  - [PluginProtocol](../classes/PluginProtocol.md)
  - [ProtocolAds](../classes/ProtocolAds.md)
  - [ProtocolAdTracking](../classes/ProtocolAdTracking.md)
  - [ProtocolAnalytics](../classes/ProtocolAnalytics.md)
  - [ProtocolCrash](../classes/ProtocolCrash.md)
  - [ProtocolCustom](../classes/ProtocolCustom.md)
  - [ProtocolIAP](../classes/ProtocolIAP.md)
  - [ProtocolPush](../classes/ProtocolPush.md)
  - [ProtocolREC](../classes/ProtocolREC.md)
  - [ProtocolShare](../classes/ProtocolShare.md)
  - [ProtocolSocial](../classes/ProtocolSocial.md)
  - [ProtocolUser](../classes/ProtocolUser.md)

### 枚举

  - [AccountGender](../enums/AccountGender.md)
  - [AccountOperate](../enums/AccountOperate.md)
  - [AccountType](../enums/AccountType.md)
  - [AdsPos](../enums/AdsPos.md)
  - [AdsResultCode](../enums/AdsResultCode.md)
  - [AdsType](../enums/AdsType.md)
  - [AnimationEventType](../enums/AnimationEventType.md)
  - [audioEngine.AudioState](../enums/audioEngine.AudioState.md)
  - [Button.Transition](../enums/Button.Transition.md)
  - [Camera.ClearFlags](../enums/Camera.ClearFlags.md)
  - [CustomResultCode](../enums/CustomResultCode.md)
  - [debug.DebugMode](../enums/debug.DebugMode.md)
  - [DrawBits](../enums/DrawBits.md)
  - [EditBox.InputFlag](../enums/EditBox.InputFlag.md)
  - [EditBox.InputMode](../enums/EditBox.InputMode.md)
  - [EditBox.KeyboardReturnType](../enums/EditBox.KeyboardReturnType.md)
  - [Graphics.LineCap](../enums/Graphics.LineCap.md)
  - [Graphics.LineJoin](../enums/Graphics.LineJoin.md)
  - [Label.HorizontalAlign](../enums/Label.HorizontalAlign.md)
  - [Label.Overflow](../enums/Label.Overflow.md)
  - [Label.Type](../enums/Label.Type.md)
  - [Label.VerticalAlign](../enums/Label.VerticalAlign.md)
  - [Layout.AxisDirection](../enums/Layout.AxisDirection.md)
  - [Layout.HorizontalDirection](../enums/Layout.HorizontalDirection.md)
  - [Layout.ResizeMode](../enums/Layout.ResizeMode.md)
  - [Layout.Type](../enums/Layout.Type.md)
  - [Layout.VerticalDirection](../enums/Layout.VerticalDirection.md)
  - [LoadingItems.ItemState](../enums/LoadingItems.ItemState.md)
  - [macro.BlendFactor](../enums/macro.BlendFactor.md)
  - [macro.ImageFormat](../enums/macro.ImageFormat.md)
  - [macro.KEY](../enums/macro.KEY.md)
  - [macro.TextAlignment](../enums/macro.TextAlignment.md)
  - [Mask.Type](../enums/Mask.Type.md)
  - [NetworkType](../enums/NetworkType.md)
  - [PageView.Direction](../enums/PageView.Direction.md)
  - [PageView.EventType](../enums/PageView.EventType.md)
  - [PageView.SizeMode](../enums/PageView.SizeMode.md)
  - [PageViewIndicator.Direction](../enums/PageViewIndicator.Direction.md)
  - [ParticleSystem.EmitterMode](../enums/ParticleSystem.EmitterMode.md)
  - [ParticleSystem.PositionType](../enums/ParticleSystem.PositionType.md)
  - [PayResultCode](../enums/PayResultCode.md)
  - [Prefab.OptimizationPolicy](../enums/Prefab.OptimizationPolicy.md)
  - [ProgressBar.Mode](../enums/ProgressBar.Mode.md)
  - [PushActionResultCode](../enums/PushActionResultCode.md)
  - [RayCastType](../enums/RayCastType.md)
  - [RECResultCode](../enums/RECResultCode.md)
  - [RigidBodyType](../enums/RigidBodyType.md)
  - [Scrollbar.Direction](../enums/Scrollbar.Direction.md)
  - [ScrollView.EventType](../enums/ScrollView.EventType.md)
  - [ShareResultCode](../enums/ShareResultCode.md)
  - [Slider.Direction](../enums/Slider.Direction.md)
  - [SocialRetCode](../enums/SocialRetCode.md)
  - [Sprite.FillType](../enums/Sprite.FillType.md)
  - [Sprite.SizeMode](../enums/Sprite.SizeMode.md)
  - [Sprite.Type](../enums/Sprite.Type.md)
  - [TaskType](../enums/TaskType.md)
  - [Texture2D.Filter](../enums/Texture2D.Filter.md)
  - [Texture2D.PixelFormat](../enums/Texture2D.PixelFormat.md)
  - [Texture2D.WrapMode](../enums/Texture2D.WrapMode.md)
  - [TiledMap.Orientation](../enums/TiledMap.Orientation.md)
  - [ToolBarPlace](../enums/ToolBarPlace.md)
  - [UserActionResultCode](../enums/UserActionResultCode.md)
  - [VerticalTextAlignment](../enums/VerticalTextAlignment.md)
  - [VideoPlayer.EventType](../enums/VideoPlayer.EventType.md)
  - [VideoPlayer.ResourceType](../enums/VideoPlayer.ResourceType.md)
  - [WebView.EventType](../enums/WebView.EventType.md)
  - [Widget.AlignMode](../enums/Widget.AlignMode.md)
  - [WrapMode](../enums/WrapMode.md)


### 索引

##### 属性（properties）

  - [`agentManager`](#agentmanager) `anysdk.AgentManager` 插件管理对象





### Details


#### 属性（properties）


##### agentManager

> 插件管理对象

| meta | description |
|------|-------------|
| 类型 | anysdk.AgentManager |
| 定义于 | [extensions/anysdk/jsb_anysdk.js:40](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/extensions/anysdk/jsb_anysdk.js#L40) |






