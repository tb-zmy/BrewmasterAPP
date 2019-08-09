<template>
  <div>
    <Header />
    <div class="main123">
      <ran-BScroll ref="ranbscroll">
        <div class="firesales" style>
          <div class="topBanner">
            <a href>
              <img
                src="https://img09.jiuxian.com/bill/2019/0717/bf91e946dffd448b8167d7d63c6fed82.jpg"
              />
            </a>
          </div>
          <div id="appendValue">
            <!--标题-->
            <div class="banner">
              <a name="分栏1" class="link">
                <img src="https://img10.jiuxian.com/bill/2019/0717/0ac249836c92488496902300c6289abb.jpg" />
                <img src="https://img08.jiuxian.com/bill/2019/0717/f0a5f14bb1814d9dae919764119585c8.jpg">
              </a>
            </div>
            <!--标题 end-->
            <!--单品banner 样式1-->

            <ul class="twoList2 clearfix">
              <li :goodid="item.goods_id" v-for="(item,index) in activelist" :key="index">
                <a href="#" class="link"></a>
                <div class="pic">
                  <img :src="item.goods_thumb" />
                </div>
                <p class="name">{{item.goods_name}}</p>
                <p class="adText"></p>
                <div class="orice">
                  <div class="clubWrap" style="display: none" :showgoodid="item.goods_id">
                    <p class="clubFirst" :goodid="item.goods_id"></p>
                    <p class="clubLast">
                      <span :goodidclub="item.goods_id"></span>
                      <i>
                        <img src="https://m.jiuxian.com/mjava_statics/images/loazy_img.png" />
                      </i>
                    </p>
                  </div>
                  <p style :showgoodid="item.goods_id">
                    <span :goodid="item.goods_id">￥{{item.cur_price}}</span>
                    <del :goodid="item.goods_id">￥{{item.shop_price}}</del>
                  </p>
                  <a href="#" class="goBuy">点击购买</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- 底部 -->
          <div class="topicList" id="footPic" style>
            <ul class="clearfix">
              <li>
                <a href>
                  <img
                    src="https://img10.jiuxian.com/bill/2018/1031/fb02b7d4ec2f4c978f55722e795a3417.jpg"
                    original="https://img10.jiuxian.com/bill/2018/1031/fb02b7d4ec2f4c978f55722e795a3417.jpg"
                    style="display: inline;"
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src="https://img10.jiuxian.com/bill/2018/1031/c084879b81c24b8698bd7a69c982cc98.jpg"
                    original="https://img10.jiuxian.com/bill/2018/1031/c084879b81c24b8698bd7a69c982cc98.jpg"
                    style="display: inline;"
                  />
                </a>
              </li>
              <!-- 活动规则 -->
            </ul>
          </div>
          <!-- 返回 -->
          <div class="bottomBtn" id="returnTop" style>
            <a class="toTop" href="#gotop">
              <i></i>
              <span>
                返回
                <br />顶部
              </span>
            </a>
          </div>
        </div>
      </ran-BScroll>
    </div>
  </div>
</template>
<script>
import {
  active_list6_api,
  active_list7_api,
  active_list8_api
} from "api/jiuxian";
// import { mapState } from 'vuex';

