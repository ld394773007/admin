<template>
  <div class="delete">
    <p class="delete-title">一旦你删除了企业，企业内所有的项目，部门，成员，项目中所有内容等都会永久删除，这是一个不可恢复的操作，请谨慎对待！</p>
    <el-button type="danger" plain>删除企业</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.delete {
  &-title {
    margin-bottom: 20px;
    color: #F56C6C;
  }
}
</style>
