## `Color` 类型

继承于 [`ValueType`](ValueType.md)


模块: [cc](../modules/cc.md)


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
  - [`r`](#r) `number` 获取或者设置红色通道
  - [`g`](#g) `number` 获取或者设置绿色通道
  - [`b`](#b) `number` 获取或者设置蓝色通道
  - [`a`](#a) `number` 获取或者设置透明通道



##### 方法

  - [`copy`](#copy) Copy content of a color into another.
  - [`clone`](#clone) Clone a new color.
  - [`set`](#set) Set the components of a color to the given values.
  - [`fromHex`](#fromhex) Converts the hexadecimal formal color into rgb formal.
  - [`add`](#add) Add components of two colors, respectively.
  - [`subtract`](#subtract) Subtract components of color b from components of color a, respectively.
  - [`multiply`](#multiply) Multiply components of two colors, respectively.
  - [`divide`](#divide) Divide components of color a by components of color b, respectively.
  - [`scale`](#scale) Scales a color by a number.
  - [`lerp`](#lerp) Performs a linear interpolation between two colors.
  - [`toArray`](#toarray) 颜色转数组
  - [`fromArray`](#fromarray) 数组转颜色
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
  - [`fromHEX`](#fromhex) 读取 16 进制颜色。
  - [`toHEX`](#tohex) 转换为 16 进制。
  - [`toRGBValue`](#torgbvalue) 转换为 24bit 的 RGB 值。
  - [`fromHSV`](#fromhsv) 读取 HSV（色彩模型）格式。
  - [`toHSV`](#tohsv) 转换为 HSV（色彩模型）格式。
  - [`set`](#set) 设置颜色
  - [`multiply`](#multiply) 将当前颜色乘以与指定颜色



### Details


#### 属性（properties）


##### WHITE

> 纯白色，RGBA 是 [255, 255, 255, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:59](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L59) |



##### BLACK

> 纯黑色，RGBA 是 [0, 0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:69](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L69) |



##### TRANSPARENT

> 透明，RGBA 是 [0, 0, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:79](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L79) |



##### GRAY

> 灰色，RGBA 是 [127.5, 127.5, 127.5]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:89](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L89) |



##### RED

> 纯红色，RGBA 是 [255, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:99](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L99) |



##### GREEN

> 纯绿色，RGBA 是 [0, 255, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:108](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L108) |



##### BLUE

> 纯蓝色，RGBA 是 [0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:117](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L117) |



##### YELLOW

> 黄色，RGBA 是 [255, 235, 4]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:126](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L126) |



##### ORANGE

> 橙色，RGBA 是 [255, 127, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:135](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L135) |



##### CYAN

> 青色，RGBA 是 [0, 255, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:144](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L144) |



##### MAGENTA

> 洋红色（品红色），RGBA 是 [255, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:153](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L153) |



##### r

> 获取或者设置红色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:446](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L446) |



##### g

> 获取或者设置绿色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:458](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L458) |



##### b

> 获取或者设置蓝色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:470](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L470) |



##### a

> 获取或者设置透明通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:482](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L482) |






<!-- Method Block -->
#### 方法


##### copy

Copy content of a color into another.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:163](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L163) |



##### clone

Clone a new color.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:178](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L178) |



##### set

Set the components of a color to the given values.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:189](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L189) |



##### fromHex

Converts the hexadecimal formal color into rgb formal.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:204](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L204) |



##### add

Add components of two colors, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:224](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L224) |



##### subtract

Subtract components of color b from components of color a, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:239](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L239) |



##### multiply

Multiply components of two colors, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:254](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L254) |



##### divide

Divide components of color a by components of color b, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:269](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L269) |



##### scale

Scales a color by a number.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:284](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L284) |



##### lerp

Performs a linear interpolation between two colors.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:299](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L299) |



##### toArray

颜色转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:318](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L318) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### fromArray

数组转颜色

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:336](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L336) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:355](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L355) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:374](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L374) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:389](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L389) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:406](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L406) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:429](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L429) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:494](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L494) |



##### setR

设置当前的红色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:503](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L503) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:518](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L518) |



##### setG

设置当前的绿色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:527](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L527) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:542](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L542) |



##### setB

设置当前的蓝色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:551](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L551) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:566](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L566) |



##### setA

设置当前的透明度，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:575](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L575) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:591](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L591) |

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

##### fromHEX

读取 16 进制颜色。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:620](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L620) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:641](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L641) |

###### 参数列表
- `fmt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "#rgb", "#rrggbb" or "#rrggbbaa".

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
| 定义于 | [cocos2d/core/value-types/color.ts:681](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L681) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:694](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L694) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:772](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L772) |


##### 示例

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```

##### set

设置颜色

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:803](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L803) |

###### 参数列表
- `color` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### multiply

将当前颜色乘以与指定颜色

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:828](https://github.com/cocos-creator/engine/blob/d0482bb5bc3819110e43cdd03a3459bd80914b74/cocos2d/core/value-types/color.ts#L828) |

###### 参数列表
- `other` <a href="../classes/Color.html" class="crosslink">Color</a> 



