import Mock from 'mockjs'
import $ from 'jquery'

//拓展
import './extend';


$(document).ajaxSend(function(event, xhr, options) {
  console.log('bootstrap-admin请求 URL：', options.url);
});

// ajax请求结束，打印一下结果方便看数据调试
$(document).ajaxComplete(function (event, xhr, options) {
    try {
        console.log('bootstrap-admin响应数据:');
        console.log(JSON.parse(xhr.responseText));
    } catch (e) {
        //
        console.log('mock数据错误')
    }
});


//Mock的配置延时设置
Mock.setup({
    timeout: '600-800'
})


//导入各种mock模拟
import './login';
import './user';
import './logout';
import './ztree';
import './node';
import './role';
import './msg';
import './select2';
