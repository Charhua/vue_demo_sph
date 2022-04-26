import {getGoodList, reqAddOrUpdateShopCart} from "@/api";
import {getUUID} from "@/utils";

const state={
goodInfo:{},
    userUUID:getUUID()
}
const mutations={
GOODLIST(state,data){
    state.goodInfo=data;
}
}
const actions={
   async goodList({commit},id){
       const result = await getGoodList(id);
        if(result.code==200){
            console.log('获取商品详情成功')
            commit('GOODLIST',result.data);
           return'SUCCESS'
        }else {
                return Promise.reject(new Error('FAIL'))
        }
    },
//    添加购物车请求
   async updateShopCart({commit},{skuId,skuNum}){
       const result = await reqAddOrUpdateShopCart(skuId,skuNum);
       if(result.code==200){
           return 'SUCCESS';
       }else{
           return Promise.reject(new Error('添加失败，请重试'));
       }
   }

}
const getters={
categoryView(state) {
    return state.goodInfo.categoryView||{};
},
    skuInfo(state){
    return state.goodInfo.skuInfo||{};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList||[];
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}