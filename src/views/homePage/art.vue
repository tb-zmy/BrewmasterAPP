<template>
  <div class="art">
    <div class="Minplant">
      <div class="MinplantLeft"></div>
      <div class="MinplantRight"></div>
    </div>
    <div class="Maxplant">
      <div class="MaxplantTop">
        <div class="MaxplantTopLeft">掌上秒拍</div>
        <span class="MaxplantTopMiddle">
          <span>距结束</span>
          <i class="hours"></i><em>:</em>
          <i class="minutes"></i><em>:</em>
          <i class="seconds"></i>
        </span>
        <div class="MaxplantTopbottom">
          <span>更多商品的你来抢!</span>
          <div class="jianTou">
              &gt;
          </div>
        </div>
      </div>
      <div class="MaxplantBottomDiv">
        <ul class="MaxplantBottom">
        <li>
          <img src="https://img09.jiuxian.com/2018/0705/52ba343a070644c5b6cc2c8f49cfb9454.jpg" alt="">
          <span class="tit">【到手价768元】53°茅台王子500ml（6瓶装）</span>
          <span class="newPrice">¥948.00</span>
          <span class="oldPrice">¥1368.00</span>
        </li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
      </div>
    </div>
    <div class="bigTu" v-for="(item,index) in arr" :key="index">
      <a href="">
        <img :src="item" alt="">
      </a>
    </div>
    <div class="tuiJian">
      <div class="tuiJianTop">爆款推荐</div>
      <div class="tuiJianAti">
        <span class="tuiJianAtiTopLeft">限时抢购</span>
        <span class="tuiJianAtiTopRight">单品加价购</span>
        <img src="https://img06.jiuxian.com/2019/0617/e933c3b23c2f4e0aaf1bdaf6410cf96f4.jpg" alt="">
        <span class="tuiJianAtiCenter">【老酒特卖】43°茅台迎宾酒（2013）200ml</span>
        <div>
          <span class="tuiJianAtiBottomLeft">¥49.00</span>
          <span class="tuiJianAtiBottomRight">¥69.00</span>
        </div>
      </div>
      <div class="tuiJianAti">
        <span class="tuiJianAtiTopLeft">限时抢购</span>
        <span class="tuiJianAtiTopRight">单品加价购</span>
        <img src="https://img06.jiuxian.com/2019/0617/e933c3b23c2f4e0aaf1bdaf6410cf96f4.jpg" alt="">
        <span class="tuiJianAtiCenter">【老酒特卖】43°茅台迎宾酒（2013）200ml</span>
        <div>
          <span class="tuiJianAtiBottomLeft">¥49.00</span>
          <span class="tuiJianAtiBottomRight">¥69.00</span>
        </div>
      </div>
    </div>
    
    <div class="DingWei"></div>
  </div>
</template>

<script>

