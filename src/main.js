import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from "router"
import VueTouch from "vue-touch"
import "common/components/index.js"
Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
import VueWechatTitle from "vue-wechat-title"
Vue.use(VueWechatTitle)
// router.beforeEach((to,from,next)=>{
//   if(to.meta.title){
//       document.title=to.meta.title
//   }
//   next()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
