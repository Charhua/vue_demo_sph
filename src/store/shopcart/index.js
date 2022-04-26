import {reqCartList, reqDeleteCartById, reqUpdateCheckedByid} from "@/api";
import {getUUID} from "@/utils";

const state={
    cartList: [],
}
const mutations={
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
        // console.log(cartList)
    },
}
const actions={
 //   获取购物车信息
 async getCartList({commit}){
    const result = await reqCartList();
     if (result.code == 200) {
         commit("GETCARTLIST", result.data);
     }
},
//    删除购物车某一个商品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "SUCCESS";
        } else {
            return Promise.reject(new Error("FAIL"));
        }
    },
    //修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return "SUCCESS";
        } else {
            return Promise.reject(new Error("FAIL"));
        }
    },
//    删除购物车选中的商品
    deleteAllCheckedCart({dispatch,getters}){
     let PromiseAll=[];
     getters.cartList.cartInfoList.forEach((item)=>{
         let promise=item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';
         //遍历符合选中状态的商品到Proise数组中
         PromiseAll.push(promise);
     });
     return Promise.all(PromiseAll);

    },
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach((item)=>{
        let promise=    dispatch('updateCheckedById',{
                skuId:item.skuId,
                isChecked:isChecked
            });
        promiseAll.push(promise);
        });
        return Promise.all(promiseAll);

    }

}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}