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
  - [`preload`](#preload) 预加载一个音频
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) 设置一个以 KB 为单位的尺寸，大于这个尺寸的音频在加载的时候会强制使用 dom 方式加载
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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L114) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:161](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L161) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:177](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L177) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:193](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L193) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:209](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L209) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:223](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L223) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:244](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L244) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:258](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L258) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:272](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L272) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:286](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L286) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:302](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L302) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:322](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L322) |


##### 示例

```js
cc.audioEngine.pauseAll();
```

##### resume

恢复播放指定的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:340](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L340) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:355](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L355) |


##### 示例

```js
cc.audioEngine.resumeAll();
```

##### stop

停止播放指定音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:372](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L372) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:392](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L392) |


##### 示例

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

设置一个音频可以设置几个实例

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:409](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L409) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:421](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L421) |


##### 示例

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

卸载预加载的音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:433](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L433) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:468](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L468) |


##### 示例

```js
cc.audioEngine.uncacheAll();
```

##### preload

预加载一个音频

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:499](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L499) |
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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:521](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L521) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:573](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L573) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:593](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L593) |


##### 示例

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

暂停播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:604](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L604) |


##### 示例

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

恢复播放背景音乐。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:616](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L616) |


##### 示例

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

获取音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:628](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L628) |


##### 示例

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

设置背景音乐音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:640](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L640) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:655](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L655) |


##### 示例

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

播放音效

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [cocos2d/audio/CCAudioEngine.js:667](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L667) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:683](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L683) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:700](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L700) |


##### 示例

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

暂停播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:712](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L712) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:724](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L724) |


##### 示例

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

恢复播放音效音频。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:747](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L747) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:759](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L759) |


##### 示例

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

停止播放音效。

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/audio/CCAudioEngine.js:776](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L776) |

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
| 定义于 | [cocos2d/audio/CCAudioEngine.js:788](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L788) |


##### 示例

```js
cc.audioEngine.stopAllEffects();
```


