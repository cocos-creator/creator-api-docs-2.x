# Cocos Creator Engine API

This repo is for hosting Cocos Creator Engine API website with [Gitbook](https://gitbook.com).

## Requirements

This documentation site is powered by [GitBook](https://www.gitbook.com/). You can check out the online version [here](http://docs.cocos.com/creator/api).

You need [Node.js](https://nodejs.org/en/) and npm to be able to build the site.

To install modules:

```bash
npm install
npm install gitbook-cli -g
```

Install gitbook plugins:

```bash
gitbook install
```

## Markdown Source

The markdown files we use in this repo is generated from [Cocos Creator Engine](https://github.com/cocos-creator/engine) repo, with the help of [Firedoc](https://github.com/cocos-creator/firedoc).

The markdown sources will be put into `en` and `zh` folders according to the language. A list of all sources with link should be generated as `index.md` in each folder.

Change API version. Open `lib/yuidoc.json`, modify `options.version`.

Run the following command to generate markdown files:

```bash
npm run build-md
```

## Preview and Build

To preview the doc, run the following command:

```bash
gitbook serve
```

If you just want to build the markdown to html, use this command:

```bash
gitbook build
```

If you need to publish to the website, you'd better build it on Mac. If use Windows, some redundant .md file will also generated.

See [https://github.com/cocos-creator/creator-docs](https://github.com/cocos-creator/creator-docs) for details of templates.

If you want to quick preview your api docs, there is a command pretty useful.

```bash
npm run preview -- -o file1,file2,file3...
// build completely
npm run preview
```

Please, change the `file1,file2,file3...` to the files' name you want to check, then only the specified files will be rebuilt so you can preview quickly without waiting. And if you to ignore the files' name param, this command will build the complete docs.

这个命令需要你修改 `file1,file2,file3` 为你想要快速构建的文档名称，然后它就会快速构建指定的文档内容，大量减少您预览构建的时间。同时这个命令也支持完整的构建全部文档，只要您在执行时不要填入任何文档名称。

### Create a new api-docs version switch button

If you want to increase a new button to switch the docs, firstly you should have the new version of API docs. Download the new branch engine to your local space, and build the new API docs through by the cmd. 

Then you need to find several files named `book.json` in zh and en file path, changing those version prototypes. Changing the name as your want API version at first, then add you want to create new API version number and link as the new member of the links prototype.

如果你想要创建并且增加一个新的 API 版本，首先你需要构建新版本 API 文档，通过拷贝你需要的 engine 分支到本地目录，由命令行构建出对应的引擎 API 文档，之后你需要在 zh 和 en 文件夹下分别找到名为 `book.json` 的文件，你需要改变文件内的 version 属性，首先是修改 name 属性为你新版本 API 的编号，其次是增加一组新的 links 成员，内容包括你的 API 版本与对应的网址链接。

## Contribution

If you found any error or problem for document contents, or you'd like to submit your modification to the source. Please go to [Cocos Creator engine repo](https://github.com/cocos-creator/engine) and submit a pull request.

You can also just post inline comment when browsering the doc website. We'll update accordingly.