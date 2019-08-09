export default{
    path:'/mine/:title',
    meta: {
        title: "个人中心",
        flag: false,
        auth:false
    },
    component:()=>import("views/mine"),
    name:"mine"
}