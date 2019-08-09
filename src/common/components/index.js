import Header from "components/header"
import City from "components/city"
import Vue from "vue"
// console.log(Header.name)
import Bottomcarts from "components/bottomcarts"
import BScroll from "lib/bscroll"

Vue.component(Header.name,Header)
Vue.component(Bottomcarts.name,Bottomcarts)
Vue.component(BScroll.name,BScroll)
Vue.component(City.name,City)