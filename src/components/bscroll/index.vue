
<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            tap:true,
            pullDownRefresh:true,
            pullUpLoad:true
        })
    },
    methods:{
        handlePullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        },
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        handlePullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        },
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }
}
</script>
<style>
    .wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        bottom: 0.42rem;
    }
</style>

