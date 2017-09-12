<template>
  <div class="order-message">

    <div class="order-details-box order-details-box-other" >
      <div class="order-details-box-header">
        <div class="order-time-box">
          <div class="order-time-words">下单时间：</div>
          <div class="order-time" style="color:red">{{orderData.operateTime}}</div>
        </div>
        <div class="order-number-box">
          <div class="order-time-words">订单号：</div>
          <div class="order-time">{{orderData.id}}</div>
        </div>
      </div>
      <!--用户信息-->
      <div class="ueser-msg ueser-msg-other">
        <div class="user-name-box">
          <div class="user-title">收&nbsp;&nbsp;货&nbsp;&nbsp;人：</div>
          <div class="user-name">{{orderData.receiveUsername}}</div>
        </div>
        <div class="phone-box" >
          <div class="user-title">联系方式：</div>
          <div class="user-name">{{orderData.receiveTel}}</div>
          
        </div>
        <div class="address-box">
          <div class="user-title" style="float: left">收货地址：</div>
          <div class="address-words">{{orderData.receiveAddress}}</div>
        </div>
      </div>
      <!--支付信息-->
      <div class="ueser-msg ueser-msg-other">
        <div class="user-name-box" v-if='$route.query.organStatus==2||$route.query.organStatus==3||$route.query.organStatus==10'>
          <div class="user-title">支付方式：</div>
          <div class="user-name" v-if='orderData.payType==0'>余额支付</div>
          <div class="user-name" v-if='orderData.payType==1'>网银支付</div>
          <div class="user-name" v-if='orderData.payType==2'>快捷支付（借记卡）</div>
          <div class="user-name" v-if='orderData.payType==3'>快捷支付（信用卡）</div>
          <div class="user-name" v-if='orderData.payType==4'>认证支付</div>
          <div class="user-name" v-if='orderData.payType==5'>支付宝支付</div>
          <div class="user-name" v-if='orderData.payType==6'>微信支付</div>
          <div class="user-name" v-if='orderData.payType==7'>线下支付</div>
        </div>
        <div class="phone-box" >
          <div class="user-title">支付时间：</div>
          <div class="user-name" v-if='$route.query.organStatus==2||$route.query.organStatus==3||$route.query.organStatus==10'>{{orderData.payTime}}</div>
        </div>
        <div class="address-box" >
          <div class="user-title" style="float: left">支付金额：</div>
          <!--<div class="address-words" v-if='orderData.actualPaidMoney!=null'>¥{{orderData.actualPaidMoney}}</div>
          <div class="address-words" v-if='orderData.actualPaidMoney==null'>¥0</div>!-->
          <div class="address-words" v-if='$route.query.organStatus==2||$route.query.organStatus==3||$route.query.organStatus==10'>
          ¥{{orderData.actualPaidMoney}}</div>
        </div>
      </div>
      <!--订单备注-->
      <div class="remarks-box">
        <div class="remarks-title">订单备注：</div>
        <div class="remarks-words" v-if="orderData.leaveMessage!=null">{{orderData.leaveMessage}} </div>
        <div class="remarks-words" v-if="orderData.leaveMessage==null">暂无 </div>
      </div>
    </div>
    <!--待支付状态-->
    <div class="order-status-box" v-if="organStatus==1">
      <div class="order-status-box-header">订单信息</div>
      <img class="zhuyi" src="../../assets/images/img/orders/zhuyi.png" alt="">
      <div class="status-words">等待支付</div>
      <div class="after-time">剩余时间&nbsp;<last-time  v-cloak   :lastTime="orderData.lastTime"></last-time></div>
      <div class="status-cancel-btn"  @click='cancelOrder'>取消订单</div>
      <router-link   tag='div' class="status-sure-btn" 
      :to="{path:'paymentMethod',query:{orderCode:orderData.orderCode,lastTime:orderData.lastTime}}">付款</router-link>
    </div>
    <!--待发货状态-->
    <div class="order-status-box" v-if="organStatus==2">
      <div class="order-status-box-header">订单信息</div>
      <img class="zhuyi" style="top:186px" src="../../assets/images/img/orders/zhuyi.png" alt="">
      <div class="status-words" style="top:192px" >待发货</div>

    </div>
    <!--待收货状态-->
    <div class="order-status-box" v-if="organStatus==3">
      <div class="order-status-box-header">订单信息</div>
      <img class="zhuyi" style="top:186px" src="../../assets/images/img/orders/zhuyi.png" alt="">
      <div class="status-words" style="top:192px" >待收货</div>

    </div>
    <!--待评价状态-->
    <div class="order-status-box" v-if="organStatus==10">
      <div class="order-status-box-header">订单信息</div>
      <img class="zhuyi" style="top:132px" src="../../assets/images/img/orders/zhuyi.png" alt="">
      <div class="status-words" style="top:140px" >交易完成</div>
      <router-link :to="{path:'orderEvaluate',query:{id:orderData.id}}" class="status-sure-btn" style="left:92px;" v-show="true">去评价</router-link>
    </div>
    <!--已取消-->
    <div class="order-status-box"v-if="organStatus==-1">
      <div class="order-status-box-header">订单信息</div>
      <img class="zhuyi" style="top:186px" src="../../assets/images/img/orders/zhuyi.png" alt="">
      <div class="status-words" style="top:192px" >已取消</div>

    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { api_get, api_post } from '../../utils/api.js'
  import  lastTime  from  '../component-pc/lastTime'
  import { alert_msg } from '../../utils/utils.js'
  export default{
      components:{
        lastTime
      },
      data(){
          return{
              toEvaluate:'',
              paymentMethod:'',
              orderData:{},
              payType:''
          }
      },
      props:['orderId','type','organStatus'],
      mounted(){
       
        this.getDetail();
       
      },
      methods:{
        //获取详情数据
        getDetail(){
            let that=this;
            api_get({
              url: HOST_ORDERS + '/order/front/parentOrOrderDetail',
              data: {
                orderId:that.$route.query.orderId,
                type:that.$route.query.type,
              },
              done: function(res){
              
                that.orderData=res.entity;
               
              }
            }) 
            /*  0：余额支付 1：网银支付 2：快捷支付（借记卡），3：快捷支付（信用卡） 4：认证支付  5：支付宝支付 6：微信支付 7：线下支付*/
        },
        cancelOrder(){
            let that=this;
            api_get({
              url: HOST_ORDERS +'/order/front/cancelOrder',
              data: {
                id:that.$route.query.orderId,
              },
              done: function(res){
                if(res.code==200){
                  alert_msg('取消成功')
                  location.href = HR
                }else{
                  alert_msg('系统出错，请刷新重试')
                }
                
              }
            }) 
        }
      
      }

  }
