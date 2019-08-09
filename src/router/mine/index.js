export default{
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        title:"我的",
        tabBar:false,
        auth:false
    },
}