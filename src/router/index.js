import Vue from "vue";
import VueRouter from "vue-router";
import handle from "./handle"
import homePage from "./homePage"
import mine from "./mine"
import shopping from "./shopping"
import type from "./type"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        handle,
        homePage,
        mine,
        shopping,
        type,
    ]
})