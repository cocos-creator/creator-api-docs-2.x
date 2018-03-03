## `Color` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


cc.Color 用于表示颜色。

它包含 RGBA 四个以浮点数保存的颜色分量，每个的值都在 0 到 255 之间。

您也可以通过使用 <a href="../modules/cc.html#method_color" class="crosslink">cc.color</a> 的便捷方法来创建一个新的 Color。


### 索引

##### 属性（properties）

  - [`WHITE`](#white) `Color` 纯白色，RGBA 是 [255, 255, 255, 255]。
  - [`BLACK`](#black) `Color` 纯黑色，RGBA 是 [0, 0, 0, 255]。
  - [`TRANSPARENT`](#transparent) `Color` 透明，RGBA 是 [0, 0, 0, 0]。
  - [`GRAY`](#gray) `Color` 灰色，RGBA 是 [127.5, 127.5, 127.5]。
  - [`RED`](#red) `Color` 纯红色，RGBA 是 [255, 0, 0]。
  - [`GREEN`](#green) `Color` 纯绿色，RGBA 是 [0, 255, 0]。
  - [`BLUE`](#blue) `Color` 纯蓝色，RGBA 是 [0, 0, 255]。
  - [`YELLOW`](#yellow) `Color` 黄色，RGBA 是 [255, 235, 4]。
  - [`ORANGE`](#orange) `Color` 橙色，RGBA 是 [255, 127, 0]。
  - [`CYAN`](#cyan) `Color` 青色，RGBA 是 [0, 255, 255]。
  - [`MAGENTA`](#magenta) `Color` 洋红色（品红色），RGBA 是 [255, 0, 255]。



##### 方法

  - [`constructor`](#constructor) 
  - [`clone`](#clone) 克隆当前颜色。
  - [`equals`](#equals) 判断两个颜色是否相等。
  - [`lerp`](#lerp) 线性插值
  - [`toString`](#tostring) 转换为方便阅读的字符串。
  - [`getR`](#getr) 获取当前颜色的红色值。
  - [`setR`](#setr) 设置当前的红色值，并返回当前对象。
  - [`getG`](#getg) 获取当前颜色的绿色值。
  - [`setG`](#setg) 设置当前的绿色值，并返回当前对象。
  - [`getB`](#getb) 获取当前颜色的蓝色值。
  - [`setB`](#setb) 设置当前的蓝色值，并返回当前对象。
  - [`getA`](#geta) 获取当前颜色的透明度值。
  - [`setA`](#seta) 设置当前的透明度，并返回当前对象。
  - [`toCSS`](#tocss) 转换为 CSS 格式。
  - [`clamp`](#clamp) 限制颜色数值，在 0 到 255 之间。
  - [`fromHEX`](#fromhex) 读取 16 进制颜色。
  - [`toHEX`](#tohex) 转换为 16 进制。
  - [`toRGBValue`](#torgbvalue) 转换为 24bit 的 RGB 值。
  - [`fromHSV`](#fromhsv) 读取 HSV（色彩模型）格式。
  - [`toHSV`](#tohsv) 转换为 HSV（色彩模型）格式。
  - [`rgb2hsv`](#rgb2hsv) RGB 转换为 HSV。
  - [`hsv2rgb`](#hsv2rgb) HSV 转换为 RGB。



### Details


#### 属性（properties）


##### WHITE

> 纯白色，RGBA 是 [255, 255, 255, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:77](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L77) |



##### BLACK

> 纯黑色，RGBA 是 [0, 0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:85](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L85) |



##### TRANSPARENT

> 透明，RGBA 是 [0, 0, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:93](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L93) |



##### GRAY

> 灰色，RGBA 是 [127.5, 127.5, 127.5]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:101](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L101) |



##### RED

> 纯红色，RGBA 是 [255, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:109](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L109) |



##### GREEN

> 纯绿色，RGBA 是 [0, 255, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:117](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L117) |



##### BLUE

> 纯蓝色，RGBA 是 [0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:125](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L125) |



##### YELLOW

> 黄色，RGBA 是 [255, 235, 4]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:133](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L133) |



##### ORANGE

> 橙色，RGBA 是 [255, 127, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:141](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L141) |



##### CYAN

> 青色，RGBA 是 [0, 255, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:149](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L149) |



##### MAGENTA

> 洋红色（品红色），RGBA 是 [255, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:157](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L157) |






<!-- Method Block -->
#### 方法


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:52](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L52) |

###### 参数列表
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red component of the color, default value is 0.
- `g` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> green component of the color, defualt value is 0.
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> blue component of the color, default value is 0.
- `a` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> alpha component of the color, default value is 255.


##### clone

克隆当前颜色。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:176](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L176) |


##### 示例

```js
var color = new cc.Color();
var newColor = color.clone();// Color {r: 0, g: 0, b: 0, a: 255}
```

##### equals

判断两个颜色是否相等。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:191](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L191) |

###### 参数列表
- `other` <a href="../classes/Color.html" class="crosslink">Color</a> 

##### 示例

```js
var color1 = cc.Color.WHITE;
var color2 = new cc.Color(255, 255, 255);
cc.log(color1.equals(color2)); // true;
color2 = cc.Color.RED;
cc.log(color2.equals(color1)); // false;
```

##### lerp

线性插值

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:208](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L208) |

###### 参数列表
- `to` <a href="../classes/Color.html" class="crosslink">Color</a> 
- `ratio` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> the interpolation coefficient.
- `out` <a href="../classes/Color.html" class="crosslink">Color</a> optional, the receiving vector.

##### 示例

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

转换为方便阅读的字符串。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:231](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L231) |


##### 示例

```js
var color = cc.Color.WHITE;
color.toString(); // "rgba(255, 255, 255, 255)"
```

##### getR

获取当前颜色的红色值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:248](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L248) |



##### setR

设置当前的红色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:257](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L257) |

###### 参数列表
- `red` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Red component.

##### 示例

```js
var color = new cc.Color();
color.setR(255); // Color {r: 255, g: 0, b: 0, a: 255}
```

##### getG

获取当前颜色的绿色值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:271](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L271) |



##### setG

设置当前的绿色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:280](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L280) |

###### 参数列表
- `green` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Green component.

##### 示例

```js
var color = new cc.Color();
color.setG(255); // Color {r: 0, g: 255, b: 0, a: 255}
```

##### getB

获取当前颜色的蓝色值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:294](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L294) |



##### setB

设置当前的蓝色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:303](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L303) |

###### 参数列表
- `blue` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Blue component.

##### 示例

```js
var color = new cc.Color();
color.setB(255); // Color {r: 0, g: 0, b: 255, a: 255}
```

##### getA

获取当前颜色的透明度值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:317](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L317) |



##### setA

设置当前的透明度，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:326](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L326) |

###### 参数列表
- `alpha` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Alpha component.

##### 示例

```js
var color = new cc.Color();
color.setA(0); // Color {r: 0, g: 0, b: 0, a: 0}
```

##### toCSS

转换为 CSS 格式。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:346](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L346) |

###### 参数列表
- `opt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb".

##### 示例

```js
var color = cc.Color.BLACK;
color.toCSS();          // "#000";
color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
color.toCSS("rgb");     // "rgba(0,0,0)";
color.toCSS("#rgb");    // "#000";
color.toCSS("#rrggbb"); // "#000000";
```

##### clamp

限制颜色数值，在 0 到 255 之间。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:375](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L375) |


##### 示例

```js
var color = new cc.Color(1000, 0, 0, 255);
color.clamp();
cc.log(color); // (255, 0, 0, 255)
```

##### fromHEX

读取 16 进制颜色。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:389](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L389) |

###### 参数列表
- `hexString` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
var color = cc.Color.BLACK;
color.fromHEX("#FFFF33"); // Color {r: 255, g: 255, b: 51, a: 255};
```

##### toHEX

转换为 16 进制。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:409](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L409) |

###### 参数列表
- `fmt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "#rgb" or "#rrggbb".

##### 示例

```js
var color = cc.Color.BLACK;
color.toHEX("#rgb");     // "000";
color.toHEX("#rrggbb");  // "000000";
```

##### toRGBValue

转换为 24bit 的 RGB 值。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:444](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L444) |


##### 示例

```js
var color = cc.Color.YELLOW;
color.toRGBValue(); // 16771844;
```

##### fromHSV

读取 HSV（色彩模型）格式。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:457](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L457) |

###### 参数列表
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `s` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `v` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
var color = cc.Color.YELLOW;
color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
```

##### toHSV

转换为 HSV（色彩模型）格式。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:476](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L476) |


##### 示例

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```

##### rgb2hsv

RGB 转换为 HSV。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:504](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L504) |

###### 参数列表
- `r` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].
- `g` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].
- `b` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red, must be [0, 255].

##### 示例

```js
cc.Color.rgb2hsv(255, 255, 255); // Object {h: 0, s: 0, v: 1};
```

##### hsv2rgb

HSV 转换为 RGB。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js:538](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/value-types/CCColor.js#L538) |

###### 参数列表
- `h` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `s` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `v` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### 示例

```js
cc.Color.hsv2rgb(0, 0, 1); // Object {r: 255, g: 255, b: 255};
```


