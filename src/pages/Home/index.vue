<template>
<div>
<!--  三级联动全局组件：导航-->
  <TypeNav></TypeNav>

  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="floor in floorList":key="floor.id":list="floor"></Floor>
  <Brand></Brand>
</div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Rank from "@/pages/Home/Rank";
import Recommend from "@/pages/Home/Recommend";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";
export default {
  name: "Home",
  components:{
    ListContainer,
    Rank,
    Recommend,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  },
  mounted() {
    this.$store.dispatch('floorList');
  }
}
</script>

<style scoped>

</style>