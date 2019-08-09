export default{
    path:'/wine',
    meta: {
        title: "葡萄酒",
        flag: false,
        auth:false
    },

    component:()=>import("views/wine"),
    name:"wine"
}