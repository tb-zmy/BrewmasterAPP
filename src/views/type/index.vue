<template>
    <div class="type">
        <Header/>
        <div class="selectHeader">
            <div class="selectHeaderInput">
                <span></span>
                <input type="text" value="优选白酒 3重豪礼满就送">
            </div>
        </div>
        <ul class="jiuUl">
            <router-link 
            v-for="(item,index) in list" 
            :key="index"
            :to="item.path"
            tag="li"
            >
                <!-- <img src="" alt=""> -->
                <span>{{item.name}}</span>
            </router-link>
        </ul>
    </div>
</template>
 <script>
 export default {
     name:"type",
     data(){
         return{
             list:[
                 {name:"白酒",path:"/bj"},
                 {name:"葡萄酒",path:"/bj"},
                 {name:"洋酒",path:"/bj"},
                 {name:"整箱购",path:"/bj"},
                 {name:"老酒",path:"/bj"},
                 {name:"清仓特卖",path:"/bj"},
                 {name:"海外直采",path:"/bj"},
                 {name:"精美大坛",path:"/bj"},
                 {name:"红酒整箱",path:"/bj"},
                 {name:"值得买",path:"/bj"},
                 {name:"销量排行",path:"/bj"},
                 {name:"礼尚往来",path:"/bj"},
             ]
         }
     }
 }
 </script>
 
 <style>
    .selectHeader{
        width: 100%;
        height: 0.4rem;
        background: #fafafa;
        padding: 0 0.15rem;
        font: 0.14rem ;
        color: #666;
        line-height: 0.4rem;
        padding-top: 0.06rem;
        border-bottom: 0.01rem solid #e4e4e4;
    }
    .selectHeaderInput{
        width: 3.45rem;
        height: 0.28rem;
        background: #ececec;
        /* padding: 0 0.03rem; */
        font: 0.12rem;
        line-height: 0.28rem;
        border-radius: 0.05rem;
    }
    .selectHeaderInput span{
        width: 0.14rem;
        height: 0.14rem;
        background-image: url("../../../public/img/top.png");
        background-position: -0.72rem 0;
        background-size:2.2rem 0.8rem;
        display: inline-block;
        margin: 0.05rem 0.1rem 0 0.1rem;
    }
    .selectHeaderInput input{
        width: 2.5rem;
        height: 0.28rem;
        border: none;
        outline: none;
        background: #ececec;
        color: #666;
    }
    .jiuUl{
        width: 100%;
        height: auto;
    }
    .jiuUl li{
        width: 1.249rem;
        height: 0.81rem;
        /* background: #e4e4e4; */
        float: left;
        border-right: 0.01rem solid #f6f6f6;
        border-bottom: 0.01rem solid #f6f6f6;
        text-align: center;
        line-height: 0.81rem;
    }


 </style>
 