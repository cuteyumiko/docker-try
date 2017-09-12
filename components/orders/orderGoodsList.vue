<template>
  <div class="order-goods-list">
    <div class="invoice-header">
      <div class="invoice-title">商品信息</div>
      <div class="header-title" style="margin-left:432px">单价</div>
      <div class="header-title" style="margin-left:114px">数量</div>
      <div class="header-title" style="margin-left:115px">小计</div>
      <div class="header-title" style="margin-left:129px">包裹</div>
      <div class="header-title" style="margin-left:134px">操作</div>
    </div>
    <div>
      <div class="goods-list-body"  v-for='(item,index) in orderData'>
        <div class="goods-list-box" >
          <div class="list-first-box">
            <div class="goods-img-box">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="goods-wodrs-box">
              <div class="goods-msg">{{item.pdName}}</div>
              <div class="goods-Specifications">商品规格</div>
            </div>
           <!--  <span class="tuikuan" 
            v-if='$route.query.organStatus != 1&&$route.query.organStatus != -1&&$route.query.organStatus != -2' 
            @click='tip(item.id,item.pdPrice)'>退款</span> -->
            <a  class="tuikuan"
             v-if='$route.query.organStatus != 1
             &&$route.query.organStatus != -1
             &&$route.query.organStatus != -2&& item.status == 3' 
             :href="HR+'/afterSell?itemId='+item.orderId+'&pdSpce='+item.pdSpce+'&pdId='+item.pdId"
             target="_blank"
            >退款</a>
             <a class="tuikuan"
             v-if='$route.query.organStatus != 1&&$route.query.organStatus != -1
             &&$route.query.organStatus != -2&& item.status != 3' 
             :href="HR+'/refundWhy?itemId='+item.orderId+'&pdSpce='+item.pdSpce+'&pdId='+item.pdId" 
              target="_blank"
             >退款</a>
          </div>
          <div class="list-two-box">¥{{item.pdPrice}}</div>
          <div class="list-two-box" style="left:618px">{{item.pdQuantity}}</div>
          <div class="list-two-box" style="left:758px">¥{{orderInfo.totalAmount}}</div>
        </div>
        
        <div class="goods-baoguo">
          <div class="goods-baoguo-box">
            <div class="goods-baoguo-words1" v-if='item.logisticsNo!==null'>包裹{{index+1}}</div>
            <div class="goods-baoguo-words1" v-if='item.logisticsNo==null && $route.query.organStatus!=-1'>未发货</div>
            <div class="goods-baoguo-words1" v-if='$route.query.organStatus==-1'>未付款</div>
            <div class="goods-baoguo-words2" v-if='item.logisticsNo!==null' @click="toLogistics(item.logisticsNo)">查看物流</div>
          </div>
        </div>
        <div class="goods-baoguo" style="left:1027px;border:none">
          <div class="goods-baoguo-box" >
            <div class="goods-baoguo-words1" v-if='$route.query.organStatus==1'>待支付</div>
            <div class="goods-baoguo-words1" v-if='item.logisticsNo==null &&$route.query.organStatus!=-1&&$route.query.organStatus!=1'>待发货</div>
            <div class="goods-baoguo-words1" v-if='item.status==2'>待收货</div>
            <div class="goods-baoguo-words1" v-if='$route.query.organStatus==10 ||item.status==3'>交易完成</div>
            <div class="goods-baoguo-words1" v-if='$route.query.organStatus==-1'>交易取消</div>
            <div class="goods-baoguo-words1" v-if='$route.query.organStatus==-2'>交易关闭</div>
            <div class="goods-baoguo-words2-other" v-show='item.status==2' @click="sureOrders(item.packageId)">确认收货</div>
          </div>
        </div>
      </div> 
    </div>

    <div class="goods-list-footer">
      <div class="list-footer-first">商品合计:<span class="first-price">¥{{orderInfo.totalAmount}}</span></div>
      <div class="list-footer-two">运费:<span class="first-price">¥{{orderInfo.costFreight}}</span></div>
      <div class="list-footer-two"v-if="orderInfo.pdActivity!=null">满减:<span class="first-price" >¥{{orderInfo.pdActivity}}</span></div>
       <div class="list-footer-two">满减:<span class="first-price" v-if="orderInfo.pdActivity==null">¥0</span></div>
      <div class="list-footer-three">
      <span v-if='$route.query.organStatus==1||$route.query.organStatus==-1'>待付款：</span>
      <span v-if='$route.query.organStatus==2||$route.query.organStatus==3||$route.query.organStatus==10'>已付款：</span>
      <span class="two-price">¥{{orderInfo.actualMoney}}</span></div>
    </div>
    <!--物流信息-->
    <div class="logistics" v-if="showLogistics">
      <img @click="sureLogistics" src="../../assets/images/img/orders/closeLogo.png" class="logistics-close" alt="">
      <div class="logistics-title" >查看物流</div>
      <div class="logistics-logo-box">
        <img src="../../assets/images/img/orders/logisticsLogo.png" alt="" class="logistics-logo">
        <div class="logistics-id-box">
          <div class="logistics-company to-top">
            <div class="logistics-company-title">物流公司：</div>
            <div class="logistics-company-name">{{logisticsData[0].companyNum}}</div>
          </div>
          <div class="logistics-company margin-top">
            <div class="logistics-company-title">快递单号：</div>
            <div class="logistics-company-name">{{logisticsData[0].expressNo}}</div>
          </div>
        </div>
      </div>
      <div class='logisticsContent'>
          <div class="logistics-msg-box" >
            <div class="logistics-msg" v-for='item in logisticsData'>
              <div class="logistics-msg-left">
                <div class="year-month-day">{{timestampTime(item.expressTime+"","-")}}</div>
              
              </div>
              <div class="logistics-msg-right">
                <div class="left-radius"></div>
                <div class="right-words">{{item.context}}</div>
              </div>
            </div>
          </div>
      </div>
      
      <div class="logistics-sure-btn" @click="sureLogistics">确定</div>
    </div>
    <div class="alert-cover" v-if="showCover"></div>
    <!--确认收货-->
    <div class="orders-alert" v-if="showAlert">
      <div class="alert-body">
        <img @click="cancleAlert" src="../../assets/images/img/orders/closeLogo.png" alt="" class="close-logo">
        <div class="alert-words">请确定您已收到了商品</div>
        <div class="alert-btn-cancel" @click="cancleAlert">取消</div>
        <div class="alert-btn-sure" @click="sureAlert()">确定</div>
      </div>
    </div>

    <!--弹框布局start-->
      <div class="bug-alert" v-if="showBugAlert">
        <div class="bug-cover"></div>
        <div class="bug-alert-box">
          <div class="alert-box-header">扫描二维码退款</div>
          <img src="../../assets/images/img/close-icon.png" class='close-icon' alt="" @click="closeAlert">
          <!--<img src="../assets/img/ewm.png" alt="" class="erweima">-->
          <div id="qrcode" ></div>
          <div class="words-tishi">扫描二维码退款</div>
        </div>
      </div>
      <!--弹框布局end-->

  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { api_get, api_post } from '../../utils/api.js'
  import { alert_msg } from '../../utils/utils.js'
  export default{
      data(){
          return{
            detailsTime:'',
            loginCode:'',
            showCover:false,
            showLogistics:false,
            showAlert:false,
            orderData:[],
            orderInfo:{},
            noSendList:[],
            notPayList:[
              {}
            ],
            logisticsData:[
              {
                companyNum:'',
                expressNo:""
              }
            ],
            showBugAlert: false,
            packageId:'',
            HR:HR
          }
      },
    mounted(){
       this.getDetail();
    },
    props:['orderId','type','organStatus'],
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
                let list = []
                that.orderInfo=res.entity;
                if(res.entity.packageEntityList !=null && res.entity.packageEntityList.length!=0){
                  let arr =[]
                  res.entity.packageEntityList.forEach(e=> {
                    e.items.forEach(ele=>{
                      ele.status = e.status
                    })
                    arr = arr.concat(e.items)
                  })
                  list = list.concat(arr);//已发货
                }
                if(res.entity.notSendList != null && res.entity.notSendList.length!=0){
                  list = list.concat(res.entity.notSendList);//未发货
                }
                if(res.entity.notPayList!=null&& res.entity.notPayList.length!=0){
                  list = list.concat(res.entity.notPayList);//未付款
                }
                that.orderData = list
                console.log(that.orderData);
                
              }
            }) 
      },
      getlogistics(packageId){
          let that=this;
          api_get({
              url: HOST_LOGISTICS + '/wk/wsms/third/getTradeExpressInfo.json',
              data: {
               expressNo:packageId
              },
              done: function(res){
                if(res.result.length > 0){
                  that.logisticsData=res.result;
                  that.showCover=true
                  that.showLogistics=true
                }else{
                  alert_msg('暂无物流信息，请稍后查询')
                }
                
              }
          }) 
      },
      timestampTime(timestamp ,separator){
            
            var result = "";  
            if(timestamp) {  
                var reg = new RegExp(/\D/, "g"); //提取数字字符串  
                var timestamp_str = timestamp.replace(reg, "");  
  
                var d = new Date();  
                d.setTime(timestamp_str);  
                var year = d.getFullYear();  
                var month = d.getMonth() + 1;  
                var day = d.getDate();  
                if(month < 10) {  
                    month = "0" + month;  
                }  
                if(day < 10) {  
                    day = "0" + day;  
                }  
                result = year + separator + month + separator + day;  
            }  
           
            return result; 
      },
      // 点击查看物流
      toLogistics:function(logisticsId){
        
        // document.body.scrollTop=0;
        this.getlogistics(logisticsId);
      },
        //点击物流详情确定按钮
      sureLogistics:function(){
        this.showCover=false
        this.showLogistics=false

      },
      //      确认收货
      sureOrders:function(packageId){
        this.showAlert=true;
        this.showCover=true;
      
        this.packageId = packageId;
      },
      //      点击提示框取消按钮
      cancleAlert:function(){
        if (this.showAlert==true){
          this.showAlert=false
          this.showCover=false
        }
      },
        //      点击提示框确定按钮 确认收货
      sureAlert:function(packageId){
        // if (this.showAlert){
          let that=this;
          api_get({
              url: HOST_ORDERS + '/order/front/affirmReceiveByPackage',
              data: {
               id:this.packageId
              },
              done: function(res){
                if(res.code==200){
                   alert_msg("确认收货成功！");
                  location.href=HR;
                  that.showAlert=false
                  that.showCover=false
                }
                
              },
              fail:function(res){
                alert_msg("系统有误，请稍后重试");
              }
          })
          
        // }
      },
      // 退款
      tip(id,pdPrice){
        // alert_msg("请返回微信端提交申退！");
        this.showBugAlert=true
        this.$nextTick(()=>{
          $("#qrcode").qrcode({
            width:230,
            height:230,
            // text:"http://m.haodanpin.com/#/return_money_apply?orderItemId="+id+'&refundMoney='+pdPrice+'&refundType=1'
            text:'http://m.haodanpin.com/#/myIndex'
          })
        })
      },
      // 关闭弹窗
      closeAlert:function(){
        this.showBugAlert=false
      },
    }
  }
