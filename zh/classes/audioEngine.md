## `audioEngine` 类型



模块: [cc](../modules/cc.md)


cc.audioengine是单例对象。<br/>
主要用来播放音频，播放的时候会返回一个 audioID，之后都可以通过这个 audioID 来操作这个音频对象。<br/>
不使用的时候，请使用 cc.audioEngine.uncache(filePath); 进行资源释放 <br/>
注意：<br/>
在 Android 系统浏览器上，不同浏览器，不同版本的效果不尽相同。<br/>
比如说：大多数浏览器都需要用户物理交互才可以开始播放音效，有一些不支持 WebAudio，<br/>
有一些不支持多音轨播放。总之如果对音乐依赖比较强，请做尽可能多的测试。



### 索引



##### 方法

  - [`play`](#play) 播放音频
  - [`setLoop`](#setloop) 设置音频是否循环。
  - [`isLoop`](#isloop) 获取音频的循环状态。
  - [`setVolume`](#setvolume) 设置音量（0.0 ~ 1.0）。
  - [`getVolume`](#getvolume) 获取音量（0.0 ~ 1.0）。
  - [`setCurrentTime`](#setcurrenttime) 设置当前的音频时间。
  - [`getCurrentTime`](#getcurrenttime) 获取当前的音频播放时间。
  - [`getDuration`](#getduration) 获取音频总时长。
  - [`getState`](#getstate) 获取音频状态。
  - [`setFinishCallback`](#setfinishcallback) 设置一个音频结束后的回调
  - [`pause`](#pause) 暂停正在播放音频。
  - [`pauseAll`](#pauseall) 暂停现在正在播放的所有音频。
  - [`resume`](#resume) 恢复播放指定的音频。
  - [`resumeAll`](#resumeall) 恢复播放所有之前暂停的所有音频。
  - [`stop`](#stop) 停止播放指定音频。
  - [`stopAll`](#stopall) 停止正在播放的所有音频。
  - [`setMaxAudioInstance`](#setmaxaudioinstance) 设置一个音频可以设置几个实例
  - [`getMaxAudioInstance`](#getmaxaudioinstance) 获取一个音频可以设置几个实例
  - [`uncache`](#uncache) 卸载预加载的音频。
  - [`uncacheAll`](#uncacheall) 卸载所有音频。
  - [`playMusic`](#playmusic) 播放背景音乐
  - [`stopMusic`](#stopmusic) 停止播放背景音乐。
  - [`pauseMusic`](#pausemusic) 暂停播放背景音乐。
  - [`resumeMusic`](#resumemusic) 恢复播放背景音乐。
  - [`getMusicVolume`](#getmusicvolume) 获取音量（0.0 ~ 1.0）。
  - [`setMusicVolume`](#setmusicvolume) 设置背景音乐音量（0.0 ~ 1.0）。
  - [`isMusicPlaying`](#ismusicplaying) 背景音乐是否正在播放
  - [`playEffect`](#playeffect) 播放音效
  - [`setEffectsVolume`](#seteffectsvolume) 设置音效音量（0.0 ~ 1.0）。
  - [`getEffectsVolume`](#geteffectsvolume) 获取音效音量（0.0 ~ 1.0）。
  - [`pauseEffect`](#pauseeffect) 暂停播放音效。
  - [`pauseAllEffects`](#pausealleffects) 暂停播放所有音效。
  - [`resumeEffect`](#resumeeffect) 恢复播放音效音频。
  - [`resumeAllEffects`](#resumealleffects) 恢复播放所有之前暂停的音效。
  - [`stopEffect`](#stopeffect) 停止播放音效。
  - [`stopAllEffects`](#stopalleffects) 停止播放所有音效。



### Details




<!-- Method Block -->
#### 方法


##### play

播放音频

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:136](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L136) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### 示例

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.play(clip, false, 0.5);
});
```

##### setLoop

设置音频是否循环。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:164](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L164) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether cycle.

##### 示例

```js
cc.audioEngine.setLoop(id, true);
```

##### isLoop

获取音频的循环状态。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:180](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L180) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
cc.audioEngine.isLoop(id);
```

##### setVolume

设置音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:196](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L196) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0 .

##### 示例

```js
cc.audioEngine.setVolume(id, 0.5);
```

##### getVolume

获取音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:212](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L212) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
var volume = cc.audioEngine.getVolume(id);
```

##### setCurrentTime

设置当前的音频时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:226](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L226) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `sec` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> current time.

##### 示例

```js
cc.audioEngine.setCurrentTime(id, 2);
```

##### getCurrentTime

获取当前的音频播放时间。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:247](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L247) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
var time = cc.audioEngine.getCurrentTime(id);
```

##### getDuration

获取音频总时长。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:261](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L261) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
var time = cc.audioEngine.getDuration(id);
```

##### getState

获取音频状态。

| meta | description |
|------|-------------|
| 返回 | <a href="../enums/audioEngine.AudioState.html" class="crosslink">audioEngine.AudioState</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:275](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L275) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
var state = cc.audioEngine.getState(id);
```

##### setFinishCallback

设置一个音频结束后的回调

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:289](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L289) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> loaded callback.

##### 示例

```js
cc.audioEngine.setFinishCallback(id, function () {});
```

##### pause

暂停正在播放音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:305](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L305) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### 示例

```js
cc.audioEngine.pause(audioID);
```

##### pauseAll

暂停现在正在播放的所有音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:325](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L325) |


##### 示例

```js
cc.audioEngine.pauseAll();
```

##### resume

恢复播放指定的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:343](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L343) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### 示例

```js
cc.audioEngine.resume(audioID);
```

##### resumeAll

恢复播放所有之前暂停的所有音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:358](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L358) |


##### 示例

```js
cc.audioEngine.resumeAll();
```

##### stop

停止播放指定音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:375](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L375) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### 示例

```js
cc.audioEngine.stop(audioID);
```

##### stopAll

停止正在播放的所有音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:395](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L395) |


##### 示例

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

设置一个音频可以设置几个实例

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:412](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L412) |
| 废弃（Deprecated） | since v2.4.0 |

###### 参数列表
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> a number of instances to be created from within an audio

##### 示例

```js
cc.audioEngine.setMaxAudioInstance(20);
```

##### getMaxAudioInstance

获取一个音频可以设置几个实例

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:428](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L428) |


##### 示例

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

卸载预加载的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:440](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L440) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> 

##### 示例

```js
cc.audioEngine.uncache(filePath);
```

##### uncacheAll

卸载所有音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:475](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L475) |


##### 示例

```js
cc.audioEngine.uncacheAll();
```

##### playMusic

播放背景音乐

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:537](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L537) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### 示例

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.playMusic(clip, false);
});
```

##### stopMusic

停止播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:557](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L557) |


##### 示例

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

暂停播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:568](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L568) |


##### 示例

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

恢复播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:580](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L580) |


##### 示例

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

获取音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:592](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L592) |


##### 示例

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

设置背景音乐音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:604](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L604) |

###### 参数列表
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0.

##### 示例

```js
cc.audioEngine.setMusicVolume(0.5);
```

##### isMusicPlaying

背景音乐是否正在播放

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:620](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L620) |


##### 示例

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

播放音效

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:632](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L632) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### 示例

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.playEffect(clip, false);
});
```

##### setEffectsVolume

设置音效音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:648](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L648) |

###### 参数列表
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0.

##### 示例

```js
cc.audioEngine.setEffectsVolume(0.5);
```

##### getEffectsVolume

获取音效音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:667](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L667) |


##### 示例

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

暂停播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:679](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L679) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
cc.audioEngine.pauseEffect(audioID);
```

##### pauseAllEffects

暂停播放所有音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:691](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L691) |


##### 示例

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

恢复播放音效音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:714](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L714) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### 示例

```js
cc.audioEngine.resumeEffect(audioID);
```

##### resumeAllEffects

恢复播放所有之前暂停的音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:726](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L726) |


##### 示例

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

停止播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:743](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L743) |

###### 参数列表
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### 示例

```js
cc.audioEngine.stopEffect(id);
```

##### stopAllEffects

停止播放所有音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:755](https://github.com/cocos-creator/engine/blob/efe6330ab64803299d3b7fecde039ffed2d9e696/cocos2d/audio/CCAudioEngine.js#L755) |


##### 示例

```js
cc.audioEngine.stopAllEffects();
```


