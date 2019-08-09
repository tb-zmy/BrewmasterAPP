export default{
    path:'/jiuxian/:title',
    meta: {
        title: "酒仙",
        flag: true,
        auth:false
    },
    component:()=>import("views/jiuxian"),
    name:"jiuxian"
}