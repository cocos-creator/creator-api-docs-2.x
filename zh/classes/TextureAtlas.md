## `TextureAtlas` Class



Module: [cc](../modules/cc.md)
Parent Module: [cc](../modules/cc.md)




<p>A class that implements a Texture Atlas. <br />
Supported features: <br />
The atlas file can be a PNG, JPG. <br />
Quads can be updated in runtime <br />
Quads can be added in runtime <br />
Quads can be removed in runtime <br />
Quads can be re-ordered in runtime <br />
The TextureAtlas capacity can be increased or decreased in runtime.</p>

### Index

##### Properties

  - [`dirty`](#dirty) `Boolean` Indicates whether or not the array buffer of the VBO needs to be updated.
  - [`texture`](#texture) `Texture2D` Image texture for cc.TextureAtlas.
  - [`capacity`](#capacity) `Number` Quantity of quads that can be stored with the current texture atlas size.
  - [`totalQuads`](#totalquads) `Number` Quantity of quads that are going to be drawn.
  - [`quads`](#quads) `Array` Quads that are going to be rendered.



##### Methods

  - [`constructor`](#constructor) <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
The TextureAtlas capacity can be increased in runtime. </p>
Constructor of cc.TextureAtlas
  - [`getTotalQuads`](#gettotalquads) Quantity of quads that are going to be drawn.
  - [`getCapacity`](#getcapacity) Quantity of quads that can be stored with the current texture atlas size.
  - [`getTexture`](#gettexture) Texture of the texture atlas.
  - [`setTexture`](#settexture) Set texture for texture atlas.
  - [`setDirty`](#setdirty) specify if the array buffer of the VBO needs to be updated.
  - [`isDirty`](#isdirty) whether or not the array buffer of the VBO needs to be updated.
  - [`getQuads`](#getquads) Quads that are going to be rendered.
  - [`setQuads`](#setquads) 
  - [`initWithFile`](#initwithfile) <p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
The TextureAtlas capacity can be increased in runtime.<br />
WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p>
  - [`initWithTexture`](#initwithtexture) <p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
with an initial capacity for Quads.<br />
The TextureAtlas capacity can be increased in runtime.<br />
WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p>
  - [`updateQuad`](#updatequad) <p>Updates a Quad (texture, vertex and color) at a certain index <br />
index must be between 0 and the atlas capacity - 1 </p>
  - [`insertQuad`](#insertquad) <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
index must be between 0 and the atlas capacity - 1 </p>
  - [`insertQuads`](#insertquads) <p>
     Inserts a c array of quads at a given index                                           <br />
     index must be between 0 and the atlas capacity - 1                                    <br />
     this method doesn't enlarge the array when amount + index > totalQuads                <br />
</p>
  - [`insertQuadFromIndex`](#insertquadfromindex) <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
This operation is faster than removing and inserting in a quad in 2 different steps</p>
  - [`removeQuadAtIndex`](#removequadatindex) <p>Removes a quad at a given index number.<br />
The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p>
  - [`removeQuadsAtIndex`](#removequadsatindex) Removes a given number of quads at a given index.
  - [`removeAllQuads`](#removeallquads) <p>Removes all Quads. <br />
The TextureAtlas capacity remains untouched. No memory is freed.<br />
The total number of quads to be drawn will be 0</p>
  - [`resizeCapacity`](#resizecapacity) <p>Resize the capacity of the CCTextureAtlas.<br />
The new capacity can be lower or higher than the current one<br />
It returns YES if the resize was successful. <br />
If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
no used for js</p>
  - [`increaseTotalQuadsWith`](#increasetotalquadswith) Used internally by CCParticleBatchNode                                    <br/>
don't use this unless you know what you're doing.
  - [`moveQuadsFromIndex`](#movequadsfromindex) Moves an amount of quads from oldIndex at newIndex.
  - [`fillWithEmptyQuadsFromIndex`](#fillwithemptyquadsfromindex) Ensures that after a realloc quads are still empty                                <br/>
Used internally by CCParticleBatchNode.
  - [`drawNumberOfQuads`](#drawnumberofquads) <p>Draws n quads from an index (offset). <br />
n + start can't be greater than the capacity of the atlas</p>



### Details


#### Properties


##### dirty

> Indicates whether or not the array buffer of the VBO needs to be updated.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:698](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L698) |



##### texture

> Image texture for cc.TextureAtlas.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:704](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L704) |



##### capacity

> Quantity of quads that can be stored with the current texture atlas size.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:710](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L710) |



##### totalQuads

> Quantity of quads that are going to be drawn.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:717](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L717) |



##### quads

> Quads that are going to be rendered.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:724](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L724) |






<!-- Method Block -->
#### Methods


##### constructor

<p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
The TextureAtlas capacity can be increased in runtime. </p>
Constructor of cc.TextureAtlas

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:47](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L47) |

###### Parameters
- fileName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> &#124; <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
- capacity <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/TextureAtlas.js

##### getTotalQuads

Quantity of quads that are going to be drawn.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:77](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L77) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getCapacity

Quantity of quads that can be stored with the current texture atlas size.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:87](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L87) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### getTexture

Texture of the texture atlas.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:96](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L96) |
| Return 		 | <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 



##### setTexture

Set texture for texture atlas.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:105](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L105) |

###### Parameters
- texture <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 


##### setDirty

specify if the array buffer of the VBO needs to be updated.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:114](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L114) |

###### Parameters
- dirty <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


##### isDirty

whether or not the array buffer of the VBO needs to be updated.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:123](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L123) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### getQuads

Quads that are going to be rendered.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:132](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L132) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 



##### setQuads



| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:141](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L141) |

###### Parameters
- quads <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### initWithFile

<p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
The TextureAtlas capacity can be increased in runtime.<br />
WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:203](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L203) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- file <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- capacity <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/initWithFile.js

##### initWithTexture

<p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
with an initial capacity for Quads.<br />
The TextureAtlas capacity can be increased in runtime.<br />
WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:224](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L224) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- texture <a href="../classes/Texture2D.html" class="crosslink">Texture2D</a> 
- capacity <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

##### Example

```Not found for the example path: utils/api/engine/docs/cocos2d/core/textures/initWithTexture.js

##### updateQuad

<p>Updates a Quad (texture, vertex and color) at a certain index <br />
index must be between 0 and the atlas capacity - 1 </p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:265](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L265) |

###### Parameters
- quad <a href="../classes/V3F_C4B_T2F_Quad.html" class="crosslink">V3F_C4B_T2F_Quad</a> 
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### insertQuad

<p>Inserts a Quad (texture, vertex and color) at a certain index<br />
index must be between 0 and the atlas capacity - 1 </p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:281](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L281) |

###### Parameters
- quad <a href="../classes/V3F_C4B_T2F_Quad.html" class="crosslink">V3F_C4B_T2F_Quad</a> 
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### insertQuads

<p>
     Inserts a c array of quads at a given index                                           <br />
     index must be between 0 and the atlas capacity - 1                                    <br />
     this method doesn't enlarge the array when amount + index > totalQuads                <br />
</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:308](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L308) |

###### Parameters
- quads <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- amount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### insertQuadFromIndex

<p>Removes the quad that is located at a certain index and inserts it at a new index <br />
This operation is faster than removing and inserting in a quad in 2 different steps</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:348](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L348) |

###### Parameters
- fromIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- newIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeQuadAtIndex

<p>Removes a quad at a given index number.<br />
The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:381](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L381) |

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeQuadsAtIndex

Removes a given number of quads at a given index.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:402](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L402) |

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- amount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### removeAllQuads

<p>Removes all Quads. <br />
The TextureAtlas capacity remains untouched. No memory is freed.<br />
The total number of quads to be drawn will be 0</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:424](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L424) |



##### resizeCapacity

<p>Resize the capacity of the CCTextureAtlas.<br />
The new capacity can be lower or higher than the current one<br />
It returns YES if the resize was successful. <br />
If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
no used for js</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:439](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L439) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- newCapacity <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### increaseTotalQuadsWith

Used internally by CCParticleBatchNode                                    <br/>
don't use this unless you know what you're doing.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:513](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L513) |

###### Parameters
- amount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### moveQuadsFromIndex

Moves an amount of quads from oldIndex at newIndex.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:523](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L523) |

###### Parameters
- oldIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- amount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- newIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### fillWithEmptyQuadsFromIndex

Ensures that after a realloc quads are still empty                                <br/>
Used internally by CCParticleBatchNode.

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:567](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L567) |

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- amount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


##### drawNumberOfQuads

<p>Draws n quads from an index (offset). <br />
n + start can't be greater than the capacity of the atlas</p>

| meta | description |
|------|-------------|
| Defined | [https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js:591](https:/github.com/cocos-creator/engine/blob/master/cocos2d/core/textures/CCTextureAtlas.js#L591) |

###### Parameters
- n <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
- start <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



