export default{
    path:'/carts/:title/:id/:name/:img/:price',
    meta: {
        title: "购物车",
        flag: false,
        auth:false
    },
    component:()=>import("views/carts"),
    name:"carts",
    props:true
}