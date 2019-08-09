import Vue from "vue";
import VueRouter from "vue-router";
import handle from "./handle"
import homePage from "./homePage"
import mine from "./mine"
import shopping from "./shopping"
import type from "./type"
import detail from "./detail"

import bj from "./type/bj.js"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/homePage/首页"
        },
        handle,
        homePage,
        mine,
        shopping,
        type,
        bj,
        detail,  
    ],
    
})
