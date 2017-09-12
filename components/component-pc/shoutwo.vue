// shouTwo.vue
<template>
  <div class="two_floor">
    <div class="w1190 hdp_two_wrap">
    <div class="hdp_two_top">
      <div class="hdp_top_box">
        <i class="fl"></i>
        <p>本周特惠</p>
        <i class="fr"></i>
      </div>
      <div class="hdp_down_box">
        <h3>～每周一10点更新  厂家直发～</h3>
      </div>
    </div>
    <ul class="hdp_two_list">
        <li class="fl">
          <router-link to="/detail?commodityId=85064467">
            <div class="two_img">
              <img @click="setStoreValue('85064467')" src="../../assets/images/img/tehuihuanggongjiao-pc.jpg" alt="">
            </div>
          </router-link>
          <div class="two_down">
            <router-link to="/detail?commodityId=85064467"><p class="firstp" @click="setStoreValue('85064467')">湖南特产三樟原产蒸鱼皇贡椒豆豉贡椒香菇贡厥黄贡椒礼盒装</p></router-link>
            <h3>¥58</h3>
          </div>
        </li>
        <li class="fl">
          <router-link to="/detail?commodityId=80267386">
            <div class="two_img">
              <img @click="setStoreValue('80267386')" src="../../assets/images/img/tehuimangguo-pc.jpg" alt="">
            </div>
          </router-link>
          <div class="two_down">
            <router-link to="/detail?commodityId=80267386"><p class="firstp" @click="setStoreValue('80267386')">全留香80g袋装优质牛肉干 休闲食品 办公室零食</p></router-link>
            <h3>¥16.9</h3>
          </div>
        </li>
        <li class="fl">
          <router-link to="/detail?commodityId=85047930">
            <div class="two_img">
              <img @click="setStoreValue('85047930')" src="../../assets/images/img/tehuitongrentangjuhuacha-pc.jpg" alt="">
            </div>
          </router-link>
          <div class="two_down">
            <router-link to="/detail?commodityId=85047930"><p class="firstp" @click="setStoreValue('85047930')">同仁堂黑苦荞茶 全胚芽 正品荞麦茶 273g袋装</p></router-link>
            <h3>¥56.9</h3>
          </div>
        </li>
        <li class="fl last">
          <router-link to="/detail?commodityId=83556928">
            <div class="two_img">
              <img @click="setStoreValue('83556928')" src="../../assets/images/img/tehuizhaojiahetao-pc.jpg" alt="">
            </div>
          </router-link>
          <div class="two_down">
            <router-link to="/detail?commodityId=83556928"><p class="firstp" @click="setStoreValue('83556928')">【淳沃】新疆和田大枣特级什锦枣夹核桃仁葡萄干500g 红枣干果夹心枣</p></router-link>
            <h3>¥19</h3>
          </div>
        </li>
    </ul>
  </div>
  <div class="w1190 hdp_two_wrap">
    <div class="hdp_two_top">
      <div class="hdp_top_box">
        <i class="fl"></i>
        <p>礼品专区</p>
        <i class="fr"></i>
      </div>
      <div class="hdp_down_box">
        <h3>～总有一款符合您企业气质的礼品～</h3>
      </div>
    </div>
    <ul class="hdp_two_list">
      <li class="fl">
        <router-link to="/detail?commodityId=82576294">
          <div class="two_img">
            <img src="../../assets/images/img/remenajiaoji-pc.jpg" alt="" @click="setStoreValue('82576294')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=82576294"><p @click="setStoreValue('82576294')">【特惠】厨尚皇纯天然小磨香油 5瓶礼盒装 全国包邮</p></router-link>
          <h3>¥69</h3>
        </div>
      </li>
      <li class="fl">
        <router-link to="/detail?commodityId=85035169">
          <div class="two_img">
            <img src="../../assets/images/img/remendazhaxie-pc.jpg" alt="" @click="setStoreValue('85035169')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=85035169"><p @click="setStoreValue('85035169')">【巴城蟹业】正宗阳澄湖大闸蟹公3.0-3.3母2.0-2.34对8只装礼品卡预售</p></router-link>
          <h3>¥288</h3>
        </div>
      </li>
      <li class="fl">
        <router-link to="/detail?commodityId=83150563">
          <div class="two_img">
            <img src="../../assets/images/img/remenganhaisheng-pc.jpg" alt="" @click="setStoreValue('83150563')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=83150563"><p class="firstp" @click="setStoreValue('83150563')">【尚古海】免发干海参礼盒10只装纯野生烟台刺参水产干货8小时速发免煮</p></router-link>
          <h3>¥516</h3>
        </div>
      </li>
      <li class="fl last">
        <router-link to="/detail?commodityId=78649288">
          <div class="two_img">
            <img src="../../assets/images/img/remenxiaomi-pc.jpg" alt="" @click="setStoreValue('78649288')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=78649288"><p class="firstp" @click="setStoreValue('78649288')">朝阳富硒小米顺合钱袋籽8小盒8斤装富硒小米一盒包邮</p></router-link>
          <h3>¥85</h3>
        </div>
      </li>
    </ul>
  </div>
  <div class="w1190 hdp_two_wrap">
    <div class="hdp_two_top">
      <div class="hdp_top_box">
        <i class="fl"></i>
        <p>员工福利</p>
        <i class="fr"></i>
      </div>
      <div class="hdp_down_box">
        <h3>～让企业的每一次福利都与众不同～</h3>
      </div>
    </div>
    <ul class="hdp_two_list">
      <li class="fl">
        <router-link to="/detail?commodityId=84942636">
          <div class="two_img">
            <img src="../../assets/images/img/teselingezaoniang-pc.jpg" alt="" @click="setStoreValue('84942636')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=84942636"><p class="firstp" @click="setStoreValue('84942636')">山西枣饮料临歌枣酿V3双支礼盒装养胃美颜解酒高档无醇果味饮料</p></router-link>
          <h3>¥78</h3>
        </div>
      </li>
      <li class="fl">
        <router-link to="/detail?commodityId=81988066">
          <div class="two_img">
            <img src="../../assets/images/img/tesedoubanjiang-pc.jpg" alt="" @click="setStoreValue('81988066')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=81988066"><p class="firstp" @click="setStoreValue('81988066')">调味品郫县豆瓣辣椒酱一级红油郫县豆瓣9kg</p></router-link>
          <h3>¥69</h3>
        </div>
      </li>
      <li class="fl">
        <router-link to="/detail?commodityId=85197605">
          <div class="two_img">
            <img src="../../assets/images/img/teseshangchayou-pc.jpg" alt="" @click="setStoreValue('85197605')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=85197605"><p class="firstp" @click="setStoreValue('85197605')">绿源井冈有机山茶油每瓶1L共两瓶送礼佳品礼盒装</p></router-link>
          <h3>¥289</h3>
        </div>
      </li>
      <li class="fl last">
        <router-link to="/detail?commodityId=80666837">
          <div class="two_img">
            <img src="../../assets/images/img/tesehuangxiaomi-pc.jpg" alt="" @click="setStoreValue('80666837')">
          </div>
        </router-link>
        <div class="two_down">
          <router-link to="/detail?commodityId=80666837"><p class="firstp" @click="setStoreValue('80666837')">耕者良品精品小米礼盒有机黄小米1盒包邮正宗朝阳小米</p></router-link>
          <h3>¥128</h3>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'shouTwo',
    methods: {
      setStoreValue: function(val) {
        window.localStorage.setItem("commodityId", val);
      }
    }
  }
