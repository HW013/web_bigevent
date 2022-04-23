//在这个函数中可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    //发起真正的ajax请求前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url;
    console.log(options.url);
})