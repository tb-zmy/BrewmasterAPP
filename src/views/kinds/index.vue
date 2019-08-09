<template>
  <ran-BScroll>
    <div class="bj">
      <div class="bjTop">
        <span class="bjTopLeft"></span>
        <div class="bjTopCenter">
          <div class="bjTopCenterDiv"></div>
          <input type="text" class="bjTopCenterInput" />
        </div>
        <span class="bjTopRight"></span>
      </div>
      <ul class="bjMiddle">
        <v-touch
          v-for="(item,index) in list"
          :key="index"
          :class="index == activeIndex?'active':''"
          @tap="handletoggle(index)"
          tag="li"
        >{{item.name}}</v-touch>
      </ul>
      <div class="choose">
        <div class="chooseLeft">酒仙配送</div>
        <div class="chooseRight">CLUB会员价</div>
      </div>
      <ul class="bjBottom">
        <li v-for="(item,index) in kindslist" :key="index">
          <img :src="item.goods_thumb" alt />
          <div class="bjBottomDiv">
            <div class="bjBottomDivTop">
              <span class="bjBottomDivTopName">{{item.goods_name}}</span>
              <br />
              <span class="bjBottomDivTopIcon">限时抢购</span>
              <span class="bjBottomDivTopCon">N元场</span>
            </div>
            <div class="bjBottomDivMiddle">￥{{item.shop_price}}</div>
            <div class="bjBottomDivBottom">
              <div class="bjBottomDivBottomLeft"></div>
              <span class="bjBottomDivBottomMiddle">99 % 好评</span>
              <span class="bjBottomDivBottomRight">6633 人评论</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </ran-BScroll>
</template>
<script>
// import axios from "axios"
import { kinds_list_api } from "api/jiuxian";
export default {
  name: "kinds",
  data() {
    return {
      list: [
        {
          name: "综合",
          path: ""
        },
        {
          name: "销量",
          path: ""
        },
        {
          name: "价格",
          path: ""
        },
        {
          name: "筛选",
          path: ""
        }
      ],
      activeIndex: "",
      kindslist: []
    };
  },
  async created() {
    let data = await kinds_list_api();
    this.kindslist = data.data.goodsCate.list;
    console.log(this.kindslist);
  },

  // created(){
  //     axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/150393?pageNum=3")
  //     .then((data)=>{
  //         console.log(data.data.goodsCate.list)
  //     })
  // },
  methods: {
    handletoggle(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style>
.active {
  color: #fc5a5a;
}
.bj {
  width: 100%;
}
.bjTop {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  line-height: 0.4rem;
  background-color: #fafafa;
}
.bjTop .bjTopLeft {
  width: 0.33rem;
  height: 0.4rem;
  background: url("../../../public/img/listIcon.png") no-repeat;
  /* background-size:1.2rem 0.4rem; */
  background-position: -87px 12px;
}
.bjTop .bjTopCenter {
  width: 2.88rem;
  height: 0.28rem;
  background: #ececec;
  display: flex;
  align-items: center;
  border-radius: 0.05rem;
}
.bjTop .bjTopCenter .bjTopCenterDiv {
  width: 0.16rem;
  height: 0.16rem;
  background-color: brown;
  background: url("../../../public/img/headIcon.png") no-repeat;
  background-position: -39px -5px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.bjTop .bjTopCenter .bjTopCenterInput {
  width: 2.5rem;
  height: 100%;
  border: none;
  outline: none;
  background: #ececec;
}
.bjTop .bjTopRight {
  width: 0.24rem;
  height: 0.24rem;
  background-color: bisque;
  background: url("../../../public/img/listIcon.png") no-repeat;
  background-size: 100px 70px;
  background-position: 0 -45px;
}
.bj .bjMiddle {
  width: 100%;
  height: 0.4rem;
  display: flex;
  line-height: 0.4rem;
  text-align: center;
  color: #252525;

  /* align-items: center; */
}
.bj .bjMiddle li {
  flex: 1;
}
.bj .choose {
  width: 100%;
  height: 0.45rem;
  color: #666;
  background-color: #ffffff;
  padding: 0.03rem 0.15rem 0;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}
.bj .chooseLeft {
  width: auto;
  height: 0.26rem;
  line-height: 0.26rem;
  color: #ea0732;
  margin: 0 0.1rem 0 0;
  padding: 0 0.15rem;
  border-radius: 0.13rem;
  background-color: #f6f6f6;
}
.bj .chooseRight {
  width: auto;
  height: 0.26rem;
  line-height: 0.26rem;
  color: #333;
  margin: 0 0.1rem 0 0;
  padding: 0 0.15rem;
  border-radius: 0.13rem;
  background-color: #f6f6f6;
}
.bj .bjBottom {
  width: 100%;
}
.bj .bjBottom li {
  height: 100%;
  overflow: hidden;
}
.bj .bjBottom img {
  width: 1.2rem;
  height: 1.2rem;
  /* display: inline-block; */
  float: left;
}
.bj .bjBottom .bjBottomDiv {
  width: 2.5rem;
  height: auto;
  padding: 5px 0 5px 10px;
  border-bottom: 1px solid #e8e8e8;
  float: left;
}
.bj .bjBottomDivTop {
  width: 2.55rem;
  height: 0.56rem;
  line-height: 0.18rem;
  font-size: 0.14rem;
}
.bj .bjBottomDivTopName {
  width: 100%;
}
.bj .bjBottomDivTopCon {
  width: auto;
  height: 0.14rem;
  background-color: #6699ff;
  border-radius: 0.02rem;
  margin-left: 0.05rem;
}
.bj .bjBottomDivTopIcon {
  width: auto;
  height: 0.14rem;
  background-color: #ffa855;
  font-size: 0.1rem;
  padding: 0 0.02rem;
  border-radius: 0.02rem;
  margin-left: 0.05rem;
}
.bj .bjBottom .bjBottomDivMiddle {
  width: 100%;
  height: 0.2rem;
  margin-top: 0.08rem;
  line-height: 0.2rem;
  font-size: 0.15rem;
  color: #fc5a5a;
  font-weight: bold;
}
.bj .bjBottom .bjBottomDivBottom {
  width: 100%;
  height: 0.18rem;
  line-height: 0.18rem;
  display: flex;
}
.bj .bjBottomDivBottomLeft {
  width: 0.38rem;
  height: 0.13rem;
  background: url("../../../public/img/listIcon.png") no-repeat;
  background-position: -0.62rem -0.15rem;
  background-size: 1rem 0.7rem;
}
.bj .bjBottomDivBottomMiddle {
  margin-left: 0.06rem;
  width: auto;
  height: 0.12rem;
  color: #aaa;
  line-height: 0.18rem;
}
.bj .bjBottomDivBottomRight {
  margin-left: 0.06rem;
  color: #aaa;
  font-size: 0.12rem;
}
</style>
