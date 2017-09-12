// searchall.vue
<template>
  <div class="w1190 H_srarch_wrap">
    <router-link to="/">
      <h1 class="logo fl">
        <img src="../../assets/images/img/logo.png" alt="" />
      </h1>
    </router-link>
    <div class="H_srarch fr">
      <input type="text" placeholder="苹果"  maxlength="100" v-model="searchName"
             v-on:keyup.13="searchNo()"  v-if="searchName == ''"/>
      <input type="text" placeholder="苹果"  maxlength="100" v-model="searchName"
             v-on:keyup.13="setStoreValue()"  v-if="searchName != ''"/>
       <div class="cancel2" v-if="searchName == ''" @click="searchNo()"><i></i></div>
      <router-link to="/searchlist"><div class="cancel2" v-if="searchName != ''" @click="setStoreValue()"><i></i></div></router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'searchAll',
      data(){
        return {
            searchName:''
        }
      },
    methods: {
        //搜索内容为空时提示
        searchNo(){
            alert("请输入搜索内容！")
        },
      // 跳转到列表页
      setStoreValue: function () {
          window.localStorage.setItem("searchName", this.searchName);
          window.localStorage.setItem('enter',1)
          window.localStorage.setItem("searchName2", this.searchName)

//        window.localStorage.setItem("searchNameDiff", this.searchName);

      }
    }
  }
</script>
<style scoped>
*:focus { outline: none; }
.H_srarch_wrap {
  clear: both;
  height: 105px;

}
.H_srarch_wrap .logo {
  margin-top: 18px;
  float: left;
}
.H_srarch_wrap .logo img {
  width: 337px;
  height: 103px;

}
.H_srarch {
  position: relative;
  margin-top: 30px;
  width: 548px;
  height: 38px;
  text-align: left;
  border:1px solid #adadad;
  float: right;
  border-radius: 2px;
}
.H_srarch input {
  width: 494px;
  height: 38px;
  line-height: 38px;
  background-color: transparent;
  padding-left:28px;
}
.H_srarch i {
  position: absolute;
  top: 8px;
  right: 31px;
  width: 22px;
  height: 23px;
  background: url("../../assets/images/img/search_btn.png") no-repeat;
  cursor: pointer;
}
</style>
