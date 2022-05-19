import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
import store from "@/store";
export const requests=axios.create({
    baseURL:'http://gmall-h5-api.atguigu.cn/api',
    timeout:5000
})
//请求拦截器
requests.interceptors.request.use((config)=>{
   if(store.state.detail.userUUID){
       config.headers.userTempId=store.state.detail.userUUID;
       // console.log('临时ID附加请求头请求')
   }
   if(store.state.user.token){
       config.headers.token=store.state.user.token;
       // console.log('带token请求')
   }
    // console.log('发送请求')
    nprogress.start();
    return config

})
//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(err)=>{
    return Promise.reject(new Error('false'))
})
