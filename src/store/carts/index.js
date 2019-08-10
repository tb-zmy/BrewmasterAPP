const state = {
    // goods: [],
    savelist: [],
    selectedAll: true,
    // pageNum:1,
    detailslist: []
}

const actions = {
    getGoodsAction({ commit }, params) {
        params.flag = true
        params.num = 1
        commit("getGoodsMutations", params)
        // console.log(params)
    },
    getdetailslistAction({ commit }, params) {
        commit("getdetailslistMutation", params)
    }
}

const mutations = {
    getGoodsMutations(state, params) {
        state.savelist.push(params)
        console.log(state.savelist)
    },
    handleReduce(state, index) {
        if (state.savelist[index].num > 1) {
            state.savelist[index].num--
        }
    },
    handleAdd(state, index) {
        state.savelist[index].num++;
        // console.log(state.savelist[index].num)
    },
    handlegoodsSelected(state, index) {
        state.savelist[index].flag = !state.savelist[index].flag;
        console.log(state.savelist[index].flag)
        var bStop = true;

        for (var i = 0; i < state.savelist.length; i++) {
            if (!state.savelist[i].flag) {
                bStop = false;
                break;
            }
        }
        state.selectedAll = bStop;
    },
    handlegoodsDel(state, index) {
        confirm('确定删除该商品吗？')
        state.savelist.splice(index, 1)
    },
    handleSelectedChange(state) {
        state.selectedAll = !state.selectedAll;
        console.log(state.selectedAll)
        state.savelist.flag = state.selectedAll
        console.log(state.savelist.flag)
    },
    getdetailslistMutation(state, params) {
        if (state.detailslist.length) {
            for (var i = 0; i < state.detailslist.length; i++) {
                if (item.id == state.detailslist[i].id) {
                    state.detailslist[i].num++
                } else {
                    state.detailslist.push(params)
                    console.log(state.detailslist)
                }
            }
        }else{
            state.detailslist.push(params)
        }
    }
}
const getters = {
    goodsCount(state) {
        let goodsNum = 0, goodsPrice = 0;

        for (var i = 0; i < state.savelist.length; i++) {
            if (state.savelist[i].flag) {
                goodsNum += state.savelist[i].num;
                goodsPrice += state.savelist[i].num * state.savelist[i][3];
            }
        }

        return {
            goodsNum,
            goodsPrice
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}