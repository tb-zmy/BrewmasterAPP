export default{
    path:'/mainlist/:title',
    meta: {
        title: "列表",
        flag: false,
        auth:false
    },
    component:()=>import("views/mainlist"),
    name:"mainlist"
}