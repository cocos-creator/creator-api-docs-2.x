## `audioEngine` Class



Module: [cc](../modules/cc.md)


cc.audioEngine is the singleton object, it provide simple audio APIs.


### Index



##### Methods

  - [`play`](#play) Play audio.
  - [`setLoop`](#setloop) Set audio loop.
  - [`isLoop`](#isloop) Get audio cycle state.
  - [`setVolume`](#setvolume) Set the volume of audio.
  - [`getVolume`](#getvolume) The volume of the music max value is 1.0,the min value is 0.0 .
  - [`setCurrentTime`](#setcurrenttime) Set current time
  - [`getCurrentTime`](#getcurrenttime) Get current time
  - [`getDuration`](#getduration) Get audio duration
  - [`getState`](#getstate) Get audio state
  - [`setFinishCallback`](#setfinishcallback) Set Audio finish callback
  - [`pause`](#pause) Pause playing audio.
  - [`pauseAll`](#pauseall) Pause all playing audio
  - [`resume`](#resume) Resume playing audio.
  - [`resumeAll`](#resumeall) Resume all playing audio.
  - [`stop`](#stop) Stop playing audio.
  - [`stopAll`](#stopall) Stop all playing audio.
  - [`setMaxAudioInstance`](#setmaxaudioinstance) Set up an audio can generate a few examples.
  - [`getMaxAudioInstance`](#getmaxaudioinstance) Getting audio can produce several examples.
  - [`uncache`](#uncache) Unload the preloaded audio from internal buffer.
  - [`uncacheAll`](#uncacheall) Unload all audio from internal buffer.
  - [`preload`](#preload) Preload audio file.
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) Set a size, the unit is KB. Over this size is directly resolved into DOM nodes.



### Details




<!-- Method Block -->
#### Methods


##### play

Play audio.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:92](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L92) |

###### Parameters
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path of the audio file without filename extension.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### Examples

```js
var audioID = cc.audioEngine.play(path, false, 0.5);
```

##### setLoop

Set audio loop.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L125) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether cycle.

##### Examples

```js
cc.audioEngine.setLoop(id, true);
```

##### isLoop

Get audio cycle state.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:141](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L141) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
cc.audioEngine.isLoop(id);
```

##### setVolume

Set the volume of audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:157](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L157) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0 .

##### Examples

```js
cc.audioEngine.setVolume(id, 0.5);
```

##### getVolume

The volume of the music max value is 1.0,the min value is 0.0 .

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:179](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L179) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
var volume = cc.audioEngine.getVolume(id);
```

##### setCurrentTime

Set current time

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:195](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L195) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `sec` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> current time.

##### Examples

```js
cc.audioEngine.setCurrentTime(id, 2);
```

##### getCurrentTime

Get current time

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:220](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L220) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
var time = cc.audioEngine.getCurrentTime(id);
```

##### getDuration

Get audio duration

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:236](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L236) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
var time = cc.audioEngine.getDuration(id);
```

##### getState

Get audio state

| meta | description |
|------|-------------|
| Returns | <a href="../enums/audioEngine.AudioState.html" class="crosslink">audioEngine.AudioState</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:252](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L252) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
var state = cc.audioEngine.getState(id);
```

##### setFinishCallback

Set Audio finish callback

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:268](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L268) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> loaded callback.

##### Examples

```js
cc.audioEngine.setFinishCallback(id, function () {});
```

##### pause

Pause playing audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:287](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L287) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Examples

```js
cc.audioEngine.pause(audioID);
```

##### pauseAll

Pause all playing audio

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:304](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L304) |


##### Examples

```js
cc.audioEngine.pauseAll();
```

##### resume

Resume playing audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:322](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L322) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Examples

```js
cc.audioEngine.resume(audioID);
```

##### resumeAll

Resume all playing audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:341](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L341) |


##### Examples

```js
cc.audioEngine.resumeAll();
```

##### stop

Stop playing audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:357](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L357) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Examples

```js
cc.audioEngine.stop(audioID);
```

##### stopAll

Stop all playing audio.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:374](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L374) |


##### Examples

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

Set up an audio can generate a few examples.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:391](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L391) |

###### Parameters
- `num` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> a number of instances to be created from within an audio

##### Examples

```js
cc.audioEngine.setMaxAudioInstance(20);
```

##### getMaxAudioInstance

Getting audio can produce several examples.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:403](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L403) |


##### Examples

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

Unload the preloaded audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:415](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L415) |

###### Parameters
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
cc.audioEngine.uncache(filePath);
```

##### uncacheAll

Unload all audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:437](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L437) |


##### Examples

```js
cc.audioEngine.uncacheAll();
```

##### preload

Preload audio file.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:464](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L464) |

###### Parameters
- `filePath` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The file path of an audio.
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback of an audio.

##### Examples

```js
cc.audioEngine.preload(path);
```

##### setMaxWebAudioSize

Set a size, the unit is KB. Over this size is directly resolved into DOM nodes.

| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js:481](https:/github.com/cocos-creator/engine/blob/master/cocos2d/audio/CCAudioEngine.js#L481) |

###### Parameters
- `kb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The file path of an audio.

##### Examples

```js
cc.audioEngine.setMaxWebAudioSize(300);
```


