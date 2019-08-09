export default{
    path:'/details/:id/:name',
    meta: {
        title: "商品详情",
        flag: false,
        auth:false
    },

    component:()=>import("views/details"),
    name:"details",
    props:true
}