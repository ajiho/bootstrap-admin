import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AdminLTS",
  base: "/docs/",
  outDir: "../dist/docs",
  lastUpdated: true,
  cleanUrls: true,
  description: "A VitePress Site",
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  head: [["link", { rel: "icon", href: "favicon.svg", type: "image/svg+xml" }]],

  themeConfig: {
    logo: { src: "/logo-mini.svg", width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
      "/reference/": {
        base: "/reference/",
        items: sidebarReference(),
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ColoristLab/AdminLTS" }],
  },
});

function nav() {
  return [
    {
      text: "指南",
      link: "/guide/what-is-it",
      activeMatch: "/guide/",
    },
    {
      text: "参考",
      link: "/reference/util",
      activeMatch: "/reference/",
    },
    { text: "演示", link: "https://www.adminlts.com/" },
    {
      text: "2.0.0-alpha.1",
      items: [
        {
          text: "变更日志",
          link: "https://github.com/ColoristLab/AdminLTS/blob/main/CHANGELOG.md",
          target: "_blank",
        },
        {
          text: "贡献指南",
          link: "https://github.com/ColoristLab/AdminLTS/blob/main/.github/CONTRIBUTING.md",
          target: "_blank",
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "介绍",
      items: [
        { text: "什么是AdminLTS？", link: "what-is-it" },
        { text: "快速开始", link: "getting-started" },
        { text: "开发经验", link: "experience" },
        { text: "依赖和插件", link: "dependencies" },
        { text: "路线图", link: "roadmap" },
        { text: "迁移指南", link: "migrate" },
        { text: "浏览器支持", link: "browser-support" },
        { text: "开源协议", link: "license" },
        { text: "常见问题", link: "faq" },
      ],
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: "参考",
      items: [
        { text: "util", link: "util" },
        {
          text: "javascript",
          base: "/reference/javascript-",
          items: [
            { text: "fullscreen", link: "fullscreen" },
            { text: "iframe", link: "iframe" },
            { text: "initializer", link: "initializer" },
            { text: "loading", link: "loading" },
            { text: "modal", link: "modal" },
            { text: "navbar-search", link: "navbar-search" },
            { text: "password-toggle", link: "password-toggle" },
            { text: "push-menu", link: "push-menu" },
            { text: "scrollbar", link: "scrollbar" },
            { text: "scrolltop", link: "scrolltop" },
            { text: "tab", link: "tab" },
            { text: "table", link: "table" },
            { text: "toasts", link: "toasts" },
            { text: "treeview", link: "treeview" },
          ],
        },
      ],
    },
  ];
}
