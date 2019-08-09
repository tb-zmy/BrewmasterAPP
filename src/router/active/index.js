export default{
    path:'/active/:title',
    meta: {
        title: "裸价清仓",
        flag: false,
        auth:false
    },
    component:()=>import("views/active"),
    name:"active"
}