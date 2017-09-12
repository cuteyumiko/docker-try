<template>
  <div class="home" >
  <div>{{loginCode}}</div>
    <div class="backtop" @click="backtop"></div>
  	<hdp-top :messagePC="messagePC"></hdp-top>
  	<search-all></search-all>
  	<hdp-nav></hdp-nav>
    <hdp-carousel></hdp-carousel>
    <!--高红军start-->
    <div class="wrapper">
      <!--热品采购-->
      <div class="hotProducts">
        <div class="hotTit">
          <span class="line"></span>
          <span>热品采购</span>
          <span class="line"></span>
        </div>
        <div class="hotList">
          <div class="left">
            <a href="http://zt.99114.com/activity/camellia-oil/index.html " target="_blank">
              <img src="~assets/images/img/img2/f1-1.jpg" alt="" />
            </a>
          </div>
          <div class="center">
            <a href="http://hdp.99114.com/detail?commodityId=85048055" target="_blank">
              <img src="~assets/images/img/img2/f1-2.jpg" alt="" />
            </a>
            <a href="http://hdp.99114.com/detail?commodityId=83556928" target="_blank">
              <img src="~assets/images/img/img2/f1-3.jpg" alt="" />
            </a>
          </div>
          <div class="right">
            <div class="right_top">
              <a href="http://hdp.99114.com/detail?commodityId=80311250" target="_blank">
                <img src="~assets/images/img/img2/f1-6.jpg" alt="" />
              </a>
            </div>
            <div class="right_bottom">
              <a href="http://hdp.99114.com/detail?commodityId=84793954" target="_blank">
                <img src="~assets/images/img/img2/f1-5.jpg" alt="" />
              </a>
              <a href="http://hdp.99114.com/detail?commodityId=81993992" target="_blank">
                <img src="~assets/images/img/img2/f1-4.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--新品发布-->
      <div class="newProducts">
        <div class="originTit">
          <div class="hotTit">
            <span class="line" style="margin-top:-45px;"></span>
            <span style="margin-top:-45px;">新品发布</span>
            <span class="line" style="margin-top:-45px;"></span>
          </div>
        </div>
        <div class="picScroll-left">
          <div class="hd">
            <a class="next"></a>
            <a class="prev"></a>
          </div>
          <div class="bd">
            <ul class="picList">
                <li>
                  <router-link to="/detail?commodityId=80083974&navCurrentIndex=3" target="_blank">
                   <div class="pic"><span><img src="~assets/images/img/img2/newfabu-1.jpg" /></span></div>
                   <div class="title"><span>【河北宽城特产】神栗新鲜板栗仁礼盒1000g装</span><p>￥79</p></div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/detail?commodityId=83073861&navCurrentIndex=2" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-2.jpg" /></span></div>
                  <div class="title"><span>【优质好花茶】精华饮品无添加去火饮品尚清速溶金银花</span><p>￥145</p></div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/detail?commodityId=85197652&navCurrentIndex=0" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-3.jpg" /></span></div>
                  <div class="title"><span>【江西绿源井冈】一级冷榨纯正山茶油1L 保健养生佳品</span><p>￥169</p></div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/detail?commodityId=85943230&navCurrentIndex=0" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-4.jpg" /></span></div>
                  <div class="title"><span>【山西特产】有机礼麦五台山优质白藜麦米500g真空装</span><p>￥60</p></div>
                  </router-link>
                </li>


                <li>
                <router-link to="/detail?commodityId=85035169&navCurrentIndex=1" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-5.jpg" /></span></div>
                  <div class="title"><span>【巴城蟹业】正宗阳澄湖大闸蟹 公3.0 母2.0 4对8只礼盒装</span><p>￥398</p></div>
                </router-link>
              </li>
                <li>
                <router-link to="/detail?commodityId=81221395&navCurrentIndex=2" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-6.jpg" /></span></div>
                  <div class="title"><span>【益阳安化黑茶】金芙蓉天尖金茯砖 黑茶1000g礼盒装</span><p>￥288</p></div>
                </router-link>
              </li>
                <li>
                <router-link to="/detail?commodityId=83676779&navCurrentIndex=0" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-7.jpg" /></span></div>
                  <div class="title"><span>【瑞丰山珍之王】房县特产高蛋白低脂肪香菇360g/盒</span><p>￥118</p></div>
                </router-link>
              </li>
                <li>
                <router-link to="/detail?commodityId=85194531&navCurrentIndex=2" target="_blank">
                  <div class="pic"><span><img src="~assets/images/img/img2/newfabu-8.jpg" /></span></div>
                  <div class="title"><span>【漂乡老酒】原浆酒 酒香浓郁 供应1.5L两坛礼盒装 </span><p>￥198</p></div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="next">
            <a href=""></a>
          </div>
        </div>
      </div>
      <!--产地货源-->
      <div class="originSupply">
        <div class="originTit">
          <div class="hotTit">
            <span class="line"></span>
            <span>产地货源</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="originSupList">
          <router-link to="/detail?commodityId=37847541&navCurrentIndex=1" target="_blank">
            <div class="spe">
                <img src="~assets/images/img/img2/chandi-1.jpg" alt="" />
             <div class="spe_det">
                <p class="jianjie">阳澄湖大闸蟹</p>
                <p class="tips1"><span style="text-align: left;display: block">阳澄湖蟹卡预售公3.5-3.9两/4只母2.5-2.9两/4只装</span></p>
                <p class="price1">¥339</p>
             </div>
          </div>
          </router-link>

          <div class="normal">
            <ul>
                 <li>
                   <router-link to="/detail?commodityId=85064467&navCurrentIndex=0" target="_blank">
                <div>
                  <img src="~assets/images/img/img2/chandi-2.jpg" alt="" />
                </div>
                <div class="spe_det">
                  <p class="jianjie">兴薇黄贡椒</p>
                  <p class="tips2"><div>蒸鱼皇贡椒 豆豉贡椒 香菇 贡厥 黄贡椒礼盒</div></p>
                  <p class="price2">¥58</p>
                </div>
                   </router-link>
              </li>


                <li>
                  <router-link to="/detail?commodityId=82576294&navCurrentIndex=0" target="_blank">
                  <div>
                    <img src="~assets/images/img/img2/chanpi-3.jpg" alt="" />
                  </div>
                  <div class="spe_det">
                    <p class="jianjie">小磨香油</p>
                    <p class="tips2"><div>厨尚皇小磨香油礼盒5瓶1100g特惠装</div></p>
                    <p class="price2">¥69</p>
                  </div>
                  </router-link>
                </li>


                <li>
                  <router-link to="/detail?commodityId=80819966&navCurrentIndex=0" target="_blank">
                  <div>
                    <img src="~assets/images/img/img2/chandi-4.jpg" alt="" />
                  </div>
                  <div class="spe_det">
                    <p class="jianjie">龙江生态小米</p>
                    <p class="tips2"><div>龙江留香生态小米 2.5KG家庭装</div></p>
                    <p class="price2">¥59</p>
                  </div>
                  </router-link>
                </li>


                <li>
                  <router-link to="/detail?commodityId=85402035&navCurrentIndex=3" target="_blank">
                  <div>
                    <img src="~assets/images/img/img2/chandi-5.jpg" alt="" />
                  </div>
                  <div class="spe_det">
                    <p class="jianjie">秋香糕点</p>
                    <div>苏式月饼桃酥饼干传统礼盒480g*2</div>
                    <p class="price2">¥58</p>
                  </div>
                  </router-link>
                </li>


                <li>
                  <router-link to="/detail?commodityId=82551111&navCurrentIndex=2" target="_blank">
                  <div>
                    <img src="~assets/images/img/img2/chandi-6.jpg" alt="" />
                  </div>
                  <div class="spe_det">
                    <p class="jianjie">美味更健康</p>
                    <p class="tips2"><div>桃吉吉黄桃罐头红灰色2罐装</div></p>
                    <p class="price2">¥23.5</p>
                  </div>
                  </router-link>
                </li>


                <li>
                  <router-link to="/detail?commodityId=86799931&navCurrentIndex=1" target="_blank">
                  <div>
                    <img src="~assets/images/img/img2/chandi-7.jpg" alt="" />
                  </div>
                  <div class="spe_det">
                    <p class="jianjie">绿心奇异果</p>
                    <p class="tips2"><div>陕西眉县徐香猕猴桃 奇异果绿心肉</div></p>

                    <p class="price2">¥41</p>
                  </div>
                  </router-link>

                </li>

            </ul>
          </div>
          </ul>
        </div>
      </div>
      <!--品牌推荐-->
      <div class="preferredBrand">
        <div class="hotTit">
          <span class="line"></span>
          <span>品牌推荐</span>
          <span class="line"></span>
        </div>
        <div class="brandList">
          <div class="brandLeft">
            <router-link to="/detail?commodityId=83555633&navCurrentIndex=2" target="_blank">
            <span >
              <img src="~assets/images/img/img2/tuiLogo1.jpg" alt="" />
            </span>
            <dl>
              <dt>
                <span >
                  <img src="~assets/images/img/img2/tuiImg1.jpg" alt="" />
                </span>
              </dt>
              <dd>
                <p class="tip1"><span >蒟蒻高纤低卡代餐包</span></p>
                <p class="tab">可吸膳食纤维</p>
                <p class="rep">“友膳元”蒟蒻甘露代餐包，选用优质魔芋，精选新鲜水果，采用先进工艺制成高纤低卡营养代餐包，为您的健康加油鼓劲！</p>
              </dd>
            </dl>
            </router-link>
          </div>
          <ul class="brandRight">
            <router-link to="/detail?commodityId=85949965&navCurrentIndex=2" target="_blank">
             <li>
                <span>
                  <img src="~assets/images/img/img2/tuiLogo2.jpg" alt="" />
                </span>
              <div class="tab1">
                <p class="tip2"><span >正宗松阳香茶</span></p>
                <p class="tab11">好茶精选</p>
                <span  class="adv">
                  <img src="~assets/images/img/img2/tuiImg2.jpg" alt="" />
                </span>
              </div>
             </li>
            </router-link>
            <router-link to="/detail?commodityId=85048055&navCurrentIndex=0" target="_blank">
              <li>
                <span>
                  <img src="~assets/images/img/img2/tuiLogo3.jpg" alt="" />
                </span>
                <div class="tab1">
                  <p class="tip2"><span>博林鑫春芽大米</span></p>
                  <p class="tab11">精品长粒米</p>
                  <span  class="adv">
                    <img src="~assets/images/img/img2/tuiImg3.jpg" alt="" />
                  </span>
                </div>
              </li>
            </router-link>
            <router-link to="/detail?commodityId=85463568&navCurrentIndex=2" target="_blank">
              <li>
                <span>
                  <img src="~assets/images/img/img2/tuiLogo4.jpg" alt="" />
                </span>
                <div class="tab1">
                  <p class="tip2"><span>经典冰白葡萄酒</span></p>
                  <p class="tab11">精艺酿好酒</p>
                  <span  class="adv">
                    <img src="~assets/images/img/img2/tuiImg4.jpg" alt="" />
                  </span>
                </div>
              </li>
            </router-link>
            <router-link to="/detail?commodityId=85194182&navCurrentIndex=0" target="_blank">
              <li>
                <span>
                  <img src="~assets/images/img/img2/tuiLogo5.jpg" alt="" />
                </span>
                <div class="tab1">
                  <p class="tip2"><span>有机纯正山茶油3L装</span></p>
                  <p class="tab11">绿色健康</p>
                  <span  class="adv">
                    <img src="~assets/images/img/img2/tuiImg5.jpg" alt="" />
                  </span>
                </div>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <!--粮油米面-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>粮油米面</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=80666837&navCurrentIndex=0" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor8-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【耕者良品黄小米】有机黄小米礼盒装400g*6</span></p>
              <p class="price">￥128</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=86089746&navCurrentIndex=0" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor8-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【新疆特产】正宗优质羊脂籽米来自新疆的问候</span></p>
              <p class="price">￥65</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85239027&navCurrentIndex=0" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor8-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【四川双和祥·中江手工空心挂面】1800克一级礼品盒精选“腰面”</span></p>
              <p class="price">￥128</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=83674178&navCurrentIndex=0" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor8-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【贵州特产】手工调味品辣椒酱礼盒包装大礼包6味装</span></p>
              <p class="price">￥52.9</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--生鲜水产-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>生鲜水产</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=83618425&navCurrentIndex=1" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor1-1.jpg" alt="" />
              </div>
            <p class="tips"><span >【平和特产】 新鲜水果 黄金百香果 5斤礼盒装</span></p>
            <p class="price">￥79.8</p>
          </li>
          </router-link>
          <router-link to="/detail?commodityId=85046368&navCurrentIndex=1" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor1-2.jpg" alt="" />
              </div>
              <p class="tips"><span>【苏澄蟹皇蟹卡】买一送一 阳澄湖公蟹3.5两/母蟹2.5两8只装 </span></p>
              <p class="price">￥519</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=86579235&navCurrentIndex=1" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor1-3.jpg" alt="" />
              </div>
              <p class="tips"><span>【林间有湖蟹卡】 阳澄湖大闸蟹公蟹3两/母蟹2两4对8只装</span></p>
              <p class="price">￥199</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=83150563&navCurrentIndex=1" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor1-4.jpg" alt="" />
              </div>
              <p class="tips"><span>【牟平海参】免发干海参礼盒10只装 纯野生刺参 8小时速发</span></p>
              <p class="price">￥516</p>
            </li>
          </router-link>


        </ul>
      </div>

      <!--茶酒饮料-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>茶酒饮料</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=85762655&navCurrentIndex=2" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor3-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【养生好茶】黑糖灰枣黄姜茶 8包每盒养生必备</span></p>
              <p class="price">￥59</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=82953662&navCurrentIndex=2" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor3-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【同仁堂】养生玫瑰花茶实惠组合装45g/罐*3</span></p>
              <p class="price">￥81.6</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85362655&navCurrentIndex=2" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor3-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【云南咖啡】爱伲庄园 Jeremy2号 250g有机咖啡</span></p>
              <p class="price">￥98</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85190990&navCurrentIndex=2" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor3-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【山西枣酿】枣酒 高档餐饮果酒 750ml*2瓶装文化款</span></p>
              <p class="price">￥120</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--休闲食品-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>休闲食品</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=82958268&navCurrentIndex=3" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor2-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【安徽淮南特产】刘香豆渣饼 休闲零食小吃1000g/袋</span></p>
              <p class="price">￥42</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85313323&navCurrentIndex=3" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor2-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【云南特产】爱伲庄园 咖啡豆牛轧糖 180g量贩装</span></p>
              <p class="price">￥39.8</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80267386&navCurrentIndex=3" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor2-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【全留香牛肉干】高原优质牛肉干 休闲食品80g/袋</span></p>
              <p class="price">￥13.9</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=83788527&navCurrentIndex=3" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor2-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【蔬菜干】 综合果蔬干黄秋葵脆片休闲零食4包装</span></p>
              <p class="price">￥49.5</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--家居用品-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>家居用品</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=81698977&navCurrentIndex=4" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor4-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【建德插座】凯特五孔1.8米10A空位防雷防过载双色高阻燃插座</span></p>
              <p class="price">￥46</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80048811&navCurrentIndex=4" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor4-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【思米达灭蚊灯】 LED光触媒XT-299灭蚊灯家用静音无辐射</span></p>
              <p class="price">￥49.9</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85329758&navCurrentIndex=4" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor4-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【罗蒂曼夏凉被空调被】1.5-2.0米可水洗加厚被芯钻石绒</span></p>
              <p class="price">￥67</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85442549&navCurrentIndex=4" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor4-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【小富豪婴儿床】原木色宝贝实木婴儿床超静音摇篮床</span></p>
              <p class="price">￥358</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--工艺礼品-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>工艺礼品</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=86097704&navCurrentIndex=5" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor5-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【蔚县剪纸】脸谱集锦 头号剪纸丝绸脸谱高档礼盒包装</span></p>
              <p class="price">￥550</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=86408802&navCurrentIndex=5" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor5-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【蔚县剪纸】 十二生肖剪纸画册28cm*37cm 剪纸集</span></p>
              <p class="price">￥110</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=81301811&navCurrentIndex=5" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor5-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【同泰紫砂石瓢壶】原矿紫泥喀左功夫紫砂壶 手工精美刻绘</span></p>
              <p class="price">￥500</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=82864879&navCurrentIndex=5" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor5-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【喀左三川天佑紫砂壶】祥云壶 全手工精制 原矿紫砂泥</span></p>
              <p class="price">￥550</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--家装家饰-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>家装家饰</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=85424506&navCurrentIndex=6" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor6-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【科迪恩水龙头】无铅冷热单孔浴室卫生间水龙头</span></p>
              <p class="price">￥161.9</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85516184&navCurrentIndex=6" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor6-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【科恩迪】全铜水龙头淋浴器 沐浴花洒喷头套装</span></p>
              <p class="price">￥369</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85190297&navCurrentIndex=6" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor6-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【草庄诗朗】欧式条纹宫廷风卧室客厅电视背景墙纸</span></p>
              <p class="price">￥69</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=85253451&navCurrentIndex=6" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor6-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【草庄诗朗壁纸】花朵田园风卧室客厅电视背景墙纸</span></p>
              <p class="price">￥69</p>
            </li>
          </router-link>

        </ul>
      </div>
      <!--日用百货-->
      <div class="fruitFresh">
        <div class="hotTit">
          <span class="line"></span>
          <span>日用百货</span>
          <span class="line"></span>
        </div>
        <ul class="food">
          <router-link to="/detail?commodityId=86037156&navCurrentIndex=7" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor7-1.jpg" alt="" />
              </div>
              <p class="tips"><span >【长柄彩虹伞】24骨遇水开花长柄加大晴雨伞10把起订</span></p>
              <p class="price">￥288</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80246703&navCurrentIndex=7" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor7-2.jpg" alt="" />
              </div>
              <p class="tips"><span >【恒阳胶带】快递封箱打包封口胶 蓝色警示语胶带 3卷装</span></p>
              <p class="price">￥22.9</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80048487&navCurrentIndex=7" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor7-3.jpg" alt="" />
              </div>
              <p class="tips"><span >【思米达灭蚊灯】卡通时尚LED光触媒XT-339灭蚊灯</span></p>
              <p class="price">￥39.9</p>
            </li>
          </router-link>
          <router-link to="/detail?commodityId=80032372&navCurrentIndex=7" target="_blank">
            <li>
              <div>
                <img src="~assets/images/img/img2/floor7-4.jpg" alt="" />
              </div>
              <p class="tips"><span >【思米达】强力大网面灭蚊充电式LED电子灭蚊拍</span></p>
              <p class="price">￥29.8</p>
            </li>
          </router-link>

        </ul>
      </div>


    </div>


    <!--高红军end-->
    <!--<hdp-one></hdp-one>-->
    <!--<hdp-two></hdp-two>-->
    <!--<hdp-three></hdp-three>-->
    <hdp-fcarousel></hdp-fcarousel>


    <hdp-footersub></hdp-footersub>
    <hdp-footer></hdp-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import hdpFooter from '../components/component-pc/footer.vue'
  import hdpTop from '../components/component-pc/top.vue'
  import searchAll from '../components/component-pc/searchall.vue'
  import hdpNav from '../components/component-pc/nav.vue'
  import hdpCarousel from '../components/component-pc/carousel.vue'
