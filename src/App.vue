import { default } from './views/Home.vue';
<template>
  <div id="app">
    <!-- <Jiuxian/> -->
    <!-- <Wine/> -->
    <!-- <City/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TarBar v-if="$route.meta.flag"></TarBar>
    <!-- <Loading/> -->
  </div>
</template>

<script>

// import Wine from "./views/wine/index.vue"
import TarBar from "common/tarbar";
// import Jiuxian from "./views/jiuxian/index.vue";
// import axios from "axios";
// import Loading from "./lib/loading/index.js";
// import http from "./utils/http"
export default {
  name: "App",
  components: {
    // Wine,
    TarBar
    // Loading,
    // Jiuxian
  },

  // created(){
  //   axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=2").then((data)=>{
  //      console.log(data.data.killProList);
  //    })
  // http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
  //   console.log(data);
  // })
  // }
};
</script>

<style lang="scss">
</style>
