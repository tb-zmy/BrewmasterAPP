export default{
    path:"/homePage/:text",
    component:()=>import("views/homePage"),
    name:"homePage",
    meta:{
        title:"首页",
        tabBar:true,
        auth:false
    },
}