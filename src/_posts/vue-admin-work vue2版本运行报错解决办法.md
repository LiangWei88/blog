---
category: 前端笔记
tags:
  - 框架
  - vue
  - vue2
  - javascript
  - npm
date: 2023-02-13 11:42:07
title: vue-admin-work vue2版本运行报错解决办法
---
在使用 vue-admin-work vue2版本时, 报 codemirror 错误.

```bash
These dependencies were not found:

* codemirror/addon/display/fullscreen.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/addon/display/placeholder.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/addon/edit/continuelist.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/addon/mode/overlay.js in ./node_modules/simplemde/src/js/simplemde.js   
* codemirror/addon/selection/mark-selection.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/mode/gfm/gfm.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/mode/markdown/markdown.js in ./node_modules/simplemde/src/js/simplemde.js
* codemirror/mode/xml/xml.js in ./node_modules/simplemde/src/js/simplemde.js

To install them, you can run: npm install --save codemirror/addon/display/fullscreen.js codemirror/addon/display/placeholder.js codemirror/addon/edit/continuelist.js codemirror/addon/mode/overlay.js codemirror/addon/selection/mark-selection.js codemirror/mode/gfm/gfm.js codemirror/mode/markdown/markdown.js codemirror/mode/xml/xml.js 
```
<!-- more -->

# 原因
这个框架其中用到了一个库 simplemde 已经很久没有更新, 偏偏当时这个库的依赖版本定义又使用了 * 符号, 使得安装时自动装上最新版, 产生了兼容问题.  

如果你使用 npm i 来安装依赖包, 因为 package-lock.json 文件锁定了版本的原因不会发生报错, 但是如果你是习惯使用 yarn 或者 pnpm 等其他包管理工具, 会自动安装最新版依赖导致报错.  

# 解决
## 最简单
删除当前的 node_modules 文件夹  
然后重新 npm i 安装依赖  
记得每次都只能使用 npm 来安装依赖
## 一劳永逸
simplemde 这个库连原仓库代码都已经废弃, 于是我拿了他的源码, 修改了其中的依赖版本重新发布, 可以替换使用就不会有问题了
### 安装
`npm`
```bash
npm uninstall simplemde
npm i simplemde-w
```
`yarn`
```bash
yarn remove simplemde
yarn add simplemde-w
```

`pnpm`
```bash
pnpm remove simplemde
pnpm add simplemde-w
```

### 使用
全局搜索, 将引入 simplemde 的地方替换成 simplemde-w 即可  
例如
```js
// import 'simplemde/dist/simplemde.min.css'
// import SimpleMDE from 'simplemde'
// 替换成
import 'simplemde-w/dist/simplemde.min.css'
import SimpleMDE from 'simplemde-w'
```

不知道有没有解决你的问题, 如果有其他解决方案, 欢迎留言分享.