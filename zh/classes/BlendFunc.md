## `BlendFunc` 类型



模块: [cc](../modules/cc.md)
父模块: [cc](../modules/cc.md)


设置材质混合模式的辅助类。



### 索引

##### 属性（properties）

  - [`srcBlendFactor`](#srcblendfactor) `macro.BlendFactor` 指定原图的混合模式，这会克隆一个新的材质对象，注意这带来的开销
  - [`dstBlendFactor`](#dstblendfactor) `macro.BlendFactor` 指定目标的混合模式





### Details


#### 属性（properties）


##### srcBlendFactor

> 指定原图的混合模式，这会克隆一个新的材质对象，注意这带来的开销

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/macro.BlendFactor.html" class="crosslink">macro.BlendFactor</a> |
| 定义于 | [cocos2d/core/utils/blend-func.js:21](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/utils/blend-func.js#L21) |

##### 示例

```js
sprite.srcBlendFactor = cc.macro.BlendFactor.ONE;
```


##### dstBlendFactor

> 指定目标的混合模式

| meta | description |
|------|-------------|
| 类型 | <a href="../enums/macro.BlendFactor.html" class="crosslink">macro.BlendFactor</a> |
| 定义于 | [cocos2d/core/utils/blend-func.js:44](https://github.com/cocos-creator/engine/blob/2fda22be5638065a190bc4c97da6548631319aba/cocos2d/core/utils/blend-func.js#L44) |

##### 示例

```js
sprite.dstBlendFactor = cc.macro.BlendFactor.ONE;
```





