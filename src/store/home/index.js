import {getBannerList, getCategoryList, getFloorList} from "../../api";

const state={
//    初始化数据
//    分类
categoryList:[],
//    轮播图
    bannerList:[],
//    floor
    floorList:[]
}
const mutations={
CATEGORYLIST(state,categoryList){
    state.categoryList=categoryList;
},
    BANNERLIST(state,bannerList){
    state.bannerList=bannerList;
    },
    FLOORLIST(state,floorList){
    state.floorList=floorList;
    }
}
const actions={
async categoryList({commit}){
    //获取分类
    const result =await getCategoryList();
    if(result.code===200){
        commit('CATEGORYLIST',result.data)
    }

},
async bannerList({commit}){
    const result=await getBannerList();
    if(result.code===200){
        commit('BANNERLIST',result.data)
    }
},
    async floorList({commit}){
    const result=await getFloorList();
    if(result.code===200){
        console.log('floor成功')
        commit('FLOORLIST',result.data)
    }
    }
}
const getters={

}
export default {
    state,
    mutations,
    actions,
    getters
}