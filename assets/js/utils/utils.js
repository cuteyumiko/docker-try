


// 获取url参数
export const getQueryStringByName = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
// 获取cookie
export const getCookie=function(c_name){
    var arr,reg=new RegExp("(^| )"+c_name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
}
// 序列化对象为url格式

export const url_stringfy = function (param) {
    /*
    *param: json格式
    * 返回值不带问号，请注意
    */
    let url = ''
    for (var k in param) {
        url += '&'+ k + '=' + param[k]
    }
    return url.substr(1)
}


// 弹窗
export const alert_msg = function (param) {
    /*
    *param: 提示文字
    * 返回值不带问号，请注意
    */
    var str = `<div id="alertMsgBox" style="
        width: 310px;
        padding: 20px 8px;
        background: #000;
        opacity: 0.6;
        position: fixed;
        z-index:200;
        top: calc(50% - 50px);
        left: calc(50% - 155px);
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        font-family: Microsoft YaHei;">${param}</div>`
    var div = document.createElement("div");
    div.innerHTML = str;
    document.body.appendChild(div)
    setTimeout(function() {
        document.body.removeChild(div)
    }, 2000);
}
