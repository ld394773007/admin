<template>
  <el-container>
    <el-header>
      <div class="header">
        <img class="logo"
             src="/static/images/创建企业_团队/u116.png">
        <el-menu class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">产品</el-menu-item>
          <el-menu-item index="2">价格</el-menu-item>
          <el-menu-item index="1">解决方案</el-menu-item>
        </el-menu>
        <div class="nav-action">
          <el-button type="primary"
                     @click="$router.push('/login')"
                     round>登陆</el-button>
          <el-button @click="$router.push('/register')" round>免费使用</el-button>
        </div>
      </div>
    </el-header>
    <el-main>

    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleSelect () {

    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @include flex-center;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 20px;
  .logo {
    width: 140px;
  }
}
</style>
