import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
export const mockRequests=axios.create({
    baseURL:'/mock',
    timeout:5000
})
//请求拦截器
mockRequests.interceptors.request.use((config)=>{
    console.log('hhh')
    nprogress.start();
    return config

})
//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(err)=>{
    return Promise.reject(new Error('false'))
})