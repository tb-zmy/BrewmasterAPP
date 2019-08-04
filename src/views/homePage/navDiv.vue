<template>
  <div class="navDiv">
    <div class="ImgDiv">
      <a v-for="(item,index) in list" :key="index">
        <img :src="item" alt="" class="navImg">
      </a>
    </div>
    <div class="ImgCenter">
      <a href="" v-for="(item,index) in arr" :key="index">
        <img :src="item" alt="">
      </a>
    </div>
    <div class="ImgBottom">
      <div class="BottomImg" v-for="(item,index) in str" :key="index">
        <a href="">
          <img :src="item" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'navDiv',
  data(){
    return{
      list:[
        "https://img06.jiuxian.com/bill/2019/0801/ef2f3afdc2a34a5c9a28f82c3c69b929.jpg",
        "https://img08.jiuxian.com/bill/2019/0801/7108a690c9664a398d371dc535d37e5a.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/e16bed30be8e4b33ba67181c4c763d05.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/1da0756d604a407aa8d6710d880bfcb7.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/af18da91cb4d4fe6806ab48c34217d7f.jpg",
        "https://img08.jiuxian.com/bill/2019/0801/6a0c6680098245bdbaf237b13b26105d.jpg",
        "https://img08.jiuxian.com/bill/2019/0801/75f4fa25d9c241d5908277264c0b407a.gif",
        "https://img09.jiuxian.com/bill/2019/0801/06885c37a8424109a1e1d61b17468cb3.jpg",
        "https://img06.jiuxian.com/bill/2019/0801/a032029908d3423e84d13fe5de6acb98.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/b71d3a63a48e44e3bb585d918361c458.jpg",
      ],
      arr:[
        "https://img07.jiuxian.com/bill/2019/0801/f2200c36f9f74e01896aac68d4b1d187.jpg"
      ],
      str:[
        "https://img09.jiuxian.com/bill/2019/0801/ecd75ceabe0f4e2a86d0ea11220760e2.jpg",
        "https://img07.jiuxian.com/bill/2019/0801/ca8df0b009a7492f8e326ec6c289a958.jpg",
      ]
    }
  }
}
</script>
<style>
    .navDiv{
        width: 100%;
        height: 3.5rem;
        background-color: blueviolet;
        position: absolute;
        top: 1.92rem;
    }
    .ImgDiv{
      display: flex;
      flex-wrap: wrap;
    }
    .navImg{
      width:0.75rem;
      height:0.78rem; 
      /* border: 0.005rem solid white; */
    }
    .ImgCenter img{
      height: 0.87rem;
    }
    .BottomImg img{
      float: left;
      height: 1.05rem;
      width: 1.87rem;
    }
</style>

