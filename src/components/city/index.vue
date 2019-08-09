<template>
  <div class="city">
    <div class="depit_citydrp" style="height: 717px; display: block;">
      <h5 class="h5_dptctdrp">
        <a href="javascript:;" pid="5">
          <em>甘肃省</em>
          <i></i>
        </a>
        <!-- 省 -->
        <a href="javascript:;" pid="64" class>
          <em>定西市</em>
          <i></i>
        </a>
        <!-- 市 -->
        <a href="javascript:;" pid="617" class>
          <em>临洮县</em>
          <i></i>
        </a>
        <!-- 县 -->
      </h5>
      <ul class="dptctdrp_list dptctdrp_list2" v-show="show1">
        <li style="padding:0px 0px;" v-for="(item,index) in province" :key="index">
          <a href="javascript:;" pid="2">{{item[1]}}</a>
        </li>
      </ul>
      <!-- 省名 -->
      <ul class="dptctdrp_list" v-show="show2">
        <li style="padding:0px 0px;">
          <a href="javascript:;" pid="62">兰州市</a>
        </li>
      </ul>
      <!-- 省会名 -->
      <ul class="dptctdrp_list" v-show="show3">
        <li style="padding:0px 0px;">
          <a href="javascript:;" pid="617">临洮县</a>
        </li>
      </ul>
      <!-- 县名 -->
    </div>
  </div>
</template>
<script>
// import {city_list_api} from "api/jiuxian"
import { mapState, mapActions } from "vuex";
export default {
  name: "City",
  data() {
    return {
      show1: true,
      show2: false,
      show3: false
    };
  },
  async created() {
    // let data = await city_list_api();
    // console.log(data.data[1]);
    this.handleGetCityAction();
    // console.log(111)
  },
  methods: {
    ...mapActions({
      handleGetCityAction: "city/handleGetCityAction"
    })
  },
  computed: {
    ...mapState({
      province: state => state.city.province,
    })
  }
};
</script>
<style>
.depit_citydrp {
  padding: 10px;
  width: 80%;
  position: fixed;
  overflow: hidden;
  right: 0;
  top: 0;
  background: #fff;
  z-index: 100001;
}
.h5_dptctdrp {
  display: none;
  border-bottom: 1px solid #e8e8e8;
  line-height: 28px;
  font-size: 100%;
  font-weight: normal;
  position: relative;
  z-index: 22;
  height: 28px;
  width: 300%;
}
.h5_dptctdrp a {
  display: inline-block;
  vertical-align: top;
  padding: 0 10px;
  background-color: #fff;
  cursor: pointer;
}
.h5_dptctdrp a em {
  font-style: normal;
  float: left;
  display: inline-block;
}
.h5_dptctdrp a i {
  float: left;
  display: inline-block;
  background-position: -384px -70px;
  width: 6px;
  height: 4px;
  margin: 9px 0 0 5px;
  overflow: hidden;
}
.dptctdrp_list2 {
  padding: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.dptctdrp_list2 li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e0e0e0;
}
.dptctdrp_list li a {
  display: block;
}
.dptctdrp_list {
  padding: 5px 4px;
  height: 90%;
  overflow-x: hidden;
  overflow-y: scroll;
  zoom: 1;
  position: relative;
  z-index: 20;
}
.dptctdrp_list li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e0e0e0;
}
</style>
