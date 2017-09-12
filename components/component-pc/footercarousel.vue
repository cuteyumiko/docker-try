// footerCarousel.vue
<template>
  <div class="footercarousel">
    <div class="hdp_two_top">
      <div class="hdp_top_box">
        <i class="fl"></i>
          <p>地方特色</p>
        <i class="fr"></i>
      </div>
      <div class="hdp_down_box">
        <h3>～在这里领略祖国的地大物博～</h3>
      </div>
    </div>
    <div class="w1190">
      <div class="picScroll-left">
        <div class="hd">
          <a class="next"></a>
          <a class="prev"></a>
        </div>
        <div class="bd">
          <ul class="picList">
            <li >
              <router-link to="/detail?commodityId=78615301">
              <div class="pic" @click="setStoreValue('78615301')">
                <a href="" target="_blank"><img src="../../assets/images/img/jingxuanhuafengmi-pc.jpg" /></a>
                  <div class="title">
                    <p>玄中牌 野荆花蜂蜜 500g/瓶装</p>
                    <h3>¥49</h3>
                  </div>
              </div>
              </router-link>
            </li>
            <li >
                <router-link to="/detail?commodityId=81134814">
                <div class="pic" @click="setStoreValue('81134814')">
                  <a href="" target="_blank"><img src="../../assets/images/img/jingxuanxiaomi-pc.jpg" /></a>
                  <div class="title">
                    <p>阿胶烧鸡 500gx2 礼盒装 正宗东阿阿胶配料 营养美味 送礼佳品</p>
                    <h3>¥55</h3>
                  </div>
                </div>
                </router-link>
              </li>
            <li>
              <router-link to="/detail?commodityId=85047930">
              <div class="pic" @click="setStoreValue('85047930')">
                <a href="" target="_blank"><img src="../../assets/images/img/jingxuanhuacaocha.jpg" /></a>
                  <div class="title">
                    <p>同仁堂茶品 黑苦荞茶 全胚芽正品荞麦茶袋装273g 花草茶</p>
                    <h3>¥56.9</h3>
                  </div>
              </div>
              </router-link>
            </li>
            <li>
              <router-link to="/detail?commodityId=85402035">
                <div class="pic" @click="setStoreValue('85402035')">
                  <a href="" target="_blank"><img src="../../assets/images/img/jingxuantaosubin-pc.jpg" /></a>
                  <div class="title">
                    <p>秋香月月小团圆 工夫酥苏式月饼桃酥饼干特产传统礼盒送礼480g*2</p>
                    <h3>¥58</h3>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/detail?commodityId=81932992">
                <div class="pic" @click="setStoreValue('81932992')">
                  <a href="" target="_blank"><img src="../../assets/images/img/jingxuanshuiguoguitou-pc.jpg" /></a>
                  <div class="title">
                    <p>多国桃满多黄桃罐头425g*12罐水果罐头</p>
                    <h3>¥98</h3>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/detail?commodityId=85390820">
                <div class="pic" @click="setStoreValue('85390820')">
                  <a href="" target="_blank"><img src="../../assets/images/img/jingxuangouqi-pc.jpg" /></a>
                  <div class="title">
                    <p>山东特产念生堂红枣枸杞固元糕500g美容养颜</p>
                    <h3>¥118</h3>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'Fcarousel',
    mounted: function() {
      this.toMove()
    },
    methods: {
      setStoreValue: function(val) {
        window.localStorage.setItem("commodityId", val);
      },
        toMove: function() {
        jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:3,vis:3,delayTime:1000});
      }
    }
  }
</script>

<style scoped>
.footercarousel {
  padding-top: 20px;
  background-color: #f8f6f3;
  height: 620px;
  overflow: hidden;
  font-family: Microsoft YaHei;
}
.picScroll-left{ width:1190px;  position:relative;  }
.picScroll-left .hd{ height:20px;  }
.picScroll-left .hd .prev,.picScroll-left .hd .next{ margin-left:-60px; margin-top:200px; display:block;  width:50px; height:50px; float:left;overflow:hidden;cursor:pointer; background:url(../../assets/images/img/sarrowl.png);}
.picScroll-left .hd .next {
  margin-right: -60px;
  float: right;
  background:url(../../assets/images/img/sarrowr.png);
}
.picScroll-left .hd .prev:hover,.picScroll-left .hd .next:hover {
  opacity: 0.7;
}
.picScroll-left .bd{ }
.picScroll-left .bd ul{ overflow:hidden; zoom:1; }
.picScroll-left .bd ul li{width: 376px; margin:0 10px; float:left; overflow:hidden; text-align:center;  }
.picScroll-left .bd ul li .pic{ position:relative; text-align:center; }
.picScroll-left .bd ul li .pic img{ display:inline-block;width:376px; height:420px;  }
.picScroll-left .bd ul li .title {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 240px;
  text-align: center;
  font-size: 14px;
  height: 80px;
  padding-left:10px;
  padding-right: 10px;
  box-sizing: border-box;
  background: #fff;
  opacity: 0.8;
  border-radius: 10px;
  margin-left: 68px;

}
.picScroll-left .bd ul li .title p {
  font-size: 14px;
  color: #4d3e36;
  margin-top: 20px;
  text-align: left;
}
.picScroll-left .bd ul li .title h3 {
  font-size: 16px;
  color: #d72125;
  margin: 0;
  line-height: 30px;
  font-weight: bold;
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
  margin-top: 20px;
  width: 40px;
  height: 2px;
  background-color: #000;
  float: left;
  margin-left:5px;
}
.hdp_two_top .hdp_top_box p {
  margin-left: 10px;
  float: left;
  font-size: 20px;
  color: #4d3e36;
  margin-left: 6px;
}
.hdp_two_top .hdp_down_box {

}
.hdp_two_top .hdp_down_box h3 {
  font-size: 14px;
  color: #4d3e36;
  font-weight: normal;
  opacity: 0.5;
}
  .pic img{

  }
</style>
