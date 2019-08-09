export default{
    path:"/handle/:text",
    component:()=>import("views/handle"),
    name:"handle",
    meta:{
        tite:"清仓",
        tabBar:false,
        auth:false
    },
    // children:[
    //     {
    //         path:"detail",
    //         component:()=>import("views/detail"),
    //         name:"detail",
    //         meta:{
    //             tabBar:true,
    //             auth:false
    //         },
    //     },
    // ]
}