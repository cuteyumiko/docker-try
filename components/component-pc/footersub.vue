// footersub.vue
<template>
  <div class="hdpfootersub">
    <div class="w1190">
    	<div class="fl fbox1">
    		<div class="box1">企业采购专线</div>
    		<div class="box2">400-8716-727</div>
    		<div class="box3">9:00-18:00</div>
    		<!--<div class="box4">-->
    			<!--<div class="box prev fl">在线客服</div>-->
    			<!--<div class="box fl">售后服务</div>-->
    		<!--</div>-->
    	</div>
	    <div class="fl fline"></div>
	    <div class="fl fbox2">
	    	<h3>何为好单品</h3>
	    	<p>网库集团基于全国200个产业基地资源，为中小企业采购商提供源头货源，优品低价采购服务，秉承 “一手货源，正品采购”的服务理念，致力于打造企业采购第一品牌，重磅推出好单品商城！</p>
	    </div>
	    <div class="fl fline"></div>
	    <div class="fr fbox3">
	    	<h3>扫码关注好单品公众号</h3>
	    	<img src="../../assets/images/img/er.jpg" alt="">
	    </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
     name:'hdpfootersub'
  }
</script>
<style scoped>
.hdpfootersub {
	color: #4d3e36;
	height: 300px;
	text-align: center;
	background-color: #fff;
	overflow: hidden;
  font-family: Microsoft YaHei;
}
.fbox3 {
	width: 200px;
}
.fbox2 {
	padding: 0 90px;
	width: 387px;
  font-family: Microsoft YaHei;
}
.fbox3 img{
  display: inline-block;
  width:166px;
  height:166px;
}
.fbox3 h3,
.fbox2 h3 {
	font-size: 20px;
	font-weight: normal;
	line-height: 24px;
	margin-top: 40px;
}
.fbox2 p {
	text-indent: 2em;
	font-size: 17px;
	line-height: 30px;
	text-align: left;
}


.fl{
  float: left;
  box-sizing: content-box;
}
.fr{
  float:right;
  box-sizing: content-box;
}
.fline {
	margin-top: 50px;
	width: 1px;
	height: 200px;
	background-color: #d6d6d6;
}
.fbox1 {
	width: 355px;
}
.fbox1 .box1 {
	line-height: 24px;
	margin-top: 40px;
	font-size: 20px;
}
.fbox1 .box2 {
	font-size: 22px;
	line-height: 76px;
  font-weight: bold;

}
.fbox1 .box3 {
	line-height: 40px;
	font-size: 20px;
}
.fbox1 .box4 {
	margin-top: 30px;
	font-size: 16px;
  margin-left:36px;
}

.fbox1 .box4 .box.prev {
	margin-right: 20px;
}
.fbox1 .box4 .box {
	cursor: pointer;
	width: 130px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #4d3e36;
	border-radius: 5px;
}
</style>
