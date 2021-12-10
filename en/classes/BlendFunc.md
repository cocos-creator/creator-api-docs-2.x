## `BlendFunc` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)


Helper class for setting material blend function.



### Index

##### Properties

  - [`srcBlendFactor`](#srcblendfactor) `macro.BlendFactor` specify the source Blend Factor, this will generate a custom material object, please pay attention to the memory cost.
  - [`dstBlendFactor`](#dstblendfactor) `macro.BlendFactor` specify the destination Blend Factor.





### Details


#### Properties


##### srcBlendFactor

> specify the source Blend Factor, this will generate a custom material object, please pay attention to the memory cost.

| meta | description |
|------|-------------|
| Type | <a href="../enums/macro.BlendFactor.html" class="crosslink">macro.BlendFactor</a> |
| Defined in | [cocos2d/core/utils/blend-func.js:21](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/utils/blend-func.js#L21) |

##### Examples

```js
sprite.srcBlendFactor = cc.macro.BlendFactor.ONE;
```


##### dstBlendFactor

> specify the destination Blend Factor.

| meta | description |
|------|-------------|
| Type | <a href="../enums/macro.BlendFactor.html" class="crosslink">macro.BlendFactor</a> |
| Defined in | [cocos2d/core/utils/blend-func.js:45](https://github.com/cocos-creator/engine/blob/f7d50d63228ec3047fe054a2d1e1535e90da2bd1/cocos2d/core/utils/blend-func.js#L45) |

##### Examples

```js
sprite.dstBlendFactor = cc.macro.BlendFactor.ONE;
```





