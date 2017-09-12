// shouThree.vue
<template>
  <div class="hdp_three">
  	<div class="hdp_three_wrap">
  		<div class="hdp_two_top">
	      <div class="hdp_top_box">
	        <i class="fl"></i>
	        <p>精选频道</p>
	        <i class="fr"></i>
	      </div>
	      <div class="hdp_down_box">
	        <h3>～立足全国200个产业带的精挑细选～</h3>
	      </div>
	    </div>
  	</div>

  	<div class="w1190 three_list">
      <!--粮油米面-->
      <div class="three_tree fl">
        <router-link to="/serachlist"><img @click="toSerachlist('1497510524329427','粮油米面','0')" class="top_img" src="../../assets/images/img/floor4-pc.png" alt=""></router-link>
        <ul class="three_list color2 fl">
          <router-link to="/detail?commodityId=85064467">
            <li @click="setStoreValue('85064467','0')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/4-1-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>湖南特产 三樟原产 蒸鱼皇贡椒 豆豉贡椒 香菇 贡厥 黄贡椒礼盒装</p>
                <h3>¥58</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=84650361">
            <li @click="setStoreValue('84650361','0')">

               <div class="three_tree_img" >
                 <img src="../../assets/images/img/4-2-pc.jpg" alt="">
               </div>
               <div class="three_tree_down">
                 <p>立宝红谷米 朝阳黄小米 朱碌科杂粮400g*8</p>
                 <h3>¥75</h3>
               </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=78645696">
             <li @click="setStoreValue('78645696','0')">

               <div class="three_tree_img" >
                 <img src="../../assets/images/img/4-3-pc.jpg" alt="">
               </div>
               <div class="three_tree_down">
                 <p>辽宁建平天然有机杂粮850g 米伴侣 同煮同熟 方便食用</p>
                 <h3>¥88</h3>
               </div>
             </li>
          </router-link>
          <router-link to="/detail?commodityId=85194182">
             <li @click="setStoreValue('85194182','0')">
               <div class="three_tree_img" >
                 <img src="../../assets/images/img/4-4-pc.jpg" alt="">
               </div>
               <div class="three_tree_down">
                  <p>绿源井冈 有机纯山茶油3L铁听装 物理压榨茶籽油3L</p>
                  <h3>¥328</h3>
               </div>
             </li>
          </router-link>
        </ul>
      </div>
      <!--生鲜水产-->
  		<div class="three_tree fr">
  			<router-link to="/serachlist"><img @click="toSerachlist('1497510453932953','生鲜水产','1')" class="top_img" src="../../assets/images/img/floor2-pc.png" alt=""></router-link>
  			<ul class="three_list color2 fl">
          <router-link to="/detail?commodityId=83150563">
            <li @click="setStoreValue('83150563','1')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/2-1mangguo-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>【尚古海】免发干海参礼盒10只装 纯野生烟台刺参水产干货 8小时速发 免煮</p>
                <h3>¥516</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85199103">
            <li @click="setStoreValue('85199103','1')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/2-2mangguo-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>海南红心火龙果 异域风情 清甜可口 5斤装</p>
                <h3>¥88</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85035169">
            <li @click="setStoreValue('85035169','1')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/2-3dazhaxie-pc.jpg"  alt="">
              </div>
              <div class="three_tree_down">
                <p>【巴城蟹业】正宗阳澄湖大闸蟹 公3.0-3.3母2.0-2.3 4对8只装 礼品卡预售</p>
                <h3>¥288</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85035262">
            <li @click="setStoreValue('85035262','1')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/2-4dazhaxie-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>【巴城蟹业】正宗阳澄湖大闸蟹 公3.8-4.2 母2.7-2.9两 4对8只 礼品卡预售</p>
                <h3>¥780</h3>
              </div>
            </li>
          </router-link>
  			</ul>
  		</div>

  	</div>
  	<div class="w1190 three_list">
      <!--茶酒饮料-->
  		<div class="three_tree fl">
  			<router-link to="/serachlist"><img class="top_img" src="../../assets/images/img/floor3-pc.png" alt="" @click="toSerachlist('1497510395315609','茶酒饮料','2')"></router-link>
  			<ul class="three_list color1 fl">
  				<li @click="setStoreValue('82954237','2')">
            <router-link to="/detail?commodityId=82954237">
  					<div class="three_tree_img" >
  						<img src="../../assets/images/img/3-1huacaocha-pc.jpg" alt="">
  					</div>
  					<div class="three_tree_down">
  						<p>同仁堂茶品 菊花茶 胎菊 清热去火 胎菊王一朵一杯杭白菊 花草茶</p>
  						<h3>¥29.9</h3>
  					</div>
            </router-link>
  				</li>
          <router-link to="/detail?commodityId=79109156">
            <li @click="setStoreValue('79109156','2')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/3-2qipaojiu-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>黑尚莓 复方起泡树莓酒 聚会专用无添加不宿醉</p>
                <h3>¥69</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85190990">
             <li @click="setStoreValue('85190990','2')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/3-3-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>山西特产 临歌枣酿文化款 枣酒 美容酒 单支高档餐饮果酒饮品 健康养生</p>
                <h3>¥109</h3>
              </div>
             </li>
          </router-link>
          <router-link to="/detail?commodityId=81221395">
            <li @click="setStoreValue('81221395','2')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/3-4-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>辉华茶业 安化黑茶金芙蓉天尖金茯砖1000g 礼盒装</p>
                <h3>¥288</h3>
              </div>
            </li>
          </router-link>
  			</ul>
  		</div>
      <!--休闲食品-->
      <div class="three_tree fr">
        <router-link to="/serachlist"><img @click="toSerachlist('1497510353099389','休闲食品','3')" class="top_img" src="../../assets/images/img/floor1-pc.png" alt=""></router-link>
        <ul class="three_list color1 fl">
          <router-link to="/detail?commodityId=80122639">
            <li @click="setStoreValue('80122639','3')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/1-1zao-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>【农钻】年货促销新疆和田骏枣个大香甜二级红枣大枣500g包邮</p>
                <h3>¥35</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=81130441">
            <li @click="setStoreValue('81130441','3')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/1-2yuebin-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>秋香月饼 苏式酥皮月饼 临沂特产豆沙枣泥 60只装整箱</p>
                <h3>¥109</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=83188041">
            <li @click="setStoreValue('83188041','3')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/1-3baomihua-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>【批发】吉利火星升级款 即食爆米花美式焦糖味 148g*10桶</p>
                <h3>¥119</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=84748878">
            <li @click="setStoreValue('84748878','3')">
              <div class="three_tree_img">
                <img src="../../assets/images/img/1-4ejiaozao-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>山西晋胶 固媛 阿胶糕 榆社阿胶 450g 即食阿胶 传统工艺手工熬制 玫瑰味原味阿胶糕</p>
                <h3>¥268</h3>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
  	</div>



  	<div class="w1190 three_list">
      <!--家居用品-->
  		<div class="three_tree fl">
  			<router-link to="/serachlist"><img @click="toSerachlist('1497510308538178','家居用品','4')" class="top_img" src="../../assets/images/img/floor5-pc.png" alt=""></router-link>
  			<ul class="three_list color1 fl">
          <router-link to="/detail?commodityId=83326118">
            <li @click="setStoreValue('83326118','4')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/5-1-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>欣申活亚麻室内居家防滑可爱女款粉色蝴蝶结坡跟拖鞋</p>
                <h3>¥29</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85335580">
            <li @click="setStoreValue('85335580','4')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/5-2-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>夏天空调被 夏凉被子 可水洗加厚 被芯水洗棉 高端 花色备注</p>
                <h3>¥83</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=81627832">
            <li @click="setStoreValue('81627832','4')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/5-3-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>大智wifi手机app智能控制插座 五孔 可连接电视家电</p>
                <h3>¥85</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85379666">
            <li @click="setStoreValue('85379666','4')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/5-4-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>夏季提花冰丝凉席空调席子两三件套可折叠加厚 米兰高端品质 花色备注</p>
                <h3>¥105</h3>
              </div>
            </li>
          </router-link>
  			</ul>
  		</div>
      <!--工艺礼品-->
      <div class="three_tree fr">
        <router-link to="/serachlist"><img @click="toSerachlist('1497510251188055','工艺礼品','5')" class="top_img" src="../../assets/images/img/floor8-pc.png" alt=""></router-link>
        <ul class="three_list color2 fl">
          <router-link to="/detail?commodityId=84967777">
            <li @click="setStoreValue('84967777','5')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/8-1-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>对杯骨瓷马克杯创意杯子</p>
                <h3>¥29.9</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=83223490">
             <li @click="setStoreValue('83223490','5')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/8-2-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>喀左三川天佑紫砂杯 鱼化龙杯 手工精制 325ml</p>
                <h3>¥180</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=84968431">
            <li @click="setStoreValue('84968431','5')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/8-3-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>青花瓷28头骨质瓷套装</p>
                <h3>¥329</h3>
              </div>
             </li>
          </router-link>
          <router-link to="/detail?commodityId=84968379">
            <li @click="setStoreValue('84968379','5')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/8-4-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>喜庆系列46头餐具套装 结婚礼品</p>
                <h3>¥489</h3>
              </div>
           </li>
          </router-link>
        </ul>
      </div>

  	</div>
  	<div class="w1190 three_list">
      <!--餐具厨具-->
  		<div class="three_tree fl">
  			<router-link to="/serachlist"><img @click="toSerachlist('1497510207691491','餐具厨具','6')"  class="top_img" src="../../assets/images/img/floor7-pc.png" alt=""></router-link>
  			<ul class="three_list color1 fl">
          <router-link to="/detail?commodityId=84967947">
            <li @click="setStoreValue('84967947','6')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/7-1-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>釉下彩高档骨瓷餐具28头纯白套装简约陶瓷碗盘碗碟家用套装可微波</p>
                <h3>¥179</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=82370807">
            <li @click="setStoreValue('82370807','6')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/7-2-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>欧式简约咖啡杯碟 15头套装咖啡杯碟 六人用咖啡具 高档礼品</p>
                <h3>¥229</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=84968143">
             <li @click="setStoreValue('84968143','6')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/7-3-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>【唐山骨质瓷】琼花并蒂骨质瓷23头套装</p>
                <h3>¥299</h3>
              </div>
             </li>
          </router-link>
          <router-link to="/detail?commodityId=84968408">
             <li @click="setStoreValue('84968408','6')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/7-4-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>清新22头唐山特产骨质瓷套装</p>
                <h3>¥299</h3>
              </div>
             </li>
          </router-link>
  			</ul>
  		</div>
      <!--日用百货-->
      <div class="three_tree fr">
        <router-link to="/serachlist"><img @click="toSerachlist('1497510161449032','日用百货','7')" class="top_img" src="../../assets/images/img/floor6-pc.png" alt=""></router-link>
        <ul class="three_list color2 fl">
          <router-link to="/detail?commodityId=80238928">
            <li @click="setStoreValue('80238928','7')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/6-1-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>Bopp淘宝封箱胶带 打包宽胶纸定做米黄色粘胶布</p>
                <h3>¥24.9</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80357236">
            <li @click="setStoreValue('80357236','7')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/6-2-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>快递打包装封箱口印字警示语宽胶布透明胶纸厂批发定制做胶带</p>
                <h3>¥29.9</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80032779">
            <li @click="setStoreValue('80032779','7')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/6-3-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>思米达电器 XT-169 1W 强力大网面灭蚊充电式LED电子灭蚊拍</p>
                <h3>¥29.8</h3>
              </div>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80048487">
            <li @click="setStoreValue('80048487','7')">
              <div class="three_tree_img" >
                <img src="../../assets/images/img/6-4-pc.jpg" alt="">
              </div>
              <div class="three_tree_down">
                <p>思米达LED光触媒XT-339灭蚊灯 卡通时尚家用无辐射 日用百货</p>
                <h3>¥39.9</h3>
              </div>
          </li>
          </router-link>
        </ul>
      </div>
  	</div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'shouThree',
    methods:{
      setStoreValue: function(val,index) {
        window.localStorage.setItem("commodityId", val);
        window.localStorage.setItem('navCurrentIndex',index)
      },
//      点击楼层图片进入详情页对应的类目
      toSerachlist:function(id,name,index){
        window.localStorage.setItem("navIndex",index);
        window.localStorage.setItem("navId", id);
        window.localStorage.setItem("htmlInner",name);
      },
    }
  }
