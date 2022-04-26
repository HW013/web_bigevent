//在这个函数中可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    //发起真正的ajax请求前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url;
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    options.complete = function (res) {
        console.log(res);
        if (res.responseJSON.status === 1 && res.responseJSON.
            message === '身份认证失败！') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }
})