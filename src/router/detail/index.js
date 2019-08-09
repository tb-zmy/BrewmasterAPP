export default{
    path:"/detail/:id",
    component:()=>import("views/detail"),
    name:"detail",
    meta:{
        title:"商品详情",
        tabBar:false,
        auth:false
    },
}