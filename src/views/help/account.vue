<template>
  <div class="info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/help' }"><span class="breadcrumb-text">账号相关</span></el-breadcrumb-item>
      <el-breadcrumb-item><span class="breadcrumb-text">注册账号</span></el-breadcrumb-item>
    </el-breadcrumb>
    <h2>注册账号</h2>
    <div class="info-item">
      <p class="info-item-title">一、注册账号</p>
      <p>推荐使用 IE 10 以上版本、火狐浏览器、Safari 和 Chrome 浏览器访问 Teambition 。</p>
      <p class="info-item-subtitle">1. 使用邮箱注册</p>
      <p>输入邮箱名，填写姓名（为方便同事辨认，建议使用真实姓名）和密码。完成后，系统会自动发送验证邮件到邮箱，你可以登录邮箱进行验证。输入邮箱名，填写姓名（为方便同事辨认，建议使用真实姓名）和密码。完成后，系统会自动发送验证邮件到邮箱，你可以登录邮箱进行验证。</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.info {
  .breadcrumb-text {
    font-size: 12px;
  }
  h2 {
    margin-top: 20px;
    font-size: 12px;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .info-item {
    &-title {
      font-size: 12px;
    }
    &-subtitle {
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>
