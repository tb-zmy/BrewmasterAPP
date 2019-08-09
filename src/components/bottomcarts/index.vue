<template>
  <!--加入购物车 -->
  <div class="bottomFix">
    <div class="detailBomNav">
      <ul>
        <li style="display: true">
          <a href="javascript:;" id="zaixiankefu">
            <i class="shijiushiIcon"></i>
          </a>
        </li>
        <li>
          <a href="javascript:;" id="collect_goods">
            <i class="collectIcon" id="toggleCollect"></i>
          </a>
        </li>

        <li>
          <em id="cartNums">1</em>
          <a id="detail_gouwuche" href="#">
            <i class="cartIcon2"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="detailBomRight" id="footerBar">
      <li class="inCart">
        <a class="detailLink toCart" href="javascript:;" id="toCart_goods">加入购物车</a>
      </li>
      <ul id="canBuy">
        <li>
          <a class="detailLink detSty buyNow" href="javascript:;" id="buyNow_goods">立即购买</a>
        </li>
      </ul>
    </div>
    <div class="pro" id="stock_arrive" style="display: none">所选地区暂时缺货，非常抱歉！</div>
  </div>
</template>
<script>
export default {
  name: "Bottomcarts"
};
</script>
<style>
/* 加入购物车 */
.bottomFix {
  background-color: #fafafa;
  position: fixed;
  height: 45px;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
}
.detailBomNav {
  float: left;
  width: 50%;
  height: 45px;
  position: relative;
}
.detailBomNav ul {
  display: flex;
}
.detailBomNav li {
  height: 41px;
  padding-top: 3px;
  position: relative;
  flex: 1;
  flex-basis: 0;
}
.detailBomNav .shijiushiIcon {
  background: url(../../../public/img/sjs.png) no-repeat;
  background-size: 41px 41px;
}
.detailBomNav li a i {
  display: block;
  width: 41px;
  height: 41px;
  margin: 0 auto;
}
.detailBomNav li a {
  display: block;
  width: 100%;
  height: 41px;
}
.detailBomNav .collectIcon {
  background: url(../../../public/img/bottom05.png) no-repeat;
  background-size: 41px 41px;
}
.detailBomNav li em {
  position: absolute;
  top: 3px;
  left: 50%;
  height: 14px;
  line-height: 14px;
  overflow: hidden;
  display: block;
  padding: 0 5px;
  color: #fff;
  background-color: #fc5a5a;
  font-size: 8px;
  border-radius: 50%;
  font-style: normal;
}
.detailBomNav .cartIcon2 {
  background: url(../../../public/img/bottom06.png) no-repeat;
  background-size: 41px 41px;
}
.detailBomRight {
  margin-left: 50%;
  height: 46px;
  display: flex !important;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.detailBomRight li.inCart {
  flex: 1;
}
.detailBomRight li .detailLink.toCart {
  background-color: #fc5a5a;
}
.detailBomRight li .detailLink {
  display: block;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  position: relative;
}
.detailBomRight ul {
  height: 46px;
  flex: 1;
}
#canBuy li,
#cannotBuy li {
  width: 100%;
}
.detailBomRight li .detailLink.detSty {
  background-color: #3c3f51;
}
.detailBomRight li .detailLink {
  display: block;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  position: relative;
}
.bottomFix .pro {
  position: absolute;
  height: 34px;
  line-height: 34px;
  top: -35px;
  text-align: center;
  background: #fff4e2;
  font-size: 13px;
  width: 100%;
  border-top: 1px solid #ffe7bf;
  color: #ffa800;
}
</style>
