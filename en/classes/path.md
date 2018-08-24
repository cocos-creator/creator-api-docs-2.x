## `path` Class



Module: [cc](../modules/cc.md)


The module provides utilities for working with file and directory paths


### Index



##### Methods

  - [`join`](#join) Join strings to be a path.
  - [`extname`](#extname) Get the ext name of a path including '.', like '.png'.
  - [`mainFileName`](#mainfilename) Get the main name of a file name
  - [`basename`](#basename) Get the file name of a file path.
  - [`dirname`](#dirname) Get dirname of a file path.
  - [`changeExtname`](#changeextname) Change extname of a file path.



### Details




<!-- Method Block -->
#### Methods


##### join

Join strings to be a path.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/utils/CCPath.js:43](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L43) |


##### Examples

```js
------------------------------
cc.path.join("a", "b.png");        //-->"a/b.png"
cc.path.join("a", "b", "c.png");   //-->"a/b/c.png"
cc.path.join("a", "b");            //-->"a/b"
cc.path.join("a", "b", "/");       //-->"a/b/"
cc.path.join("a", "b/", "/");      //-->"a/b/"

```

##### extname

Get the ext name of a path including '.', like '.png'.

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/utils/CCPath.js:59](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L59) |

###### Parameters
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
---------------------------
cc.path.extname("a/b.png");		//-->".png"
cc.path.extname("a/b.png?a=1&b=2");	//-->".png"
cc.path.extname("a/b");			//-->null
cc.path.extname("a/b?a=1&b=2");		//-->null

```

##### mainFileName

Get the main name of a file name

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/utils/CCPath.js:72](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L72) |

###### Parameters
- `fileName` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### basename

Get the file name of a file path.

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/utils/CCPath.js:89](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L89) |

###### Parameters
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `extname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
---------------------------------
cc.path.basename("a/b.png");			//-->"b.png"
cc.path.basename("a/b.png?a=1&b=2");		//-->"b.png"
cc.path.basename("a/b.png", ".png");		//-->"b"
cc.path.basename("a/b.png?a=1&b=2", ".png");	//-->"b"
cc.path.basename("a/b.png", ".txt");		//-->"b.png"

```

##### dirname

Get dirname of a file path.

| meta | description |
|------|-------------|
| Returns | Any 
| Defined in | [cocos2d/core/utils/CCPath.js:110](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L110) |

###### Parameters
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

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

Change extname of a file path.

| meta | description |
|------|-------------|
| Returns | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
| Defined in | [cocos2d/core/utils/CCPath.js:123](https://github.com/cocos-creator/engine/blob/4f734a806d1fd7c4073fb064fddc961384fe67af/cocos2d/core/utils/CCPath.js#L123) |

###### Parameters
- `pathStr` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- `extname` <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

##### Examples

```js
---------------------------------
cc.path.changeExtname("a/b.png", ".plist");		//-->"a/b.plist"
cc.path.changeExtname("a/b.png?a=1&b=2", ".plist");	//-->"a/b.plist?a=1&b=2"

```


