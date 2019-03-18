<template>
  <div>
    <!--<Video></Video>-->
    <tabbar class="tab">
      <tabbar-item link="/vquery">
        <img slot="icon"  src="../assets/img/query.svg">
        <span slot="label">查询</span>
      </tabbar-item>
      <tabbar-item link="/vaccine">
        <img slot="icon" src="../assets/img/vaccine.svg">
        <span slot="label">疫苗</span>
      </tabbar-item>
      <tabbar-item link="/article">
        <img slot="icon" src="../assets/img/health.svg">
        <span slot="label">健康</span>
      </tabbar-item>
      <tabbar-item link="/info">
        <img slot="icon" src="../assets/img/mine.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: "Home",
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
  }
}
</script>

<style scoped>
  .tab{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
