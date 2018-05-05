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

## Contribution

If you found any error or problem for document contents, or you'd like to submit your modification to the source. Please go to [Cocos Creator engine repo](https://github.com/cocos-creator/engine) and submit a pull request.

You can also just post inline comment when browsering the doc website. We'll update accordingly.