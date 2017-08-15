## `EventListener` Class



Module: [cc](../modules/cc.md)




封装用户的事件处理逻辑。
注意：这是一个抽象类，开发者不应该直接实例化这个类，请参考 <a href="../classes/EventListener.html#method_create" class="crosslink">cc.EventListener.create</a>。

### Index

##### Properties

  - [`UNKNOWN`](#unknown) `Number` 未知的事件监听器类型
  - [`KEYBOARD`](#keyboard) `Number` 键盘事件监听器类型
  - [`ACCELERATION`](#acceleration) `Number` 加速器事件监听器类型



##### Methods

  - [`constructor`](#constructor) Constructor
  - [`checkAvailable`](#checkavailable) 检测监听器是否有效
  - [`clone`](#clone) 克隆监听器,它的子类必须重写此方法。
  - [`setEnabled`](#setenabled) 启用或禁用监听器。
  - [`isEnabled`](#isenabled) 检查监听器是否可用。
  - [`create`](#create) 通过指定不同的 Event 对象来设置想要创建的事件监听器。



### Details


#### Properties


##### UNKNOWN

> 未知的事件监听器类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:252](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L252) |



##### KEYBOARD

> 键盘事件监听器类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:276](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L276) |



##### ACCELERATION

> 加速器事件监听器类型

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:292](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L292) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:44](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L44) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- listenerID <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### checkAvailable

检测监听器是否有效

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:173](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L173) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### clone

克隆监听器,它的子类必须重写此方法。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:183](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L183) |
| Return 		 | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 



##### setEnabled

启用或禁用监听器。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:193](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L193) |

###### Parameters
- enabled <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isEnabled

检查监听器是否可用。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:207](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L207) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### create

通过指定不同的 Event 对象来设置想要创建的事件监听器。

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js:453](https:/github.com/cocos-creator/engine/blob/master/utils/api/engine/cocos2d/core/event-manager/CCEventListener.js#L453) |
| Return 		 | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 

###### Parameters
- argObj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> a json object

##### Example

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