</script>
<style scoped>
  .order-goods-list{
    width:100%;
    margin-top:30px;
    border:1px solid #d6d6d6;
    margin-bottom:100px;
  }
  .invoice-header{
    width:100%;
    height:42px;
    background:#f4f4f4;
    position:relative;

  }
  .invoice-title{
    font-size: 12px;
    float: left;
    height:100%;
    margin-left:23px;
    line-height: 42px;
  }
  .header-title{
    font-size: 12px;
    float: left;
    height:100%;
    line-height: 42px;
  }
  .goods-list-body{
    width:1190px;
    position: relative;
    border-bottom:1px solid #d6d6d6;
    border-top:1px solid #d6d6d6;
  }

  .goods-list-box{
    height:130px;
    width:819px;
    border-bottom:1px dashed #d6d6d6;
    position:relative;
    margin-left:24px;
  }
  .list-first-box{
    height:100%;
    float: left;
    width:378px;
    position:relative;
  }
  .goods-img-box{
    float: left;
    width:78px;
    height:78px;
    border:1px solid #d6d6d6;
    margin-top:25px;
  }
  .goods-img-box img{
    display: inline-block;
    height:78px;
    width:78px;
  }
  .goods-wodrs-box{
    float: left;
    width:266px;
    height:100%;
    margin-left:30px;

  }
  .goods-msg{

    width:266px;
    font-size:14px;
    line-height: 16px;
    margin-top:35px;
    text-align: left;
  }
  .goods-Specifications{
    font-size: 12px;
    color:#adadad;
    margin-top:23px;
    text-align: left;
  }

  .tuikuan{
    width:58px;
    height:26px;
    border:1px solid #adadad;
    border-radius: 2px;
    color:#adadad;
    font-size: 14px;
    letter-spacing: 1px;
    position:absolute;
    top:84px;
    right:0;
    line-height: 26px;
  }
  .tuikuan:hover{
    border:1px solid #fe920c;
    color:#fe991c;
    cursor: pointer;
  }
  .list-two-box{
    height:100%;
    font-size: 14px;
    line-height: 130px;
    position: absolute;
    top:0;
    left:477px;
  }
  .goods-baoguo{
    position:absolute;
    top:0;
    left:867px;
    width:162px;
    font-size:14px;
    height:100%;
    border-left:1px solid #d6d6d6;
    border-right:1px solid #d6d6d6;


  }
  .goods-baoguo-box{
    position: absolute;
    top: 50%;
    left: 50%;
    width:100%;
    -webkit-transform: translateX(-50%) translateY(-50%);
  }
  .goods-baoguo-words1{
      font-size:14px;
      line-height: 14px;
    }
   .goods-baoguo-words2{
    font-size:14px;
    line-height: 14px;
     color:#7583ca;
     margin-top:12px;
     cursor:pointer;
  }
  .goods-baoguo-words2-other{
    width:100px;
    height:30px;
    border-radius: 2px;
    background:#fe920c;
    color:#fff;
    font-size:14px;
    line-height: 30px;
    margin-top:12px;
    text-align: center;
    margin-left:31px;
    cursor:pointer;


  }
  /*详情页尾部*/
  .goods-list-footer{
    border-top:1px solid transparent;
    width:1190px;
    height:200px;
   background:#f4f4f4;

  }
  .list-footer-first{
    width:100%;
    height:14px;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    padding-right:42px ;
    box-sizing: border-box;
    margin-top:38px;
  }
  .list-footer-two{
    width:100%;
    height:14px;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    padding-right:42px ;
    box-sizing: border-box;
    margin-top:21px;
  }
 .first-price{
   margin-left:28px;
 }
  .two-price{
    margin-left:37px;
    color:#d13239;
    font-size:20px
  }
  .list-footer-three{
    width:100%;
    height:20px;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    padding-right:42px ;
    box-sizing: border-box;
    margin-top:27px;
  }
  /*遮罩层*/
  .alert-cover{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#000;
    opacity: 0.5;
    z-index: 2;
  }
  /*物流信息*/
  .logistics{
    width:700px;
    height:500px;
    overflow-y: auto;
    z-index: 4;
    border-top:1px solid transparent;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    background:#fff;
    -webkit-transform: translateX(-50%) translateY(-50%);
  }
  .logistics-title{
    width:649px;
    height:18px;
    line-height:18px;
    font-size: 18px;
    margin-top:39px;
    margin-left:51px;
    text-align: left;
  }
  .logistics-close{
    position:absolute;
    top:20px;
    right:20px;
    z-index: 5;
    cursor: pointer;
  }
  .logistics-logo-box{
    width:600px;
    height:52px;
    margin-left: 51px;
    margin-top:21px;
    padding-bottom:30px;
    border-bottom:1px solid #d6d6d6;
  }
  .logistics-logo{
    float: left;
  }
  .logistics-id-box{
    width:500px;
    height:50px;
    float: left;
    margin-left:22px;
  }
  .logistics-company{
    width:100%;
    height:14px;
    line-height: 14px;
    font-size: 14px;
    border:1px solid transparent;
  }
  .logistics-company-title{
    float: left;
  }
  .logistics-company-name{
    float: left;
    color:#adadad;
    margin-left:6px;
  }
  .logisticsContent{
    height: 300px;
    overflow-y:auto;
  }
  .margin-top{
    margin-top:11px;
  }
  .to-top{
    margin-top:5px;
  }
  .logistics-msg-box{
    width:506px;
    overflow: hidden;
    margin-left:60px;
    margin-top:10px;
    font-size: 0;
    height:400px;
    overflow-y:auto;
  }
  .logistics-msg{
    width:100%;
    font-size: 14px;


  }
  .logistics-msg-left{
    width:106px;
    float: left;
  }
  .year-month-day,.hour-time{
    height:14px;
    line-height: 14px;
    text-align: left;
  }
  .hour-time{
    color:#adadad;
    margin-top:6px;

  }
  .logistics-msg-right{
    width:370px;
    border-left:1px dashed #d6d6d6;
    float: left;
    position: relative;
    padding-bottom:20px;

  }

  .left-radius{
    width:12px;
    height:12px;
    background:#999999;
    position: absolute;
    top:0;
    left:-6px;
    border-radius: 50%;
    z-index: 10;
  }
  .right-words{
    text-align: left;
    margin-left:24px;
  }
  .logistics-sure-btn{
    width:140px;
    height:44px;
    border-radius: 2px;
    background:#fe920c;
    font-size: 14px;
    color:#fff;
    line-height: 44px;
    letter-spacing: 1px;
    margin-left:280px;
    margin-top:82px;
    margin-bottom:41px;
    cursor: pointer;
  }
  /*确认收货*/
  .orders-alert{
    width:100%;
    height:100%;
  }
  .alert-cover{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#000;
    opacity: 0.5;
    z-index: 2;
  }
  .alert-body{
    width:440px;
    height:280px;
    background:#fff;
    position: fixed;
    z-index: 3;
    top:calc(50% - 200px);
    left:calc(50% - 220px);
  }
  .close-logo{
    position: absolute;
    right:20px;
    top:20px;
    z-index: 4;
    cursor: pointer;
  }
  .alert-words{
    width:100%;
    height:14px;
    line-height: 14px;
    margin-top:79px;
    font-size:14px;
  }
  .alert-btn-cancel,.alert-btn-sure{
    width:142px;
    height:42px;
    border:2px solid #fe920c;
    border-radius: 2px;
    line-height:42px;
    font-size: 14px;
    cursor: pointer;
  }
  .alert-btn-cancel{
    position:absolute;
    left:62px;
    top:156px;
    color:#fe920c;
  }
  .alert-btn-sure{
    position:absolute;
    left:245px;
    top:156px;
    background:#fe920c;
    color:#ffffff;
  }

  /* 二维码css，后续不需要二维码提示了，可删除 */
  .bug-alert{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 2;
  }
  .bug-cover{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: #333;
    opacity:0.4;
    z-index: 3;
  }
  .bug-alert-box{
    width:367px;
    height:494px;
    background:#fff;
    position:fixed;
    top:calc(50% - 248px);
    top:-webkit-calc(50% - 248px);
    left:calc(50% - 184px);
    left:-webkit-calc(50% - 184px);
    z-index: 4;
    /*border:2px solid #8c8fa0;*/
    box-shadow:1px 1px 2px 2px #8c8fa0
  }
  .alert-box-header{
    width:100%;
    height:50px;
    background:#a8b1db;
    font-size:20px;
    color:#fff;
    line-height:50px;
  }
  .close-icon{
    position: absolute;
    width:18px;
    height:18px;
    z-index: 5;
    right:13px;
    top:16px;
    cursor: pointer;
  }
  .erweima{
    display: inline;
    width:322px;
    height:257px;
    margin-top:58px;
    margin-left:21px;
  }
  .words-tishi{
    width:100%;
    font-size:20px;
    color:#333;
    margin-top:20px;
  }
  #qrcode canvas{
    margin-top:58px;
    margin-left:2px;
  }
  /* 二维码css结束 */
</style>
