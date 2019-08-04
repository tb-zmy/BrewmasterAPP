<template>
    <div class="homePage">
        <Top/>
        <MainDiv/>
    </div>
</template>
 <script>
import Top from "./top.vue"
import MainDiv from "./mainDiv.vue"
 export default {
     name:"homePage",
     components:{
        Top,
        MainDiv,
  }
 }
 </script>
    
 <style>
 .homePage{
     width: 100%;
     height: 100%;
 }
 </style>
 