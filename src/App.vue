<template>
  <div id="app">
        <router-view></router-view>
        <TabBar/>
        <!-- <Loading/> -->
    </div>
</template>

<script>
import "./reset.css"
import TabBar from "common/tabBar"
// import axios from "axios"
// import http from "utils/http"
// import Loading from "./lib/loading"
export default {
  name:"App",
  components:{
        TabBar,
        // Loading
    },
    // created(){
    //     axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1")
    //     .then((data)=>{
    //         console.log(data.data)
    //     })
    // }
}
</script>


<style >
#app{
    width: 100%;
    height: 100%;
  }

</style>
