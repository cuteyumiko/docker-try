import Vue from 'vue'
import vueResource from 'vue-resource'
import { getCookie, alert_msg } from './utils.js'
import axios from 'axios'
Vue.use(vueResource)

// 获取loginCode
// 为什么不用inteceptor呢，因为项目还有很多老代码用了，为了防止冲突，此处先用回调解决
function getLoginCode(callback) {
    // callback为获取到loginCode后的回调函数
    var SSONAME = getCookie('SSONAME')
    if (!SSONAME || SSONAME== '') {
        alert_msg('请先登录')
        return 
    }
    Vue.resource(HOST_HDPUSER + '/user/toLoginPc').get({
        SSONAME: SSONAME,
        MEMBERTGC: getCookie('MEMBERTGC')
    }).then((response) => {
        if (response.status == 200) {
            Vue.http.options.headers = {
                'loginCode': response.body.respBody.loginCode
            }
            callback()
        }
    })
}



//通用ajax
export const api_get_no = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *callback:事件回调
    */
    var option = {
        url: option.url || '',
        data: option.data || {},
        done: option.done || function () {},
        fail: option.fali || function () {}
    }
    
    // return Vue.resource(option.url).get(option.data)
    return Vue.http.get(option.url,{params:option.data})
    // return axios.get(option.url,{params:option.data})
    
}
export const api_get = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *callback:事件回调
    */
    var option = {
        url: option.url || '',
        data: option.data || {},
        done: option.done || function () {},
        fail: option.fali || function () {}
    }
    getLoginCode(function () {
        return Vue.resource(option.url).get(option.data).then((response) => {
            if (response.status == 200) {
                option.done(response.body)
            }
        }).catch(function(response) {
            option.fail(response)
        })
    })
}

export const api_post = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *  type：传递数据的类型，json为默认，可以是file
    *callback:事件回调
    */
    var option = {
        url: option.url || '',
        data: option.data || {},
        type: option.type || 'json',
        done: option.done || function () {},
        fail: option.fail || function () {}
    }
    getLoginCode(function () {
        // 区分是否为文件，如果是json则发送json数据，不是则发formdata数据
        if (option.type === 'json') {
            Vue.http.options.headers['content-Type'] = 'application/json;charset=UTF-8'
            Vue.http.options.emulateJSON = true;
            return Vue.resource(option.url).save(JSON.stringify(option.data)).then((response) => {
                if (response.status == 200) {
                    option.done(response.body)
                }
            }).catch(function(response) {
                option.fail(response)
            })
        } else {
            Vue.http.options.headers['content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
            Vue.http.options.emulateJSON = true;
            return Vue.resource(option.url).save(option.data).then((response) => {
                if (response.status == 200) {
                    option.done(response.body)
                }
            }).catch(function(response) {
                option.fail(response)
            })
        }
    })
}

// 删除
export const api_delete = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *callback:事件回调
    */
    var option = {
        url: option.url || '',
        data: option.data || {},
        done: option.done || function () {},
        fail: option.fali || function () {}
    }
    getLoginCode(function () {
        return Vue.resource(option.url).remove(option.data).then((response) => {
            if (response.status == 200) {
                option.done(response.body)
            }
        }).catch(function(response) {
            option.fail(response)
        })
    })
}
