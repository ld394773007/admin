<template>
  <el-container>
    <el-header>
      <div class="header">
        <img class="logo"
             src="/static/images/logo.svg">
        <div class="nav-list">
          <div class="nav-item">产品</div>
          <div class="nav-item">价格</div>
          <div class="nav-item">解决方案</div>
          <div class="nav-item">客户案例</div>
        </div>
        <div class="nav-action">
          <router-link to="/login" class="login-btn btn">登录</router-link>
          <button class="register-btn btn"
                  @click="$router.push('/register')">免费使用</button>
        </div>
      </div>
    </el-header>
    <div></div>
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
  margin: 0 auto;
  height: 64px;
  max-width: 1200px;
  justify-content: space-between;
  .logo {
    width: 140px;
  }
  .nav-list {
    @include flex-center;
  }
  .nav-item {
    @include flex-center;
    margin-right: 12px;
    padding: 12px 16px;
    height: 42px;
    font-size: 16px;
    color: #383838;
    cursor: pointer;
    &:hover {
      color: #3da8f5;
    }
  }
  .btn {
    padding: 0 28px;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    color: #383838;
    cursor: pointer;
    &:hover {
      color: #3da8f5;
    }
  }
  .register-btn {
    box-shadow: 0 2px 8px rgba(36, 100, 147, 0.15);
    border: 1px solid #3da8f5;
    border-radius: 26px;
    color: #3da8f5;
    transition: all .3s;
    &:hover {
      box-shadow: 0 6px 18px rgba(36,100,147,.15);
    }
  }
}
</style>