//  import hdpOne from '../../component/component-pc/shouone.vue'
//  import hdpTwo from '../../component/component-pc/shoutwo.vue'
//  import hdpThree from '../../component/component-pc/shouthree.vue'
 // import hdpFcarousel from '../../component/component-pc/footercarousel.vue'
  import hdpFootersub from '../components/component-pc/footersub.vue'
  import axios from 'axios'
  import * as HOST from '../assets/js/config_server.js'
  export default{
    
    data(){
      return {
        loginCode:'222',
          messagePC:null
      }
    },
    async asyncData ({ params,req }) {
      try{
        let url=HOST.HOST_HDPUSER+'/user/toLoginPc'
        let SSONAME = req.cookies.SSONAME
        let MEMBERTGC = req.cookies.MEMBERTGC
        let {data} = await axios.get(url,{params:{SSONAME,MEMBERTGC}})
        
        return {
          loginCode:data.respBody.loginCode,
          userId:data.respBody.userId
        }
      }catch(e){
        console.log(e)
      }
      
    },
    mounted(){
        this.toMove()
        console.log('sss')
    },
    methods:{
//        回到顶部
      backtop:function(){
        document.body.scrollTop=0;
      },
      toSearchList:function(index){
        window.localStorage.setItem("navCurrentIndex",index);
      },
      closeEr:function(){
          this.$nextTick(()=>{
           let home=document.getElementsByClassName('whiteCover')[0]
            home.addEventListener('click',function(){
                     this.showSao=false

            })
          })
      },

      //从cookie获取会员账号
      getCookie(c_name){
        var arr,reg=new RegExp("(^| )"+c_name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
          return unescape(arr[2]);
        else
          return null;
      },
      toMove:function(){
        console.log('dd')
        // $(function(){
          jQuery(".picScroll-left").slide({
            titCell:".hd ul",
            mainCell:".bd ul",
            autoPage:true,
            effect:"left",
            autoPlay:true,
            scroll:4,
            vis:4,
            delayTime:1000,
            trigger:"mouseover"
          });

        // })
        $(".picList li").hover(function(){
          $(".picList li").css("border-color","")
          $(this).css("border-color","#ff910a")
        },function(){
          $(".picList li").css("border-color","")
        })

      }
    },
    components:{
      hdpFooter,
      hdpTop,
      hdpNav,
      searchAll,
      hdpCarousel,
//      hdpOne,
//      hdpTwo,
//      hdpThree,
     // hdpFcarousel,
      hdpFootersub
    }
  }
</script>
<style scoped>
  .hd ul li{
    display: none;
  }

  body,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  th,
  td,
  dl,
  dd,
  form,
  fieldset,
  legend,
  input,
  textarea,
  select {
    margin: 0;
    padding: 0
  }
  body {
    font: 12px "微软雅黑", "Arial Narrow", HELVETICA;
    -webkit-text-size-adjust: 100%;
    line-height: 22px;
    background: #fff;
    color: #252525;
  }

  a {
    color: #252525;
    text-decoration: none
  }

  a:hover {
    text-decoration: none
  }

  em {
    font-style: normal
  }

  li {
    list-style: none
  }

  img {
    border: 0;
    vertical-align: middle
  }


  /*中间商品*/

  .wrapper {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 70px;
  }

  .hotProducts {
    width: 1190px;
    height: 485px;
    margin: 0 auto;
  }

  .hotProducts img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }

  .hotTit {
    height: 85px;
    line-height: 85px;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    font-family: Microsoft YaHei;
  }

  .hotTit span {
    font-size: 26px;
    color: #4d3e36;
    line-height: 85px;
    display: inline-block;
    overflow: hidden;
    max-width: 600px;
    height: 85px;
    margin: 0 26px;
    vertical-align: top;
  }

  .hotTit .line {
    width: 40px;
    height: 85px;
    display: inline-block;
    margin: 0px;
    /* background: url(~assets/images/img/img2/hotbg.jpg) no-repeat left center; */
  }

  .hotList {
    width: 100%;
    height: 369px;
    overflow: hidden;
  }

  .hotList .left {
    width: 390px;
    height: 369px;
    overflow: hidden;
    float: left;
    margin-right: 10px;
  }

  .hotList .left a {
    display: block;
    width: 390px;
    height: 369px;
  }

  .hotList .left a img {
    width: 100%;
    height: 100%
  }

  .hotList .center {
    width: 390px;
    height: 369px;
    overflow: hidden;
    float: left;
    margin-right: 10px;
  }

  .hotList .center a {
    display: block;
    width: 390px;
    height: 180px;
    margin-bottom: 9px;
    overflow: hidden;
  }

  .hotList .center img {
    width: 100%;
    height: 100%;
  }

  .hotList .right {
    width: 390px;
    height: 369px;
    float: left;
    overflow: hidden;
  }

  .right .right_top {
    width: 390px;
    height: 180px;
    overflow: hidden;
    margin-bottom: 9px;
  }

  .right .right_top a {
    display: block;
    width: 390px;
    height: 180px;
  }

  .right .right_top a img {
    width: 100%;
    height: 100%;
  }

  .right_bottom {
    width: 400px;
    height: 180px;
    overflow: hidden;
  }

  .right_bottom a {
    display: block;
    width: 190px;
    height: 180px;
    overflow: hidden;
    float: left;
    margin-right: 10px;
  }

  .right_bottom a img {
    width: 100%;
    height: 100%;
  }


  /*----------------------------------新品发布--------------------------------------------*/

  .newProducts {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .newTit {
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
    height: 95px;
  }
  .newProducts .hotTit {
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
  }

  .newProducts .hotTit span {
    font-size: 26px;
    color: #4d3e36;
    line-height: 45px;
    display: inline-block;
    overflow: hidden;
    max-width: 600px;
    height: 45px;
    vertical-align: top;
  }
  .newProducts img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }

  .picScroll-left {
    width: 1330px;
    overflow: hidden;
    position: relative;
    margin:0 auto;
    height: 420px;
  }

  .picScroll-left .hd {
  }

  .picScroll-left .hd .prev{
    display: block;
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 0px;
    margin-top: 180px;
    overflow: hidden;
    cursor: pointer;
    /*background: url("../images/leftBtn.png") no-repeat;*/

    /* background: url("~assets/images/img/img2/leftBtn.png") no-repeat; */
  }
  .picScroll-left .hd .next {
    display: block;
    width: 50px;
    height: 50px;
    float: right;
    margin-right: 0px;
    margin-top: 180px;
    overflow: hidden;
    cursor: pointer;
    /*background: url("../images/rightBtn.png") no-repeat;*/
    /* background: url("~assets/images/img/img2/rightBtn.png") no-repeat; */
  }

  .picScroll-left .hd ul {
    float: right;
    overflow: hidden;
    zoom: 1;
    margin-top: 10px;
    zoom: 1;
  }

  .picScroll-left .hd ul li {
    float: left;
    width: 9px;
    height: 9px;
    overflow: hidden;
    margin-right: 5px;
    text-indent: -999px;
    cursor: pointer;
    /*background: url("images/icoCircle.gif") 0 -9px no-repeat;*/
    /*background: url("~assets/images/img/img2/icoCircle.gif") 0 -9px no-repeat;*/
  }

  .picScroll-left .hd ul li.on {
    background-position: 0 0;
  }

  .picScroll-left .hd img {
    margin-top: 5px;
  }

  .picScroll-left .bd {
    padding-left:70px;
    padding-top:20px;
  }

  .picScroll-left .bd ul {
    overflow: hidden;
    zoom: 1;
  }

  .picScroll-left .bd ul li {
    width: 290px;
    display: block;
    height: 398px;
    border: 1px solid #e7e7e7;
    float: left;
    position: relative;
    margin-right: 9px;
  }

  .picScroll-left .bd ul li .pic {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width: 290px;
    height: 290px;
    overflow: hidden;
  }

  .picScroll-left .bd ul li .pic img {
    max-height: 286px;
    max-width: 286px;
    vertical-align: middle;
  }


  .picScroll-left .bd ul li .title {
    margin: 0 auto;
    width: 230px;
    margin-top: 16px;
    overflow: hidden;
    text-align: left;
  }
  .picScroll-left .bd ul li .title a{
    margin: 0 auto;
    width: 230px;
    height: 40px;
    margin-top: 16px;
    overflow: hidden;
    color:#4d3e36;
    font-size:14px;
    font-family: Microsoft YaHei;

  }
  .picScroll-left .bd ul li .title p {
    width: 236px;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    text-align: center;
    overflow: hidden;
    font-size: 16px;
    color: #cc141c;
    font-family: Microsoft YaHei;
    font-weight:bold;
  }


  /*------------------------产地货源--------------------------*/

  .originSupply{
    width: 100%;
    height: 750px;
    background: #edeff5;
    overflow: hidden;
    margin-top:59px;
  }

  .originSupply img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }

  .originSupList {
    width: 1190px;
    margin: 0 auto;
    height: 574px;
    /*font-size:0;*/
  }

  .originSupList .spe {
    height: 573px;
    width: 420px;
    overflow: hidden;
    float: left;
    background: #fff;
  }

  .originSupList .spe a {
    display: table-cell;
    width: 420px;
    height: 420px;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
  }

  .originSupList .spe a img {
    max-height: 420px;
    max-width: 420px;
  }

  .spe_det {
    width: 292px;
    height: 153px;
    margin-left:64px;
    border-top: 1px solid #edeff5;
    text-align: center;
  }

  .jianjie {
    height: 22px;
    background: #d46f4d;
    padding: 0px 10px;
    max-width: 292px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 22px;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    margin-top: 16px;
    vertical-align: top;
    font-family: Microsoft YaHei;
  }

  .tips1 {
    width: 292px;
    height: 46px;
    line-height: 23px;
    margin-top: 17px;
    font-size: 16px;

  }

  .spe_det .tips1 a {
    display: block;
    width: 292px;
    height: 46px;
    color: #4d3e36;
    font-size: 16px;
    overflow: hidden;
    text-align: left;
    margin-top: 14px;
  }

  .price1 {
    width: 292px;
    height: 48px;
    overflow: hidden;
    line-height: 48px;
    color: #cc141c;
    font-size: 20px;
    text-align: center;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }

  .originSupList .normal {
    width: 768px;
    height: 573px;
    float: left;
  }

  .originSupList .normal li {
    width: 246px;
    height: 282px;
    float: left;
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .originSupList .normal li a {
    display: table-cell;
    width: 238px;
    height: 202px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
  }

  .originSupList .normal li a img {
    max-height: 202px;
    max-width: 202px;
  }

  .normal .spe_det {
    width: 202px;
    margin: 0 auto;
    text-align: center;
    height: 70px;
    padding: 0 22px;
    padding-top: 9px;
  }

  .normal .jianjie {
    max-width: 182px;
    margin-top: 0px;
    font-family: Microsoft YaHei;
  }

  .normal .tips2 {
    display: none;
    width: 100%;
    height: 27px;
    line-height: 27px;
    font-size: 0px;
    margin-top: 0px;
    overflow: hidden;
    border:1px solid red;
  }

  .normal .spe_det .tips2 a {
    display: block;
    width: 202px;
    height: 27px;
    color: #4d3e36;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 0;
    white-space: nowrap;
  }

  .price2 {
    width: 202px;
    height: 15px;
    overflow: hidden;
    line-height: 15px;
    color: #cc141c;
    font-size: 14px;
    text-align: center;
    margin-top:4px;
    font-family: Microsoft YaHei;
    font-weight:bold;
  }


  /*---------------------品牌推荐------------------------------------*/

  .preferredBrand {
    width: 1190px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

  .preferredBrand img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05)
  }

  .brandList {
    width: 1190px;
    height: auto;
    overflow: hidden;
  }

  .brandLeft {
    float: left;
    width: 376px;
    height: 480px;
    overflow: hidden;
    border: 1px solid #e7e7e7;
  }

  .brandLeft a {
    width: 356px;
    height: 248px;
    overflow: hidden;
    display: table-cell;
    padding: 10px;
    border-bottom: 1px solid #e7e7e7;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
  }

  .brandLeft a img {
    vertical-align: middle;
  }

  .brandLeft dl {
    width: 356px;
    height: 212px;
    overflow: hidden;
    margin: 0 auto;
  }

  .brandLeft dl dt {
    margin: 10px 0;
    float: left;
    overflow: hidden;
    width: 192px;
    height: 192px;
  }

  .brandLeft dl dt a {
    display: table-cell;
    width: 192px;
    height: 192px;
    text-align: center;
    vertical-align: middle;
    padding: 0;
    border-bottom: none;
  }

  .brandLeft dl dt a img {
    max-height: 192px;
    max-width: 192px;
    vertical-align: middle;
  }

  .brandLeft dl dd {
    width: 155px;
    height: 192px;
    margin-top: 10px;
    overflow: hidden;
    float: left;
    margin-left: 9px;
  }

  .tip1 {
    width: 155px;
    height: 36px;
    overflow: hidden;
    font-family: Microsoft YaHei;
  }

  .tip1 a {
    display: block;
    width: 155px;
    height: 36px;
    line-height: 36px;
    text-align: left;
    overflow: hidden;
    color: #4d3e36;
    font-size: 16px;
    padding: 0;
    border-bottom: none;
  }

  .tab {
    display: inline-block;
    max-width: 145px;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    padding: 0 5px;
    background: #f57c2c;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #ffffff;
    font-family: Microsoft YaHei;
  }

  .rep {
    width: 155px;
    height: 120px;
    overflow: hidden;
    line-height: 20px;
    font-size: 12px;
    color: #adadad;
    margin-top: 6px;
    font-family: Microsoft YaHei;
  }

  .brandRight {
    width: 812px;
    height: 482px;
    overflow: hidden;
    float: left
  }

  .brandRight li {
    width: 392px;
    height: 234px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    float: left;
    margin: 0 0 10px 10px;
  }

  .brandRight li a {
    display: table-cell;
    width: 216px;
    height: 216px;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
    float: left;
  }

  .brandRight li a img {
    max-height: 216px;
    max-width: 216px;
  }

  .tab1 {
    width: 150px;
    height: 224px;
    float: right;
    margin-top: 10px;
  }

  .brandRight .tip2 {
    width: 150px;
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    font-family: Microsoft YaHei;
  }

  .brandRight .tip2 a {
    display: block;
    width: 150px;
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    padding: 0px;
    font-size: 16px;
    color: #4d3e36;
  }

  .tab11 {
    max-width: 140px;
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    background: #f57c2c;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    margin-top: 5px;
    font-family: Microsoft YaHei;
  }

  .brandRight .tab1 .adv {
    width: 150px;
    height: 150px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0;
    margin-top: 10px;
  }


  /*-------------------------水果生鲜-----------------------------------------*/

  .fruitFresh {
    width: 1195px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

  .fruitFresh img:hover {
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }

  .fruitFresh .hotTit {
    width: 1190px;
  }

  .food {
    width: 1196px;
    overflow: hidden;
    height: auto;
  }

  .fruitFresh .food li {
    width: 290px;
    display: block;
    height: 398px;
    border: 1px solid #e7e7e7;
    float: left;
    position: relative;
    margin-right: 9px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .fruitFresh .food li a {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width: 290px;
    height: 290px;
    overflow: hidden;
  }

  .fruitFresh .food li a img {
    vertical-align: middle;
  }

  .fruitFresh .food li .tips {
    margin: 0 27px;
    width: 238px;
    height: 40px;
    margin-top: 16px;
    overflow: hidden;
    font-family: Microsoft YaHei;
    text-align: left;
  }

  .fruitFresh .food li .tips a {
    width: 238px;
    height: 40px;
    line-height: 20px;
    font-size: 14px;
    color: #4d3e36;
    text-align: left;
    overflow: hidden;
    display: block;
  }

  .fruitFresh .food li .price {
    width: 236px;
    margin: 0 27px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    overflow: hidden;
    font-size: 16px;
    color: #cc141c;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .spe_det div{
   height:16px;
    width:100%;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin-top:4px;
    font-family: Microsoft YaHei;
  }
  /*回到顶部*/
  .backtop {
    position: fixed;
    width: 55px;
    height: 81px;
    /* background: url(~assets/images/img/top.png); */
    right:20px;
    bottom: 170px;
    z-index: 100;
    cursor:pointer ;
  }
  .spe_det p span{
    font-family: Microsoft YaHei;
  }
</style>
