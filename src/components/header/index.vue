<template>
    <div class="header" ref="header">
        <v-touch 
        class="headerSpan"
        tag="span"
        @tap="clickBack()"
        ><img class="headerLeft" ref="headerLeft">
        </v-touch>
        <h2 ref="h2">{{text}}</h2> 
        <a href="" class="headerRight" ref="headerRight"></a>
    </div>
</template>

<script>

export default {
    name:"Header",
    
    data(){
        return {
            text:"",
        }
    },
    created(){
        let {text}=this.$route.params;
        this.text=text;
        console.log()
    },
    methods:{
        clickBack(){
            this.$router.back()
        }
    }
    // mounted(){
        
        // if(this.text="购物车"){
        //     this.$refs.header.style.backgroundColor="#fafafa";
            // this.$refs.h2.style.color="#252525";
            // this.$refs.headerLeft.style.background=url("../../../public/img/catIcon.png");
        // }
        // console.log(this.$refs.header)
    // }
}
</script>


<style>
    .header{
        position: absolute;
        top: 0;
        width: 100%;
        height: 0.4rem;
        background-color: #de4943;
        display: flex;
        justify-content: space-around;
        z-index: 1000;
    }
    .header h2{
        width: 2.2rem;
        height: 0.4rem;
        color: white;
        line-height: 0.4rem;
        text-align: center;
    }
    .headerLeft{
        width: 100%;
        height: 100%;
        border: none !important;
        display: inline-block;
        background: url("../../../public/img/listIcon.png") no-repeat;
        background-position: -122px 7px;
        background-size: 266px 234px; 
        color:#666;
    }
    .headerSpan{
        width: 0.3rem;
        height: 0.4rem;
    }
    .headerRight{
        width: 0.3rem;
        height: 0.4rem;
        display: inline-block;
        background: url("../../../public/img/headIcon.png") no-repeat;
        background-position:-150px 6px;
    }
</style>
