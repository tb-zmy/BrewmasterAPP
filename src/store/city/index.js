import {city_list_api} from "api/jiuxian"
const state={
    all:{},
    province:[],
    market:[],
    town:[]
}
const mutations={
    handleGetCityMutation(state,params){
        // console.log(params);
        state.all=params;
        state.province=params[1];
        // console.log(state.all);
    }

}
const actions = {
    async handleGetCityAction({commit}){
        let data = await city_list_api();
        commit("handleGetCityMutation",data.data)
    }
}
export default{
    state,
    mutations,
    actions,
    namespaced:true
}