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
  align-items: flex-start;
  margin: 0 auto;
  min-height: calc(100vh - 48px);
  background-color: #ededed;
}
</style>

