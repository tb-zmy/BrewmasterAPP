<template>
  <div class="shopping">
    <Header />
    <div class="carts_main">
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
                <p><span>快去逛逛吧~</span></p>
                <a href="#">促销活动</a>
            </div>
        </div>
        <!-- 购物车列表 -->
        <div class="cartWrap">
            <div class="pucTitle">
                <label>
                    <i id="-1" class="pubIcon falseIcon" data-type="checkbox"></i>
                </label>
                <span class="jxzy"><img src="./img/jx.png"></span>
                <span class="title">
                    酒仙自营
                </span>
                <span class="cartCoupons" productids="30015,28581">领券<b class="pubIcon"></b></span>
            </div>
            <ul class="catShopList">
                <li>

                    <div class="catShopCont" cart_unit="item-30015">
                        <a href="javascript:void(0)" class="cartDel" cart_unit="item-30015">|&nbsp;删除</a>
                        <i class="pubIcon falseIcon" data-type="checkbox"></i>
                        <div class="catShopInfo clearfix">
                            <div class="catImg catImgThr">
                                <a href="https://m.jiuxian.com/m_v1/goods/view/30015">
                                    <img src="https://img06.jiuxian.com/2017/0913/6442cdd266cd4209a79e638392bd2cda4.jpg"
                                        alt="">
                                </a>
                            </div>
                            <div class="catInfo">
                                <div class="price">
                                    <h4 class="twoLineEllipsisCart">
                                        <a href="https://m.jiuxian.com/m_v1/goods/view/30015">

                                            <span>法国红酒法国拉菲珍藏干红葡萄酒豪华双支礼盒（ASC正品行货定制版）</span>
                                        </a>
                                    </h4>
                                    <p>

                                        <span>¥369.00</span>
                                    </p>
                                    <div class="rsCartItem">
                                        <div class="comAmount">
                                            <a class="publicIcon minus on">-</a>
                                            <input class="inpVal" type="text" value="1">
                                            <a class="publicIcon plus ">+</a>
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
    <!-- 尾部 -->
    <div class="catBomAllCheak">
        <label data-type="checkallcli">
            <i class="pubIcon tureIcon" data-type="checkall"></i>
            <span>全选</span>
        </label>
        <div>
            <p><span>合计：</span><em>￥567.00</em></p>
            <p class="colorTxt"><span>优惠：</span><strong>￥0.00</strong></p>
        </div>
        <span>
            <a href="javascript:void(0)" class="delBtn">去结算&nbsp;(2)</a>
        </span>
    </div>
  </div>
</template>
 <script>
export default {
  name: "shopping"
};
</script>
 
 <style>
 .carts_main{
    position: absolute;
    top: 0.4rem;
    bottom:0.51rem;
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
    padding: 0 0 0 0.10rem;
}
.topCatTip i {
    display: inline-block;
    background-position: -0.40rem 0.02rem;
    width: 0.11rem;
    height: 0.22rem;
    margin-right: 0.05rem;
    float: left;
    position: relative;
    top: -0.02rem;
}
.pubIcon {
    background: url(./img/catIcon.png) no-repeat 0 0;
    background-size: 1.50rem 1.50rem;
}
/* 空购物车 */
.catKongBox {
    text-align: center;
    margin: 100px 0;
}
.catKongBox i {
    background: url(./img/kong.png) no-repeat 0 0 62px 62px;
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
.catBomAllCheak label, .catBomAllCheak div {
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
    background-position: -85px 3px;
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
    transform: translate(0,-50%);
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
.catShopList li  .falseIcon {
    background-position: -85px 3px;
    background-size: 1.80rem 1.80rem;
}
.catShopList li  i {
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
.catShopList li .catShopInfo .catImg, .catShopList li .catShopInfo .catImgTwe {
    border: 1px solid #e8e8e8;
    position: absolute;
    position: absolute;
    top: 10px;
    left: 10px;
}
.catShopList li .catShopInfo .catImg img, .catShopList li .catShopInfo .catImgTwe img {
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
.comAmount .minus.on, .comAmount .plus.on {
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
 