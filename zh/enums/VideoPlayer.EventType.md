### `VideoPlayer.EventType` 枚举



模块: [cc](../modules/cc.md)


视频事件类型


### 索引
  - `PLAYING`
  - `PAUSED`
  - `STOPPED`
  - `COMPLETED`
  - `META_LOADED`
  - `CLICKED`
  - `READY_TO_PLAY`

### Details


##### PLAYING

> 播放

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:37](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L37) |



##### PAUSED

> 暂停

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:42](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L42) |



##### STOPPED

> 停止

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:47](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L47) |



##### COMPLETED

> 播放结束

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:52](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L52) |



##### META_LOADED

> 视频的元信息已加载完成，你可以调用 getDuration 来获取视频总时长

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:57](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L57) |



##### CLICKED

> 视频被用户点击了

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:62](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L62) |



##### READY_TO_PLAY

> 视频准备好了，这个事件并不保障会在所有平台或浏览器中被触发，它依赖于平台实现，请不要依赖于这个事件做视频播放的控制。

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/videoplayer/CCVideoPlayer.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/videoplayer/CCVideoPlayer.js#L67) |


