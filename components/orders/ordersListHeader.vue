<template>
  <div class="list-header">
    <!--全部订单-->
    <div class=" header-title header-active" @click="diffTitle(0)" v-if="organStatus==0">
      <div class="header-title-words">全部订单</div>
      <div class="header-title-device"></div>
    </div>
    <div class=" header-title" @click="diffTitle(0)" v-if="organStatus!=0">
      <div class="header-title-words">全部订单</div>
      <div class="header-title-device"></div>
    </div>
    <!--待付款-->
    <div class="header-title header-active" @click="diffTitle(1)" v-if="organStatus==1">
      <div class="header-title-words">待付款</div>
      <span class="header-count"  v-if="waitingPayNum != 0">{{waitingPayNum}}</span>
      <div class="header-title-device"></div>
    </div>
    <div class="header-title" @click="diffTitle(1)" v-if="organStatus!=1">
      <div class="header-title-words">待付款</div>
      <span class="header-count"  v-if="waitingPayNum != 0">{{waitingPayNum}}</span>
      <div class="header-title-device"></div>
    </div>

    <!--待发货-->
    <div class="header-title header-active" @click="diffTitle(2)" v-if="organStatus==2">
      <div class="header-title-words">待发货</div>
      <span class="header-count"  v-if="waitingSendGoodsNum != 0">{{waitingSendGoodsNum}}</span>
      <div class="header-title-device"></div>
    </div>
    <div class="header-title" @click="diffTitle(2)" v-if="organStatus!=2">
      <div class="header-title-words">待发货</div>
      <span class="header-count"  v-if="waitingSendGoodsNum != 0">{{waitingSendGoodsNum}}</span>
      <div class="header-title-device"></div>
    </div>

    <!--待收货-->
    <div class="header-title header-active" @click="diffTitle(3)" v-if="organStatus==3">
      <div class="header-title-words">待收货</div>
      <span class="header-count" v-if="waitingReceiveNum != 0">{{waitingReceiveNum}}</span>
      <div class="header-title-device"></div>
    </div>
    <div class="header-title" @click="diffTitle(3)" v-if="organStatus!=3">
      <div class="header-title-words">待收货</div>
      <span class="header-count" v-if="waitingReceiveNum != 0">{{waitingReceiveNum}}</span>
      <div class="header-title-device"></div>
    </div>
    <!--待评价-->
    <div class="header-title header-active" @click="diffTitle(10)" v-if="organStatus==10">
      <div class="header-title-words">待评价</div>
      <span class="header-count" v-if="finishedNum != 0">{{finishedNum}}</span>
    </div>
    <div class="header-title" @click="diffTitle(10)" v-if="organStatus!=10">
      <div class="header-title-words">待评价</div>
      <span class="header-count" v-if="finishedNum != 0">{{finishedNum}}</span>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default{
      name:'ordersListHeader',
    props: ['organStatus'],
      data(){
          return{
              ordersNum:'',
              //  待支付订单
            waitingPayNum:'',
            // 待发货
            waitingSendGoodsNum:'',
            // 待收货
            waitingReceiveNum:'',
            //  待评价
            finishedNum:'',
            pageNumber:1,
            allList:[],
            noOrdersMsg:'',
            showNoOrders:'',
            showNoOrdersDiff:'',
            loginCode:''

          }
      },
      mounted(){
        this.getLoginCode()
        let windowUrl=window.location.href.substring(window.location.href.lastIndexOf('/')+1)
        if (windowUrl=='ordersList'){
          window.localStorage.setItem('organStatus',0)
        }
        //      if (window.localStorage.getItem('showNoOrders')){
        //        this.showNoOrdersDiff=window.localStorage.getItem('showNoOrders')
        //      }
      },
      methods:{
        //  获取loginCode
        getLoginCode:function(){
          if ( this.userName2!=''&&this.canshu2!=''){
            let url=HOST_HDPUSER+'/user/toLoginPc'
            this.$resource(url).get({SSONAME:this.userName2,MEMBERTGC:this.canshu2}).then((response) => {
              if (response.status == 200) {
                let userId=response.body.respBody.userId
                this.loginCode=response.body.respBody.loginCode
                window.localStorage.setItem('userId',userId)
                this.getOrdersNum()
              }
            })

        }
      },
      //    点击切换title
      diffTitle:function(i){
          if (this.ordersNum!=''){
            if (i==0){
              window.localStorage.setItem('organStatus',0)
               window.location.href =HR+'/ordersList'
            }else if (i==1){
              window.localStorage.setItem('organStatus',1)
              if (this.waitingPayNum!=0){
                this.showNoOrders=false
                window.localStorage.setItem('showNoOrders', this.showNoOrders)
              }else{
                this.showNoOrders=true
                window.localStorage.setItem('showNoOrders', this.showNoOrders)
              }
                window.localStorage.setItem('orderNumber',this.waitingPayNum)
                window.location.href = HR+'/ordersList?organStatus=1&orderNumber='+this.waitingPayNum
              }else if (i==2){
                window.localStorage.setItem('organStatus',2)
                if (this.waitingSendGoodsNum!=0){
                  this.showNoOrders=false
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }else{
                  this.showNoOrders=true
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }
                window.localStorage.setItem('orderNumber',this.waitingSendGoodsNum)
                window.location.href =HR+'/ordersList?organStatus=2&orderNumber='+this.waitingSendGoodsNum
              }else if (i==3){
                 window.localStorage.setItem('organStatus',3)
                if (this.waitingReceiveNum!=0){
                  this.showNoOrders=false
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }else{
                  this.showNoOrders=true
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }
                window.localStorage.setItem('orderNumber',this.waitingReceiveNum)
                window.location.href =HR+'/ordersList?organStatus=3&orderNumber='+this.waitingReceiveNum
              }else if (i==10){
                window.localStorage.setItem('organStatus',10)
                if (this.finishedNum!=0){
                  this.showNoOrders=false
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }else{
                  this.showNoOrders=true
                  window.localStorage.setItem('showNoOrders', this.showNoOrders)
                }
                window.localStorage.setItem('orderNumber',this.finishedNum)
                window.location.href =HR+'/ordersList?organStatus=10&orderNumber='+this.finishedNum;
            }
          }

      },
      //      请求各种订单数量
      getOrdersNum:function(){
          let _this=this
          let url = HOST_ORDERS+'/order/front/getOrderNums'
          Vue.http.interceptors.push((request, next)  =>{
            request.headers.set('loginCode',_this.loginCode);
            next((response) => {
              return response
            });
          });
          this.$resource(url).get({loginCode: _this.loginCode}).then((response) => {
              if (response.status == 200) {
                if(response.data.code==200){
                  _this.ordersNum = response.data.respBody
                  _this.waitingPayNum= _this.ordersNum.waitingPayNum
                 
                  _this.waitingSendGoodsNum=_this.ordersNum.waitingSendGoodsNum
                  _this.waitingReceiveNum=_this.ordersNum.waitingReceiveNum
                  _this.finishedNum=_this.ordersNum.finishedNum


                }
            }
          })
      },



    }
  }
</script>
<style scoped>
  .list-header{
    width:958px;
    height:44px;
    margin-top:26px;
    font-family: "Microsoft YaHei";
    margin-left:14px;
  }
  .header-title{
    line-height:42px;
    float: left;
    width:120px;
    text-align: center;
    border-bottom: 2px solid #d6d6d6;
    position: relative;
    font-size: 0;
    cursor: pointer;
  }
  .header-title-device{
    height:14px;
    width:1px;
    background: #d6d6d6;
    position:absolute;
    right:0;
    top:16px;


  }
  .header-active{
    border-bottom: 2px solid #ff910b;
    color:#ff910b;
  }
  .header-title-words{
    display: inline-block;
    font-size:18px;
  }
  .header-count{
    color:#ff910b;
    font-size:18px;
    margin-left: 8px;
  }

</style>
