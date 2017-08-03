## `Size` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




cc.Size 是 size 对象的类。<br/>
请不要使用它的构造函数创建的 size，<br/>
使用 <a href="../modules/cc.html#method_size" class="crosslink">size</a> 别名函数。<br/>
它不久将被取消，请使用cc.Vec2代替。

### Index

##### Properties

  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 
  - [`ZERO`](#zero) `Size` 返回一个宽度为 0 和高度为 0 的 Size 对象。



##### Methods

  - [`constructor`](#constructor) 
  - [`clone`](#clone) 克隆 size 对象。
  - [`equals`](#equals) 当前 Size 对象是否等于指定 Size 对象。
  - [`lerp`](#lerp) 线性插值。
  - [`toString`](#tostring) 转换为方便阅读的字符串。



### Details


#### Properties


##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:63](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L63) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L66) |



##### ZERO

> 返回一个宽度为 0 和高度为 0 的 Size 对象。

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:70](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L70) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:47](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L47) |

###### Parameters
- width <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> | <a href="../classes/Size.html" class="crosslink">Size</a> 
- height <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

克隆 size 对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:84](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L84) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 


##### Example

```js
var a = new cc.size(10, 10);
a.clone();// return Size {width: 0, height: 0};
```

##### equals

当前 Size 对象是否等于指定 Size 对象。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:97](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L97) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Size.html" class="crosslink">Size</a> 

##### Example

```js
var a = new cc.size(10, 10);
a.equals(new cc.size(10, 10));// return true;
```

##### lerp

线性插值。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:113](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L113) |
| Return 		 | <a href="../classes/Size.html" class="crosslink">Size</a> 

###### Parameters
- to <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient.
- out <a href="../classes/Size.html" class="crosslink">Size</a> optional, the receiving vector.

##### Example

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
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:140](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L140) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### Example

```js
var a = new cc.size(10, 10);
a.toString();// return "(10.00, 10.00)";
```


