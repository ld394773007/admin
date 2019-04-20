<template>
  <div class="list">
    <h2>账号相关</h2>
    <CellGroup>
      <Cell title="注册账号" :to="{name: 'account'}" />
      <Cell title="完善账号"  :to="{name: 'account'}"/>
      <Cell title="账号偏好设置" :to="{name: 'account'}"/>
      <Cell title="保存账号密码" :to="{name: 'account'}"/>
      <Cell title="合并账号" :to="{name: 'account'}"/>
      <Cell title="如何进行域名配置" :to="{name: 'account'}"/>
      <Cell title="SSO 单点登录" :to="{name: 'account'}"/>
    </CellGroup>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list {
  h2 {
    font-size: 12px;
    margin-bottom: 20px;
  }
}
</style>
