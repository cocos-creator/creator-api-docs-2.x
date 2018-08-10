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
  - [`clamp`](#clamp) Clamp this color to make all components between 0 to 255。
  - [`fromHEX`](#fromhex) Read hex string and store color data into the current color object, the hex string must be formated as rgba or rgb.
  - [`toHEX`](#tohex) TODO
  - [`toRGBValue`](#torgbvalue) Convert to 24bit rgb value.
  - [`fromHSV`](#fromhsv) TODO
  - [`toHSV`](#tohsv) TODO
  - [`rgb2hsv`](#rgb2hsv) TODO
  - [`hsv2rgb`](#hsv2rgb) TODO



### Details


#### Properties


##### WHITE

> Solid white, RGBA is [255, 255, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:78](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L78) |



##### BLACK

> Solid black, RGBA is [0, 0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:86](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L86) |



##### TRANSPARENT

> Transparent, RGBA is [0, 0, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:94](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L94) |



##### GRAY

> Grey, RGBA is [127.5, 127.5, 127.5].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:102](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L102) |



##### RED

> Solid red, RGBA is [255, 0, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:110](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L110) |



##### GREEN

> Solid green, RGBA is [0, 255, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:118](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L118) |



##### BLUE

> Solid blue, RGBA is [0, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:126](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L126) |



##### YELLOW

> Yellow, RGBA is [255, 235, 4].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:134](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L134) |



##### ORANGE

> Orange, RGBA is [255, 127, 0].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:142](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L142) |



##### CYAN

> Cyan, RGBA is [0, 255, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:150](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L150) |



##### MAGENTA

> Magenta, RGBA is [255, 0, 255].

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined in | [cocos2d/core/value-types/CCColor.js:158](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L158) |






<!-- Method Block -->
#### Methods


##### constructor



| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/CCColor.js:53](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L53) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:177](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L177) |


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
| Defined in | [cocos2d/core/value-types/CCColor.js:192](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L192) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:209](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L209) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:232](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L232) |


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
| Defined in | [cocos2d/core/value-types/CCColor.js:249](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L249) |



##### setR

Sets red value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:258](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L258) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:272](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L272) |



##### setG

Sets green value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:281](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L281) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:295](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L295) |



##### setB

Sets blue value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:304](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L304) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:318](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L318) |



##### setA

Sets alpha value and return the current color object

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:327](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L327) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:347](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L347) |

###### Parameters
- `opt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb".

##### Examples

```js
var color = cc.Color.BLACK;
color.toCSS();          // "#000";
color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
color.toCSS("rgb");     // "rgba(0,0,0)";
color.toCSS("#rgb");    // "#000";
color.toCSS("#rrggbb"); // "#000000";
```

##### clamp

Clamp this color to make all components between 0 to 255。

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/value-types/CCColor.js:376](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L376) |


##### Examples

```js
var color = new cc.Color(1000, 0, 0, 255);
color.clamp();
cc.log(color); // (255, 0, 0, 255)
```

##### fromHEX

Read hex string and store color data into the current color object, the hex string must be formated as rgba or rgb.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:390](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L390) |

###### Parameters
- `hexString` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
var color = cc.Color.BLACK;
color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
```

##### toHEX

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:410](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L410) |

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
| Defined in | [cocos2d/core/value-types/CCColor.js:445](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L445) |


##### Examples

```js
var color = cc.Color.YELLOW;
color.toRGBValue(); // 16771844;
```

##### fromHSV

TODO

| meta | description |
|------|-------------|
| Returns | <a href="../classes/Color.html" class="crosslink">Color</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:458](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L458) |

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

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:477](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L477) |


##### Examples

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```

##### rgb2hsv

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:505](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L505) |

###### Parameters
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].
- `g` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].

##### Examples

```js
cc.Color.rgb2hsv(255, 255, 255); // Object {h: 0, s: 0, v: 1};
```

##### hsv2rgb

TODO

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| Defined in | [cocos2d/core/value-types/CCColor.js:539](https://github.com/cocos-creator/engine/blob/111da455d089e3000f670eed24ff5172a3488245/cocos2d/core/value-types/CCColor.js#L539) |

###### Parameters
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `s` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `v` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Examples

```js
cc.Color.hsv2rgb(0, 0, 1); // Object {r: 255, g: 255, b: 255};
```


