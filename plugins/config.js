window.SETDOMAIN = 'com'
window.SETDOMAIN = 'cn'

window.HOST_HTTP = 'https'
window.HOST_HTTP = 'http'
// window.SETDOMAIN = process.env.NODE_ENV === 'production' ? 'com' : 'cn'
// window.HOST_HTTP = process.env.NODE_ENV === 'production' ? 'https' : 'http'
//商品详情页、商品列表
window.HOST_HDPCOMMODITY = HOST_HTTP+'://hdpcommodity-api.99114.' + SETDOMAIN
//评价
window.HOST_HDPMESSAGE = HOST_HTTP + '://hdpmessage-api.99114.' + SETDOMAIN
//购物车列表
window.HOST_HDPCAR = HOST_HTTP + '://hdpshopcar-api.99114.' + SETDOMAIN
//用户
window.HOST_HDPUSER = 'http://hdpuser-api.99114.' + SETDOMAIN
//订单
window.HOST_ORDERS = 'http://hdporders-api.99114.' + SETDOMAIN
//99114总平台对应的订单列表线上地址
window.HOST_CENTERCOM='http://center.99114.' + SETDOMAIN + '/member?siteType=1&menuType=1&fromUrl=http://hdp.99114.' + SETDOMAIN + '/ordersList'
//99114总品台跳转到好单品PC链接变量
window.HR = 'http://hdp.99114.' + SETDOMAIN
// 获取支付用的信息
window.HOST_WSMS = 'http://wsms-payment.99114.' + SETDOMAIN
//物流信息
window.HOST_LOGISTICS = 'http://wsms-logistics.99114.'+ SETDOMAIN
// 图片上传返回的路径
window.HOST_IMG = 'http://img.99114.' + SETDOMAIN

window.HOST_CHECK = 'http://checkin.99114.' + SETDOMAIN


window.HOST_DOMAIN = '99114.' + SETDOMAIN

// document.domain = '99114.' + SETDOMAIN
// alert(window.location.host)
// if (window.location.host != 'www.haodanpin.com:8081') {
    // document.domain = '99114.' + SETDOMAIN
// }

