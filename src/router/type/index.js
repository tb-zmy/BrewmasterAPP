export default{
    path:"/type/:text",
    component:()=>import("views/type"),
    name:"type",
    meta:{
        tite:"分类",
        tabBar:true,
        auth:false
    },
}