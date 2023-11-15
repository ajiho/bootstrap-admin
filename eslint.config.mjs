import globals from 'globals';
import js from '@eslint/js';

export default [
  //继承eslint的推荐规则
  js.configs.recommended,
  {
    //语言选项
    languageOptions: {
      //ecma版本
      ecmaVersion: 2015,
      //资源类型 是模块还是普通的js脚本  module/script
      sourceType: "module",
      //全局变量,比如你在开发jquery插件的时候$,它无法识别，就需要加入到这个全局变量
      globals: {
        ...globals.jquery,
        ...globals.browser,
        ...globals.es2015,
      }
    },
    //插件
    plugins: {
      //这个插件可以根据caniuse来判断你用的api是否在.browserslistrc这个文件的范围内,简洁兼容性问题还是有很用的
      //compat
    },
    //具体规则
    rules: {
      "no-var": 2, // 不能使用 var 定义变量
      "no-unused-vars": 0,//临时关闭未使用变量报错
    }
  }
];
