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
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) Set a size, the unit is KB，Over this size is directly resolved into DOM nodes



### Details




<!-- Method Block -->
#### Methods


##### play

Play audio.

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

Set audio loop.

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

Get audio cycle state.

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

Set the volume of audio.

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

The volume of the music max value is 1.0,the min value is 0.0 .

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

Set current time

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

Get current time

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

Get audio duration

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

Get audio state

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

Set Audio finish callback

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

Pause playing audio.

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

Pause all playing audio

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:314](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L314) |


##### Example

```js
//example
cc.audioEngine.pauseAll();
```

##### resume

Resume playing audio.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:333](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L333) |

###### Parameters
- audioID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.
//example
cc.audioEngine.resume(audioID);


##### resumeAll

Resume all playing audio.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:352](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L352) |


##### Example

```js
//example
cc.audioEngine.resumeAll();
```

##### stop

Stop playing audio.

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

Stop all playing audio.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:387](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L387) |


##### Example

```js
//example
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

Set up an audio can generate a few examples.

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

Getting audio can produce several examples.

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

Unload the preloaded audio from internal buffer.

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

Unload all audio from internal buffer.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js:453](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/audio/CCAudioEngine.js#L453) |


##### Example

```js
//example
cc.audioEngine.uncacheAll();
```

##### preload

Preload audio file.

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

Set a size, the unit is KB，Over this size is directly resolved into DOM nodes

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


