## `audioEngine` Class



Module: [cc](../modules/cc.md)


`cc.audioEngine` is the singleton object, it provide simple audio APIs.



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
| Defined in | [cocos2d/audio/CCAudioEngine.js:137](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L137) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.
- `volume` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> Volume size.

##### Examples

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.play(clip, false, 0.5);
});
```

##### setLoop

Set audio loop.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:169](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L169) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:185](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L185) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:201](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L201) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:217](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L217) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:231](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L231) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:252](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L252) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:266](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L266) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:280](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L280) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:294](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L294) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:310](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L310) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:330](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L330) |


##### Examples

```js
cc.audioEngine.pauseAll();
```

##### resume

Resume playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:348](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L348) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:363](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L363) |


##### Examples

```js
cc.audioEngine.resumeAll();
```

##### stop

Stop playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:380](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L380) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:400](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L400) |


##### Examples

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

Set up an audio can generate a few examples.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:417](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L417) |
| Deprecated | since v2.4.0 |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:433](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L433) |


##### Examples

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

Unload the preloaded audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:445](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L445) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:480](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L480) |


##### Examples

```js
cc.audioEngine.uncacheAll();
```

##### playMusic

Play background music

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:542](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L542) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### Examples

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.playMusic(clip, false);
});
```

##### stopMusic

Stop background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:562](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L562) |


##### Examples

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

Pause the background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:573](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L573) |


##### Examples

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

Resume playing background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:585](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L585) |


##### Examples

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

Get the volume(0.0 ~ 1.0).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:597](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L597) |


##### Examples

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

Set the background music volume.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:609](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L609) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:625](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L625) |


##### Examples

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

Play effect audio.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:637](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L637) |

###### Parameters
- `clip` <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> The audio clip to play.
- `loop` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether the music loop or not.

##### Examples

```js
cc.resources.load(path, cc.AudioClip, null, function (err, clip) {
    var audioID = cc.audioEngine.playEffect(clip, false);
});
```

##### setEffectsVolume

Set the volume of effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:653](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L653) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:672](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L672) |


##### Examples

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

Pause effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:684](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L684) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:696](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L696) |


##### Examples

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

Resume effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:719](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L719) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:731](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L731) |


##### Examples

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

Stop playing the effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:748](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L748) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:760](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/audio/CCAudioEngine.js#L760) |


##### Examples

```js
cc.audioEngine.stopAllEffects();
```


