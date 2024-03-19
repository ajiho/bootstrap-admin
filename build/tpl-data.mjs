import userData from "./register-user-area-data.mjs";
import pkg from '../package.json' assert { type: "json" };

export  default {
  //年份(用于底部版权)
  year:new Date().getFullYear(),
  bsaVersion:'v2.0.1',
  bsVersion:'v5.3.3',
  //注册用户地区分布所需数据
  userData,
  //标题
  title:'bootstrap-admin开源免费响应式后台管理系统模板',
  //描述
  description:'bootstrap-admin基于bootstrap5的免费开源的响应式后台管理模板',
  //关键词
  keywords:'响应式后台模板,开源免费后台模板,bootstrap5后台管理系统模板',
  //作者
  author:pkg.author
}