</script>
<style scoped>
  [v-cloak] {
  display: none;
  }
  .clear:after{
   content:"";
   display:block;
   clear:both;
  }
  .order-message{
    width:1190px;
    overflow: hidden;
  }
  /*订单信息*/
  .order-details-box{
    width:100%;
    border:1px solid #d6d6d6;
    margin-top:30px;
    float: left;
  }
  .order-details-box-header{
    width:100%;
    height:41px;
    background:#f4f4f4;
    border-bottom:1px solid #d6d6d6;

  }
  .order-time-box{
    height:100%;
    float: left;
    margin-left:22px;
    line-height: 40px;


  }
  .order-number-box{
    height:100%;
    float: left;
    margin-left:83px;
    line-height: 40px;

  }
  .order-time-box .order-time-words  {
    height:100%;
    font-size:12px;
    display: inline-block;
    line-height: 40px;
    color:#adadad;
    float: left;

  }
  .order-time-box  .order-time{
    height:100%;
    font-size:12px;
    display: inline-block;
    line-height: 40px;
  }
  .order-number-box{
    height:100%;
    float: left;
    color:#adadad;
  }
  .order-number-box div{
    height:100%;
    font-size:12px;
    display: inline-block;
    line-height: 40px;
    float: left;

  }
  .ueser-msg{
    width:1146px;
    height:102px;
    margin-left:22px;
    border-bottom:1px dashed  #d6d6d6;
    position: relative;
  }
  .ueser-msg-other{
    width:842px;
  }
  .user-msg-other div{
   float:left;

  }
  .user-name-box{
    /*position: absolute;
    top:0;
    left:0;
    height:100%;
    font-size: 0;*/
    float:left;


  }
  .user-title{
    font-size: 14px;
    height:102px;
    color:#adadad;
    line-height: 102px;
    display: inline-block;
    float: left;

  }
  .user-name{
    display: inline-block;
    font-size: 14px;
    height:102px;
    line-height:102px;
    margin-left:10px;
    font-weight: bold;

  }
  .address-box{
    /*height:100%;
    position:absolute;
    top:0;
    left:620px;*/
    float:left;
     margin-left:30px;

  }
  .phone-box{
    /*height:100%;
    position:absolute;
    top:0;
    left:296px;*/
    float:left;
    margin-left:10px;

  }
  .address-words{
    display: inline-block;
    height:30px;
    margin-left:10px;
    font-size:14px;
    text-align: left;
    margin-top:43px;
    font-weight:bold;

  }
  .address-words-other{
    display: inline-block;
    height:30px;
    margin-left:10px;
    font-size:14px;
    text-align: left;
    margin-top:43px;
    font-weight:bold;
  }
  .remarks-box{
    width:1146px;
    height:116px;
    position:relative;
    margin-left:22px;
    border-top:1px solid transparent;
  }
  .remarks-title{
    height:100%;
    position: absolute;
    top:0;
    left:0;
    font-size:14px;
    color:#adadad;
    line-height:116px;
  }
  .remarks-words{
    text-align: left;
    width:494px;
    height:30px;
    margin-top:50px;
    font-size: 14px;
    margin-left:77px;
    font-weight: bold;
  }
  /*添加代付款样式*/
  .order-details-box-other{
    width:886px;
  }
  
 .order-status-box{
   float: left;
   width:284px;
   height:366px;
   border:1px solid #d6d6d6;
   box-sizing: border-box;
   margin-top:30px;
   margin-left:16px;
   position:relative;

 }
  .order-status-box-header{
    width:282px;
    height:42px;
    background:#f4f4f4;
    font-size:12px;
    line-height:42px;
    padding-left:22px;
    border-bottom:1px solid #d6d6d6;
    text-align: left;
    box-sizing: border-box;
  }
  .zhuyi{
    position:absolute;
    top:92px;
    left:73px;
    z-index: 22;
  }
  .status-words{
    font-size:20px;
    font-weight: bold;
    position:absolute;
    top:100px;
    left:128px;
  }
  .after-time{
    font-size:16px;
    color:#adadad;
    position:absolute;
    top:149px;
    left:80px;
  }
  .status-cancel-btn{
    width:100px;
    height:38px;
    box-sizing: border-box;
    border-radius: 5px;
    border:1px solid #d6d6d6;
    font-size:14px;
    line-height: 38px;
    color:#adadad;
    position:absolute;
    top:216px;
    left:33px;
    cursor:pointer;
  }
  .status-sure-btn{
    width:100px;
    height:38px;
    box-sizing: border-box;
    border-radius: 5px;
    background:#ff910b;
    font-size:14px;
    line-height: 38px;
    position:absolute;
    top:220px;
    left:153px;
    cursor:pointer;
    color:#fff;
    font-weight: bold;
  }
</style>

