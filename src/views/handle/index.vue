<template>

    <div class="handle">
        <Header/>

        <BScroll ref="BScroll">
         <div class="huadong" ref="huadong">
        <div class="handleTop">
            <img src="https://img08.jiuxian.com/bill/2018/1218/3e88122c37bc49dc96c3b120efaf4db3.jpg" alt="">
        </div>
        <div class="handleMiddle">
            <img src="https://img08.jiuxian.com/bill/2018/1010/d4ace760e1f74ef589d979c8db9475de.jpg" alt="">
        </div>
       
        <ul class="handleBottom">
            <v-touch
            class="handleBottomLi" 
            v-for="(item,index) in handle1" 
            :key="index" 
            tag="li"
            @tap="handleDetil(item.goods_id)">
                <div class="handleImg"><img :src="item.goods_thumb" alt=""></div>
                <p class="handleP1">{{item.goods_name}}</p>
                <p class="handleP2">{{item.sub_title}}</p>
                <div class="handleDiv">
                    <span class="handleDivSpan1">￥{{item.cur_price}}</span>
                    <span class="handleDivSpan2">￥{{item.shop_price}}</span>
                    <a href="">点击购买</a>
                </div>
            </v-touch>
        </ul>
        
    </div>
    
        </BScroll>

<router-view></router-view>

 </div>
</template>
 <script>
 import {handle_api} from "api/https"
 import {handle_api1} from "api/https"
 export default {
     name:"handle",
     data(){
         return{
             handle1:JSON.parse(sessionStorage.getItem("handle1"))||[],
         }
     },
    async created(){
        if(!sessionStorage.getItem("handle1")){
        let data = await handle_api();
        this.handle1=data.data.goodsCate.list
        sessionStorage.setItem("handle1",JSON.stringify(data.data.goodsCate.list))
        }
 },
    mounted(){
        this.$refs.BScroll.handlePullingDown(async ()=>{
            let data=await handle_api1();
            this.handle1=data.data.goodsCate.list
            sessionStorage.setItem("handle1",JSON.stringify(data.data.goodsCate.list))
            this.$refs.BScroll.handlefinishPullDown()
        })
        this.$refs.BScroll.handlePullingUp(async ()=>{
            let data=await handle_api1();
            this.handle1=[...this.handle1,...data.data.goodsCate.list]
            sessionStorage.setItem("handle1",JSON.stringify(data.data.goodsCate.list))
            this.$refs.BScroll.handlefinishPullUp();
        })
    },
    methods:{
        handleDetil(id){
            this.$router.push({name:"detail",params:{id}})
        }
    }
 }
 </script>
 
 <style>
 
 .huadong{
     width: 100%;
     height: auto;
     display: absolute;
        top: 0.4rem;
        z-index: 1;
        bottom: 0.42rem;
 }
 .handle{
     width:100%;
     height: 100%;
 }
 .handleTop{
     width: 100%;
     height: 2.18rem;
     /* height: auto; */
 }
 .handleTop img{
     width: 100%;
     height: 100%;
 }
 .handleMiddle{
     width: 100%;
     height: auto;
 }
 .handleMiddle img{
     width: 100%;
     height: 100%;
 }
 .handleBottom{
     width: 100%;
     height: auto;
     display: flex;
     flex-wrap:wrap;
 }
 .handleBottom .handleBottomLi{
     width: 1.87rem;
     height: 2.52rem;
 }
 .handleBottom .handleBottomLi .handleImg{
     width: 100%;
     height: 1.48rem;
     /* line-height: 1.48rem; */
     text-align: center; 
     padding: 2% 17%;
 }
 .handleBottom .handleBottomLi .handleImg img{
     width: 1.4rem;
     height: 1.4rem;
     /* vertical-align:top; */
 }
 .handleBottom .handleBottomLi .handleP1{
     height: 0.28rem;
     line-height: 0.14rem;
     width: 90%;
     margin:  2% 5%;
     font-size: 0.12rem;
     color: #000;
     text-align: center;
     overflow: hidden;
 }
 .handleBottom .handleBottomLi .handleP2{
     font-size: 0.12rem;
     margin:  0 5%;
     width: 90%;
     color:#fc0000;
     overflow: hidden;
     text-overflow:ellipsis;
     white-space:nowrap;
     height: 0.21rem;
     line-height: 0.21rem;
 }
 .handleBottom .handleBottomLi .handleDiv{
     width: 90%;
     height: 0.32rem;
     margin: 0.05rem 5% 0;
     text-align: center;
     overflow: hidden;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .handleBottom .handleBottomLii .handleDiv a{
     display: inline-block;
     width: 40%;
     height: 0.24rem;
     background: #ff0000;
     color: white;
     line-height: 0.24rem;
     text-align: center;
     font-size: 0.12rem;
     border-radius: 0.03rem;
 }
 .handleDivSpan1{
     width: auto;
     height: 0.19rem;
     color: #ff0000;
     font-weight: bold;
     font-size: 0.14rem;
 }
 .handleDivSpan2{
     width:auto;
     height: 0.16rem;
     color: #7a7a7a;
     font-size: 0.12rem;
     text-decoration:line-through;
     margin-right:0.3rem; 
 }
 </style>
 