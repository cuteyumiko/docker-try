// carousel.vue
<template>
  <div id="slideBox" class="slideBox">
    <div class="hd">
      <span class="pageState"></span>
    </div>
    <div class="bd" id="bd">
      <ul>
        <a href="http://zt.99114.com/activity/moon%20festival/index.html" target="_blank"><li><img src="../../assets/images/img/banner1.jpg" alt=""></li></a>
        <a href="http://zt.99114.com/activity/qyfl/index.html" target="_blank"><li><img src="../../assets/images/img/banner5.png" alt=""></li></a>
      
        <a href="http://zt.99114.com/yw/2017zt/changweining/dazhaxie/index.html" target="_blank"><li><img src="../../assets/images/img/banner2.jpg" alt="" ></li></a>
        <a href="http://zt.99114.com/activity/zqcj/index.html" target="_blank"><li><img src="../../assets/images/img/banner3.jpg" alt=""></li></a>
        <a href="http://zt.99114.com/activity/gift/index.html" target="_blank"><li><img src="../../assets/images/img/banner4.jpg" alt=""></li></a>
        <a href="http://zt.99114.com/yw/hdtg/wine2/index.html" target="_blank"><li><img src="../../assets/images/img/banner6.jpg" alt=""></li></a>
     </ul>
    </div>

    <div class="w1190 hdp_arrow">
      <a class="prev" href="javascript:void(0)"></a>
      <a class="next Jnext" href="javascript:void(0)"></a>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'carousel',
    mounted: function() {
      this.toMove()
    },
    methods: {
      toMove: function() {
        jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
      }
    }
  }
</script>

<style scoped>


  #bd ul a {
    position: absolute;
    left: 50%;
  }
  #bd ul a li img{
    position: relative;
    left: -50%;
    max-width: none;
  }


  .hdp_arrow {
    margin-top: -270px;
    height: 80px;
    position: relative;
  }
  .slideBox{ width:100%; height:450px; overflow:hidden; position:relative;}
  .slideBox .hd{ width: 40px; height:20px; overflow:hidden; position:absolute; right:50%; bottom:20px; z-index:1; background: url(../../assets/images/img/page.png) no-repeat; line-height: 20px; color: #fff; }
  .slideBox .hd ul{ overflow:hidden; zoom:1; float:left;  }
  .slideBox .hd ul li{ float:left; margin-right:2px;  width:15px; height:15px; line-height:14px; text-align:center; background:#fff; cursor:pointer; }
  .slideBox .hd ul li.on{ background:#f00; color:#fff; }
  .slideBox .bd{  position:relative; height:100%; z-index:0;  cursor: pointer;margin:0 auto}
  .slideBox .bd li{  height:450px; zoom:1; }

  .slideBox .bd li.ad01{
    width: 100%;
    height: 450px;
    background: url(../../assets/images/img/banner1.jpg) no-repeat center center;
    background-size: 100% 100%;
  }
  .slideBox .bd li.ad02 {
    width: 100%;
    height: 450px;
    background: url(../../assets/images/img/banner2.jpg) no-repeat center center;
    background-size: 100% 100%;
  }
  .slideBox .bd li.ad03 {
    width: 100%;
    height: 450px;
    background: url(../../assets/images/img/banner3.jpg) no-repeat center center;
    background-size: 100% 100%;
  }
  .slideBox .bd li.ad04 {
    width: 100%;
    height: 450px;
    /*background: url(../assets/img/banner4.jpg) no-repeat center center;*/
    /*background-size: 100% 100%;*/
  }
  /*.slideBox .bd img{ width:100%; height:450px; display:block;  }*/

  .slideBox .prev {
    position: absolute;
    left: -80px;
    top: 18px;
    width: 60px;
    height: 60px;
    background:url(../../assets/images/img/arrow_l.png) no-repeat center center;
  }
  .slideBox .next {
    position: absolute;
    right: -80px;
    top: 18px;
    width: 60px;
    height: 60px;
    background:url(../../assets/images/img/arrow_r.png) no-repeat center center;
  }
  .slideBox .prev:hover,
  .slideBox .next:hover {
    opacity: 0.7;
  }
  #bd ul a{
    display: block;
    width:1920px;
    height:450px;
  }
</style>
