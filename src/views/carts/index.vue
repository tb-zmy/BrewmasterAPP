<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <v-touch class="a1" href="javascript:void(0);" @tap="handleback()" tag="a">&lt;</v-touch>
      <h2>购物车</h2>
      <!-- <span><div class="menu-icon"></div></span> -->
      <v-touch class="navBar" href="javascript:;" @tap="handletanchu()" tag="a">
        <i></i>
        <i></i>
        <i></i>
      </v-touch>
      <!-- 隐藏导航 -->
      <ul class="hidden" ref="hidden" v-if="flag">
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
    </div>
    <div class="main111" ref="cartsmain">
      <div class="carts_main" >
        <!-- 付满包邮 -->
        <div class="topCatTip clearfix">
          <div class="topCatTipBd">
            <i class="pubIcon"></i>
            自营商品实付满100元免运费，偏远地区满500免运费
          </div>
        </div>
        <!-- 空购物车 -->
        <div id="cart_container" style="margin-top: 0px; display:none">
          <div class="catKongBox">
            <i></i>
            <p>购物车还是空的</p>
            <p>
              <span>快去逛逛吧~</span>
            </p>
            <a href="#">促销活动</a>
          </div>
        </div>
        <!-- 购物车列表 -->
        <div class="cartWrap">
          <div class="pucTitle">
            <label>
              <i id="-1" class="pubIcon falseIcon"
              data-type="checkbox"
              @click="handleSelectedChange"
              ref="selectall"
              ></i>
            </label>
            <span class="jxzy">
              <img src="../../../public/img/jx.png" />
            </span>
            <span class="title">酒仙自营</span>
            <span class="cartCoupons" productids="30015,28581">
              领券
              <b class="pubIcon"></b>
            </span>
          </div>
          <ul class="catShopList">
            <li v-for="(item,index) in sendlist1" :key="index">
              <div class="catShopCont" cart_unit="item-30015">
                <a href="javascript:void(0)" class="cartDel" cart_unit="item-30015" @click="handlegoodsDel(index)">|&nbsp;删除</a>
                <i class="pubIcon falseIcon" ref="falseicon" data-type="checkbox" @click="handlegoodsSelected(index)"></i>
                <div class="catShopInfo clearfix">
                  <div class="catImg catImgThr">
                    <a href="#">
                      <img :src="item[2]" alt />
                    </a>
                  </div>
                  <div class="catInfo">
                    <div class="price">
                      <h4 class="twoLineEllipsisCart">
                        <a href="#">
                          <span>{{item[1]}}</span>
                        </a>
                      </h4>
                      <p>
                        <span>¥{{item[3]}}</span>
                      </p>
                      <div class="rsCartItem">
                        <div class="comAmount">
                          <a class="publicIcon minus on" @click="handleReduce(index)">-</a>
                          <input class="inpVal" type="text" :value="item.num" />
                          <a class="publicIcon plus" @click="handleAdd(index)">+</a>
                        </div>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 一堆字 -->
      <div class="popYushou">
        <div class="popysHead">以下商品请分开结算</div>
        <div class="popysCon">
          <div class="ys_tit">
            <span class="ys">预售</span>预售商品需要单独结算
          </div>
        </div>
        <div class="popysOther">
          <div class="ot_tit">
            <div class="otnum">其他商品</div>
            <a class="popGopay" href="javascript:;">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="catBomAllCheak">
      <label data-type="checkallcli">
        <i class="pubIcon tureIcon" data-type="checkall" @click="handleSelectedChange"></i>
        <span>全选</span>
      </label>
      <div>
        <p>
          <span>合计：</span>
          <em>￥{{goodsCount.goodsPrice}}</em>
        </p>
        <p class="colorTxt">
          <span>优惠：</span>
          <strong>￥0.00</strong>
        </p>
      </div>
      <span>
        <a href="javascript:void(0)" class="delBtn">去结算&nbsp;(2)</a>
      </span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "carts",
  props:["id","name","img","price"],
  data() {
    return {
      flag: false,
      style: "",
    };
  },
  // props:["id","name","img"],
  computed: {
    ...mapState({
      sendlist1: state => state.carts.savelist,
      selectedAll: state => state.carts.selectedAll
    }),
    ...mapGetters({
      goodsCount: "carts/goodsCount"
    })
  },

  created() {
    // axios.get("/goods/goodslist", {}).then(data => {
    //   console.log(data.data.data);
    //   this.getGoodsAction(data.data.data);
    // });
      this.sendlist={0:this.id,1:this.name,2:this.img,3:this.price}

      this.getGoodsAction(this.sendlist);
  },
  methods: {
    handleback() {
      this.$router.back();
    },
    handletanchu() {
      let cartsmain = this.$refs.cartsmain;
      console.log(cartsmain.style.top)
      cartsmain.style.top = "0.85rem";
      this.flag = !this.flag;
      if (!this.flag) {
        cartsmain.style.top = "0.4rem";
      }
    },
    ...mapActions({
      getGoodsAction: "carts/getGoodsAction"
    }),
    ...mapMutations({
      handlegoodsSelected: "carts/handlegoodsSelected",
      handleReduce: "carts/handleReduce",
      handleAdd: "carts/handleAdd",
      handlegoodsDel: "carts/handlegoodsDel",
      handleSelectedChange: "carts/handleSelectedChange"
    }),
    // handleSelectedChange(){
    //   if(!this.selectedAll){
    //     let selectall = this.$refs.selectall;
    //     selectall.style.backgroundPosition = "-85px 3px";
    //   }
    // }
    // handlegoodsSelected(index) {
    //   alert("1");
    //   if (!this.goods[index].flag) {
    //     // this.style='background-position=-85px 3px'
    //     let falseicon = this.$refs.falseicon;
    //     console.log(this.$refs.falseicon);
    //     falseicon.style.backgroundPosition = "-85px 3px";
    //   }
    // }
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 0.4rem;
  background: #fafafa;
  position: absolute;
  top: 0px;
}
.top .a1 {
  color: black;
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
  color: black;
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
    top: -0.06rem;
  }
  .menu-icon{
    width:0.2rem;
    height: 0.15rem;
    margin-top: 0.2rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background-color:black;
    padding: 4px 0;
    background-clip:content-box;
   } */
