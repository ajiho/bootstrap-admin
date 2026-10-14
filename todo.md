# Roadmap

- [x] 文档 不能最后再写文档，提前写。
- [x] treeview 把open和close 也加到source 里。
- [x] quicktab插件的下拉菜单的滚动条美化
- [x] treeview的展开和闭合事件添加toggle事件
- [x] 优化scrollbar和scrolltop插件的data的初始化方式
- [x] quicktab测试看看为啥在6上会出问题(现在又不出问题了,很奇怪)
- [x] 侧边栏在折叠的时候tab激活它不会滚动到指定位置(因为没有滚动条),push-menu手动展开时也许可以滚动到激活菜单的位置
- [] 侧边栏如果手动移入它展开时是否应该展开菜单然后滚动到所在位置?做成配置？
- [] 赶紧把event模块 和picocache写出来
- [] treeview的选项测试是否实现，比如animationSpeed和accordion
- [] qtab的特性之一是切换tab滚动条不掉，现在也不掉了，所以为了避免卡顿应该使用display none
- [] 然后再利用lit-html重构一下插件试试
- [] 赶紧搞一个列表页用来展示datatables的v3版本
- [] 完成请求拦截的库，用于编写模拟数据的服务
- [] qtab的是否要支持滚动条滚动完毕后再加载iframe，因为现在的滚动完成后的回调支持已经很好了
- [] qtab的项目隐藏交给css控制，而不是靠js

13
quicktab.open(url,{
target:"_blank"
}) 来代替现有的addtab方法，很美妙。
