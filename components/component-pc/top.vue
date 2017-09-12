// top.vue
<template>
  <div class="hpd_top">
    <div class="w1190 hdp_top_warp">
      <!--<i class="H_address fl"></i>-->
      <h2 class="fl H_top_title">
        <!--<strong>北京</strong><span>|</span>-->
        尊敬的顾客{{messagePC}}您好，欢迎来到
        <a href="">网库好单品</a>
      </h2>
      <ul class="fr">
        <div v-if="isLogin" class="login-box">
          <li><a :href="loginUrl" id="loginPc">登录</a></li>
          <li><a href="http://register.99114.com/register/gotoRegisterStart?siteId=1&backUrl=http://www.haodanpin.com">注册</a></li>
        </div>
        <!--登录logo及购物车信息start-->
        <router-link to="/">
        <a href="" class="shop_car_goHome" v-if="showGoHome">返回首页</a>
        </router-link>
        <div v-if="!isLogin" class="user-box" >

          <div class="logo-box">
            <img class="ueser_logo" src="../../assets/images/img/userIcon-pc.png" alt="">
            <span class="user_name">{{userName}}</span>
          </div>
        </div>
        <li class="noPadding" v-if="!isLogin">|</li>
        <span class="user_name" @click="toOrdersList" style="margin-left:15px;cursor:pointer;float: left">
                 我的订单<span class="shop-car-count" v-if="showcarListLength"></span>
                 <img class='xiala'src="../../assets/images/img/down_arrow.png" alt="">
        </span>


         <div v-if="!isLogin" class="user-box car-box">

          <div class="logo-box">

            <img class="ueser_logo" src="../../assets/images/img/shopCar-pc.png" alt="">
            <router-link to="/shopCarPc">
            <span class="user_name">
              我的采购单<span class="shop-car-count" v-if="showcarListLength">{{carListLength}}</span><span class="shop-car-count" v-if="showdetailCount">{{detailCount}}</span>
              <span class="shop-car-count" v-if="showfromSerach">{{fromSerach}}</span><span class="shop-car-count" v-if="showListLengthPC">{{listLengthPC}}</span>

              <img class='xiala'src="../../assets/images/img/down_arrow.png" alt="">
            </span>
            </router-link>
          </div>
        </div>

        <!--登录logo及购物车信息end-->
        <li class="noPadding">|</li>
        <li class="downApp" @click="showErweima">
          <div href="">APP</div><i></i>
        </li>

      </ul>
      <img src="../../assets/images/img/erapp.jpg" id="erweima" v-if="showSao">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  // import { getCookie } from '../../utils/utils.js'
  import axios from 'axios'
  export default{
    name:'hdpTop',
    props: ['messagePC','listLengthPC','detailCount','fromSerach'],
    data(){
      return {
        showSao:false,
        isLogin:true,
        carList:'',
        carListLength:null,
        loginUrl:'',
        userName:'',
        canshu:'',
        loginCode:'',
        showGoHome:false,
        showcarListLength:true,
        showdetailCount:false,
        showfromSerach:false,
        showListLengthPC:false
      }
    },

    mounted(){

      let domain_cas=HOST_CHECK
      // let _ur = HR
      let _ur = HR + window.location.pathname
      this.loginUrl = domain_cas + "/login?source=1&service=" + encodeURIComponent(_ur);

      this.getUserName()
      this. getLoginCode()
      // this.getCarList()
      

      let winHref=window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
      if (winHref==''){
        this.showGoHome=false
      }else if (winHref=='shopCarPc'){
        this.showcarListLength=false
        this.showdetailCount=false
        this.showGoHome=true
        this.showfromSerach=false
        this.showListLengthPC=true
      }else if (winHref=='serachlist'){
        this.showGoHome=true
        this.showfromSerach=true
        this.showcarListLength=false
        this.showdetailCount=false
        this.showListLengthPC=false
      }
      else{
        this.showGoHome=true
        this.showcarListLength=false
        this.showdetailCount=true
        this.showfromSerach=false
        this.showListLengthPC=false
      }
    },
    methods:{
//  查看订单列表
      toOrdersList:function () {
        if (this.loginCode!=''&&this.loginCode!=null){
        //  99114总平台列表页正式地址
         window.location.href = HOST_CENTERCOM
        }else{
          let domain_cas=HOST_CHECK
          let _ur = HR
          window.location.href = domain_cas + "/login?source=1&service=" + encodeURIComponent(_ur);
        }
      },
//        获取loginCode
      getLoginCode:function(){
        if ( this.userName!=''&&this.canshu!=''){
          let url=HOST_HDPUSER+'/user/toLoginPc'
          // this.$resource(url).get({SSONAME:this.userName,MEMBERTGC:this.canshu}).then((response) => {
          //   if (response.status == 200) {
          //     let userId=response.body.respBody.userId
          //     this.loginCode=response.body.respBody.loginCode
          //     window.localStorage.setItem('loginCode',this.loginCode)
          //     window.localStorage.setItem('userId',userId)

          //   }
          // })
          axios.get(url,{params:{
            SSONAME:this.userName,MEMBERTGC:this.canshu
          }}).then((response)=>{
            if (response.code == 200) {
              let userId=response.data.respBody.userId
              this.loginCode=response.data.respBody.loginCode
              window.localStorage.setItem('loginCode',this.loginCode)
              window.localStorage.setItem('userId',userId)

            }
          })

        }
      },
      // 获取用户名
      getUserName:function(){
        if (this.getCookie('SSONAME')){
          this.userName = this.getCookie('SSONAME');
          this.canshu=this.getCookie('MEMBERTGC');
          this.isLogin=false
        }
      },
      //封装从cookie获取会员账号函数
      getCookie(c_name){
        var arr,reg=new RegExp("(^| )"+c_name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
          return unescape(arr[2]);
        else
          return null;
      },

      showErweima:function(){
        if (this.showSao==false){
          this.showSao=true
        }else{
          this.showSao=false
        }
        let body=document.getElementById('app')


      },
//      获取采购单长度
      //      获取采购单列表
      getCarList:function(){
        let _this = this
        setTimeout(function(){
          let url = HOST_HDPCAR + '/shopcar/list';
          _this.loginCode= window.localStorage.getItem('loginCode')
          //添加header start
          // Vue.http.interceptors.push((request, next)  =>{
          //   request.headers.set('loginCode', _this.loginCode);
          //   next((response) => {
          //     return response
          //   });
          // });
          //添加header end
          // _this.$resource(url).get({pageNum:1,version:"v1.2"}).then((response) => {
          //   if (response.status == 200) {
          //     if(response.body.respBody != null){
          //       _this.carList=response.body.respBody.list
          //     }
          //     if (_this.carList.length!=0){
          //       for(let i=0;i<_this.carList.length;i++){
          //         _this.carListLength+=parseInt(_this.carList[i].goodsNum)
          //       }
          //       window.localStorage.setItem('carListLength', _this.carListLength)
          //     }else{
          //       _this.carListLength=0
          //       window.localStorage.setItem('carListLength', _this.carListLength)
          //     }
          //   }
          // })
        },700)

      },
    }
  }
</script>
<style scoped>
.hpd_top {
  width: 100%;
  height: 31px;
  background-color: #f8f8f8;
}
.hdp_top_warp {
  position: relative;
  height: 31px;
}
.hdp_top_warp .H_address {
  margin: 8px 4px 0 2px;
  width: 11px;
  height: 13px;
  background: url(../../assets/images/img/address.png) no-repeat;
}
.hdp_top_warp .H_top_title {
  font-size: 12px;
  font-weight: normal;
  line-height: 31px;
  color: #555;
  float: left;
}
.hdp_top_warp .H_top_title strong {
  font-weight: normal;
}
.hdp_top_warp .H_top_title span {
  padding: 0 10px;
  color: #eee;
}
.hdp_top_warp .H_top_title a {
  color: #ff6300;
}
.hdp_top_warp ul {
  line-height: 31px;
  float: right;
}
.hdp_top_warp ul li {
  padding: 0 16px;
  float: left;
}
.hdp_top_warp ul li a:hover {
  color: #6878c6;
}
.hdp_top_warp ul li.noPadding {
  padding: 1px;
  color: #eee;
}
.hdp_top_warp ul li.downApp {
  position: relative;
}
.downApp div{
  cursor: pointer;
}
.hdp_top_warp ul li.downApp i {
  position: absolute;
  top: 12px;
  right: 0;
  width: 8px;
  height: 4px;
  background: url("../../assets/images/img/down_arrow.png") no-repeat;
}
  #erweima{
    display: block;
    width: 210px;
    height: 210px;
    z-index: 100;
    position:absolute;
    top: 31px;
    right: 0;
  }
/*购物车样式start*/
.user-box{
  float: left;
  font-size:0;
}
.ueser_logo{
  display: inline-block;
  width:12px;
  height:12px;
  vertical-align: middle;
  margin-bottom:8px;
  margin-right:8px;
}
.user_name{
  display: inline-block;
  font-size:12px;
  margin-right:10px;

}
.shop-car-count{
  font-weight: bold;
  color:#fe920c;
}
.car-box{
  margin-left:8px;
  cursor: pointer;
}
.xiala{
  margin-left:4px;
}
.login-box{
  float: left;
}
.shop_car_goHome{
  float: left;
  font-size:12px;
  margin-right:20px;
}
</style>
