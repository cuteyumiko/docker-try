<template>
    <div class='myDialog'>
        <h4 v-show='showTitle'>{{title}}</h4>
        <div class='content'>
            <p>{{content}}</p>
        </div>
        <div class='footer'>
            <button class='ok' @click='okHandle'>确定</button>
        </div>
    </div>


   
</template>
<script>
    export default {
        props:{
           title:{
             type:String,

           },
           content:'',
           showTitle:{
             type:Boolean
           }

        },
        data () {
            return {
                

            }
        },
        methods: {
           okHandle(){
                this.$emit("confirm");
           }
        }
    }
</script>
<style scoped>
  button{
    margin:0;
    padding:0;
    border:none;
  }
 .myDialog{
    width:400px;
    background:#fff;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-200px;
    margin-top:-100px;
    
    font-size:14px;
    color:#2c3e50;
    border-radius:5px;
    z-index:10;
 }
 .content p{
   height:60px;
   margin-top:20px;
   font-size:14px;
    line-height:24px;
 }
 .footer{
  width:100%;
  height:50px;
  line-height:50px;
  text-align:center;
 }

 .ok{
   width:40px;
   height:30px;
   font-size:14px;
   line-height:24px;
   color:#fff;
   background:#ff910b;
   border-radius:5px;
 }
</style>