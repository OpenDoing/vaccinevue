<template>
  <div>
    <tabbar class="tab">
      <tabbar-item link="/admin/user">
        <img slot="icon"  src="../../assets/img/mine.svg">
        <span slot="label">用户</span>
      </tabbar-item>
      <tabbar-item link="/admin/vaccine">
        <img slot="icon" src="../../assets/img/vaccine.svg">
        <span slot="label">疫苗</span>
      </tabbar-item>
      <tabbar-item link="/admin/article">
        <img slot="icon" src="../../assets/img/health.svg">
        <span slot="label">文章</span>
      </tabbar-item>
      <tabbar-item link="/admin/company">
        <img slot="icon" src="../../assets/img/ins.svg">
        <span slot="label">保险</span>
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
