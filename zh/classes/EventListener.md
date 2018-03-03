## `EventListener` 类型



模块: [cc](../modules/cc.md)


封装用户的事件处理逻辑。
注意：这是一个抽象类，开发者不应该直接实例化这个类，请参考 <a href="../classes/EventListener.html#method_create" class="crosslink">cc.EventListener.create</a>。


### 索引

##### 属性（properties）

  - [`UNKNOWN`](#unknown) `Number` 未知的事件监听器类型
  - [`KEYBOARD`](#keyboard) `Number` 键盘事件监听器类型
  - [`ACCELERATION`](#acceleration) `Number` 加速器事件监听器类型



##### 方法

  - [`constructor`](#constructor) Constructor
  - [`checkAvailable`](#checkavailable) 检测监听器是否有效
  - [`clone`](#clone) 克隆监听器,它的子类必须重写此方法。
  - [`setEnabled`](#setenabled) 启用或禁用监听器。
  - [`isEnabled`](#isenabled) 检查监听器是否可用。
  - [`create`](#create) 通过指定不同的 Event 对象来设置想要创建的事件监听器。



### Details


#### 属性（properties）


##### UNKNOWN

> 未知的事件监听器类型

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:252](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L252) |



##### KEYBOARD

> 键盘事件监听器类型

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:276](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L276) |



##### ACCELERATION

> 加速器事件监听器类型

| meta | description |
|------|-------------|
| 类型 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:292](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L292) |






<!-- Method Block -->
#### 方法


##### constructor

Constructor

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:44](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L44) |

###### 参数列表
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `listenerID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### checkAvailable

检测监听器是否有效

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:173](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L173) |



##### clone

克隆监听器,它的子类必须重写此方法。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:183](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L183) |



##### setEnabled

启用或禁用监听器。

| meta | description |
|------|-------------|
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:193](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L193) |

###### 参数列表
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isEnabled

检查监听器是否可用。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:207](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L207) |



##### create

通过指定不同的 Event 对象来设置想要创建的事件监听器。

| meta | description |
|------|-------------|
| 返回 | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
| 定义于 | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js:453](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/event-manager/CCEventListener.js#L453) |

###### 参数列表
- `argObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> a json object

##### 示例

```js
// Create KEYBOARD EventListener.
cc.EventListener.create({
    event: cc.EventListener.KEYBOARD,
    onKeyPressed: function (keyCode, event) {
        cc.log('pressed key: ' + keyCode);
    },
    onKeyReleased: function (keyCode, event) {
        cc.log('released key: ' + keyCode);
    }
});

// Create ACCELERATION EventListener.
cc.EventListener.create({
    event: cc.EventListener.ACCELERATION,
    callback: function (acc, event) {
        cc.log('acc: ' + keyCode);
    }
});
```


