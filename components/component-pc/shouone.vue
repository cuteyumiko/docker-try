// shouOne.vue
<template>
  <div class="w1190 hdp_one_wrap">
    <a href="#"><div class="backtop"></div></a>
    <ul>
      <li>
        <div class="hdp_one_box">
          <a  target="view_window"  href="http://zt.99114.com/activity/hgj-new/index.html"><img src="../../assets/images/img/huanggongjiao-pc.png" alt=""></a>
          <p></p>
        </div>
      </li>
      <li>
        <div class="hdp_one_box">
          <a  target="view_window"  href="http://zt.99114.com/activity/gj-new/index.html"><img src="../../assets/images/img/shumeijiu-pc.png" alt=""></a>
          <p></p>
        </div>
      </li>
      <li>
        <div class="hdp_one_box">
          <a  target="view_window"  href="http://zt.99114.com/activity/trt/index.html"><img src="../../assets/images/img/tongrentang-pc.png" alt=""></a>
          <p></p>
        </div>
      </li>
      <li class="last">
        <div class="hdp_one_box">
          <a  target="view_window"  href="http://www.99114.com/showActivity/youxuanmangguo?siteId=1"><img src="../../assets/images/img/guifeimang-pc.png" alt=""></a>
          <p></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'shouOne'
  }
</script>
<style scoped>
.backtop {
  position: fixed;
  width: 55px;
  height: 81px;
  background: url(../../assets/images/img/top.png);
  right:20px;
  bottom: 170px;
  z-index: 1;
}
.hdp_one_wrap {
  height: 299px;
  overflow: hidden;
  font-family: Microsoft YaHei;
}
.hdp_one_box {
  width: 200px;
  height: auto;
}
.hdp_one_box img {
  margin-top: 60px;
  margin-bottom: 29px;
}


@-moz-keyframes rotate{
  0%{
    -moz-transform:rotate(0deg);
  }
  100%{
    -moz-transform:rotate(360deg);
  }
}
@-webkit-keyframes rotate{
  0%{
    -webkit-transform:rotate(0deg);
  }
  100%{
    -webkit-transform:rotate(360deg);
  }
}
@keyframes rotate{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
.hdp_one_box img:hover{
  -moz-animation:rotate .8s ;
  -webkit-animation:rotate .8s ;
  animation:rotate .8s ;
  /*animation:rotate .5s infinite linear;*/
}
.hdp_one_wrap li {
  width: 200px;
  margin-right: 130px;
  float: left;
}
.hdp_one_wrap li.last {
  margin-right: 0;
}
.hdp_one_wrap li p {
  font-size: 16px;
  line-height: 24px;
}
</style>
