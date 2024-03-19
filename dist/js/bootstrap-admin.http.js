//发送ajax前的统一设置
$.ajaxSetup({
  //超时时间:5秒
  timeout: 5000,
  //请求头添加参数
  headers: {
    //请求头防止csrf攻击(参考php框架laravel)
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
  },
  //统一返回类型
  dataType: 'json',
})


// 配置进度条插件的小球不要显示
NProgress.configure({showSpinner: false});


/**
 * AJAX请求开始时触发
 */
$(document).on("ajaxSend", function (event, jqXHR, ajaxOptions) {
  // 进度条开始
  NProgress.start();
})


/**
 * AJAX请求完成时触发
 * Tips:建议后端对于ajax请求返回统一json格式,方便我们处理业务逻辑
 * 这里的状态码是我们自己的业务上的code,不是http请求的status那个code
 * 比如:
 * {code:403 msg:'登录过期,重新登录' data:[]}
 * {code:200 msg:'' data:[{...},{...}]}
 * {code:10001 msg:'文章缩略图上传错误' data:[]}
 * 这样我们只要检测到code等于403我们就直接 location.replace('login') 跳转登录页
 */
$(document).on("ajaxComplete", function (event, jqXHR, ajaxOptions) {
  //进度条结束
  NProgress.done();
});


//AJAX 请求发生错误时触发
$(document).on("ajaxError", function (event, jqXHR, ajaxSettings,thrownError) {
  //处理网络错误
  let msg = '';
  const status = jqXHR.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";
  }
  layer.msg(msg, {icon: 5, offset: 't', time: 2000});
})



