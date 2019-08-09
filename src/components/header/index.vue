<template>
  <!-- 头部 -->
  <div class="top">
    <a class="a1" href="javascript:void(0);" @click="handleback()">&lt;</a>
    <h2>{{title}}</h2>
    <!-- <span><div class="menu-icon"></div></span> -->
    <a class="navBar" href="javascript:void(0);" @click="handleclick()"></a>
    <!-- 隐藏导航 -->
    <ul class="hidden" v-show="flag">
      <li>
        <span style="background-position: -3px -5px;"></span>
        <p>首页</p>
      </li>
      <li>
        <span style="background-position: -37px -5px;"></span>
        <p>搜索</p>
      </li>
      <li>
        <span style="background-position: -72px -5px;"></span>
        <p>购物车</p>
      </li>
      <li>
        <span style="background-position: -113px -5px;"></span>
        <p>酒仙</p>
      </li>
    </ul>
    <!-- 广告 -->
    <div class="advertisement" v-show="qq">
      <a class="close" href="javascript:void(0);" @click="handlegoodclick()">
        <i class="close_min">好</i>
      </a>
      <span class="add_logo">
        <img src="https://m.jiuxian.com/mjava_statics/images/favicon.ico" alt />
      </span>
      <h3 class="middle">
        <p>打开酒仙网APP</p>
        <p class="red">新人领198元礼包</p>
      </h3>
      <a class="down-btn">立即打开</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      flag: false,
      qq: true,
      title: ""
    };
  },

  created() {
    let { title } = this.$route.params;
    this.title = title;
    // console.log(this.title);
  },
  methods: {
    handleclick() {
      this.flag = !this.flag;
    },
    handlegoodclick() {
      this.qq = !this.qq;
    },
    handleback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 0.4rem;
  background: #de4943;
  position: absolute;
  top: 0px;
}
.top .a1 {
  color: white;
  display: inline-block;
  font-size: 0.27rem;
  font-weight: normal;
  width: 0.3rem;
  height: 0.4rem;
  margin-left: 0.175rem;
  line-height: 0.4rem;
  position: absolute;
  font-family: "SimSun", "宋体", "Arial Narrow";
}
.top > h2 {
  display: inline-block;
  color: white;
  width: 2.18rem;
  height: 0.4rem;
  line-height: 0.4rem;
  position: absolute;
  font-size: 0.16rem;
  left: 21%;
  font-weight: normal;
  text-align: center;
  font-family: "Microsoft YaHei", "华文细黑", "黑体";
}
/* .top>span{
    display: inline-block;
    font-family:Comic Sans MS;
    font-size:0.12rem;
    position: absolute;
    right: 4%;
  }
  .menu-icon{
          width:0.38rem;
      height: 0.36rem;
      margin-top: 0.2rem;
          border-top: 3px solid #ddd;
          border-bottom: 3px solid #ddd;
          background-color:#ddd;
          padding: 5px 0;
      background-clip:content-box;
   } */
.navBar {
  position: absolute;
  right: 0.06rem;
  width: 0.3rem;
  height: 0.4rem;
  background: url(../../../public/img/headIcon.png) -1.54rem 0.06rem no-repeat;
}
/* 隐藏导航 */
.hidden {
  display: flex;
  position: absolute;
  top: 0.4rem;
  left: 0;
  width: 100%;
  height: 0.46rem;
  color: #848d96;
  border-bottom: 1px solid #ccc;
  background-color: #efefef;
  z-index: 1000;
}
.hidden li {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hidden span {
  background: url(../../../public/img/headIcon.png) no-repeat;
  width: 26px;
  height: 20px;
  display: block;
  margin: 5px auto 0;
}
/* 广告 */
.advertisement {
  width: 100%;
  height: 0.43rem;
  position: absolute;
  top: 0.4rem;
  background: black;
  display: flex;
  z-index: 500;
}
.close {
  display: inline-block;
  width: 0.43rem;
  height: 0.43rem;
  line-height: 0.43rem;
  color: white;
}
.close_min {
  width: 0.16rem;
  height: 0.16rem;
  font-style: normal;
  position: relative;
  left: 40%;
}
.add_logo {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.065rem;
}
.add_logo > img {
  width: 0.3rem;
  height: 0.3rem;
}
.middle {
  font-weight: normal;
  position: absolute;
  width: 1.86rem;
  margin: 0 116px 0 73px;
  padding-top: 7px;
  text-align: center;
}
.middle p {
  color: #fff;
  font-size: 0.12rem;
  height: 0.14rem;
  line-height: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.down-btn {
  background: #e62929 none repeat scroll 0 0;
  color: #fff;
  display: block;
  font-size: 14px;
  height: 43px;
  line-height: 43px;
  padding: 0 30px;
  position: absolute;
  right: 0;
  text-align: center;
  text-decoration: none;
  top: 0;
}
.qq1 {
  height: 0;
}
</style>