</script>
<style scoped>
  .three_tree_img img{
    display: block;
    width:170px;
    height:170px;
    margin-left:39px;
  }
.hdp_three {
	overflow: hidden;
  font-family: Microsoft YaHei;
}
.three_tree {
	margin-top: 10px;
	margin-bottom: 20px;
	width: 590px;
  float: left;
  margin-right:5px;
}
.three_list li {
	margin: 20px 10px 0;
	float: left;
	position: relative;
	width: 248px;
	height: 268px;
	border: 1px solid #d6d6d6;
	border-radius: 10px;
}
.three_list li:nth-child(odd) {
	margin-left: 35px;
}
.three_list li .three_tree_down {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 96px;
	color: #4e3d36;
  box-sizing: border-box;



}
.three_list li .three_tree_down p {
	margin-top: 8px;
	font-size: 12px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
}
.three_list li .three_tree_down h3 {
	margin: 0;
	font-size: 16px;
	line-height: 36px;
  color:#d72125;
  font-weight: bold;
}
.three_list.color1 li:hover .three_tree_down {
	background-color: #eedbd9;
    border-radius: 0 0 10px 10px;
}
.three_list.color1 li:hover {
	border: 1px solid transparent;
    -webkit-box-box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
    -moz-box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
    box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
}
.three_list.color2 li:hover .three_tree_down {
	background-color: #e4e5e9;
    border-radius: 0 0 10px 10px;
}
.three_list.color2 li:hover {
	border: 1px solid transparent;
    -webkit-box-box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
    -moz-box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
    box-shadow: 0 10px 20px rgba(47, 58, 112, 0.3);
}
.three_tree .top_img {
	width: 590px;
	height: 120px;
}
.hdp_three {
	background-color: #fff;
	padding-bottom: 40px;
}
.hdp_two_top {
  height: 100px;
  overflow: hidden;
}
.hdp_two_top .hdp_top_box {
  width: 180px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 20px;
}
.hdp_two_top .hdp_top_box i {
  display: inline-block;
  margin-top: 20px;
  width: 40px;
  height: 2px;
  background-color: #000;
  float: left;
  margin-left:5px;

}
.hdp_two_top .hdp_top_box p {
  margin-left: 6px;
  float: left;
  font-size: 20px;
  color: #4d3e36;
}
.hdp_two_top .hdp_down_box {
  /*margin-top: -10px;*/
}
.hdp_two_top .hdp_down_box h3 {
  font-size: 14px;
  color: #4d3e36;
  font-weight: normal;
  opacity: 0.5;
}
  .fl{

  }
</style>