.navBar {
  position: absolute;
  top: 13px;
  right: 0;
  width: 30px;
  height: 20px;
  display: block;
}
.navBar i {
  display: block;
  width: 20px;
  height: 2px;
  margin-bottom: 4px;
  overflow: hidden;
  background-color: #666;
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
/* carts_main */
.main111 {
  position: absolute;
  top: 0.4rem;
  botton: 0.51rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.carts_main {
  width: 100%;
}
/* 付满包邮 */
.topCatTip {
  border-top: 1px solid #ffe9c6;
  border-bottom: 1px solid #ffe9c6;
  background-color: #fff4e2;
  height: 0.22rem;
  line-height: 0.22rem;
  color: #ff3333;
  font-size: 0.12rem;
  width: 100%;
  overflow: hidden;
}
.topCatTip .topCatTipBd {
  padding: 0 0 0 0.1rem;
}
.topCatTip i {
  display: inline-block;
  background-position: -0.4rem 0.02rem;
  width: 0.11rem;
  height: 0.22rem;
  margin-right: 0.05rem;
  float: left;
  position: relative;
  top: -0.02rem;
}
.pubIcon {
  background: url(../../../public/img/catIcon.png) no-repeat 0 0;
  background-size: 1.5rem 1.5rem;
}
/* 空购物车 */
.catKongBox {
  text-align: center;
  margin: 100px 0;
}
.catKongBox i {
  background: url(../../../public/img/kong.png) no-repeat 0 0 62px 62px;
  width: 62px;
  height: 62px;
  display: inline-block;
  margin-bottom: 10px;
}
.catKongBox p {
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.catKongBox p span {
  color: #999;
}
.catKongBox a {
  display: inline-block;
  margin-top: 20px;
  height: 24px;
  line-height: 24px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
}
/* 尾部 */
.catBomAllCheak {
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #d9d9d9;
  z-index: 999;
}
.catBomAllCheak label,
.catBomAllCheak div {
  display: inline-block;
}
.catBomAllCheak label .tureIcon {
  background-position: -62px 3px;
  background-size: 1.8rem 1.8rem;
}
.catBomAllCheak label i {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 14px;
  left: 10px;
  display: block;
}
.catBomAllCheak label span {
  padding-left: 40px;
  color: #666;
}
.catBomAllCheak span {
  float: right;
}
.catBomAllCheak div p {
  line-height: 27px;
  font-size: 16px;
  color: #252525;
  position: relative;
}
.catBomAllCheak div p span {
  display: block;
  width: 50px;
  float: left;
}
.catBomAllCheak div p em {
  color: #ff3333;
  font-style: normal;
}
.catBomAllCheak div p.colorTxt {
  color: #999;
  font-size: 14px;
  position: relative;
  top: -8px;
}
.catBomAllCheak div p span {
  display: block;
  width: 50px;
  float: left;
}
.catBomAllCheak div p strong {
  font-weight: normal;
  padding: 0 5px 0 0;
}
.catBomAllCheak span {
  float: right;
}
.catBomAllCheak span a.delBtn {
  color: #fff;
  background-color: #fd5a5b;
}
.catBomAllCheak span a {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  width: 98px;
  font-size: 16px;
  text-align: center;
}
/* 购物车列表 */
.cartWrap {
  margin-top: 8px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
}
.pucTitle {
  height: 45px;
  line-height: 45px;
  background: #fff;
  position: relative;
}
.pucTitle .falseIcon {
  background-position: -61px 3px;
  background-size: 1.8rem 1.8rem;
}
.pucTitle i {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
}
.jxzy {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 40px;
  top: 15px;
  display: block;
}
.jxzy img {
  width: 100%;
  height: auto;
  display: block;
}
.pucTitle .title {
  font-size: 14px;
  color: #252525;
  margin-left: 62px;
  line-height: 45px;
}
.cartCoupons {
  display: block;
  position: absolute;
  right: 10px;
  top: 50%;
  cursor: pointer;
  transform: translate(0, -50%);
}
.cartCoupons b {
  display: inline-block;
  width: 7px;
  height: 12px;
  margin-left: 5px;
  position: relative;
  top: 3px;
  background-position: -135px -41px;
}
/* ul */
.catShopList {
  border-top: 1px solid #e8e8e8;
}
.catShopList li {
  background-color: #fff;
  position: relative;
}
.catShopList li .catShopCont {
  padding: 10px 0;
  position: relative;
}
.catShopList li .cartDel {
  height: 22px;
  line-height: 22px;
  display: block;
  color: #666;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding-left: 10px;
  z-index: 101;
}
.catShopList li .falseIcon {
  background-position: -61px 3px;
  background-size: 1.8rem 1.8rem;
}
.catShopList li i {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 42%;
  left: 10px;
  display: block;
}
.catShopList li .catShopInfo {
  margin-left: 20px;
  padding-right: 10px;
  height: 80px;
}
.catShopList li .catShopInfo .catImg.catImgThr {
  top: 10px;
  left: 40px;
}
.catShopList li .catShopInfo .catImg {
  width: 80px;
  height: 81px;
}
.catShopList li .catShopInfo .catImg,
.catShopList li .catShopInfo .catImgTwe {
  border: 1px solid #e8e8e8;
  position: absolute;
  position: absolute;
  top: 10px;
  left: 10px;
}
.catShopList li .catShopInfo .catImg img,
.catShopList li .catShopInfo .catImgTwe img {
  width: 100%;
  height: auto;
}
.catShopList li .catShopInfo .catInfo {
  margin-left: 112px;
}
.catShopList li .catShopInfo .catInfo h4 {
  width: 100%;
  height: 36px;
  line-height: 18px;
  font-size: 0;
  overflow: hidden;
  color: #333;
}
.catShopList li .catShopInfo .catInfo h4 span {
  vertical-align: top;
  font-size: 14px;
}
.catShopList li .catShopInfo .catInfo p {
  font-size: 12px;
  color: #ff0000;
  padding: 0 0 5px;
  height: 18px;
  line-height: 18px;
}
.catShopList li .catShopInfo .catInfo p span {
  float: left;
  margin-right: 5px;
}
.rsCartItem {
  width: 75px;
  height: 20px;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
}
.comAmount {
  width: 75px;
  height: 20px;
  position: relative;
}
.comAmount .minus.on,
.comAmount .plus.on {
  color: #d0d0d0;
}
.comAmount .minus {
  left: 0;
  border-right: 1px solid #d0d0d0;
  line-height: 18px;
}
.comAmount a {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  overflow: hidden;
  color: #666;
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  font-family: Arial;
}
.comAmount .inpVal {
  width: 75px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 0;
}

.comAmount .plus {
  right: 0;
  border-left: 1px solid #d0d0d0;
}
</style>
