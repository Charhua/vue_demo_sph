<template>
  <div id="app">
<!--    头部-->
<Header></Header>
<!--    路由组件-->
    <router-view></router-view>
<!--    使用提示右侧弹出占位-->
    <el-drawer
        title="使用提示"
        :visible.sync="drawer"
        >
      <div class="drawer-tips-view">
        <HomeTips></HomeTips>
      </div>
    </el-drawer>
<!--    使用提示悬浮按钮-->
    <div class="tips" v-if="!drawer"@click="showDrawer"><span>使用提示</span></div>
<!--    底部-->
    <Footer v-show="showFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeTips from "@/components/HomeTips";
//引入消息提示记录存储
import {setTipsRecord,getTipsRecord} from "@/utils";

export default {
  name: 'App',
  components: {
Header,
    Footer,
    HomeTips
  },
  data(){
    return{
      drawer:false
    }
  },
  computed:{
  //  是否展示底部
    showFooter(){
      return this.$route.meta.showFooter;
    }
  },
  mounted(){
    console.log('APP运行');
    //APP入口提示
this.enterTips();
    //初始化分类
    this.$store.dispatch('categoryList');
  },
  methods:{
    showDrawer(){
      this.drawer=true;
    },
    enterTips(){
    //  每次打开会话提示，仅提示2次
    const result=getTipsRecord();
    if(!result){
      this.$message({
        type:'info',
        message:'初次使用请点击右上角 “使用提示”！',
        duration:3000,
        center:true
      });
      setTipsRecord(1)
    }else if(result==1){
      this.$message({
        type:'info',
        message:'初次使用请点击右上角 “使用提示”！',
        duration:3000,
        center:true
      });
      setTipsRecord(2)
    }else {}
    }
  }
}
</script>

<style scoped>
.tips{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right:55px;
  top: 110px;
  width: 60px;
  height: 60px;
  background-color: #fdfdfd;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .1);
}
.tips:hover{
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, .1);
  color: #ea4a36;
}
.tips span{
  font-size: 10px;
  font-weight: 800;
}
.drawer-tips-view{
  margin: 10px 30px;
}
</style>
