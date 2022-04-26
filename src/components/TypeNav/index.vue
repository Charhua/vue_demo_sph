<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex"@mouseenter="enterCategory">
        <h2 class="all">全部商品分类</h2>
        <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
          <div class="sort" v-show="show" >
            <div class="all-sort-list2" @click.prevent="goSearch">
              <div class="item bo" v-for="(c1,index) in categoryList":key="c1.categoryId" :class="{
            current:currentIndex===index
          }" @mouseenter="changeIndex(index)">
                <h3>
                  <a  href="":data-categoryName="c1.categoryName":data-category1id="c1.categoryId">{{c1.categoryName}}</a>
                </h3>
                <!--二三级菜单-->
                <div class="item-list clearfix" :style="{display:currentIndex===index?'block':'none'}">
                  <div class="subitem"v-for="c2 in c1.categoryChild":key="c2.categoryId" >
                    <dl class="fore">
                      <dt>
                        <a href="" :data-categoryName="c2.categoryName":data-category2id="c2.categoryId">{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild":key="c3.categoryId">
                          <a href="":data-categoryName="c3.categoryName":data-category3id="c3.categoryId">{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </transition>

      </div>

      <nav class="nav">
        <a>服装城</a>
        <a>美妆馆</a>
        <a>尚品汇超市</a>
        <a>全球购</a>
        <a>闪购</a>
        <a>团购</a>
        <a>有趣</a>
        <a>秒杀</a>
      </nav>

    </div>
<!--    {{categoryList}}-->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import login from "@/pages/Login"
import throttle from 'lodash/throttle'
import 'animate.css'
export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      show:false
    }
  },
  mounted() {

    if(this.$route.path=='/home'){
      this.show=true;
    }
  },computed:{
    ...mapState({
      //计算属性被使用时才会调用
      categoryList:state=>state.home.categoryList
    })
  },
  methods:{
    //鼠标进入
    changeIndex:throttle(function (index){
      this.currentIndex=index
    },55),
    //鼠标离开
    leaveIndex(){
      this.currentIndex=-1;
      if(this.$route.path!=='/home'){
        this.show=false;
      }
    },

  //  search页面实现鼠标事件
    enterCategory(){
       if(this.$route.path!=='/home'){
         this.show=true;
       }
    },

  //  利用事件委派+路由传参+自定义属性实现点击跳转
    goSearch(e){
      const element=e.target
      const {categoryname,category1id,category2id,category3id} = element.dataset;
      if(categoryname){
       let location={
         name:'search',
         query:{
           categoryName:categoryname
         }
       }
       if(category1id){
         location.query.categoryId=category1id;
       }else if(category2id){
         location.query.categoryId=category2id;
       }else {
         location.query.categoryId=category3id;
       }
       if(this.$route.params){
         location.params=this.$route.params;
       }
       this.$router.push(location)
      }

    }
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;

.all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.nav {
a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
}

.sort {
  position: absolute;
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;

.all-sort-list2 {
.item {
h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;

a {
  color: #333;
}
}

.item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;

.subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;

dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;

&.fore {
   border-top: 0;
 }

dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}

dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;

em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
}
}
}
}
//鼠标进入显示二三级
//&:hover {
//.item-list {
//  display: block;
//}
//}
}
  .current{
    background-color: skyblue;
  }
}
}
}
}
</style>