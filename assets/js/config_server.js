// export const SETDOMAIN = 'com'
var SETDOMAIN = 'cn'

// export const HOST_HTTP = 'https'
var HOST_HTTP = 'http'
// export const SETDOMAIN = process.env.NODE_ENV === 'production' ? 'com' : 'cn'
// export const HOST_HTTP = process.env.NODE_ENV === 'production' ? 'https' : 'http'
//商品详情页、商品列表
export const HOST_HDPCOMMODITY = HOST_HTTP+'://hdpcommodity-api.99114.' + SETDOMAIN
//评价
export const HOST_HDPMESSAGE = HOST_HTTP + '://hdpmessage-api.99114.' + SETDOMAIN
//购物车列表
export const HOST_HDPCAR = HOST_HTTP + '://hdpshopcar-api.99114.' + SETDOMAIN
//用户
export const HOST_HDPUSER = 'http://hdpuser-api.99114.' + SETDOMAIN
//订单
export const HOST_ORDERS = 'http://hdporders-api.99114.' + SETDOMAIN
//99114总平台对应的订单列表线上地址
export const HOST_CENTERCOM='http://center.99114.' + SETDOMAIN + '/member?siteType=1&menuType=1&fromUrl=http://hdp.99114.' + SETDOMAIN + '/ordersList'
//99114总品台跳转到好单品PC链接变量
export const HR = 'http://hdp.99114.' + SETDOMAIN
// 获取支付用的信息
export const HOST_WSMS = 'http://wsms-payment.99114.' + SETDOMAIN
//物流信息
export const HOST_LOGISTICS = 'http://wsms-logistics.99114.'+ SETDOMAIN
// 图片上传返回的路径
export const HOST_IMG = 'http://img.99114.' + SETDOMAIN

export const HOST_CHECK = 'http://checkin.99114.' + SETDOMAIN


export const HOST_DOMAIN = '99114.' + SETDOMAIN

// document.domain = '99114.' + SETDOMAIN
// alert(export const location.host)
// if (export const location.host != 'www.haodanpin.com:8081') {
    // document.domain = '99114.' + SETDOMAIN
// }