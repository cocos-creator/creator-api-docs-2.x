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
  - [`setMaxWebAudioSize`](#setmaxwebaudiosize) Set a size, the unit is KB.
  - [`playMusic`](#playmusic) Play background music
  - [`stopMusic`](#stopmusic) Stop background music.
  - [`pauseMusic`](#pausemusic) Pause the background music.
  - [`resumeMusic`](#resumemusic) Resume playing background music.
  - [`getMusicVolume`](#getmusicvolume) Get the volume(0.0 ~ 1.0).
  - [`setMusicVolume`](#setmusicvolume) Set the background music volume.
  - [`isMusicPlaying`](#ismusicplaying) Background music playing state
  - [`playEffect`](#playeffect) Play effect audio.
  - [`setEffectsVolume`](#seteffectsvolume) Set the volume of effect audio.
  - [`getEffectsVolume`](#geteffectsvolume) The volume of the effect audio max value is 1.0,the min value is 0.0 .
  - [`pauseEffect`](#pauseeffect) Pause effect audio.
  - [`pauseAllEffects`](#pausealleffects) Stop playing all the sound effects.
  - [`resumeEffect`](#resumeeffect) Resume effect audio.
  - [`resumeAllEffects`](#resumealleffects) Resume all effect audio.
  - [`stopEffect`](#stopeffect) Stop playing the effect audio.
  - [`stopAllEffects`](#stopalleffects) Stop playing all the effects.



### Details




<!-- Method Block -->
#### Methods


##### play

Play audio.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L114) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### Examples

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.play(clip, false, 0.5);
});
```

##### setLoop

Set audio loop.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:161](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L161) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:177](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L177) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:193](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L193) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:209](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L209) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:223](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L223) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:244](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L244) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:258](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L258) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:272](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L272) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:286](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L286) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:302](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L302) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:322](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L322) |


##### Examples

```js
cc.audioEngine.pauseAll();
```

##### resume

Resume playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:340](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L340) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:355](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L355) |


##### Examples

```js
cc.audioEngine.resumeAll();
```

##### stop

Stop playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:372](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L372) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:392](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L392) |


##### Examples

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

Set up an audio can generate a few examples.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:409](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L409) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:421](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L421) |


##### Examples

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

Unload the preloaded audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:433](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L433) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> 

##### Examples

```js
cc.audioEngine.uncache(filePath);
```

##### uncacheAll

Unload all audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:468](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L468) |


##### Examples

```js
cc.audioEngine.uncacheAll();
```

##### preload

Preload audio file.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:499](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L499) |
| Deprecated | &#x60;cc.audioEngine.preload&#x60; is deprecated, use &#x60;cc.loader.loadRes(url, cc.AudioClip)&#x60; instead please. |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:521](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L521) |

###### Parameters
- `kb` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The file path of an audio.

##### Examples

```js
cc.audioEngine.setMaxWebAudioSize(300);
```

##### playMusic

Play background music

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:573](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L573) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### Examples

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.playMusic(clip, false);
});
```

##### stopMusic

Stop background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:593](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L593) |


##### Examples

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

Pause the background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:604](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L604) |


##### Examples

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

Resume playing background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:616](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L616) |


##### Examples

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

Get the volume(0.0 ~ 1.0).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:628](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L628) |


##### Examples

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

Set the background music volume.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:640](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L640) |

###### Parameters
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0.

##### Examples

```js
cc.audioEngine.setMusicVolume(0.5);
```

##### isMusicPlaying

Background music playing state

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:655](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L655) |


##### Examples

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

Play effect audio.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:667](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L667) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### Examples

```js
cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
    var audioID = cc.audioEngine.playEffect(clip, false);
});
```

##### setEffectsVolume

Set the volume of effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:683](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L683) |

###### Parameters
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume must be in 0.0~1.0.

##### Examples

```js
cc.audioEngine.setEffectsVolume(0.5);
```

##### getEffectsVolume

The volume of the effect audio max value is 1.0,the min value is 0.0 .

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:700](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L700) |


##### Examples

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

Pause effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:712](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L712) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
cc.audioEngine.pauseEffect(audioID);
```

##### pauseAllEffects

Stop playing all the sound effects.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:724](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L724) |


##### Examples

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

Resume effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:747](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L747) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The return value of function play.

##### Examples

```js
cc.audioEngine.resumeEffect(audioID);
```

##### resumeAllEffects

Resume all effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:759](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L759) |


##### Examples

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

Stop playing the effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:776](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L776) |

###### Parameters
- `audioID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> audio id.

##### Examples

```js
cc.audioEngine.stopEffect(id);
```

##### stopAllEffects

Stop playing all the effects.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:788](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/audio/CCAudioEngine.js#L788) |


##### Examples

```js
cc.audioEngine.stopAllEffects();
```


