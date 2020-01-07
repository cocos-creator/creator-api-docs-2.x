## `Size` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


cc.Size is the class for size object,<br/>
please do not use its constructor to create sizes,<br/>
use <a href="../modules/cc.html#method_size" class="crosslink">size</a> alias function instead.<br/>
It will be deprecated soon, please use cc.Vec2 instead.



### Index

##### Properties

  - [`ZERO`](#zero) `Size` return a Size object with width = 0 and height = 0.
  - [`width`](#width) `Number` 
  - [`height`](#height) `Number` 



##### Methods

  - [`constructor`](#constructor) 
  - [`clone`](#clone) TODO
  - [`equals`](#equals) TODO
  - [`lerp`](#lerp) TODO
  - [`toString`](#tostring) TODO



### Details


#### Properties


##### ZERO

> return a Size object with width = 0 and height = 0.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Size.html" class="crosslink">Size</a> |
| Defined in | [cocos2d/core/value-types/size.ts:55](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L55) |



##### width

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/size.ts:66](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L66) |



##### height

> 

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/value-types/size.ts:70](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L70) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/size.ts:48](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L48) |

###### Parameters
- `width` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> &#124; <a href="../classes/Size.html" class="crosslink">Size</a> 
- `height` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### clone

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Size.html" class="crosslink">Size</a> 
| Defined in | [cocos2d/core/value-types/size.ts:87](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L87) |


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
| Defined in | [cocos2d/core/value-types/size.ts:100](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L100) |

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
| Defined in | [cocos2d/core/value-types/size.ts:116](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L116) |

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
| Defined in | [cocos2d/core/value-types/size.ts:149](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/size.ts#L149) |


##### Examples

```js
var a = new cc.size(10, 10);
a.toString();// return "(10.00, 10.00)";
```