</script>
<style scoped>
.two_floor {
  padding-bottom: 70px;
  background-color: #efeff2;
}
.hdp_two_wrap {
  width: 100%;
  padding-bottom: 10px;
  background-color: #efeff2;
}
.hdp_two_top {
  height: 100px;
  padding-top:1px;
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
  margin-left: 5px;
  float: left;
  font-size: 20px;
  color: #4d3e36;
  font-family: Microsoft YaHei;
}
.hdp_two_top .hdp_down_box {
  /*margin-top: -10px;*/
}
.hdp_two_top .hdp_down_box h3 {
  font-size: 14px;
  color: #4d3e36;
  font-weight: normal;
  opacity: 0.5;
  font-family: Microsoft YaHei;
}
.hdp_two_list {
  margin: 0 auto;
  height: 290px;
  width: 1190px;
}
.hdp_two_list li {
  position: relative;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 10px;
  width: 287.5px;
  height: 300px;
  border: 1px solid #d6d6d6;
  float: left;
}
.hdp_two_list li.last {
  margin-right: 0;
}
.hdp_two_list li .two_down {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  color: #4d3e36;
  padding-bottom:6px;

}
.hdp_two_list li .two_down p:first-child{
  text-align: left;
}
.hdp_two_list li .two_down p {
  margin-top: 10px;
  font-family: Microsoft YaHei;
  font-size:12px;
  width:204px;
  margin-left:42px;
  height:36px;
}
.hdp_two_list li .two_down h3 {
  margin: 0;
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
  color:#d72125;

}
.hdp_two_list li:hover .two_down {
  background-color: #e4e5e9;
  border-radius: 0 0 10px 10px;
}
.hdp_two_list li:hover {
  border: 1px solid transparent;
  -webkit-box-shadow: 0px 10px 20px rgba(47, 58, 112, .3);
  -moz-box-shadow: 0px 10px 20px rgba(47, 58, 112, .3);
  box-shadow: 0px 10px 20px rgba(47, 58, 112, .3);
}
.hdp_two_list li .two_img {
  text-align: center;
  width: 210px;
  height: 210px;
  margin: 10px;
}
.hdp_two_list li .two_img img {
  display: inline-block;
  text-align: center;
  margin-left: 28px;
  width:210px;
  height:210px;
}
</style>
