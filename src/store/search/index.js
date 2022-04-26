import {getSearchList} from "@/api";

const state={
searchList:{}
}
const  mutations={
SEARCHLIST(state,searchList){
    state.searchList=searchList;
}
}
const actions={
async searchList({commit},params={}){
    const result = await getSearchList(params);
    if(result.code===200){
        commit('SEARCHLIST',result.data);
    }
}
}
const getters={
attrsList(state) {
    return state.searchList.attrsList||[];
},
    goodsList(state){
    return state.searchList.goodsList||[];
    },
    trademarkList(state){
    return state.searchList.trademarkList||[];
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}