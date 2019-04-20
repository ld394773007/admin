<template>
  <div class="help container">
    <div class="help-left">
      <Menu active-name="1-1" class="help-menu" theme="light" :open-names="['1', '2']">
        <Submenu name="1">
          <template slot="title">
            账号相关
          </template>
          <MenuItem name="1-1" :to="{'name': 'accountList'}">账号相关</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            基础功能
          </template>
          <MenuItem name="1-2" :to="{'name': 'accountList'}">项目</MenuItem>
          <MenuItem name="1-3" :to="{'name': 'accountList'}">任务</MenuItem>
          <MenuItem name="1-4" :to="{'name': 'accountList'}">文件</MenuItem>
          <MenuItem name="1-5" :to="{'name': 'accountList'}">日程</MenuItem>
          <MenuItem name="1-6" :to="{'name': 'accountList'}">分享</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="help-right">
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
.help {
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
