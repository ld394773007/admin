<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

i {
  font-style: normal;
}

a {
  color: #303133;
  text-decoration: none;
}

.el-menu{
  border: none !important;
}
.is-plain {
  background-color: #fff !important;
}
.el-button--primary.is-plain {
  color: #409EFF !important;
}

.continar {
  width: 97%;
  height: calc(100vh - 100px);
}
.fa,.fas,.far,.fab {
  font-size: 20px;
  margin-right: 8px;
}
.flex-center {
  @include flex-center;
}

.flex-start {
  justify-content: flex-start;
}
</style>
