// nav.vue
<template>
  <div class="w1190 hdp_nav">
  <!-- <div>{{navData}}</div> -->
    <ul class="colorCurrent">
      <router-link to="/">
         <li  :class="{curr: fontColor === -1}" style="cursor: pointer">首页</li>
      </router-link>
      <router-link to="/searchlist">
        <li style="cursor: pointer"    v-for="(item,index) in navDataShow"  @click="navFontC($event,index)"  class="nav_li">{{ item.categoryName }}</li>
      </router-link>
        <!--<a href="http://sc.99114.com/"><li>积分商城</li></a>-->
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import axios from 'axios'
  export default{
    name:'nav',
    props: ['navCurrentIndex'],
    data(){
      return {
        fontColor:-1,
        navDataShow:[],
        navData:[],
        showAll:false,
      }
    },
    asyncData ({ params }) {
      // return axios.get('http://hdpcommodity-api.99114.cn/commodityFront/getCategoryList')
      // .then((res) => {
      //   return { navData: res.data }
      //   // callback(null, { navData: res.data })
      // })
    },
    mounted(){
      //获取导航

      this.getNavData()
      if (this.navCurrentIndex!=0||this.navCurrentIndex!=null||this.navCurrentIndex!=undefined){
        this.fontColor=0

        this.$nextTick(()=>{
          let _this=this
          setTimeout(function(){
            if (_this.navCurrentIndex){
              let navLi=document.getElementsByClassName('nav_li')
              navLi[_this.navCurrentIndex].className='nav_li curr'
            }
          },500)
        })
      }
      if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1 )==''){
        this.fontColor=-1
      }
    },
    methods:{
//         跳转到首页
      toHome (){
        window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1)
      },
//      跳转到搜索列表页
//      toSearchList:function(){
//        window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/') +1) + 'serachlist';
//      },
      //获取导航数据
      getNavData (){
        let url = HOST_HDPCOMMODITY + '/commodityFront/getCategoryList';
        // this.$resource(url).get().then((response) => {
        //   if( response.status == 200){
        //     this.navData = response.body;
        //     this.showList()
        //   }
        // })
        let that =this
        axios.get(url)
        .then((res) => {
          // return { navData: res.data }
          that.navData = res.data
          that.showList()
          // callback(null, { navData: res.data })
        })
      },
      //限制导航显示个数
      showList(){
        if(this.showAll == false){
          if(this.navData.length > 9){
            for(var i=0;i<9;i++){
              this.navDataShow.push(this.navData[i])
            }
          }else{
            this.navDataShow = this.navData
          }
          return this.navDataShow;
        }else{
          return this.navData;
        }
      },
      //点击导航获取的分类
      navFontC(event,index){
        let evt=event||window.event;
        let  mak = evt.target || evt.srcElement;
        this.fontColor = index;
        window.localStorage.setItem("navIndex",index);
        window.localStorage.setItem("backIndex",index);
        window.localStorage.setItem('navCurrentIndex',index)
        let id = this.navDataShow[index].id;
        window.localStorage.setItem("navId",id);
        window.localStorage.setItem("htmlInner",mak.innerHTML);
//        this.toSearchList()
      },
    }
  }
</script>
<style scoped>
  .hdp_nav {
    margin-bottom: 18px;
    height: 40px;
    line-height: 40px;
    margin-top:18px;
  }
  .hdp_nav ul {
    width: 1190px;
    padding-left:110px;
    box-sizing: border-box;

  }
  .hdp_nav li {
    float: left;
    margin-left: 50px;
    font-size: 14px;
    color: #4d3e36;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .hdp_nav li:hover{
    cursor:pointer;
  }
  .hdp_nav li.curr {
    color: #ff910a;
    border-bottom: 3px solid #ff910a;
  }
  .hdp_nav li.curr a {
    color: #a8b1db;
  }
  .hdp_nav li a:hover {
    color: #a8b1db;
  }
</style>
