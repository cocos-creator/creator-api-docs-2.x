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
  - [`r`](#r) `number` Get or set red channel value
  - [`g`](#g) `number` Get or set green channel value
  - [`b`](#b) `number` Get or set blue channel value
  - [`a`](#a) `number` Get or set alpha channel value



##### Methods

  - [`copy`](#copy) Copy content of a color into another.
  - [`clone`](#clone) Clone a new color.
  - [`set`](#set) Set the components of a color to the given values.
  - [`fromHex`](#fromhex) Converts the hexadecimal formal color into rgb formal.
  - [`fromHEX`](#fromhex) Converts the hexadecimal formal color into rgb formal.
  - [`add`](#add) Add components of two colors, respectively.
  - [`subtract`](#subtract) Subtract components of color b from components of color a, respectively.
  - [`multiply`](#multiply) Multiply components of two colors, respectively.
  - [`divide`](#divide) Divide components of color a by components of color b, respectively.
  - [`scale`](#scale) Scales a color by a number.
  - [`lerp`](#lerp) Performs a linear interpolation between two colors.
  - [`toArray`](#toarray) Turn an array of colors
  - [`fromArray`](#fromarray) An array of colors turn
  - [`premultiplyAlpha`](#premultiplyalpha) RGB premultiply alpha channel
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
  - [`set`](#set) Set the color
  - [`multiply`](#multiply) Multiplies the current color by the specified color



### Details


#### Properties


##### WHITE

> Solid white, RGBA is [255, 255, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:57](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L57) |



##### BLACK

> Solid black, RGBA is [0, 0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:67](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L67) |



##### TRANSPARENT

> Transparent, RGBA is [0, 0, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:77](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L77) |



##### GRAY

> Grey, RGBA is [127.5, 127.5, 127.5].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:87](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L87) |



##### RED

> Solid red, RGBA is [255, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:97](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L97) |



##### GREEN

> Solid green, RGBA is [0, 255, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:106](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L106) |



##### BLUE

> Solid blue, RGBA is [0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:115](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L115) |



##### YELLOW

> Yellow, RGBA is [255, 235, 4].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:124](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L124) |



##### ORANGE

> Orange, RGBA is [255, 127, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:133](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L133) |



##### CYAN

> Cyan, RGBA is [0, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:142](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L142) |



##### MAGENTA

> Magenta, RGBA is [255, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/color.ts:151](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L151) |



##### r

> Get or set red channel value

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/value-types/color.ts:483](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L483) |



##### g

> Get or set green channel value

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/value-types/color.ts:495](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L495) |



##### b

> Get or set blue channel value

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/value-types/color.ts:507](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L507) |



##### a

> Get or set alpha channel value

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| Defined in | [cocos2d/core/value-types/color.ts:519](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L519) |






<!-- Method Block -->
#### Methods


##### copy

Copy content of a color into another.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:161](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L161) |



##### clone

Clone a new color.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:176](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L176) |



##### set

Set the components of a color to the given values.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:187](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L187) |



##### fromHex

Converts the hexadecimal formal color into rgb formal.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:202](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L202) |



##### fromHEX

Converts the hexadecimal formal color into rgb formal.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:223](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L223) |



##### add

Add components of two colors, respectively.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:240](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L240) |



##### subtract

Subtract components of color b from components of color a, respectively.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:255](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L255) |



##### multiply

Multiply components of two colors, respectively.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:270](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L270) |



##### divide

Divide components of color a by components of color b, respectively.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:285](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L285) |



##### scale

Scales a color by a number.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:300](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L300) |



##### lerp

Performs a linear interpolation between two colors.

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:315](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L315) |



##### toArray

Turn an array of colors

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:334](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L334) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### fromArray

An array of colors turn

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:352](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L352) |

###### Parameters
- `ofs` Unknown 数组起始偏移量


##### premultiplyAlpha

RGB premultiply alpha channel

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:369](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L369) |

###### Parameters
- `out` Unknown 返回颜色
- `color` Unknown 预乘处理的目标颜色


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:392](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L392) |

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
| Defined in | [cocos2d/core/value-types/color.ts:411](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L411) |


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
| Defined in | [cocos2d/core/value-types/color.ts:426](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L426) |

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
| Defined in | [cocos2d/core/value-types/color.ts:443](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L443) |

###### Parameters
- `to` <a href="../classes/Color.html" class="crosslink">Color</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient.
- `out` <a href="../classes/Color.html" class="crosslink">Color</a> optional, the receiving vector.

##### Examples

```js
// Converts a white color to a black one trough time.
update: function (dt) {
    var color = this.node.color;
    if (color.equals(cc.Color.BLACK)) {
        return;
    }
    this.ratio += dt * 0.1;
    this.node.color = cc.Color.WHITE.lerp(cc.Color.BLACK, ratio);
}

```

##### toString

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/color.ts:466](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L466) |


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
| Defined in | [cocos2d/core/value-types/color.ts:531](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L531) |



##### setR

Sets red value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:540](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L540) |

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
| Defined in | [cocos2d/core/value-types/color.ts:555](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L555) |



##### setG

Sets green value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:564](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L564) |

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
| Defined in | [cocos2d/core/value-types/color.ts:579](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L579) |



##### setB

Sets blue value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:588](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L588) |

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
| Defined in | [cocos2d/core/value-types/color.ts:603](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L603) |



##### setA

Sets alpha value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:612](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L612) |

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
| Defined in | [cocos2d/core/value-types/color.ts:628](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L628) |

###### Parameters
- `opt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb".

##### Examples

```js
var color = cc.Color.BLACK;
color.toCSS();          // "rgba(0,0,0,1.00)";
color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
color.toCSS("rgb");     // "rgba(0,0,0)";
color.toCSS("#rgb");    // "#000";
color.toCSS("#rrggbb"); // "#000000";
```

##### fromHEX

Read hex string and store color data into the current color object, the hex string must be formated as rgba or rgb.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:663](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L663) |

###### Parameters
- `hexString` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var color = cc.Color.BLACK;
color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
```

##### toHEX

convert Color to HEX color string.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/color.ts:684](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L684) |

###### Parameters
- `fmt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "#rgb", "#rrggbb" or "#rrggbbaa".

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
| Defined in | [cocos2d/core/value-types/color.ts:714](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L714) |


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
| Defined in | [cocos2d/core/value-types/color.ts:727](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L727) |

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
| Defined in | [cocos2d/core/value-types/color.ts:803](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L803) |


##### Examples

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```

##### set

Set the color

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/color.ts:834](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L834) |

###### Parameters
- `color` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### multiply

Multiplies the current color by the specified color

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/color.ts:859](https://github.com/cocos-creator/engine/blob/5a29bc48b8b66d479bb93d92e64418ce8a7c0f34/cocos2d/core/value-types/color.ts#L859) |

###### Parameters
- `other` <a href="../classes/Color.html" class="crosslink">Color</a> 



