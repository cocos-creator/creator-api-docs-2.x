
## `_decorator` 模块






一些 JavaScript 装饰器，目前可以通过 "cc._decorator" 来访问。
（这些 API 仍不完全稳定，有可能随着 JavaScript 装饰器的标准实现而调整）





### 索引



##### 方法

  - [`ccclass`](#ccclass) 将标准写法的 [ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 声明为 CCClass，具体用法请参阅[类型定义](/docs/creator/scripting/class/)。
  - [`property`](#property) 定义 [CCClass](/docs/creator/scripting/class/) 所用的属性。
  - [`executeInEditMode`](#executeineditmode) 允许继承自 Component 的 CCClass 在编辑器里执行。<br>
默认情况下，所有 Component 都只会在运行时才会执行，也就是说它们的生命周期回调不会在编辑器里触发。
  - [`requireComponent`](#requirecomponent) 为声明为 CCClass 的组件添加依赖的其它组件。当组件添加到节点上时，如果依赖的组件不存在，引擎将会自动将依赖组件添加到同一个节点，防止脚本出错。该设置在运行时同样有效。
  - [`menu`](#menu) 将当前组件添加到组件菜单中，方便用户查找。例如 "Rendering/CameraCtrl"。
  - [`executionOrder`](#executionorder) 设置脚本生命周期方法调用的优先级。优先级小于 0 的组件将会优先执行，优先级大于 0 的组件将会延后执行。优先级仅会影响 onLoad, onEnable, start, update 和 lateUpdate，而 onDisable 和 onDestroy 不受影响。
  - [`disallowMultiple`](#disallowmultiple) 防止多个相同类型（或子类型）的组件被添加到同一个节点。
  - [`playOnFocus`](#playonfocus) 当指定了 "executeInEditMode" 以后，playOnFocus 可以在选中当前组件所在的节点时，提高编辑器的场景刷新频率到 60 FPS，否则场景就只会在必要的时候进行重绘。
  - [`inspector`](#inspector) 自定义当前组件在 **属性检查器** 中渲染时所用的网页 url。
  - [`icon`](#icon) 自定义当前组件在编辑器中显示的图标 url。
  - [`help`](#help) 指定当前组件的帮助文档的 url，设置过后，在 **属性检查器** 中就会出现一个帮助图标，用户点击将打开指定的网页。
  - [`mixins`](#mixins) NOTE:<br>
The old mixins implemented in cc.Class(ES5) behaves exact the same as multiple inheritance.
But since ES6, class constructor can't be function-called and class methods become non-enumerable,
so we can not mix in ES6 Classes.<br>
See:<br>
[https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32](https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32)<br>
One possible solution (but IDE unfriendly):<br>
[http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)<br>
<br>
NOTE:<br>
You must manually call mixins constructor, this is different from cc.Class(ES5).



### Details




<!-- Method Block -->
#### 方法


##### ccclass

将标准写法的 [ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 声明为 CCClass，具体用法请参阅[类型定义](/docs/creator/scripting/class/)。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:230](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L230) |

###### 参数列表
- `name` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The class name used for serialization.

##### 示例

```js
const {ccclass} = cc._decorator;

// define a CCClass, omit the name
@ccclass
class NewScript extends cc.Component {
    // ...
}

// define a CCClass with a name
@ccclass('LoginData')
class LoginData {
    // ...
}
```

##### property

定义 [CCClass](/docs/creator/scripting/class/) 所用的属性。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:302](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L302) |

###### 参数列表
- `options` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> an object with some property attributes
	- `type` Any 
	- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `visible` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> &#124; <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 
	- `displayName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
	- `tooltip` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
	- `multiline` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `readonly` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `min` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `max` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `step` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
	- `range` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number[]</a> 
	- `slide` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `serializable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `editorOnly` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `override` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `animatable` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
	- `formerlySerializedAs` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
const {ccclass, property} = cc._decorator;

@ccclass
class NewScript extends cc.Component {
    @property({
        type: cc.Node
    })
    targetNode1 = null;

    @property(cc.Node)
    targetNode2 = null;

    @property(cc.Button)
    targetButton = null;

    @property
    _width = 100;

    @property
    get width () {
        return this._width;
    }

    @property
    set width (value) {
        this._width = value;
    }

    @property
    offset = new cc.Vec2(100, 100);

    @property(cc.Vec2)
    offsets = [];

    @property(cc.Texture2D)
    texture = "";
}

// above is equivalent to (上面的代码相当于):

var NewScript = cc.Class({
    properties: {
        targetNode1: {
            default: null,
            type: cc.Node
        },

        targetNode2: {
            default: null,
            type: cc.Node
        },

        targetButton: {
            default: null,
            type: cc.Button
        },

        _width: 100,

        width: {
            get () {
                return this._width;
            },
            set (value) {
                this._width = value;
            }
        },

        offset: new cc.Vec2(100, 100)

        offsets: {
            default: [],
            type: cc.Vec2
        }

        texture: {
            default: "",
            url: cc.Texture2D
        },
    }
});
```

##### executeInEditMode

允许继承自 Component 的 CCClass 在编辑器里执行。<br>
默认情况下，所有 Component 都只会在运行时才会执行，也就是说它们的生命周期回调不会在编辑器里触发。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:449](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L449) |


##### 示例

```js
const {ccclass, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
class NewScript extends cc.Component {
    // ...
}
```

##### requireComponent

为声明为 CCClass 的组件添加依赖的其它组件。当组件添加到节点上时，如果依赖的组件不存在，引擎将会自动将依赖组件添加到同一个节点，防止脚本出错。该设置在运行时同样有效。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:473](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L473) |

###### 参数列表
- `requiredComponent` <a href="../classes/Component.html" class="crosslink">Component</a> 

##### 示例

```js
const {ccclass, requireComponent} = cc._decorator;

@ccclass
@requireComponent(cc.Sprite)
class SpriteCtrl extends cc.Component {
    // ...
}
```

##### menu

将当前组件添加到组件菜单中，方便用户查找。例如 "Rendering/CameraCtrl"。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:494](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L494) |

###### 参数列表
- `path` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path is the menu represented like a pathname.
                       For example the menu could be "Rendering/CameraCtrl".

##### 示例

```js
const {ccclass, menu} = cc._decorator;

@ccclass
@menu("Rendering/CameraCtrl")
class NewScript extends cc.Component {
    // ...
}
```

##### executionOrder

设置脚本生命周期方法调用的优先级。优先级小于 0 的组件将会优先执行，优先级大于 0 的组件将会延后执行。优先级仅会影响 onLoad, onEnable, start, update 和 lateUpdate，而 onDisable 和 onDestroy 不受影响。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:516](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L516) |

###### 参数列表
- `order` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The execution order of lifecycle methods for Component. Those less than 0 will execute before while those greater than 0 will execute after.

##### 示例

```js
const {ccclass, executionOrder} = cc._decorator;

@ccclass
@executionOrder(1)
class CameraCtrl extends cc.Component {
    // ...
}
```

##### disallowMultiple

防止多个相同类型（或子类型）的组件被添加到同一个节点。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:539](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L539) |


##### 示例

```js
const {ccclass, disallowMultiple} = cc._decorator;

@ccclass
@disallowMultiple
class CameraCtrl extends cc.Component {
    // ...
}
```

##### playOnFocus

当指定了 "executeInEditMode" 以后，playOnFocus 可以在选中当前组件所在的节点时，提高编辑器的场景刷新频率到 60 FPS，否则场景就只会在必要的时候进行重绘。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:560](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L560) |


##### 示例

```js
const {ccclass, playOnFocus, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
@playOnFocus
class CameraCtrl extends cc.Component {
    // ...
}
```

##### inspector

自定义当前组件在 **属性检查器** 中渲染时所用的网页 url。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:583](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L583) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
const {ccclass, inspector} = cc._decorator;

@ccclass
@inspector("packages://inspector/inspectors/comps/camera-ctrl.js")
class NewScript extends cc.Component {
    // ...
}
```

##### icon

自定义当前组件在编辑器中显示的图标 url。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:604](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L604) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
const {ccclass, icon} = cc._decorator;

@ccclass
@icon("xxxx.png")
class NewScript extends cc.Component {
    // ...
}
```

##### help

指定当前组件的帮助文档的 url，设置过后，在 **属性检查器** 中就会出现一个帮助图标，用户点击将打开指定的网页。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:626](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L626) |

###### 参数列表
- `url` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
const {ccclass, help} = cc._decorator;

@ccclass
@help("app://docs/html/components/spine.html")
class NewScript extends cc.Component {
    // ...
}
```

##### mixins

NOTE:<br>
The old mixins implemented in cc.Class(ES5) behaves exact the same as multiple inheritance.
But since ES6, class constructor can't be function-called and class methods become non-enumerable,
so we can not mix in ES6 Classes.<br>
See:<br>
[https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32](https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32)<br>
One possible solution (but IDE unfriendly):<br>
[http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)<br>
<br>
NOTE:<br>
You must manually call mixins constructor, this is different from cc.Class(ES5).

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js:649](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/platform/CCClassDecorator.js#L649) |

###### 参数列表
- `ctor` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> constructors to mix, only support ES5 constructors or classes defined by using `cc.Class`,
                            not support ES6 Classes.

##### 示例

```js
const {ccclass, mixins} = cc._decorator;

class Animal { ... }

const Fly = cc.Class({
    constructor () { ... }
});

@ccclass
@mixins(cc.EventTarget, Fly)
class Bird extends Animal {
    constructor () {
        super();

        // You must manually call mixins constructor, this is different from cc.Class(ES5)
        cc.EventTarget.call(this);
        Fly.call(this);
    }
    // ...
}
```


