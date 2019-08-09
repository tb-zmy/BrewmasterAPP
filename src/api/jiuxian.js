import axios from "axios"
//代替红酒
export const jiuxian_list_api =()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=2")
// 清仓
// export const active_list1_api =(pageNum=1)=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?",{pageNum:pageNum})
export const active_list1_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=1")
export const active_list2_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2")
export const active_list3_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=3")
export const active_list4_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=4")
export const active_list5_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=5")
export const active_list9_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=6")
// summer
export const active_list6_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151890?pageNum=1")
export const active_list7_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151890?pageNum=2")
export const active_list8_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151890?pageNum=3")
// city
export const city_list_api =()=>axios.get("https://m.jiuxian.com/m_v1/goods/getRegions")
// kinds
export const kinds_list_api =()=>axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/150393?pageNum=3")

