## `EventListener` Class



Module: [cc](../modules/cc.md)


<p>
    The base class of event listener.                                                                        <br/>
    If you need custom listener which with different callback, you need to inherit this class.               <br/>
    For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
     EventListenerTouchOneByOne, EventListenerCustom.
</p>


### Index

##### Properties

  - [`UNKNOWN`](#unknown) `Number` The type code of unknown event listener.
  - [`KEYBOARD`](#keyboard) `Number` The type code of keyboard event listener.
  - [`ACCELERATION`](#acceleration) `Number` The type code of acceleration event listener.



##### Methods

  - [`constructor`](#constructor) Constructor
  - [`checkAvailable`](#checkavailable) Checks whether the listener is available.
  - [`clone`](#clone) Clones the listener, its subclasses have to override this method.
  - [`setEnabled`](#setenabled) Enables or disables the listener
  - [`isEnabled`](#isenabled) Checks whether the listener is enabled
  - [`create`](#create) Create a EventListener object with configuration including the event type, handlers and other parameters.



### Details


#### Properties


##### UNKNOWN

> The type code of unknown event listener.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:253](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L253) |



##### KEYBOARD

> The type code of keyboard event listener.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:277](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L277) |



##### ACCELERATION

> The type code of acceleration event listener.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:293](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L293) |






<!-- Method Block -->
#### Methods


##### constructor

Constructor

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:45](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L45) |

###### Parameters
- `type` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `listenerID` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- `callback` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### checkAvailable

Checks whether the listener is available.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:174](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L174) |



##### clone

Clones the listener, its subclasses have to override this method.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:184](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L184) |



##### setEnabled

Enables or disables the listener

| meta | description |
|------|-------------|
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:194](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L194) |

###### Parameters
- `enabled` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isEnabled

Checks whether the listener is enabled

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:208](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L208) |



##### create

Create a EventListener object with configuration including the event type, handlers and other parameters.
In handlers, this refer to the event listener object itself.
You can also pass custom parameters in the configuration object,
all custom parameters will be polyfilled into the event listener object and can be accessed in handlers.

| meta | description |
|------|-------------|
| Returns | <a href="../classes/EventListener.html" class="crosslink">EventListener</a> 
| Defined in | [cocos2d/core/event-manager/CCEventListener.js:454](https://github.com/cocos-creator/engine/blob/de46973d0b5edcff4f973186ce89752080cb6b7c/cocos2d/core/event-manager/CCEventListener.js#L454) |

###### Parameters
- `argObj` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> a json object

##### Examples

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


