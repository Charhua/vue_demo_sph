import {reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister} from "@/api";
import { setToken,getToken, removeToken} from "@/utils";

const state={
     code:'',
    token:getToken(),
    userInfo:{}
}
const mutations={
GETCODE(state,data){
state.code=data;
},
    USERLOGIN(state,data){
    state.token=data;
    },
    GETUSERINFO(state,data){
    state.userInfo=data;
    },
    CLEARUSERINFO(state){
    removeToken();
    state.token='';
    state.userInfo={};

    }
}
const actions={
//    获取验证码
   async getCode({commit},phone){
       const result=await reqGetCode(phone);
       if(result.code==200){
           commit('GETCODE',result.data);
           return 'SUCCESS';
       }else {
           return Promise.reject(new Error('FAIL'));
       }
    },
//    提交注册
    async onRegister({commit},data){
       const result=await reqUserRegister(data);
        console.log(result)
       if(result.code==200){
           return 'SUCCESS';
       }else {
           return Promise.reject(new Error('FAIL'));
       }
    },
//    登录
   async userLogin({commit},data){
       const result =await reqUserLogin(data);
       // console.log('登录：',result)
       if(result.code==200){
           commit('USERLOGIN',result.data.token);
           setToken(result.data.token);
           return 'SUCCESS';
       }else {
           return Promise.reject(new Error('FAIL'));
       }
    },
//    获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            // console.log('成功获取用户数据')
            //提交用户信息
            commit("GETUSERINFO", result.data);
            return 'SUCCESS';
        }else{
            return Promise.reject(new Error('FAIL'));
        }
    },
//    退出登录
    async userLogout({commit}) {
        //只是向服务器发起一次请求，通知服务器清除token
        let result = await reqLogout();
        //action里面不能操作state，提交mutation修改state
        if(result.code==200){
            commit("CLEARUSERINFO");
            return 'SUCCESS';
        }else{
            return Promise.reject(new Error('FAIL'));
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