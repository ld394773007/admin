<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/nav'
export default {
  components: {
    headerNav
  }
}
</script>

<style lang="scss" scoped>
.body {
  @include flex-center;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #F2F6FC;
}
</style>

