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
  position: absolute;
  top: 48px;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 1200px;
  align-items: flex-start;
  margin: 0 auto;
  background-color: #ededed;
  overflow-y: auto;
}
</style>