// import axios from "axios"
export default {
  name: 'art',
  data(){
    return{
      arr:[
        "https://img06.jiuxian.com/bill/2019/0801/ef199df71f644bbaa00827ebf4580ba4.jpg",
        "https://img08.jiuxian.com/bill/2019/0802/e784ea8bcc6e464fafae5d5573e36da3.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/f4413e18485c4fffae94151a922e24e6.jpg",
        "https://img07.jiuxian.com/bill/2019/0802/4af587bffc384f9ab9e177ea957e3b05.jpg",
      ]
    }
  },
  components: {},
  // created(){
  //       axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1")
  //       .then((data)=>{
  //           console.log(data.data)
  //       })
  //   },
}
</script>
<style>
    .art{
        width: 100%;
        height: auto;
        background-color: #eee;
        position: absolute ;
        top:5.42rem;
        overflow-y: auto;
    }
    .Minplant{
        width: 100%;
        height: 0.36rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }
    .MinplantLeft{
        width: 0.94rem;
        height: 0.2rem;
        background-color:aqua; 
        background: url("../../../public/img/MinplantLeft.jpg");
        background-size: 0.94rem 0.2rem;
    }
    .MinplantRight{
        width: 2.5rem;
        height: 0.2rem;
        background-color: azure;
    }
    .Maxplant{
      width:100%;
      height: 2.02rem;
      background-color: white; 
    }
    .MaxplantTop{
      width: 100%;
      height: 0.31rem;
      background-color: white;
      display: flex;
      border-bottom: 0.01rem solid #ededed;
      /* justify-content: space-betwseen; */
    }
    .MaxplantTopLeft{
      width: auto;
      display: inline-block;
      height: 0.3rem;
      color: #666;
      font-size: 0.14rem ;
      line-height: 0.3rem;
      font-weight: bold;
      margin-left: 0.1rem;
    }
    .MaxplantTopMiddle{
      width: 1.8rem;
      height: 0.3rem;
      /* background-color: chocolate; */
      display: flex;
      align-items: center;
      
      padding: 0.1rem;
    }
    .MaxplantTopMiddle>span{
      margin-right: 0.1rem;
    }
    .MaxplantTopMiddle i{
      display: inline-block;
      width: 0.16rem;
      height: 0.16rem;
      background-color:#858585;
    }
    .MaxplantTopMiddle em{
      display: inline-block;
      vertical-align:middle;
      font-style:normal;
      font-size:0.12rem;
      margin: 0 0.02rem;
      color: #666;
      font-weight: 600; 
    }
    .MaxplantTopbottom{
      width: 1.17rem;
      height: 0.3rem;
      /* background-color: chartreuse; */
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 0.1rem;
    }
    .jianTou{
      width: 0.14rem;
      height: 0.14rem;
      background-color: #666;
      border-radius: 50%;
      line-height: 0.14rem;
      text-align: center;
      color: white;
    }
    .MaxplantBottomDiv{
      width: 100%;
      height: 100%;
      overflow-x: auto;
      
    }
    .MaxplantBottomDiv::-webkit-scrollbar {
            display: none;
        }
    .MaxplantBottom{
      display: flex;
      width: 10rem;
      height: 100%;
      /* position: relative; */
    }
    .MaxplantBottom>li{
      width: 1rem;
      height: 1.6rem;
      /* background-color: ; */
      margin: 0.05rem 0 0 0.1rem;
      display: flex;
      flex-direction: column;
    }
    .MaxplantBottom img{
      width: 0.96rem;
      height: 0.96rem;
    }
    .MaxplantBottom .tit{
      display: block;
      color: #252525;
      font: 0.12rem;
      width: 0.96rem;
      height: 0.32rem;
      overflow:hidden;
    }
    .MaxplantBottom .newPrice{
      width:0.96rem;
      height: 0.14rem;
      color: #fc5a5a;
      margin: 0.05rem 0 0 0;
      font: 0.14rem;
    }
    .MaxplantBottom .oldPrice{
      width: 0.96rem;
      height: 0.14rem;
      color: #999;
      font: 0.12rem;
      text-decoration:line-through;
    }
    .bigTu{
      width: 100%;
      height: 0.93rem;
      /* background-color: #252525; */
    }
    .bigTu img{
      width: 100%;
      height: 100%;
    }
    .tuiJian{
      width: 100%;
      height:auto;
    }
    .tuiJianTop{
      width: 100%;
      height:0.33rem;
      color: #666;
      text-align:center;
      line-height: 0.33rem;
      margin-top: 0.1rem;
      background-color: white;
    }
    .tuiJianAti{
      width: 1.84rem;
      /* height: 2.43rem; */
      color: #666;
      /* background-color: #fc5a5a; */
      margin:0.03rem 0.03rem 0.5rem 0;
      padding: 0.05rem 0.05rem 0.05rem;
      background-color: white;
      float: left;
    }
    .tuiJianAti img{
      margin-top:0.05rem; 
    }
    .tuiJianAtiTopLeft{
      display: inline-block;
      width: 0.54rem;
      height: 0.16rem;
      color: #fff;
      background-color: #ffa855;
      margin: 0 0.05rem 0 0;
      padding: 0 0.03rem;
      border-radius: 0.03rem;
    }
    .tuiJianAtiTopRight{
      display: inline-block;
      width: 0.66rem;
      height: 0.16rem;
      color: #fff;
      background-color: #87aef1;
      padding: 0 0.03rem;
      border-radius: 0.03rem;
    }
    .tuiJianAtiCenter{
      width: 1.57rem;
      height: 0.28rem;
      color: #252525;
      overflow: hidden;
    }
    .tuiJianAtiBottomLeft{
      width: auto;
      height: 0.15rem;
      font: 0.14rem;
      color: #fc5a5a;
    }
    .tuiJianAtiBottomRight{
      width: 0.36rem;
      height: 0.18rem;
      color: #999;
      font: 0.12rem;
      margin:  0 0 0 0.05rem;
      text-decoration:line-through;
    }
    .DingWei{
      width: 0.51rem;
      height: 0.51rem;
      position: fixed;
      bottom: 0.7rem;
      right: 0.12rem;
      background-color: rebeccapurple;
      background: url("../../../public/img/top.png");
      background-size: 1.5rem 0.55rem;
      background-position: -0.93rem -0.02rem;
    }
</style>

