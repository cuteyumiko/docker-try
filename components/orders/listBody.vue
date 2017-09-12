<template>
<div>
  <div class="list-header1">
    <div class=" header-title " 
    v-for="(item,index) in headerData" :key="index"
     @click="diffTitle(item.organStatus,index)"
    :class="{'header-active':index==headerIndex}"
    >
      <div class="header-title-words">{{item.title}}</div>
      <span class="header-count" v-if="!item.num==0">{{item.num}}</span>
      <div class="header-title-device"></div>
    </div>
  </div>
  <div class="list-body">
      <div class="list-header" v-show="listData.length != 0">
        <div class="list-header-words" style=" margin-left:228px;">商品</div>
        <div class="list-header-words" style=" margin-left:229px;">包裹</div>
        <div class="list-header-words" style=" margin-left:101px;">状态</div>
        <div class="list-header-words" style=" margin-left:116px;">实付款</div>
        <div class="list-header-words" style=" margin-left:98px;">操作</div>

      </div>
      <div class="big-box" v-cloak v-for="(item,index) in listData" :key="index">
        <!--列表头部-->
        <div class="list-body-header">
          <div class="order-time">
            <span class="order-time-title">下单时间：</span>
            <span class="order-time-year">{{item.operateTime}}</span>
          </div>
          <div class="order-time" style="margin-left:51px;">
            <span>订单号：</span>
            <span>{{item.id}}</span>
          </div>
          <div class="deleted-order" v-if="false"></div>
        </div>
        <!--列表内容区-->
        <div class="total-box" v-for="(item2,index2)  in  item.packages" :key="index2" >
          <div class="content-box">
            <div class="googs-left">
              <div class="goods-img-container">
                <img :src="item3.imgUrl" v-for='item3 in item2.itemsExt'>
                <span class="img-more" v-if="item2.itemsExt.length>3">....</span>
                <div class="goods-message" >{{item2.itemsExt[0].pdName}}</div>
              </div>
              <div class="baoguo-box">
                <div style="margin-top:46px;">
                  <!-- <div class="baoguo-num">{{item2.packageId}}</div> -->
                  
                  <div class="baoguo-count">共{{item2.itemsExt.length}}种商品</div>
                  <div class="baoguo-wuliu" v-if="item2.itemsExt[0].logisticsNo!=null" @click="toLogistics(item2.itemsExt[0].logisticsNo)">查看物流</div>
                </div>

              </div>
              <div class="status-box">
                
                
                <!-- <div class="baoguo-num">{{item2.packageId}}</div> -->
                <div class="status-msg">{{item2.name}}</div>
                <!-- <div class="status-go" v-if="item2.packageId!=null&&item.organStatus==3" @click="sureOrders(item2.packageId)">确认收货</div> -->
                <div class="status-go" v-if="item2.status==2&&item.packageId!=null" @click="sureOrders(item2.packageId)">确认收货</div>
              </div>
            </div>
          </div>

          <!--实付款-->
          <div class="money-total" >
            <div class="money-box"v-show="index2===0">
              <div class="money-total1">¥{{item.actualMoney}}</div>
              <div class="money-total2">（含运费：¥{{item.costFreight}}）</div>
            </div>
          </div>
          <!--操作-->
          <div class="operation-box" v-if="organStatus!=0"  v-show="index2===0">
            <div class="operation">
              <div class="operation-time" v-if="item.organStatus==1"><last-time :lastTime="item.lastTime"></last-time></div>
              <div class="operation-msg" v-if="item.organStatus==1" @click="toPay(index)">去付款
                <!--<a :href="details" style="color:#fff" target="_blank"></a>!-->
              </div>
              <a  class="operation-msg" :href="toEvaluate+item.id" v-if="item.organStatus == 10" target="_blank" v-show="index2===0 ">评价</a>
              <div class="operation-go-next" @click="toDetail(index)" v-if="item.organStatus!=1">
                <a :href="item.detailsUrl" style="color:#7a9fcc" target="_blank">{{operationMsg}}</a>
              </div>
              <div class="operation-go-next" @click="toCancel(index)" v-if="item.organStatus == 1">{{operationMsg}}</div>
              <div class="operation-go-next"  >
                <a :href="item.detailsUrl" style="color:#7a9fcc" target="_blank" v-show="index2===0" v-if="item.organStatus!=2 && item.organStatus!=10">查看详情</a>
              </div>
            </div>
          </div>
          <div class="operation-box" v-if="organStatus==0"   v-show="index2===0">
            <div class="operation">
              <div class="operation-time" v-if="item.organStatus==1"><last-time :lastTime="item.lastTime"></last-time></div>
              <div class="operation-msg"   v-if="item.organStatus==1" @click="toPay(index)">去付款
                <!--<a :href="paymentMethod" style="color:#fff" target="_blank"></a>!-->
              </div>
              <a class="operation-msg" target="_blank" :href="toEvaluate+item.id" v-if="item.organStatus==10" v-show="index2===0 ">评价</a>
              <div class="operation-go-next" v-if="item.organStatus==1" @click="toCancel(index)">取消订单</div>
              <div class="operation-go-next"  >
              <a :href="item.detailsUrl" style="color:#7a9fcc" target="_blank" v-show="index2===0" >查看详情</a>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      <paginate
        v-if="listData.length != 0"
        :page-count="pageCount"
        :click-handler="callbackfunction"
        :prev-text="'上一页'"
        :next-text="'下一页'"
        :initial-page="0"
        :container-class="'pagination'">
      </paginate>
      <!--无订单页面-->
      <div class="no-orders-box" v-if="listData.length == 0">
        <img src="../../assets/images/img/orders/noOrdersLogo.png">
        <div class="no-orders-words">当前无{{noOrdersMsg}}订单</div>
      </div>
      <!--遮罩层-->
      <div class="alert-cover" v-if="showCover"></div>
      <!--确认收货提示弹框-->
      <div class="orders-alert" v-if="showAlert">
        <div class="alert-body">
          <img @click="cancleAlert" src="../../assets/images/img/orders/closeLogo.png" alt="" class="close-logo">
          <div class="alert-words">请确定您已收到了商品</div>
          <div class="alert-btn-cancel" @click="cancleAlert">取消</div>
          <div class="alert-btn-sure" @click="sureAlert">确定</div>
        </div>
      </div>
      <!--物流信息-->
      <div class="logistics" v-if="showLogistics">
        <img @click="sureLogistics" src="../../assets/images/img/orders/closeLogo.png" class="logistics-close" alt="">
        <div class="logistics-title" >查看物流</div>
        <div class="logistics-logo-box">
          <img src="../../assets/images/img/orders/logisticsLogo.png" alt="" class="logistics-logo">
          <div class="logistics-id-box"  v-if='logisticsData.length!=0'>
            <div class="logistics-company to-top">
              <div class="logistics-company-title">物流公司：</div>
              <div class="logistics-company-name" v-cloak>{{logisticsData[0].companyNum}}</div>
            </div>
            <div class="logistics-company margin-top">
              <div class="logistics-company-title">快递单号：</div>
              <div class="logistics-company-name"  v-cloak>{{logisticsData[0].expressNo}}</div>
            </div>
          </div>
          <div class="logistics-id-box"  v-if='logisticsData.length==0'>
            暂时无物流信息
          </div>
        </div>
        <div class='logisticsContent'>
          <div class="logistics-msg-box" v-for='item in logisticsData'>
            <div class="logistics-msg">
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
      <!--取消订单提示弹框-->
      <div class="cancel-box" v-if="showCancelBox">
        <img src="../../assets/images/img/orders/closeLogo.png" class="cancel-close" alt="" @click="cancelClose">
        <div class="cancel-tishi">您确定要取消订单吗？取消订单后，不能恢复</div>
        <!--<div class="cancel-select-box">
          <div class="select-title" >请选择取消订单的理由：</div>
          <div class="select-value-box" >
              <div class="select-value" @click="clickSelect">请选择取消订单原因</div>
              <div class="select-option-box" v-if="showMoreWhy">
                <div class="select-option" @click='selectoption'>下单下错了</div>
                <div class="select-option" @click='selectoption'>不想买了</div>
              </div>
          </div>
        </div>!-->
        <div class="cancel-close-btn"  @click="cancelClose">关闭</div>
        <div class="cancel-close-sure" @click="cancelSure">确定</div>
      </div>
    </div>
  </div>
  

