<template>
    <div class="homePage" ref="homePage">
        <Header/>
        <Top/>
        <MainDiv/>
    </div>
</template>
 <script>
import Top from "./top.vue"
import MainDiv from "./mainDiv.vue"
// import BScroll from "better-scroll"
 export default {
     name:"homePage",
     components:{
        Top,
        MainDiv,
  },
//   mounted(){
    //   new BScroll(this.$refs.homePage)
    //   console.log(this.$refs.homePage.children)
//   }
 }
 </script>
    
 <style>
 .homePage{
     width: 100%;
     height: 100%;
 }
 </style>
 