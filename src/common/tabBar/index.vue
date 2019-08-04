<template>
    <div class="footer">
        <ul class="footerUl">
            <router-link
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"
            >
            <img :src="item.img" alt="">
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    img:"https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png",
                    text:"首页",
                    path:"/homePage"
                },
                {
                    img:"https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png",
                    text:"分类",
                    path:"/type"
                },
                {
                    img:"https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png",
                    text:"清仓",
                    path:"/handle"
                },
                {
                    img:"https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png",
                    text:"购物车",
                    path:"/shopping"
                },
                {
                    img:"https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png",
                    text:"我的",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>


<style>
    .footer{
        width: 100%;
        height: 0.42rem;
        width:100%;
        position: fixed ;
        bottom: 0;
        left: 0;
        border-top:1px solid #cccccc;
        background:#f1f1f1;
        /* display: flex;
        align-items: center; */
    }
    .footerUl{
        display: flex;
        justify-content: space-around;
        height: 100%;
        align-items: center;
    }
    .footerUl img{
        width: 0.42rem;
        height: auto;
    }
</style>
