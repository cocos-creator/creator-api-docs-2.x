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



### Details




<!-- Method Block -->
#### 方法


##### play

播放音频

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:92](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L92) |

###### 参数列表
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of the audio file without filename extension.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### 示例

```js
var audioID = cc.audioEngine.play(path, false, 0.5);
```

##### setLoop

设置音频是否循环。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L125) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:141](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L141) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:157](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L157) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L179) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:195](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L195) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L220) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:236](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L236) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:252](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L252) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:268](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L268) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L287) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:304](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L304) |


##### 示例

```js
cc.audioEngine.pauseAll();
```

##### resume

恢复播放指定的音频。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:322](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L322) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:341](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L341) |


##### 示例

```js
cc.audioEngine.resumeAll();
```

##### stop

停止播放指定音频。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:357](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L357) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:374](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L374) |


##### 示例

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

设置一个音频可以设置几个实例

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:391](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L391) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:403](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L403) |


##### 示例

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

卸载预加载的音频。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L415) |

###### 参数列表
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
cc.audioEngine.uncache(filePath);
```

##### uncacheAll

卸载所有音频。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L437) |


##### 示例

```js
cc.audioEngine.uncacheAll();
```

##### preload

预加载一个音频

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:464](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L464) |

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
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:481](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L481) |

###### 参数列表
- `kb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The file path of an audio.

##### 示例

```js
cc.audioEngine.setMaxWebAudioSize(300);
```


