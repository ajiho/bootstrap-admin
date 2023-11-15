export default {
    //预设
    presets: [
        [
            '@babel/preset-env',
            {
                //useBuiltIns+corejs是相辅相成,自动引入新特新的垫片
                useBuiltIns: 'usage',
                corejs: {version: "3.8", proposals: false},
                //禁止转换成其它格式
                modules: false,
                //要移除的垫片(比如你已经知道要兼容的浏览器已经确定支持promise,symbol你就可以把这两个垫片给移除减少生成文件的体积)
                exclude: [
                    'transform-typeof-symbol',
                    'es.promise'
                ]
            }
        ]
    ],
    //插件
    plugins: [
        //将代码中的内联辅助函数替换为从 @babel/runtime 导入的模块。这个插件的作用是减小转译后的代码体积，并避免重复注入辅助函数的代码
        ["@babel/plugin-transform-runtime"]
    ]
}
