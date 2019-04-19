<template>
  <div class="enterprise continar">
    <div class="enterprise-left">
      <Menu active-name="1-1" class="enterprise-menu" theme="light" :open-names="['1', '2']">
        <Submenu name="1">
          <template slot="title">
            基础信息
          </template>
          <MenuItem name="1-1" :to="{'name': 'enterpriseInfo'}"><i class="iconfont icon-qiyegongchangjianzhu"></i>企业信息</MenuItem>
          <MenuItem name="1-2" :to="{'name': 'enterprisePay'}"><i class="iconfont icon-paydot"></i>付费信息</MenuItem>
          <MenuItem name="1-3" :to="{'name': 'enterpriseAscription'}"><i class="iconfont icon-chengyuan1"></i>企业归属</MenuItem>
          <MenuItem name="1-4" :to="{'name': 'enterpriseDelete'}"><i class="iconfont icon-delete"></i>删除企业</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            权限信息
          </template>
          <MenuItem name="2-1" :to="{'name': 'enterprisePower'}"><i class="iconfont icon-ic_opt_feature"></i>企业权限</MenuItem>
          <MenuItem name="2-2" :to="{'name': 'enterpriseProject'}"><i class="iconfont icon-quanxianziyuanguanli"></i>项目权限</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="enterprise-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.enterprise {
  display: flex;
  width: 1300px;
  margin-top: 20px;
  margin-bottom: 20px;
  &-menu {
    width: 100% !important;
  }
  &-left {
    margin-right: 20px;
    width: 300px;
    height: calc(100vh - 90px);
    background-color: #fff;
  }
  &-right {
    flex: 1;
    padding: 30px 20px;
    background-color: #fff;
  }
}
</style>
