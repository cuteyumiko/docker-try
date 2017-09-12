<template>
  <div class="invoice-information">
    <div class="invoice-header">
      <div class="invoice-title">发票信息</div>
    </div>
    <div class="invoice-body">
      <!--<div class="invoice-words-box">
        <div class="invoice-words-container">
          <div class="invoice-title-words">发票类型：</div>
          <div class="invoice-title-words2">电子普通发票</div>
        </div>
        <div class="invoice-words-container" style="margin-left:198px">
          <div class="invoice-title-words">发票抬头：</div>
          <div class="invoice-title-words2">北京网库信息技术股份有限公司</div>
        </div>
        <div class="invoice-words-container" style="margin-left:200px">
          <div class="invoice-title-words">纳税人识别号：</div>
          <div class="invoice-title-words2">36382763879</div>
        </div>
      </div>!-->
      <div class="invoice-words-box">
        <div class="invoice-words-container">
          <div class="invoice-title-words">发票内容：</div>
          <div class="invoice-title-words2" v-if="orderData.invoiceContent!=''">{{orderData.invoiceContent}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { api_get, api_post } from '../../utils/api.js'
  export default{
      data(){
          return{
           orderData:{},

          }
      },
    props:['orderId','type'],
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
                orderId:this.$route.query.orderId,
                type:this.$route.query.type,
              },
              done: function(res){
                that.orderData=res.entity;
              }
            }) 
            /*  0：余额支付 1：网银支付 2：快捷支付（借记卡），3：快捷支付（信用卡） 4：认证支付  5：支付宝支付 6：微信支付 7：线下支付*/
        }
    }
  }
</script>
<style scoped>
  .invoice-information{
    width:100%;
    border:1px solid #d6d6d6;
    margin-top:30px;
  }
  .invoice-header{
    width:100%;
    height:42px;
    background:#f4f4f4;
    border-bottom: 1px solid #d6d6d6;

  }
  .invoice-title{
    font-size: 12px;
    color:#adadad;
    float: left;
    height:100%;
    margin-left:23px;
    line-height: 42px;
  }
  .invoice-body{
    width:1142px;
    height:148px;
    margin-left:24px;
    border-top:1px solid transparent;
  }
  .invoice-words-box{
    width:100%;
    height:14px;
    margin-top:40px;
  }
  .invoice-words-container{
    height:100%;
    font-size: 14px;
    float: left;
  }
  .invoice-title-words{
    color:#adadad;
    line-height:14px;
    text-align: left;
    float: left;
  }
  .invoice-title-words2{
    float: left;
    height:100%;
    line-height:14px;
    margin-left:10px;

  }
</style>
