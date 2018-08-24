## `path` 类型



模块: [cc](../modules/cc.md)


用于处理文件与目录的路径的模块


### 索引



##### 方法

  - [`join`](#join) 拼接字符串为 Path
  - [`extname`](#extname) 返回 Path 的扩展名，包括 '.'，例如 '.png'。
  - [`mainFileName`](#mainfilename) 获取文件名的主名称
  - [`basename`](#basename) 获取文件路径的文件名。
  - [`dirname`](#dirname) 获取文件路径的目录名。
  - [`changeExtname`](#changeextname) 更改文件路径的扩展名。



### Details




<!-- Method Block -->
#### 方法


##### join

拼接字符串为 Path

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/utils/CCPath.js:43](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L43) |


##### 示例

```js
------------------------------
cc.path.join("a", "b.png");        //-->"a/b.png"
cc.path.join("a", "b", "c.png");   //-->"a/b/c.png"
cc.path.join("a", "b");            //-->"a/b"
cc.path.join("a", "b", "/");       //-->"a/b/"
cc.path.join("a", "b/", "/");      //-->"a/b/"

```

##### extname

返回 Path 的扩展名，包括 '.'，例如 '.png'。

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/utils/CCPath.js:59](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L59) |

###### 参数列表
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---------------------------
cc.path.extname("a/b.png");		//-->".png"
cc.path.extname("a/b.png?a=1&b=2");	//-->".png"
cc.path.extname("a/b");			//-->null
cc.path.extname("a/b?a=1&b=2");		//-->null

```

##### mainFileName

获取文件名的主名称

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/utils/CCPath.js:72](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L72) |

###### 参数列表
- `fileName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### basename

获取文件路径的文件名。

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/utils/CCPath.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L89) |

###### 参数列表
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `extname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---------------------------------
cc.path.basename("a/b.png");			//-->"b.png"
cc.path.basename("a/b.png?a=1&b=2");		//-->"b.png"
cc.path.basename("a/b.png", ".png");		//-->"b"
cc.path.basename("a/b.png?a=1&b=2", ".png");	//-->"b"
cc.path.basename("a/b.png", ".txt");		//-->"b.png"

```

##### dirname

获取文件路径的目录名。

| meta | description |
|------|-------------|
| 返回 | Any 
| 定义于 | [cocos2d/core/utils/CCPath.js:110](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L110) |

###### 参数列表
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---------------------------------
* unix
cc.path.driname("a/b/c.png");		//-->"a/b"
cc.path.driname("a/b/c.png?a=1&b=2");	//-->"a/b"
cc.path.dirname("a/b/");		//-->"a/b"
cc.path.dirname("c.png");		//-->""
* windows
cc.path.driname("a\\b\\c.png");		//-->"a\b"
cc.path.driname("a\\b\\c.png?a=1&b=2");	//-->"a\b"

```

##### changeExtname

更改文件路径的扩展名。

| meta | description |
|------|-------------|
| 返回 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| 定义于 | [cocos2d/core/utils/CCPath.js:123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L123) |

###### 参数列表
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `extname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### 示例

```js
---------------------------------
cc.path.changeExtname("a/b.png", ".plist");		//-->"a/b.plist"
cc.path.changeExtname("a/b.png?a=1&b=2", ".plist");	//-->"a/b.plist?a=1&b=2"

```


