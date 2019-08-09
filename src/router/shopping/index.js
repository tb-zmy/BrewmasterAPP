export default{
    path:"/shopping/:text",
    component:()=>import("views/shopping"),
    name:"shopping",
    meta:{
        title:"购物车",
        tabBar:false,
        auth:false
    },
}