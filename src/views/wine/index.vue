<template>
  <div id="wine">
    <Header />
    <!-- 内容 -->
    <div class="content">
      <ran-BScroll ref="ranBScroll">
        <div class="bgMain">
          <div class="main_head">
            <!-- 图片 -->
            <div class="main_head_top">
              <a class="a_fist" href="#">
                <img
                  src="https://img08.jiuxian.com/bill/2018/0817/1986b24a588f4d238fbb28186dcb3114.jpg"
                />
              </a>
              <a class="a_right_1" href="#">
                <img
                  src="https://img07.jiuxian.com/bill/2017/0321/eb4c91b85f9b462cac6262103752e952.jpg"
                />
              </a>
              <a class="a_right_2" href="#">
                <img
                  src="https://img08.jiuxian.com/bill/2017/0215/2ba4508589514badba2d7482a2cd7d5c.jpg"
                />
              </a>
            </div>
            <!-- 列表 -->
            <ul class="main_head_list">
              <li>
                <a href="#">法国</a>
              </li>
              <li>
                <a href="#">澳大利亚</a>
              </li>
              <li>
                <a href="#">西班牙</a>
              </li>
              <li>
                <a href="#">智力</a>
              </li>
              <li>
                <a href="#">拉菲</a>
              </li>
              <li>
                <a href="#">奔富</a>
              </li>
              <li>
                <a href="#">张裕</a>
              </li>
              <li class="last">
                <a href="#">查看全部</a>
              </li>
            </ul>
          </div>
          <!-- 循环 -->
          <div class="recommend">
            <div class="recTitle">
              <div class="line"></div>
              <div class="title">精品推荐</div>
            </div>
            <!-- 循环列表 -->
            <div class="recList">
              <ul class="list">
                <v-touch class="clearList"
                v-for="(item,index) in winelist"
                :key="index"
                @tap="handletoDetail(item.proId,item.proName)"
                tag="li"
                >
                  <a href="#">
                    <img :src="item.proImg" alt />
                    <div class="list_right">
                      <a class="great_box" href="#">{{item.proName}}</a>
                      <p class="years_day">十几年如一日，精心酿造</p>
                      <p class="price">￥{{item.jxPrice}}</p>
                    </div>
                  </a>
                </v-touch>
              </ul>
            </div>
            <!-- 查看全部 -->
            <div class="recAll">
              <a href="#">查看全部</a>
            </div>
          </div>
        </div>
      </ran-BScroll>
    </div>
  </div>
</template>

<script>
import { jiuxian_list_api } from "api/jiuxian";
import { mapState } from "vuex";

// console.log(jiuxian_list_api)
export default {
  name: "wine",
  async created() {
    if (!sessionStorage.getItem("winelist")) {
      let data = await jiuxian_list_api();
      this.winelist = data.data.killProList;
      // console.log(this.winelist);
      sessionStorage.setItem("winelist", JSON.stringify(data.data.killProList));
    }
  },
  data() {
    return {
      winelist: JSON.parse(sessionStorage.getItem("winelist")) || []
    };
  },
  computed: {
    ...mapState({})
  },
  methods:{
    handletoDetail(id,name){
      this.$router.push({name:"details",params:{id,name}})
      // console.log(index)
    }
  },
};
</script>
<style scoped>
#wine {
  width: 100%;
  height: 100%;
}
/* 主内容 */
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.4rem;
  width: 100%;
  overflow-y: auto;
}
.bgMain {
  padding: 0.1rem;
}
/* 主内容里的头部 */
.main_head {
  width: 100%;
  height: 2.65rem;
  background: white;
}
/* 图片 */
.main_head_top {
  width: 100%;
  height: 1.82rem;
}
.a_fist {
  width: 2.13rem;
  height: 1.8rem;
}
.a_right_1 .a_right_2 {
  width: 1.415rem;
  height: 0.89rem;
}
.a_fist > img {
  width: 2.13rem;
  height: 1.8rem;
  display: inline-block;
  float: left;
}
.a_right_1 > img {
  width: 1.415rem;
  height: 0.89rem;
  float: right;
}
.a_right_2 > img {
  width: 1.415rem;
  height: 0.91rem;
  float: right;
}
/* 列表 */
.main_head_list {
  margin-top: 0.1rem;
  width: 100%;
  height: 0.71rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main_head_list > li > a {
  display: block;
  width: 0.85rem;
  height: 0.32rem;
  color: #373737;
  font-size: 0.15rem;
  border: 1px solid #c3c3c3;
  border-radius: 2px;
  text-align: center;
  line-height: 0.32rem;
}
.main_head_list .last a {
  color: #de4943;
  font-weight: bold;
}
/* 循环 */
.recommend {
  margin-top: 0.2rem;
}
/* 精品推荐 */
.recTitle {
  height: 0.4rem;
}
.line {
  height: 0.2rem;
  border-bottom: 1px solid #a2a2a2;
}
.title {
  width: 1rem;
  height: 0.4rem;
  background: #ffffff;
  position: relative;
  top: -0.2rem;
  left: 50%;
  line-height: 0.4rem;
  margin: 0 0 0 -0.5rem;
  text-align: center;
  color: #3a3a3a;
  font-family: "黑体";
  font-size: 0.18rem;
}
/* 循环列表 */
.list {
  width: 100%;
  height: 100%;
}
.clearList {
  padding: 10px;
  width: 100%;
  height: 1.2rem;
  border-bottom: 2px solid #e7e7e7;
}
.clearList img {
  width: 1rem;
  height: 1rem;
  float: left;
}
.list_right {
  width: 2.25rem;
  height: 0.88rem;
  float: right;
}
.great_box {
  color: #000000;
  height: 0.36rem;
  line-height: 0.18rem;
  display: block;
  overflow: hidden;
}
.years_day {
  color: #f58f2b;
  height: 0.18rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
}
.price {
  font-size: 0.18rem;
  margin-left: 0.03rem;
  font-weight: bold;
  color: #df4a44;
}
/* 查看全部 */
.recAll {
  border-radius: 0.03rem;
  height: 0.7rem;
  line-height: 0.3rem;
  margin: 0.2rem auto;
  text-align: center;
  width: 1.1rem;
}
.recAll a {
  width: 100%;
  display: block;
  color: #ffffff;
  background-color: #de4943;
}
</style>
