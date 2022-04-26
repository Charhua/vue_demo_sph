<template>
  <div class="pagination">
    <button :disabled="pageNo==1"@click="clickPage(pageNo-1)">上一页</button>
    <button v-if="firstBtn"
            @click="clickPage(1)"
            :class="{
              active:pageNo==1
              }">1</button>
    <button v-if="startOmiBtn">···</button>

    <button v-for="(page,index) in startAndEndNum.end"
            :key="index"
            v-if="page>=startAndEndNum.start"
            @click="clickPage(page)"
            :class="{
              active:pageNo==page
            }"
    >
      {{page}}
    </button>

    <button v-if="endOmiBtn">···</button>
    <button v-if="endBtn"
            @click="clickPage(totalPage)"
            :class="{
              active:pageNo==totalPage
            }"

    >{{totalPage}}</button>
    <button :disabled="pageNo==totalPage" @click="clickPage(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>

</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage() {
      return Math.ceil(this.total/this.pageSize);
    },
    startAndEndNum(){
      const {continues,pageNo,totalPage}=this;
      //临时变量
      let start=0,end=0;
      //连续页面多于总页面时处理
      if(continues>totalPage){
        start=1;
        end=totalPage;
      }else{
      //  总页面大于连续页时，为正常情况
        start=pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //当选择页面为1时，处理以上出现的start为0,-1页码问题
        if(start < 1){
          start =1;
          end=continues;
        }
      //  处理以上出现的end超过总页数问题
        if(end>totalPage){
          end=totalPage;
          start=totalPage-continues + 1;
        }

      }
      return {start,end}
    },
  //  控制分页按钮显示，以布尔值控制
  //   前省略符号前的第一页按钮
    firstBtn(){
      return this.startAndEndNum.start > 1;
    },
  //  前后省略按钮
    startOmiBtn(){
      return this.startAndEndNum.start > 2;
    },
    endOmiBtn(){
      return this.startAndEndNum.end < this.totalPage - 1;
    },
  //  后省略按钮的最后一页
    endBtn(){
return this.startAndEndNum.end < this.totalPage;
    }
  },
  methods:{
  //  获取父组件自定义事件，并传递当前点击的页码
    clickPage(pageNo){
      this.$emit('getPageNo',pageNo)
    }

  }
}
</script>

<style scoped lang="less">
.pagination {

button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;

&[disabled] {
   color: #c0c4cc;
   cursor: not-allowed;
 }

&.active {
   cursor: not-allowed;
   background-color: #409eff;
   color: #fff;
 }
}
}

</style>