</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'

  import { api_get, api_post } from '../../utils/api.js'
  import { alert_msg } from '../../utils/utils.js'
  import  lastTime  from  '../component-pc/lastTime'
  import "../../assets/css/pagination.css"
  export default{
      name:'listBody',
      components:{
         lastTime
      },
      data(){
          return{
            headerData:[
              {active: true, organStatus: 0, title:'全部订单',num:''},
              {active: false, organStatus: 1, title:'待付款',num:''},
              {active: false, organStatus: 2, title:'待发货',num:''},
              {active: false, organStatus: 3, title:'待收货',num:''},
              {active: false, organStatus: 10, title:'待评价',num:''},
            ],
            headerNum:{
              '0':'',
              '1':'waitingPayNum',
              '2':'waitingSendGoodsNum',
              '3':'waitingReceiveNum',
              '4':'finishedNum'
            },
            headerIndex:0,
            organStatus:'',
            listData:[
              {packages: [
                {itemsExt:[
                  {imgUrl:''}
                ]}
              ],
              detailsUrl:''
              }
            ],
            someNumber:1,
            statusMsg:'',
            operationMsg:'',
            orderNumber:'',
            // 包裹id
            packageId:'',
            noOrdersMsg:'',
            showNoOrdes:false,
            showAlert:false,
            showCover:false,
            showLogistics:false,
            loginCode:'',
            detailsUrl:'',
            showMoreWhy:false,
            showCancelBox:false,
            toEvaluate:'',
            cancelorderId:'', // 取消订单id;
            organStatusObj: {
              '1': '待支付',
              '2': '待发货',
              '3': '待收货',
              '10': '交易完成',
              '-1': '交易取消',
              '-2': '交易关闭',
            },
            logisticsData:[
              {
                companyNum:'',
                expressNo:''
              },
            ],
           pageCount:0
          }
      },
      mounted(){
        this.getLoginCode()
        this.toEvaluate=HR+'/orderEvaluate?id='
        this.getOrdersNum()
        this.diffTitle(0,0)
      },
      methods:{
        // 获取所有数量
        getOrdersNum(){
          let that=this;
          api_get({
                url: HOST_ORDERS+'/order/front/getOrderNums',
                data: {},
                done: function(res){
                  that.headerData = that.headerData.map((e,i)=>{
                    e.num = res.respBody[that.headerNum[i]]
                    return e
                  })
                }
          })
        },
        // 切换头部和获取订单列表
        diffTitle(organStatus,index,pageNum){
          var pageNum =pageNum||0
          this.organStatus = organStatus
          this.headerIndex = index
          this.someNumber = pageNum;

          if (this.organStatus==1){
            this.statusMsg='待付款'
            this.operationMsg='取消订单'
            this.noOrdersMsg='待付款'
          }else if (this.organStatus==10){
            this.statusMsg='待评价'
            // this.operationMsg=''
            this.operationMsg='查看详情'
            this.noOrdersMsg='待评价'
          }else if (this.organStatus==2){
            // this.operationMsg=''
            this.operationMsg='查看详情'
            this.statusMsg='待发货'
            this.noOrdersMsg='待发货'
          }else if (this.organStatus==3){
            // this.operationMsg='查看详情'
            this.operationMsg=''
            this.statusMsg='待收货'
            this.noOrdersMsg='待收货'
          }
          let url = ''
          let data = {}
          let that=this;
          if (organStatus==1){
            // 不等于0  代表其他状态
            
            url = HOST_ORDERS + '/order/front/orderListAndItemsExt'
            data = {
              pageSize:5,
              pageNo:that.someNumber,
              organStatus:organStatus
            }
          }else if(organStatus!=1&&organStatus!=0){
            // let that=this;
            url = HOST_ORDERS + '/order/front/mainOrderPageExt'
            data = {
              pageSize:5,
              pageNo:that.someNumber,
              organStatus:organStatus
            }
          }else{
            //全部//0  代表 全部
            //private Integer organStatus = null;//订单状态  (1, "待支付"),(2, "待发货"),(3, "待收货"),(10,"交易完成"),(-1, "交易取消"),(-2, "交易关闭")
            // let that=this;
            url = HOST_ORDERS + '/order/front/orderListAndItemsExt'
            data = {
                pageSize:5,
                pageNo:that.someNumber
              }
          }
          api_post({
            url: url,
            // url: HOST_ORDERS + '/order/front/mainOrderPageExt',
            data: data,
            done: function(res){
              that.listData=res.list;
              that.toDetail()
              that.pageCount=Math.ceil(res.page.totalElement/5);
              // 处理iframe高度
              setTimeout(()=>{
                var height = document.getElementsByClassName('view')[0].clientHeight
                document.domain = HOST_DOMAIN
                that.resize(height)
              },1000)
            }
          })
        },
          //获取loginCode
          getLoginCode:function(){
            if ( this.userName2!=''&&this.canshu2!=''){
              let url=HOST_HDPUSER+'/user/toLoginPc'
              this.$resource(url).get({SSONAME:this.userName2,MEMBERTGC:this.canshu2}).then((response) => {
                if (response.status == 200) {
                  let userId=response.body.respBody.userId
                  this.loginCode=response.body.respBody.loginCode
                  window.localStorage.setItem('userId',userId)
                  window.localStorage.setItem('loginCode',this.loginCode)
                  // this.getListData(this.someNumber)
                }
              })

            }
          },
          //  去付款
          toPay:function(index){
            let orderCode=this.listData[index].orderCode;
            let lastTime=this.listData[index].lastTime;
            window.open(HR+'/paymentMethod?orderCode='+orderCode+'&lastTime='+lastTime+'');//跳转付款页面;
          },
            //      点击列表取消订单
          toCancel:function(index){
            this.cancelorderId=this.listData[index].id;
      
            this.showCover=true;
            this.showCancelBox=true;
          },
          //  点击出现取消订单原因
          clickSelect:function(){
              this.showMoreWhy=true
          },
            //      取消订单取消
          cancelClose:function(){
              this.showCover=false;
              this.showCancelBox=false;
          },
            //      确定取消订单
          cancelSure:function(){
          
            let that=this;
            
            api_get({
                  url: HOST_ORDERS + '/order/front/cancelOrder',
                  data: {
                    'id':that.cancelorderId
                  },
                  done: function(res){
                   
                    if(res.code==200){
                      alert_msg("取消订单成功！");
                      // that.getListData(1)
                      that.diffTitle(that.organStatus,that.headerIndex,1)
                      that.getOrdersNum()
                    }else{
                      alert_msg("取消订单失败！");
                    }
                    that.showCover=false;
                    that.showCancelBox=false;
                  }
            })

          },
          //  跳转到订单详情
          toDetail:function(){
              // let orderId=this.listData[index].id
              let arr = []
              arr = arr.concat(this.listData)
              this.listData.forEach((e,i)=>{
                let orderId=e.id
                if(this.organStatus==2){
                  //待发货
                  if (this.operationMsg=='查看详情'){
                  arr[i].detailsUrl= HR+'/orderDetails?orderId='+orderId+'&type=2&organStatus='+this.organStatus

                  }
                }else if (this.organStatus==10){
                  //交易完成
                  arr[i].detailsUrl = HR+'/orderDetails?orderId='+orderId+'&type=2&organStatus='+this.organStatus
                }else if (this.organStatus==1){
                  //待付款
                    arr[i].detailsUrl = HR +'/orderDetails?orderId='+orderId+'&type=1&organStatus='+this.organStatus

                }else if(this.organStatus==3){
                    //待收货
                    arr[i].detailsUrl = HR +'/orderDetails?orderId='+orderId+'&type=2&organStatus='+this.organStatus
                }else if (this.organStatus==0){
                  //全部订单
                    if (e.organStatus==1){
                      arr[i].detailsUrl = HR +'/orderDetails?orderId='+orderId+'&type=1&organStatus='+e.organStatus
                    }else if(e.organStatus==-1){
                      arr[i].detailsUrl = HR +'/orderDetails?orderId='+orderId+'&type=1&organStatus='+e.organStatus
                    }else{
                      arr[i].detailsUrl = HR +'/orderDetails?orderId='+orderId+'&type=2&organStatus='+e.organStatus
                    }
                }
              })
              this.listData = arr
              
          },
            //      确认收货
          sureOrders:function(id){
              this.showAlert=true
              this.showCover=true
              this.packageId=id;
          },
          //      点击确认收货提示框取消按钮
          cancleAlert:function(){
            if (this.showAlert==true){
              this.showAlert=false
              this.showCover=false
            }
          },
          //      点击确认收货提示框确定按钮
          sureAlert:function(){
              let that=this;
              api_get({
                  url: HOST_ORDERS + '/order/front/affirmReceiveByPackage',
                  data: {
                    'id':that.packageId
                  },
                  done: function(res){
                    that.showAlert=false
                    that.showCover=false
                    that.diffTitle(that.organStatus,that.headerIndex,1)
                    that.getOrdersNum()
                  }
              })
            
          },
            //      点击查看物流
          toLogistics:function(id){
              let logisticsId=id;
              //调查看物流接口
              let that=this;
              api_get({
                  url: HOST_LOGISTICS + '/wk/wsms/third/getTradeExpressInfo.json',
                  data: {
                  expressNo:logisticsId
                  },
                  done: function(res){
                   
                    that.logisticsData=res.result;
                  }
              })
              this.showCover=true
              this.showLogistics=true
              
          },
          //      点击物流详情确定按钮
          sureLogistics:function(){
            this.showCover=false
            this.showLogistics=false

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
          callbackfunction(index){
            this.diffTitle(this.organStatus ,this.headerIndex, index);
          },
          
      }

  }
</script>
<style scoped>
 
  [v-cloak] {
  display: none;
  }
  .list-header1{
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


  .list-body{
    width:956px;
    margin-left:14px;

  }
  .big-box{
    border:1px solid #d6d6d6;
    margin-bottom:20px;
  }
  .list-body-header{
    width:100%;
    height:41px;
    border-bottom:1px solid #d6d6d6;
    background:#f4f4f4;
    font-size:12px;
  }
  .order-time{
    margin-left:24px;
    height:41px;
    line-height: 41px;
    float: left;
    font-size:0;

  }
  .order-time span{
    font-size:12px;
  }
.order-time-year{
  margin-left:6px;
}

.deleted-order{
  width:14px;
  height:18px;
  background: url("../../assets/images/img/orders/orderDeleted.png") no-repeat;
  float: right;
  margin-right:25px;
  cursor: pointer;
  margin-top:13px;
}
  .content-box{
    width:700px;
    height:129px;
  }
  .googs-left{
    height:100%;
    border-right:1px solid #d6d6d6;
    width:700px;
    float: left;
  }
.goods-img-container{
  height:100%;
  width:343px;
  margin-left:24px;
  float: left;
}
  .goods-img-container img{
    display: inline-block;
    width: 78px;
    height:78px;
    border:1px solid #d6d6d6;
    float: left;
    margin-top:24px;
    margin-right: 24px;

  }
  .img-more{
    display: inline-block;
    float: left;
    font-size: 18px;
    margin-top:55px;
    margin-left:-10px;
  }
  .goods-message{
    width:220px;
    height:36px;
    line-height:16px;
    text-align: left;
    float: left;
    margin-top:44px;
  }
  .baoguo-box{
    width:100px;
    float: left;
    height:100%;
    text-align: center;
    margin-left:75px;
    font-size: 0;
  }
   .baoguo-num{
  font-size:12px;
  color:#adadad;
    line-height: 12px;
    margin-top:10px;


}
.baoguo-box  .baoguo-count{
  line-height: 12px;
  margin-top:8px;
  font-size: 12px;
}
  .baoguo-wuliu{
    line-height: 12px;
    font-size: 12px;
    margin-top:8px;
    color:#7a9fcc;
    cursor: pointer;
  }
  .status-box{
    width:102px;
    float: left;
    height:100%;
    margin-left:36px;
    text-align: center;
  }
  .status-msg{
    line-height: 12px;
    font-size: 12px;
    margin-top:40px;

  }
  .status-go{
    width:76px;
    height:26px;
    background:#fe920c;
    border-radius: 2px;
    color:#fff;
    font-size: 12px;
    line-height: 26px;
    margin-top:9px;
    margin-left:1px;
    cursor:pointer;
  }
  .money-total{
    box-sizing: border-box;
   display: inline-block;
    height:100%;
    width:130px;
    border-right:1px solid #d6d6d6;
    position:absolute;
    top:0;
    left:700px;
    text-align: center;


  }

  .money-box{

    position:absolute;
    top:calc(50% - 16px);
    left:9px;

  }
  .money-box div{
    font-size: 12px;
    line-height: 12px;
  }

  .money-total2{
    margin-top:8px;
  }
  .total-box{
    width:100%;
    overflow: hidden;
    text-align: left;
    position:relative;
  }
  .xuxian{
    width:632px;
    margin-left:34px;
    border-top:1px dashed  #d6d6d6;
  }
  .operation-box{
    height:100%;
    position: absolute;
    right:0;
    top:0;
    width:127px;
    font-size: 0;
  }
  .operation{
    width:100%;
    text-align: center;
    position:absolute;
    top:calc(50% - 33px);
    left:0;
  }
  .operation-time{
    font-size: 12px;
    line-height: 12px;

  }
  .operation-msg{
    display: block;
    width:76px;
    height:26px;
    background:#fe920c;
    color:#fff;
    font-size:12px;
    line-height:26px;
    border-radius: 2px;
    margin-top:8px;
    margin-left:25px;
    cursor: pointer;

  }
  .operation-go-next{
    font-size:12px;
    color:#7a9fcc;
    line-height: 12px;
    margin-top:8px;
    cursor: pointer;
  }
  /*无订单*/
  .no-orders-box{
    width:600px;
    font-size: 0;
    margin-top:141px;

  }
  .no-orders-box img{
    display: inline-block;
    width:38px;
    height:42px;
  }
  .no-orders-words{
    line-height:12px;
    font-size:12px;
    margin-top:24px;
  }
  /*订单头部*/
  .list-header{
    font-family: "Microsoft YaHei";
    width:956px;
    height:38px;
    background:#f4f4f4;
    margin-top:16px;
    margin-bottom:10px;
    border:1px solid #d6d6d6;
    line-height: 38px;

  }
  .list-header-words{
    color:#63564f;
    font-size: 12px;
    float: left;

  }
  /*提示弹框*/
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
  /*物流信息*/
  .logistics{
    width:700px;
   
    z-index: 4;
    border-top:1px solid transparent;
    overflow: hidden;
    position: fixed;
    top:100px;
    left:calc(50% - 350px);
    background:#fff;

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
  .logisticsContent{
     height:300px;
    overflow-y:auto;
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
  /*取消订单弹框start*/
  .cancel-box{
    width:442px;
    height:280px;
    background:#fff;
    position:fixed;
    z-index: 3;
    top:200px;
    left:calc(50% - 221px);
    border-top:1px solid transparent;
  }
  .cancel-close{
    position: absolute;
    top:20px;
    right:20px;
    z-index: 4;
    cursor: pointer;
  }
  .cancel-tishi{
    width:100%;
    height:16px;
    line-height: 16px;
    font-size: 16px;
    padding-left:39px ;
    margin-top:46px;
    box-sizing: border-box;
    text-align: left;
  }
  .cancel-select-box{
    width: 100%;
    box-sizing: border-box;
    padding-left: 39px;
    position:relative;
    height:100px;
  }
  .select-title{
    font-size: 14px;
    height:14px;
    line-height: 14px;
    position:absolute;
    top:21px;
  }
  .select-value-box{
    width:160px;
    height:100px;
    position:absolute;
    top:16px;
    left:210px;
    outline: none;
    font-size: 14px;
  }
  .select-value{
    width:158px;
    border:1px solid #d6d6d6;
    height:26px;
    line-height: 26px;
    cursor: pointer;
    padding-left:9px;
    text-align: left;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
  .select-option-box{
    width:156px;
    height:106px;
    border-left:1px solid #d6d6d6;
    border-right:1px solid #d6d6d6;
    border-bottom:1px solid #d6d6d6;
    position:absolute;
    top:26px;
    left:0;
    overflow: auto;

  }
  .select-option{
    text-align: left;
    box-sizing: border-box;
    padding-left:9px ;
    height:21px;
    width:100%;
    line-height: 21px;
    cursor: pointer;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .select-option:hover{
    background: #fe920c;
    color:#fff;

  }
  .cancel-close-btn{
    width:138px;
    height:42px;
    line-height:42px;
    font-size:16px;
    border:1px solid #fe920c;
    position:absolute;
    left:62px;
    bottom:20px;
    border-radius: 2px;
    cursor: pointer;
    color:#fe920c;
    letter-spacing: 1px;
  }
  .cancel-close-sure{
    width:140px;
    height:44px;
    line-height:44px;
    font-size:16px;
    background:#fe920c;
    color:#fff;
    position:absolute;
    right:55px;
    bottom:20px;
    border-radius: 2px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  /*取消订单弹框end*/
  /*分页start*/
  .paging{
    width:1190px;
    height:500px;

    margin:30px auto;
  }
  .searchPaging {
    margin-top:30px;
    height:36px;
    margin-bottom: 44px;
    margin-right:39px;
  }
  .searchPaging ul {
    float: right;
  }
  .searchPaging li {
    float: left;
    height:34px;
    line-height:34px;
    width:38px;
    text-align: center;
    border:1px solid #d6d6d6;
    border-left:0;
    font-size: 14px
  }
  .searchPaging li.on {
    background: #6878c6;
    border:0;
    height: 36px;
    line-height:36px;
  }
  .searchPaging li.on a {
    color:#fff;
    height:36px;
    line-height:36px;
  }

  .searchPaging li a {
    display: block;
    height:34px;
    line-height:34px;
    color:#4d3e36;
  }
  .searchPaging .prevPage,.searchPaging .nextPage {
    width:86px;
  }
  .searchPaging .prevPage {
    border-left:1px solid #d6d6d6;
  }
  .searchPaging .prevColor  {
    color: #d6d6d6;
    height:34px;
    line-height:34px;
  }

  .searchPaging li.classRenderer {
    background: #6878c6;
    border:0;
    height: 36px;
    line-height:36px;
  }
  .searchPaging li.classRenderer a {
    color:#fff;
    height:36px;
    line-height:36px;
  }
  /*分页end*/
</style>
