export default{
    path:'/kinds',
    meta: {
        title: "分类",
        flag: false,
        auth:false
    },
    component:()=>import("views/kinds"),
    name:"kinds"
}