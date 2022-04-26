import {reqAddressInfo, reqOrderInfo} from "@/api";

const state={
    addressInfo:[],
    orderInfo:{}
}
const mutations={
    GETADDRESSINFO(state,data){
        state.addressInfo=data;
    },
    GETORDERINFO(state,data){
        state.orderInfo = data;
}
}
const actions={
    //获取用户地址
    async getAddressInfo({commit}){
        const result=await reqAddressInfo();

        if (result.code==200){
            commit('GETADDRESSINFO',result.data);
            return 'SUCCESS'
        }else {
            // console.log('1')
            return Promise.reject(new Error('FAIL'))
        }
    },
    //获取商品清单数据
    async getOrderInfo({commit}) {
        const result = await reqOrderInfo();
        // console.log('测试',result)
        if(result.code==200){
            commit("GETORDERINFO",result.data);
            return 'SUCCESS'
        }else {
            // console.log('2')
            return Promise.reject(new Error('FAIL'))
        }
    },
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}