export default {
  name: "active",
  data() {
    return {
      activelist: JSON.parse(sessionStorage.getItem("activelist")) || [],
    };
  },
  //     computed:{
  //     ...mapState({
  //       pageNum:state=>state.carts.pageNum
  //     })
  //   },

  async created() {
    if (
      !sessionStorage.getItem("activelist") &&
      !sessionStorage.getItem("subfield")
    ) {
      let data = await active_list6_api();
      this.activelist = data.data.goodsCate.list;
      console.log(this.activelist);
      console.log(data.data.goodsCate.list);
      sessionStorage.setItem(
        "activelist",
        JSON.stringify(data.data.goodsCate.list)
      );
    }
  },
  mounted() {
         this.$refs.ranbscroll.handlepullingDown(async ()=>{
             console.log(111)
        let data = await active_list7_api();
        this.activelist = data.data.goodsCate.list;
        sessionStorage.setItem("activelist",JSON.stringify(data.data.goodsCate.list))
        this.$refs.ranbscroll.handlefinishPullDown();
    })
    //上拉加载更多
    this.$refs.ranbscroll.handlepullingUp(async () => {
      let data = await active_list8_api();
      this.activelist = [...this.activelist, ...data.data.goodsCate.list];
      sessionStorage.setItem("activelist", JSON.stringify(data.data.goodsCate.list));
      this.$refs.ranbscroll.handlefinishPullUp();
    });
  }
};
</script>
<style>
.main123 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.4rem;
  overflow-y: auto;
  background: #ffe0a7;
}
.firesales {
  width: 100%;
}
.topBanner {
  width: 100%;
  position: relative;
  z-index: 15;
  top: 0;
  left: 0;
}
.topBanner a {
  width: 100%;
  height: auto;
  display: block;
}
.topBanner img {
  width: 100%;
  height: auto;
}
#appendValue {
  padding-top: 2%;
}
/* banner */
.banner,
.topicList {
  position: relative;
}
.banner {
  overflow: hidden;
  position: relative;
  font-size: 0;
}
.banner a {
  height: auto;
  display: block;
  margin-bottom: 2%;
}
.banner a img {
  width: 100%;
  height: auto;
}
/* ul1 */
.twoList2 {
  padding-left: 2%;
  overflow: hidden;
}
.twoList2 li {
  width: 48%;
  float: left;
  margin: 0 2% 2% 0;
  background: #fff;
  box-sizing: border-box;
  font-family: "微软雅黑";
  padding-bottom: 2%;
  position: relative;
  z-index: 1;
}
.twoList2 li .link {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
.twoList2 li .pic {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 0;
  padding: 2% 0;
}
.twoList2 li .pic img {
  width: 140px;
  height: 140px;
  margin: auto;
}
.twoList2 li .name {
  height: 28px;
  line-height: 14px;
  width: 90%;
  margin: 2% 5%;
  font-size: 12px;
  color: #000;
  text-align: center;
  overflow: hidden;
}
.adText {
  font-size: 12px;
  margin: 0 5%;
  width: 90%;
  color: #fc0000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 21px;
  line-height: 21px;
}
.twoList2 li .orice {
  height: 32px;
  margin: 5px 5% 0;
  text-align: center;
  position: relative;
  z-index: 11;
  overflow: hidden;
}
.twoList2 li .orice p {
  height: 32px;
  line-height: 32px;
  float: left;
}
.twoList2 li .orice span {
  color: #ff0000;
  font-weight: bold;
  font-size: 14px;
}
.twoList2 li .orice del {
  color: #7a7a7a;
  font-size: 12px;
  padding-left: 3px;
}
.twoList2 li .goBuy {
  background: #ff0000;
  display: block;
  float: right;
  width: 40%;
  height: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 4px;
}

/* 底部 */
.topicList {
  position: relative;
  overflow: hidden;
}
.topicList ul {
  padding-bottom: 5px;
  margin: 0 auto;
}
.topicList ul li {
  width: 50%;
  position: relative;
  float: left;
  display: inline-block;
}
.topicList ul li img {
  width: 100%;
  height: auto;
}
.topicList ul li {
  width: 50%;
  position: relative;
  float: left;
  display: inline-block;
}
.bottomBtn {
  padding: 30px 0;
}
.toTop {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border-radius: 50px;
  border: 3px solid #ff2753;
  background-color: #fff;
}
.toTop i {
  width: 14px;
  height: 9px;
  display: block;
  background: url(../../../public/img/top.png) no-repeat;
  margin: 5px 19px 2px;
}
.toTop span {
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  color: #280130;
  line-height: 15px;
}
</style>