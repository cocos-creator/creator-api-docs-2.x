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
| 定义于 | [cocos2d/core/value-types/color.ts:57](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L57) |



##### BLACK

> 纯黑色，RGBA 是 [0, 0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:67](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L67) |



##### TRANSPARENT

> 透明，RGBA 是 [0, 0, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:77](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L77) |



##### GRAY

> 灰色，RGBA 是 [127.5, 127.5, 127.5]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:87](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L87) |



##### RED

> 纯红色，RGBA 是 [255, 0, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:97](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L97) |



##### GREEN

> 纯绿色，RGBA 是 [0, 255, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:106](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L106) |



##### BLUE

> 纯蓝色，RGBA 是 [0, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:115](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L115) |



##### YELLOW

> 黄色，RGBA 是 [255, 235, 4]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:124](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L124) |



##### ORANGE

> 橙色，RGBA 是 [255, 127, 0]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:133](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L133) |



##### CYAN

> 青色，RGBA 是 [0, 255, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:142](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L142) |



##### MAGENTA

> 洋红色（品红色），RGBA 是 [255, 0, 255]。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Color.html" class="crosslink">Color</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:151](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L151) |



##### r

> 获取或者设置红色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:444](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L444) |



##### g

> 获取或者设置绿色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:456](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L456) |



##### b

> 获取或者设置蓝色通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:468](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L468) |



##### a

> 获取或者设置透明通道

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">number</a> |
| 定义于 | [cocos2d/core/value-types/color.ts:480](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L480) |






<!-- Method Block -->
#### 方法


##### copy

Copy content of a color into another.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:161](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L161) |



##### clone

Clone a new color.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:176](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L176) |



##### set

Set the components of a color to the given values.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:187](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L187) |



##### fromHex

Converts the hexadecimal formal color into rgb formal.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:202](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L202) |



##### add

Add components of two colors, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:222](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L222) |



##### subtract

Subtract components of color b from components of color a, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:237](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L237) |



##### multiply

Multiply components of two colors, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:252](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L252) |



##### divide

Divide components of color a by components of color b, respectively.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:267](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L267) |



##### scale

Scales a color by a number.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:282](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L282) |



##### lerp

Performs a linear interpolation between two colors.

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:297](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L297) |



##### toArray

颜色转数组

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:316](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L316) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### fromArray

数组转颜色

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:334](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L334) |

###### 参数列表
- `ofs` Unknown 数组起始偏移量


##### constructor



| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:353](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L353) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:372](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L372) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:387](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L387) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:404](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L404) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:427](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L427) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:492](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L492) |



##### setR

设置当前的红色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:501](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L501) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:516](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L516) |



##### setG

设置当前的绿色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:525](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L525) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:540](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L540) |



##### setB

设置当前的蓝色值，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:549](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L549) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:564](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L564) |



##### setA

设置当前的透明度，并返回当前对象。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:573](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L573) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:589](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L589) |

###### 参数列表
- `opt` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb".

##### 示例

```js
var color = cc.Color.BLACK;
color.toCSS();          // "rgba(0,0,0,1.00)";
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
| 定义于 | [cocos2d/core/value-types/color.ts:624](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L624) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:645](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L645) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:685](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L685) |


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
| 定义于 | [cocos2d/core/value-types/color.ts:698](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L698) |

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
| 定义于 | [cocos2d/core/value-types/color.ts:776](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L776) |


##### 示例

```js
var color = cc.Color.YELLOW;
color.toHSV(); // Object {h: 0.1533864541832669, s: 0.9843137254901961, v: 1};
```

##### set

设置颜色

| meta | description |
|------|-------------|
| 定义于 | [cocos2d/core/value-types/color.ts:807](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L807) |

###### 参数列表
- `color` <a href="../classes/Color.html" class="crosslink">Color</a> 


##### multiply

将当前颜色乘以与指定颜色

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/Color.html" class="crosslink">Color</a> 
| 定义于 | [cocos2d/core/value-types/color.ts:832](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/value-types/color.ts#L832) |

###### 参数列表
- `other` <a href="../classes/Color.html" class="crosslink">Color</a> 



