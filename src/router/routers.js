

//以下利用路由懒加载
export default [
    //重定向
    {
        path:'*',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import('@/pages/Home'),
        meta:{
            showFooter:true
        }
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:()=>import('@/pages/Search'),
        meta:{
            showFooter:true
        }
    },
    {
        path:'/login',
        component: ()=>import('@/pages/Login'),
        meta:{
            showFooter:false
        }
    },
    {
        path:'/register',
        component:()=>import('@/pages/Register'),
        meta:{
            showFooter:false
        }
    },
    {
        path:'/detail/:skuId',
        component:()=>import('@/pages/Detail'),
        meta:{
            showFooter:true
        }
    },
    {
        path:'/addcartsuccess',
        name: 'addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess'),
        meta:{
            showFooter:true
        },
        // beforeEnter(to,from,next){
        //
        // }
    },
    {
        path:'/shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta:{
            showFooter:true
        }
    },
    {
        path:'/trade',
        name:'trade',
        component: ()=>import('@/pages/Trade'),
        meta:{
            showFooter:true
        },
    //    设置独享前置路由，限制只能从购物车跳转到交易界面
        beforeEnter(to, from, next) {
            if(from.path=='/shopcart'){
                next();
            }else{
                //否则重定向原路径
                next(false);
            }
        }
    },
    {
        path:'/pay',
        component: ()=>import('@/pages/Pay'),
        meta:{
            showFooter:true
        },
        beforeEnter(to, from, next) {
            if (from.path==='/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path:'/paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        meta:{
            showFooter:true
        },
        /* 只有从支付界面, 才能跳转到支付成功的界面 */
        beforeEnter (to, from, next) {
            if (from.path==='/pay') {
                next()
            } else {
                next('/pay')
            }
        }
    },
    {
        path:'/center',
        component: ()=>import('@/pages/Center'),
        meta:{
            showFooter:true
        },
        children:[
            {
                path:'myorder',
                component:()=>import('@/pages/Center/MyOrder'),
                meta:{
                    showFooter:true
                }
            },
            {
                path:'groupOrder',
                component: ()=>import('@/pages/Center/groupOrder'),
                meta:{
                    showFooter:true
                }
            },
            {
                path: '',
                redirect: 'myorder'
            }
        ]
    }



]