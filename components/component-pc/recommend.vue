<template>
  <div class="two_floor">
    <div class="recommend-title">买家还在看</div>
    <div class="w1190 hdp_two_wrap">
      <ul class="hdp_two_list">
        <li class="fl" v-for="(item ,index) in firstRecommendGoods" @click="toDtails('firstRecommendGoods',index)">
          <div class="two_img">
            <img :src="item.pic">
          </div>
          <div class="two_down">
            <p>{{item.name}}</p>
            <h3>¥{{item.orderPrice}}</h3>
          </div>
        </li>

      </ul>
      <ul class="hdp_two_list">
        <li class="fl" v-for="(item,index) in twoRecommendGoods" @click="toDtails('twoRecommendGoods',index)">
          <div class="two_img">
            <img :src="item.pic">
          </div>
          <div class="two_down">
            <p>{{item.name}}</p>
            <h3>¥{{item.orderPrice}}</h3>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        recommendGoods:null,
        firstRecommendGoods:null,
        twoRecommendGoods:null,
        commodityId:null
      }
    },
    name:'',
    mounted(){
      this.getRecommendGood()
    },
    methods:{
//        获取商品详情数据
      getGoodDetailData(){
//            this.$nextTick(()=> {
//              let bodyDom = document.getElementsByTagName('body')[0]
//              bodyDom.scrollTop = 0
//            })

        let url = HOST_HDPCOMMODITY + '/commodityFront/getCommodityDetail'
        if (window.localStorage.getItem('commodityId')){
          let commodityId=window.localStorage.getItem('commodityId')
          this.$resource(url).get({
            commodityId: commodityId,
            version: 'v1.2'
          }).then((response) => {
            if (response.status == 200) {
              this.goodDetail = response.body
              if (response.body.pic.split(',').length>4){
                this.pics = response.body.pic.split(',').slice(0,4)
              }else{
                this.pics = response.body.pic.split(',')
              }
              this.currentImg=this.pics[0]
            }
          })
        }else{
          this.$resource(url).get({
            commodityId: '77662399',
            version: 'v1.2'
          }).then((response) => {
            if (response.status == 200) {
              this.goodDetail = response.body
              if (response.body.pic.split(',').length>4){
                this.pics = response.body.pic.split(',').slice(0,4)
              }else{
                this.pics = response.body.pic.split(',')
              }
              this.currentImg=this.pics[0]
            }
          })
        }

      },
      //点击买家还在看的商品
      toDtails:function(a,index){
        if (a=='firstRecommendGoods'){
          window.localStorage.setItem('commodityId',this.firstRecommendGoods[index].commodityId)
          this.getGoodDetailData()
        }else{
          window.localStorage.setItem('commodityId',this.twoRecommendGoods[index].commodityId)
          this.getGoodDetailData()
        }

      },
      //获取推荐的商品
      getRecommendGood(){
        let url = HOST_HDPCOMMODITY + '/commodityFront/getCommodityDetailRecommendList'
        if (window.localStorage.getItem('commodityId')){
          let commodityId=window.localStorage.getItem('commodityId')
          this.$resource(url).get({currNum: 1, pageSize: 8, version: 'v1.3', type: 0, commodityId: commodityId}).then((response) => {
            if (response.body.code == 200) {
              this.recommendGoods = response.body.respBody
              // console.log('length',this.recommendGoods.length)
              let len = this.recommendGoods
              for (let i = 0; i < len.length; i++) {
                len[i].pic = len[i].pic.split(',')[0]
              }
              this.firstRecommendGoods=this.recommendGoods.slice(0,4)
              this.twoRecommendGoods=this.recommendGoods.slice(4,8)
            }
          })
        }else{
          this.commodityId='77662399'
          this.$resource(url).get({currNum: 1, pageSize: 8, version: 'v1.3', type: 0, commodityId:  this.commodityId}).then((response) => {
            if (response.body.code == 200) {
              this.recommendGoods = response.body.respBody
              // console.log('length',this.recommendGoods.length)
              let len = this.recommendGoods
              for (let i = 0; i < len.length; i++) {
                len[i].pic = len[i].pic.split(',')[0]
              }
              this.firstRecommendGoods=this.recommendGoods.slice(0,4)
              this.twoRecommendGoods=this.recommendGoods.slice(4,8)
            }
          })
        }


      },
    }
  }
</script>
<style scoped>
  .two_floor {

    padding-bottom: 70px;
    background-color: #fff;
  }
  .hdp_two_wrap {
    width: 100%;
    padding-bottom: 74px;
    background-color: #fff;
    border:1px solid #d6d6d6;
    overflow: hidden;

  }
  .recommend-title{
    width:1192px;
    height:45px;
    line-height: 45px;
    text-align: left;
    padding-left:13px;
    background-color: #edeff5;
    box-sizing: border-box;
    font-size:20px ;
    color:#333;
  }
  .hdp_two_list {
    margin-left:30px;
    /*height: 290px;*/
    width: 1190px;
    margin-top:30px;
    margin-bottom:330px;
  }
  .hdp_two_list li {
    position: relative;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 30px;
    width: 258px;
    height: 258px;
    border: 1px solid #d6d6d6;
    cursor: pointer;
  }
  .hdp_two_list li.last {
    margin-right: 0;
  }
  .hdp_two_list li .two_down {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #4d3e36;
    height: 60px;
  }
  .hdp_two_list li .two_down p {
    margin-top: 10px;
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left:10px;
    padding-right:10px;
    box-sizing: border-box;
  }
  .hdp_two_list li .two_down h3 {
    margin: 0;
    margin-top: 4px;
    font-size: 16px;
    font-weight: normal;
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
    width: 168px;
    height: 168px;
    /*margin: 10px;*/

  }
  .hdp_two_list li .two_img img {
    display: block;
    width:168px;
    height:168px;
    text-align: center;
    /*margin-left: 40px;*/
    margin-left:46px;
    margin-top:13px;
  }
</style>
