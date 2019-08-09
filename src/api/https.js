import http from "utils/http.js"
//正在热映
export const movie_now_api = (cityId=10)=>http("get","/api/movieOnInfoList",{cityId:cityId})

export const city_api = ()=>http("get","/api/cityList")



import axios from "axios"
//https://m.jiuxian.com
export const homePage_api =()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1565073188721&pagenum=1&tabnum=1")
//https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2
export const handle_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2",{})
export const handle_api1=()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=3")
//https://m.jiuxian.com/m_v1/goods/detailPromo/7784
export const detail_api=(id=7784)=>axios.get("https://m.jiuxian.com/m_v1/goods/detailPromo/"+id)