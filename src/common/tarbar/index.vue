<template>
  <div class="footer">
    <ul>
      <router-link
        v-for="(item,index) in navs"
        :key="index"
        :to="item.path+'/'+item.title"
        tag="li"
      >
        <img :src="item.icon" />
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TarBar",
  data() {
    return {
      navs: [
        {
          title: "酒仙",
          path: "/jiuxian",
          icon:
            "https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png"
        },
        {
          title: "列表",
          path: "/mainlist",
          icon:
            "https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png"
        },
        {
          title: "裸价清仓",
          path: "/active",
          icon:
            "https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png"
        },
        {
          title: "购物车",
          path: "/carts",
          icon:
            "https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png"
        },
        {
          title: "个人中心",
          path: "/mine",
          icon:
            "https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png"
        }
      ]
    };
  }
};
</script>
<style>
.footer {
  width: 100%;
  height: 0.42rem;
  border-top: 1px solid #cccccc;
  background: #f1f1f1;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.footer ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.footer li {
  display: flex;
  flex-direction: column;
  width: 0.42rem;
  height: 0.42rem;
}
.footer img {
  width: 0.42rem;
  height: 0.42rem;
}
</style>
