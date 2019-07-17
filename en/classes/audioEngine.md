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
| Defined in | [cocos2d/audio/CCAudioEngine.js:132](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L132) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:177](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L177) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:193](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L193) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:209](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L209) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:225](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L225) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:239](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L239) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:260](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L260) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:274](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L274) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:288](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L288) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:302](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L302) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:318](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L318) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:338](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L338) |


##### Examples

```js
cc.audioEngine.pauseAll();
```

##### resume

Resume playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:356](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L356) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:371](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L371) |


##### Examples

```js
cc.audioEngine.resumeAll();
```

##### stop

Stop playing audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:388](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L388) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:408](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L408) |


##### Examples

```js
cc.audioEngine.stopAll();
```

##### setMaxAudioInstance

Set up an audio can generate a few examples.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:425](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L425) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:437](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L437) |


##### Examples

```js
cc.audioEngine.getMaxAudioInstance();
```

##### uncache

Unload the preloaded audio from internal buffer.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:449](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L449) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:484](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L484) |


##### Examples

```js
cc.audioEngine.uncacheAll();
```

##### preload

Preload audio file.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:515](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L515) |
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
| Defined in | [cocos2d/audio/CCAudioEngine.js:537](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L537) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:589](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L589) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:609](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L609) |


##### Examples

```js
cc.audioEngine.stopMusic();
```

##### pauseMusic

Pause the background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:620](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L620) |


##### Examples

```js
cc.audioEngine.pauseMusic();
```

##### resumeMusic

Resume playing background music.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:632](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L632) |


##### Examples

```js
cc.audioEngine.resumeMusic();
```

##### getMusicVolume

Get the volume(0.0 ~ 1.0).

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:644](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L644) |


##### Examples

```js
var volume = cc.audioEngine.getMusicVolume();
```

##### setMusicVolume

Set the background music volume.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:656](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L656) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:672](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L672) |


##### Examples

```js
cc.audioEngine.isMusicPlaying();
```

##### playEffect

Play effect audio.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/audio/CCAudioEngine.js:684](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L684) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:700](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L700) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:719](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L719) |


##### Examples

```js
var volume = cc.audioEngine.getEffectsVolume();
```

##### pauseEffect

Pause effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:731](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L731) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:743](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L743) |


##### Examples

```js
cc.audioEngine.pauseAllEffects();
```

##### resumeEffect

Resume effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:766](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L766) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:778](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L778) |


##### Examples

```js
cc.audioEngine.resumeAllEffects();
```

##### stopEffect

Stop playing the effect audio.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/audio/CCAudioEngine.js:795](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L795) |

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
| Defined in | [cocos2d/audio/CCAudioEngine.js:807](https://github.com/cocos-creator/engine/blob/b4415d3f111db35eb92e588d63bcb560003ea469/cocos2d/audio/CCAudioEngine.js#L807) |


##### Examples

```js
cc.audioEngine.stopAllEffects();
```


