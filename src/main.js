import Vue from 'vue'
import App from './App.vue'
//注册全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
//引入mock模拟服务器数据
import './mock/mockServer';
import 'swiper/swiper-bundle.min.css';
//网络请求接口
import * as API from '@/api';
//引入elemenUI组件
import {Message, MessageBox,Drawer,Collapse,CollapseItem} from 'element-ui';

//引入图片懒加载
import VueLazyload from 'vue-lazyload';
//引入懒加载图片
import loading_img from '@/assets/images/loading.png';
import load_err from '@/assets/images/load_error.png';
//引入表单验证
import '@/plugins/validate';

Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
Vue.config.productionTip = false;
//注册UI组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.use(Drawer);
Vue.use(Collapse);
Vue.use(CollapseItem);
//注册图片懒加载插件
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  error: load_err,
  loading: loading_img,
  // attempt: 1
});
//引入动画库
import 'animate.css';

//路由
import router from './router/index'
//状态管理
import store from './store'
const vue=new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  }
}).$mount('#app');
export {
  vue
}
