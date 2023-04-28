<h1 align="center">bootstrap-admin</h1> 

<p align="center">    
    <b>无论您是用于项目开发、学习、毕设、还是教学视频演示、希望能给个star，这将会是我最大的动力!</b>
</p>
<p align="center">    
    <b>如果对您有所帮助，您可以点仓库右上角 "Star" 收藏一下 ，获取第一时间更新，谢谢！</b>
</p>
<p align="center">
<a href="https://www.bootstrap-admin.top/docs/index.html">文档</a> &nbsp;|&nbsp; <a href="https://www.bootstrap-admin.top">Demo</a>
</p>


## 💡  简介

bootstrap-admin是基于bootstrap(5.1.3+)设计的一个响应式纯静态通用后台管理HTML模板,它可以适用于任何后端语言,任何项目的后台管理、只要你有bootstrap的一点点基础就可以轻松上手。旨在让喜欢用bootstrap开发后台管理系统的程序员有个愉悦的起点。


## 🗺️  背景

简单交代一下背景，现在都是全面在拥抱前端框架(国内vue),但是开发一个小系统的后台管理的时候,原本一个后端人员可以用各自后端语言的模板引擎去渲染(curd)就完事了，现在为了跟上现代化，连一个很小的后台管理都要用vue,那么你的开发成本又增加了,你需要先学会vue的基本语法还有vue全家桶(vue-cli、vue-router、vuex)、以及一套前端的ui库吧,比如element ui、element plus(vue3),同时前端现在更新换代特别快

- vue-cli->vite
- vuex->pinia
- vue2->vue3(typescript)

我想这是部分后端人员不愿意面对的,或者说内心是有一点点抵触的，同时我看了一下国内很多后台管理系统都喜欢那种IFrame+多Tab的模式,但是样式却比较古老,
国外开源的后台模板样式虽然好看，但是都是点击刷新一整个页面的，因此在两者之间bootstrap-admin找到了一个平衡点。

> 这里作者的意思并不是说不学前端那一套了,还是鼓励让更多的偏向后端的程序员去多接触一些东西，跟上时代的脚步，bootstrap-admin只是传统开发后台方式的视图层的一个解决方案。

## ✨  特性

- 高度响应式、一站匹配手机、平板、pc
- 界面整体简约、大气、流畅不卡顿
- 集成开发中常用的优秀的开源js插件
- 严格区分bootstrap-admin和bootstrap的样式,bootstrap-admin的样式都是以`bsa`开头
- 没有修改bootstrap底层样式,体验原汁原味的bootstrap
- 紧跟bootstrap官方的更新步伐

## 💬  交流

- [Q群1:284169647](https://jq.qq.com/?_wv=1027&k=WmCK50m5)
- [Q群2:719667795](https://jq.qq.com/?_wv=1027&k=aQ5vUuVC)


## 🌱 版本对应

| bootstrap-admin版本 | bootstrap版本 |
|-------------------|-------------|
| v1.x              | v5.1.3      |
| v2.x(开发中)         | v5.3.0-alpha3 |


##  📁 目录结构

开发项目时,只需要保留`dist`、`lib`即可,这里我把login、404页面提到仓库最外层你可以想象成
后台主页是需要登录后才能访问的，404则是整个项目路由地址找不到时都会访问的页面。

```
├─build               构建目录
├─dist                生产文件目录
│  ├─css                 生产css目录
│  ├─img                 生产img目录
│  └─js                  生产js目录
├─docs                文档目录
├─lib                 外部依赖目录
├─pages               示例页面目录
├─.browserslistrc     共用目标浏览器配置文件
├─.stylelintrc.json   stylelint配置文件
├─composer.json       composer 定义文件
├─gulpfile.mjs        gulpfile打包配置文件
├─index.html          主页面
├─404.html            404页面
├─login.html          登录页面
├─LICENSE.txt         授权说明文件
├─package.json        npm 定义文件
├─README.md           README 文件
```


## 🛠️ 安装

### 发布页面

[下载地址](https://gitee.com/ajiho/bootstrap-admin/releases)

### composer

~~~bash
composer require ajiho/bootstrap-admin
~~~

### npm

~~~bash
npm i bootstrap-admin
~~~
### yarn

```bash
yarn add bootstrap-admin
```
### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-admin/dist/css/bootstrap-admin.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap-admin/dist/js/bootstrap-admin.min.js"></script>
```

##  🚩 编译生产文件

要编译 dist 文件，您需要 Node.js/npm，然后克隆/下载 repo：

- npm install
- npm run production(编译css/js文件)


## ☘️ 开源协议

MIT、bootstrap-admin 保留更改未来版本许可的权利。

