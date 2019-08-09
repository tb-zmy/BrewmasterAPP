<template>
  <div id="app">
        <router-view v-wechat-title="$route.meta.title"></router-view>
        <TabBar v-if="$route.meta.tabBar"/>
        <!-- <Loading/> -->
    </div>
</template>

<script>
import "./reset.css"
import TabBar from "common/tabBar"
// import Loading from "./lib/loading"
import {homePage_api} from "api/https.js"
export default {
  name:"App",
  components:{
        TabBar,
        // Loading
    },
    mounted(){
      console.log(this.$route.meta)
    },
    async created(){
      let data= await homePage_api();
    },
}
</script>


<style >
#app{
    width: 100%;
    height: 100%;
  }

</style>
