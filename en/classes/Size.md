## `Size` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


cc.Size is the class for size object,<br/>
please do not use its constructor to create sizes,<br/>
use <a href="../modules/cc.html#method_size" class="crosslink">size</a> alias function instead.<br/>
It will be deprecated soon, please use cc.Vec2 instead.


### Index

##### Properties

  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 
  - [`ZERO`](#zero) `Size` return a Size object with width = 0 and height = 0.



##### Methods

  - [`constructor`](#constructor) 
  - [`clone`](#clone) TODO
  - [`equals`](#equals) TODO
  - [`lerp`](#lerp) TODO
  - [`toString`](#tostring) TODO



### Details


#### Properties


##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:63](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L63) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:66](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L66) |



##### ZERO

> return a Size object with width = 0 and height = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:70](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L70) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:47](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L47) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Size.html" class="crosslink">Size</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:84](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L84) |


##### Examples

```js
var a = new cc.size(10, 10);
a.clone();// return Size {width: 0, height: 0};
```

##### equals

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:97](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L97) |

###### Parameters
- `other` <a href="../classes/Size.html" class="crosslink">Size</a> 

##### Examples

```js
var a = new cc.size(10, 10);
a.equals(new cc.size(10, 10));// return true;
```

##### lerp

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:113](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L113) |

###### Parameters
- `to` <a href="../classes/Rect.html" class="crosslink">Rect</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient.
- `out` <a href="../classes/Size.html" class="crosslink">Size</a> optional, the receiving vector.

##### Examples

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

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js:140](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCSize.js#L140) |


##### Examples

```js
var a = new cc.size(10, 10);
a.toString();// return "(10.00, 10.00)";
```


