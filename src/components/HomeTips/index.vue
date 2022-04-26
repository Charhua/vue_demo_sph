<template>
<!--  使用提示内容-->
  <el-collapse >
    <el-collapse-item title="项目概括" name="0">
      <div>这是一个类似于“淘宝”“京东”的在线官网商城Vue2项目。</div>
      <div>该项目按照尚硅谷Vue2实战项目教学一步步搭建，并二次开发--在原项目基础上加入部分其他交互功能。</div>
      <div>本项目二次开发作者：CharHua</div>
      <div>PS：本项目仅供学习交流使用。有疑问可联系：trk12138@163.com</div>
    </el-collapse-item>
    <el-collapse-item title="为什么有些功能用不了？" name="1">
      <div>该项目仅供学习交流使用，其仅实现商城核心功能，如商品搜索、商品列表展示、购物车、下单结算、订单管理等功能。</div>
      <div>学习者可根据需求扩展其他功能。</div>
    </el-collapse-item>
    <el-collapse-item title="该项目作者是谁？" name="2">
      <div>该项目出自尚硅谷。如需系统性学习该项目搭建可以去B站搜索学习。</div>
    </el-collapse-item>
    <el-collapse-item title="为什么有时候部分页面显示不了？" name="3">
      <div>该项目架构是前后端分离的，即页面部分数据（如搜索结果、分类目录、部分商品等）是存储在后端服务器的，而前端仅存储部分非核心数据进行展示。</div>
      <div>对于部分时间段出现页面数据加载缓慢等问题，可能由于服务器访问人数过多导致。</div>
      <div>建议多刷新几次，或间隔一段时间重试。</div>
    </el-collapse-item>
    <el-collapse-item title="该项目仅有后台管理系统吗？" name="4">
      <div>有的。去B站搜索“尚硅谷”可找到完整项目。</div>
    </el-collapse-item>
    <el-collapse-item title="有项目源码吗？" name="5">
      <div>有。地址：<a href="https://github.com/Charhua/vue_demo_sph"target="_blank">https://github.com/Charhua/vue_demo_sph</a></div>
    </el-collapse-item>
    <el-collapse-item title="有使用该项目的推荐流程吗？" name="6">
      <div>有。</div>
      <div>目前该项目首页可交互部分：登录、注册、全部商品分类、搜索框、我的订单等。其他可交互页面：购物车、搜索结果列表、商品详情头部（加入购物车按钮、放大镜）、下单结算、支付页面等。</div>
      <div>建议搜索商品或点击分类后，选择一款商品，进入商品详情并加入购物车，结算支付。</div>
    </el-collapse-item>
    <el-collapse-item title="商品结算后的微信支付二维码是真的吗？" name="7">
      <div>是真的。</div>
      <div>由于实际支付功能为可用状态。为方便测试，已将支付成功跳转限制解除，弹出支付二维码后可直接点击“已完成支付”。</div>
    </el-collapse-item>
    <el-collapse-item title="有提供测试账号吗？" name="8">
      <div>有的。</div>
      <div>账号：13700000000</div>
      <div>密码：111111</div>
      <div>也可以自己注册账号使用哦。</div>
    </el-collapse-item>
    <el-collapse-item title="里面商品数据都是真的吗？" name="9">
      <div>假的。</div>
      <div>该项目所有商品数据都是虚拟的，仅供学习交流用途。</div>
    </el-collapse-item>
    <el-collapse-item title="该项目用什么框架\技术？" name="10">
      <div>该项目基于Vue2开发。</div>
      <div>该项目用很多vue生态插件。如官方的Vue-Router、Vuex、Vue-Cli，以及其他如vue-lazyload图片懒加载、vee-validate表单验证库、animate.css动画库、防抖节流等。</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: "HomeTips"
}
</script>

<style scoped>

</style>