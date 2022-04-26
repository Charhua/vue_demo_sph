import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from "@/router/routers";
import store from "@/store";
import {vue} from "@/main";
Vue.use(VueRouter)
const router=new VueRouter({
    routes:routers,
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
    }

});
router.beforeEach(async (to,from,next)=>{
//    路由前置守卫，设置路由跳转条件
   const token=store.state.user.token;
   const name=store.state.user.userInfo.name;
   //用户已登录
   if(token){
       // console.log('已登录')
   //    登录后想去登录界面时，重定向到首页
       if(to.path=='/login'||to.path=='./register'){
           next('/');
       }else{
           if(name){
           //    已登录，有用户信息时放行
               next();
           }else {
               //    登录后无用户信息，路由跳转前获取用户信息
               try{
                   await store.dispatch('getUserInfo');
                   next();
               }catch (err){
                   //    此时token已失效，清除信息后，重新登录
                   await store.dispatch('userLogout');
                   next('/login');
               }

           }
       }

   }else{
    //  未登录路由导向,不能去交易、支付相关、个人中心等。
       let toPath =to.path;
       if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
           //提示登录
           vue.$message({
               type:'info',
               message:'请先登录！',
               duration:3000,
               center:true
           });
           //定向到登录页，并携带query参数，以便重定向到来处。
           next('/login?redirect='+toPath);
       }else {
           //去的不是上面这些路由（home|search|shopCart）---放行
           next();
       }

   }
})

export default router;