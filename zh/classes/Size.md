## `Size` 类型



模块: [cc](../modules/cc.md)


cc.Size 是 size 对象的类。<br/>
请不要使用它的构造函数创建的 size，<br/>
使用 <a href="../modules/cc.html#method_size" class="crosslink">size</a> 别名函数。<br/>
它不久将被取消，请使用cc.Vec2代替。


### 索引

##### 属性（properties）

  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 
  - [`ZERO`](#zero) `Size` 返回一个宽度为 0 和高度为 0 的 Size 对象。



##### 方法

  - [`constructor`](#constructor) 
  - [`clone`](#clone) 克隆 size 对象。
  - [`equals`](#equals) 当前 Size 对象是否等于指定 Size 对象。
  - [`lerp`](#lerp) 线性插值。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### 属性（properties）


##### width

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/size.js:64](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L64) |



##### height

> 

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [cocos2d/core/value-types/size.js:67](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L67) |



##### ZERO

> 返回一个宽度为 0 和高度为 0 的 Size 对象。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Size.html" class="crosslink">Size</a> |
| 定义于 | [cocos2d/core/value-types/size.js:71](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L71) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/size.js:48](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L48) |

###### 参数列表
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Size.html" class="crosslink">Size</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

克隆 size 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/value-types/size.js:85](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L85) |


##### 示例

```js
var a = new cc.size(10, 10);
a.clone();// return Size {width: 0, height: 0};
```

##### equals

当前 Size 对象是否等于指定 Size 对象。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [cocos2d/core/value-types/size.js:98](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L98) |

###### 参数列表
- `other` <a href="../classes/Size.html" class="crosslink">Size</a> 

##### 示例

```js
var a = new cc.size(10, 10);
a.equals(new cc.size(10, 10));// return true;
```

##### lerp

线性插值。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Size.html" class="crosslink">Size</a> 
| 定义于 | [cocos2d/core/value-types/size.js:114](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L114) |

###### 参数列表
- `to` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient.
- `out` <a href="../classes/Size.html" class="crosslink">Size</a> optional, the receiving vector.

##### 示例

```js
var a = new cc.size(10, 10);
var b = new cc.rect(50, 50, 100, 100);
update (dt) {
   // method 1;
   var c = a.lerp(b, dt * 0.1);
   // method 2;
   a.lerp(b, dt * 0.1, c);
}
```

##### toString

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/value-types/size.js:146](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/value-types/size.js#L146) |


##### 示例

```js
var a = new cc.size(10, 10);
a.toString();// return "(10.00, 10.00)";
```


