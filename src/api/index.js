import {requests} from './request'
import {mockRequests} from "./mockAjax";

export const getCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const getBannerList=()=>mockRequests({url:'/banner',method:'get'});
export const getFloorList=()=>mockRequests({url:'/floors',method:'get'});
export const getSearchList=(params)=>requests({
    url:'/list',
    method:'post',
    data:params
})
//请求商品详情信息
export const getGoodList=(skuId)=>requests({
    url:`/item/${ skuId }`,
    method:'get'
})
//添加购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"});
//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = ()=>requests({url:'/cart/cartList ',method:'get'});
//删除购物产品的接口
//URL:/api/cart/deleteCart/{skuId}   method:DELETE
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});
//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});
//注册
//url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'});
//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});
//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});
//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

//获取个人中心的数据
//api/order/auth/{page}/{limit}  get
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});