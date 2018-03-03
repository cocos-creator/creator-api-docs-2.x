## `Pipeline.Loader` 类型



模块: [cc](../modules/cc.md)


The loader pipe, it can load several types of files:
1. Images
2. JSON
3. Plist
4. Audio
5. Font
6. Cocos Creator scene
It will not interfere with items of unknown type.
You can pass custom supported types in the constructor.


### 索引



##### 方法

  - [`constructor`](#constructor) Constructor of Loader, you can pass custom supported types.
  - [`addHandlers`](#addhandlers) Add custom supported types handler or modify existing type handler.



### Details




<!-- Method Block -->
#### 方法


##### constructor

Constructor of Loader, you can pass custom supported types.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loader.js:123](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loader.js#L123) |

###### 参数列表
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler

##### 示例

```js
var loader = new Loader({
   // This will match all url with `.scene` extension or all url with `scene` type
   'scene' : function (url, callback) {}
});
```

##### addHandlers

Add custom supported types handler or modify existing type handler.

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loader.js:143](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/load-pipeline/loader.js#L143) |

###### 参数列表
- `extMap` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Custom supported types with corresponded handler



