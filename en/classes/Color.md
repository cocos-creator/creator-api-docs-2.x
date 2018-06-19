## `Color` Class

Extends [`ValueType`](ValueType.md)


Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Representation of RGBA colors.

Each color component is a floating point value with a range from 0 to 255.

You can also use the convenience method <a href="../modules/cc.html#method_color" class="crosslink">cc.color</a> to create a new Color.


### Index

##### Properties

  - [`WHITE`](#white) `Color` Solid white, RGBA is [255, 255, 255, 255].
  - [`BLACK`](#black) `Color` Solid black, RGBA is [0, 0, 0, 255].
  - [`TRANSPARENT`](#transparent) `Color` Transparent, RGBA is [0, 0, 0, 0].
  - [`GRAY`](#gray) `Color` Grey, RGBA is [127.5, 127.5, 127.5].
  - [`RED`](#red) `Color` Solid red, RGBA is [255, 0, 0].
  - [`GREEN`](#green) `Color` Solid green, RGBA is [0, 255, 0].
  - [`BLUE`](#blue) `Color` Solid blue, RGBA is [0, 0, 255].
  - [`YELLOW`](#yellow) `Color` Yellow, RGBA is [255, 235, 4].
  - [`ORANGE`](#orange) `Color` Orange, RGBA is [255, 127, 0].
  - [`CYAN`](#cyan) `Color` Cyan, RGBA is [0, 255, 255].
  - [`MAGENTA`](#magenta) `Color` Magenta, RGBA is [255, 0, 255].



##### Methods

  - [`constructor`](#constructor) 
  - [`clone`](#clone) Clone a new color from the current color.
  - [`equals`](#equals) TODO
  - [`lerp`](#lerp) TODO
  - [`toString`](#tostring) TODO
  - [`getR`](#getr) Gets red channel value
  - [`setR`](#setr) Sets red value and return the current color object
  - [`getG`](#getg) Gets green channel value
  - [`setG`](#setg) Sets green value and return the current color object
  - [`getB`](#getb) Gets blue channel value
  - [`setB`](#setb) Sets blue value and return the current color object
  - [`getA`](#geta) Gets alpha channel value
  - [`setA`](#seta) Sets alpha value and return the current color object
  - [`toCSS`](#tocss) Convert color to css format.
  - [`fromHEX`](#fromhex) Read hex string and store color data into the current color object, the hex string must be formated as rgba or rgb.
  - [`toHEX`](#tohex) convert Color to HEX color string.
  - [`toRGBValue`](#torgbvalue) Convert to 24bit rgb value.
  - [`fromHSV`](#fromhsv) Read HSV model color and convert to RGB color
  - [`toHSV`](#tohsv) Transform to HSV model color



### Details


#### Properties


##### WHITE

> Solid white, RGBA is [255, 255, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:78](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L78) |



##### BLACK

> Solid black, RGBA is [0, 0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:86](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L86) |



##### TRANSPARENT

> Transparent, RGBA is [0, 0, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:94](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L94) |



##### GRAY

> Grey, RGBA is [127.5, 127.5, 127.5].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:102](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L102) |



##### RED

> Solid red, RGBA is [255, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:110](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L110) |



##### GREEN

> Solid green, RGBA is [0, 255, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:118](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L118) |



##### BLUE

> Solid blue, RGBA is [0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:126](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L126) |



##### YELLOW

> Yellow, RGBA is [255, 235, 4].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:134](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L134) |



##### ORANGE

> Orange, RGBA is [255, 127, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:142](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L142) |



##### CYAN

> Cyan, RGBA is [0, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:150](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L150) |



##### MAGENTA

> Magenta, RGBA is [255, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.js:158](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L158) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.js:53](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L53) |

###### Parameters
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red component of the color, default value is 0.
- `g` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> green component of the color, defualt value is 0.
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> blue component of the color, default value is 0.
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> alpha component of the color, default value is 255.


##### clone

Clone a new color from the current color.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:177](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L177) |


##### Examples

```js
var color = new cc.Color();
var newColor = color.clone();// Color {r: 0, g: 0, b: 0, a: 255}
```

##### equals

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/value-types/color.js:192](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L192) |

###### Parameters
- `other` <a href="../classes/Color.html" class="crosslink">Color</a> 

##### Examples

```js
var color1 = cc.Color.WHITE;
var color2 = new cc.Color(255, 255, 255);
cc.log(color1.equals(color2)); // true;
color2 = cc.Color.RED;
cc.log(color2.equals(color1)); // false;
```

##### lerp

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:209](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L209) |

###### Parameters
- `to` <a href="../classes/Color.html" class="crosslink">Color</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient.
- `out` <a href="../classes/Color.html" class="crosslink">Color</a> optional, the receiving vector.

##### Examples

```Not found for the example path: temp-src/engine/docs/utils/api/engine/docs/cocos2d/core/value-types/CCColor/lerp.js

##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/color.js:232](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L232) |


##### Examples

```js
var color = cc.Color.WHITE;
color.toString(); // "rgba(255, 255, 255, 255)"
```

##### getR

Gets red channel value

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/color.js:249](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L249) |



##### setR

Sets red value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:258](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L258) |

###### Parameters
- `red` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Red component.

##### Examples

```js
var color = new cc.Color();
color.setR(255); // Color {r: 255, g: 0, b: 0, a: 255}
```

##### getG

Gets green channel value

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/color.js:272](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L272) |



##### setG

Sets green value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:281](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L281) |

###### Parameters
- `green` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Green component.

##### Examples

```js
var color = new cc.Color();
color.setG(255); // Color {r: 0, g: 255, b: 0, a: 255}
```

##### getB

Gets blue channel value

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/color.js:295](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L295) |



##### setB

Sets blue value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:304](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L304) |

###### Parameters
- `blue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Blue component.

##### Examples

```js
var color = new cc.Color();
color.setB(255); // Color {r: 0, g: 0, b: 255, a: 255}
```

##### getA

Gets alpha channel value

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/color.js:318](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L318) |



##### setA

Sets alpha value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:327](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L327) |

###### Parameters
- `alpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Alpha component.

##### Examples

```js
var color = new cc.Color();
color.setA(0); // Color {r: 0, g: 0, b: 0, a: 0}
```

##### toCSS

Convert color to css format.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/color.js:347](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L347) |

###### Parameters
- `opt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb".

##### Examples

```Not found for the example path: temp-src/engine/docs/utils/api/engine/docs/cocos2d/core/value-types/CCColor/toCSS.js

##### fromHEX

Read hex string and store color data into the current color object, the hex string must be formated as rgba or rgb.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:376](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L376) |

###### Parameters
- `hexString` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var color = cc.Color.BLACK;
color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
```

##### toHEX

convert Color to HEX color string.
e.g.  cc.color(255,6,255)  to : "#ff06ff"

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/color.js:397](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L397) |

###### Parameters
- `fmt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "#rgb" or "#rrggbb".

##### Examples

```js
var color = cc.Color.BLACK;
color.toHEX("#rgb");     // "000";
color.toHEX("#rrggbb");  // "000000";
```

##### toRGBValue

Convert to 24bit rgb value.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| Defined in | [cocos2d/core/value-types/color.js:433](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L433) |


##### Examples

```js
var color = cc.Color.YELLOW;
color.toRGBValue(); // 16771844;
```

##### fromHSV

Read HSV model color and convert to RGB color

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.js:446](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L446) |

###### Parameters
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `s` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `v` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
var color = cc.Color.YELLOW;
color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
```

##### toHSV

Transform to HSV model color

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/value-types/color.js:524](https://github.com/cocos-creator/engine/blob/1f39837ac17a406b42d5a5d1a52a0afa4d53a7ec/cocos2d/core/value-types/color.js#L524) |


##### Examples

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```


