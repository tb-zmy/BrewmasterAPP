export default{
    path:'/summer',
    meta: {
        title: "夏天",
        flag: false,
        auth:false
    },
    component:()=>import("views/summer"),
    name:"summer"
}