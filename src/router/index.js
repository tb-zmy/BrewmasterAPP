import Vue from "vue"
import VueRouter from "vue-router"
import jiuxian from "./jiuxian"
import mine from "./mine"
import carts from "./carts"
import mainlist from "./mainlist"
import active from "./active"
import wine from "./wine"
import details from "./details"
import summer from "./summer"

Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/jiuxian/酒仙"
        },
        jiuxian,
        mine,
        carts,
        mainlist,
        active,
        wine,
        details,
        summer
    ]
})