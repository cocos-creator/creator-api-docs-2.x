## `audioEngine` Class



Module: [cc](../modules/cc.md)




cc.audioengine是单例对象。<br/>
主要用来播放音频，播放的时候会返回一个 audioID，之后都可以通过这个 audioID 来操作这个音频对象。<br/>
不使用的时候，请使用 cc.audioEngine.uncache(filePath); 进行资源释放 <br/>
注意：<br/>
在 Android 系统浏览器上，不同浏览器，不同版本的效果不尽相同。<br/>
比如说：大多数浏览器都需要用户物理交互才可以开始播放音效，有一些不支持 WebAudio，<br/>
有一些不支持多音轨播放。总之如果对音乐依赖比较强，请做尽可能多的测试。

### Index



##### Methods

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
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) 设置一个以kb为单位的尺寸，大于这个尺寸的音频在加载的时候会强制使用 dom 方式加载



### Details




<!-- Method Block -->
#### Methods


##### play

播放音频

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:92](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L92) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- filePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of the audio file without filename extension.
- loop <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- volume <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### Example

```js
//example
var audioID = cc.audioEngine.play(path, false, 0.5);
```

##### setLoop

设置音频是否循环。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:126](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L126) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- loop <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether cycle.

##### Example

```js
//example
cc.audioEngine.setLoop(id, true);
```

##### isLoop

获取音频的循环状态。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:143](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L143) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Example

```js
//example
cc.audioEngine.isLoop(id);
```

##### setVolume

设置音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:160](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L160) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- volume <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0 .

##### Example

```js
//example
cc.audioEngine.setVolume(id, 0.5);
```

##### getVolume

获取音量（0.0 ~ 1.0）。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:183](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L183) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Example

```js
//example
var volume = cc.audioEngine.getVolume(id);
```

##### setCurrentTime

设置当前的音频时间。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:200](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L200) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- sec <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> current time.

##### Example

```js
//example
cc.audioEngine.setCurrentTime(id, 2);
```

##### getCurrentTime

获取当前的音频播放时间。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:226](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L226) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Example

```js
//example
var time = cc.audioEngine.getCurrentTime(id);
```

##### getDuration

获取音频总时长。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:243](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L243) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Example

```js
//example
var time = cc.audioEngine.getDuration(id);
```

##### getState

获取音频状态。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:260](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L260) |
| Return 		 | <a href="../enums/audioEngine.AudioState.html" class="crosslink">audioEngine.AudioState</a> 

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Example

```js
//example
var state = cc.audioEngine.getState(id);
```

##### setFinishCallback

设置一个音频结束后的回调

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:277](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L277) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> loaded callback.

##### Example

```js
//example
cc.audioEngine.setFinishCallback(id, function () {});
```

##### pause

暂停正在播放音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:296](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L296) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Example

```js
//example
cc.audioEngine.pause(audioID);
```

##### pauseAll

暂停现在正在播放的所有音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:314](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L314) |


##### Example

```js
//example
cc.audioEngine.pauseAll();
```

##### resume

恢复播放指定的音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:333](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L333) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.
//example
cc.audioEngine.resume(audioID);


##### resumeAll

恢复播放所有之前暂停的所有音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:352](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L352) |


##### Example

```js
//example
cc.audioEngine.resumeAll();
```

##### stop

停止播放指定音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:369](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L369) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Example

```js
//example
cc.audioEngine.stop(audioID);
```

##### stopAll

停止正在播放的所有音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:387](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L387) |


##### Example

```js
//example
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

设置一个音频可以设置几个实例

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:405](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L405) |

###### Parameters
- num <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> a number of instances to be created from within an audio

##### Example

```js
//example
cc.audioEngine.setMaxAudioInstance(20);
```

##### getMaxAudioInstance

获取一个音频可以设置几个实例

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:418](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L418) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### Example

```js
//example
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

卸载预加载的音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:431](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L431) |

###### Parameters
- filePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Example

```js
//example
cc.audioEngine.uncache(filePath);
```

##### uncacheAll

卸载所有音频。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:453](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L453) |


##### Example

```js
//example
cc.audioEngine.uncacheAll();
```

##### preload

预加载一个音频

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:475](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L475) |

###### Parameters
- filePath Unknown The file path of an audio.
- callback Unknown The callback of an audio.

##### Example

```js
//example
cc.audioEngine.preload(path);
```

##### setMaxWebAudioSize

设置一个以kb为单位的尺寸，大于这个尺寸的音频在加载的时候会强制使用 dom 方式加载

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:493](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L493) |

###### Parameters
- kb Unknown The file path of an audio.

##### Example

```js
//example
cc.audioEngine.setMaxWebAudioSize(300);
```


