<template>
  <div class="ascription">
    <p class="ascription-title">企业归属</p>
    <div class="ascription-info">
      <Avatar class="ascription-avatar">陈</Avatar>
      <span>陈波</span>
    </div>
     <Button type="primary">移交</Button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ascription {
  @include flex-center;
  justify-content: space-between;
  width: 300px;
  &-info {
    @include flex-center;
  }
  &-avatar {
    margin-right: 8px;
    background-color: #2d8cf0;
  }
}
</style>

