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

  - [`play`](#play) 
  - [`setLoop`](#setloop) 
  - [`isLoop`](#isloop) 
  - [`setVolume`](#setvolume) 
  - [`getVolume`](#getvolume) 
  - [`setCurrentTime`](#setcurrenttime) 
  - [`getCurrentTime`](#getcurrenttime) 
  - [`getDuration`](#getduration) 
  - [`getState`](#getstate) 
  - [`setFinishCallback`](#setfinishcallback) 
  - [`pause`](#pause) 
  - [`pauseAll`](#pauseall) 
  - [`resume`](#resume) 
  - [`resumeAll`](#resumeall) 
  - [`stop`](#stop) 
  - [`stopAll`](#stopall) 
  - [`setMaxAudioInstance`](#setmaxaudioinstance) 
  - [`getMaxAudioInstance`](#getmaxaudioinstance) 
  - [`uncache`](#uncache) 
  - [`uncacheAll`](#uncacheall) 
  - [`preload`](#preload) 
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) 
  - [`playMusic`](#playmusic) 
  - [`stopMusic`](#stopmusic) 
  - [`pauseMusic`](#pausemusic) 
  - [`resumeMusic`](#resumemusic) 
  - [`getMusicVolume`](#getmusicvolume) 
  - [`setMusicVolume`](#setmusicvolume) 
  - [`isMusicPlaying`](#ismusicplaying) 
  - [`playEffect`](#playeffect) 
  - [`setEffectsVolume`](#seteffectsvolume) 
  - [`getEffectsVolume`](#geteffectsvolume) 
  - [`pauseEffect`](#pauseeffect) 
  - [`pauseAllEffects`](#pausealleffects) 
  - [`resumeEffect`](#resumeeffect) 
  - [`resumeAllEffects`](#resumealleffects) 
  - [`stopEffect`](#stopeffect) 
  - [`stopAllEffects`](#stopalleffects) 



### Details




<!-- Method Block -->
#### 方法


##### play

播放音频

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:94](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L94) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### 示例

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.play(clip, false, 0.5);
});
```

##### setLoop

设置音频是否循环。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:141](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L141) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:157](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L157) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:173](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L173) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:189](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L189) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:203](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L203) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:224](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L224) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:238](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L238) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:252](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L252) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:266](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L266) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:285](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L285) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:305](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L305) |


##### 示例

```js
cc.audioEngine.pauseAll();
```

##### resume

恢复播放指定的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:323](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L323) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:338](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L338) |


##### 示例

```js
cc.audioEngine.resumeAll();
```

##### stop

停止播放指定音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:355](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L355) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:375](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L375) |


##### 示例

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

设置一个音频可以设置几个实例

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:392](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L392) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:404](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L404) |


##### 示例

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

卸载预加载的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:416](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L416) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:451](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L451) |


##### 示例

```js
cc.audioEngine.uncacheAll();
```

##### preload

预加载一个音频

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:478](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L478) |
| 废弃（Deprecated） | &#x60;cc.audioEngine.preload&#x60; is deprecated, use &#x60;cc.loader.loadRes(url, cc.AudioClip)&#x60; instead please. |

###### 参数列表
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The file path of an audio.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback of an audio.

##### 示例

```js
cc.audioEngine.preload(path);
```

##### setMaxWebAudioSize

设置一个以 KB 为单位的尺寸，大于这个尺寸的音频在加载的时候会强制使用 dom 方式加载

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:500](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L500) |

###### 参数列表
- `kb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The file path of an audio.

##### 示例

```js
cc.audioEngine.setMaxWebAudioSize(300);
```

##### playMusic

播放背景音乐

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:552](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L552) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### 示例

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.playMusic(clip, false);
});
```

##### stopMusic

停止播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:572](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L572) |


##### 示例

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

暂停播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:583](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L583) |


##### 示例

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

恢复播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:595](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L595) |


##### 示例

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

获取音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:607](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L607) |


##### 示例

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

设置背景音乐音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:619](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L619) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:634](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L634) |


##### 示例

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

播放音效

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:646](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L646) |

###### 参数列表
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### 示例

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.playEffect(clip, false);
});
```

##### setEffectsVolume

设置音效音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:662](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L662) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:679](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L679) |


##### 示例

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

暂停播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:691](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L691) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:703](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L703) |


##### 示例

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

恢复播放音效音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:726](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L726) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:738](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L738) |


##### 示例

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

停止播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:755](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L755) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:767](https://github.com/cocos-creator/engine/blob/8f14bc42a40e57c2d3b846c4f7f26f1a1753232c/cocos2d/audio/CCAudioEngine.js#L767) |


##### 示例

```js
cc.audioEngine.stopAllEffects();
```


