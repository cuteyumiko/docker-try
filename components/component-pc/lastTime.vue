<template>
  <span>
      <span class="last-time">{{lastTime2}}</span>
  </span>
</template>
<script type="text/ecmascript-6">
export default{
    props: ['lastTime'],
    name: 'lastTime',
    data () {
        return{
            lastTime2:'',
            timer:''
        }
    },
    methods:{
    // 倒计时countdown
        
        countdown (time) {
            if(time){
               this.timer= setInterval(()=>{
                    let h = Math.floor(time/1000/60/60%24)
                    let m = Math.floor(time/1000/60%60)
                    let s = Math.floor(time / 1000 % 60)
                    this.lastTime2 = h + ':' + m + ':' + s
                    time = time-1000;
                    if(time<=0){
                        clearInterval(this.timer);
                        this.lastTimer2=0 + ':' + 0 + ':' + 0;
                        return;
                    }
               },1000)
            }
            
        },
    },
    mounted(){
     this.countdown(this.lastTime)  ;
    },
    watch:{
        lastTime(val){
            //console.log(val)
             clearInterval(this.timer);
           this.countdown(this.lastTime)  ;
        }
    }
}
</script>