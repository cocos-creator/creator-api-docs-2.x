## `geomUtils.Line` 类型



模块: [cc](../modules/cc.md)


直线



### 索引

##### 属性（properties）

  - [`s`](#s) `Vec3` 起点。
  - [`e`](#e) `Vec3` 终点。



##### 方法

  - [`create`](#create) 创建一个新的 line。
  - [`clone`](#clone) 克隆一个新的 line。
  - [`copy`](#copy) 复制一个线的值到另一个。
  - [`fromPoints`](#frompoints) 用两个点创建一个线。
  - [`set`](#set) 将给定线的属性设置为给定值。
  - [`len`](#len) 计算线的长度。
  - [`length`](#length) 计算线的长度。



### Details


#### 属性（properties）


##### s

> 起点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/line.ts:147](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L147) |



##### e

> 终点。

| meta | description |
|------|-------------|
| 类型 | <a href="../classes/Vec3.html" class="crosslink">Vec3</a> |
| 定义于 | [cocos2d/core/geom-utils/line.ts:156](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L156) |






<!-- Method Block -->
#### 方法


##### create

创建一个新的 line。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:40](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L40) |

###### 参数列表
- `sx` Unknown The x part of the starting point.
- `sy` Unknown The y part of the starting point.
- `sz` Unknown The z part of the starting point.
- `ex` Unknown The x part of the end point.
- `ey` Unknown The y part of the end point.
- `ez` Unknown The z part of the end point.


##### clone

克隆一个新的 line。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:58](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L58) |

###### 参数列表
- `a` Unknown The source of cloning.


##### copy

复制一个线的值到另一个。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:74](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L74) |

###### 参数列表
- `out` Unknown The object that accepts the action.
- `a` Unknown The source of the copy.


##### fromPoints

用两个点创建一个线。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:91](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L91) |

###### 参数列表
- `out` Unknown The object that accepts the action.
- `start` Unknown The starting point.
- `end` Unknown At the end.


##### set

将给定线的属性设置为给定值。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:108](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L108) |

###### 参数列表
- `out` Unknown The object that accepts the action.
- `sx` Unknown The x part of the starting point.
- `sy` Unknown The y part of the starting point.
- `sz` Unknown The z part of the starting point.
- `ex` Unknown The x part of the end point.
- `ey` Unknown The y part of the end point.
- `ez` Unknown The z part of the end point.


##### len

计算线的长度。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:134](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L134) |

###### 参数列表
- `a` Unknown The line to calculate.


##### length

计算线的长度。

| meta | description |
|------|-------------|
| 返回 | Unknown 
| 定义于 | [cocos2d/core/geom-utils/line.ts:184](https://github.com/cocos-creator/engine/blob/246760b55cfc698ac5f3450a1794d9d0554a0600/cocos2d/core/geom-utils/line.ts#L184) |

###### 参数列表
- `a` Unknown The line to calculate.



